import axios from 'axios'

import {
  clearDocumentation,
  insertDocumentation,
} from '../../utils/dbUtils/embeddings'
import { getApiDocs, readFileContent } from './docReader'
import { GenerateDocumentationChunks } from './GenerateDocumentationChunks'

const generateChunks = new GenerateDocumentationChunks()

const getApiDocsChunks = async () => {
  const paths = await getApiDocs()
  const docs = await Promise.all(
    paths.map(async ({ path, ...rest }) => {
      const content = await readFileContent(path)
      return { content, ...rest }
    }),
  )

  const chunks = docs.flatMap(({ source, content, entityType, entityName }) => {
    const chunks = generateChunks.chunkApiDoc(
      content,
      source,
      entityName,
      entityType,
    )

    return chunks
  })

  return chunks
}

type EmbeddingResponse = {
  data: Array<{ embedding: number[] }>
}

async function embed(text: string): Promise<number[]> {
  const resp = await axios.post<EmbeddingResponse>(
    'http://localhost:8000/v1/embeddings',
    { input: [text] },
  )
  return resp.data.data[0].embedding
}

async function main() {
  if (process.argv[2] === 'clear') {
    await clearDocumentation()
    console.log('Embeddings cleared')
    return
  }

  const chunks = await getApiDocsChunks()

  for (const chunk of chunks) {
    const embedding = await embed(chunk.content)
    await insertDocumentation(
      chunk.content,
      embedding,
      chunk.metadata.source,
      chunk.metadata,
    )
  }

  console.log('Embeddings generated and inserted')
}

main().catch(console.error)
