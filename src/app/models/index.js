const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const router = require('express').Router();


mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose,mongoosePaginate);
db.evaluations = require("./evaluation.model.js")(mongoose,mongoosePaginate);
db.students = require("./student.model.js")(mongoose,mongoosePaginate);
db.courses = require("./course.model.js")(mongoose,mongoosePaginate);
module.exports = db;