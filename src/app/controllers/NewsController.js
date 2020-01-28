import News from '../models/News';

class NewController {
  //Cadastrando uma notícia
  async store(req, res) {
    
    const {
      event_title,
      event_address,
      event_description
    } = req.body;

    /*verifica primeiro se todos os campos não estão preenchidos, caso essa 
    premissa seja verdadeira ele executa o create, do contrário as premissas 
    em seguida serão avaliadas, pois se um campo do evento for preenchido todos 
    os outros devem ser.      
    */
    if(!(event_title === '' && event_address === '' && event_description === '')) {
      
      if(event_title !== '' && (event_address === '' || event_description === '')) {
        return res.status(400).json({error: 'Fill in all fields if you want to post an event'});
      }
      if(event_address === '' && (event_title === '' || event_description === '')) {
        return res.status(400).json({error: 'Fill in all fields if you want to post an event'});
      }
      if(event_description !== '' && (event_address === '' || event_title === '')) {
        return res.status(400).json({error: 'Fill in all fields if you want to post an event'});
      }
    }
    
    const news = await News.create(req.body);

    return res.json(news);
  }

  //Listandos todas as notícias
  async show(req, res) {

    const news = await News.findAll();

    return res.json(news);
  }

  //Editando uma notícia
  async update(req, res) {

    const {
      event_title,
      event_address,
      event_description
    } = req.body;

    /*verifica primeiro se todos os campos não estão preenchidos, caso essa 
    premissa seja verdadeira ele executa o update, do contrário as premissas 
    em seguida serão avaliadas, pois se um campo do evento for preenchido todos 
    os outros devem ser.      
    */
    if(!(event_title === '' && event_address === '' && event_description === '')) {
      
      if(event_title !== '' && (event_address === '' || event_description === '')) {
        return res.status(400).json({error: 'Fill in all fields if you want to post an event'});
      }
      if(event_address === '' && (event_title === '' || event_description === '')) {
        return res.status(400).json({error: 'Fill in all fields if you want to post an event'});
      }
      if(event_description !== '' && (event_address === '' || event_title === '')) {
        return res.status(400).json({error: 'Fill in all fields if you want to post an event'});
      }
    }

    const news = await News.findByPk(req.headers.news_id);
    
    news.update(req.body);

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