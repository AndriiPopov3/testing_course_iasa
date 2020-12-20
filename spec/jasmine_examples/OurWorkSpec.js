describe("Our work screen", function(){
  const { Builder, By, Capabilities, Key } = require('selenium-webdriver');

  const capabilities = Capabilities.chrome();
  capabilities.set('chromeOptions', { "w3c": false });
  const driver = new Builder().withCapabilities(capabilities).build();

  beforeEach(async function() {
    await driver.get('https://www.epam.com/');
  }, 10000);

  it("can be lead to through both main menu and a button on home page", async function(){
    let learnMore = await driver.findElement(By.xpath("//*[@id=\"main\"]/div[1]/div[4]/section/div/div[1]/div/div[1]/div/div[3]/div/a"));
    
    learnMore.click();
    await new Promise(r => setTimeout(r, 2000));
    const curr_url_1 = await driver.getCurrentUrl();
    await driver.get('https://www.epam.com/');
    let ourWork = await driver.findElement(By.xpath("//*[@id=\"wrapper\"]/div[2]/div[1]/header/div/nav/ul/li[3]/span[1]/a"));
    ourWork.click();
    await new Promise(r => setTimeout(r, 1000));
    const curr_url_2 = await driver.getCurrentUrl();
    expect(curr_url_2).toBe(curr_url_1);
  });
});