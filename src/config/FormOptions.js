export const fiatOptions = [
  { id: 'usd', title: 'Dolar', prefix: '$' },
  { id: 'brl', title: 'Reais', prefix: 'R$' },
  { id: 'eur', title: 'Euro', prefix: '€' }
]

export const coins = [
  { id: 'bitcoin', title: 'Bitcoin', symbol: 'BTC' },
  { id: 'litecoin', title: 'Litecoin', symbol: 'LTC' },
  { id: 'ethereum', title: 'Ethereum', symbol: 'ETH' },
  { id: 'nano', title: 'Nano', symbol: 'NANO' }
]

export const ignoreOptions = [
  { id: 'ignore-nothing', title: 'não ignorar finais de semana' },
  { id: 'ignore-weekends', title: 'ignorar finais de semana' },
  { id: 'ignore-sundays', title: 'ignorar apenas domingos' },
  { id: 'ignore-saturdays', title: 'ignorar apenas sábados' }
]

export const hoursPerDay = [
  { id: 16, title: '16 horas por dia' },
  { id: 15, title: '15 horas por dia' },
  { id: 14, title: '14 horas por dia' },
  { id: 13, title: '13 horas por dia' },
  { id: 12, title: '12 horas por dia' },
  { id: 11, title: '11 horas por dia' },
  { id: 10, title: '10 horas por dia' },
  { id: 9, title: '9 horas por dia' },
  { id: 8, title: '8 horas por dia' },
  { id: 7, title: '7 horas por dia' },
  { id: 6, title: '6 horas por dia' },
  { id: 5, title: '5 horas por dia' },
  { id: 4, title: '4 horas por dia' },
  { id: 3, title: '3 horas por dia' },
  { id: 2, title: '2 horas por dia' },
  { id: 1, title: '1 hora por dia' }
].reverse()

export const days = [...Array(90).keys()].map(day => ({
  id: day + 1,
  title: `${day + 1} ${day === 0 ? 'dia' : 'dias'}`
}))
