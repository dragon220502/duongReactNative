function calculateBMI() {
    var markMass = parseFloat(document.getElementById("mark-mass").value);
    var markHeight = parseFloat(document.getElementById("mark-height").value);
    var johnMass = parseFloat(document.getElementById("john-mass").value);
    var johnHeight = parseFloat(document.getElementById("john-height").value);
  
    var markBMI = markMass / (markHeight * markHeight);
    var johnBMI = johnMass / (johnHeight * johnHeight);
  
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "BMI của Mark: " + markBMI.toFixed(2) + "<br>BMI của John: " + johnBMI.toFixed(2);
  }
  

  function compareBMI() {
    var markMass = parseFloat(document.getElementById("mark-mass").value);
    var markHeight = parseFloat(document.getElementById("mark-height").value);
    var johnMass = parseFloat(document.getElementById("john-mass").value);
    var johnHeight = parseFloat(document.getElementById("john-height").value);
  
    var markBMI = markMass / (markHeight * markHeight);
    var johnBMI = johnMass / (johnHeight * johnHeight);
  
    var resultDiv = document.getElementById("result");
  
    if (markBMI > johnBMI) {
      resultDiv.innerHTML = "BMI của Mark (" + markBMI.toFixed(2) + ") lớn hơn BMI của John (" + johnBMI.toFixed(2) + ").";
    } else if (markBMI < johnBMI) {
      resultDiv.innerHTML = "BMI của Mark (" + markBMI.toFixed(2) + ") nhỏ hơn BMI của John (" + johnBMI.toFixed(2) + ").";
    } else {
      resultDiv.innerHTML = "BMI của Mark (" + markBMI.toFixed(2) + ") bằng BMI của John (" + johnBMI.toFixed(2) + ").";
    }
  }
  function calculateAverageScore(dolphinsScores, koalasScores)  {
  var dolphinsTotalScore = 0;
  var koalasTotalScore = 0;
  
  for (var i = 0; i < dolphinsScores.length; i++)  
    dolphinsTotalScore += dolphinsScores[i];
  
  for (var j = 0; j < koalasScores.length; j++)  
    koalasTotalScore += koalasScores[j];

  var dolphinsAverageScore = dolphinsTotalScore / dolphinsScores.length;
  var koalasAverageScore = koalasTotalScore / koalasScores.length;

  var resultDiv = document.getElementById("result2");

  if (dolphinsAverageScore >= 100 && koalasAverageScore >= 100)  
    if (dolphinsAverageScore > koalasAverageScore)  
      resultDiv.innerHTML = "Đội Dolphins đã chiến thắng với điểm trung bình là " + dolphinsAverageScore.toFixed(2) + ".";
    else if (dolphinsAverageScore < koalasAverageScore)  
      resultDiv.innerHTML = "Đội Koalas đã chiến thắng với điểm trung bình là " + koalasAverageScore.toFixed(2) + ".";
    else  
      resultDiv.innerHTML = "Hai đội đã hòa với cùng điểm trung bình là " + dolphinsAverageScore.toFixed(2) + ".";
  else  
    resultDiv.innerHTML = "Không có đội nào đạt được điểm trung bình tối thiểu 100.";

}