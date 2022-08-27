import 'express-async-errors';

import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';

import { CREDENTIALS, NODE_ENV, ORIGIN, PORT } from '@/configs/env.config';
import { IRoutes } from '@interfaces/routes.interface'
import ExpressAsyncErrors from '@middlewares/error.middleware';

class App {
  public app: Application;
  public env: string;
  public port: string | number;

  constructor(routes: IRoutes[]) {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 3000;

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`=================================`);
      console.log(`======= ENV: ${this.env} =======`);
      console.log(`🚀 App listening on the port ${this.port}`);
      console.log(`========== BY: BESCOITO ==========`);
      console.log(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(routes: IRoutes[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }

  private initializeErrorHandling() {
    this.app.use(ExpressAsyncErrors);
  }
}

export default App;
