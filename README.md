# crawler-service
This repo contains all the workings of the crawler service for the product tandem.
The crawlconductor.js file is what sets things in motion.
When run it does the following ...
1. drop all articles previously stored in the collection "news" (mongodb).
2. read the article currently in the database tandem (MySQL)
3. kick off the crawelers and save the scapted articles into the "news" collection (mongodb).
4. Check if there are any new articles in the just crawled and saved data that does not exist in our tandem database.
5. If yes present only those new articles in the collection "newnews" (mongodb)
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
This will run the all of the 5 steps above one time.

# Run tests
No test environment yet

# Technologies
- Node
- MongoDB 

# Deployment:
- MongoDB deployed on EC2
- MySQL DB deployed in as an RDS service on EC2.
- The crawler serivice is deployed on EC2
