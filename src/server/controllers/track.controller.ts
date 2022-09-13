import Router from 'koa-router'
import koaBody from 'koa-body'
import * as DTO from '../dto/track.dto'
import { KoaContext } from '../common/interfaces/context.interface'
import TrackService from '../track/track.service'
import appLogger from "../../app.logger";

const trackRouter = new Router();

trackRouter.post(
  '/track',
  koaBody(),
  async (ctx: KoaContext<DTO.TrackRequestDto, unknown>) => {
      try {
          const data = ctx.request.body;

          if (data && Array.isArray(data.tracks)) {
              const resValidate = DTO.TrackRequestSchema.validate(data.tracks)

              if (resValidate.error) {
                  throw resValidate.error
              }

              const trackService = new TrackService();
              void trackService.createTrack(resValidate.value).catch(err => appLogger.error(err));

          }
          ctx.response.status = 200;
      } catch (err) {
          appLogger.error(err)
          ctx.response.body = err
          ctx.response.status = 404;
      }
  },
);

export default trackRouter;
