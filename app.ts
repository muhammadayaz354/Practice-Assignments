const student : {
    studentName: string,
    age : number
    ispass: true;
    rollNumber: number
} = {
    studentName: "ayaz",
    age : 19,
    ispass: true,
    rollNumber: 2003
}
console.log(student.age, student.rollNumber);

interface studentCard {
    typ: string,
    Expiry: boolean,
    rollNumber: number
}      

let information: studentCard = {
    typ: "silver",
    Expiry: false,
    rollNumber: 16
}
console.log(information);

 interface studentaddress {
   street: string;
   city: string;
   houseNo: number;
   zipCode: number;
 }
 type information = {
   Name: string;
   age: number;
   ispass: boolean;
   hight: number;
   gender: string;
   adress: studentaddress;
 };

 let student1: information = {
   Name: "ayaz",
   age: 21,
   ispass: true,
   hight: 6,
   gender: "male",
   adress: {
     street: "five",
     city: "karachi",
     houseNo: 1219,
     zipCode: 4406,
   },
 };
 console.log(student1);



