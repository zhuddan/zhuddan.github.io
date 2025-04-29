import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

export async function getHistoryResumes() {
  const historyPath = path.join(process.cwd(), 'app', '(home)', 'resume', '[id]')
  return fs.readdirSync(historyPath)
    .filter(e => e.endsWith('.mdx'))
    .map(e => e.replace('.mdx', ''))
    .sort((a, b) => {
      return b === 'latest' ? 1 : 0
    })
}
