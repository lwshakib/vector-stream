import httpServer from "./app";

import "dotenv/config";
import logger from "./logger/winston.logger";

async function startServer() {
  const port = process.env.PORT || 8080;
  httpServer.listen(port, () => {
    logger.info(`Server is running on http://localhost:${port}`);
  });
}
startServer();
