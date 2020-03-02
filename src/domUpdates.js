import $ from 'jquery';
import dataParser from './dataParser.js';

const domUpdates = {
  showUserDashboard: () => {
    $('#traveler-dashboard').show()
    $('.login').hide()
  },
  showNewTripBtn: () => {
    $('header').append()
  },
  displayWelcomeMsg: (currentUser) => {
    $('.dashboard-header').prepend(`
      <h1>Welcome, ${currentUser.name}!</h1>`);
    $('.dashboard-header').append(`
      <h3>Total you've spent on trips this year: $${currentUser.getTotalTripCostPerYear()}</h3>
      <h3 class='bold'>Your Trips:</h3>`)
  },
  displayUserTrips: (currentUser) => {
    $('.dashboard-body').children().hide();
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
    let pastDestinations = currentUser.getPastDestinations()
    console.log(pastDestinations);
    if (pastDestinations.length) {
      $('.dashboard-body').children().hide();
      pastDestinations.forEach(destination => {
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
      })
    } else {
      $('.dashboard-body').children().hide();
      $('.dashboard-body').append(`<h1 class='underline center'>No past trips</h1>`)
    }
  },
  displayCurrentTrips: (currentUser) => {
    let currentTrips = currentUser.getCurrentTrips()
  }
};

export default domUpdates;
