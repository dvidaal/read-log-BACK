import connectDataBase from "./database/connectDatabase.js";
import startServer from "./server/startServer.js";
import "./loadEnvironment.js";

const mongoUrl = process.env.MONGODB_CONNECTION_URL;
const port = process.env.PORT ?? 4000;

(async () => {
  await connectDataBase(mongoUrl);
  await startServer(+port);
})();
