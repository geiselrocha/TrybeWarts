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


//*função que desabilita o botão inicialmente e habilita após o checkbox
let check = document.querySelector('#agreement');
let button = document.querySelector('#submit-btn');
button.disabled = true;

check.addEventListener('change', stateHandle);
function stateHandle() {

  if (check.value === true) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}