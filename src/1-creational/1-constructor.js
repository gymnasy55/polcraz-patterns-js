class ServerES6 {
  constructor(name, ip) {
    this.name = name
    this.ip = ip
  }

  getUrl() {
    return `https://${this.ip}:80`
  }
}

const awsEs6 = new ServerES6('AWS Germany', '83.21.21.32')
console.log(awsEs6.getUrl())