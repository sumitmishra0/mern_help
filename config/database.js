const mongoose = require('mongoose');

require('dotenv').config();
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => {
        console.log("Db connections is successful");
    })
    .catch((error) => {
        console.log(`DB got error ==> ${error}`);
        console.error(error);
        process.exit(1);
    })
}

module.exports = dbConnect;