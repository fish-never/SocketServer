const io = require('socket.io')()
io.on('connection', client => {
    console.log('成功')
});
io.listen(9001);