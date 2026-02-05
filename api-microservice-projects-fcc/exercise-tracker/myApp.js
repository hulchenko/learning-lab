require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  log: [Object],
});

const User = mongoose.model("User", userSchema);

const createAndSaveUser = function (username, done) {
  const newUser = new User({
    username,
    log: [],
  });

  newUser.save((err, data) => {
    if (err) return done(err);
    return done(null, data);
  });
};

const findAllUsers = (done) => {
  return User.find({}, (err, data) => {
    if (err) {
      return done(err);
    } else {
      return done(null, data);
    }
  });
};

const createExercise = (userId, exerciseData, done) => {
  return User.findById(userId, (err, user) => {
    if (err) {
      return done(err);
    } else {
      const newExercise = {
        username: user.username,
        _id: userId,
        ...exerciseData,
      };
      user.log.push(newExercise);
      user.log.sort((a, b) => a.date - b.date);

      return user.save((err, data) => {
        if (err) {
          return done(err);
        } else {
          return done(null, data, newExercise);
        }
      });
    }
  });
};

const getUser = (userId, done) => {
  return User.findById(userId, (err, user) => {
    if (err) {
      return done(err);
    } else {
      return done(null, user);
    }
  });
};

exports.UserModel = User;
exports.createAndSaveUser = createAndSaveUser;
exports.findAllUsers = findAllUsers;
exports.createExercise = createExercise;
exports.getUser = getUser;