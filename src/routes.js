import { Router } from 'express';
import NewsController from './app/controllers/NewsController';

const routes = new Router();

//rotas da news
routes.post('/news', NewsController.store);
routes.get('/news', NewsController.show);
routes.put('/news/', NewsController.update);
routes.delete('/news/', NewsController.delete);

export default routes; 