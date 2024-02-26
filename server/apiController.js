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

      const currentTime = Math.floor(Date.now() / 1000);
      const route = 'F';

      const data = [route];
      const cache = {};
      // returns all alerts for a given line
      feed.entity.forEach((element) => {
        element.alert.informedEntity.forEach((x) => {
          if (x.routeId === route) {
            element.alert.activePeriod.forEach((y) => {
              if (y.start.low < currentTime) {
                if (y.end.low === 0 || y.end.low > currentTime) {
                const message = element.alert.headerText.translation[0].text;
                const start = new Date(y.start.low * 1000);
                const end = new Date(y.end.low * 1000);

                if (!cache[message]) {
                  const obj = {
                    message: message,
                    start: dateString(start),
                  };
                  if (y.end.low !== 0) obj.end = dateString(end)
                  else obj.end = 'Unknown'
                  data.push(obj);
                  cache[message] = true;
                }
                }
              }
            });
          }
        });
      });

      res.locals.data = data;
      return next();
    } catch {
      return next((error) => console.log(`Error fetching data`, error));
    }
  },
};

function dateString(date) {
  let string = `${date.getMonth() + 1}/${date.getDate()} `;
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let pm = false;

  if (hours === 12) {
    pm = true;
    string += `12:`;
  } else if (hours > 12) {
    pm = true;
    string += `${hours % 12}:`;
  } else string += `${hours}:`;

  if (minutes < 10) string += `0${minutes}`;
  else string += `${minutes}`;

  if (pm) string += ' PM';
  else string += ' AM';

  return string;
}

module.exports = ApiController;

