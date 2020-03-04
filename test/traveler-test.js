import chai from "chai";
const expect = chai.expect;
import Traveler from "../src/traveler.js";
import User from "../src/user.js";
import travelerData from "../data/traveler-data-sample.js";
let traveler;

describe("traveler", function() {
	beforeEach(function() {
		traveler = new Traveler(travelerData.travelers[0]);
	});

	it("should be an instance of Traveler", function() {
		expect(traveler).to.be.an.instanceof(Traveler);
	});

	it("should have default parameters", function() {
		expect(traveler).to.deep.equal({
			travelers: { id: 1, name: "Ham Leadbeater", travelerType: "relaxer" },
			trips: [],
			destinations: [],
			id: 1,
			name: "Ham Leadbeater",
			travelerType: "relaxer"
		});
	});
});
