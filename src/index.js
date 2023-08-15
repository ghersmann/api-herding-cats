require("dotenv").config();
const jsonServer = require("./jsonServerService");
// const dummyMiddleware = require("./middleware/dummyMiddleware");;
// const dummyCustomRoute = require("./customRoutes/dummyCustomRoute");

jsonServer
  .useUuids()
  .addBodyParser()
  /*.addRoute("get", "/my/custom/path", (req, res) =>
    dummyCustomRoute(jsonServer, req, res)
  )
  .addMiddleware((req, res, next) =>
    dummyMiddleware(jsonServer, req, res, next)
  )*/
  .run();
