const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    favoriteInstrument: {
        type: String,
        enum: ['Piano', 'Guitar', 'Violin', 'Drums', 'Bass', 'Saxophone', 'Vocals'],
        required: true
    },
    favoriteStyle: {
        type: String,
        enum: ['Classical', 'Jazz', 'Rock', 'Pop', 'Blues', 'Electronic', 'Hip-Hop'],
        required: true
    },
    difficultyPreference: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        required: true
    },
    votedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vote', voteSchema);
