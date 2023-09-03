const express = require("express");
const morgan = require("morgan");
const studentRouter = require("./router/StudentRouter");
const teacherRouter = require("./router/TeacherRouter");
const AdminRouter = require("./router/RouterAdmin");
// create copy of express function
const app = express();

// call morgan middleware
app.use(morgan("dev"));
// call json() middleware
app.use(express.json());

// mounting process
// app.use("/api/v1/students", studentRouter);
// app.use("/api/v1/teachers", teacherRouter);
app.use("/api/v1/admin", AdminRouter);

module.exports = app;
