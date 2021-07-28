import { ViewColumn, ViewEntity } from 'typeorm';
@ViewEntity({
  name: 'SP_ALTERAR_ITEM_CALC(CodItem, PrecoUnitPrz, PrecoUnitRev, PrecoUnitVndProd)',
  database: 'default'
})
class AlterarItemERP {
  @ViewColumn({ name: 'CodItem' })
  CodItem: string;

  @ViewColumn({ name: 'PrecoUnitPrz' })
  PrecoUnitPrz: number;

  @ViewColumn({ name: 'PrecoUnitRev' })
  PrecoUnitRev: number;

  @ViewColumn({ name: 'PrecoUnitVndProd' })
  PrecoUnitVndProd: number;
}

export default AlterarItemERP;
