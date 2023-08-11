const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => {
        console.log("Db connection is successful");
    })
    .catch((error) => {
        console.log(`Issue in Db connection : ${error}`);
        console.error(error);
        process.exit(1);
    })
}

module.exports = dbConnect;










// const mongoose = require('mongoose');

// require('dotenv').config();
// const dbConnect = () => {
//     mongoose.connect(process.env.DATABASE_URL,{
//         useNewUrlParser:true,
//         useUnifiedTopology:true,
//     })
//     .then(() => {
//         console.log("Db connections is successful");
//     })
//     .catch((error) => {
//         console.log(`Issue in Db Connection ==> ${error}`);
//         console.error(error);
//         process.exit(1);
//     })
// }

// module.exports = dbConnect;


// Commnad in case of mongodb is not connecting

// pwd
// ls -a1
// brew services start mongodb-community
// mongod --config /opt/homebrew/etc/mongod.conf
// OR
// mongod --config /opt/homebrew/etc/mongod.conf --fork