// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
        // this.testValue = testValue;
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return this.role
    }
}



// const Alice = new Employee("Alice", 100)

module.exports = Employee

//engineer extends employee 
//super keyword