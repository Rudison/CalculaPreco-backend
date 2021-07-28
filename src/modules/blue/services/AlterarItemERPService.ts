import AppError from '@shared/errors/AppError';
import { getConnection } from 'typeorm';
import AlterarItemERP from '../typeorm/entities/AlterarItemERP';

interface IRequest {
  codItem: string;
  PrecoUnitPrz: number;
  PrecoUnitRev: number;
  PrecoUnitVndProd: number;
}

class AlterarItemERPService {
  public async execute({
    codItem,
    PrecoUnitPrz,
    PrecoUnitRev,
    PrecoUnitVndProd
  }: IRequest): Promise<AlterarItemERP> {
    const conn = getConnection('default');

    console.log(codItem, PrecoUnitPrz, PrecoUnitRev, PrecoUnitVndProd);

    const valorVendedor = await conn.query(
      `EXEC SP_ALTERAR_ITEM_CALC '${codItem}', ${PrecoUnitPrz}, ${PrecoUnitRev}, ${PrecoUnitVndProd};`
    );

    return valorVendedor;
  }
}
export default AlterarItemERPService;
