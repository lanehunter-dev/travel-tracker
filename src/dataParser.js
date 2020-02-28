const dataParser = {
  fetchAllTravelers: async () => {
    const response = await fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/1911/travelers/travelers');
    const data = await response.json()
    return data;
  }
}

export default dataParser;
