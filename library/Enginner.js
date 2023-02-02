const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        
        return this.officeNumber;
    }
    getRole(){
        return "Engineer";
    }
    getGithub(){
        return this.getGithub;
    }


}
module.exports = Engineer;