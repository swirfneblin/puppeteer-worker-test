const puppeteer = require('puppeteer');

class Runner {
    constructor() {
    }

    async init(url) {
        this.browser = await puppeteer.launch({
            headless: true,
            ignoreHTTPSErrors: true,
            args: ['--no-sandbox']
        });
        this.page = await this.browser.newPage();
        await this.page.goto(url);
    }

    async screenshot() {
        await this.page.screenshot({
            path: 'example.png'
        });
    }

    async destroy() {
        await this.page.close();
        await this.browser.close();
    }
}

module.exports = Runner;