# shipyard.js
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/shipyard.js.svg
[npm-url]: https://npmjs.org/package/shipyard.js

### Description

**Note: The new Shipyard API wrapper for v3 is in [here](https://github.com/John-Lin/shipyard-api). This project is deprecated because of Shipyard v3 was [released](https://github.com/shipyard/shipyard/releases/tag/v3.0.0) with new
APIs. **

A Shipyard v2.x.x API wrapper for `Node.js`

The documentation of Shipyard API
- http://shipyard-project.com/docs/api/

## Installation

```bash
npm install shipyard.js
```

## Usage

```javascript
var ShipyardJS = require('shipyard.js');
var shipyard = new ShipyardJS('192.168.8.25:8080', 'YOUR_SERVICE_KEY');

shipyard.listContainers(function (err, results) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});
```
