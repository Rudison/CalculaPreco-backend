import { EntityRepository, Repository } from 'typeorm';
import GetItensCalcPreco from '../entities/GetItensCalcPreco';

@EntityRepository(GetItensCalcPreco)
export class MesRepository extends Repository<GetItensCalcPreco> {
  public async getVendaVendedor(
    codBarraProd: string,
    codRefProd: string,
    codFabrProd: string
  ): Promise<GetItensCalcPreco | undefined> {
    const metas = this.findOne({
      where: { codBarraProd, codRefProd, codFabrProd }
    });

    return metas;
  }
}
