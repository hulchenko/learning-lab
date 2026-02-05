const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const TIMEOUT = 10000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

const User = require("./myApp.js").UserModel;

const createUser = require("./myApp.js").createAndSaveUser;
app.post(["/api/users", "/api/exercise/new-user"], function (req, res, next) {
  let t = setTimeout(() => {
    next({ message: "timeout" });
  }, TIMEOUT);
  if (!req.body.username) {
    res.send("error: no username supplied in request body");
  }
  createUser(req.body.username, function (err, data) {
    clearTimeout(t);
    if (err) {
      return next(err);
    }
    if (!data) {
      console.log("Missing `done()` argument");
      return next({ message: "Missing callback argument" });
    }
    User.findById(data._id, function (err, user) {
      if (err) {
        return next(err);
      }
      res.json(user);
    });
  });
});

const findAllUsers = require("./myApp.js").findAllUsers;
app.get("/api/users", function (req, res, next) {
  let t = setTimeout(() => {
    next({ message: "timeout" });
  }, TIMEOUT);

  findAllUsers(function (err, data) {
    clearTimeout(t);
    if (err) {
      return next(err);
    }
    if (!data) {
      console.log("Missing `done()` argument");
      return next({ message: "Missing callback argument" });
    }
    if (err) {
      return next(err);
    }
    res.json(data);
  });
});

app.post("/api/exercise/add", (req, res) => {
  res.redirect(307, `/api/users/${req.body.userId}/exercises`);
});

const createExercise = require("./myApp.js").createExercise;
app.post("/api/users/:_id/exercises", function (req, res, next) {
  let t = setTimeout(() => {
    next({ message: "timeout" });
  }, TIMEOUT);

  let date;
  if (req.body.date) {
    date = new Date(req.body.date).toDateString();
  } else {
    date = new Date(Date.now()).toDateString();
  }

  const exerciseData = {
    description: req.body.description || "hi",
    duration: Number.parseInt(req.body.duration, 10),
    date,
  };

  createExercise(
    req.params._id || req.body._id,
    exerciseData,
    function (err, data, newExercise) {
      clearTimeout(t);
      if (err) {
        return next(err);
      }
      if (!data) {
        console.log("Missing `done()` argument");
        return next({ message: "Missing callback argument" });
      }
      res.json(newExercise);
    }
  );
});

app.get("/api/exercise/log", (req, res, next) => {
  if (!req.query.userId) {
    res.send("error: no user ID supplied");
  }
  res.redirect(
    `/api/users/${req.query.userId}/logs?from=${req.query.from}&to=${req.query.to}&limit=${req.query.limit}`
  );
});

const getUser = require("./myApp.js").getUser;
app.get("/api/users/:_id/logs", function (req, res, next) {
  const from = new Date(req.query.from);
  const to = new Date(req.query.to);
  const limit = Number.parseInt(req.query.limit, 10);

  getUser(req.params._id, function (err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log("Missing `done()` argument");
      return next({ message: "Missing callback argument" });
    }

    let exerciseLogs = user.log;

    if (!isNaN(to.getTime()) && !isNaN(from.getTime())) {
      exerciseLogs = exerciseLogs.filter(
        (log) => new Date(log.date) <= to && new Date(log.date >= from)
      );
    }

    if (!isNaN(limit)) {
      exerciseLogs = exerciseLogs.slice(0, limit);
    }

    res.json({ log: exerciseLogs, count: user.log.length });
  });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});