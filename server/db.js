const mongoose = require("mongoose");
const password = "USrXuW3YP1cZ53Lg";
const dbName = "entrepreware";
var uri = "mongodb://BsAdmin:"+password+"@cluster0-shard-00-00.qysj4.mongodb.net:27017,cluster0-shard-00-01.qysj4.mongodb.net:27017,cluster0-shard-00-02.qysj4.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-7dq26o-shard-0&authSource=admin&retryWrites=true&w=majority";

class DB {
  constructor() {
    mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(
        () => {
          // mongoose.connection.db.dropDatabase();
          // console.log(mongoose.connection.db);

          console.log("connected To Db bookStore");
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
module.exports = DB;

// const mongoose = require('mongoose');
// // const Book = require('./api/models/book');
// const uri = "mongodb+srv://admin:"+process.env.DB_PASSWORD+"@cluster0.smxxd.mongodb.net/buffetSystem?retryWrites=true&w=majority";
// // const uri='mongodb://localhost:27017/buffetSystem';
// class DB {
//   constructor() {
//     mongoose
//       .connect(uri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex:true
//       })
//       .then(
//         () => {
//           // mongoose.connection.db.dropDatabase();
//           // console.log(mongoose.connection.db);

//           console.log('connected To Db buffetSystem');
//         },
//         err => {
//           console.log(err);
//         }
//       );
//   }
//  }
// module.exports = DB;
