const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.01:27017')
.then(()=>console.log('connected'))
.catch(()=>console.log('not connected'))