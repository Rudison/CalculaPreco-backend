import { EntityRepository, Repository } from 'typeorm';
import AlterarItemERP from '../entities/AlterarItemERP';

@EntityRepository(AlterarItemERP)
export class AlterarItemERPRepository extends Repository<AlterarItemERP> {
  public async setAlteracaoItem(
    codItem: string,
    PrecoUnitPrz: string,
    PrecoUnitRev: string,
    PrecoUnitVndProd: string
  ): Promise<AlterarItemERP | undefined> {
    const metas = this.findOne({
      where: { codItem, PrecoUnitPrz, PrecoUnitRev, PrecoUnitVndProd }
    });

    return metas;
  }
}
