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

// exercicio 21 -  ao clicar no botao enviar, alterar o conteudo do form para os itens preenchidos

const delCont = document.getElementById('submit-btn');
delCont.addEventListener('click', changeValue);
const form = document.getElementById('evaluation-form');

function changeValue () {
  const name = document.getElementById('input-name');//ok
  const email = document.getElementById('input-email');//ok
  const lastName = document.getElementById('input-lastname');//ok
  const casa = document.getElementById('house');//ok
  const familia = document.getElementById('label-family'); //! nào recebe
  // const materias = document.getElementById('label-content') //! nào recebe
  const avaliacao = document.getElementById('label-rate'); //! nào recebe
  const observacoes = document.getElementById('textarea'); //ok 

  form.innerHTML = '';
  form.innerText = 
  `Nome: ${name.value} ${lastName.value}
  Email: ${email.value}
  Casa: ${casa.value} Escolhida
  Família: ${familia.value} Escolhida
  Matérias: ${materials}
  Avaliação: ${avaliacao.value}
  Observações: ${observacoes.value}`;  
}

const materiais = document.getElementsByClassName('subject');
let materials = 0;
  
  for (let index = 0; index < materiais.length; index += 1) {
    if (materials[index].checked) {
      materials = materiais[index];
    }
  } 
 
