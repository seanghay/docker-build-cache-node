import 'dotenv/config'
import debug from 'debug'
import { createServer } from 'node:http';
import gracefulShutdown from 'http-graceful-shutdown';

const logger = debug('app:http');

const app = createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(
    JSON.stringify({
      versions: process.versions,
      msg: "Hello, World!",
      timestamp: new Date(),
      env: process.env,
      request: {
        headers: request.headers,
        body: request.body,
        url: request.url,
      }
    })
  )
});

const server = app.listen(8080, '::', () => {
  logger(`server is up http://0.0.0.0:8080`);
});

gracefulShutdown(server)

