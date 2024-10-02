// const { Socket } = require('dgram');
// const http = require('http')
// const server = http.createServer()

// server.on('connection', (socket) => {
//     console.log("Yangi boglanish")
// })


// server.listen(8000);
// console.log(`${server.address().port} eshitishni boshladik. `)

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Asosiy sahifa");
        res.end();  
    }


    if (req.url === '/api/books'){
        res.write(JSON.stringify(['clean code', 'sariq devni minib', 'xamsa']))
        res.end();
    }
});

server.listen(8000, () => {
    console.log('Server 8000-portda eshitishni boshladi');
});


