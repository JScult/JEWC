const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const oauthUserSchema = new mongoose.Schema({
    googleId: { type: String, unique: true },
    name: { type: String },
    email: { type: String, required: true, unique: true },
    profilePicture: { type: String },
    Confideration_name: { 
        type: String 
    },
    ConfiderationCode: { 
        type: String 
    },
    role: { 
        type: String, 
        default: 'participant' 
    },
    confiderationVerification: { 
        type: Boolean, 
        default: false 
    },
    CIN_Passport: { 
        type: String
    },
    isProfileComplete: { 
        type: Boolean, 
        default: false 
    },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('OAuthUser', oauthUserSchema);
