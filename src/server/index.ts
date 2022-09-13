import 'reflect-metadata';
import Koa from 'koa';
import appConfig from '../app.config';
import trackRouter from './controllers/track.controller';
import fundraiseupAnalyticsRouter from './controllers/fundraiseupAnalytics.controller';
import appLogger from '../app.logger';
import './db/type-orm';
import cors from 'koa-cors';

const app = new Koa();
app.use(cors());

app.use(trackRouter.routes());
app.use(fundraiseupAnalyticsRouter.routes());


app.listen(appConfig.serverPort, () => {
  appLogger.info(`Server running on port ${appConfig.serverPort}`);
});
