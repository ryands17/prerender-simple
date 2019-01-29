const puppeteer = require('puppeteer')
const { crawler } = require('./utils/crawler')
const { saveToFile } = require('./utils/saveToFile')

async function fetchAllPages() {
  const domain = 'https://mycooleebsite.com'
  const pages = ['/', '/about']
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  for (let i = 0; i < pages.lenght; i++) {
    const html = await crawler({
      url: `${domain}${pages[i]}`,
      browser,
    })
    saveToFile({ html, pathName: pages[i] })
  }
  await browser.close()
  return true
}

fetchAllPages()
