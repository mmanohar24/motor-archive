const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.log('MongoDB connection error:', error);
        // process.exit(1);
        console.log('Running without database connection');
    }
}

module.exports = connectDB;