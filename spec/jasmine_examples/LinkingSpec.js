describe("Automotive page", function(){
  var AutoPage = require('../../lib/AutoPage');
  var auto;

  beforeEach(async function() {
    auto = new AutoPage();
    await auto.getAuto();
  }, 10000);

  it("has anchors to inner blocks", async function(){
    let curr_url = await auto.exploreButton();
    expect(curr_url).toBe(await auto.getUrl());
  });
  
  afterAll(async function(){
    auto.quitWindow();
  });
});