import News from '../models/News';

class NewController {
  //Cadastrando uma notícia
  async store(req, res) {
    const news = await News.create(req.body);

    return res.json(news);
  }

  //Listandos todas as notícias
  async show(req, res) {

    const {news_id} = req.body;

    const news = await News.findAll({news: news_id});

    return res.json(news);
  }

  //Editando uma notícia
  async update(req, res) {

    const news = await News.findByPk(req.headers.news_id);
    
    const { 
      news_headline,
      brief_description,
      full_description,
      category
    } = news.update(req.body);

    return res.json(news);
  }

  //Deletando uma notícia
  async delete(req, res) {
    
    const news = await News.findByPk(req.headers.news_id);

    news.destroy(req.body);

    return res.json(news);
  }
}

export default new NewController();