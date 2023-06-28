export function itemMostOften(list: string[] | number[]) {
  // CRIAR UM OBJETO NULO //
  const countMap = Object.create(null)

  // LAÇO FOR OF  //
  // PERCORRE O ARRAY E SOMA A QUANTIDADE QUE UM DADO VALOR SE REPETE //
  // ARMAZENA OS DADOS NO OBJETO COUNTMAP//
  for (const element of list) {
    countMap[element] = (countMap[element] || 0) + 1
  }

  // TRANSFORMA O OBJETO EM ARRAY DE NÚMEROS //
  const array = Object.values(countMap) as number[]

  // ORDENA O ARRAY EM ORDEM DECRESCENTE E PEGA O MAIOR VALOR //
  const item = array.sort((a: number, b: number) => b - a)[0]

  // TRANSFORMA O OBJETO COUNTMAP EM ARRAY //
  const countMapArray = Object.entries(countMap)

  // POR FIM, PERCORRE O ARRAY CRIADO ACIMA E APLICA UM FILTRO //
  // O FILTRO ENCONTRARÁ O(S) ITENS MAIS REPETIDOS ATRAVES DA VARIAVEL 'ITEM' //
  // REALIZANDO O FILTRO, É RETORNADO APENAS O PRIMEIRO ELEMENTO DO ARRAY //
  const itemMostOftenOnTheList = countMapArray.filter(
    (i) => i[1] === item && i[0],
  )[0][0]

  // COM ISSO, TEMOS O ITEM MAIS REPETIDO NA LISTAGEM //
  return itemMostOftenOnTheList
}
