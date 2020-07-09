const mongoose = require('mongoose');

const uri = `mongodb+srv://:4D616E75743738@lanxcluster.sdq4f.mongodb.net/report?retryWrites=true&w=majority`;


const db = mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('Db Connected and ready'))
    .catch(err => console.log(err));