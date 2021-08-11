class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibilities() {}

  work() {
    return `${this.name} working on ${this.responsibilities()}`
  }

  getPaid() {
    return `${this.name} earns ${this.salary}$`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return `developing`
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return `testing`
  }
}

const dev = new Developer('Ilya', 500)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Danya', 500)
console.log(tester.getPaid())
console.log(tester.work())
