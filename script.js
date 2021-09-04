function compute() {

    var principal = document.getElementById("amountOne").value 
    var interestRate = document.getElementById("rate").value
    var years = document.getElementById("noYears").value
    var interestEarned = principal * interestRate * years *.01;
    var d = new Date();
    var n = d.getFullYear();
    var futureDate = Number(n) + Number(years); 

    document.getElementById("response1").innerHTML = "If you deposit $" + principal;
    document.getElementById("response2").innerHTML = "At a rate of " + interestRate + '%';
    document.getElementById("response3").innerHTML = "You'll recieve the amount of $" + interestEarned
    document.getElementById("response4").innerHTML = "In the year " + futureDate
}    
