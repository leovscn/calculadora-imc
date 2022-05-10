function calculate() {
  var height = document.getElementById('altura').value / 100
  var weight = document.getElementById('quilos').value
  var result = document.getElementById('result')
  var imc = weight / height ** 2

  if (imc < 18.5) {
    result.textContent = imc.toFixed(2) + ', Você está magro'
  } else if (imc < 24.9) {
    result.textContent = imc.toFixed(2) + ', Você está normal'
  } else if (imc < 29.9) {
    result.textContent = imc.toFixed(2) + ', Você está com sobrepeso'
  } else if (imc < 39.9) {
    result.textContent = imc.toFixed(2) + ', Você está com obesidade'
  } else if (imc > 39.9) {
    result.textContent = imc.toFixed(2) + ', Você está com obesidade mórbida'
  }
}
