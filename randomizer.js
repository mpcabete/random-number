// const numbers = document.getElementById('numbers_element')
const digits = 9
const frequency = 3 //hz
const interval = 1000/frequency //milisseconds

const getNewDigits = ()=>{
    const numbers = [...new Array(digits)].map(()=>Math.floor(Math.random()*10)) //0 -> 9
    return numbers.join('')
}

const updateAllDigits = (element)=>{
    // console.log(element)
    // return
    // update and calls itself again after interval in ms
    setTimeout(()=>{
        element.innerText = getNewDigits()   
        updateAllDigits(element)
    },interval)
}
// first call
// updateAllDigits()


const updateSingleDigit=(i,element,randomness)=>{
    
    // adds randomness to each iteration interval
    const ranodmizedDelay = interval-randomness*interval/2+Math.floor(Math.random()*randomness*interval)*2 //intarval - randomness% -> interval + randomness%
    // split digits into an array
    const digits = element.innerText.split('')
    // randomize i'th digit
    digits[i]=Math.floor(Math.random()*10) //0 -> 9
    element.innerText = digits.join('')
    // calls itself again after ranodmized delay in ms
    setTimeout(()=>updateSingleDigit(i,element,randomness),ranodmizedDelay)
}

asyncRandomizer = (element,randomness)=>{
    

    // first call for each digit
    for(let i = 0;i<digits;i++){
        const offset = Math.floor(Math.random()*interval) //0->interval
        
        // first call with a random offset so they start at diferent times 
        setTimeout(()=>updateSingleDigit(i,element,randomness),offset)
        // updateSingleDigit(i,element)
    }
}

updateAllDigits(document.getElementById('sync_element'))
asyncRandomizer(document.getElementById('async_element'),0)
asyncRandomizer(document.getElementById('random_element'),0.3)