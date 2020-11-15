const express = require("express");
const bodyParser = require("bodyParser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser);
