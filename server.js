const express = require('express');
const path = require('path');
const config = require('config');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const SteamStrategy = require('passport-steam').Strategy;

const routes = require('./routes');
const utils = require('./src/utils');
const PlayerController = require('./controllers').Player;

const app = express();

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(new SteamStrategy({
  returnURL: `${config.get('auth.realm')}auth/steam/return`,
  realm: `${config.get('auth.realm')}`,
  apiKey: `${config.get('auth.apiKey')}`,
},
(identifier, profile, done) => {
  PlayerController.add({
    steamid: profile.id,
    alias: profile.displayName,
    avatar: profile.photos[2].value,
  }).then((output) => {
    return done(null, profile);
  }).catch((error) => {
    if (error.code == '23505') {
      utils.log('info', 'Player already exists');
      return done(null, profile);
    } else {
      return done(null, null);
    }
  });
}));

app.use(session({
  secret: `${config.get('session.secret')}`,
  name: `${config.get('session.name')}`,
  resave: true,
  saveUninitialized: true,
}));


app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.listen(3000, () => {
  utils.log('info', 'Listening on port 3000');
});
