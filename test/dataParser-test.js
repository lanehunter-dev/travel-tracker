import chai from "chai";
import dataParser from "../src/dataParser.js";
import travelerData from "../data/traveler-data-sample.js";
import Traveler from "../src/traveler.js"
const expect = chai.expect;
let traveler;

// describe("dataParser", function() {
//   beforeEach(function() {
//     traveler = new Traveler(travelerData.travelers[0]);
//   })
//
//   it("should be an instance of Traveler", function() {
//     expect(traveler).to.be.an.instanceof(Traveler)
//   });
//
//   it("should have default parameters", function() {
//     expect(traveler).to.deep.equal({
//       id: 1,
//       name: "Ham Leadbeater",
//       travelerType: "relaxer",
//       trips: [],
//       destinations: []
//     })
//   });
// });
