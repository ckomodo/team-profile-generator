const { returnStatement } = require("@babel/types");
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";

        const newInt = new Intern("chris", 1, "jjaa@jddj.plo", "udub");
        console.log(newInt);
    }

    getRole() {
        return this.role
    }

    getSchool() {
        return this.school
    }

}

module.exports = Intern