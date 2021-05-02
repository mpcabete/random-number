// const numbers = document.getElementById('numbers_element')
// let frequency = 3 //hz
let interval = 1000/document.getElementById("speed").value
// console.log('value: ',document.getElementById("randomness").value)

const getNewDigits = ()=>{
    const numbers = [...new Array(digits)].map(()=>Math.floor(Math.random()*10)) //0 -> 9
    return numbers.join('')
}



const updateSingleDigit=(i,element)=>{
    const randomness = document.getElementById("randomness").value/100
    // adds randomness to each iteration interval
    const ranodmizedDelay = interval+(interval*Math.random()*randomness) //intarval - randomness% -> interval + randomness%

    // split digits, into an array
    const digits = element.innerText.split('')
    // randomize i'th digit
    digits[i]=Math.floor(Math.random()*10) //0 -> 9
    element.innerText = digits.join('')
    // calls itself again after ranodmized delay in ms
    setTimeout(()=>updateSingleDigit(i,element),ranodmizedDelay)
}

asyncRandomizer = (element,randomness)=>{
    const digits = element.innerText.length
    // first call for each digit
    for(let i = 0;i<digits;i++){
        const offset = Math.floor(Math.random()*interval) //0->interval
        
        // first call with a random offset so they start at diferent times 
        setTimeout(()=>updateSingleDigit(i,element,randomness),offset)
        // updateSingleDigit(i,element)
    }
}

const numbers = [...document.getElementById('numbers').children]
// console.log(numbers)
numbers.forEach(e=>asyncRandomizer(e,0.3))
// asyncRandomizer(,0.3)


// ========================== controls
var speedSlider = document.getElementById("speed");
var speedOutput = document.getElementById("speedValue");
speedOutput.innerHTML = speedSlider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
// console.log(speedSlider)
speedSlider.oninput = function() {
    interval = 1000/this.value
    speedOutput.innerHTML = parseFloat(this.value).toFixed(1);
} 
var randomnessSlider = document.getElementById("randomness");
var randomnessOutput = document.getElementById("randomnessValue");
randomnessOutput.innerHTML = randomnessSlider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
randomnessSlider.oninput = function() {
    randomnessOutput.innerHTML = this.value;
} 