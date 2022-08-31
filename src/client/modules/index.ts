import { Tracker, TrackerRequest } from './tracker/tracker';

window.onbeforeunload = () => {
  TrackerRequest.send();
};

export = {
  tracker: new Tracker(),
};
