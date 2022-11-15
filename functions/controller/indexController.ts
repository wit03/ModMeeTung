import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function indexController(fastify: FastifyInstance) {
    fastify.get("/",async (_request: FastifyRequest, reply: FastifyReply) => {
        reply.status(200)
        reply.send("Hello World")
    })
}