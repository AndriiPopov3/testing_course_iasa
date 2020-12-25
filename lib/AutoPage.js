const { Builder, By, Capabilities, Key } = require('selenium-webdriver');

  const capabilities = Capabilities.chrome();
  capabilities.set('chromeOptions', { "w3c": false });
  const driver2 = new Builder().withCapabilities(capabilities).build();

  class AutoPage {
 	constructor(url) {
		this.url = 'https://www.epam.com/our-work/automotive-and-manufacturing';
	}

	async getAuto(){
		await driver2.get(this.url);
	}

	async exploreButton(){
	let explore = await driver2.findElement(By.xpath("//*[@id=\"main\"]/div[1]/div[1]/section/div/div[2]/div/div[2]/div/div[2]/div/a"));
    explore.click();
    await new Promise(r => setTimeout(r, 1000));
    const curr_url = await driver2.getCurrentUrl();
    return curr_url;
	}

	async getUrl(){
		let curr_url = await driver2.getCurrentUrl()
		return curr_url;
	}

	async quitWindow(){
		await driver2.close();
	}
 }

 module.exports = AutoPage;