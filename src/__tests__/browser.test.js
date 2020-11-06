const puppeteer = require('puppeteer-core');
var browser;

function waitForLogin(loginPage) {
  return new Promise((resolve, reject) => {
    loginPage.on('domcontentloaded', () => {
      if (loginPage.url().startsWith('http://localhost:3000/admin')) {
        resolve();
      }
    });
  });
}

describe('End to end Flex plugin testing', () => {
  beforeAll(async () => {
    jest.setTimeout(600000);
    browser = await puppeteer.launch({
      defaultViewport: null,
      headless: false,
      args: ['--start-maximized'],
      executablePath:
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    });
    const loginPage = await browser.newPage();
    await loginPage.goto(`http://localhost:3000/`);
    await waitForLogin(loginPage);
  });

  afterAll(async (done) => {
    browser.close();
    done();
  });

  it('Close button renders', async () => {
    const agentDesktop = await browser.newPage();
    await agentDesktop.goto('http://localhost:3000/agent-desktop');
    await agentDesktop.waitForSelector('.Twilio-RootContainer');
    expect(
      await agentDesktop.evaluate(
        () => document.querySelectorAll('i')[0].textContent
      )
    ).toBe('close');
    agentDesktop.close();
  });

  it('Dismiss the component when clicking close', async () => {
    const agentDesktop = await browser.newPage();
    await agentDesktop.goto('http://localhost:3000/agent-desktop');
    await agentDesktop.waitForSelector('.accented');
    await agentDesktop.click('.accented');
    expect(
      await agentDesktop.evaluate(
        () => document.querySelectorAll('.accented').length === 0
      )
    ).toBe(true);
    agentDesktop.close()
  });
});
