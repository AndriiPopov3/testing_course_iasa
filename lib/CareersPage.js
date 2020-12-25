const { Builder, By, Capabilities, Key } = require('selenium-webdriver');

  const capabilities = Capabilities.chrome();
  capabilities.set('chromeOptions', { "w3c": false });
  const driver1 = new Builder().withCapabilities(capabilities).build();

class CareersPage {
 	constructor(url) {
		this.url = 'https://www.epam.com/careers';
	}

	async getPage(){
		await driver1.get(this.url);
	}

	async searchJob(string){
	await driver1.findElement(By.xpath("//*[@id=\"new_form_job_search_1445745853_copy-keyword\"]")).sendKeys(string, Key.ENTER);
    await new Promise(r => setTimeout(r, 2000));
	}

	async findSearchResultBlock(){
	let existed = await driver1.findElement(By.xpath("//*[@id=\"main\"]/div[1]/div[1]/section/div/div[1]/div/section")).then(function() {
      return true;
    }, function(err) {
      return false;
    });
    return existed;
	}

	async getUrl(){
		return driver1.getCurrentUrl();
	}

	async quitWindow(){
		await driver1.close();
	}
 }

 module.exports = CareersPage;