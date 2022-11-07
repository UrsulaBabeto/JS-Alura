

function btn() {
    let nome = document.querySelector('#nome').value;
    let idade = document.querySelector('#idade').value;
    let linguagem = document.querySelector('#lang').value;
    let res = document.querySelector('#res');    
    let yes = document.querySelector('#yes');
    let no = document.querySelector('#no');
  
    res.innerHTML = `Olá, ${nome}, você tem ${idade} anos e ja esta aprendendo ${linguagem}!`

    if(yes.checked){
        res.innerHTML += "<br>Fico feliz por você! avance com seus estudos e tenha muito sucesso"
    }else{  
        res.innerHTML +="<br>Poxa, que pena! Que tal tentar outra linguagem?"
    }
}
