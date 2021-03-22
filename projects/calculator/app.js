const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previouseTypedButton = document.querySelectorAll('[data-previous-typed]')
const currentTypedButton = document.querySelectorAll('[data-current-typed]')
const previousTypedandTextElement = document.querySelector('[data-previous-typed]')
const currentTypedandTextElement = document.querySelector('[data-current-typed]')

class Calculator{
    constructor(previousTypedandTextElement,currentTypedandTextElement){
        this.previousTypedandTextElement = previousTypedandTextElement
        this.currentTypedandTextElement = currentTypedandTextElement
        this.clear()
    }

    clear(){
    this.currentTyped = ''
    this.previousTyped = ''
    this.operation = undefined
    }

    delete(){
        this.currentTyped = this.currentTyped.toString().slice(0,-1)
    }

    appendNum(number){
        if(number === "." && this.currentTyped.includes('.')) return
        if(this.currentTyped !== ''){
            this.compute()
        }
        this.currentTyped = this.currentTyped.toString() + number.toString()
    }
    
    chooseOperation(operation){
        if(this.currentTyped === '')return
        if(this.previousTyped !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousTyped = this.previousTyped.toString() + this.currentTyped.toString() + operation.toString()
        this.currentTyped = ''
    }
    
    compute(){
        let result 
        const pre = parseFloat(this.previousTyped)
        const cur = parseFloat(this.currentTyped)
        if(isNaN(pre)||isNaN(cur))return
        switch (this.operation){
            case "+":
                result = pre + cur
                break
            case "-":
                result = pre - cur
                break
            case "×":
                result = pre * cur
                break
            case "÷":
                result = pre / cur
                break
            default:
                return
        }
        this.currentTyped = result
        this.operation = undefined
        this.previousTyped = ''
    }

    updateDisplay(){
        this.previousTypedandTextElement.innerText = this.previousTyped;
        this.currentTypedandTextElement.innerText = this.currentTyped;
    }
}

const calculator = new Calculator(previousTypedandTextElement,currentTypedandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click',()=>{
        calculator.appendNum(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

allClearButtons.addEventListener('click',()=>{
    calculator.clear()
    calculator.updateDisplay()
})

equalsButtons.addEventListener('click',()=>{
    calculator.compute()
    calculator.updateDisplay()
})

deleteButtons.addEventListener('click',()=>{
    calculator.delete()
    calculator.updateDisplay()
})

