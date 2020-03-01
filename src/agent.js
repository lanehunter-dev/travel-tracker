import dataParser from './dataParser.js'

class Agent {
  constructor(tripData, destinationData, travelerData) {
    this.trips = tripData;
    this.destinations = destinationData;
    this.travelers = travelerData;
  }
  getPendingTrips() {
    return this.trips.filter(trip => trip.status === "pending")
  }
  async getTotalTripCostPerYear() {
    let subTotal = this.trips.reduce((totalCost, trip) => {
      let place = this.destinations.find(destination => destination.id === trip.destinationID);
      totalCost += (place.estimatedLodgingCostPerDay * trip.duration * trip.travelers);
      totalCost += (place.estimatedFlightCostPerPerson * trip.travelers);
      return totalCost;
    }, 0);
    return subTotal;
  }
}

export default Agent;
