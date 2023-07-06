// FUNÇÃO - CALCULAR MÉDIA //

// PARÂMETRO: LISTA DE VALORES NÚMERICOS //
export function calculateAverage(values: Array<number>) {
  if (values.length === 0) {
    return { average: 0, averageWithPrecision: 0, sumTotal: 0 }
  }

  const sumTotal = values.reduce((acc, value) => {
    return (acc += value)
  })

  const averageWithPrecision = sumTotal / values.length
  const average = (sumTotal / values.length).toFixed(0)

  // RETORNO: MÉDIA | MÉDIA (VALOR EM DECIMAL) | SOMA TOTAL DOS VALORES //
  return { average, averageWithPrecision, sumTotal }
}
