const express = require('express');
const path = require('path');
const config = require('config');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const SteamStrategy = require('passport-steam').Strategy;

const routes = require('./routes');
const utils = require('./src/utils');
const db = require('./src/db');
const PlayerController = require('./controllers').Player;

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const SequelizeStore = require('connect-session-sequelize')(session.Store);
app.use(session({
  name: `${config.get('session.name')}`,
  secret: `${config.get('session.secret')}`,
  store: new SequelizeStore({
    db: db.sequelize,
    table: 'sessions',
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10 *525600 * 60, // 10 years
  },
}));

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'public')));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  PlayerController.findOne(obj.steamid).then((player) => {
    done(null, player);
  }).catch((error) => {
    utils.log('error', error);
    done(error, null);
  });
});

passport.use(new SteamStrategy({
  returnURL: `${config.get('auth.realm')}auth/steam/return`,
  realm: config.get('auth.realm'),
  apiKey: config.get('auth.apiKey'),
},
(identifier, profile, done) => {
  PlayerController.findOne(profile.id).then((player) => {
    if (!player) {
      player = PlayerController.add({
        steamid: profile.id,
        alias: profile.displayName,
        avatar: profile.photos[2].value,
      }).then((player) => {
        if (player) {
          return done(null, player);
        } else {
          return done(null, null);
        }
      });
    } else {
      return done(null, player);
    }
  }).catch((error) => {
    return done(null, null);
  });
}));

routes(app);

app.listen(3000, () => {
  utils.log('info', 'Listening on port 3000');
});
