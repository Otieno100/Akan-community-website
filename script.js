

// let female ={
//   Sunday: "Akosua",

//   Monday: "Adwoa",

// Tuesday: "Abenaa",

// Wednesday: "Akua",

// Thursday:  "Yaa",

// Friday: "Afua",

// Saturday: "Ama"
// }

// let male = {
//   Sunday: "Kwasi",

// Monday: "Kwadwo",

// Tuesday: "Kwabena",

// Wednesday: "Kwaku",

// Thursday:  "Yaw",

// Friday: "Kofi",

// Saturday: "Kwame"
// }


//  var gender = document.getElementById ("pick").addEventListener("click",getNameFromDayOfWeek())
// // console.log(alert("Proudly African"))


// // function myFunction() {
// //   alert ("Proud African");}




// // alert("Hello! This page has some Carrousel to Enjoy")








// function getNameFromDayOfWeek(date,gender){
//   var name;
//   if(date ==undefined)
//     return


//   if(gender ==undefined || !(gender.toUpperCase()=="FEMALE" || gender.toUpperCase()=="MALE"))
//     return

//   let CC = date.substr(6,7)
//   let YY = date.substr(8,9)
//   let MM = date.substr(0,1)
//   let DD = date.substr(3,4)

//   if ((DD<=0) || (DD>31)){
//     // invalid day return
//   }
  
//   if((MM<= 0) || (MM > 12) ) {
//     // invalid month return
//   }

//   let dayOfWeekNumber =( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
//   switch(dayOfWeekNumber){
//     case 0: 
//     if(gender.toUpperCase() == 'FEMALE'){

//       name =female.Sunday;
//     }else{
//       name =male.Sunday;
//     }
    
       
//         break;
//     case 1:
//       if(gender.toUpperCase() == 'FEMALE'){

//         name =female.Monday;
//       }else{
//         name =male.Monday;
//       }
//         break;
//     case 2:
//       if(gender.toUpperCase() == 'FEMALE'){

//         name =female.Tuesday;
//       }else{
//         name =male.Tuesday;
//       }
//         break;
//     case 3:
//       if(gender.toUpperCase() == 'FEMALE'){

//         name =female.Wednesday;
//       }else{
//         name =male.Wednesday;
//       }
//         break;
//     case 4:
//       if(gender.toUpperCase() == 'FEMALE'){

//         name =female.Thursday;
//       }else{
//         name =male.Thursday;
//       }
//         break;
//     case 5:
//       if(gender.toUpperCase() == 'FEMALE'){

//         name =female.Friday;
//       }else{
//         name =male.Friday;
//       }
//         break;
//     case 6:
//       if(gender.toUpperCase() == 'FEMALE'){

//         name =female.Saturday;
//       }else{
//         name =male.Saturday;
//       }
//         break;
//     }
//     return name;
// }



// function getInputValue() {
//   // Selecting the input element and get its value 
//   let inputVal = document.getElementsById("pick")[0].value;
//   // Displaying the value
//   alert(inputValue);
// }










// // // var value = document.forms.gender.value
// // // var submit = document.getElementById ("submit");
// // // submit.onclick = ()=>{
// //   // alert("Hello world")}

// //   var male = document.getElementById("male").value
// //   if (male==="Male"){
// //     alert ("your selection is male");
// //   }


// // // else if (value==="female"){
// //   // alert ("you have selected Female")
// // // }
// //   // else{

// //     // alert("select gender")
// //   // }



 



function submitDate() {
  let date = document.getElementById('date').value;
  let male = document.getElementById('male').checked
  let female = document.getElementById('female').checked
  let sex = 'male'
  if (female) {
      sex = 'female'
  }
  if (male) {
      sex = 'male'
  }
  let day = getDay(date)
  let dayOfWeek = getDayOfWeek(day)
  let name = getTheName(dayOfWeek, sex)
  document.getElementById("name").innerHTML = name
}

function getDay(date) {
  let cc = date.substr(0, 2)
  let yy = date.substr(0, 2);
  let mm = date.substr(5, 2);
  let dd = date.substr(8, 2)
  let yearLength = yy.length
  if (dd > 31) {
      alert("Invalid date")
  } else if (mm > 12) {
      alert("Invalid month")
  } else if (yearLength > 4) {
      alert("Invalid year")
  }
  let d = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7
  return Math.round(d)
}

function getDayOfWeek(day) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return days[day]
}

function getTheName(dayOfweek, sex) {
  let female = {
      Sunday: 'Akosua',
      Monday: 'Adwoa',
      Tuesday: 'Abenaa',
      Wednesday: 'Akua',
      Thursday: 'Yaa',
      Friday: 'Afua',
      Saturday: 'Amaa'
  }
  let male = {
      Sunday: 'Kwasi',
      Monday: 'Kwadwo',
      Tuesday: 'Kwabenaa',
      Wednesday: 'Kwaku',
      Thursday: 'Yaw',
      Friday: 'Kofi',
      Saturday: 'Kwame'
  }
  if (sex === 'male') {
      return male[dayOfweek]
  }
  return female[dayOfweek]
}

let day = getDayOfWeek(date)
let dayOfWeek = getDayOfWeek(day)
document.getElementById("name").innerHTML=dayOfWeek