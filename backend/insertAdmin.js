// insertAdmin.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');

dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');

  // Sample admin data
  const sampleAdmin = {
    username: 'admin',
    password: 'admin123',  // This will be hashed before saving
  };

  // Insert sample admin
  const newAdmin = new Admin(sampleAdmin);
  newAdmin.save()
    .then(() => {
      console.log('Sample admin inserted successfully!');
      mongoose.connection.close();
    })
    .catch((error) => {
      console.error('Error inserting sample admin:', error);
      mongoose.connection.close();
    });
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
