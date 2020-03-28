export default class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) {
      return
    }
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  changSign() {
    this.currentOperand =
      this.currentOperand.charAt(0) === '-'
        ? this.currentOperand.toString().slice(1)
        : `-${this.currentOperand}`
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') {
      return
    }
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)

    if (isNaN(prev) || isNaN(current)) {
      return
    }

    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '/':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation.toString()
    this.operation = undefined
    this.previousOperand = ''
  }

  _getDisplayNumber(num) {
    const floatNamber = parseFloat(num)
    if (isNaN(floatNamber)) {
      return ''
    }
    return floatNamber.toLocaleString('ru-RU')
  }

  updateDisplay() {
    this.currentOperandTextElement.textContent = this._getDisplayNumber(
      this.currentOperand
    )
    if (this.operation != null) {
      this.previousOperandTextElement.textContent = `
      ${this._getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.textContent = ''
    }
  }
}
