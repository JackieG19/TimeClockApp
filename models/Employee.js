const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    firstName: String,
    lastName: String,
    employeeId: Number,
    department: String,
    timeIn: String,
    timeOut: String,
    companyName: String,
    clockedIn: Boolean
});

const Employees = mongoose.model('employee', EmployeeSchema);

module.exports = Employees;