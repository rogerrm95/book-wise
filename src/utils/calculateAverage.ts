// FUNÇÃO - CALCULAR MÉDIA //

// PARÂMETRO: LISTA DE VALORES NÚMERICOS //
export function calculateAverage(values: Array<number>) {
  const sumTotal = values.reduce((acc, value) => {
    return (acc += value)
  })

  const averageWithPrecision = sumTotal / values.length
  const average = (sumTotal / values.length).toFixed(0)

  // RETORNO: MÉDIA | MÉDIA (VALOR EM DECIMAL) | SOMA TOTAL DOS VALORES //
  return { average, averageWithPrecision, sumTotal }
}
