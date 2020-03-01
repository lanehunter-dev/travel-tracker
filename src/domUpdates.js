import dataParser from './dataParser.js'

const domUpdates = {
  showUsers: async () => {
    dataParser.fetchAllTravelers();
  },
};

export default domUpdates;
