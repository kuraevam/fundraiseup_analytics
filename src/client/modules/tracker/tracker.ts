import { ITrack, ITracker } from './tracker.interface';
import axios from 'axios';

export class Tracker implements ITracker {
  static buffers: ITrack[] = [];

  track(event: string, ...tags: string[]): void {
    const newTrack: ITrack = {
      event,
      tags,
      title: document.title,
      ts: new Date().toISOString(),
      url: location.href,
    };

    Tracker.buffers.push(newTrack);
  }
}

export class TrackerRequest {
  static send(): void {
    if (Tracker.buffers.length > 0) {
      const tracks: ITrack[] = [...Tracker.buffers];
      Tracker.buffers = [];
      axios
        .post('http://localhost:8001/track', {
          tracks,
        })
        .catch(() => {
          Tracker.buffers = [...Tracker.buffers, ...tracks];
        });
    }
  }
}

(() => {
  setInterval(() => {
    if (Tracker.buffers.length >= 3) {
      TrackerRequest.send();
    }
  }, 1000);
})();
