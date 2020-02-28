import $ from 'jquery';

import './css/base.scss';
import domUpdates from './domUpdates.js';

import './images/057-placeholder.svg'


$('.login-btn').click(attemptLogin);

function attemptLogin() {
  event.preventDefault();
  if ($('#username-field').val() === 'ass') {
    console.log(5);
  }
  domUpdates.showUsers();
}
