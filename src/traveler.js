import dataParser from './dataParser.js'

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
    data = data.trips.filter(trip => trip.userID === this.id);
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
      totalCost += (place.estimatedLodgingCostPerDay * trip.duration);
      totalCost += (place.estimatedFlightCostPerPerson * trip.travelers);
      return totalCost;
    }, 0)
    return subTotal;
  }
}

export default Traveler;
