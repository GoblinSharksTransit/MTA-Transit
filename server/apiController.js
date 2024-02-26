const GtfsRealtimeBindings = require('gtfs-realtime-bindings');

const URL =
  'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-bdfm';
const URLalert =
  'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/camsys%2Fsubway-alerts';
const key = 'IWddVccjk6aIOEuV87rGV8p2551sWLzI3y6O65yu';

const ApiController = {
  async getSubwayInfo(req, res, next) {
    try {
      response = await fetch(URLalert, {
        headers: { 'x-api-key': key },
      });

      const buffer = await response.arrayBuffer();
      const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
        new Uint8Array(buffer)
      );

      const data = [];
      // returns all alerts for a given line
      feed.entity.forEach((element) => {
        element.alert.informedEntity.forEach(x => {
          if(x.routeId === '3') data.push(element.alert.headerText.translation[0].text)
        })
      });

      res.locals.data = data;
      return next();
    } catch {
      return next((error) => console.log(`Error fetching data`, error));
    }
  },
};

module.exports = ApiController;
