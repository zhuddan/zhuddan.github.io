import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

export function getHistoryResumes() {
  const historyPath = path.join(process.cwd(), 'content', 'resume')
  return fs.readdirSync(historyPath)
    .map(e => e.replace('.mdx', ''))
    // .sort((a, b) => {
    //   if (a === 'latest')
    //     return 1
    //   if (b === 'latest')
    //     return -1
    //   return 0
    // })
}
