export interface ITrackService {
  createTrack: (track: ITrack[]) => void;
}

export interface ITrack {
  event: string;
  tags: string[];
  url: string;
  title: string;
  ts: string;
}
