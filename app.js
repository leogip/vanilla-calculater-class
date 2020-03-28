import Calculator from './Calculator.js'

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const changSignButton = document.querySelector('[data-change-sign]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-delete]')

const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
)
const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
)

const calc = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
)

numberButtons.forEach(btn =>
  btn.addEventListener('click', () => {
    calc.appendNumber(btn.textContent)
    calc.updateDisplay()
  })
)

operationButtons.forEach(btn =>
  btn.addEventListener('click', () => {
    calc.chooseOperation(btn.textContent)
    calc.updateDisplay()
  })
)

changSignButton.addEventListener('click', () => {
  calc.changSign()
  calc.updateDisplay()
})

equalsButton.addEventListener('click', () => {
  calc.compute()
  calc.updateDisplay()
})

allClearButton.addEventListener('click', () => {
  calc.clear()
  calc.updateDisplay()
})

deleteButton.addEventListener('click', () => {
  calc.delete()
  calc.updateDisplay()
})
