const ctx= document.getElementById('zenChart');
var zenChart= new Chart (ctx, {
  type: 'doughnut',
  data: {
     labels: ["Books/Notes", "Google Images/Search"],
     datasets: [{
         label: 'Survey Takers',
         data: [53.8, 47.2],
         backgroundColor: [
           '#F7931E',
           '#FFDAAF'
         ],
     }]
 },
 options: {
  legend: {
    display: false
  }
}
});

const ctx2= document.getElementById('zenChart2');
var zenChart2= new Chart (ctx2, {
  type: 'doughnut',
  data: {
     labels: ["Plan Day Of", "Pre-Plan Classes"],
     datasets: [{
         label: 'Survey Takers',
         data: [60, 40],
         backgroundColor: [
           '#F7931E',
           '#FFDAAF'
         ],
     }]
 },
 options: {
  legend: {
    display: false
  }
}
});

const ctx3= document.getElementById('zenChart3');
var zenChart3= new Chart (ctx3, {
  type: 'doughnut',
  data: {
     labels: ["Sub Classes", "Never/Rarely Sub Classes"],
     datasets: [{
         label: 'Survey Takers',
         data: [90, 10],
         backgroundColor: [
           '#F7931E',
           '#FFDAAF'
         ],
     }]
 },
 options: {
  legend: {
    display: false
  }
}
});

const ctx4= document.getElementById('zenChart4');
var zenChart4= new Chart (ctx4, {
  type: 'doughnut',
  data: {
     labels: ["Want to Browse Online Pose Library", "Don't Need Online Library"],
     datasets: [{
         label: 'Survey Takers',
         data: [84.6, 15.4],
         backgroundColor: [
           '#F7931E',
           '#FFDAAF'
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
