const a = {
  username: {
    firstName: 'luis',
    lastName: 'vitor'
  },
  address: {
    street: 'anyone',
    number: 555
  }
}

const value = {
  firstName: 'vitoria',
  lastName: 'cristina'
}

field = 'username'

const b = {...a, [field]: value}
console.log(b)