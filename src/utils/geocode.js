const request = require("request");
const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYWtoaW11bm5hMjAwMCIsImEiOiJja3BoczllMGkyb2U1Mm9sbGNrcnUwa3RoIn0.KuPZiu4cMu3eF43YN_m6EA&limit=1`;
  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("no internet baba", undefined);
    } else if (body.features.length === 0) {
      callback("no response baba", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[0],
        longitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};
module.exports = geocode;
