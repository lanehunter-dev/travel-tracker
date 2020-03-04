const dataParser = {

  fetchAllTravelers: async () => {
    try {
      const response = await fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/travelers/travelers');
      console.log(response);
      const data = await response.json()
      return data.travelers;
    } catch (error) {
      console.log(error.message);
    }
  },
  fetchTraveler: async (travelerNum) => {
    try {
      const response = await fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/travelers/travelers/${travelerNum}`);
        console.log(response);
        const data = await response.json()
        return data;
    } catch (error) {
      console.log(error.message);
    }
  },
  fetchTripsForAllTravelers: async () => {
    try {
      const response = await fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/trips/trips');
      console.log(response);
      const data = await response.json()
      return data.trips;
    } catch (error) {
      console.log(error.message);
    }
  },
  fetchAllDestinations: async () => {
    try {
      const response = await fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/destinations/destinations');
      console.log(response);
      const data = await response.json()
      return data.destinations;
    } catch (error) {
      console.log(error.message);
    }
  },
  filterTripsByTraveler: async (travelerNum) => {
    try {
      let data = await dataParser.fetchTripsForAllTravelers();
      return data.trips.filter(trip => trip.userID === travelerNum);
    } catch(error) {
      console.log(error.message);
    }
  },
  sendTripRequest: async (currentUser, numTravelers, startDate, duration, destinationID) => {
    try {
      const response = await fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/trips/trips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "id": Date.now(),
           "userID": currentUser.id,
           "destinationID": destinationID,
           "travelers": numTravelers,
           "date": startDate,
           "duration": duration,
           "status": "pending",
           "suggestedActivities": []
        })
      })
      const data = await response.json();
      console.log(await response);
      console.log(await data);
      alert('Trip successfully requested!')
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default dataParser;
