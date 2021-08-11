class Complaints {
  constructor() {
    this.complaints = []
  }

  reply(complaint) {}

  add(complaint) {
    this.complaints.push(complaint)
    return this.reply(complaint)
  }
}

class ProductComplaints extends Complaints {
  reply({id, customer, details}) {
    return `Product: ${id}: ${customer} (${details})`
  }
}

class ServiceComplaints extends Complaints {
  reply({id, customer, details}) {
    return `Service: ${id}: ${customer} (${details})`
  }
}

class ComplaintsRegistry {
  register(customer, type, details) {
    const id = Date.now()
    let complaints

    if (type === 'service') {
      complaints = new ServiceComplaints()
    } else {
      complaints = new ProductComplaints()
    }

    return complaints.add({id, customer, details})
  }
}

const registry = new ComplaintsRegistry()

console.log(registry.register('Ilya', 'service', 'unavailable'))
console.log(registry.register('Sergey', 'product', 'error'))
