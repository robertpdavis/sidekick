const { Schema, Types } = require('mongoose');
const moment = require('moment');

//Schema only to be used in the thought model as a sub document

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //Use moment in get function to format the date before response
      get: v => moment(v).format("D MMM YYYY [at] h:mm a")
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
