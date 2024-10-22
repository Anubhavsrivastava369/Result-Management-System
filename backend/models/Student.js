const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  attendanceMarks: { type: Number, default: 0 },
  projectReviewMarks: { type: Number, default: 0 },
  assessmentMarks: { type: Number, default: 0 },
  projectSubmissionMarks: { type: Number, default: 0 },
  linkedinPostMarks: { type: Number, default: 0 },
  totalMarks: { type: Number, default: 0 }
});

// Calculate total marks
studentSchema.methods.calculateTotal = function () {
  this.totalMarks = this.attendanceMarks + this.projectReviewMarks + this.assessmentMarks + this.projectSubmissionMarks + this.linkedinPostMarks;
};

module.exports = mongoose.model('Student', studentSchema);
