class Traveler {
  constructor(travelerData) {
    this.name = travelerData.name;
    this.id = travelerData.id;
    this.username = "traveler" + this.id;
    this.password = "travel2020";
  }

}


export default Traveler;
