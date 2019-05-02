/**
 * The Signup model.
 */
class Signup {
  /**
   * The constructor for the Signup.
   * @param {Object} obj the json representation of the Signup.
   */
  constructor(obj) {
    this.id = obj.id;
    this.tournament = obj.tournament,
    this.player = obj.player;
  }
}

module.exports = Signup;
