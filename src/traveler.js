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
    return data;
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
  getPastTrips() {
    return this.trips.filter(trip => {
      return moment(trip.date, 'YYYY/MM/DD') < Date.now() && moment(trip.date, 'YYYY/MM/DD').add(trip.duration, 'days') < Date.now();
    })
  }
  getPastDestinations() {
    let pastTrips = this.getPastTrips()
    console.log(pastTrips);
    let pastDestinations = [];
    pastTrips.forEach(trip => {
      pastDestinations.push(this.destinations.find(destination => {
        return destination.id === trip.destinationID
      }))
    })
    return pastDestinations;
  }
  getCurrentTrips() {
    return this.trips.filter(trip => {
      return moment(trip.date, 'YYYY/MM/DD') < Date.now() && moment(trip.date, 'YYYY/MM/DD').add(trip.duration, 'days') > Date.now();
    })
  }
  getUpcomingTrips() {
    return this.trips.filter(trip => {
      return moment(trip.date, 'YYYY/MM/DD') > Date.now();
    })
  }
  getPendingTrips() {
    return this.trips.filter(trip => trip.status === "pending")
  }
}

export default Traveler;
