import Router from 'koa-router';
import fs from 'fs';

const fundraiseupAnalyticsRouter = new Router();
fundraiseupAnalyticsRouter.get('/fundraiseupAnalytics', async (ctx) => {
  const src = fs.createReadStream(
    'src/client/public/fundraiseupAnalytics.bundle.js',
  );
  ctx.response.set('content-type', 'application/javascript');
  ctx.body = src;
});

export default fundraiseupAnalyticsRouter;
