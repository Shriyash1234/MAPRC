const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = "620055054098-ve5ti1htlf49vjd5je2vpn4ds6q34rta.apps.googleusercontent.com";
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