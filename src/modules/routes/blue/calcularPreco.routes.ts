import { Router } from 'express';
import { celebrate, Joi, errors, Segments } from 'celebrate';
import GetItensCalcController from '@modules/blue/controllers/GetItensCalcPrecoController';

const itemBlueRouter = Router();
const ItemCalcController = new GetItensCalcController();

itemBlueRouter.get(
  '/:codBarraProd/:codRefProd/:codFabrProd',
  celebrate({
    [Segments.PARAMS]: {
      codBarraProd: Joi.string(),
      codRefProd: Joi.string(),
      codFabrProd: Joi.string()
    }
  }),
  ItemCalcController.getItensCalcPreco
);

export default itemBlueRouter;
