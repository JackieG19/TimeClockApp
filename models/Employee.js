const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    session: {Array}
});

const EmployeeSchema = new Schema({
    firstName: {
        type: String
    },
    
    lastName: {
        type: String
    },
    
    employeeId:{
        type: Number,
        required: true
    },
    companyName: {
        type: String
    },
    
    deptName: {
        type: String
    },
    
    timeIn:Array,
    
    timeOut: Array,
    
    sessionTotals: {SessionSchema},
    
    isClockedIn: {
        type: Boolean
    }
});

const Employees = mongoose.model('employee', EmployeeSchema);

module.exports = Employees;
