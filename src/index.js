import $ from 'jquery';

import './css/base.scss';
import domUpdates from './domUpdates.js';
import dataParser from './dataParser.js';

import './images/057-placeholder.svg'


$('.login-btn').click(attemptLogin);

function attemptLogin() {
  event.preventDefault();
  let username = $('#username-field').val();
  let password = $('#password-field').val();
  let travelerNum = username.slice(8)
  if (username.includes('traveler') && password === 'travel2020') {
    console.log('valid user & pass');
    let travelerNum = username.slice(8);
    loginTraveler(travelerNum);
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
  console.log(await dataParser.fetchTraveler(travelerNum));
  // fetchTraveler(travelerNum)
}

async function filterTrips() {
  console.log(await dataParser.filterTripsByTraveler(30));
}

filterTrips();
