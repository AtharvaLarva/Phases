var daySelect= document.getElementById("day");
var hourSelect= document.getElementById("hour");
var minuteSelect= document.getElementById("minute");
var monthSelect= document.getElementById("month");
var yearSelect= document.getElementById("year");
var locationSelect= document.getElementById("location");


var months= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var today= new Date();
var hourText = minuteText = dayText = monthText= "";

for (var i=0; i<months.length; i++){monthText+="<option>" + months[i] + "</option>";}
for (var i=1; i<32; i++){dayText+="<option>" + i + "</option>";}
for (var i=0; i<24; i++){hourText+="<option>" + i + "</option>";}
for (var i=0; i<60; i++){minuteText+="<option>" + i + "</option>";}


daySelect.innerHTML=dayText;
hourSelect.innerHTML=hourText;
minuteSelect.innerHTML=minuteText;
monthSelect.innerHTML=monthText;

monthSelect.value= months[today.getMonth()];
daySelect.value= today.getDate();
hourSelect.value= today.getHours();
minuteSelect.value= today.getMinutes();
yearSelect.value= today.getFullYear();
locationSelect.value= "Washington, DC";

calcPhase();
