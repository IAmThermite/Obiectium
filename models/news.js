/**
 * The News model.
 */
class News {
  /**
   * The constructor for the News.
   * @param {Object} obj the json representation of the News.
   */
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.game = obj.game;
    this.markdown = obj.markdown;
    this.content = obj.content;
    this.pinned = obj.pinned;
    this.createdBy = obj.createdBy;
  };
}

module.exports = News;
