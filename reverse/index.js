let phrase = "The universe, has $ a way % of working # itself out."
const result = []

function reverse(phrase){
    const palavras = phrase.split("")
    
    const parte1 = palavras.slice(0, palavras.indexOf(","))
    const parte2 = palavras.slice(palavras.indexOf(",")+1, palavras.indexOf("$"))
    const parte3 = palavras.slice(palavras.indexOf("$")+1, palavras.indexOf("%"))
    const parte4 = palavras.slice(palavras.indexOf("%")+1, palavras.indexOf("#"))
    const parte5 = palavras.slice(palavras.indexOf("#")+1, palavras.indexOf("."))

    //console.log(parte1.reverse().join(""))
    result[0] = parte1.join("")
    result[1] = parte2.join("")
    result[2] = parte3.join("")
    result[3] = parte4.join("")
    result[4] = parte5.join("")
    console.log(result[4] + ' ' + result[3] + ', ' + result[2] + ' $ ' + result[1] + ' # ' + result[0]) + '.'
}

reverse(phrase)