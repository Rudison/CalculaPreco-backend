import produtoBlue from '@modules/routes/blue/calcularPreco.routes';

import { Router } from 'express';

const routes = Router();

routes.use('/calcularPreco', produtoBlue);

export default routes;
