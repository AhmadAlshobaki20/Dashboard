// const mongoose = require("mongoose");

// const teacherSchema = mongoose.Schema({
//   username: {
//     type: String,
//     required: [true, "teacher must have name"],
//   },
//   email: {
//     type: "String",
//     required: [true, "teacher must have email"],
//     lowercase: true,
//     unique: true,
//   },
//   teacherIdentity: {
//     type: Number,
//     required: [true, "teacher must have identity"],
//   },
//   password: {
//     type: String,
//     required: [true, "teacher must have password"],
//   },
//   confirmPassword: {
//     type: String,
//   },
//   phone: {
//     type: Number,
//     required: [true, "teacher must have phone"],
//   },
//   gender:{
//     type:String
//   },
//   address:{
//     type:String
//   },
//   img:String,
//   Students: [{ type: mongoose.Schema.ObjectId, ref:"Students" }],
//   Subjects: [{ type: mongoose.Schema.ObjectId ,ref:""}],
// });

// const Teachers = mongoose.model("Teacher", teacherSchema);
// ("");
// module.exports = Teachers;
