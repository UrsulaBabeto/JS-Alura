function resultado(){
    let res = document.getElementById('res')
    let real = document.getElementById('valor2');
    let dolar = document.getElementById('valor');
    
      let valorReal =real.value;
      let valorDolar = dolar.value;
      let conversor = valorReal/valorDolar;
      
        let realFinal = valorReal.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})
        let dolarFinal = conversor.toLocaleString('en-US',{style:'currency', currency: 'USD'})
        
      res.innerHTML = ` R$${realFinal} da um total de US${dolarFinal}`
    
    }