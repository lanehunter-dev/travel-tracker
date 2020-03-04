import chai from "chai";
const expect = chai.expect;
import Agent from "../src/agent.js";
import User from "../src/user.js";
import travelerData from "../data/traveler-data-sample.js";
import destinationData from "../data/destination-data-sample";
import tripData from "../data/trip-data-sample";
let agent;

describe("Agent", () => {
	beforeEach(() => {
		agent = new Agent(
			travelerData.travelers,
			tripData.trips,
			destinationData.destinations
		);
	});

	it("should be an instance of Agent", function() {
		expect(agent).to.be.an.instanceof(Agent);
	});

	it("Should start with trip data", () => {
		expect(agent.trips.length).to.equal(14);
		expect(agent.trips[0]).to.deep.equal({
			id: 1,
			userID: 44,
			destinationID: 49,
			travelers: 1,
			date: "2019/09/16",
			duration: 8,
			status: "approved",
			suggestedActivities: []
		});
	});

	it("Should start with destination data", () => {
		expect(agent.destinations.length).to.equal(74);
		expect(agent.destinations[0]).to.deep.equal({
			id: 1,
			destination: "Lima, Peru",
			estimatedLodgingCostPerDay: 70,
			estimatedFlightCostPerPerson: 400,
			image:
				"https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
			alt: "overview of city buildings with a clear sky"
		});
	});

	it("Should start with traveler data", () => {
		expect(agent.travelers.length).to.equal(50);
		expect(agent.travelers[0]).to.deep.equal({
			id: 1,
			name: "Ham Leadbeater",
			travelerType: "relaxer"
		});
	});

	it("Should be able to count the number of travelers currently on trips", () => {
		expect(agent.getNumTravelersOnTripsToday()).to.equal(1);
	});


});
