var HTTPS, HTTP, director;
//Initiate Node Modules
HTTPS = require('https');
HTTP  = require('http' );
director = require('director');

//Prepare HTTP POST Request
var options = {
  hostname: 'challenge.code2040.org',
  path: '/api/register/',
  method: 'POST'
};
var callback = function(response) {
  var str = '';

  response.on('data', function(chunk){
    str += chunk;
  })

  reponse.on('end', function() {
    if (!(str && JSON.parse(str))) {
      console.log("[WARN] SOMETHING WENT WRONG POSTING TO API!");
    } else {
      var response = JSON.parse(str);
      console.log("[INFO] SUCCESS POSTING TO API");
      console.log("[INFO] RECIEVED RESPONSE: " + response);
    }
  });
};

HTTP.request(options,callback).end();
