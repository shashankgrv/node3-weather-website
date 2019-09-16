const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoic2dhdXJhdmltcyIsImEiOiJjazBjY3l1bDEwMTdiM2RtbXNucGhlOTVlIn0.jhdVQXBbknapgxwF142qqA&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect Geocode Services!", undefined);
    } else if (body.features.length === 0) {
      callback(
        "Unable to find location. Try again with different search term!",
        undefined
      );
    } else {
      callback(undefined, {
        Latitude: body.features[0].center[1],
        Longitude: body.features[0].center[0],
        Location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
