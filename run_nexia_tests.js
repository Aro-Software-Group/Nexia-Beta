const puppeteer = require('puppeteer');
const path = require('path');

async function runInBrowser() {
    let browser;
    try {
        console.log('Launching browser...');
        browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--no-first-run',
                '--no-zygote',
                '--disable-gpu'
            ],
            dumpio: true // Log browser process stdout/stderr
        });
        const page = await browser.newPage();

        // Comprehensive console logging
        page.on('console', msg => {
            const type = msg.type();
            const text = msg.text();
            const location = msg.location();
            const locString = location ? `(Location: ${location.url}:${location.lineNumber}:${location.columnNumber})` : '';

            // Log all console types from the browser
            if (typeof console[type] === 'function') {
                console[type](`[BROWSER CONSOLE.${type.toUpperCase()}] ${text} ${locString}`);
            } else {
                console.log(`[BROWSER CONSOLE.${type.toUpperCase()}] ${text} ${locString}`);
            }
        });

        page.on('pageerror', ({ message }) => {
            console.error(`[BROWSER PAGEERROR] ${message}`);
        });

        page.on('requestfailed', request => {
            console.error(`[BROWSER REQUESTFAILED] ${request.url()} ${request.failure().errorText}`);
        });

        page.on('load', () => {
            console.log('[PUPPETEER] Page "load" event fired.');
        });
        page.on('domcontentloaded', () => {
            console.log('[PUPPETEER] Page "domcontentloaded" event fired.');
        });


        const filePath = `file://${path.join(__dirname, 'test_nexia_app.html')}`;
        console.log(`[PUPPETEER] Navigating to ${filePath}`);

        // Using 'domcontentloaded' as it's usually sufficient for local files and less prone to timeouts
        await page.goto(filePath, { waitUntil: 'domcontentloaded', timeout: 60000 });
        console.log('[PUPPETEER] page.goto completed.');

        // Wait for a specific message indicating tests are done, or a longer timeout.
        await new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                console.warn('[PUPPETEER] Timeout waiting for "Tests finished." log.');
                resolve(); // Resolve on timeout to allow script to finish and report what it has
            }, 90000); // 90 second timeout

            page.on('console', msg => {
                if (msg.text().includes('Tests finished.')) {
                    clearTimeout(timeoutId);
                    console.log('[PUPPETEER] "Tests finished." log detected.');
                    resolve();
                }
            });
        });

    } catch (error) {
        console.error('[PUPPETEER] Error running Puppeteer script:', error);
    } finally {
        if (browser) {
            console.log('[PUPPETEER] Closing browser...');
            await browser.close();
            console.log('[PUPPETEER] Browser closed.');
        }
    }
}

runInBrowser();
