// Documentação do pupprtter -> https://pptr.dev/
// te amo vitão❤️

import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

import { client } from '../prisma'
puppeteer.use(StealthPlugin())

async function scraping () {
  const amtuUrl = 'https://editor.mobilibus.com/web/timetable/27b4o#'

  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(amtuUrl)

  await page.click('div.selectize-input')
  const values = await page.$$eval('div.selectize-dropdown-content > div', (result) => {
    return result.map((value) => value.getAttribute('data-value'))
  })

  values.forEach(async (value) => {
    const page = await browser.newPage()
    await page.goto(amtuUrl + value)

    const lineName = await page.evaluate(el => el.innerHTML, await page.$('.ng-binding'))
  })
}

export default scraping
