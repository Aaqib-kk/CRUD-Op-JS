const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/CompExam',)
.then(()=>{
    console.log("Data Base is Connected")
})
.catch((error)=> {
    console.error("Data Base is not connected\n", error);
});
module.exports = mongoose;