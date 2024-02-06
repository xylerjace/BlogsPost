const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://jaydicdiquin:njay2003@testing.rwkfstk.mongodb.net/BlogPost?retryWrites=true&w=majority')
    .then(()=> {
        console.log('Connected to database')
    }).catch(()=>{
        console.log('failed to connect')
    })

const schema = new mongoose.Schema({
    title: {type: String, required: true},
    message: {type: String, required: true}
})

const collection = new mongoose.model("blogs",schema)

module.exports = collection