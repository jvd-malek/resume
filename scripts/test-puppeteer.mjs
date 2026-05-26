import puppeteer from 'puppeteer'
try {
  const browser = await puppeteer.launch({ headless: true })
  console.log('Puppeteer OK')
  await browser.close()
} catch (e) {
  console.log('ERR: ' + e.message)
}
