const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const brewerySchema = new Schema(
  {
    id: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Brewery = model('Brewery', brewerySchema);

module.exports = Brewery;
