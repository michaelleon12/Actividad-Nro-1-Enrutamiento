const express = require("express");
const morgan = require("morgan");
const { router } = require("./router/router");
const { handlerNotFoundRouter } = require("./utils/handler.router");
const app = express();

// Set
app.set("port", 5000);

app.use(express.json());
app.use(morgan("dev"));

app.use(express.json());

app.use("/api", router);

app.use(handlerNotFoundRouter);
app.listen(app.get("port"), () => {
  console.log("Server on port " + app.get("port"));
});
