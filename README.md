# shipyardJS

A Shipyard API wrapper for Node.js

The documentation of Shipyard API
- http://shipyard-project.com/docs/api/

### Installation

```
$ npm install shipyard.js
```

### Usage

``` javascript
var ShipyardJS = require('shipyard.js');
var shipyard = new ShipyardJS('192.168.8.25:8080', 'YOUR_SERVICE_KEY');

shipyard.listContainers(function (err, results) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});
```
