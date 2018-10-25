var webdriverio = require("webdriverio");
const chai = require("chai");
const expect = require("chai").expect;

var options = {
  desiredCapabilities: {
    browserName: "chrome"
  }
};

beforeEach(function() {
  browser.url("http://bora.uib.no/");
  chai.Should();
});

describe("Check if page title is correct", function() {
  it("test page title", function() {
    browser.getTitle().should.be.equal("BORA");
  });
});

describe("Navigate into Department of Information Science and Media Studies", function() {
  it("should check if browser has arrived in the InfoMedia department page", function() {
    browser.click("a*=Faculty of Social Sciences");
    browser.click("a*=Department of Information Science and Media Studies");
    console.log(
      browser.getText("h2=Department of Information Science and Media Studies")
    );

    expect(
      $(`h2*=Department of Information Science and Media Studies`).isVisible()
    ).to.equal(true);
  });
});

describe("search for published article", function() {
  it("should find the article based on the search string", function() {
    const searchString =
      "The customer effect in agile system development projects. A process tracing case study";
    browser.click("#ds-search-form > fieldset > div > input");
    browser.setValue("#ds-search-form > fieldset > div > input", searchString);
    browser.click("#ds-search-form > fieldset > div > span > button");
    const articleExists = browser.isExisting(`h4*=${searchString}`); 
    console.log(articleExists);
    expect(articleExists).to.be.true;
  });
});

describe("search for my master thesis", function() {
    it("should find the thesis if it has been published", function() {
      const searchString =
        "Conversational Interface for Screening";
      browser.click("#ds-search-form > fieldset > div > input");
      browser.setValue("#ds-search-form > fieldset > div > input", searchString);
      browser.click("#ds-search-form > fieldset > div > span > button");
      const articleExists = browser.isExisting(`h4*=${searchString}`); 
      console.log(articleExists);
      expect(articleExists).to.be.true;
    });
  });
