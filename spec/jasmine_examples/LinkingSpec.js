describe("Automotive page", function(){
  const { Builder, By, Capabilities, Key } = require('selenium-webdriver');

  const capabilities = Capabilities.chrome();
  capabilities.set('chromeOptions', { "w3c": false });
  const driver = new Builder().withCapabilities(capabilities).build();

  beforeEach(async function() {
    await driver.get('https://www.epam.com/our-work/automotive-and-manufacturing');
  }, 10000);

  it("has anchors to inner blocks", async function(){
    let explore = await driver.findElement(By.xpath("//*[@id=\"main\"]/div[1]/div[1]/section/div/div[2]/div/div[2]/div/div[2]/div/a"));
    explore.click();
    await new Promise(r => setTimeout(r, 1000));
    const curr_url = await driver.getCurrentUrl();
    
    expect(curr_url).toBe("https://www.epam.com/our-work/automotive-and-manufacturing#latestwork");
  });
});