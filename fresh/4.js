const puppeteer = require("puppeteer");
const fs = require("fs");

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
	await page.goto("https://www.google.com/", { waitUntil: "networkidle2" });
	// hacky defensive move but I don't know a better way:
	// wait a bit so that the browser finishes executing JavaScript
	await page.waitFor(1 * 1000);
	const html = await page.content();
	fs.writeFileSync("index.html", html);
	await browser.close();
}

run();