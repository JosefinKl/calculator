console.log('Hello world')

const buttonChoice = document.querySelectorAll('.calculator button')
const digits = document.querySelectorAll('.digit')
const operators = document.querySelectorAll('.op')
 

if( buttonChoice === null ) {
	console.log('Kontrollera stavningen, querySelector hittade inget element!')
}
let value = 0
let buttonValue = 0
const history = []

buttonChoice.forEach((button) => console.log(button.innerText))

buttonChoice.forEach((button) => button.addEventListener('click', function() { fun(button.innerText) }))

function fun (text){
    let res = 0
    buttonValue = text
    console.log(buttonValue)

    input.innerText = buttonValue

    if (buttonValue === 'Clear'){
        history.splice(0,history.length)
        result.innerText = res
        return
    }

    history.push(buttonValue)
    
    console.log(history)
    
  
    if (history.length !=0 && isNaN(history[0])){
        console.log('Start with a number')
        history.splice(0,1)
    }

    if (history.length === 2 && !isNaN(history[1])){
        console.log('Choose a operator')
        history.splice(1,1)
    }
    
    if (history.length === 3 && isNaN(history[2])){
        console.log('Choose a number')
        history.splice(2,1)
    }
    
    if (history[1] == '√x'){
        res = Math.sqrt(Number(history[0]))
        console.log(res)
      
        history.splice(0,2)
        history.push(res)
 
    }
    else if (history[1] == 'x^2'){
        res = Number(history[0]) * Number(history[0])
        console.log(res)
      
        history.splice(0,2)
        history.push(res)
   
    }
    else if (history.length === 3){
        let joinedHistory
            
        joinedHistory = history.join('')
        console.log (joinedHistory)
        res = eval(joinedHistory)  
        console.log('resultatet är ' + res)
  
        

        
        history.splice(0,3)
        history.push(res)
        console.log (history)
        
    }

    if (history.length == 1){
        digits.forEach(e => e.disabled = true)
        operators.forEach(e => e.disabled = false)
    }
    else {
        digits.forEach(e => e.disabled = false)
        operators.forEach(e => e.disabled = true)
    }

    console.log(res)
    result.innerText = res
    

}