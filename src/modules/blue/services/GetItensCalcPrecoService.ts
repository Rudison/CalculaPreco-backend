import { getConnection } from 'typeorm';
import GetVendasVendedorMeta from '../typeorm/entities/GetItensCalcPreco';

interface IRequest {
  codBarraProd: string;
  codRefProd: string;
  codFabrProd: string;
}

class GetItensCalcPrecoService {
  public async getVendasBlue({
    codBarraProd,
    codRefProd,
    codFabrProd
  }: IRequest): Promise<GetVendasVendedorMeta | undefined> {
    const conn = getConnection('default');

    const valorVendedor = await conn.query(
      `select * from GetItensCalcPreco('${codBarraProd}', '${codRefProd}', '${codFabrProd}' )`
    );

    return valorVendedor;
  }
}

export default GetItensCalcPrecoService;
