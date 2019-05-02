/**
 * The Tournament model.
 */
class Tournament {
  /**
   * The constructor for the Tournament.
   * @param {Object} obj the json representation of the Tournament.
   */
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.description = obj.description;
    this.canSignup = obj.canSignup;
    this.isActive = obj.isActive;
    this.isHidden = obj.isHidden;
    this.isComplete = obj.isComplete;
    this.maxPlayers = obj.maxPlayers;
    this.minPlayers = obj.minPlayers;
    this.pointsWin = obj.pointsWin;
    this.pointsLose = obj.pointsLose;
    this.pointsFFWin = obj.pointsFFWin;
    this.pointsFFLose = obj.pointsFFLose;
    this.pointsTie = obj.pointsTie;
    this.currentRound = obj.currentRound;
    this.game = obj.game;
  }
}

module.exports = Tournament;
