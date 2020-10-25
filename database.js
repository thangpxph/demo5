var mongooes = require('mongoose');
var {mongodb} = require('./key');

mongooes.connect(mongodb.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(db=>console.log('Kết nối mongoDB thành công')).catch(err=>console.log(err))