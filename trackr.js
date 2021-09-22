var dailyData = document.getElementById("daily-tab");
var weeklyData = document.getElementById("weekly-tab");
var monthlyData = document.getElementById("monthly-tab");
var workData = document.getElementById("first-record");
var workRaw = document.getElementById("first-previous");
var list = document.getElementById('list')

var trackData = [];


var listItems = `
<div class="user-info">
<div class="profile-description">
  <div class="name-container">
    <img src="images/image-jeremy.png" alt="Jeremy Robson" align="left" class="user-image"/>
    <article class="user-report">
      <p> Report for </p>
      <h1>  Jeremy Robson </h1>
    </article>
  </div>
</div>
<div class="time-frame">
  <ul>
    <li id="daily-tab"> Daily </li>
    <li id="weekly-tab"> Weekly </li>
    <li id="monthly-tab"> Monthly </li>
  </ul>
</div>
</div>
`

var styles = {
    Work : {
        record : 'work-record',
        img : 'images/icon-work.svg'
    },
    Play :{
        record : 'play-record',
        img : 'images/icon-play.svg'
    },
    
    Study :{
        record : 'play-record',
        img : 'images/icon-play.svg'
    },

    Exercise : {
        record: 'study-record',
        img : 'images/icon-exercise.svg'
    },

    "Social" : {
        record: 'social-record',
        img : 'images/icon-social.svg'
    },
    "Self Care" : {
        record: 'selfcare-record',
        img : 'images/icon-social.svg'
    }
}
var previous = null
var current = null

// const previousCheck = previous ? 



const displayDat = function() {
    trackData.forEach(element => {
        listItems += `
        <div class= ${styles[element.title]["record"]}>
        <div class="work-data">
          <div class="track-record">
            <h2> ${element.title} </h2>
            <img src="images/icon-ellipsis.svg" alt="Ellipsis Icon" align="right"/>
          </div>
          <div class="record-time">
          
          <h2 id="first-record" class="saved-data"> -hrs </h2>
           <p id="first-previous" class="previous-data"> Previous Day - -hrs </p>
          </div>
        </div>
        <div class="work-logo">
          <img src=${styles[element.title]["img"]} alt="Briefcase - Work Time Record" class="work-case"/>
        </div>  
        `
    });
    list.innerHTML = listItems
    console.log(listItems)
    
}



//Request to API endpoint
const fileOne = "https://gist.githubusercontent.com/Charvine-300/a3ab8e2c35569df78c4f863b52c949ec/raw/47f3516c12d778123d0cc1086dff7b8a3cd38514/timetracker.json";
fetch(fileOne).then((response) => {
    console.log("Resolved: ", response);
    return response.json();
})
.then((data) => {
    console.log(data)
    trackData = data
    console.log("trackdata" ,trackData)
    displayDat();
})
.catch((err) => {console.log("Rejected: ", err)});


dailyData.onclick = function() {
    dailyData.style.color = "hsl(0, 0%, 100%)";
    weeklyData.style.color = "hsl(235, 45%, 61%)";
    monthlyData.style.color = "hsl(235, 45%, 61%)";

    trackData.filter(item => {

    })
}

weeklyData.onclick = function() {
    dailyData.style.color = "hsl(235, 45%, 61%)";
    weeklyData.style.color = "hsl(0, 0%, 100%)";
    monthlyData.style.color = "hsl(235, 45%, 61%)";

}

monthlyData.onclick = function() {
    dailyData.style.color = "hsl(235, 45%, 61%)";
    weeklyData.style.color = "hsl(235, 45%, 61%)";
    monthlyData.style.color = "hsl(0, 0%, 100%)";
}

// var workRecord = document.createElement("div");
// workRecord.className = "work-record";
// console.log(workRecord);
// list.append(workRecord);
