function storeSchoolName() {
    var input = document.getElementById("userInput").value;
    document.querySelector('#school-name-disp').innerHTML = input;
}

function yearlyTuition() {
    var yearlyCost = document.getElementById("add-cost").value;
    var years = document.getElementById("years").value;
    var totalCost = yearlyCost * years;
    console.log(totalCost);
    document.querySelector('#total-tuition').innerHTML = totalCost;
}

