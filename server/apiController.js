const URL =
  "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-ace";
// const URL = "www.google.com";

const ApiController = {
  getSubwayInfo(req, res, next) {
    fetch(URL, {
      headers: { "x-api-key": "IWddVccjk6aIOEuV87rGV8p2551sWLzI3y6O65yu" },
    }) // Use the provided feedUrl
      //   .then((response) => response.json()) //method specifically for response that will pull the json out and turn into reg obj literal
      .then((data) => {
        res.locals.data = data;
        return next();
      })
      .catch((error) => console.log(`Error fetching data`, error));
  },
};

module.exports = ApiController;
