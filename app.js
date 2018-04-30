function sel(value2){
    for(var i = 0; i < document.querySelector(".select").length; i++){
        if(document.querySelector(".select").options[i].value == value2){
            document.querySelector(".select").selectedIndex = i;
        }
    }
}

var line = document.getElementById("line");
var buttons = document.getElementsByTagName("BUTTON");
var bar = document.getElementById("bar");
var pie = document.getElementById("pie");
var NotificationsChecked = false;
var popUp = document.querySelector(".popUp");
var close = document.querySelector(".close");
var overlay = document.querySelector(".overlay");
var message1 = true;
var lineChart = new Chart(line, {
    type: "line",
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",],
        datasets: [{
            backgroundColor: "rgba(116, 119, 191, 0.6)",
            data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 2250, 1750, 2250],
            label: "# of visits"
        }]
    },
        options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        maintainAspectRatio: false,
        responsive: true
    }
});
var barChart = new Chart(bar, {
    type: "bar",
    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [{
            label: '# of visits',
            data: [30, 22, 18, 22, 40, 80, 85],
            backgroundColor: [
                "rgb(116, 119, 191)",
                "rgb(116, 119, 191)",
                "rgb(116, 119, 191)",
                "rgb(116, 119, 191)",
                "rgb(116, 119, 191)",
                "rgb(116, 119, 191)",
                "rgb(116, 119, 191)"
            ],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        maintainAspectRatio: true,
        responsive: true
    }
})
var pieChart = new Chart(pie, {
    type: "pie",
    data: {
        labels: ["dekstop", "tablet", "phones"],
        datasets: [{
            data: [65, 20, 15],
            backgroundColor: [
                "rgb(115, 119, 191)",
                "rgb(129, 201, 143)",
                "rgb(116, 177, 191)"
            ]
        }]
    },
    options: {
        cutoutPercentage: 50
    }
})
function hourly() {
    lineChart.data.labels[0] = "1am";
    lineChart.data.datasets[0].data[0] = 2;
    lineChart.data.labels[1] = "2am";
    lineChart.data.datasets[0].data[1] = 3;
    lineChart.data.labels[2] = "3am";
    lineChart.data.datasets[0].data[2] = 2;
    lineChart.data.labels[3] = "4am";
    lineChart.data.datasets[0].data[3] = 1;
    lineChart.data.labels[4] = "5am";
    lineChart.data.datasets[0].data[4] = 4;
    lineChart.data.labels[5] = "6am";
    lineChart.data.datasets[0].data[5] = 7;
    lineChart.data.labels[6] = "7am";
    lineChart.data.datasets[0].data[6] = 11;
    lineChart.data.labels[7] = "8am";
    lineChart.data.datasets[0].data[7] = 14;
    lineChart.data.labels[8] = "9am";
    lineChart.data.datasets[0].data[8] = 12;
    lineChart.data.labels[9] = "10am";
    lineChart.data.datasets[0].data[9] = 13;
    lineChart.update();
    document.querySelector(".active").classList = "";
    buttons[0].className+= "active";
};
function daily() {
    lineChart.data.labels[0] = "Monday";
    lineChart.data.datasets[0].data[0] = 30;
    lineChart.data.labels[1] = "Tuesday";
    lineChart.data.datasets[0].data[1] = 22;
    lineChart.data.labels[2] = "Wednesday";
    lineChart.data.datasets[0].data[2] = 18;
    lineChart.data.labels[3] = "Thursday";
    lineChart.data.datasets[0].data[3] = 22;
    lineChart.data.labels[4] = "Friday";
    lineChart.data.datasets[0].data[4] = 40;
    lineChart.data.labels[5] = "Saturday";
    lineChart.data.datasets[0].data[5] = 80;
    lineChart.data.labels[6] = "Sunday";
    lineChart.data.datasets[0].data[6] = 85;
    lineChart.data.labels[7] = "Monday";
    lineChart.data.datasets[0].data[7] = 32;
    lineChart.data.labels[8] = "Tuesday";
    lineChart.data.datasets[0].data[8] = 29;
    lineChart.data.labels[9] = "Wednesday";
    lineChart.data.datasets[0].data[9] = 27;
    lineChart.update();
    document.querySelector(".active").classList = "";
    buttons[1].className+= "active";
};
function weekly() {
    lineChart.data.labels[0] = "Week 01";
    lineChart.data.datasets[0].data[0] = 57;
    lineChart.data.labels[1] = "Week 02";
    lineChart.data.datasets[0].data[1] = 62;
    lineChart.data.labels[2] = "Week 03";
    lineChart.data.datasets[0].data[2] = 69;
    lineChart.data.labels[3] = "Week 04";
    lineChart.data.datasets[0].data[3] = 71;
    lineChart.data.labels[4] = "Week 05";
    lineChart.data.datasets[0].data[4] = 69;
    lineChart.data.labels[5] = "Week 06";
    lineChart.data.datasets[0].data[5] = 72;
    lineChart.data.labels[6] = "Week 07";
    lineChart.data.datasets[0].data[6] = 67;
    lineChart.data.labels[7] = "Week 08";
    lineChart.data.datasets[0].data[7] = 74;
    lineChart.data.labels[8] = "Week 09";
    lineChart.data.datasets[0].data[8] = 72;
    lineChart.data.labels[9] = "Week 10";
    lineChart.data.datasets[0].data[9] = 78;
    lineChart.update();
    document.querySelector(".active").classList = "";
    buttons[2].className+= "active";
};
function monthly() {
    lineChart.data.labels[0] = "January";
    lineChart.data.datasets[0].data[0] = 750;
    lineChart.data.labels[1] = "February";
    lineChart.data.datasets[0].data[1] = 1250;
    lineChart.data.labels[2] = "March";
    lineChart.data.datasets[0].data[2] = 1000;
    lineChart.data.labels[3] = "April";
    lineChart.data.datasets[0].data[3] = 1500;
    lineChart.data.labels[4] = "May";
    lineChart.data.datasets[0].data[4] = 2000;
    lineChart.data.labels[5] = "June";
    lineChart.data.datasets[0].data[5] = 1500;
    lineChart.data.labels[6] = "July";
    lineChart.data.datasets[0].data[6] = 1750;
    lineChart.data.labels[7] = "August";
    lineChart.data.datasets[0].data[7] = 2250;
    lineChart.data.labels[8] = "September";
    lineChart.data.datasets[0].data[8] = 1750;
    lineChart.data.labels[9] = "October";
    lineChart.data.datasets[0].data[9] = 2250;
    lineChart.update();
    document.querySelector(".active").classList = "";
    buttons[3].className+= "active";
};
document.querySelector(".notif").addEventListener("click", () => {
    document.querySelector(".alert").style.display = "none";
});
var tags = [ "Dave Collins", "Arthur McKein", "Alexander Sontro", "Dovydas Simonovas", "Wiliam Shookspeare", "Adolf Main", "Katty Williams" ];
$( ".input" ).autocomplete({
  source: function( request, response ) {
          var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
          response( $.grep( tags, function( item ){
              return matcher.test( item );
          }) );
      }
});
$(document).ready(function() {
    $('a[href^="#"]').on("click", function(e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: $(this.hash).offset().top
      }, 1000, 'swing');
    });
  });
