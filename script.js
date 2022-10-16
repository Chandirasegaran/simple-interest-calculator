function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
console.log(rate);
    if (principal == "") 
    { 
        alert("Amount can't by empty!");
        document.getElementById("principal").focus();
        return false;
    }else{
        if (principal <= 0)
         { 
            alert("Enter a positive number");
            document.getElementById("principal").focus();
            return false;
        }
    }

    var year = new Date().getFullYear()+parseInt(years);
    var interest= principal * years * rate / 100;
    // var amount = interest + Number(principal);
    var result= "If you deposit <mark>₹" + principal + ",</mark><br> at an interest rate of <mark>" + rate + " %,</mark> <br> You will receive an amount of <mark>₹" + interest + ",</mark><br> in the year <mark>" + year +"</mark>";
    document.getElementById("result").innerHTML=result;
    
}   


function showVal(newVal)
{ 
    document.getElementById("showRate").innerHTML=newVal + '%';
}
