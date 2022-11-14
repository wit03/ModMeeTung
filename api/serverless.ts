import * as dotenv from "dotenv";
dotenv.config();

import Fastify from "fastify";

const app = Fastify({
  // logger: !!(process.env.NODE_ENV !== "development"),
  logger: false
});

app.register(import("../functions/index"), {
    prefix: '/'
});

export default async (req, res) => {
    await app.ready();
    app.server.emit('request', req, res);
}