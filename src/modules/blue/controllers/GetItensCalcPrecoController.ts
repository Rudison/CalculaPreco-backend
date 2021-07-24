import { Request, Response } from 'express';
import AlterarItemERPService from '../services/AlterarItemERPService';
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

  public async setItemERP(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { codItem } = request.params;
    const { PrecoUnitPrz, PrecoUnitRev, PrecoUnitVndProd } = request.body;

    console.log(codItem, PrecoUnitPrz, PrecoUnitRev, PrecoUnitVndProd);

    const alterarItemERP = new AlterarItemERPService();

    const itemERP = await alterarItemERP.execute({
      codItem,
      PrecoUnitPrz,
      PrecoUnitRev,
      PrecoUnitVndProd
    });

    return response.json(itemERP);
  }
}
