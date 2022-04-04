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

// função que desabilita o botão inicialmente e habilita após o checkbox
const check = document.querySelector('#agreement');
const button = document.querySelector('#submit-btn');
button.disabled = true;

function stateHandle() {
  if (check.value === true) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}
check.addEventListener('change', stateHandle);

// contador com o ID counter contendo o número de caracteres disponíveis no textarea, variando de 500 até 0

const counterTextArea = document.getElementById('counter');
const typingTextArea = document.getElementById('textarea');
counterTextArea.innerText = 500;

function counterTyping() {
  const textField = typingTextArea.value.length;
  counterTextArea.innerText = 500 - textField;
}
typingTextArea.addEventListener('keyup', counterTyping);

// ao clicar no botao enviar, alterar o conteudo do form para os itens preenchidos

const tagForm = document.getElementsByTagName('form');
const btn = document.getElementById('submit-btn');

function changeText(event) {
  const altera = event.target;
  if (altera === true) {
    tagForm.innerText = '';
    console.log('testando');
  }
}
function enviar() {
  btn.addEventListener('click', changeText);
}
enviar();
