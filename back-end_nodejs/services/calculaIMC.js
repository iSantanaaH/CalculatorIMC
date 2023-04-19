const calculadoraIMC = (peso, altura) => {
  let imc = peso / (altura * altura);
  return imc.toFixed(2);
};

const retornaStatusIMC = (imc) => {
  let status;

  if (imc < 18.5) {
    status = "Abaixo do peso";
  } else if (imc >= 18.5 && imc <= 24.8) {
    status = "Peso normal";
  } else if (imc >= 24.9 && imc < 30) {
    status = "Acima do peso";
  } else {
    status = "Obeso";
  }
  return status;
};

const parameterValidation = (parameter) => {
  if (isNaN(parameter)) {
    return false;
  } else {
    return true;
  }
};

exports.parameterValidation = parameterValidation;
exports.retornaStatusIMC = retornaStatusIMC;
exports.calculadoraIMC = calculadoraIMC;
