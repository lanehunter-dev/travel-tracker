const dataParser = {
  fetchAllTravelers: async () => {
    const response = await fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/travelers/travelers');
    const data = await response.json()
    return data;
  },
  fetchTraveler: async (travelerNum) => {
    const response = await fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/travelers/travelers/${travelerNum}`);
    const data = await response.json()
    return data;
  },
  fetchTripsForAllTravelers: async () => {
    const response = await fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/trips/trips');
    const data = await response.json()
    return data;
  },
  fetchAllDestinations: async () => {
    const response = await fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/destinations/destinations');
      const data = await response.json()
      return data.destinations;
  },
  filterTripsByTraveler: async (travelerNum) => {
    let data = await dataParser.fetchTripsForAllTravelers();
    return data.trips.filter(trip => trip.userID === travelerNum);
  },
  findTripDestination: async (trip) => {

  },
}

export default dataParser;
