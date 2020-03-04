import User from "./user.js";
import moment from "moment";

class Agent extends User {
	constructor(travelerData, tripData, destinationData) {
		super(travelerData, tripData, destinationData);
	}
	getNumTravelersOnTripsToday() {
		return this.getCurrentTrips().length;
	}
}

export default Agent;
