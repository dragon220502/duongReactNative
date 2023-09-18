// function calculateBMI() {
//     var markMass = parseFloat(document.getElementById("mark-mass").value);
//     var markHeight = parseFloat(document.getElementById("mark-height").value);
//     var johnMass = parseFloat(document.getElementById("john-mass").value);
//     var johnHeight = parseFloat(document.getElementById("john-height").value);
  
//     var markBMI = markMass / (markHeight * markHeight);
//     var johnBMI = johnMass / (johnHeight * johnHeight);
  
//     var resultDiv = document.getElementById("result");
//     resultDiv.innerHTML = "BMI của Mark: " + markBMI.toFixed(2) + "<br>BMI của John: " + johnBMI.toFixed(2);
//   }
  

//   function compareBMI() {
//     var markMass = parseFloat(document.getElementById("mark-mass").value);
//     var markHeight = parseFloat(document.getElementById("mark-height").value);
//     var johnMass = parseFloat(document.getElementById("john-mass").value);
//     var johnHeight = parseFloat(document.getElementById("john-height").value);
  
//     var markBMI = markMass / (markHeight * markHeight);
//     var johnBMI = johnMass / (johnHeight * johnHeight);
  
//     var resultDiv = document.getElementById("result");
  
//     if (markBMI > johnBMI) {
//       resultDiv.innerHTML = "BMI của Mark (" + markBMI.toFixed(2) + ") lớn hơn BMI của John (" + johnBMI.toFixed(2) + ").";
//     } else if (markBMI < johnBMI) {
//       resultDiv.innerHTML = "BMI của Mark (" + markBMI.toFixed(2) + ") nhỏ hơn BMI của John (" + johnBMI.toFixed(2) + ").";
//     } else {
//       resultDiv.innerHTML = "BMI của Mark (" + markBMI.toFixed(2) + ") bằng BMI của John (" + johnBMI.toFixed(2) + ").";
//     }
//   }
//   function calculateAverageScore(dolphinsScores, koalasScores)  {
//   var dolphinsTotalScore = 0;
//   var koalasTotalScore = 0;
  
//   for (var i = 0; i < dolphinsScores.length; i++)  
//     dolphinsTotalScore += dolphinsScores[i];
  
//   for (var j = 0; j < koalasScores.length; j++)  
//     koalasTotalScore += koalasScores[j];

//   var dolphinsAverageScore = dolphinsTotalScore / dolphinsScores.length;
//   var koalasAverageScore = koalasTotalScore / koalasScores.length;

//   var resultDiv = document.getElementById("result2");

//   if (dolphinsAverageScore >= 100 && koalasAverageScore >= 100)  
//     if (dolphinsAverageScore > koalasAverageScore)  
//       resultDiv.innerHTML = "Đội Dolphins đã chiến thắng với điểm trung bình là " + dolphinsAverageScore.toFixed(2) + ".";
//     else if (dolphinsAverageScore < koalasAverageScore)  
//       resultDiv.innerHTML = "Đội Koalas đã chiến thắng với điểm trung bình là " + koalasAverageScore.toFixed(2) + ".";
//     else  
//       resultDiv.innerHTML = "Hai đội đã hòa với cùng điểm trung bình là " + dolphinsAverageScore.toFixed(2) + ".";
//   else  
//     resultDiv.innerHTML = "Không có đội nào đạt được điểm trung bình tối thiểu 100.";

// }

const urlBacon = "https://jsonplaceholder.typicode.com/todos/1";

function getData(){$.ajax({method: "GET", url: urlBacon, dataType: "json"})

    .done(function (data) {console.log(data);})
    .fail(function () {alert("no good");});
}
function getData1(){$.ajax({method: "GET", url: urlBacon, dataType: "json"})

    .done(function (data) {console.log(data);})
    .fail(function () {alert(console.log("no good"));});
}
$.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    beforeSend: function (xhr) {
        xhr.overrideMimeType("text/plain; charset=x-user-defined");
    }
})
    .done(function (data) {
        if (console && console.log) {
            console.log("Sample of data:", data.slice(0, 100));
        }
    });
    var url = "http://localhost:8080/api/v1/users";
    //var url = 'https://jsonplaceholder.typicode.com/todos';
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhr.send(null);
    var url = "http://localhost:8080/api/v1/users";
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url + '/1', true)
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhr.send(null);
    var data = {};
    //data.firstname = "John";
    //data.lastname = "Snow";
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhr.send(json);
getData1();
getData();
