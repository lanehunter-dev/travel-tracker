import dataParser from './dataParser.js'

class Agent {
  constructor() {
    this.trips = [];
  }
  async getPendingTripRequests() {
    let allTrips = await dataParser.fetchAllTrips();
    return allTrips.filter(trip => trip.status === "pending")
  }
  async getTotalTripCostPerYear() {
    this.trips;
    console.log(this.trips);
    let subTotal = this.trips.reduce((totalCost, trip) => {
      let place = this.destinations.find(destination => destination.id === trip.destinationID);
      totalCost += (place.estimatedLodgingCostPerDay * trip.duration);
      totalCost += (place.estimatedFlightCostPerPerson * trip.travelers);
      return totalCost;
    }, 0)
    return subTotal + (subTotal * .1)
  }
}

export default Agent;
