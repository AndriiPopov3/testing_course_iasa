describe("Search field", function(){
  var HomePage = require('../../lib/HomePage');
  var home;


  beforeEach(async function() {
    home = new HomePage();
    await home.getHome();
    await home.findSearchBlock();
  }, 10000);

  it("shows frequent searches block", async function(){
    let existed = await home.frequentSearchExisted();
    expect(existed).toBe(true);
  });

  it("changes title to Search after searching for something", async function(){
    await home.searchFor('BLOCKCHAIN');
    let title = await home.getTitle();
    expect(title).toBe("Search");
  })
});
