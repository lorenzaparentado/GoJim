function getBMI(){
  var weight = document.getElementById("bmiWeight").value;
  var heightCM = document.getElementById("bmiHeight").value;
  var heightM = heightCM / 100;
  var bmi = weight / (heightM ** 2);
  document.getElementById("bmiValue").textContent = "Your BMI is: " + bmi.toFixed(2);
}

function get1RM(){
  var weight = document.getElementById("rmWeight").value;
  var reps = document.getElementById("rmReps").value;
  var x = reps * 2.5
  var percent = (100 - x) / 100;
  var max = weight / percent
  document.getElementById("OneRMValue").textContent = "Your One Rep Max is: " + max + "kg";
}

function getTDEE(){
  var gender = document.getElementById("tdeeSex").value;
  var weight = document.getElementById("tdeeWeight").value;
  var height = document.getElementById("tdeeHeight").value;
  var age = document.getElementById("tdeeAge").value;
  var activity = document.getElementById("tdeeActivity").value;
  var bmr = 0.00;
  var tdee = 0.00
  if (gender == "male"){
  bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  }
  else {
  bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }
  if (activity = "sed"){
    tdee = bmr * 1.2
  }
  else if (activity = "light"){
    tdee = bmr * 1.375
  }
  else if (activity = "mod"){
    tdee = bmr * 1.55
  }
  else if (activity = "very"){
    tdee = bmr * 1.725
  }
  else if (activity = "extra"){
    tdee = bmr * 1.9
  }
  document.getElementById("tdeeValue").textContent = "Your TDEE is: " + tdee + " calories per day";
}