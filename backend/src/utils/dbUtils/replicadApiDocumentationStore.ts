import db from '../../lib/db'

export const insertChunk = async (chunk: ApiDocumentationChunk) => {
  await db.query(
    `INSERT INTO replicad_api_documentation_store (id, name, content, source, type, metadata)
    VALUES ($1, $2, $3, $4, $5, $6)`,
    [
      chunk.id,
      chunk.name,
      chunk.content,
      chunk.source,
      chunk.type,
      chunk.metadata,
    ],
  )
}

export const clearStore = async () => {
  await db.query('DELETE FROM replicad_api_documentation_store')
}

export const getChunkById = async (id: string) => {
  const { rows } = await db.query<ApiDocumentationChunk>(
    'SELECT * FROM replicad_api_documentation_store WHERE id = $1',
    [id],
  )
  return rows[0]
}

export type ApiDocumentationChunk = {
  id: string
  name: string
  content: string
  source: string
  type: string
  metadata?: Record<string, string>
}
