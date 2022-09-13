import { DataSource } from 'typeorm';
import appConfig from '../../app.config';
import { TrackEntity } from '../track/entities/track.entity';
import appLogger from '../../app.logger';

const appDataSource = new DataSource({
  type: 'mongodb',
  database: appConfig.mongoDB.database,
  entities: [TrackEntity],
  synchronize: true,
  logging: ['query', 'error'],
  migrations: [],
  subscribers: [],
  useUnifiedTopology: true,
});

appDataSource
  .initialize()
  .then(() => {
    appLogger.info('Successful connection mongodb');
  })
  .catch((error) => {
    appLogger.error(error)
    throw error
  });

export default appDataSource;
