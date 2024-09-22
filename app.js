let dates=document.getElementById('dates');

const todayDate=new Date();
const currentYear=todayDate.getFullYear();
const currentMonth=todayDate.getMonth();
const currentDate=todayDate.getDate();

//display year in the div
document.getElementById('year').innerHTML=todayDate.getFullYear();

//display month in the div
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
document.getElementById('month').innerHTML=monthNames[todayDate.getMonth()];


//display blank in days from previous month
const firstDateOfMonth=new Date(currentYear,currentMonth,1);
const firstDayOfMonth=firstDateOfMonth.getDay()
for(let i=1;i<=firstDayOfMonth;i++){
    dates.innerHTML+='<div class="date-item inactive-date"><div>';
}

//display dates of current month
const lastDateOfMonth=new Date(currentYear,currentMonth+1,0).getDate();
for(let i=1;i<=lastDateOfMonth;i++){
    if(i==currentDate){
        dates.innerHTML+='<div class="date-item active-date">'+i+'<div>';

    }else{
        dates.innerHTML+='<div class="date-item">'+i+'<div>';

    }
}



