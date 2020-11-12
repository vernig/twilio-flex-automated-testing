# Automated tests for your Flex plugins using Jest and Puppeteer

This is the code companion for [this blogpost](https://www.twilio.com/blog/flex-plugins-automated-tests). You can find there a detailed descriptions of this repo. 

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com) installed.

Afterwards, install the dependencies by running `npm install`:

```bash
$ npm install
```

## Test

To run the sample tests:

1. Start a local development istance of Flex: 
```bash
$ twilio flex:plugins:start
```
2. Execute the test script: 
```bash
$ twilio flex:plugins:test
```
