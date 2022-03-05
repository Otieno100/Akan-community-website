// var emailAddress = document.getElementById('emailAddress');
// var password = document.getElementById('password');
// var registerUser=document.getElementById('registerUser');
// var signin= document.getElementById('signin');
// var firstName= document.getElementById('firstName');
// var forgotPassword = document.getElementById('forgotPassword');

// registerUser.addEventListener('click',registerUsersFunction);
// signin.addEventListener('click',signIn);
// forgotPassword.addEventListener('click',forgotPasswordFunction);
// // resetPassword.addEventListener('click',resetFunction);

// function registerUsersFunction(e){
//     e.preventDefault();
   

//     window.location.href='SignUp.html';
    
// }
// function signIn(e){
//     e.preventDefault();
//     console.log('done');
//   var user=  localStorage.getItem('username');
//   var passwordItem=  localStorage.getItem('password');
//   if(firstName.value===user && password.value === passwordItem){
//     window.location.href='../index.html'

//   }
//   else{
//       console.log("wrong creds");
//       showSnackbar();

//   }
  
// }
// function showSnackbar() {
// 	var snackBar =
// 	document.getElementById("toast");
// 	snackBar.className = "show-bar";

// 	setTimeout(function () {  
// 	// Dynamically Removing the Class
// 	// from HTML element
// 	// By Replacing it with an Empty
// 	// String after 5 seconds
// 	snackBar.className =
// 		snackBar.className.replace("show-bar", "");
// 	}, 5000);
// }

// function forgotPasswordFunction(e){
//   e.preventDefault();
//   window.location.href='resetPassword.html';
// }


// var logIn = document.getElementById ("login").addEventListener("click",myFunction)
// console.log(alert("Proudly African"))


// function myFunction() {
//   alert ("Proud African");}


alert()

alert("Hello! This page has some Carrousel to Enjoy")



let female ={
  Sunday: "Akosua",

  Monday: "Adwoa",

Tuesday: "Abenaa",

Wednesday: "Akua",

Thursday:  "Yaa",

Friday: "Afua",

Saturday: "Ama"
}

let male = {
  Sunday: "Kwasi",

Monday: "Kwadwo",

Tuesday: "Kwabena",

Wednesday: "Kwaku",

Thursday:  "Yaw",

Friday: "Kofi",

Saturday: "Kwame"
}





function getNameFromDayOfWeek(date,gender){
  var name;
  if(date ==undefined)
    return


  if(gender ==undefined || !(gender.toUpperCase()=="FEMALE" || gender.toUpperCase()=="MALE"))
    return

  let CC = date.substr(6,7)
  let YY = date.substr(8,9)
  let MM = date.substr(0,1)
  let DD = date.substr(3,4)

  if ((DD<=0) || (DD>31)){
    // invalid day return
  }
  
  if((MM<= 0) || (MM > 12) ) {
    // invalid month reurn
  }

  let dayOfWeekNumber =( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
  switch(dayOfWeekNumber){
    case 0: 
    if(gender.toUpperCase() == 'FEMALE'){

      name =female.Sunday;
    }else{
      name =male.Sunday;
    }
    
       
        break;
    case 1:
      if(gender.toUpperCase() == 'FEMALE'){

        name =female.Monday;
      }else{
        name =male.Monday;
      }
        break;
    case 2:
      if(gender.toUpperCase() == 'FEMALE'){

        name =female.Tuesday;
      }else{
        name =male.Tuesday;
      }
        break;
    case 3:
      if(gender.toUpperCase() == 'FEMALE'){

        name =female.Wednesday;
      }else{
        name =male.Wednesday;
      }
        break;
    case 4:
      if(gender.toUpperCase() == 'FEMALE'){

        name =female.Thursday;
      }else{
        name =male.Thursday;
      }
        break;
    case 5:
      if(gender.toUpperCase() == 'FEMALE'){

        name =female.Friday;
      }else{
        name =male.Friday;
      }
        break;
    case 6:
      if(gender.toUpperCase() == 'FEMALE'){

        name =female.Saturday;
      }else{
        name =male.Saturday;
      }
        break;
    }
    return name;
}


function gender(elem) { return elem[0].gender }

 



