function yearlyTuition() {
    var yearlyTuition = parseFloat(document.getElementById("yearly-tuition-cost").value);
    var yearlyLivingExpenses = parseFloat(document.getElementById("yearly-living-expenses").value);
    var yearlyCost = yearlyTuition + yearlyLivingExpenses;
    var years = document.getElementById("years").value;
    var additional = parseFloat(document.getElementById("meal-plan-cost").value) + parseFloat(document.getElementById("materials-cost").value) + parseFloat(document.getElementById("additional-cost").value);
    var totalCost = parseFloat(yearlyCost * years) + additional;
    var schoolName = document.getElementById("school-name").value;
    
    if(schoolName == ""){
        schoolName = "school"
    }

}
