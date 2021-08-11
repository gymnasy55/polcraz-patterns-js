class User {
  constructor(name) {
    this.name = name
    this.room = null
  }

  send(message, to) {
    this.room.send(message, this, to)
  }

  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`)
  }
}

class ChatRoom {
  constructor() {
    this.users = []
  }

  register(user) {
    this.users[user.name] = user
    user.room = this
  }

  send(message, from, to) {
    if (to) {
      to.receive(message, from)
    } else {
      Object.keys(this.users).forEach(key => {
        if(this.users[key] !== from) {
          this.users[key].receive(message, from)
        }
      })
    }
  }
}

const ilya = new User('Ilya')
const sergey = new User('Sergey')
const dima = new User('Dima')

const room = new ChatRoom()
room.register(ilya)
room.register(sergey)
room.register(dima)

ilya.send('Hello', sergey)
sergey.send('Hello hello!', ilya)

dima.send('Hello hello hello!')
