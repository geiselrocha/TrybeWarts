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

function changeValue() {
  const name = document.getElementById('input-name');
  const email = document.getElementById('input-email');
  const lastName = document.getElementById('input-lastname');
  const casa = document.getElementById('house');
  const observacoes = document.getElementById('textarea');

  const familia = document.getElementsByClassName('fam');
  let selecionado = 0;
  for (let index = 0; index < familia.length; index += 1) {
    if (familia[index].checked) {
      selecionado = familia[index];
    }
  }

  const materiais = document.getElementsByClassName('subject');
  const materials = [];
  for (let index = 0; index < materiais.length; index += 1) {
    if (materiais[index].checked) {
      materials.push(' ' + materiais[index].value);
    }
  }

  const avaliacao = document.getElementsByClassName('avaliacao');
  let checado = 0;
  for (let index = 0; index < avaliacao.length; index += 1) {
    if (avaliacao[index].checked) {
      checado = avaliacao[index];
    }
  }

  form.innerHTML = '';
  form.innerText =
    `Nome: ${name.value} ${lastName.value}
  Email: ${email.value}
  Casa: ${casa.value} Escolhida
  Família: ${selecionado.value} Escolhida
  Matérias: ${materials}
  Avaliação: ${checado.value}
    Observações: ${observacoes.value}`;
} 
