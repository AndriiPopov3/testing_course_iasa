describe("Job search", function(){
  var CareersPage = require('../../lib/CareersPage');
  var careers;

  beforeEach(async function() {
    careers = new CareersPage();
    await careers.getPage();
  }, 10000);

  it("shows search-result block after searching for something", async function(){
    await careers.searchJob("angular");
    let exists = await careers.findSearchResultBlock();
    expect(exists).toBe(true);
  });
    afterAll(async function(){
    await careers.quitWindow();
  });  
});