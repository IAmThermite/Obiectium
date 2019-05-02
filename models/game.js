/**
 * The Game model.
 */
class Game {
  /**
   * The constructor for the Game.
   * @param {Object} obj the json representation of the Game.
   */
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.description = obj.description;
    this.url = obj.url;
  }
}

module.exports = Game;
