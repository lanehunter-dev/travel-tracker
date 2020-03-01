import dataParser from './dataParser.js';
import moment from 'moment';

class Traveler {
  constructor(travelerData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
    this.trips = [];
    this.destinations = [];
  }
  async getTrips() {
    let data = await dataParser.fetchTripsForAllTravelers();
    data = data.filter(trip => trip.userID === this.id);
    data.forEach(trip => this.trips.push(trip))
    console.log(await this.trips);
  }
  getMyDestinations(destinationData) {
    return this.trips.forEach(trip => {
      this.destinations.push(destinationData.find(destination => destination.id === trip.destinationID))
    })
  }
  getTotalTripCostPerYear() {
    let subTotal = this.trips.reduce((totalCost, trip) => {
      let place = this.destinations.find(destination => destination.id === trip.destinationID);
      totalCost += (place.estimatedLodgingCostPerDay * trip.duration * trip.travelers);
      totalCost += (place.estimatedFlightCostPerPerson * trip.travelers);
      return totalCost;
    }, 0)
    return subTotal;
  }
  findPastTrips() {
    return this.trips.filter(trip => {
      return moment(trip.date, 'YYYY/MM/DD') < Date.now();
    })
  }
}

export default Traveler;
