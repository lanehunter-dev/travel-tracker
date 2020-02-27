import chai from 'chai';
import Traveler from '../src/traveler.js';
const expect = chai.expect;
let traveler;

describe('traveler', function() {
  beforeEach('Function', function() {
    traveler = new Traveler();
  })

  it('should return true', function() {
    expect(true).to.equal(true);
  });
});
