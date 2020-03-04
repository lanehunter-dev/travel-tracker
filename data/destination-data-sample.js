let destinationData = {
	destinations: [
		{
			id: 1,
			destination: "Lima, Peru",
			estimatedLodgingCostPerDay: 70,
			estimatedFlightCostPerPerson: 400,
			image:
				"https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
			alt: "overview of city buildings with a clear sky"
		},
		{
			id: 2,
			destination: "Stockholm, Sweden",
			estimatedLodgingCostPerDay: 100,
			estimatedFlightCostPerPerson: 780,
			image:
				"https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			alt: "city with boats on the water during the day time"
		},
		{
			id: 3,
			destination: "Sydney, Austrailia",
			estimatedLodgingCostPerDay: 130,
			estimatedFlightCostPerPerson: 950,
			image:
				"https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			alt: "opera house and city buildings on the water with boats"
		},
		{
			id: 4,
			destination: "Cartagena, Colombia",
			estimatedLodgingCostPerDay: 65,
			estimatedFlightCostPerPerson: 350,
			image:
				"https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
			alt: "boats at a dock during the day time"
		},
		{
			id: 5,
			destination: "Madrid, Spain",
			estimatedLodgingCostPerDay: 150,
			estimatedFlightCostPerPerson: 650,
			image:
				"https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			alt: "city with clear skys and a road in the day time"
		},
		{
			id: 6,
			destination: "Jakarta, Indonesia",
			estimatedLodgingCostPerDay: 70,
			estimatedFlightCostPerPerson: 890,
			image:
				"https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			alt: "lit up city at night"
		},
		{
			id: 7,
			destination: "Paris, France",
			estimatedLodgingCostPerDay: 100,
			estimatedFlightCostPerPerson: 395,
			image:
				"https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
			alt: "city during the day time with eiffel tower"
		},
		{
			id: 8,
			destination: "Tokyo, Japan",
			estimatedLodgingCostPerDay: 125,
			estimatedFlightCostPerPerson: 1000,
			image:
				"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=80",
			alt:
				"city with people walking in crosswalk and brightly lit shops at night"
		},
		{
			id: 9,
			destination: "Amsterdam, Netherlands",
			estimatedLodgingCostPerDay: 100,
			estimatedFlightCostPerPerson: 950,
			image:
				"https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			alt: "canal with boats and trees and buildings along the side"
		},
		{
			id: 10,
			destination: "Toronto, Canada",
			estimatedLodgingCostPerDay: 90,
			estimatedFlightCostPerPerson: 450,
			image:
				"https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2756&q=80"
		},
		{
			id: 11,
			destination: "Mikonos, Greece",
			estimatedLodgingCostPerDay: 140,
			estimatedFlightCostPerPerson: 1000,
			image:
				"https://images.unsplash.com/photo-1573783309724-e44b859f5a85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80",
			alt: "cityscape along the water during the day"
		},
		{
			id: 12,
			destination: "Wellington, New Zealand",
			estimatedLodgingCostPerDay: 150,
			estimatedFlightCostPerPerson: 1200,
			image:
				"https://images.unsplash.com/photo-1442483221814-59f7d8b22739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			alt: "overview of city with buildings, water and trees"
		},
		{
			id: 13,
			destination: "St. Petersburg, Russia",
			estimatedLodgingCostPerDay: 100,
			estimatedFlightCostPerPerson: 1100,
			image:
				"https://images.unsplash.com/photo-1556543697-2fb00d31948a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			alt:
				"buildings and people crossing the street carrying shoping bags during the day"
		},
		{
			id: 14,
			destination: "Marrakesh, Morocco",
			estimatedLodgingCostPerDay: 70,
			estimatedFlightCostPerPerson: 830,
			image:
				"https://images.unsplash.com/photo-1517821362941-f7f753200fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
			alt: "people buying oranges and other fruit from a street vendor"
		},
		{
			id: 15,
			destination: "Manila, Philippines",
			estimatedLodgingCostPerDay: 40,
			estimatedFlightCostPerPerson: 900,
			image:
				"https://images.unsplash.com/photo-1555557356-51c5d7a8f4c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			alt: "colorful buildings near the water with docked boats"
		},
		{
			id: 16,
			destination: "Bangkok, Thailand",
			estimatedLodgingCostPerDay: 35,
			estimatedFlightCostPerPerson: 988,
			image:
				"https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
			alt: "ornate buildings with a garden during the day"
		},
		{
			id: 17,
			destination: "Jaipur, India",
			estimatedLodgingCostPerDay: 30,
			estimatedFlightCostPerPerson: 1200,
			image:
				"https://images.unsplash.com/photo-1534758607507-754e582adfa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			alt: "a courtyard with trees and mountain in the distance"
		},
		{
			id: 18,
			destination: "Cape Town, South Africa",
			estimatedLodgingCostPerDay: 120,
			estimatedFlightCostPerPerson: 1200,
			image:
				"https://images.unsplash.com/photo-1522576775862-7168ae29372c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80",
			alt: "a city with mountain cliffs by the sea"
		},
		{
			id: 19,
			destination: "Quito, Ecuador",
			estimatedLodgingCostPerDay: 60,
			estimatedFlightCostPerPerson: 500,
			image:
				"https://images.unsplash.com/photo-1501684691657-cf3012635478?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
			alt: "a city at night with cloudy, snowy mountains in the distance"
		},
		{
			id: 20,
			destination: "Miami, Florida",
			estimatedLodgingCostPerDay: 158,
			estimatedFlightCostPerPerson: 275,
			image:
				"https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1573&q=80",
			alt: "sand with palm trees and tall buildings in the background"
		},
		{
			id: 21,
			destination: "Tulum, Mexico",
			estimatedLodgingCostPerDay: 100,
			estimatedFlightCostPerPerson: 350,
			image:
				"https://images.unsplash.com/photo-1501619593928-bef49688c888?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			alt: "a donkey standing on the beach"
		},
		{
			id: 22,
			destination: "Rome, Italy",
			estimatedLodgingCostPerDay: 90,
			estimatedFlightCostPerPerson: 650,
			image:
				"https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			alt: "people standing inside a colosseum during the day"
		},
		{
			id: 23,
			destination: "Copenhagen, Denmark",
			estimatedLodgingCostPerDay: 120,
			estimatedFlightCostPerPerson: 1000,
			image:
				"https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			alt:
				"colorful buildings with holiday decorations by the water with tents and docked boats"
		},
		{
			id: 24,
			destination: "Vilnius, Lithuania",
			estimatedLodgingCostPerDay: 65,
			estimatedFlightCostPerPerson: 1100,
			image:
				"https://images.unsplash.com/photo-1549891472-991e6bc75d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
			alt: "overhead view of a city with a hot air balloon"
		},
		{
			id: 25,
			destination: "New York, New York",
			estimatedLodgingCostPerDay: 175,
			estimatedFlightCostPerPerson: 200,
			image:
				"https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			alt:
				"people crossing the street during the day surrounded by tall buildings and advertisements"
		},
		{
			id: 26,
			destination: "London, England",
			estimatedLodgingCostPerDay: 100,
			estimatedFlightCostPerPerson: 1000,
			image:
				"https://images.unsplash.com/photo-1549471156-52ee71691122?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			alt: "city with bridge under night sky"
		},
		{
			id: 27,
			destination: "San Francisco, California",
			estimatedLodgingCostPerDay: 175,
			estimatedFlightCostPerPerson: 200,
			image:
				"https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
			alt: "golden gate bridge during the day time"
		},
		{
			id: 28,
			destination: "San Juan, Puerto Rico",
			estimatedLodgingCostPerDay: 70,
			estimatedFlightCostPerPerson: 900,
			image:
				"https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
			alt:
				"white and brown concrete buildings near sea under white clouds during daytime"
		},
		{
			id: 29,
			destination: "Willemstad, Curaçao",
			estimatedLodgingCostPerDay: 80,
			estimatedFlightCostPerPerson: 1100,
			image:
				"https://images.unsplash.com/photo-1541748603027-cbfefa3a6c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
			alt: "brightly colored buildings near body of water"
		},
		{
			id: 30,
			destination: "Antananarivo, Madagascar",
			estimatedLodgingCostPerDay: 70,
			estimatedFlightCostPerPerson: 1200,
			image:
				"https://images.unsplash.com/photo-1563656353898-febc9270a0f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			alt: "landscape photo of a city skyline"
		},
		{
			id: 31,
			destination: "Colombo, Sri Lanka",
			estimatedLodgingCostPerDay: 55,
			estimatedFlightCostPerPerson: 1300,
			image:
				"https://images.unsplash.com/photo-1578159802020-13ec49d669df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			alt: "people walking inside flea market"
		},
		{
			id: 32,
			destination: "Kathmandu, Nepal",
			estimatedLodgingCostPerDay: 45,
			estimatedFlightCostPerPerson: 1200,
			image:
				"https://images.unsplash.com/photo-1558799401-1dcba79834c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
			alt: "temple with buntings during daytime"
		},
		{
			id: 33,
			destination: "Brussels, Belgium",
			estimatedLodgingCostPerDay: 1000,
			estimatedFlightCostPerPerson: 110,
			image:
				"https://images.unsplash.com/photo-1559113202-c916b8e44373?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			alt: "brown concrete gate"
		},
		{
			id: 34,
			destination: "Seoul, South Korea",
			estimatedLodgingCostPerDay: 1200,
			estimatedFlightCostPerPerson: 150,
			image:
				"https://images.unsplash.com/photo-1578193661644-dee2e67b779b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2025&q=80",
			alt: "aerial photography of city during daytime"
		},
		{
			id: 35,
			destination: "Anchorage, Alaska",
			estimatedLodgingCostPerDay: 200,
			estimatedFlightCostPerPerson: 100,
			image:
				"https://images.unsplash.com/photo-1539545547102-90ae2c140089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			alt: "man riding on kayak surrounded by mountains"
		},
		{
			id: 36,
			destination: "Reykjavík, Iceland",
			estimatedLodgingCostPerDay: 900,
			estimatedFlightCostPerPerson: 120,
			image:
				"https://images.unsplash.com/photo-1515005319369-c4406c3f832b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
			alt: "frozen river in the middle of rock mountains"
		},
		{
			id: 37,
			destination: "Frankfurt, Germany",
			estimatedLodgingCostPerDay: 1100,
			estimatedFlightCostPerPerson: 150,
			image:
				"https://images.unsplash.com/photo-1564859117892-8c3657465bfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
			alt: "grey concrete bridge at night"
		},
		{
			id: 38,
			destination: "Helsinki, Finland",
			estimatedLodgingCostPerDay: 950,
			estimatedFlightCostPerPerson: 100,
			image:
				"https://images.unsplash.com/photo-1517128581046-8ee7e6fa3cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1484&q=80",
			alt: "two white motorboats on dock near brown trees at daytime"
		},
		{
			id: 39,
			destination: "Porto, Portugal",
			estimatedLodgingCostPerDay: 995,
			estimatedFlightCostPerPerson: 90,
			image:
				"https://images.unsplash.com/photo-1564644929137-34b018daf461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80",
			alt: "looking over the water on to a city on a hill"
		},
		{
			id: 40,
			destination: "La Isla Tortuga, Costa Rica",
			estimatedLodgingCostPerDay: 600,
			estimatedFlightCostPerPerson: 80,
			image:
				"https://images.unsplash.com/photo-1536708880921-03a9306ec47d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80",
			alt: "trees near seashore"
		},
		{
			id: 41,
			destination: "Montego Bay, Jamaica",
			estimatedLodgingCostPerDay: 500,
			estimatedFlightCostPerPerson: 100,
			image:
				"https://images.unsplash.com/photo-1557129604-0e50f1300fab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
			alt: "boats docked beside trees on river"
		},
		{
			id: 42,
			destination: "Santo Domingo, Dominican Republic",
			estimatedLodgingCostPerDay: 400,
			estimatedFlightCostPerPerson: 80,
			image:
				"https://images.unsplash.com/photo-1510541383520-4daa77a666cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1782&q=80",
			alt: "aerial view of houses and high rise building"
		},
		{
			id: 43,
			destination: "Nassau, The Bahamas",
			estimatedLodgingCostPerDay: 550,
			estimatedFlightCostPerPerson: 90,
			image:
				"https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1664&q=80",
			alt: "aerial photography of white and blue cruise ships during daytime"
		},
		{
			id: 44,
			destination: "Caye Caulker, Belize",
			estimatedLodgingCostPerDay: 450,
			estimatedFlightCostPerPerson: 80,
			image:
				"https://images.unsplash.com/photo-1544525977-0a3bca9e560d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
			alt: "boat on dock during daytime"
		},
		{
			id: 45,
			destination: "Calgary, Canada",
			estimatedLodgingCostPerDay: 200,
			estimatedFlightCostPerPerson: 125,
			image:
				"https://images.unsplash.com/photo-1523167508699-c34c50472b01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
			alt: "city buildings reflection on body of water"
		},
		{
			id: 46,
			destination: "Victoria, Seychelles",
			estimatedLodgingCostPerDay: 1100,
			estimatedFlightCostPerPerson: 100,
			image:
				"https://images.unsplash.com/photo-1539980307411-6820f89db71b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
			alt: "birds eye photography of body of water"
		},
		{
			id: 47,
			destination: "Zürich, Switzerland",
			estimatedLodgingCostPerDay: 1100,
			estimatedFlightCostPerPerson: 110,
			image:
				"https://images.unsplash.com/photo-1515488764276-beab7607c1e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1390&q=80",
			alt: "landscape photo of cityscape"
		},
		{
			id: 48,
			destination: "Dar es Salaam, Tanzania",
			estimatedLodgingCostPerDay: 1200,
			estimatedFlightCostPerPerson: 100,
			image:
				"https://images.unsplash.com/photo-1568625502763-2a5ec6a94c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
			alt: "aerial photography of high-rise building"
		},
		{
			id: 49,
			destination: "Castries, St Lucia",
			estimatedLodgingCostPerDay: 650,
			estimatedFlightCostPerPerson: 90,
			image:
				"https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
			alt: "aerial photography of rocky mountain under cloudy sky"
		},
		{
			id: 50,
			destination: "Hobart, Tasmania",
			estimatedLodgingCostPerDay: 1400,
			estimatedFlightCostPerPerson: 75,
			image:
				"https://images.unsplash.com/photo-1506982724953-b1fbe939e1e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
			alt: "person sitting on brown rock in front of body of water"
		},
		{
			id: 5280,
			destination: "Brothers Bar, Denver, CO",
			estimatedLodgingCostPerDay: 2,
			estimatedFlightCostPerPerson: 6,
			image:
				"https://www.milehighhappyhour.com/wp-content/uploads/2013/12/Its-Brothers-1000x500.jpg",
			alt: "Bar full of turing students"
		},
		{
			id: 51,
			destination: "The Sun, Outer Space",
			estimatedLodgingCostPerDay: 0,
			estimatedFlightCostPerPerson: 0,
			image: "https://m.media-amazon.com/images/I/81BQWQAIH1L._SS500_.jpg",
			alt: "The Sun what can I say its, A little warm"
		},
		{
			id: 52,
			destination: "Candy Mountain",
			estimatedLodgingCostPerDay: 500,
			estimatedFlightCostPerPerson: 40,
			image:
				"https://vignette.wikia.nocookie.net/charlie-the-unicorn-series/images/3/30/The_Candy_Mountain.jpg/revision/latest?cb=20140926005930",
			alt: "Welcom to candy mountain Charlie"
		},
		{
			id: 53,
			destination: "Turing",
			estimatedLodgingCostPerDay: 94,
			estimatedFlightCostPerPerson: 2,
			image: "https://miro.medium.com/max/2200/1*AyEW-Sm5r43Hz1TY41fqnA.png",
			alt: "You will work your self into the ground, Turing"
		},
		{
			id: 54,
			destination: "Heaven",
			estimatedLodgingCostPerDay: 0,
			estimatedFlightCostPerPerson: 0,
			image:
				"https://www.siegfriedsilverman.com/wp-content/uploads/2017/03/stairs-to-heaven-886x1024.jpg",
			alt: "Once you go you'll never return"
		},
		{
			id: 55,
			destination: "Hogwarts School of Witchcraft and Wizardry",
			estimatedLodgingCostPerDay: 300,
			estimatedFlightCostPerPerson: 1000,
			image:
				"https://images.ctfassets.net/usf1vwtuqyxm/7EsDSrJhr0pNwUNK8lrUwY/f8d7e5101de6dda8f46c0f94673087a9/HP-Hogwarts-39PHOTOBU17074_PHUP_HP.jpg",
			alt: "Your a Wizzard"
		},
		{
			id: 56,
			destination: "Willy Wonka's Factory",
			estimatedLodgingCostPerDay: 300,
			estimatedFlightCostPerPerson: 100,
			image: "https://s3.scoopwhoop.com/swet/ficplaces/p2.jpeg",
			alt: "Golden Ticket to Enter the Factory"
		},
		{
			id: 57,
			destination: "The Shire",
			estimatedLodgingCostPerDay: 600,
			estimatedFlightCostPerPerson: 900,
			image: "https://s3.scoopwhoop.com/swet/ficplaces/p9.jpg",
			alt: "House on a peacefull Hill"
		},
		{
			id: 58,
			destination: "Mordor",
			estimatedLodgingCostPerDay: 600,
			estimatedFlightCostPerPerson: 900,
			image:
				"https://vignette.wikia.nocookie.net/lotr/images/e/ec/Mordor%27s_DuoSpire.png/revision/latest?cb=20120621003755",
			alt: "One does not simply walk in"
		},
		{
			id: 59,
			destination: "King's Landing",
			estimatedLodgingCostPerDay: 600,
			estimatedFlightCostPerPerson: 900,
			image: "https://s3.scoopwhoop.com/swet/ficplaces/p17.jpg",
			alt: "Are you ready to play the only game that matters"
		},
		{
			id: 60,
			destination: "Winterfell",
			estimatedLodgingCostPerDay: 600,
			estimatedFlightCostPerPerson: 900,
			image:
				"https://vignette.wikia.nocookie.net/gameofthrones/images/0/08/1x01_Winterfell.jpg/revision/latest?cb=20170813191451",
			alt: "Winter is Coming"
		},
		{
			id: 66,
			destination: "Radiator Springs",
			estimatedLodgingCostPerDay: 600,
			estimatedFlightCostPerPerson: 900,
			image:
				"https://static2.thetravelimages.com/wordpress/wp-content/uploads/2018/07/Screen-Shot-2018-07-10-at-11.24.10-PM.png?q=50&fit=crop&w=740&h=457&dpr=1.5",
			alt: "Mater"
		},
		{
			id: 131313,
			destination: "Your Moms House",
			estimatedLodgingCostPerDay: 10,
			estimatedFlightCostPerPerson: 45,
			image: "https://images.app.goo.gl/edVfPxUbxFyUVXyGA",
			alt: "Mrs. James House"
		},
		{
			id: 1583277880555,
			destination: "Wuhan, China",
			estimatedLodgingCostPerDay: 93,
			estimatedFlightCostPerPerson: 809,
			image:
				"https://cdn.vox-cdn.com/thumbor/n42gibOtWjgED2EJsktC7t5Nn54=/0x0:5568x3712/1200x675/filters:focal(2299x1150:3189x2040)/cdn.vox-cdn.com/uploads/chorus_image/image/66227037/1201746525.jpg.8.jpg",
			alt: "Four people in hazmat suits spraying chemicals"
		},
		{
			id: 1583279605672,
			destination: "Hell",
			estimatedLodgingCostPerDay: 666,
			estimatedFlightCostPerPerson: 666,
			image:
				"https://wp-media.patheos.com/subdomain/sites/8/2019/01/shutterstock_716962249.jpg",
			alt: "Hands clawing their way out of eternal suffering"
		},
		{
			id: 303,
			destination: "Voting booth",
			estimatedLodgingCostPerDay: 100,
			estimatedFlightCostPerPerson: 100,
			image:
				"https://images.radio.com/wwjaam/voting%20booth.jpg?width=775&height=425&crop=1024,563,x0,y35",
			alt: "Go Vote"
		},
		{
			id: 67,
			destination: "Pallet Town",
			estimatedLodgingCostPerDay: 100,
			estimatedFlightCostPerPerson: 100,
			image:
				"https://nightlygamingbinge.com/wp-content/uploads/2018/11/Pokemon-Lets-Go-Pallet-Town-Map.jpg",
			alt: "Pallet Town"
		},
		{
			id: 68,
			destination: "Agrabah",
			estimatedLodgingCostPerDay: 100,
			estimatedFlightCostPerPerson: 100,
			image:
				"https://imgix.bustle.com/mic/oogstpx6ycyd0uovqd2zo7ukrik1ixvzahbak5a0nifpiwqcxsnpspsjtk5kxjpv.jpg?w=1020&h=576&fit=crop&crop=faces&auto=format&q=70",
			alt: "Agrabah"
		},
		{
			id: 69,
			destination: "San Fransokyo",
			estimatedLodgingCostPerDay: 100,
			estimatedFlightCostPerPerson: 100,
			image:
				"https://vignette.wikia.nocookie.net/bighero6/images/3/39/San_Fransokyo_TV_Series.png/revision/latest?cb=20170816014355",
			alt: "San Fransokyo"
		},
		{
			id: 70,
			destination: "Ice Crown Citadel",
			estimatedLodgingCostPerDay: 100,
			estimatedFlightCostPerPerson: 100,
			image:
				"https://vignette.wikia.nocookie.net/wowwiki/images/2/2f/Icecrowncitadel.jpg/revision/latest?cb=20080818113744",
			alt: "Ice Crown Citadel"
		},
		{
			id: 71,
			destination: "Darlan",
			estimatedLodgingCostPerDay: 100,
			estimatedFlightCostPerPerson: 100,
			image:
				"https://gamepedia.cursecdn.com/wowpedia/thumb/5/5d/Dalaran_City.jpg/1200px-Dalaran_City.jpg",
			alt: "Darlan"
		},
		{
			id: 72,
			destination: "Tatooine",
			estimatedLodgingCostPerDay: 100,
			estimatedFlightCostPerPerson: 100,
			image:
				"https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-m6xfo_e2c4e766.jpeg?region=0%2C0%2C1200%2C587",
			alt: "Tatooine"
		},
		{
			id: 73,
			destination: "The Upside Down",
			estimatedLodgingCostPerDay: 898,
			estimatedFlightCostPerPerson: 361,
			image:
				"https://vignette.wikia.nocookie.net/strangerthings8338/images/f/f1/The_Flea_and_the_Acrobat_-_the_Monster_feeds.png/revision/latest?cb=20170409124503",
			alt: "The Upside Down"
		},
		{
			id: 74,
			destination: "Hyrule Castle",
			estimatedLodgingCostPerDay: 344,
			estimatedFlightCostPerPerson: 86,
			image:
				"https://vignette.wikia.nocookie.net/zelda/images/3/3a/Hyrulecastlemalice.png/revision/latest?cb=20170424233439",
			alt: "Hyrule Castle"
		}
	]
};

export default destinationData;
