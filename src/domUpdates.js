import dataParser from './dataParser.js'

const domUpdates = {
  showUsers: async () => {
    console.log(await dataParser.fetchAllTravelers());
    dataParser.fetchAllTravelers();
  },
};

export default domUpdates;
