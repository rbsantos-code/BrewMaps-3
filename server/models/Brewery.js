const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const brewerySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      postalCode: {
        type: String,
      },
      country: {
        type: String,
      },
    },
    location: {
      latitude: {
        type: String,
      },
      longitude: {
        type: String,
      },
    },
    phone: {
      type: String,
    },
    website: {
      type: String,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = brewerySchema;
