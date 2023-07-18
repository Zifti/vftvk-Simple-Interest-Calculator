function compute(){
    const principal = document.getElementById("principal").value;
    const amount = document.getElementById("principal")
    if (principal <= 0) {
        alert("Please enter a positive number")
        amount.focus()
        return false
    }
    const rate = document.getElementById("rate").value
    const years = document.getElementById("years").value
    const interest = principal * years * rate / 100
    // logic to convert No.years into the actual year in the future
    const year = new Date().getFullYear()+parseInt(years)
    const result = document.getElementById("result")

    result.innerHTML= `If you deposit <span class= highlight>${principal}</span> <br>
                        at an interest rate of <span class= highlight>${rate}%</span>.<br>
                        You will receive an amount of <span class= highlight>${interest}</span><br>
                        in the year <span class= highlight>${year}</span>`
}

function updateRate() {
    const rateval = document.getElementById("rate").value
    document.getElementById("rate_val").innerText = rateval +"%"
}
        