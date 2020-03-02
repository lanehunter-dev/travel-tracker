import $ from 'jquery';
import dataParser from './dataParser.js';

const domUpdates = {
  showUserDashboard: () => {
    $('#traveler-dashboard').show()
    $('.login').hide()
  },
  displayWelcomeMsg: (currentUser) => {
    $('.dashboard-header').prepend(`<h2>Welcome, ${currentUser.name}!</h2>`)
  },
  displayUserTrips: (currentUser) => {
    currentUser.destinations.forEach(destination => {
      $('.dashboard-body').append(`<div class="dashboard-entry card">
        <div class="dashboard-image">
          <div class="overlay-text">
            <h1 class="bold">Book a trip to ${destination.destination}!</h1>
          </div>
          <div class="overlay"></div>
          <img src=${destination.image} class="card-image">
        </div>
        <div class="dashboard-info">
          <h2 class="bold underline">${destination.destination}</h2>
          <p class="bold">Estimated Lodging Cost Per Day:</p>
          <p>$${destination.estimatedLodgingCostPerDay} (per person)</p>
          <p class="bold">Estimated Flight Cost Per Person:</p>
          <p>$${destination.estimatedFlightCostPerPerson}</p>
        </div>
      </div>`)
    });
  },
  displayPastTrips: (currentUser) => {
    let pastTrips = currentUser.getCurrentTrips()
    if (pastTrips.length) {

    } else {
      $('.dashboard-body').children().hide();
      $('.dashboard-body').append(`<h1 class='underline center'>No past trips</h1>`)
    }
    console.log(pastTrips);

  }
};

export default domUpdates;
