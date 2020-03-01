import $ from 'jquery';

import './css/base.scss';
import domUpdates from './domUpdates.js';
import dataParser from './dataParser.js';
import Traveler from './traveler.js';
import Agent from './agent.js'
import './images/057-placeholder.svg'
let currentUser;
let destinationData;


$('.login-btn').click(attemptLogin);
$('h1').click(async function() {
  // await currentUser.getTrips();
  // await currentUser.getMyDestinations(destinationData)
  console.log(await currentUser.getTotalTripCostPerYear())
  console.log(await currentUser);
})

async function attemptLogin() {
  event.preventDefault();
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
    currentUser = await loginAgency();
    console.log(await currentUser.trips);
    console.log(await currentUser.getPendingTripRequests());
  } else if (username === 'agency' && password !== 'travel2020') {
    console.log('invalid pass');
  } else {
    console.log('invalid user');
  }
  destinationData = await dataParser.fetchAllDestinations()
}

async function loginTraveler(travelerNum) {
  var data = await dataParser.fetchTraveler(travelerNum);
  return new Traveler(data);
}

async function loginAgency(data) {
  var data = await dataParser.fetchAllTravelers();
  return new Agent(data);
}
