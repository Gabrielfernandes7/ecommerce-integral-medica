let floatingInput = document.getElementById('floatingInput');
let floatingPassword = document.getElementById('floatingPassword');
let button = document.getElementById('button');

function validarDados(input, password) {
  if (typeof input === 'string' && typeof password === 'string') {
    console.log('Tudo correto');
  } else {
    console.log('A senha ou o usuário está incorreto');
  }
}

button.addEventListener('click', () => {
  validarDados(floatingInput, floatingPassword);
});