import dataParser from "./dataParser.js";
import moment from "moment";

class User {
	constructor(travelerData, tripData, destinationData) {
		this.travelers = travelerData;
		this.trips = tripData;
		this.destinations = destinationData;
	}
	async getTrips() {
		let data = await dataParser.fetchTripsForAllTravelers();
		data = data.filter(trip => trip.userID === this.id);
		data.forEach(trip => this.trips.push(trip));
		return data;
	}
	getMyDestinations(destinationData) {
		return this.trips.forEach(trip => {
			this.destinations.push(
				destinationData.find(
					destination => destination.id === trip.destinationID
				)
			);
		});
	}
	getPendingTrips() {
		return this.trips.filter(trip => trip.status === "pending");
	}
	getPendingDestinations() {
		let pendingTrips = this.getPendingTrips();
		let pendingDestinations = [];
		pendingTrips.forEach(trip => {
			pendingDestinations.push(
				this.destinations.find(destination => {
					return destination.id === trip.destinationID;
				})
			);
		});
		return pendingDestinations;
	}
	getUpcomingTrips() {
		return this.trips.filter(trip => {
			return moment(trip.date, "YYYY/MM/DD") > Date.now();
		});
	}
	getUpcomingDestinations() {
		let upcomingTrips = this.getUpcomingTrips();
		let upcomingDestinations = [];
		upcomingTrips.forEach(trip => {
			upcomingDestinations.push(
				this.destinations.find(destination => {
					return destination.id === trip.destinationID;
				})
			);
		});
		return upcomingDestinations;
	}
	getCurrentTrips() {
		return this.trips.filter(trip => {
			return (
				moment(trip.date, "YYYY/MM/DD") < Date.now() &&
				moment(trip.date, "YYYY/MM/DD").add(trip.duration, "days") > Date.now()
			);
		});
	}
	getCurrentDestinations() {
		let currentTrips = this.getCurrentTrips();
		let currentDestinations = [];
		currentTrips.forEach(trip => {
			currentDestinations.push(
				this.destinations.find(destination => {
					return destination.id === trip.destinationID;
				})
			);
		});
		return currentDestinations;
	}
	getPastTrips() {
		return this.trips.filter(trip => {
			return (
				moment(trip.date, "YYYY/MM/DD") < Date.now() &&
				moment(trip.date, "YYYY/MM/DD").add(trip.duration, "days") < Date.now()
			);
		});
	}
	getPastDestinations() {
		let pastTrips = this.getPastTrips();
		let pastDestinations = [];
		pastTrips.forEach(trip => {
			pastDestinations.push(
				this.destinations.find(destination => {
					return destination.id === trip.destinationID;
				})
			);
		});
		return pastDestinations;
	}
	getTotalTripCostPerYear() {
		let subTotal = this.trips.reduce((totalCost, trip) => {
			let place = this.destinations.find(
				destination => destination.id === trip.destinationID
			);
			totalCost +=
				place.estimatedLodgingCostPerDay * trip.duration * trip.travelers;
			totalCost += place.estimatedFlightCostPerPerson * trip.travelers;
			return totalCost;
		}, 0);
		return subTotal;
	}
}

export default User;
