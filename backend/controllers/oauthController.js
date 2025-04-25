const passport = require('passport');
const OAuthUser = require('../models/oauthUser');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

dotenv.config();

// 1. GOOGLE STRATEGY
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  const { id, displayName, emails, photos } = profile;
  try {
    let user = await OAuthUser.findOne({ googleId: id });

    if (!user) {
      user = new OAuthUser({
        googleId: id,
        name: displayName,
        email: emails[0].value,
        profilePicture: photos?.[0]?.value || '',
        confiderationVerification: false,
      });
      await user.save();
    }

    return done(null, user); // Always proceed, token + verification check later
  } catch (err) {
    console.error(err.message);
    done(err, null);
  }
}));

// 2. SESSION HANDLERS
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await OAuthUser.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// 3. AUTH ROUTE EXPORTS
exports.oauthGoogle = passport.authenticate('google', { scope: ['profile', 'email'] });

exports.oauthGoogleCallback = (req, res, next) => {
    passport.authenticate('google', { failureRedirect: '/' }, async (err, user) => {
      if (err && !user) {
        console.error("Authentication error:", err?.message);
        return res.redirect(`/auth/pending?message=${encodeURIComponent(err.message)}`);
      }
  
      try {
        // Always generate a token regardless of verification status
        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '9h' });
  
        // If not verified yet
        if (!user.confiderationVerification) {
          return res.redirect(`/auth/pending?token=${token}&message=${encodeURIComponent("Account not verified yet. You may complete your profile.")}`);
        }
  
        // Verified and ready to login
        req.logIn(user, err => {
          if (err) return next(err);
          return res.redirect(`/auth/success?token=${token}`);
        });
  
      } catch (e) {
        console.error("Token generation error:", e);
        return res.redirect(`/auth/pending?message=Server error while generating token`);
      }
  
    })(req, res, next);
  };
  
