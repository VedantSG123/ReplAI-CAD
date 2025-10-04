export function overrideBaseUrl(original: string, newBase: string): string {
  const originalUrl = new URL(original)
  const baseUrl = new URL(newBase)

  originalUrl.protocol = baseUrl.protocol
  originalUrl.host = baseUrl.host

  return originalUrl.toString()
}
