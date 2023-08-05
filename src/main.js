import { Calculator } from './lib/Calculator.js'

import './css/style.scss'

const inputs = document.querySelectorAll('input[type=text]')
const selectOperator = document.querySelector('#operator')
const operatorText = document.querySelector('#operator-text')
const form = document.querySelector('form')
const result = document.querySelector('#result')

function mask(event, element) {
  let regex = /[0-9]/g

  if (regex.test(event.key) && element.value.length < 8) {
    if (element.value.length == 2 || element.value.length == 5) {
      element.value += ':'
    }
  } else {
    event.returnValue = false
    if (event.preventDefault) event.preventDefault()
  }
}

inputs.forEach(input => {
  input.onkeypress = e => mask(e, input)
})

selectOperator.onchange = e => {
  const operator = selectOperator.options[selectOperator.selectedIndex].value
  const first = document.querySelectorAll('input')[0]
  const last = document.querySelectorAll('input')[1]

  last.value = ''
  first.value = ''
  result.innerText = '00:00:00'

  switch (operator) {
    case '+':
      operatorText.innerText = '+'
      last.type = 'text'
      last.placeholder = '00:00:00'
      break
    case '-':
      operatorText.innerText = '-'
      last.type = 'text'
      last.placeholder = '00:00:00'
      break
    case '*':
      operatorText.innerText = 'x'
      last.type = 'number'
      last.placeholder = 'valor'
      break
    case '/':
      operatorText.innerText = '÷'
      last.type = 'number'
      last.placeholder = 'valor'
      break
  }
}

const calculator = new Calculator()
form.onsubmit = e => {
  e.preventDefault()

  let value = ''

  const operator = selectOperator.options[selectOperator.selectedIndex].value

  const first = document.querySelectorAll('input')[0].value
  const last = document.querySelectorAll('input')[1].value

  switch (operator) {
    case '+':
      value = calculator.sum(first, last)
      break
    case '-':
      value = calculator.sub(first, last)
      break
    case '*':
      value = calculator.multi(first, last)
      break
    case '/':
      value = calculator.divide(first, last)
      break
  }

  result.innerHTML = value
}
