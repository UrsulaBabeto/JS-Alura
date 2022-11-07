let btn = document.querySelector('#b1');
let media = 0;
let numero = []

btn.addEventListener("click", function () {
    let num = document.querySelector('#nota')

    numero.push(Number(num.value));
    let soma = 0;
    let total = numero.length;
    for (let contador in numero) {
        soma += numero[contador];
    }
    media = soma/total; 
    num.value=""  
    num.focus()
})

function resultado() {
  let mediaFinal = media.toFixed(1);
    let res = document.querySelector('#res')
    let res1 = document.querySelector('#res1')
    
    res.innerHTML = `A media do aluno é: ${mediaFinal}`

    if (mediaFinal >= 7){
      
      res1.innerHTML = 'Você foi "APROVADO"'
    }else if (mediaFinal >= 5 && mediaFinal < 7 ){
      res1.innerHTML = 'Você esta de "RECUPERAÇÃO"'
} else {
  res1.innerHTML = 'Você foi "REPROVADO"'
}
}


