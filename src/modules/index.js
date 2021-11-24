// 2   2  7   7   8   2   3   9   8
// 10  9  8   7   6   5   4   3   2
// 20 18  56  49  48  10  12  27  16  = 256

// const cpf = "227.782.398/80";
// const cpf = "195.922.558/81";
// const cpf = "195.923.558/81";
// const cpf = "876.969.820-10";
// const cpf = "855.529.040-60";
// const cpf = "381.126.070-79";
// const cpf = "948.796.900-40";
// const cpf = "111.111.111-11";

const cpfLimpo = cpf.replace(/\D+/g, "");

const cpfArray = Array.from(cpfLimpo);
const digitos = cpfArray.splice(-2);

let iPrimeiroDigito = 10;
let iSegundoDigito = 11;

let primeiroDigito = (
  11 -
  (cpfArray.reduce((ac, valor) => {
    ac += Number(valor) * iPrimeiroDigito;
    iPrimeiroDigito--;
    return ac;
  }, 0) %
    11)
).toString();

if (Number(primeiroDigito) >= 10) {
  primeiroDigito = 0;
}
if (primeiroDigito == digitos[0]) {
  cpfArray.push(primeiroDigito);
  console.log(`Primeiro digito ${primeiroDigito}, está ok`);
} else {
  console.log(`Primeiro digito ${primeiroDigito}, está invalido`);
}

let SegundoDigito = (
  11 -
  (cpfArray.reduce((ac, valor) => {
    ac += Number(valor) * iSegundoDigito;
    iSegundoDigito--;
    return ac;
  }, 0) %
    11)
).toString();

if (Number(SegundoDigito) >= 10) {
  SegundoDigito = 0;
}
if (SegundoDigito == digitos[1]) {
  cpfArray.push(SegundoDigito);
  console.log(`Segundo digito ${SegundoDigito}, está ok`);
} else {
  console.log(`Segundo digito ${SegundoDigito}, está invalido`);
}

if (cpfArray.toString().replace(/\D+/g, "") === cpfLimpo) {
  console.log(`O cpf ${cpf} é valido`);
} else {
  console.log(`O cpf ${cpf} é invalido`);
}
