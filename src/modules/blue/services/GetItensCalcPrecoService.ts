import { getConnection } from 'typeorm';
import GetVendasVendedorMeta from '../typeorm/entities/GetItensCalcPreco';

interface IRequest {
  codItem: string;
  codBarraProd: string;
  codRefProd: string;
  codFabrProd: string;
}

class GetItensCalcPrecoService {
  public async getVendasBlue({
    codItem,
    codBarraProd,
    codRefProd,
    codFabrProd
  }: IRequest): Promise<GetVendasVendedorMeta | undefined> {
    const conn = getConnection('default');

    const valorVendedor = await conn.query(
      `select * from GetItensCalcPreco('${codItem}', '${codBarraProd}', '${codRefProd}', '${codFabrProd}' )`
    );

    return valorVendedor;
  }
}

export default GetItensCalcPrecoService;
