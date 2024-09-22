let dates=document.getElementById('dates');

let todayDate=new Date();
console.log(todayDate.getDate())

document.getElementById('year').innerHTML=todayDate.getFullYear();

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
// console.log(monthNames[todayDate.getMonth()]);
document.getElementById('month').innerHTML=monthNames[todayDate.getMonth()];


currentYear=todayDate.getFullYear();
currentMonth=todayDate.getMonth();

currentDate=todayDate.getDate();
firstDateOfMonth=new Date(currentYear,currentMonth,1);
firstDayOfMonth=firstDateOfMonth.getDay()
console.log("First Date's Day: ",firstDayOfMonth)



for(let i=1;i<=firstDayOfMonth;i++){
    dates.innerHTML+='<div class="date-item inactive-date"><div>';
}


for(let i=1;i<=30;i++){
    if(i==currentDate){
        dates.innerHTML+='<div class="date-item active-date">'+i+'<div>';

    }else{
        dates.innerHTML+='<div class="date-item">'+i+'<div>';

    }
}



