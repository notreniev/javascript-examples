/**
 * Classes no paradigma funcional
 * 
 * @param {*} num1 
 * @param {*} num2 
 */

const Calc = function(num1, num2){
    const soma = num1 + num2
    return {
        out: () => {
            console.log(num1, num2, soma)
        }
    }
}

const a = new Calc(1,2)
a.out()
a.out.bind({num1: 4, num3: 5})