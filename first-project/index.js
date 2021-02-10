//write a variable without initial value
var x=undefined;
var x;

//write a variable with initial value
 var x="dania";

 //write 3 variables in same line without initial value

 var x ,y ,z;
 
 //write 3 variables in same line with initial value
 var x=y=z=1;
 var x=1,y=2,z=3;

 //write 3 variables with Boolean value
 var x=true,y=false,z=true;
 console.log(y);

//write a constant 
const result=0;

//write an empty array without initializing its size

const myarray=[];

//write an array of number from 1 to 10
const array=[1,2,3,4,5,6,7,8,9,10];
console.log(array);

//write an array of strings has letters from A to J

const array2=['A','B','C','D','E','F','G','H','I','J'];

//Write an Object has at least 3 attributes (keys) and give each one a numeric value
let users ={
    user1:1,
    user2:2,
    user3:3
}

//write an object has at least 3 attributes (keys) and give each one a string value\

// let user={
//     name:'dania',
//     age:'24',
//     gender:'female'
// }
// console.log(user);

//write an object has at least 3 attributes (keys) and give each one a Boolean value

// let obj={
//   beautiful:true,
//   clever:true,
//   lying:false
// }

//write an object has at least 3 attributes (keys) and give each one an array value

// let users={
//     user1:[
//         'sadi',
//         '15'
//     ],
//     user2:[
//      'ahmed',
//      '24'
//     ],
//     user3:[
//         'omar',
//         '22'
//     ]

// }

//write an object has at least 3 attributes (keys) and give each one an object value (object of objects)
// let btata={
//     btata1:{name:'ahmed', age:'13'},
//     btata2:{name:'sadi', age:'60'},
//     btata3:{name:'omar',age:'10'}
// }

//Write an object has at least 5 attributes (keys) and give each one different type of values including: string, number, Boolean, array, object

// let student={
//     name:'btata',
//     age:24,
//     clever:true,
//     hobbies:['see people','live','leave me alone'],
//     btataChildren:{name:'btata1',age:'5'},

// }
// //Write an array of objects
// allusers ={
//     users:[
//         {
//             id: 1,
//             name: "Dania",
//             pimage:"https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png",
//             image: "http://cdn.sci-news.com/images/enlarge5/image_6577e-2MASS-J18082002-5104378.jpg",
//             work: "Full stack Developer at Coding Academy by Orange",
//             location: "Jordan",
            
          
//           },
//           {
//             id: 2,
//             name: "Sara",
//             pimage:"https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png",
//             image: "http://cdn.sci-news.com/images/enlarge5/image_6577e-2MASS-J18082002-5104378.jpg",
//             work: "Full stack Developer at Coding Academy by Orange",
//             location: "Jordan",
            
          
//           },
//           {
//             id: 3,
//             name: "Tabarak",
//             pimage:"https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png",
//             image: "http://cdn.sci-news.com/images/enlarge5/image_6577e-2MASS-J18082002-5104378.jpg",
//             work: "Full stack Developer at Coding Academy by Orange",
//             location: "Jordan",
           
//           },
      
         

//     ]
// }

//write an array of objects, and each objects is an object of objects that has an array, this array will have at least one object

let help=[
    {
        help2:{
            help3:[
                {
                    name:'what the hell'
                },
                {
                    name:'what the hell 2'
                }
            ]
        }
    }
]
//Write a function to sum two numbers passed in parameters

function sum(x,y){
    sum=x+y;
    return sum;
}
console.log(sum(3,4));

//write a function to multiply two numbers
 
function multiply(x,y){
    multiply=x+y;
    return multiply;
}
console.log(multiply(3,4));
//write a function to sum two numbers entered by user
/* var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('\n');
console.log('Addition of Two Numbers in NodeJS');
console.log('\n');
rl.question('Enter first value : ', function (x) {
   rl.question('Enter  second value : ', function (y) {
  var a = parseInt(x);
  var b = parseInt(y);
        var sum = (a+b);
  
       console.log('\n');
       console.log('The sum of ',a, ' and ',b, ' is ' , sum,'.');
    console.log('\n');
       console.log('End of Program');
        rl.close();
    });
});
 */
//write a function to multiply two numbers entered by user
/* var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('\n');
console.log('Multiply of Two Numbers in NodeJS');
console.log('\n');
rl.question('Enter first value : ', function (x) {
   rl.question('Enter  second value : ', function (y) {
  var a = parseInt(x);
  var b = parseInt(y);
        var multiply = (a*b);
  
       console.log('\n');
       console.log('The multiply of ',a, ' and ',b, ' is ' , multiply,'.');
    console.log('\n');
       console.log('End of Program');
        rl.close();
    });
}); */
//Write a function to return a value
function myData() { 
    return 123; 
 } 
 /* console.log(myData()); */ // 123 
 //Write a function to print a value
 function hello(name) {
    console.log("hello " + name);
}
hello("All !! ");





