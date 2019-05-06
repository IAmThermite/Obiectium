/**
 * The Player model.
 */
class Player {
  /**
   * The constructor for the Player.
   * @param {Object} obj the json representation of the Player.
   */
  constructor(obj) {
    this.id = obj.id;
    this.steamid = obj.steamid;
    this.alias = obj.alias;
    this.avatar = obj.avatar;
    this.description = obj.description;
    this.badges = obj.badges;
  }
}

module.exports = Player;
