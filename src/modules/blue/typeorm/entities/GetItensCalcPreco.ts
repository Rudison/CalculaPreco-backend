import { ViewColumn, ViewEntity } from 'typeorm';
@ViewEntity({
  name: 'GetItensCalcPreco(CodBarraProd, CodRefProd, CodFabrProd)',
  database: 'blueConn'
})
class GetItensCalcPreco {
  @ViewColumn({ name: 'CodItem' })
  CodItem: string;

  @ViewColumn({ name: 'DescrItem' })
  DescrItem: string;

  @ViewColumn({ name: 'DescrMarca' })
  DescrMarca: string;

  @ViewColumn({ name: 'PrecoUnitVndProd' })
  PrecoUnitVndProd: number;

  @ViewColumn({ name: 'MargemLucro' })
  MargemLucro: number;

  @ViewColumn({ name: 'PercPIS' })
  PercPIS: number;

  @ViewColumn({ name: 'PercCOFINS' })
  PercCOFINS: number;

  @ViewColumn({ name: 'PercOutraDesp' })
  PercOutraDesp: number;

  @ViewColumn({ name: 'PercIR' })
  PercIR: number;

  @ViewColumn({ name: 'PercContrSoc' })
  PercContrSoc: number;

  @ViewColumn({ name: 'PercComis' })
  PercComis: number;

  @ViewColumn({ name: 'PercCustOp' })
  PercCustOp: number;

  @ViewColumn({ name: 'PercMargem' })
  PercMargem: number;

  @ViewColumn({ name: 'ValCustoOp' })
  ValCustoOp: number;

  @ViewColumn({ name: 'PercCPMF' })
  PercCPMF: number;

  @ViewColumn({ name: 'CodBarraProd' })
  CodBarraProd: string;

  @ViewColumn({ name: 'CodRefProd' })
  CodRefProd: string;

  @ViewColumn({ name: 'CodFabrProd' })
  CodFabrProd: string;
}

export default GetItensCalcPreco;
