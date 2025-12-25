import {
  clearStore,
  insertChunk,
} from '../../utils/dbUtils/replicadApiDocumentationStore'
import { getApiDocs, readFileContent } from './docReader'
import { generateApiDocsChunks } from './generateApiDocsChunks'

const getApiDocsChunks = async () => {
  const paths = await getApiDocs()
  const docs = await Promise.all(
    paths.map(async ({ path, ...rest }) => {
      const content = await readFileContent(path)
      return { content, ...rest }
    }),
  )

  const chunks = docs.flatMap(({ content, entityType, entityName, source }) => {
    const chunks = generateApiDocsChunks(content, entityType, entityName)

    return chunks.map((chunk) => ({
      ...chunk,
      source: source,
    }))
  })

  return chunks
}

const createApiDocsKnowledgeBase = async () => {
  await clearStore()
  const chunks = await getApiDocsChunks()
  await Promise.all(chunks.map((chunk) => insertChunk(chunk)))
}

createApiDocsKnowledgeBase()
