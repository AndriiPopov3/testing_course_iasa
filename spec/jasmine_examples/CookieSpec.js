describe("Cookies block", function() {
  var Cookie = require('../../lib/Cookie');
  var cookie;

  const { Builder, By, Capabilities, Key } = require('selenium-webdriver');

  const capabilities = Capabilities.chrome();
  capabilities.set('chromeOptions', { "w3c": false });
  const driver = new Builder().withCapabilities(capabilities).build();

  beforeEach(async function() {
    await driver.get('https://www.epam.com/');
    cookie = new Cookie();
  }, 10000);

  it("should open cookie policy page", async function() {
    let here = await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div/div/div[1]/div[1]/p/a"));
    await new Promise(r => setTimeout(r, 1500));
    cookie.here(here);
    await new Promise(r => setTimeout(r, 1000));
    const curr_url = await driver.getCurrentUrl();
    
    expect(curr_url).toBe("https://www.epam.com/cookie-policy");
  }, 7000);

  it("should disappear after pressing accept", async function() {
    let accept = await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div/div/div[2]/button"));
    await new Promise(r => setTimeout(r, 1000));
    cookie.accept(accept);
       await new Promise(r => setTimeout(r, 1000));
    let existed = await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div")).then(function() {
      return true;
    }, function(err) {
      return false;
    });
    expect(existed).toBe(false);
  });

});
