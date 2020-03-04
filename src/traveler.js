import User from "./user.js";
import moment from "moment";

class Traveler extends User {
	constructor(travelerData) {
		super(travelerData);
		this.id = travelerData.id;
		this.name = travelerData.name;
		this.travelerType = travelerData.travelerType;
		this.trips = [];
		this.destinations = [];
	}
}

export default Traveler;
