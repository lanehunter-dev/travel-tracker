import $ from 'jquery';
import moment from 'moment'

import './css/base.scss';
import domUpdates from './domUpdates.js';
import dataParser from './dataParser.js';
import Traveler from './traveler.js';
import Agent from './agent.js'
import './images/057-placeholder.svg'
let currentUser;
let destinationData;
let tripData;

autoLogin()

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
  destinationData = await dataParser.fetchAllDestinations();
  tripData = await dataParser.fetchTripsForAllTravelers();
  var data = await dataParser.fetchTraveler(travelerNum);
  currentUser = new Traveler(data)
  return currentUser;
}

async function loginAgency(tripData, destinationData) {
  var travelerData = await dataParser.fetchAllTravelers();
  return new Agent(tripData, destinationData, travelerData);
}

async function autoLogin() {
  await loginTraveler(45)
  showUserDashboard()
}

async function showUserDashboard() {
  await currentUser.getTrips();
  await currentUser.getMyDestinations(destinationData);
  domUpdates.showUserDashboard();
  domUpdates.displayWelcomeMsg(currentUser);
  domUpdates.displayUserTrips(currentUser);
  domUpdates.showNewTripBtn();
}

$('.dashboard-header-nav').on('change', () => {
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

$(document).on('click', '.book-trip', displayDestinationPicker)
$(document).on('click', '.go-back', goBack)
$(document).on('click', '.cancel', closeModal)
$(document).on('click', '.confirm', validateForm)
$(document).on('click', '.overlay, .overlay-text, .bottom-action-btn', showModal)

function displayDestinationPicker() {
  domUpdates.displayDestinationPicker(destinationData);
}

function goBack() {
  domUpdates.showUserDashboard();
  domUpdates.displayWelcomeMsg(currentUser);
  domUpdates.displayUserTrips(currentUser);
}

function closeModal() {
  domUpdates.closeModal();
}

function showModal() {
  let destinationID = parseInt(event.target.parentNode.parentNode.id);
  domUpdates.displayNewTripModal(destinationID, destinationData)
  $('#start-date, #end-date').attr('min', new Date().toISOString().slice(0, 10));
}

function validateForm() {
  event.preventDefault();
  let startDate = moment($('#start-date').val());
  let endDate = moment($('#end-date').val());
  let duration = moment.duration(endDate.diff(startDate)).days()
  if (duration > 0 && $('#num-travelers').val() > 0) {
    confirmTrip()
  } else {
    alert('Please input valid parameters')
  }
}

async function confirmTrip() {
  let numTravelers = parseInt($('#num-travelers').val());
  let startDate = moment($('#start-date').val());
  console.log(startDate);
  let endDate = moment($('#end-date').val());
  let duration = moment.duration(endDate.diff(startDate)).days();
  startDate = startDate.format('YYYY/MM/DD')
  let destinationID = parseInt(event.target.parentNode.id)
  await dataParser.sendTripRequest(currentUser, numTravelers, startDate, duration, destinationID)
  await loginTraveler(currentUser.id);
  await showUserDashboard();
  closeModal();
  goBack();
}
