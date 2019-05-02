CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  url VARCHAR(200)
);

CREATE TABLE players (
  steamid VARCHAR(32) PRIMARY KEY,
  alias VARCHAR(32) UNIQUE NOT NULL,
  avatar VARCHAR(200),
  description VARCHAR(300)
);

CREATE TABLE news (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  markdown TEXT NOT NULL,
  content TEXT NOT NULL,
  pinned BOOLEAN NOT NULL DEFAULT FALSE,
  created_by VARCHAR(32) NOT NULL,

  FOREIGN KEY (created_by) REFERENCES  players (steamid)
);

CREATE TABLE tournaments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT NOT NULL,
  can_signup BOOLEAN NOT NULL DEFAULT FALSE,
  is_active BOOLEAN NOT NULL DEFAULT FALSE,
  is_complete BOOLEAN NOT NULL DEFAULT FALSE,
  max_players INTEGER NOT NULL DEFAULT 16,
  min_players INTEGER NOT NULL DEFAULT 2,
  points_win INTEGER NOT NULL DEFAULT 2,
  points_lose INTEGER NOT NULL DEFAULT 0,
  points_ff_win INTEGER NOT NULL DEFAULT 2,
  points_ff_lose INTEGER NOT NULL DEFAULT 0,
  points_tie INTEGER NOT NULL DEFAULT 1,
  current_round INTEGER NOT NULL DEFAULT 0,
  game_id INTEGER NOT NULL,

  FOREIGN KEY (game_id) REFERENCES games (id)
);

CREATE TABLE signups (
  id SERIAL PRIMARY KEY,
  tournament_id INTEGER NOT NULL,
  player_id VARCHAR(32) NOT NULL,

  FOREIGN KEY (tournament_id) REFERENCES tournaments (id) ON DELETE CASCADE,
  FOREIGN Key (player_id) REFERENCES players (steamid)
);

CREATE TABLE matches (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  home_player VARCHAR(32)  NOT NULL,
  away_player VARCHAR(32) ,
  tournament_id INTEGER NOT NULL,
  result_home_score real NOT NULL DEFAULT 0,
  result_away_score real NOT NULL DEFAULT 0,
  result_submitted_by VARCHAR(32) ,
  result_confirmed_by VARCHAR(32) ,
  round_number INTEGER,
  maps JSON,

  FOREIGN KEY (tournament_id) REFERENCES tournaments (id) ON DELETE CASCADE,
  FOREIGN KEY (result_submitted_by) REFERENCES players (steamid) ON DELETE CASCADE,
  FOREIGN KEY (result_confirmed_by) REFERENCES players (steamid) ON DELETE CASCADE
);