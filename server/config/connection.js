const mongoose = require('mongoose');

//mongodb+srv://riosborne1:<password>@cluster0.muipq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//process.env.MONGODB_URI

mongoose.connect("mongodb+srv://riosborne1:12345@cluster0.muipq.mongodb.net/BrewMapretryWrites=true&w=majority" || 'mongodb://localhost/brew-map', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
