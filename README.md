# React News

This simple React App aggregates top news stories from random sources to ensure you don't miss out on anything happening around the world. While you'll be able to see various headlines and news summaries by default, you'll have to Login to have access to clickable links to read more on any story.

We used [Auth0](https://auth0.com/) to implement and manage authentication while the good guys at [News API](https://newsapi.org/) furnished us with the most relevant news items you can find online.

To run locally, you'll need to signup for both an Auth0 and NewsAPI free accounts; clone the repo; replace Auth0 credentials with your own and NewsAPI credentials on `server.js`; install dependencies; and run `node server.js` and `npm start` on separate terminals. App will run at `http://localhost:3000/` while Server will run at `http://localhost:3500/`.

The team included [Nancy E.](https://github.com/nancee1), [Joshua O.](https://github.com/oguntadej) and [John O.](https://github.com/johnotu).