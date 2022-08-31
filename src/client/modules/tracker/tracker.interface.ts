export interface ITracker {
  track: (event: string, ...tags: string[]) => void;
}

export interface ITrack {
  event: string;
  tags: string[];
  url: string;
  title: string;
  ts: string;
}
