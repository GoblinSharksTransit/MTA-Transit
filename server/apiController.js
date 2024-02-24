const GtfsRealtimeBindings = require('gtfs-realtime-bindings');

const URL =
  'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-bdfm';
const key = 'IWddVccjk6aIOEuV87rGV8p2551sWLzI3y6O65yu';

const ApiController = {
  async getSubwayInfo(req, res, next) {
    try {
      response = await fetch(URL, {
        headers: { 'x-api-key': key },
      });

      const buffer = await response.arrayBuffer();
      const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
        new Uint8Array(buffer)
      );

      const data = [];
      feed.entity.forEach((element) => {
        if (element.tripUpdate && element.tripUpdate.trip) data.push(element.tripUpdate.trip.routeId);
      });

      res.locals.data = data;
      return next();
    } catch {
      return next((error) => console.log(`Error fetching data`, error));
    }
  },
};

module.exports = ApiController;
