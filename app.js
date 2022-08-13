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
    document.querySelector('#total-tuition').innerHTML = "The total cost of going to " + schoolName + " for " + years + " years is $" + totalCost;

}

function calculateInterest() {
    var principalValue = parseFloat(document.getElementById("money-owed").value);
    var interestRate = parseFloat(document.getElementById("interest-rate").value)/12;
    var months = parseFloat(document.getElementById("months").value);
    var totalInterestRate = Math.pow((1 + interestRate), months);
    var top = (principalValue * interestRate) * totalInterestRate

    var monthlyPayment = top/(totalInterestRate-1);

    document.querySelector('#monthly-payment').innerHTML = monthlyPayment;
    
    console.log(monthlyPayment);

}