if(localStorage.email == "false"){}
else {document.getElementById("emailswitch").setAttribute("checked", "")}

if(localStorage.public == "false"){}
else {document.getElementById("profile-switch").setAttribute("checked", "")}
if(localStorage.select == ""){}
else if (localStorage.select == "-12:00"){sel("-12:00")}
else if (localStorage.select == "-11:00"){sel("-11:00")}
else if (localStorage.select == "-10:00"){sel("-10:00")}
else if (localStorage.select == "-9:30"){sel("-09:30")}
else if (localStorage.select == "-09:00"){sel("-09:00")}
else if (localStorage.select == "-08:00"){sel("-08:00")}
else if (localStorage.select == "-07:00"){sel("-07:00")}
else if (localStorage.select == "-06:00"){sel("-06:00")}
else if (localStorage.select == "-05:00"){sel("-05:00")}
else if (localStorage.select == "-04:50"){sel("-04:50")}
else if (localStorage.select == "-04:00"){sel("-04:00")}
else if (localStorage.select == "-03:50"){sel("-03:50")}
else if (localStorage.select == "-03:00"){sel("-03:00")}
else if (localStorage.select == "-02:00"){sel("-02:00")}
else if (localStorage.select == "-01:00"){sel("-01:00")}
else if (localStorage.select == "+00:00"){sel("+00:00")}
else if (localStorage.select == "+01:00"){sel("+01:00")}
else if (localStorage.select == "+02:00"){sel("+02:00")}
else if (localStorage.select == "+03:00"){sel("+03:00")}
else if (localStorage.select == "+03:50"){sel("+03:50")}
else if (localStorage.select == "+04:00"){sel("+04:00")}
else if (localStorage.select == "+04:50"){sel("+04:50")}
else if (localStorage.select == "+05:00"){sel("+05:00")}
else if (localStorage.select == "+05:50"){sel("+05:50")}
else if (localStorage.select == "+05:75"){sel("+05:75")}
else if (localStorage.select == "+06:00"){sel("+06:00")}
else if (localStorage.select == "+06:50"){sel("+06:50")}
else if (localStorage.select == "+07:00"){sel("+07:00")}
else if (localStorage.select == "+08:00"){sel("+08:00")}
else if (localStorage.select == "+08:75"){sel("+08:75")}
else if (localStorage.select == "+09:00"){sel("+09:00")}
else if (localStorage.select == "+09:50"){sel("+09:50")}
else if (localStorage.select == "+10:50"){sel("+10:50")}
else if (localStorage.select == "+11:00"){sel("+11:00")}
else if (localStorage.select == "+11:50"){sel("+11:50")}
else if (localStorage.select == "+12:00"){sel("+12:00")}
else if (localStorage.select == "+12:75"){sel("+12:75")}
else if (localStorage.select == "+13:00"){sel("+13:00")}
else if (localStorage.select == "+10:00"){sel("+10:00")}
else if (localStorage.select == "+14:00"){sel("+14:00")}

