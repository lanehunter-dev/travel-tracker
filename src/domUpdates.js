import $ from 'jquery';
import dataParser from './dataParser.js';

const domUpdates = {
  showUserDashboard: () => {
    $('.dashboard').show()
    $('.login').hide()
  },
  showAgentDashboard: () => {
    $('.dashboard').show()
    $('.login').hide()
    $('#traveler-filter').hide();
  },
  displayNumTravelersOnTripsToday: (currentUser) => {
    $('.dashboard-header-nav').append(`
      <div id="traverler-count">
        <h3 class='bold'>Travelers on trips today: ${currentUser.getNumTravelersOnTripsToday()}</h3>
      </div>`)
  },
  showNewTripBtn: () => {
    $('header').append(`
      <button class='top-action-btn book-trip'>Book new trip</button>
    `)
  },
  displayDestinationPicker: (destinationData) => {
    $('.dashboard-body').children().hide();
    $('.dashboard-header').children().hide();
    $('#traveler-filter').hide();
    $('.dashboard-header').append(`<button class='top-action-btn go-back'>Go back to my trips</button><h1 class='bold center filter-display'>Pick a destination!</h1>`)
    console.log(destinationData);
    destinationData.forEach(destination => {
      $('.dashboard-body').append(`<div class="dashboard-entry card" id='${destination.id}'>
        <div class="dashboard-image">
        <h2 class='bold overlay-text'>Book a trip to ${destination.destination}!
        </h2>
          <div class='overlay'></div>
          <img src=${destination.image} class="card-image">
        </div>
        <div class="dashboard-info">
          <h2 class="bold underline">${destination.destination}</h2>
          <h3>Estimated Flight Cost Per Person: $${destination.estimatedFlightCostPerPerson}</h3>
          <h3>Estimated Lodging Cost Per Day (Per Person): $${destination.estimatedLodgingCostPerDay}</h3>
          <button class='bottom-action-btn'>Book a trip to ${destination.destination}</button>
        </div>
      </div>`)

    });

  },
  displayNewTripModal: (destinationID, destinationData) => {
    console.log(destinationID);
    $('header').addClass('blur');
    $('main').addClass('blur');
    $('.modal-container').show()
    $('.modal-container').append(`<div class="new-trip-modal">
      <button class="top-action-btn cancel">Cancel</button>
      <div class="modal-body">

      </div>
    </div>`);
  },
  closeModal: () => {
    $('header').removeClass('blur');
    $('main').removeClass('blur');
    $('.modal-container').hide();
    $('.modal-container').html('')
  },
  displayWelcomeMsg: (currentUser) => {
    if (currentUser.id) {
      $('.filter-display').hide();
      $('.dashboard-header').prepend(`
        <h1>Welcome, ${currentUser.name}!</h1>`);
      $('.dashboard-header').append(`
        <h3>Total you've spent on trips this year: $${((currentUser.getTotalTripCostPerYear() * .1) + currentUser.getTotalTripCostPerYear()).toFixed(2)}</h3>
        <h3 class='bold center filter-display'>Your Trips:</h3>`)
    } else {
      $('.dashboard-header').prepend(`
        <h1>Welcome, Agent!</h1>`);
      $('.dashboard-header').append(`
        <h3>Total revenue this year: $${(currentUser.getTotalTripCostPerYear() * .1).toFixed(2)}</h3>`)
    }
  },
  displayUserTrips: (currentUser) => {
    $('.dashboard-body').children().hide();
    currentUser.destinations.forEach(destination => {
      $('.dashboard-body').append(`<div class="dashboard-entry card">
        <div class="dashboard-image">
          <img src=${destination.image} class="card-image">
        </div>
        <div class="dashboard-info">
          <h2 class="bold underline">${destination.destination}</h2>
        </div>
      </div>`)
    });
    $('.filter-display').html(`<h3 class='bold center filter-display'>Your Trips (all):</h3>`)
  },
  displayPastTrips: (currentUser) => {
    $('.dashboard-body').children().hide();
    let pastDestinations = currentUser.getPastDestinations()
    if (pastDestinations.length) {
      $('.dashboard-body').children().hide();
      pastDestinations.forEach(destination => {
        $('.dashboard-body').append(`<div class="dashboard-entry card">
          <div class="dashboard-image">
            <img src=${destination.image} class="card-image">
          </div>
          <div class="dashboard-info">
            <h2 class="bold underline">${destination.destination}</h2>
          </div>
        </div>`)
      })
    } else {
      $('.dashboard-body').children().hide();
      $('.dashboard-body').append(`<h1 class='underline center'>No past trips</h1>`)
    }
    $('.filter-display').html(`<h3 class='bold center filter-display'>Your Trips (past):</h3>`)
  },
  displayCurrentTrips: (currentUser) => {
    $('.dashboard-body').children().hide();
    let currentDestinations = currentUser.getCurrentDestinations()
    if (currentDestinations.length) {
      $('.dashboard-body').children().hide();
      currentDestinations.forEach(destination => {
        $('.dashboard-body').append(`<div class="dashboard-entry card">
          <div class="dashboard-image">
            <img src=${destination.image} class="card-image">
          </div>
          <div class="dashboard-info">
            <h2 class="bold underline">${destination.destination}</h2>
          </div>
        </div>`)
      })
    } else {
      $('.dashboard-body').children().hide();
      $('.dashboard-body').append(`<h1 class='underline center'>No currently active trips</h1>`)
    }
    $('.filter-display').html(`<h3 class='bold center filter-display'>Your Trips (current):</h3>`)
  },
  displayPendingTrips: (currentUser) => {
    console.log(currentUser);
    $('.dashboard-body').children().hide();
    let pendingDestinations = currentUser.getPendingDestinations()
    if (pendingDestinations.length) {
      $('.dashboard-body').children().hide();
      pendingDestinations.forEach(destination => {
        $('.dashboard-body').append(`<div class="dashboard-entry card">
          <div class="dashboard-image">
            <img src=${destination.image} class="card-image">
          </div>
          <div class="dashboard-info">
            <h2 class="bold underline">${destination.destination}</h2>
          </div>
        </div>`)
      })
    } else {
      $('.dashboard-body').children().hide();
      $('.dashboard-body').append(`<h1 class='underline center'>No currently pending trips</h1>`)
    }
    $('.filter-display').html(`<h3 class='bold center filter-display'>Your Trips (pending):</h3>`)
  },
  displayUpcomingTrips: (currentUser) => {
    $('.dashboard-body').children().hide();
    let upcomingDestinations = currentUser.getUpcomingDestinations()
    if (upcomingDestinations.length) {
      $('.dashboard-body').children().hide();
      upcomingDestinations.forEach(destination => {
        $('.dashboard-body').append(`<div class="dashboard-entry card">
          <div class="dashboard-image">
            <img src=${destination.image} class="card-image">
          </div>
          <div class="dashboard-info">
            <h2 class="bold underline">${destination.destination}</h2>
          </div>
        </div>`)
      })
    } else {
      $('.dashboard-body').children().hide();
      $('.dashboard-body').append(`<h1 class='underline center'>No upcoming trips</h1>`)
    }
    $('.filter-display').html(`<h3 class='bold center filter-display'>Your Trips (upcoming):</h3>`)
  }
};

export default domUpdates;
