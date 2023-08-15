# 2023-05-final-project-indymap-api

## Requirements

- Node.js Version 16 >

## Getting started

### Clone repo

Clone the repository to your local machine

### npm install

```sh
npm install
```

### Copy .env and set Port

```sh
cp .env.default .env
```

#### Example

```
APP_PORT=3000
```

### Copy db.json

#### With data

```sh
cp db.json.default.data db.json
```

#### Without data

```sh
cp db.json.default.empty db.json
```

### Start dev server

```sh
npm run start:dev
```

Open http://localhost:<APP_PORT_FROM_ENV_FILE>/<YOUR_ROUTE>

## Customize

### Custom Routes

More Examples see:

- [Quizbox randomQuizRoute.js](https://github.com/coding-bootcamps-eu/final-projects/blob/main/Quizbox2/api/src/customRoutes/randomQuizRoute.js)

#### create Custom Route file

Create a file in `src/customRoute/dummyCustomRoute.js`

```js
module.exports = (jsonServer, req, res) => {
  // DB Access Example
  const entriesDB = jsonServer.db.get("entries").value();

  return res.json({
    entries: entriesDB,
    length: entriesDB.length,
  });
};
```

#### Register with addRoute Method

In index.js

```js
const dummyCustomRoute = require("./customRoutes/dummyCustomRoute");

jsonServer
  .useUuids()
  .addBodyParser()
  .addRoute("get", "/example", (req, res) =>
    dummyCustomRoute(jsonServer, req, res)
  )
  .run();
```

### Add a middleware

A middleware enables you to do something before the request data gets processed by the api. It's often use to add some additional checks.

#### Create a middleware

Create a file in `src/customRoute/dummyMiddleware.js`. The following script is an example for a middleware that only executes something when the routes is `/questions` or a detail route and only when the request method is post or put.

```js
module.exports = (jsonServer, req, res, next) => {
  const isDetailRoute = req.originalUrl.split("/").length > 2;
  if (
    (req.url === "/questions" || isDetailRoute) &&
    (req.method === "POST" || req.method === "PUT")
  ) {
  }
  next();
};
```

#### Register middleware with addMiddleware

In index.js

```js
const dummyMiddleware = require("./middleware/dummyMiddleware");

jsonServer
  .useUuids()
  .addBodyParser()
  .addMiddleware((req, res, next) =>
    dummyMiddleware(jsonServer, req, res, next)
  )
  .run();
```
