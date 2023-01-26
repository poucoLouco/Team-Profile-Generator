const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole(){
        return "Intern";
    }
}
module.exports = Intern;