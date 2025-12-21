import pgvector from 'pgvector/pg'

import db from '../../lib/db'

export type DocumentationRow = {
  id: number
  content: string
  embedding: number[] | null
  source: string
  metadata: Record<string, unknown> | null
  created_at: Date
  updated_at: Date
}

export async function insertDocumentation(
  content: string,
  embedding: number[],
  source: string,
  metadata?: Record<string, unknown>,
): Promise<DocumentationRow> {
  const sql = `
    INSERT INTO replicad_documentation_store (content, embedding, source, metadata)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `
  const values = [content, pgvector.toSql(embedding), source, metadata || null]
  const result = await db.query<DocumentationRow>(sql, values)
  return result.rows[0]
}

export async function clearDocumentation(): Promise<void> {
  const sql = 'TRUNCATE TABLE replicad_documentation_store RESTART IDENTITY'
  await db.query(sql)
}
