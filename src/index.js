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


$('.login-btn').click(attemptLogin);
$('h1').click(async function() {
  // console.log(m < m2);
  // console.log(await currentUser.getTrips());
  console.log(currentUser.getNumTravelersOnTripsToday());
  ;
  // console.log(currentUser.getCurrentTrips());

  // console.log(await currentUser.getPendingTrips());
  // console.log(await currentUser.getTotalTripCostPerYear());
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
    currentUser = await loginTraveler(travelerNum);
  } else if (username.includes('traveler') && password !== 'travel2020') {
    console.log('invalid pass');
  } else if (username === 'agency' && password === 'travel2020') {
    console.log('valid agent login');
    currentUser = await loginAgency(tripData, destinationData);
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
