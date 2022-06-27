const { Schema, Types } = require('mongoose');
const moment = require('moment');

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
      get: v => moment(v).format("D MMM YYYY"),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Getter to format the created date on query.
// reactionSchema
//   .get(()=>{
//     return this.createdAt = moment(Date.now).format("D MMM YYYY");
//   });

module.exports = reactionSchema;
