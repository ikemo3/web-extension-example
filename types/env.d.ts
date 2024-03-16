export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXTENSION_ID: string;
      CLIENT_ID: string;
      CLIENT_SECRET: string;
      REFRESH_TOKEN: string;
    }
  }
}
