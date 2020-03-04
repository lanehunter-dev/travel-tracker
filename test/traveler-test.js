import chai from "chai";
const expect = chai.expect;
import Traveler from "../src/traveler.js";
import User from "../src/user.js";
import travelerData from "../data/traveler-data-sample.js";
let traveler;
import dataParser from "../src/dataParser";
const spies = require("chai-spies");
chai.use(spies);

describe("traveler", function() {
	beforeEach(function() {
		traveler = new Traveler(travelerData.travelers[0]);
		// global.window = {};
		// chai.spy.on(window, 'fetch', () => new Promise((resolve, reject) => {}))
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

	it("should be able to get their own trips", function() {
		// traveler.getTrips();
		// expect(window.fetch).to.be.called(1)
	});
});
