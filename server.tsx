import Fastify from "fastify";
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { App } from "./App";
import fastifyStatic from "fastify-static";
import path from "path";

const fastify = Fastify();

fastify.register(fastifyStatic,{
  root: path.join(__dirname, 'dist'),
  prefix: '/dist/',
})


fastify.get('/', (request, reply) => {
  reply.header("content-type", "text/html");
  reply.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>React ssr test</title>
    </head>
    <body>
      <div id="root">${renderToString(
        <StrictMode>
          <App />
        </StrictMode>
      )}</div>

      <script src="/dist/client.js"></script>
    </body>
  </html> 
  `);
})
fastify.listen(4000, () => console.log("http://localhost:4000"));