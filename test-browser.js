const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER_LOG:', msg.text()));
  page.on('pageerror', error => console.log('BROWSER_ERROR:', error.message));

  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    console.log("Page loaded successfully.");
  } catch (e) {
    console.log("Failed to load page:", e.message);
  }
  
  await browser.close();
})();
