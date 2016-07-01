# crawler-service
This repo contains all the workings of the crawler service for the product tandem.
When the crawlconductor.js file is run it kicks off 5 crawlers and inserts its findings into the mongodatabase for other services to use.
The 5 news sites it crawls are npr, nytimes, washingtonpost, bbc and telegraph

![System Diagram](https://github.com/kanimuni/crawlerservice/blob/master/pics/diagram1.jpg "High Level Diagram")

# The setup
Simply fork and clone this repo and run `npm install`
You will need to create a /env directory on root and create file named mongoconfig.js
This file will need to have the information below.

```
module.exports = {
  url: 'mongodb://<username>:<password>@<your-mongo-server-url>:27017'
}
```
# Run the service

```
node crawlerconductor.js
```
This will run the crawlers every hour and update the mongodb accordingly

# Run tests
No test environment yet

# Technologies
- Node
- MongoDB 

# Deployment:
- MongoDB deployed on EC2
- Service is not deployed yet (6/29)
