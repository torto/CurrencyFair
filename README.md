# CurrencyFair Test

## Approach and Architecture

The test is divided into two parts, the first is the back-end and the second is front-end.

- In the **back-end**, I chose to use NodeJs with Express to not complicate to install and the company evaluate my code easier I chose not use BD, so, to persist the data I used a file, but change to a BD is ease. I use two types to consume the data, the first is REST with GET and the second is via socket.io.

- In the **front-end**, I chose to use React with Redux and to create the map I used the lib "vx" (this lib uses D3 in your core)

The front-end and back-end is completely separate, is turn easier create a robust micro-serve and a robust single-page application.
Because we can use for example AWS (EC2) to back-end and CloudFlare to front.

## Install and execute

### Clone

`$~: git clone git@github.com:torto/CurrencyFair.git`

### Back-end

`~$ cd back-end`

`~/back-end$ npm install`

`~/back-end$ npm run start`

### Front-end

`~$ cd front-end`

`~/back-end$ npm install`

`~/back-end$ npm run start`

## URLs

## Back-end

Main url: `http://localhost:3001`

Consumer POST url: `http://localhost:3001/api/consumer`

## Front-end

Main url: `http://localhost:3000`

## Tests

## Back-end

Normal test: `~/back-end$ npm run test`

Test with watch: `~/back-end$ npm run test:watch`

Coverage: `~/back-end$ npm run coverage`

![Coverage back-end](/coverage-back.png)

## Front-end

Normal test: `~/front-end$ npm run test`

Coverage: `~/front-end$ npm run coverage`

![Coverage front-end](/coverage-front.png)
