

function getAnswer () {
    var paramOne = Number(document.getElementById('paramOne').value)
    var paramTwo = Number(document.getElementById('paramTwo').value)
    var operator = document.getElementById("operation").value

    if(operator === "+"){
        document.getElementById('finalAnswer').innerHTML = paramOne + paramTwo
    } else if(operator === "-"){
        document.getElementById('finalAnswer').innerHTML = paramOne - paramTwo
    } else if(operator === "/"){
        document.getElementById('finalAnswer').innerHTML = paramOne / paramTwo
    } else if(operator === "*"){
        document.getElementById('finalAnswer').innerHTML = paramOne * paramTwo
    }
} 