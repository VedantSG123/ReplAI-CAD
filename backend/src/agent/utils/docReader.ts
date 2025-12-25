import fs from 'fs'
import path from 'path'

import type { ApiDocEntityType } from './generateApiDocsChunks'

const DOCS_DIR = path.resolve(__dirname, '../../../resources/docs/api-docs')

const entityTypeMap: Record<string, ApiDocEntityType> = {
  'classes/': 'class',
  'functions/': 'function',
  'interfaces/': 'interface',
  'type-aliases/': 'type-alias',
  'variables/': 'variable',
}

const REPLICAD_API_DOCS_BASE_URL = 'https://replicad.xyz/docs/api'

type ApiDocsData = {
  path: string
  entityType: ApiDocEntityType
  entityName: string
  source: string
}

export const getApiDocs = async (): Promise<ApiDocsData[]> => {
  const indexPath = path.join(DOCS_DIR, 'index.md')
  const content = await readFileContent(indexPath)
  const regex = /\(([^)]+\.md)\)/g
  const matches = content.match(regex) || []

  const results: ApiDocsData[] = []

  for (const match of matches) {
    const relativePath = match.slice(1, -1)

    for (const [prefix, entityType] of Object.entries(entityTypeMap)) {
      if (relativePath.startsWith(prefix)) {
        const entityName = path.basename(relativePath, '.md')
        results.push({
          path: path.join(DOCS_DIR, relativePath),
          entityType,
          entityName,
          source: `${REPLICAD_API_DOCS_BASE_URL}/${relativePath.replace(
            /\.md$/,
            '',
          )}`,
        })
        break
      }
    }
  }

  return results
}

export const readFileContent = (filePath: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
