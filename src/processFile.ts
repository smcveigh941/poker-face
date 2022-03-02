import { createReadStream } from 'fs'
import { createInterface } from 'readline'

export default function processFile(filePath: string) {
  const rl = createInterface({
    input: createReadStream(filePath),
    output: process.stdout,
  })
  rl.on('line', text => {
    console.log(text)
  })
}
