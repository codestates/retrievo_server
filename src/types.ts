export {};
/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Express {
    interface SessionData {
      cookie: any;
    }
  }
}
