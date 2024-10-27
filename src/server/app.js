// import cors from "cors";
// import morgan from "morgan";
// import express from "express";
// import { usersRouters } from "./routers/usersRouters/usersRouters.js";
// import { booksRouters } from "./routers/booksRouters/booksRouters.js";

// export const app = express();
// app.disable("x-powered-by");
// app.use(morgan("dev"));
// app.use(express.json());

// const corsOptions = {
//   credentials: true,
//   origin: [
//     process.env.CORS_ALLOWED_ORIGIN_LOCAL,
//     process.env.CORS_ALLOWED_ORIGIN_PRODUCTION,
//     process.env.CORS_ALLOWED_ORIGIN_PRODUCTION_1,
//     process.env.CORS_ALLOWED_ORIGIN_PRODUCTION_2,
//   ],
//   allowedHeaders: ["Content-Type", "Authorization"],
// };

// app.use(cors(corsOptions));
// app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("<h1>Front Page Test</h1>");
// });
// app.use("/read-log", cors(corsOptions), booksRouters);
// app.use("/users", usersRouters);

import cors from "cors";
import morgan from "morgan";
import express from "express";
import { usersRouters } from "./routers/usersRouters/usersRouters.js";
import { booksRouters } from "./routers/booksRouters/booksRouters.js";

export const app = express();
app.disable("x-powered-by");
app.use(morgan("dev"));
app.use(express.json());

const corsOptions = {
  credentials: true,
  origin: [
    process.env.CORS_ALLOWED_ORIGIN_LOCAL,
    process.env.CORS_ALLOWED_ORIGIN_PRODUCTION,
    process.env.CORS_ALLOWED_ORIGIN_PRODUCTION_1,
    process.env.CORS_ALLOWED_ORIGIN_PRODUCTION_2,
    proces.env.CORS_ALLOWED_ORIGIN_PRODUCTION_4,
  ],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("<h1>Front Page Test</h1>");
});

//app.use("/read-log", booksRouters);
app.use("/api/books", booksRouters);
app.use("/users", usersRouters);
