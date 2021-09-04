function compute() {

    var principal = document.getElementById("amountOne").value 
    var interestRate = document.getElementById("rate").value
    var years = document.getElementById("noYears").value
    var interestEarned = principal * interestRate * years *.01 + principal;
    var d = new Date();
    var n = d.getFullYear();
    var futureDate = Number(n) + Number(years); 



    document.getElementById("response1").innerHTML = "Please enter a positive number.";
    document.getElementById("response2").innerHTML = "If you deposit $" + principal;
    document.getElementById("response3").innerHTML = "At a rate of " + interestRate + '%';
    document.getElementById("response4").innerHTML = "You'll receive the amount of $" + interestEarned
    document.getElementById("response5").innerHTML = "In the year " + futureDate
}    
