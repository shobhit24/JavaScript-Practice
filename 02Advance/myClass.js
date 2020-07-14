class User {
    constructor(firstname, lastname,credit){
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;
    }
    
    getFullName(){ return  `${this.firstname} ${this.lastname} is my full name`;}
      
    editName(newName){
        const myname = newName.split(' ');
        this.firstname = myname[0];
        this.lastname = myname[1];
    }
}

class Teacher extends User {
    constructor(firstname, lastname,credit, subject) {
        super(firstname, lastname,credit)
        this.subject = subject;
    }
    getFullName(){
         return  `${this.firstname} ${this.lastname} is my full name and I teach ${this.subject}`;}

}

const john = new Teacher('John', 'Anderson', 34, 'python');

console.log(john.getFullName());
john.editName('Johnny Doe');
console.log(john.getFullName());