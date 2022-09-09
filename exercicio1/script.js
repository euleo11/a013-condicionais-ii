const num = Number(prompt("Digite qualquer número"))

if (num % 2 === 0) {
    console.log("Seu número é divisível por 2")
    if (num % 3 === 0) {
        console.log("Seu número é divisível por 3")
    }
} else{
    if (num % 3 === 0) {
        console.log("Seu número é divisível por 3")
} else{
    console.log("O número não é divisível por 2 nem por 3")
}
}
 if (num % 2 === 0 || num % 3 === 0) {
     console.log("Seu número é divisível por 2 ou 3")
}