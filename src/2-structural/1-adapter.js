class OldCalculator {
  operations(t1, t2, operation) {
    switch (operation) {
      case 'add': return t1 + t2
      case 'sub': return t1 - t2
      default: return NaN
    }
  }
}

class NewCalculator {
  add(t1, t2) {
    return t1 + t2
  }

  sub(t1, t2) {
    return t1 - t2
  }
}

class CalculatorAdapter {
  constructor() {
    this.calculator = new NewCalculator()
  }

  operations(t1, t2, operation) {
    switch (operation) {
      case 'add': return this.calculator.add(t1, t2)
      case 'sub': return this.calculator.sub(t1, t2)
      default: return NaN
    }
  }
}

const oldCalculator = new OldCalculator()
console.log(oldCalculator.operations(10, 5, 'add'))

const newCalculator = new NewCalculator()
console.log(newCalculator.add(10, 5))

const adapter = new CalculatorAdapter()
console.log(adapter.operations(25, 10, 'sub'))