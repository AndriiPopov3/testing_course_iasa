describe("Job search", function(){
  const { Builder, By, Capabilities, Key } = require('selenium-webdriver');

  const capabilities = Capabilities.chrome();
  capabilities.set('chromeOptions', { "w3c": false });
  const driver = new Builder().withCapabilities(capabilities).build();

  beforeEach(async function() {
    await driver.get('https://www.epam.com/careers');
  }, 10000);

  it("shows search-result block after searching for something", async function(){
    await driver.findElement(By.xpath("//*[@id=\"new_form_job_search_1445745853_copy-keyword\"]")).sendKeys('angular', Key.ENTER);
    await new Promise(r => setTimeout(r, 2000));
    let existed = await driver.findElement(By.xpath("//*[@id=\"main\"]/div[1]/div[1]/section/div/div[1]/div/section")).then(function() {
      return true;
    }, function(err) {
      return false;
    });
    expect(existed).toBe(true);
  });
});