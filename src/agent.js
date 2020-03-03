import dataParser from './dataParser.js'
import moment from 'moment';

class Agent {
  constructor(tripData, destinationData, travelerData) {
    this.trips = tripData;
    this.destinations = destinationData;
    this.travelers = travelerData;
  }
  getPendingTrips() {
    return this.trips.filter(trip => trip.status === "pending")
  }
  getPendingDestinations() {
    let pendingTrips = this.getPendingTrips()
    let pendingDestinations = [];
    pendingTrips.forEach(trip => {
      pendingDestinations.push(this.destinations.find(destination => {
        return destination.id === trip.destinationID
      }))
    })
    return pendingDestinations;
  }
  getTotalTripCostPerYear() {
    let subTotal = this.trips.reduce((totalCost, trip) => {
      let place = this.destinations.find(destination => destination.id === trip.destinationID);
      totalCost += (place.estimatedLodgingCostPerDay * trip.duration * trip.travelers);
      totalCost += (place.estimatedFlightCostPerPerson * trip.travelers);
      return totalCost;
    }, 0);
    console.log(subTotal);
    return subTotal;
  }
  getCurrentTrips() {
    return this.trips.filter(trip => {
      return moment(trip.date, 'YYYY/MM/DD') < Date.now() && moment(trip.date, 'YYYY/MM/DD').add(trip.duration, 'days') > Date.now();
    })
  }
  getNumTravelersOnTripsToday() {
    return this.getCurrentTrips().length;
  }
}

export default Agent;
