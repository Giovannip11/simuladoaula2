
function numeroPrimo(number) {
    var numeroPrimo = parseFloat(prompt("Digite um número positivo que deseja consultar"))
    console.log(numeroPrimo)
    // 1 e números negativos não são primos
    if (number <= 1) {
      return false;
    }
  
    // Verifica se o número é divisível por qualquer número menor que ele
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }