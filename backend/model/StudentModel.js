// // import mongoose
// const mongoose = require("mongoose");
// const validator = require("validator");
// // create user Schema
// const StudentSchema = mongoose.Schema({
//   username: {
//     type: String,
//     unique: true,
//     required: [true, "user must have user name🤦‍♂️"],
//   },
//   email: {
//     type: String,
//     trim: true,
//     lowercase: true,
//     unique: true,
//     required: [true, "user must have user email📧"],
//   },
//   password: {
//     type: String,
//   },
//   ConfirmPassword: {
//     type: String,
//   },
//   phone: {
//     type: String,
//   },
//   gender:{
//     type:String
//   },
//   address:{
//     type:String
//   },
//   Teachers: [mongoose.Schema.ObjectId],
//   Subjects: [mongoose.Schema.ObjectId],
// });

// // create user model

// const Students = mongoose.model("Students", StudentSchema);

// module.exports = Students;
