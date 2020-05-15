let puppeteer=require("puppeteer");
(async function()
{
let browser=await puppeteer.launch({
   headless:false,defaultViewport:null,
   args:["--incognito", "--start-maximized"] 
});
let pages=await browser.pages();
let page=pages[0];
await page.goto("https://www.google.com")

})();

const puppeteer = require('puppeteer')
const screenshot = 'shopping_walmart.png'
try {
  (async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.walmart.com/ip/Super-Mario-Odyssey-Nintendo-Switch/56011600', { waitUntil: 'networkidle2' })
    await page.click('button.prod-ProductCTA--primary')
    await page.waitForSelector('.Cart-PACModal-ItemInfoContainer')
    await page.screenshot({path: screenshot})
    await browser.close()
    console.log('See screen shot: ' + screenshot)
  })()
   
} catch (err) {
  console.error(err)
}
