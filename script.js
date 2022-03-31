const inputEmail = document.getElementById('form-login');
const inputPassword = document.getElementById('form-password');
const buttonSubmit = document.querySelector('#form-button');

function firstForm() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonSubmit.addEventListener('click', firstForm);
