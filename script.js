

    function snapCrackle (maxValue) { 
    let newString = ``
    for(let i = 1; i<=maxValue; i++) {
        if(i % 2 !== 0 && i % 5 === 0) {
            newString += `SnapCrackle, `
        } else if(i % 2 === 0 && i % 5 === 0){
            newString += `Crackle, `
        }
        else if (i % 2 !== 0 && i % 5 !== 0){
            newString += `Snap, `
        } else {
            newString += `${i}, `
        }
    }
        return newString
    }

    let checkString = snapCrackle(12)
    console.log(checkString)
    



// FUNCAO PARA VERIFICAR SE O NUMEOR É PRIMO 
//numero primo é todo numero que tem resto 0 ao dividir o numero por 1 e por ele mesmo, logo se outro divisar gerar resto 0 esse numero nao é primo
    function isPrime (num) {
        //TESTAR SE algum divisor ate o NUM tem o resto da divisão igual a 0, se tiver ele não é primo
        for (let divisor = 2; divisor < num; divisor++) 
        if (num % divisor == 0) {
            return false;}
            return true;
    }

    function snapCracklePrime (maxValue) { 
        let newString = ``
        for(let i = 1; i<=maxValue; i++) {
            //verifica se numero é impar, multiplo de cinco e primo 
            if(i % 2 !== 0 && i % 5 === 0 && isPrime(i) === true) {
                newString += `SnapCracklePrime, `
            //verifica se numero é divisivel por 5, par e primo  
            } else if(i % 2 === 0 && i % 5 === 0 && isPrime(i) === true){
                newString += `CracklePrime, `
            //verifica se numero é impar, NAO divisivel por 5 e primo 
            } else if (i % 2 !== 0 && i % 5 !== 0 && isPrime(i) === true && i > 1){
                newString += `SnapPrime, `
            //verifica se numero é somente primo 
            } else if (isPrime(i) === true && i > 1) {
              newString += `Prime, `
              //verifica se numero é impar, multiplo de cinco MAS NAO PRIMO 
            } else if (i % 2 !== 0 && i % 5 === 0){
                newString += `SnapCrackle, `
                //verifica se numero é divisivel por 5, par MAS NAO PRIMO 
            } else if (i % 2 === 0 && i % 5 === 0){
                newString += `Crackle, `
               //verifica se numero é impar, NAO divisivel por 5 par MAS NAO PRIMO 
            } else if (i % 2 !== 0 && i % 5 !== 0){
                newString += `Snap, `       
              //retorna apenas o numero caso nenhuma seja true
            } else {
                newString += `${i}, `
            }
        }
        //retorna a string 
            return newString
        }
    
        let checkStringWithPrime = snapCracklePrime(15)
        console.log(checkStringWithPrime)
    

       
        
    