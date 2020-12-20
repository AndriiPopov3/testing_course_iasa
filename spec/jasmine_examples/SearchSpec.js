describe("Search field", function(){

  const { Builder, By, Capabilities, Key } = require('selenium-webdriver');

  const capabilities = Capabilities.chrome();
  capabilities.set('chromeOptions', { "w3c": false });
  const driver = new Builder().withCapabilities(capabilities).build();

  beforeEach(async function() {
    await driver.get('https://www.epam.com/');
    let button = await driver.findElement(By.xpath("//*[@id=\"wrapper\"]/div[2]/div[1]/header/div/ul/li[3]/div/button"));
    button.click();
  }, 10000);

  it("shows frequent searches block", async function(){
    let existed = await driver.findElement(By.xpath("//*[@id=\"wrapper\"]/div[2]/div[1]/header/div/ul/li[3]/div/div/form/div/div")).then(function() {
      return true;
    }, function(err) {
      return false;
    });
    expect(existed).toBe(true);
  });

  it("changes title to Search after searching for something", async function(){
    await driver.findElement(By.xpath("//*[@id=\"new_form_search\"]")).sendKeys('BLOCKCHAIN', Key.ENTER);
    await new Promise(r => setTimeout(r, 500));
    let title = await driver.getTitle();
    expect(title).toBe("Search");
  })
});
