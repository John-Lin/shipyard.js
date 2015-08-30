var request = require('request');
var httpStatus = require('http-status');

function ShipyardJS(host, key) {
  this.SERVICE_KEY = key || null;
  this.HOST = host || '127.0.0.1:8080';
}

ShipyardJS.prototype.isKeyValid = function(key, callback) {
  request.get(
    {
      url: 'http://' + this.HOST + '/api/cluster/info',
      headers: {'X-Service-Key': key},
      timeout: 30000,
    },
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        callback(null, true);
      } else if (!error && response.statusCode === 401) {
        callback(null, false);
      } else {
        callback(error, false);
      }
    });
};

ShipyardJS.prototype.listContainers = function(callback) {
  request.get(
    {
      url: 'http://' + this.HOST + '/api/containers',
      headers: {'X-Service-Key': this.SERVICE_KEY},
    },
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var res = JSON.parse(body);
        callback(null, res);
      } else {
        callback(new Error(httpStatus[response.statusCode]));
      }
    });

};

ShipyardJS.prototype.deployContainer = function(payload, callback) {
  request.post(
    {
      url: 'http://' + this.HOST + '/api/containers',
      json: payload,
      headers: {'X-Service-Key': this.SERVICE_KEY},
    },
    function(error, response, body) {
      if (!error && response.statusCode === 201) {
        callback(null, body);
      } else {
        console.log(body);
        callback(new Error(httpStatus[response.statusCode]));
      }
    });
};

ShipyardJS.prototype.inspectContainer = function(containerID, callback) {
  request.get(
    {
      url: 'http://' + this.HOST + '/api/containers/' + containerID,
      headers: {'X-Service-Key': this.SERVICE_KEY},
    },
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var res = JSON.parse(body);
        callback(null, res);
      } else {
        callback(new Error(httpStatus[response.statusCode]));
      }
    });
};

ShipyardJS.prototype.destoryContainer = function(containerID, callback) {
  request.del(
    {
      url: 'http://' + this.HOST + '/api/containers/' + containerID,
      headers: {'X-Service-Key': this.SERVICE_KEY},
    },
    function(error, response, body) {
      if (!error && response.statusCode === 204) {
        callback(null, 'Deleted ' + containerID);
      } else {
        callback(new Error(httpStatus[response.statusCode]));
      }
    });
};

ShipyardJS.prototype.stopContainer = function(containerID, callback) {
  request.get(
    {
      url: 'http://' + this.HOST + '/api/containers/' + containerID + '/stop',
      headers: {'X-Service-Key': this.SERVICE_KEY},
    },
    function(error, response, body) {
      if (!error && response.statusCode === 204) {
        callback(null, 'Stoped ' + containerID);
      } else {
        callback(new Error(httpStatus[response.statusCode]));
      }
    });

};

ShipyardJS.prototype.restartContainer = function(containerID, callback) {
  request.get(
    {
      url: 'http://' + this.HOST + '/api/containers/' + containerID + '/restart',
      headers: {'X-Service-Key': this.SERVICE_KEY},
    },
    function(error, response, body) {
      if (!error && response.statusCode === 204) {
        callback(null, 'Restarted ' + containerID);
      } else {
        callback(new Error(httpStatus[response.statusCode]));
      }
    });

};

ShipyardJS.prototype.logsContainer = function(containerID, callback) {
  request.get(
    {
      url: 'http://' + this.HOST + '/api/containers/' + containerID + '/logs',
      headers: {'X-Service-Key': this.SERVICE_KEY},
    },
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        callback(null, body);
      } else {
        callback(new Error(httpStatus[response.statusCode]));
      }
    });

};

ShipyardJS.prototype.listEngines = function(callback) {
  request.get(
    {
      url: 'http://' + this.HOST + '/api/engines',
      headers: {'X-Service-Key': this.SERVICE_KEY},
    },
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var res = JSON.parse(body);
        callback(null, res);
      } else {
        callback(new Error(httpStatus[response.statusCode]));
      }
    });

};

ShipyardJS.prototype.getClusterInfo = function(callback) {
  request.get(
    {
      url: 'http://' + this.HOST + '/api/cluster/info',
      headers: {'X-Service-Key': this.SERVICE_KEY},
    },
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var res = JSON.parse(body);
        callback(null, res);
      } else {
        callback(new Error(httpStatus[response.statusCode]));
      }
    });
};

module.exports = ShipyardJS;
