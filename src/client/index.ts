import Koa from 'koa';
import appConfig from '../app.config';
import appLogger from '../app.logger';
import serve from 'koa-static';
import path from 'path';

const app = new Koa();
app.use(serve(path.join(__dirname, 'public')));

app.listen(appConfig.clientPort, () => {
  appLogger.info(`Client running on port ${appConfig.clientPort}`);
});
