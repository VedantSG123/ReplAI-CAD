import axios from 'axios'

export const embedApiDocumentation = async (text: string) => {
  const resp = await axios.post<EmbeddingResponse>(
    'http://localhost:8000/v1/embeddings',
    { input: [text] },
  )
  return resp.data.data[0].embedding
}

type EmbeddingResponse = {
  data: Array<{ embedding: number[] }>
}
