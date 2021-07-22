import { Request, Response } from 'express';
import GetItensCalcPrecoService from '../services/GetItensCalcPrecoService';

export default class GetItensCalcPrecoController {
  public async getItensCalcPreco(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { codBarraProd, codRefProd, codFabrProd } = request.params;

    const itemBlue = new GetItensCalcPrecoService();

    const valores = await itemBlue.getVendasBlue({
      codBarraProd,
      codRefProd,
      codFabrProd
    });

    return response.json(valores);
  }
}
