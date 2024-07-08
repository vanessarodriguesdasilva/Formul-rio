function enviar(){
    let nome = document.getElementById('Nome').value
    let CPF = document.getElementById('CPF').value
    let Númerodecelular = document.getElementById('Número de celular').value
    let Estado = document.getElementById('Estado').value
    let Cidade = document.getElementById('Cidade').value
    let CEP = document.getElementById('CEP').value

    alert('Nome:'+nome+'\nCPF:'+CPF+'\nNúmero de celular:'+Númerodecelular+'\nEstado:'+Estado+'\nCidade:'+Cidade+'CEP:'+CEP)

    window.location.href = 'TELAINICIAL.HTML'
}

function voltar(){
    window.location.href = 'formulario.html'
    
}
