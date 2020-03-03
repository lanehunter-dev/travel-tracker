import $ from 'jquery';
import moment from 'moment'
let m = moment('01/01/1990', 'MM/DD/YYYY')
let m2 = moment('01/05/1990', 'MM/DD/YYYY');

import './css/base.scss';
import domUpdates from './domUpdates.js';
import dataParser from './dataParser.js';
import Traveler from './traveler.js';
import Agent from './agent.js'
import './images/057-placeholder.svg'
let currentUser;
let destinationData;
let tripData;

// autoLogin()

$('.login-btn').click(attemptLogin);
$('header h1').click(() => {
  domUpdates.displayDestinationPicker(destinationData)
})
$('#trip-filter').change(() => {
  let value = $('#trip-filter').children("option:selected").val();
  if (value === 'all') {
    domUpdates.displayUserTrips(currentUser)
  } else if (value === 'past') {
    domUpdates.displayPastTrips(currentUser)
  } else if (value === 'current') {
    domUpdates.displayCurrentTrips(currentUser)
  } else if (value === 'upcoming') {
    domUpdates.displayUpcomingTrips(currentUser)
  } else if (value === 'pending') {
    domUpdates.displayPendingTrips(currentUser)
  }
})

async function attemptLogin() {
  event.preventDefault();
  destinationData = await dataParser.fetchAllDestinations();
  tripData = await dataParser.fetchTripsForAllTravelers();
  let username = $('#username-field').val();
  let password = $('#password-field').val();
  let travelerNum = username.slice(8)
  if (username.includes('traveler') && password === 'travel2020') {
    console.log('valid user & pass');
    let travelerNum = username.slice(8);
    currentUser = await loginTraveler(34);
    await currentUser.getTrips();
    console.log(currentUser);
    await currentUser.getMyDestinations(destinationData);
    domUpdates.showUserDashboard();
    domUpdates.displayWelcomeMsg(currentUser)
    domUpdates.displayUserTrips(currentUser);
    domUpdates.showNewTripBtn();
    $('#book-new-trip-btn').click(() => {
      console.log(55);
    })
  } else if (username === 'agency' && password === 'travel2020') {
    console.log('valid agent login');
    currentUser = await loginAgency(tripData, destinationData);
    console.log(currentUser);
    domUpdates.showAgentDashboard();
    domUpdates.displayWelcomeMsg(currentUser);
    domUpdates.displayNumTravelersOnTripsToday(currentUser)
    domUpdates.displayPendingTrips(currentUser);
  } else if (username.includes('traveler') && password !== 'travel2020') {
    console.log('invalid pass');
  } else if (username === 'agency' && password !== 'travel2020') {
    console.log('invalid pass');
  } else {
    console.log('invalid user');
  }
}

async function loginTraveler(travelerNum) {
  var data = await dataParser.fetchTraveler(travelerNum);

  return new Traveler(data);
}

async function loginAgency(tripData, destinationData) {
  var travelerData = await dataParser.fetchAllTravelers();
  return new Agent(tripData, destinationData, travelerData);
}

async function autoLogin() {
  destinationData = await dataParser.fetchAllDestinations();
  tripData = await dataParser.fetchTripsForAllTravelers();
  currentUser = await loginAgency(tripData, destinationData)
  // currentUser = await loginTraveler(45);
  // await currentUser.getTrips();
  // await currentUser.getMyDestinations(destinationData);
  console.log(currentUser);
  // domUpdates.displayUserTrips(currentUser)
  // domUpdates.showAgentDashboard();
  // domUpdates.displayWelcomeMsg(currentUser)

}
