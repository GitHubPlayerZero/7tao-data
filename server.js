// See https://github.com/typicode/json-server#module
const cors = require('cors');
const jsonServer = require('json-server');
const server = jsonServer.create();
const auth = require("json-server-auth");
const db = require("./db.json");
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.db = router.db;
server.use(auth);
server.use(router);

// 使用環境變數的 port，或預設 3000
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`)
})

// Export the Server API
module.exports = server;