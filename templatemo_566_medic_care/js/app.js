// let name = prompt("enter your name")
// let userGender;

// while (userGender !== "male" && userGender !== "female") {
//   userGender = prompt("Enter your gender:").toLowerCase();
        
// }
// if(userGender == 'male')
//     alert("Welcome Mr " + name);
// else
//  alert("Welcome Ms " + name)

// // Q7

// for (let i = 0; i <= 5; i++) {
//     alert(i);
//   }

// Q8

// let message = " ";
// for (let i = 0; i <= 5; i++) {
//   message += i ; 
// }

// alert(message);

// Q9

// let message = " ";
// for (let i = 0; i <= 5; i++) {
//   message += i ; 
// }

// alert(message);

// Q9

// let message = " ";

// for (let i = 0; i <= 20; i++) {
//   if (i % 3 === 0) {
    
//     message += i + " ";
//   }
// }
// alert(message)

// Q10

// let number;

// do {
//   number = parseInt(prompt("Enter a number between 0 and 100 (inclusive):"));

//   if (isNaN(number) || number < 0 || number > 100) {
//     alert("Invalid number. Please enter a number between 0 and 100.");
//   }
// } while (isNaN(number) || number < 0 || number > 100);

// alert("You entered: " + number);

// Q11


  //   let sum = 0;
  
  //   for (let i = 0; i <= number; i++) {
  //     sum += i;
  //   }
  
  //   return sum;
  
  
  // const userNumber = parseInt(prompt("Enter an integer: "));
  
  
  // if (!isNaN(userNumber)) {
  //   const sum = calculateSum(userNumber);
  //   alert("The sum of integers from 0 to " + userNumber + " is: " + sum);
  // } else {
  //   alert("Invalid input. Please enter a valid integer.");
  // }

// let finden = function(){
//   let name = prompt("enter your name")
//   let userGender;
  
//   while (userGender !== "male" && userGender !== "female") {
//     userGender = prompt("Enter your gender:").toLowerCase();
          
//   }
//   if(userGender == 'male')
//       alert("Welcome Mr " + name);
//   else
//    alert("Welcome Ms " + name)
//   console.log(userGender + name)
  
// }
// finden();

// let userInfo = [];



// const userName = askQuestion("Enter your username: ");
// const gender = userGender;
// const orderType = askQuestion("What type of order do you want (e.g., pickup, delivery): ").toLowerCase();
// const orderName = askQuestion("Enter the name of your order: ");

// userInfo.push(userName, gender, orderType, orderName);

// console.log("order details:");

// for (let i = 0; i < userInfo.length; i++) {
//   console.log(`${i + 1}. ${userInfo[i]}`);
// }

// let order = prompt("do you want to order Donut , Coffee , Icecream or Bakery?");
         
        
//          if (order == 'Coffee', 'Donut', 'Icecream', 'Bakery')
//             {
                
//                 alert("your " + order + " is getting prepared");
//             }
            
//          else {
//                 alert("Thank you for visiting our factory");
//             }
// let details = [name, userGender, order, "Bakery"]

// console.log(details);
// ----------------------------------------------------------------

// document.getElementById("main").innerHTML = "This is Dounts treasure pick one !";


// function myFunction() {
//   for (let i = 0; i < 5; i++){
//     let make = prompt("call me");
//     // Create an "li" node:
//     let node = document.createElement("li");

//     // Create a text node:
//     let textnode = document.createTextNode(make);
    
//     // Append the text node to the "li" node:
//     node.appendChild(textnode);
    
//     // Append the "li" node to the list:
//     document.getElementById("ol1").appendChild(node);
//   }
  
  
// }

// myFunction();

// ---------------------------------------------------------------------
// EventTask:
// form.addEventListener('submit', function (event) {
  //   event.preventDefault()
  // let messages = []
  // if (gender !== "male" && gender !== "female") {
    //   messages.push("Enter a valid gender")
    // }
    
    
    //   localStorage.setItem("Patient", infos);
    //   localStorage.setItem("Patient",JSON.stringify(user));
      // document.getElementById("uform").reset();
      
      // });
      
function render(e) {
  e.preventDefault();
  let backup = localStorage.getItem("Patient") == null ? [] : JSON.parse(localStorage.getItem("Patient"));
      let user = document.getElementById("name").value;
      let age = document.getElementById("age").value;
      let passw = document.getElementById("new-password").value;
      let gender = document.getElementById("gender").value;
      let diss = document.getElementById("diss").value;
      let phone = document.getElementById("phone").value;
  const obj = {
    name: user,
    birth: age,
    password: passw,
    Gender: gender,
    disaster: diss,
    number: phone
   
  
  };
  backup.push(obj);
  localStorage.setItem("Patient", JSON.stringify(backup));

}
const form = document.getElementById("uform");
form.addEventListener('submit', render);
// function cons(fullName, gender,age,phone,password,) {
  
// }
// ---------------------------
// function validate() {
 
//   let user = document.getElementById("new-password").value;
//   let user2 = document.getElementById("new-password");
//   let re = 
//       /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (re.test(user)) {
//       alert("done");
//       return true;
//   }
//   else {
//       user2.style.border = "red solid 3px";
//       return false;
//   }
// }


  const SetError =()



  // var stuff = ($('#uform').val());
    // Load emails
  // var infos = JSON.parse(localStorage.getItem('uform'));
  // if (infos) {
    // If the item exists in local storage push the new email address to the array and and save
  //   infos.push(p);
  //   localStorage.setItem('uform', JSON.stringify(infos));
  // } else {
    // If the item doesn't exist in local storage set the item to a new array containing new email address
  //   localStorage.setItem('uform', JSON.stringify([infos]));
  // }


  
// });


// $(document).on("click", "#loadEmail", function(e) {
//   alert(JSON.parse(localStorage.getItem('uform')));
// });




