const os = require('os')

const  freeMen = os.freemem()
const  user = os.userInfo()

console.log(freeMen, user.username)




