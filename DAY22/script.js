var a = 10;
let b = 20;
const c = 30;

// console.log(a,b,c)

let str = "Anand";
let num = 100;
let isActive = true;
let x = undefined;
let y = null;
let bigNum = 1234567890123456789012345678901234567890n;

// console.log (str,num,isActive,x,y,bigNum)
// console.log (typeof str,typeof num,typeof isActive,typeof x,typeof y,typeof bigNum)

let student = {
  name: "Anand",
  age: 20,
  isEnrolled: true,
  courses: ["HTML", "CSS", "JavaScript"]
};

student.age = 21;
student.courses = ["HTML", "CSS", "JavaScript", "Git & GitHub"]

student.address = {
  city: "Delhi",
  pincode: 110001
}

console.log (student)
console.log (typeof student.name,typeof student.age,typeof student.isEnrolled
,typeof student.courses,typeof student.address)