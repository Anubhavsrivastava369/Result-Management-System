const mongoose = require('mongoose');
const Student = require('./models/Student'); // Adjust the path to your Student model
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB Atlas');
    
    // Sample student data
    const sampleStudents = [
        { studentId: "S001", name: "John Doe", attendanceMarks: 85, projectReviewMarks: 90, assessmentMarks: 88, projectSubmissionMarks: 92, linkedinPostMarks: 80 },
        { studentId: "S002", name: "Jane Smith", attendanceMarks: 78, projectReviewMarks: 85, assessmentMarks: 90, projectSubmissionMarks: 95, linkedinPostMarks: 75 },
        { studentId: "S003", name: "Alice Johnson", attendanceMarks: 92, projectReviewMarks: 80, assessmentMarks: 85, projectSubmissionMarks: 90, linkedinPostMarks: 88 },
        { studentId: "S004", name: "Michael Brown", attendanceMarks: 80, projectReviewMarks: 75, assessmentMarks: 82, projectSubmissionMarks: 85, linkedinPostMarks: 79 },
        { studentId: "S005", name: "Emily Davis", attendanceMarks: 95, projectReviewMarks: 93, assessmentMarks: 91, projectSubmissionMarks: 94, linkedinPostMarks: 90 }
    ];

    // Insert sample data into the database
    Student.insertMany(sampleStudents)
    .then(() => {
        console.log('Sample data inserted successfully!');
        mongoose.connection.close(); // Close the connection after insertion
    })
    .catch((error) => {
        console.error('Error inserting data:', error);
        mongoose.connection.close(); // Close the connection even if there’s an error
    });
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
