import Sequelize, { Model } from 'sequelize';

class News extends Model {
  static init(sequelize) {
    super.init(
    {
      news_headline: Sequelize.STRING,
      brief_description: Sequelize.STRING,
      full_description: Sequelize.STRING,
      category: Sequelize.STRING,
      event_title: Sequelize.STRING,
      event_address: Sequelize.STRING,
      event_description: Sequelize.STRING  
    },
    {
      sequelize,
    }
    );
  }
}

export default News;