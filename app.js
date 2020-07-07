var input = document.getElementById('number')

input.addEventListener('input',displayValue)
let output = document.getElementById('output')

output.style.visibility = 'hidden'
function displayValue(){
    output.style.visibility = 'visible'
    let inputValue = input.value.trim()
    var gramOutput = document.querySelector('.gramOutput')
    var kgOutput = document.querySelector('.kgOutput')
    var ouncesOutput = document.querySelector('.ouncesOutput')
    gramOutput.innerHTML = inputValue/0.0022046
    kgOutput.innerHTML = inputValue/2.2046
    ouncesOutput.innerHTML = inputValue*16
}