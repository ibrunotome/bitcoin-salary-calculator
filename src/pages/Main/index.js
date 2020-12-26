import React, { useState } from 'react'

import { FaSpinner, FaBitcoin, FaGithub } from 'react-icons/fa'
import { Form, Input, Select } from '@rocketseat/unform'
import { format, subDays, isWeekend, isSaturday, isSunday } from 'date-fns'
import { toast } from 'react-toastify'

import { Container, SubmitButton } from './styles'
import api from '~/services/api'
import { fiatOptions, coins, ignoreOptions, hoursPerDay, days } from '~/config/FormOptions'
import address from '~/assets/address.svg'

export default function Main () {
  const [items, setItems] = useState([])
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [total, setTotal] = useState(0.00000000)
  const [loading, setLoading] = useState(0)

  const initialData = {
    fiat: 'brl',
    coin: 'bitcoin',
    symbol: 'BTC',
    hoursPerDay: 8,
    ignoreOption: 'ignore-nothing',
    fromLastDays: 30,
    fiatValuePerHour: 120.0
  }

  function getDates (fromLastDays, ignoreOption) {
    return [...Array(90).keys()]
      .reverse()
      .slice(90 - fromLastDays)
      .map(date => subDays(new Date(), date))
      .filter(date => {
        if (ignoreOption === 'ignore-weekends') {
          return !isWeekend(date)
        }

        if (ignoreOption === 'ignore-sundays') {
          return !isSunday(date)
        }

        if (ignoreOption === 'ignore-saturdays') {
          return !isSaturday(date)
        }

        return true
      })
      .map(date => format(date, 'dd-MM-yyyy'))
  }

  async function handleSubmit (data) {
    setLoading(1)

    const { fiat, coin, fromLastDays, fiatValuePerHour, hoursPerDay, ignoreOption } = data
    const dates = getDates(fromLastDays, ignoreOption)

    const promises = dates.map(async date => ({
      date: date,
      data: await api.get(`${coin}/history?date=${date}&localization=false`)
    }))

    try {
      const response = (await Promise.all(promises)).map((item) => ({
        date: item.date.replace(/-/g, '/'),
        fiat: fiat.toUpperCase(),
        prefix: fiatOptions.find(item => item.id === fiat).prefix,
        coin: coin,
        symbol: coins.find(item => item.id === coin).symbol,
        price: item.data.data.market_data !== undefined
          ? item.data.data.market_data.current_price[fiat].toFixed(2)
          : 0,
        hours: hoursPerDay,
        amount: item.data.data.market_data !== undefined
          ? (hoursPerDay * fiatValuePerHour / item.data.data.market_data.current_price[fiat]).toFixed(8)
          : 0
      })).reverse().map((item, index, arr) => ({
        ...item,
        cumulativeAmount: arr.reduce(function (sum, record, currentIndex) {
          return (currentIndex <= index) ? sum : sum + parseFloat(record.amount)
        }, parseFloat(item.amount)).toFixed(8)
      })).reverse()

      const total = response[response.length - 1].cumulativeAmount

      toast.success('Calculado com sucesso')

      setStart(response[0].date)
      setEnd(response.slice(-1).pop().date)
      setItems(response)
      setTotal(total)
      setLoading(0)
    } catch (error) {
      toast.error('A Api responsável pelo histórico da cotação do bitcoin não respondeu corretamente 😔', {
        autoClose: false
      })
    }
  }

  return (
    <Container>
      <FaBitcoin color="#f2a900" size={64} />

      <h1>bitcoin salary calculator</h1>

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
            type="number"
            name="fiatValuePerHour"
            placeholder="0.00"
            min="0.00"
            step="0.01"
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

          trabalhando:

          <Select
            name="hoursPerDay"
            options={hoursPerDay}
          />

          porém:

          <Select
            name="ignoreOption"
            options={ignoreOptions}
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
        <>
        <div className="container-fluid">
          <div className="table-wrapper">
            <div className="scrollable">
              <table className="table table-striped">
                <thead>
                  <tr key="total-header" bgcolor={'#f2a900'}>
                    <th colSpan="3">Salário total do período {start} até {end}</th>
                    <th colSpan="2">{total} {items[0].symbol}</th>
                  </tr>
                  <tr>
                    <th>Data</th>
                    <th>Preço Unidade</th>
                    <th>Horas Trabalhadas</th>
                    <th>Salário diário</th>
                    <th>acumulado</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                    <tr key={item.date}>
                      <td>{item.date}</td>
                      <td>{item.prefix}{item.price}</td>
                      <td>{item.hours}</td>
                      <td>{item.amount} {item.symbol}</td>
                      <td>{item.cumulativeAmount} {item.symbol}</td>
                    </tr>
                  ))}
                  <tr key="total-footer" bgcolor={'#f2a900'}>
                    <th colSpan="3">Salário total do período {start} até {end}</th>
                    <th colSpan="2">{total} {items[0].symbol}</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="donation">
          <strong>Foi útil?</strong>
          <img src={address} alt="bc1q7jgyxau233dzfvs7epupnjmlsnyw8y3xz8xmjm" />
          <p>bc1q7jgyxau233dzfvs7epupnjmlsnyw8y3xz8xmjm</p>
        </div>
        </>
      )}

      <a href="https://github.com/ibrunotome/bitcoin-salary-calculator" target="blank">
        <FaGithub color="#fff" size={64} />
      </a>
    </Container>
  )
}
