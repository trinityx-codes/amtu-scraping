// Documentação do pupprtter -> https://pptr.dev/
// te amo vitão❤️

import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
puppeteer.use(StealthPlugin())

async function scraping () {
  const amtuUrl = 'https://editor.mobilibus.com/web/timetable/27b4o'

  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(amtuUrl)

  await page.click('div.selectize-input')
}

export default scraping
