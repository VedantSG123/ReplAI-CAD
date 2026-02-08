import { readFile } from 'fs/promises'
import path from 'path'

const SAMPLES_DIR = path.join(process.cwd(), 'resources', 'samples')
const SCRIPT_FILENAME = 'replicad.js'

export async function getScriptContent(): Promise<string> {
  try {
    const scriptPath = path.join(SAMPLES_DIR, SCRIPT_FILENAME)
    const content = await readFile(scriptPath, 'utf-8')
    return content
  } catch (error) {
    console.error('Error reading script file:', error)
    throw new Error(
      `Failed to read script file: ${error instanceof Error ? error.message : 'Unknown error'}`,
    )
  }
}
