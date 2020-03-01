import $ from 'jquery';

import './css/base.scss';
import domUpdates from './domUpdates.js';
import dataParser from './dataParser.js';
import Traveler from './traveler.js';
import './images/057-placeholder.svg'
let currentUser;
let destinationData;


$('.login-btn').click(attemptLogin);
$('h1').click(async function() {
  await currentUser.getTrips();
  await currentUser.getMyDestinations(destinationData)
  console.log(currentUser.getTotalTripCostPerYear())
  console.log(currentUser);
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
    destinationData = await dataParser.fetchAllDestinations()
  } else if (username.includes('traveler') && password !== 'travel2020') {
    console.log('invalid pass');
  } else if (username === 'agent' && password === 'travel2020') {
    console.log('valid agent login');
    domUpdates.showUsers();
  } else if (username === 'agent' && password !== 'travel2020') {
    console.log('invalid pass');
  } else {
    console.log('invalid user');
  }
}

async function loginTraveler(travelerNum) {
  let data = await dataParser.fetchTraveler(travelerNum);
  // console.log(data);
  return new Traveler(data);
}

// async function filterTrips() {
//   console.log(await dataParser.filterTripsByTraveler(30));
// }

async function showAllDestinations() {
  console.log(await dataParser.fetchAllDestinations());
}
