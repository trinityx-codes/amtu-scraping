import puppeteer from 'puppeteer'

// Documentação do pupprtter -> https://pptr.dev/
// te amo vitão❤️

async function main () {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('')

  await browser.close()
}

main()
