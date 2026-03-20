alert ('Boas vindas ao jogo do número secreto');
let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); 
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número de 1 a ${numeroMaximo}`);
    // se chute for igual ou não ao número secreto
    if (chute == numeroSecreto) {
        break; 
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor`);
        } else {
            alert(`O número secreto é maior`);
        }
        //tentativas = tentativas +1; 
        tentativas ++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Vocês descobriu o número secreto ${numeroSecreto} com  ${tentativas} ${palavraTentativa}`);