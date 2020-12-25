describe("Cookies block", function() {
  var HomePage = require('../../lib/HomePage');
  var CookiePolicy = require('../../lib/CookiePolicy');
  var cookie;
  var home;

  beforeEach(async function() {
    cookie = new CookiePolicy();
    home = new HomePage();
    await home.getHome();
  }, 10000);

  it("should open cookie policy page", async function() {
    let curr_url = await home.cookiePolicyButton();
    expect(curr_url).toBe(cookie.url);
  }, 7000);

  it("should disappear after pressing accept", async function() {
    await home.cookieAccept();
    let exists = await home.blockExisted();
    expect(exists).toBe(false);
  });
  
  // afterAll(async function(){
  //   await home.quitWindow();
  // });
});

