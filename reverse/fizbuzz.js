function FizzBuzz (){
    for (let num = 1; num <= 100; num++ ){

        if (num % 3 == 0){
            console.log('FIZZ')
        }
    
        if (num % 5 == 0){
            console.log('BUZZ')
        }
    
        if (num % 3 == 0 && num % 5 === 0){
            console.log('FIZZBUZZ')
        }        
    }

}

FizzBuzz()