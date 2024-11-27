// #1 class school

// class School{

//     Student (name,email,contact){
//         this.name = name;
//         this.email = email;
//         this.contact = contact;
//         console.log("Student Details");
//         console.log(`Name:${this.name}`);
//         console.log(`email:${this.email}`);
//         console.log(`contact:${this.contact}`);
//     }
//     Faculty (name,email,contact){
//         this.name = name;
//         this.email = email;
//         this.contact = contact;
//         console.log("Faculty Details");
//         console.log(`Name:${this.name}`);
//         console.log(`email:${this.email}`);
//         console.log(`contact:${this.contact}`);
//     }
// }

// let  person = new School()
// person.Student("Dhruvi","dhruvi1685@gmail.com","1236547890");
// person.Faculty("Girish-sir","girish15@gmail.com","9389603147");

// #2 Person class

// class Person {
//     constructor(name,age){
//         this.name =  name;
//         this.age = age;
//     }
//     Details(){
//         return `Name: ${this.name} , Age : ${this.age}`;
//     }
// }

// class Employee extends Person{
//     constructor(name,age,employeeId){
//         super(name,age);
//         this.employeeId =  employeeId;
//     }

//     printDetails(){
//         console.log(this.Details());
//         console.log(`Employee Id:${this.employeeId}`);
//     }
// }

// let employee = new Employee("Dhruvi",20,"7347");
// employee.printDetails();

// #3 Employee class

// class Employee{
//     constructor(){
//         console.log("An Employee has been created ");
//     }
// }

// let data = new Employee();

// #4 Shape class

// class Shape{
//     rectagle(width , height){
//         return width * height;
//     }
//     circle(radius){
//         return 3.14 * radius * radius;
//     }
// }

// let shape = new Shape();

// const rectaglewidth=16;
// const rectagleheight=29;

// console.log(`Rectangle Area: ${shape.rectagle(rectaglewidth , rectagleheight)}`);

// const radius = 7;
// console.log(`Circle Area: ${shape.circle(radius)}`);



