const contadorProdutos = document.querySelectorAll('.link-card')
var qtd_produtos = document.querySelector('.qtd-produtos')
var contadorP = 0

contadorProdutos.forEach((contador_single)=> {

    contadorP++;

}) 

//console.log(contadorP);
qtd_produtos.textContent = `${contadorP}`

