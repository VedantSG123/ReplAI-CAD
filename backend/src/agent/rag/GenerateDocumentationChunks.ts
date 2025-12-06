export type BaseChunkType = {
  doc_type: string
  source: string
}

export type ApiDocEntityType =
  | 'class'
  | 'function'
  | 'variable'
  | 'interface'
  | 'type-alias'

export type ApiChunkMetaData = BaseChunkType & {
  entity_type: ApiDocEntityType
  entity_name: string
  chunk_type?: 'summary' | 'constructor' | 'properties' | 'method'
  group_name?: string
  member_name?: string
}

export type Chunk = {
  content: string
  metadata: ApiChunkMetaData
}

export class GenerateDocumentationChunks {
  private cleanApiDocumentation(doc: string) {
    const lines = doc.split('\n')
    const filteredLines = lines.filter(
      (line) => !line.startsWith('Defined in:'),
    )
    return filteredLines.join('\n')
  }

  private ClassSummaryMatch = /^# Class:[\s\S]*?(?=\n## Constructors)/
  private ClassConstructorMatch = /## Constructors[\s\S]*?(?=\n## |$)/
  private ClassPropertiesMatch = /## Properties[\s\S]*?(?=\n## |$)/

  private chunkClassApiDoc(doc: string, source: string, entityName: string) {
    const cleanedDoc = this.cleanApiDocumentation(doc)
    const chunks: Chunk[] = []
    let lasKnownSectionEnd = 0

    // Summary chunk
    const summaryMatch = cleanedDoc.match(this.ClassSummaryMatch)
    if (summaryMatch) {
      chunks.push({
        content: summaryMatch[0].trim(),
        metadata: {
          doc_type: 'api-documentation',
          source,
          entity_type: 'class',
          entity_name: entityName,
          chunk_type: 'summary',
        },
      })
    }

    // Constructors chunk
    const constructorMatch = cleanedDoc.match(this.ClassConstructorMatch)
    if (constructorMatch) {
      chunks.push({
        content: constructorMatch[0].trim(),
        metadata: {
          doc_type: 'api-documentation',
          source,
          entity_type: 'class',
          entity_name: entityName,
          chunk_type: 'constructor',
        },
      })

      lasKnownSectionEnd = constructorMatch.index! + constructorMatch[0].length
    }

    // Properties chunk
    const propertiesMatch = cleanedDoc.match(this.ClassPropertiesMatch)
    if (propertiesMatch) {
      chunks.push({
        content: propertiesMatch[0].trim(),
        metadata: {
          doc_type: 'api-documentation',
          source,
          entity_type: 'class',
          entity_name: entityName,
          chunk_type: 'properties',
        },
      })

      lasKnownSectionEnd = propertiesMatch.index! + propertiesMatch[0].length
    }

    // Rest all part will be methods
    const remainingContent = cleanedDoc.slice(lasKnownSectionEnd).trim()
    // Match all section headers after properties/constructors
    const groupSections = [
      ...remainingContent.matchAll(/## ([^\n]+)[\s\S]*?(?=(\n## |$))/g),
    ]

    for (const section of groupSections) {
      const groupName = section[1]
      const groupContent = section[0]

      // Each method begins with `### `
      const methodBlocks = groupContent.split(/(?=^### )/m).slice(1)

      for (const block of methodBlocks) {
        const methodNameMatch = block.match(/^###\s+([^( \n]+)/)
        const memberName = methodNameMatch
          ? methodNameMatch[1].trim()
          : 'unknown'

        chunks.push({
          content: block.trim(),
          metadata: {
            doc_type: 'api-documentation',
            source,
            entity_name: entityName,
            entity_type: 'class',
            chunk_type: 'method',
            group_name: groupName,
            member_name: memberName,
          },
        })
      }
    }

    return chunks
  }

  public chunkApiDoc(
    doc: string,
    source: string,
    entityName: string,
    type: ApiDocEntityType,
  ): Chunk[] {
    if (type === 'class') {
      return this.chunkClassApiDoc(doc, source, entityName)
    }

    const cleanedDoc = this.cleanApiDocumentation(doc)

    return [
      {
        content: cleanedDoc,
        metadata: {
          doc_type: 'api-documentation',
          source,
          entity_type: type,
          entity_name: entityName,
        },
      },
    ]
  }
}
