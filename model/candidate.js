const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema(
  {
    candidate_id: {
        type: Array, 
        unique: true
      },
},
{ timestamps: true }
)

module.exports = mongoose.model ('candidate', candidateSchema);