import chai from "chai";
const expect = chai.expect;
import Agent from "../src/agent.js";
import User from "../src/user.js";
import travelerData from "../data/traveler-data-sample.js";
import destinationData from "../data/destination-data-sample";
import tripData from "../data/trip-data-sample";
import dataParser from "../src/dataParser";
const spies = require("chai-spies");
chai.use(spies);
let agent;

describe("Agent", () => {
	beforeEach(() => {
		agent = new Agent(
			travelerData.travelers,
			tripData.trips,
			destinationData.destinations
		);
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

	it("Should be able to find pending trips", () => {
		expect(agent.getPendingTrips()).to.deep.equal([
			{
				id: 17,
				userID: 28,
				destinationID: 31,
				travelers: 1,
				date: "2019/10/30",
				duration: 20,
				status: "pending",
				suggestedActivities: []
			},
			{
				id: 22,
				userID: 22,
				destinationID: 9,
				travelers: 4,
				date: "2020/05/01",
				duration: 19,
				status: "pending",
				suggestedActivities: []
			}
		]);
	});

	it("Should be able to get destinations associated with pending trips", () => {
		expect(agent.getPendingDestinations()).to.deep.equal([
			{
				id: 31,
				destination: "Colombo, Sri Lanka",
				estimatedLodgingCostPerDay: 55,
				estimatedFlightCostPerPerson: 1300,
				image:
					"https://images.unsplash.com/photo-1578159802020-13ec49d669df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
				alt: "people walking inside flea market"
			},
			{
				id: 9,
				destination: "Amsterdam, Netherlands",
				estimatedLodgingCostPerDay: 100,
				estimatedFlightCostPerPerson: 950,
				image:
					"https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
				alt: "canal with boats and trees and buildings along the side"
			}
		]);
	});

	it("Should be able to calculate", () => {
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
});
