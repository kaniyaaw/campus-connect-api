const students = require('./students/students.service.js');
const courses = require('./courses/courses.service.js');
const messages = require('./messages/messages.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(students);
  app.configure(courses);
  app.configure(messages);
};
