const mongoose = require('mongoose');
require('dotenv').config();

async function connection() {
    try {
        const db_url = process.env.DB_URL;
        if (!db_url) {
            throw new Error("Please set the DB_URL environment variable.");
        }
        await mongoose.connect(db_url);

        console.log('✅ Connected to MongoDB');
    } catch (err) {
        console.error(err)
    }
}

module.exports = connection;