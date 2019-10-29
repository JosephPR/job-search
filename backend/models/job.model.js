const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
