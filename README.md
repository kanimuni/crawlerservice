# crawlerservice
This repo contains all the workings of the crawler service for the product tandem.
When the crawlconductor.js file is run it kicks off 5 crawlers and inserts its findings into the mongodatabase for other services to use.

To test this service
Simply fork and clone this repo and run `npm install`
You will need to create a /env directory on root and create file namce mongoconfig.js
This file will need to have the following.
Substitute  

module.exports = {
  url: 'mongodb://<username>:<password>@<your-mongo-server-url>:27017'
}
