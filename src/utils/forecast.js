const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=250046f18eaf75786f5b649b18ac2eb5&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";
  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("babu net ledhu", undefined);
    } else if (body.error) {
      callback("babau string chusko", undefined);
    } else {
      callback(
        undefined,
        `it is currently ${body.current.temperature} and feels like ${body.current.feelslike}+${body.current.weather_descriptions[0]}`
      );
    }
  });
};
module.exports = forecast;
