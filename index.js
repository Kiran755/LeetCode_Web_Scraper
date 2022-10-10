const pupeteer = require('puppeteer')

const start = async () => {
    const browser = await pupeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("https://leetcode.com/accounts/login/");
    await page.waitForSelector("#id_login");
    await page.type("#id_login", "kiranDev2002");
    await page.type("#id_password", "Kiran@9967472799", { delay: 100 });
    await page.waitForSelector("#signin_btn");
    await page.click("#signin_btn");
    await page.waitForSelector("#navbar-root");
    await page.waitForSelector(".navbar-left-container__3-qz");
    await page.click(".navbar-left-container__3-qz > div:nth-child(3)");
    await page.waitForSelector('.relative.flex.mb-1');
    await page.click(".relative.flex.mb-1 > div:nth-child(2)")
    await page.waitForSelector(".relative.flex.mb-1");
    await page.click(".relative.flex.mb-1 > div:nth-child(1)>div:nth-child(4)");

    await page.waitForSelector(".reactable-data");
    const data = await page.evaluate(() => {
        const table_divs = Array.from(document.querySelectorAll('table tr td:nth-child(3) > div a'));
        return table_divs.map(item => item.getAttribute("href"));
    })
    console.log(data);
    let rand_index = Math.floor(Math.random() * data.length); // any index between 0 and data.length
    console.log(data[rand_index]);
    await page.click(`table tr:nth-child(${rand_index}) td:nth-child(3)`);
}

start();
