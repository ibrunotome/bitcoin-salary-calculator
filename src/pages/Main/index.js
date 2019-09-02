import React, { useState } from 'react'

import { FaSpinner } from 'react-icons/fa'
import { Form, Input, Select } from '@rocketseat/unform'
import { format, subDays } from 'date-fns'

import { Container, SubmitButton } from './styles'
import api from '~/services/api'

const fiatOptions = [
  { id: 'usd', title: 'Dolar' },
  { id: 'brl', title: 'Reais' },
  { id: 'eur', title: 'Euro' }
]

const coins = [
  { id: 'bitcoin', title: 'Bitcoin', symbol: 'BTC' },
  { id: 'bitcoin-cash', title: 'Bitcoin Cash', symbol: 'BCHABC' },
  { id: 'litecoin', title: 'Litecoin', symbol: 'LTC' },
  { id: 'ethereum', title: 'Ethereum', symbol: 'ETH' },
  { id: 'nano', title: 'Nano', symbol: 'NANO' }
]

const days = [
  { id: 31, title: '31 dias' },
  { id: 30, title: '30 dias' },
  { id: 29, title: '29 dias' },
  { id: 28, title: '28 dias' },
  { id: 27, title: '27 dias' },
  { id: 26, title: '26 dias' },
  { id: 25, title: '25 dias' },
  { id: 24, title: '24 dias' },
  { id: 23, title: '23 dias' },
  { id: 22, title: '22 dias' },
  { id: 21, title: '21 dias' },
  { id: 20, title: '20 dias' },
  { id: 19, title: '19 dias' },
  { id: 18, title: '18 dias' },
  { id: 17, title: '17 dias' },
  { id: 16, title: '16 dias' },
  { id: 15, title: '15 dias' },
  { id: 14, title: '14 dias' },
  { id: 13, title: '13 dias' },
  { id: 12, title: '12 dias' },
  { id: 11, title: '11 dias' },
  { id: 10, title: '10 dias' },
  { id: 9, title: '09 dias' },
  { id: 8, title: '08 dias' },
  { id: 7, title: '07 dias' },
  { id: 6, title: '06 dias' },
  { id: 5, title: '05 dias' },
  { id: 4, title: '04 dias' },
  { id: 3, title: '03 dias' },
  { id: 2, title: '02 dias' },
  { id: 1, title: '01 dia' }
]

export default function Main () {
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0.00000000)
  const [loading, setLoading] = useState(0)

  const initialData = {
    fiat: 'brl',
    coin: 'bitcoin',
    symbol: 'BTC',
    fromLastDays: 30,
    fiatValuePerHour: 80.00
  }

  async function handleSubmit (data) {
    setLoading(1)

    const { fiat, coin, fromLastDays, fiatValuePerHour } = data
    const dates = [...Array(31).keys()]
      .reverse()
      .slice(31 - fromLastDays)
      .map(date => format(subDays(new Date(), date), 'dd-MM-yyyy'))

    const promises = dates.map(async date => ({
      date: date,
      data: await api.get(`${coin}/history?date=${date}&localization=false`)
    }))

    const response = (await Promise.all(promises)).map(item => ({
      date: item.date,
      coin: coin,
      symbol: coins.find(item => item.id === coin).symbol,
      price: item.data.data.market_data.current_price.brl.toFixed(2),
      hours: 8,
      amount: (8 * fiatValuePerHour / item.data.data.market_data.current_price[fiat]).toFixed(8)
    }))

    const total = response.reduce((sum, { amount }) => sum + parseFloat(amount), 0).toFixed(8)

    setItems(response)
    setTotal(total)
    setLoading(0)
  }

  return (
    <Container>
      <h1>The Bitcoin Salary Calculator</h1>

      <Form
        initialData={initialData}
        onSubmit={handleSubmit}
      >
        <div>
          O valor da minha hora em:

          <Select
            name="fiat"
            options={fiatOptions}
          />

         é:

          <Input
            type="text"
            name="fiatValuePerHour"
            placeholder="0.00"
          />
        </div>

        <div>
          Quero a conversão em:

          <Select
            name="coin"
            options={coins}
          />

          dos últimos:

          <Select
            name="fromLastDays"
            options={days}
          />
        </div>

        <SubmitButton
          loading={loading}
          type="submit"
        >
          {loading ? <FaSpinner color="#fff" size={14} /> : 'Calcular' }
        </SubmitButton>

      </Form>

      {items.length > 0 && (
        <div className="container-fluid">
          <div className="table-wrapper">
            <div className="scrollable">
              <table className="table table-striped">
                <thead>
                  <tr key="total-header">
                    <th colSpan="3">Total</th>
                    <th>{total} {items[0].symbol}</th>
                  </tr>
                  <tr>
                    <th>Data</th>
                    <th>Preço</th>
                    <th>Horas</th>
                    <th>Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                    <tr key={item.date}>
                      <td>{item.date}</td>
                      <td>{item.price}</td>
                      <td>{item.hours}</td>
                      <td>{item.amount} {item.symbol}</td>
                    </tr>
                  ))}
                  <tr key="total-footer">
                    <td colSpan="3">Total</td>
                    <td>{total} {items[0].symbol}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

    </Container>
  )
}
