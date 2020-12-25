describe("Main menu", function(){
  var HomePage = require('../../lib/HomePage');
  var home;

  beforeEach(async function() {
    home = new HomePage();
    await home.getHome();
  }, 10000);

  it("has active menu block turn blue when going to that page", async function(){
    let color = await home.findAndClickServicesMenuBlock();
    expect(color).toBe("rgba(118, 205, 216, 1)");
  });

  // afterAll(async function(){
  //   await home.quitWindow();
  // });
});