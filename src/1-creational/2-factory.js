class SimpleMembership {
  constructor(name) {
    this.name = name
    this.cost = 50
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name
    this.cost = 150
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name
    this.cost = 500
  }
}

class MembershipFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership
  }

  create(name, type = 'simple') {
    const Membership = MembershipFactory.list[type] || MembershipFactory.list.simple
    const membership = new Membership(name)
    membership.type = type
    membership.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`)
    }
    return membership
  }
}

const factory = new MembershipFactory()

const members = [
  factory.create('Ilya', 'simple'),
  factory.create('Sergey', 'premium'),
  factory.create('Dima', 'standard'),
  factory.create('Ivan', 'premium'),
  factory.create('Petr'),
]

members.forEach(member => {
  member.define()
})