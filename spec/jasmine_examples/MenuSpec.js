describe("Main menu", function(){
  const { Builder, By, Capabilities, Key } = require('selenium-webdriver');

  const capabilities = Capabilities.chrome();
  capabilities.set('chromeOptions', { "w3c": false });
  const driver = new Builder().withCapabilities(capabilities).build();

  beforeEach(async function() {
    await driver.get('https://www.epam.com/');
  }, 10000);

  it("has active menu block turn blue when going to that page", async function(){
    let serv = await driver.findElement(By.xpath("//*[@id=\"wrapper\"]/div[2]/div[1]/header/div/nav/ul/li[1]/span[1]/a"));
    
    serv.click();
    await new Promise(r => setTimeout(r, 2000));
    let serv_act = await driver.findElement(By.xpath("//*[@id=\"wrapper\"]/div[2]/div[2]/div/div/header/div/nav/ul/li[1]/span[1]/a"));
    let color = await serv_act.getCssValue("color");
    await new Promise(r => setTimeout(r, 1000));
    expect(color).toBe("rgba(118, 205, 216, 1)");
  });
    // it("shows extended menu when hovered above services", async function(){
  //   let services = await driver.findElement(By.xpath("//*[@id=\"wrapper\"]/div[2]/div[1]/header/div/nav/ul/li[1]/span[1]/a"));
  // });
});