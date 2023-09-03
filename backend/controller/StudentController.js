// // import use Students model
// const Students = require("../model/StudentModel");

// // function to get all students
// exports.getAllStudents = async (req, res) => {
//   try {
//     const students = await Students.find();
//     res.status(200).json({
//       result: students.length,
//       status: "success",
//       data: {
//         students: students,
//       },
//     });
//   } catch (err) {
//     res.json({
//       status: "fail",
//       message: err,
//     });
//   }
// };

// // create new student

// exports.AddStudent = async (req, res) => {
//   try {
//     const newStudent = await Students.create(req.body);
//     res.status(201).json({
//       status: "success",
//       data: {
//         student: newStudent,
//       },
//     });
//   } catch (error) {
//     res.json({
//       status: "fail",
//       message: `🧨 ${error}💣`,
//     });
//   }
// };

// // get specific student
// exports.getStudent = async (req, res) => {
//   try {
//     const studentId = req.params.id;
//     const student = await Students.findById(studentId);
//     res.status(200).json({
//       status: "success",
//       data: {
//         student: student,
//       },
//     });
//   } catch (error) {
//     res.json({
//       message: `🙎${error}💣`,
//     });
//   }
// };

// // update student
// exports.updateStudent = async (req, res) => {
//   try {
//     const studentId = req.params.id;
//     const studentUpdate = await Students.findByIdAndUpdate(
//       studentId,
//       req.body,
//       {
//         new: true,
//       }
//     );
//     res.status(202).json({
//       status: "success",
//       data: {
//         student: studentUpdate,
//       },
//     });
//   } catch (error) {
//     res.json({
//       status: "fail",
//       message: `➡️↘️${error}↙️⬇️`,
//     });
//   }
// };

// // Delete user
// exports.deleteStudent = async (req, res) => {
//   try {
//     const studentId = req.params.id;
//     const student = await Students.findByIdAndDelete(studentId);
//     res.status(201).json({
//       status: "success",
//       student: null,
//     });
//   } catch (error) {
//     res.json({
//       status: "fail",
//       message: `❌🙎${error}❌🙎`,
//     });
//   }
// };
