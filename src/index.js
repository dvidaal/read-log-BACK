import "./loadEnvironment.js";
import connectDataBase from "./database/connectDatabase.js";
import startServer from "./server/startServer.js";

const mongoUrl = process.env.MONGODB_CONNECTION_URL;
const port = process.env.PORT ?? 4000;
console.log("PORT VARIABLES DE ENTERNO ", port);

await connectDataBase(mongoUrl);
await startServer(+port);
