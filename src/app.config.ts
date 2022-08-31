import * as Joi from 'joi';
import 'dotenv/config';

const schema = Joi.object<AppConfig>({
  nodeEnv: Joi.string().required(),
  clientPort: Joi.number().required(),
  serverPort: Joi.number().required(),
  mongoDB: {
    host: Joi.string().required(),
    port: Joi.number().required(),
    database: Joi.string().required(),
  },
});

interface AppConfig {
  nodeEnv: 'none' | 'development' | 'production' | undefined;
  clientPort: number;
  serverPort: number;
  mongoDB: {
    host: string;
    port: number;
    database: string;
  };
}

export default (() => {
  const data = schema.validate({
    nodeEnv: process.env.NODE_ENV,
    clientPort: process.env.CLIENT_PORT,
    serverPort: process.env.SERVER_PORT,
    mongoDB: {
      host: process.env.MONGODB_HOST,
      port: process.env.MONGODB_PORT,
      database: process.env.MONGODB_DATABASE,
    },
  });

  if (data.error != null) {
    throw data.error;
  }

  return data.value;
})();
