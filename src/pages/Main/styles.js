import styled, { keyframes, css } from 'styled-components'
import { darken } from 'polished'
import background from '~/assets/mountains.svg'

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`

export const Container = styled.div`
  min-height: 100vh;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: url(${background}) fixed, linear-gradient(to top, rgb(25, 24, 31), transparent);
  background-size: contain;
  background-position: center 100%;
  background-repeat: no-repeat;

  h1 {
    max-width: 80%;
    font-family: 'Ubuntu', sans-serif;
    font-style: italic;
  }

  form {

    div {
      font-size: 22px;
      text-align: left;

      input {
        background: #fff;
        display: block;
        width: 88%;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
        margin-bottom: 10px;
      }

      select {
        background: #fff;
        display: block;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 100%;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
        margin-bottom: 10px;
      }
    }
  }

  .donation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    img {
      display: block;
      margin-top: 10px;
      max-width: 50%;
    }

    p {
      font-size: 13px;
    }
  }
`

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  loading: props.loading,
  disabled: props.loading
}))`
  cursor: pointer;
  background: #f2a900;
  color: #fff;
  border: 0;
  margin: 20px 0;
  padding: 15px 30px;
  border-radius: 4px;
  font-size: 18px;
  margin-bottom: 30px;

  &:hover {
    background: ${darken(0.05, '#f2a900')}
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`
