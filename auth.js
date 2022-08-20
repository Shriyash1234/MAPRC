const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = "517573071214-74alun8hq0ln1nq6i4gqhrcqfq0cgidn.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


//http://localhost:300/auth/google/callback