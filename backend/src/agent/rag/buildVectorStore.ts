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

  const chunks = docs.map(({ source, content, entityType, entityName }) => {
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

getApiDocsChunks()
