  const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
  const capabilities = Capabilities.chrome();
  capabilities.set('chromeOptions', { "w3c": false });
  const driver = new Builder().withCapabilities(capabilities).build();

 class HomePage{
 	constructor(url) {
		this.url = 'https://www.epam.com/';
	}

	async getHome(){
		await driver.get(this.url);
	}

	async cookiePolicyButton(){
	let here = await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div/div/div[1]/div[1]/p/a"));
    await new Promise(r => setTimeout(r, 1500));
    here.click();
    await new Promise(r => setTimeout(r, 1000));
    const curr_url = await driver.getCurrentUrl();
    await new Promise(r => setTimeout(r, 1000));
    return curr_url;
	}

	async cookieAccept(){
	let accept = await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div/div/div[2]/button"));
    await new Promise(r => setTimeout(r, 1000));
    accept.click();
    await new Promise(r => setTimeout(r, 1000));
	}

	async blockExisted(){
	let existed = await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div")).then(function() {
      return true;
    }, function(err) {
      return false;
    });
    return existed;
	}

	async findServicesMenuBlock(){
	let serv = await driver.findElement(By.xpath("//*[@id=\"wrapper\"]/div[2]/div[1]/header/div/nav/ul/li[1]/span[1]/a"));
    serv.click();
    await new Promise(r => setTimeout(r, 1000));
	}

	async findOurWorkMenuBlock(){
	let ourWork = await driver.findElement(By.xpath("//*[@id=\"wrapper\"]/div[2]/div[1]/header/div/nav/ul/li[3]/span[1]/a"));
    ourWork.click();
    await new Promise(r => setTimeout(r, 1000));
    const curr_url = await driver.getCurrentUrl();
    await new Promise(r => setTimeout(r, 1000));
    return curr_url;
	}

	async findAndClickServicesMenuBlock(){
	let serv = await driver.findElement(By.xpath("//*[@id=\"wrapper\"]/div[2]/div[1]/header/div/nav/ul/li[1]/span[1]/a"));
    serv.click();
    await new Promise(r => setTimeout(r, 1000));
    let serv_act = await driver.findElement(By.xpath("//*[@id=\"wrapper\"]/div[2]/div[2]/div/div/header/div/nav/ul/li[1]/span[1]/a"));
    await new Promise(r => setTimeout(r, 1000));
    let color = await serv_act.getCssValue("color");
    await new Promise(r => setTimeout(r, 1000));
    return color;
	}

	async findLearnMore(){
	let learnMore = await driver.findElement(By.xpath("//*[@id=\"main\"]/div[1]/div[4]/section/div/div[1]/div/div[1]/div/div[3]/div/a"));
    learnMore.click();
    await new Promise(r => setTimeout(r, 1000));
    const curr_url = await driver.getCurrentUrl();
    await new Promise(r => setTimeout(r, 1000));
    return curr_url;
	}

	async findSearchBlock(){
	let button = await driver.findElement(By.xpath("//*[@id=\"wrapper\"]/div[2]/div[1]/header/div/ul/li[3]/div/button"));
    button.click();
	}

	async frequentSearchExisted(){
	let existed = await driver.findElement(By.xpath("//*[@id=\"wrapper\"]/div[2]/div[1]/header/div/ul/li[3]/div/div/form/div/div")).then(function() {
      return true;
    }, function(err) {
      return false;
    });
		return existed
	}

	async searchFor(string){
	await driver.findElement(By.xpath("//*[@id=\"new_form_search\"]")).sendKeys(string, Key.ENTER);
    await new Promise(r => setTimeout(r, 500));
	}

	async getTitle(){
		return await driver.getTitle();
	}
	async getDriver(){
		return driver;
	}

	async quitWindow(){
		await driver.close();
	}
 }

  module.exports = HomePage;