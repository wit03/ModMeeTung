import { FastifyInstance, FastifyReply, FastifyRequest, FastifyServerOptions } from 'fastify'
import router from "./router"

export default async function (instance: FastifyInstance, opts: FastifyServerOptions, done) {
    instance.register(router)
    done()
}