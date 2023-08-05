import { Calculator } from './lib/Calculator.js'

import './css/style.scss'

const inputs = document.querySelectorAll('input[type=text]')
const selectOperator = document.querySelector('#operator')
const operatorText = document.querySelector('#operator-text')
const form = document.querySelector('form')
const result = document.querySelector('#result')

function maskInputPlusMinus(input) {
  const value = input.value.replace(/\D/g, '') // Remove all non-digits
  const formattedValue = []

  for (let i = 0; i < value.length && i < 6; i++) {
    if (i === 2 || i === 4) {
      formattedValue.push(':')
    }
    formattedValue.push(value[i])
  }

  input.value = formattedValue.join('')
}

function maskInputMultiplyDivide(input) {
  const value = input.value.replace(/\D/g, '') // Remove all non-digits
  const formattedValue = []

  for (let i = 0; i < value.length && i < 5; i++) {
    formattedValue.push(value[i])
  }

  input.value = formattedValue.join('')
}

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    const operator = selectOperator.options[selectOperator.selectedIndex].value
    if (index === 1 && (operator === '*' || operator === '/')) {
      maskInputMultiplyDivide(input)
    } else {
      maskInputPlusMinus(input)
    }
  })
})

inputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.setAttribute('type', 'tel')
  })
  input.addEventListener('blur', () => {
    input.setAttribute('type', 'text')
  })
})

selectOperator.onchange = () => {
  const operator = selectOperator.options[selectOperator.selectedIndex].value

  const [first, last] = document.querySelectorAll('input')

  last.value = ''
  first.value = ''
  result.innerText = '00:00:00'

  switch (operator) {
    case '+':
      operatorText.innerText = '+'
      last.placeholder = '00:00:00'
      break
    case '-':
      operatorText.innerText = '-'
      last.placeholder = '00:00:00'
      break
    case '*':
      operatorText.innerText = 'x'
      last.placeholder = 'valor'
      break
    case '/':
      operatorText.innerText = '÷'
      last.placeholder = 'valor'
      break
  }
}

const calculator = new Calculator()
form.onsubmit = e => {
  e.preventDefault()

  let value = ''

  const operator = selectOperator.options[selectOperator.selectedIndex].value

  const [first, last] = document.querySelectorAll('input')

  switch (operator) {
    case '+':
      value = calculator.sum(first.value, last.value)
      break
    case '-':
      value = calculator.sub(first.value, last.value)
      break
    case '*':
      value = calculator.multi(first.value, last.value)
      break
    case '/':
      value = calculator.divide(first.value, last.value)
      break
  }

  result.innerHTML = value
}
