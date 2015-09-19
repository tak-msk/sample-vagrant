"use strict";

// Setup base path for modules loading
require('app-module-path').addPath(__dirname);

// Modules
var express = require("express");

// Middleware
var bodyParser = require("body-parser");

// Controllers
var testController = require("controllers/test");

// Create app
var app = express();
app.disable("x-powered-by");

// Set up middlewares
app.use(bodyParser.json());

// Set up routes
//app.get("/api/v2/ping", testController.ping);

app.listen(3000, function() {
	console.log("Server On")
});