document.querySelector(".save").addEventListener("click", () => {
    if(document.getElementById("emailswitch").checked){
        localStorage.email = true;
    }
    else{
        localStorage.email = false;
    }
    if(document.getElementById("profile-switch").checked){
        localStorage.public = true;
    }
    else{
        localStorage.public = false;
    }
    localStorage.select = document.querySelector(".select").options[document.querySelector(".select").selectedIndex].getAttribute("value");

});
document.querySelector(".cancel").addEventListener("click", () => {
    localStorage.email = false;
    localStorage.public = false;
});
document.getElementById("send").addEventListener("click", () => {
    if (document.getElementById("username").value != "" && document.getElementById("text").value != "") {
        alert("Message sent");
    }
    else{
        alert("Please fill all input areas");
    }
});
document.getElementById("bell").addEventListener("click", () => {
    if (NotificationsChecked) {
        
    }
    else{
        NotificationsChecked = true;
        overlay.style.display = "inline";
    }
});
close.addEventListener("click", () => {
    if(message1){
        close.parentNode.lastElementChild.firstElementChild.innerHTML = "Message 2/2";
        close.parentNode.lastElementChild.lastElementChild.innerHTML = "Alex Drake has sent you a friend invite"
        message1 = false;
    }
    else{
    close.parentNode.parentNode.style.display = "none";
    }
});
document.querySelector(".select").addEventListener("change", (e) => {
    for (let i = 0; i < document.querySelector(".select").length; i++) {
        const l = document.querySelector(".select")[i];
        if(l.getAttribute("selected") == ""){l.removeAttribute("selected")}
        else{}
    }
    for (let i = 1; i < document.querySelector(".select").length; i++) {
        const l = document.querySelector(".select");
        if(l.options[i].getAttribute("value") == l.options[l.selectedIndex].value)
        {l.options[i].setAttribute("selected", "")}
        else{}
    }
})
// 1.41421356237309502 is closest I got to square root of 2