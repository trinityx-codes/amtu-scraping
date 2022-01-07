// Documentação do pupprtter -> https://pptr.dev/
// te amo vitão❤️

import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

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

  await page.goto(amtuUrl + '8etr') // value

  setInterval(async () => {
    const lineName = await page.evaluate(el => el.innerHTML, await page.$('.ng-binding'))

    const utilDay = await page.$$eval('div.first a', (result) => {
      return result.map((value) => value.textContent.replace(/[\t\n]/g, ''))
    })

    const saturday = await page.$$eval('div.middle a', (result) => {
      return result.map((value) => value.textContent.replace(/[\t\n]/g, ''))
    })

    const sunday = await page.$$eval('div.last a', (result) => {
      return result.map((value) => value.textContent.replace(/[\t\n]/g, ''))
    })
  }, 5000)
}

export default scraping
