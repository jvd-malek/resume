import puppeteer from 'puppeteer'
import { createServer } from 'http'
import { readFileSync, existsSync, mkdirSync } from 'fs'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const root = join(__dirname, '..')
const distDir = join(root, 'dist')
const outputDir = join(root, 'public')

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.svg': 'image/svg+xml',
}

function serveDist() {
  return new Promise(resolve => {
    const server = createServer((req, res) => {
      let filePath = join(distDir, req.url === '/' ? 'index.html' : req.url)
      try {
        const data = readFileSync(filePath)
        const ext = extname(filePath)
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' })
        res.end(data)
      } catch {
        // try public folder for resume files
        try {
          const publicPath = join(root, 'public', req.url)
          const data = readFileSync(publicPath)
          const ext = extname(publicPath)
          res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' })
          res.end(data)
        } catch {
          res.writeHead(404)
          res.end('Not found')
        }
      }
    })
    server.listen(0, () => {
      const port = server.address().port
      console.log('Server on port', port)
      resolve({ server, port })
    })
  })
}

async function generatePDF(browser, url, outputPath) {
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
  await page.pdf({
    path: outputPath,
    format: 'A4',
    margin: { top: '0', bottom: '0', left: '0', right: '0' },
    printBackground: true,
  })
  console.log('PDF saved:', outputPath)
  await page.close()
}

const { server, port } = await serveDist()

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

await generatePDF(browser, `http://localhost:${port}/resume-en.html`, join(outputDir, 'javad-malekian-resume.pdf'))
await generatePDF(browser, `http://localhost:${port}/resume-fa.html`, join(outputDir, 'javad-malekian-resume-fa.pdf'))

await browser.close()
server.close()
console.log('Done! PDFs generated.')
