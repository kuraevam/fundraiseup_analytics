import { ITrack, ITrackService } from './interfaces/track.interface';
import { TrackEntity } from './entities/track.entity';
import appDataSource from '../db/type-orm';

export default class TrackService implements ITrackService {
  async createTrack(tracks: ITrack[]): Promise<void> {
    const trackRepository = appDataSource.getRepository(TrackEntity);

    const trackEntities: TrackEntity[] = [];
    for (const track of tracks) {
      const trackEntity = new TrackEntity();
      trackEntity.event = track.event;
      trackEntity.tags = track.tags;
      trackEntity.url = track.url;
      trackEntity.title = track.title;
      trackEntity.ts = track.ts;
      trackEntities.push(trackEntity);
    }

    await trackRepository.manager.save(trackEntities);
  }
}
