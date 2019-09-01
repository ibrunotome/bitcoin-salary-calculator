import React from 'react'
import { Form, Input } from '@rocketseat/unform'
import { Container, SubmitButton } from './styles'

export default function Main () {
  return (
    <Container>
      <h1>The Bitcoin Salary Calculator</h1>

      <Form onSubmit={() => alert('WIP')}>
        <div>
          O valor da minha hora em:

          <select defaultValue="reais">
            <option value="dollar">Dolar</option>
            <option value="reais">Reais</option>
            <option value="euro">Euro</option>
          </select>

         é:

          <Input
            type="text"
            name="fiatValue"
            placeholder="0.00"
          />
        </div>

        <div>
          Calcular a conversão em:

          <select>
            <option value="bitcoin">Bitcoin</option>
            <option value="bitcoin-cash">Bitcoin Cash</option>
            <option value="ethereum">Ethereum</option>
            <option value="litecoin">Litecoin</option>
            <option value="nano">Nano</option>
          </select>

          dos últimos:

          <select defaultValue="30">
            <option value="31">31 dias</option>
            <option value="30">30 dias</option>
            <option value="29">29 dias</option>
            <option value="28">28 dias</option>
            <option value="27">27 dias</option>
            <option value="26">26 dias</option>
            <option value="25">25 dias</option>
            <option value="24">24 dias</option>
            <option value="23">23 dias</option>
            <option value="22">22 dias</option>
            <option value="21">21 dias</option>
            <option value="20">20 dias</option>
            <option value="19">19 dias</option>
            <option value="18">18 dias</option>
            <option value="17">17 dias</option>
            <option value="16">16 dias</option>
            <option value="15">15 dias</option>
            <option value="14">14 dias</option>
            <option value="13">13 dias</option>
            <option value="12">12 dias</option>
            <option value="11">11 dias</option>
            <option value="10">10 dias</option>
            <option value="09">09 dias</option>
            <option value="08">08 dias</option>
            <option value="07">07 dias</option>
            <option value="06">06 dias</option>
            <option value="05">05 dias</option>
            <option value="04">04 dias</option>
            <option value="03">03 dias</option>
            <option value="02">02 dias</option>
            <option value="01">01 dia</option>
          </select>

          porém:

          <select defaultValue="ignore-weekends">
            <option value="without-ignore-weekends">sem ignorar finais de semana</option>
            <option value="ignore-weekends">ignorar finais de semana</option>
            <option value="ignore-only-sundays">ignorar apenas domingos</option>
            <option value="ignore-only-saturdays">ignorar apenas sábados</option>
          </select>
        </div>

        <SubmitButton
          disabled={false}
          loading="true"
          type="submit"
        >
          Calcular
        </SubmitButton>

      </Form>

    </Container>
  )
}
