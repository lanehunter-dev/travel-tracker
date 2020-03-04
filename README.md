# Freudian Trip, the Travel Tracker!

### Abstract
*Freudian Trip is the travel booking site you've always wanted, with the ability to browse destinations, view estimated costs, and book trips to your dream destinations!*  
**This Travel Tracker app is the final project of my second quarter at the Turing School of Software & Design.

## Screenshots
#### Login Page
![login page](https://i.postimg.cc/FzgwsGwP/Screen-Shot-2020-03-04-at-1-51-38-AM.png)
#### Traveler Dashboard
![traveler dashboard](https://i.postimg.cc/Bnwk6jwG/Screen-Shot-2020-03-04-at-1-52-21-AM.png)
#### Destination Picker
![destination picker](https://i.postimg.cc/0NM3J9LK/Screen-Shot-2020-03-04-at-1-52-51-AM.png)
#### Booking a New Trip
![modal for booking a trip](https://i.postimg.cc/HLqNwfgZ/Screen-Shot-2020-03-04-at-1-53-50-AM.png)
#### Agent Dashboard Header
![agent dashboard header](https://i.postimg.cc/htpMsvk3/Screen-Shot-2020-03-04-at-1-59-34-AM.png)

### Project Goals
The goal of this solo project was to build an app from the ground up (*in 1 week, whew...*) that interacts with an API. Data is pulled from one of 3 databases and is dynamically displayed as you navigate. The user also has the ability to post a new data object to the API through a simple, intuitive UI.
In addition to the above functionalities, there is also an alternative agent login that can view data for all users.
The UI/UX was designed by me and inspired by TripAdvisor's aesthetic.

### Technologies/Paradigms Used
- JavaScript - OOP
- JS Class Inheritance
- jQuery
- HTML
- CSS/SCSS
- fetch API
- Mocha/Chai testing

### Challenges
- Designing this app in such a time cruch was quite a challenge. The first several days were spent planning out the class structure and mapping out the responsibility of each required functionality. This was the first time a project spec didn't specify any class structure, and this experience was extremely rewarding.
- Many behaviors had the opportunity to belong to several different classes within the codebase. Deciding where these not-so-obvious behaviors should go required a bit of creativity mixed with research into industry best practices.

### Future Additions
- Add in more standard functionalities such as the ability to log out, persist dashboards w/ session storage, and search bars.
- I'd like to spend more time with the UI/UX. Although I'm happy with the overall experience of the app, I still would love to give it bit more TLC.
- Testing using spies and mocking out fetch calls
- Better error handling for invalid inputs
- Loading animations
- Responsive design

### Setup
- Clone down the repo 
- Change into the project directory in your command line
- Install NPM
- Run `npm start`
- Copy and paste the provided localhost url provided in the command line
