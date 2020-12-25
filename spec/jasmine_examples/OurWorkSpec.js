describe("Our work screen", function(){
  var HomePage = require('../../lib/HomePage');
  var home;

  beforeEach(async function() {
    home = new HomePage();
    await home.getHome();
  }, 10000);

  it("can be lead to through both main menu and a button on home page", async function(){
    let curr_url_1 = await home.findLearnMore();
    await home.getHome();
    let curr_url_2 = await home.findOurWorkMenuBlock();
    expect(curr_url_2).toBe(curr_url_1);
  }, 10000);
  
  //   afterAll(async function(){
  //   await home.quitWindow();
  // });
});