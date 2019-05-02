/**
 * The Match model.
 */
class Match {
  /**
   * The constructor for the Match.
   * @param {Object} obj the json representation of the Match.
   */
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.homePlayer = obj.homePlayer;
    this.awayPlayer = obj.awayPlayer;
    this.tournament = obj.tournament;
    this.resultHomeScore = obj.resultHomeScore;
    this.resultAwayScore = obj.resultAwayScore;
    this.resultSubmittedBy = obj.resultSubmittedBy;
    this.resultConfirmedBy = obj.resultConfirmedBy;
    this.roundNumber = obj.roundNumber;
    this.maps = obj.maps; // JSON array of map objects
  }
}

module.exports = Match;
