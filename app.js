var schoolName = document.getElementById("school-name").value;
    
if(schoolName == ""){
    schoolName = "school"
}

function yearlyTuition() {
    var yearlyTuition = parseFloat(document.getElementById("yearly-tuition-cost").value);
    var yearlyLivingExpenses = parseFloat(document.getElementById("yearly-living-expenses").value);
    var yearlyCost = yearlyTuition + yearlyLivingExpenses;
    var years = document.getElementById("years").value;
    var additional = parseFloat(document.getElementById("meal-plan-cost").value) + parseFloat(document.getElementById("materials-cost").value) + parseFloat(document.getElementById("additional-cost").value);
    var totalCost = parseFloat(yearlyCost * years) + additional;
    if (years <= 1){
        document.querySelector('#total-tuition').innerHTML = "The total cost of going to " + schoolName + " for " + years + " year is $" + totalCost;
    }else{
        document.querySelector('#total-tuition').innerHTML = "The total cost of going to " + schoolName + " for " + years + " years is $" + totalCost;
    }
}

function calculateInterest() {
    var principalValue = parseFloat(document.getElementById("money-owed").value);
    var interestRate = parseFloat(document.getElementById("interest-rate").value)/12;
    var months = parseFloat(document.getElementById("months").value);
    var totalInterestRate = Math.pow((1 + interestRate), months);
    var top = (principalValue * interestRate) * totalInterestRate

    var monthlyPayment = top/(totalInterestRate-1);

    let roundedTotal = monthlyPayment.toFixed(2);

    var totalPayment = (roundedTotal * months).toFixed(2);
    var totalInterest = (totalPayment - principalValue).toFixed(2);

    if(months == 1){
        document.querySelector('#monthly-payment').innerHTML = "You will have to make a  payment of $" + roundedTotal + " for " + months + " month";
    }else{
        document.querySelector('#monthly-payment').innerHTML = "You will have to make a monthly payment of $" + roundedTotal + " for " + months + " months";
    }
    
    document.querySelector('#total-interest').innerHTML = "The total amount you have to pay is $" + totalPayment + ", meaning you will have to pay $" + totalInterest + " in interest";


}

