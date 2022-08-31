import * as path from 'path';
import * as webpack from 'webpack';
import 'webpack-dev-server';
import appConfig from '../app.config';

const config: webpack.Configuration = {
  mode: appConfig.nodeEnv,
  entry: path.resolve(__dirname, './modules/index.ts'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'fundraiseupAnalytics.bundle.js',
    path: path.resolve(__dirname, 'public'),
    libraryTarget: 'var',
    library: 'fundraiseupAnalytics',
  },
};

export default config;
