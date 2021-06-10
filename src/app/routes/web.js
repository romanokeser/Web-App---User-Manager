module.exports = app => {

var router = require("express").Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");


  router.get("/", homeController.getHome);

  router.post("/upload", uploadController.uploadFile);

  app.use("/", router);
};
