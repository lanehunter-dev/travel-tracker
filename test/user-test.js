import chai from "chai";
const expect = chai.expect;
import User from "../src/user.js";
import travelerData from "../data/traveler-data-sample.js";
import destinationData from "../data/destination-data-sample";
import tripData from "../data/trip-data-sample";
let user;

describe("User", () => {
	beforeEach(() => {
		user = new User(
			travelerData.travelers,
			tripData.trips,
			destinationData.destinations
		);
	});

	it("Should be instantiated with traveler data", () => {
		expect(user.travelers.length).to.equal(50);
		expect(user.travelers[0]).to.deep.equal({
			id: 1,
			name: "Ham Leadbeater",
			travelerType: "relaxer"
		});
	});

	it("Should be instantiated with trip data", () => {
		expect(user.trips.length).to.equal(14);
		expect(user.trips[0]).to.deep.equal({
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

	it("Should be instantiated with destination data", () => {
		expect(user.destinations.length).to.equal(74);
		expect(user.destinations[0]).to.deep.equal({
			id: 1,
			destination: "Lima, Peru",
			estimatedLodgingCostPerDay: 70,
			estimatedFlightCostPerPerson: 400,
			image:
				"https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
			alt: "overview of city buildings with a clear sky"
		});
	});

	it("Should find destinations associated with trips", () => {
    expect(user.getMyDestinations(destinationData.destinations).length).to.equal(14)
		expect(user.getMyDestinations(destinationData.destinations)[0]).to.deep.equal(
			{
				id: 49,
				destination: "Castries, St Lucia",
				estimatedLodgingCostPerDay: 650,
				estimatedFlightCostPerPerson: 90,
				image:
					"https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
				alt: "aerial photography of rocky mountain under cloudy sky"
			}
		);
	});

	it("Should be able to find pending trips", () => {
		expect(user.getPendingTrips().length).to.equal(2);
		expect(user.getPendingTrips()[0]).to.deep.equal({
			id: 17,
			userID: 28,
			destinationID: 31,
			travelers: 1,
			date: "2019/10/30",
			duration: 20,
			status: "pending",
			suggestedActivities: []
		});
	});

	it("Should be able to find destinations associated with pending trips", () => {
		expect(user.getPendingDestinations().length).to.equal(2);
		expect(user.getPendingDestinations()[0]).to.deep.equal({
			id: 31,
			destination: "Colombo, Sri Lanka",
			estimatedLodgingCostPerDay: 55,
			estimatedFlightCostPerPerson: 1300,
			image:
				"https://images.unsplash.com/photo-1578159802020-13ec49d669df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			alt: "people walking inside flea market"
		});
	});

	it("Should be able to find upcoming trips", () => {
		expect(user.getUpcomingTrips().length).to.equal(7);
		expect(user.getUpcomingTrips()[0]).to.deep.equal({
			id: 10,
			userID: 9,
			destinationID: 50,
			travelers: 6,
			date: "2020/07/23",
			duration: 17,
			status: "approved",
			suggestedActivities: []
		});
	});

	it("Should be able to find destinations associated with upcoming trips", () => {
		expect(user.getUpcomingDestinations().length).to.equal(7);
		expect(user.getUpcomingDestinations()[0]).to.deep.equal({
			id: 50,
			destination: "Hobart, Tasmania",
			estimatedLodgingCostPerDay: 1400,
			estimatedFlightCostPerPerson: 75,
			image:
				"https://images.unsplash.com/photo-1506982724953-b1fbe939e1e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
			alt: "person sitting on brown rock in front of body of water"
		});
	});

	it("Should be able to find trips that are currently ongoing", () => {
		expect(user.getCurrentTrips().length).to.equal(1);
		expect(user.getCurrentTrips()[0]).to.deep.equal({
			id: 4,
			userID: 43,
			destinationID: 14,
			travelers: 2,
			date: "2020/02/25",
			duration: 10,
			status: "approved",
			suggestedActivities: []
		});
	});

	it("Should be able to find destinations associated with trips that are currently ongoing", () => {
		expect(user.getCurrentDestinations().length).to.equal(1);
		expect(user.getCurrentDestinations()[0]).to.deep.equal({
			id: 14,
			destination: "Marrakesh, Morocco",
			estimatedLodgingCostPerDay: 70,
			estimatedFlightCostPerPerson: 830,
			image:
				"https://images.unsplash.com/photo-1517821362941-f7f753200fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
			alt: "people buying oranges and other fruit from a street vendor"
		});
	});

	it("Should be able to find past trips", () => {
		expect(user.getPastTrips().length).to.equal(6);
		expect(user.getPastTrips()[0]).to.deep.equal({
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

	it("Should be able to find destinations associated with past trips", () => {
		expect(user.getPastDestinations().length).to.equal(6);
		expect(user.getPastDestinations()[0]).to.deep.equal({
			id: 49,
			destination: "Castries, St Lucia",
			estimatedLodgingCostPerDay: 650,
			estimatedFlightCostPerPerson: 90,
			image:
				"https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
			alt: "aerial photography of rocky mountain under cloudy sky"
		});
	});

	it("Should be able to calculate the total cost of all trips", () => {
		expect(user.getTotalTripCostPerYear(destinationData.destinations))
    .to.equal(266890);
	});
});
