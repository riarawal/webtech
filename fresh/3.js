const puppeteer = require('puppeteer')
const parallel = 4;
const fs = require("fs");

(async () => {
  puppeteer.launch().then(async browser => {
    const ss = []
    for (let i = 1; i < parallel-1; i++) {
      console.log('screenshot', i)
      ss.push(browser.newPage().then(async page => {
        await page.setViewport({ width: 1000, height: 2000 })
        await page.goto('https://en.wikipedia.org/wiki/' + i)
        await page.screenshot({ path: 'screenshot' + i + '.png' })
      }))
    }
    await Promise.all(ss)
    //await browser.close()
  })
})()




