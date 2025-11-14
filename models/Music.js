const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    chords: [{ type: String }],
    notes: { type: String },
    difficulty: { 
        type: String, 
        enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
        required: true 
    },
    style: { 
        type: String, 
        enum: ['Classical', 'Jazz', 'Rock', 'Pop', 'Blues', 'Electronic'],
        required: true 
    },
    bpm: { type: Number, min: 40, max: 240 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Music', musicSchema);
