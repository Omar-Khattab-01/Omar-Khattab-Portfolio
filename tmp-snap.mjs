import { chromium } from 'playwright';
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
await page.waitForSelector('#projects', { timeout: 10000 });
await page.screenshot({ path: '/tmp/mobile-projects.png', fullPage: true });
await browser.close();
