export class RawContentFetcher {
  private cache: Map<string, string> = new Map()

  async fetchContent(url: string): Promise<string> {
    if (this.cache.has(url)) {
      return this.cache.get(url)!
    }

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`)
      }
      const content = await response.text()
      this.cache.set(url, content)
      return content
    } catch (error) {
      throw new Error(
        `Error fetching content from ${url}: ${error instanceof Error ? error.message : 'Unknown error'}`,
      )
    }
  }
}
