import chai from "chai";
import Traveler from "../src/traveler.js";
import travelerData from "../data/traveler-data-sample.js"
const expect = chai.expect;
let traveler;

describe("traveler", function() {
  beforeEach("Function", function() {
    traveler = new Traveler(travelerData.travelers[0]);
  })

  it("should be an instance of Traveler", function() {
    expect(traveler).to.be.an.instanceof(Traveler)
  });

  it("should have default parameters", function() {
    console.log(traveler);
    expect(traveler).to.deep.equal({
      id: 1,
      name: "Ham Leadbeater",
      travelerType: "relaxer",
      username: "traveler1",
      password: "travel2020"
    })
  });
  
  it("should have default parameters", function() {
    console.log(traveler);
    expect(traveler).to.deep.equal({
      id: 1,
      name: "Ham Leadbeater",
      travelerType: "relaxer",
      username: "traveler1",
      password: "travel2020"
    })
  });
});
