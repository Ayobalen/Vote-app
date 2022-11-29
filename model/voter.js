const mongoose = require('mongoose');

const voterSchema = new mongoose.Schema({
  voter_id : {
    type: String
  },
  voted :{
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model ('voter', voterSchema);
 