
const CHART = document.getElementById("donutChart");

var donutChart = new Chart(CHART, {
  type: 'doughnut',
  data: {
     labels: ["Other", "Users who share content they upload with others"],
     datasets: [{
         label: 'Survey Takers',
         data: [23.3,76.7],
         backgroundColor: [
             '#FECAC3',
             '#1F989E'
         ]

     }
   ]
 },
 options: {
  legend: {
    display: false
  },
}

});

const CHART2 = document.getElementById("donutChart2");
var donutChart2 = new Chart(CHART2, {
  type: 'doughnut',
  data: {
     labels: ["Other", "Daily Cloud Storage Users"],
     datasets: [{
         label: 'Survey Takers',
         data: [40,60],
         backgroundColor: [
           '#FECAC3',
           '#1F989E'
         ],
     }]
 },
 options: {
  legend: {
    display: false
  }
}
});

const CHART3 = document.getElementById("donutChart3");
var donutChart2 = new Chart(CHART3, {
  type: 'doughnut',
  data: {
     labels: ["Other", "Google Drive Users"],
     datasets: [{
         label: 'Survey Takers',
         data: [6.3, 93.7],
         backgroundColor: [
           '#FECAC3',
           '#1F989E'
         ],
     }]
 },
  options: {
   legend: {
     display: false
   }
 }
});

const CHART4 = document.getElementById("donutChart4");
var donutChart2 = new Chart(CHART4, {
  type: 'doughnut',
  data: {
     labels: ["Other", "Want to Save Online Content"],
     datasets: [{
         label: 'Survey Takers',
         data: [54.8, 55.2],
         backgroundColor: [
           '#FECAC3',
           '#1F989E'
         ],
     }]
 },
 options: {
  legend: {
    display: false
  }
}
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
