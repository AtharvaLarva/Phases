function calcPhase(){
  var moon= document.getElementById("moon");
  var stats= document.getElementById("stats");
  var date= (months.indexOf(monthSelect.value)+1) + "/" + daySelect.value + "/" + yearSelect.value;
  var time= hourSelect.value + ":" + minuteSelect.value;
  var imgUrl = "http://api.usno.navy.mil/imagery/moon.png?date=" + date + "&time=" + time;
  var statURL= "http://api.usno.navy.mil/rstt/oneday?date=" + date + "&loc=" + locationSelect.value;

  console.log(statURL);
  console.log(imgUrl);
  moon.src=imgUrl;
  $.getJSON(statURL, function(data) {

      var curphase= data["curphase"];
      var fracillum= data["fracillum"];
      var moonrise= data["moondata"][0]["time"];
      var moonset= data["moondata"][2]["time"];
      var closestPhase= data["closestphase"]["phase"];
      var closestPhaseDate= data["closestphase"]["date"];
      var statText;

      statText= "On " + date +  " at " +  locationSelect.value + " ,the moon is in the " + "<b>"+ curphase  + "</b>" + " phase";
      statText+= " and is " + "<b>" + fracillum + "</b>" + " full.";
      statText+="<br /> The closest phase is the " + closestPhase + " phase, which occurs on " + closestPhaseDate;
      statText+="<br /> Moonrise: " + moonrise + ". Moonset: " + moonset;
      stats.class="";
      stats.innerHTML= statText;


  });
}
