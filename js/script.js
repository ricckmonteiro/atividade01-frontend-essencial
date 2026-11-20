// ==========================================================
// VALIDAÇÃO DO FORMULÁRIO DE CONTATO (simulação de envio)
// ==========================================================

// Pega o formulário e os campos pelo id
const formulario = document.getElementById('form-contato');
const campoNome = document.getElementById('nome');
const campoEmail = document.getElementById('email');
const campoMensagem = document.getElementById('mensagem');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

// Mostra uma mensagem de erro embaixo do campo
function mostrarErro(campo, texto) {
  campo.parentElement.classList.add('invalido');
  document.getElementById('erro-' + campo.id).textContent = texto;
}

// Remove a mensagem de erro do campo
function limparErro(campo) {
  campo.parentElement.classList.remove('invalido');
  document.getElementById('erro-' + campo.id).textContent = '';
}

// Valida o nome: obrigatório e com pelo menos 3 letras
function validarNome() {
  const valor = campoNome.value.trim();

  if (valor === '') {
    mostrarErro(campoNome, 'Digite seu nome.');
    return false;
  }
  if (valor.length < 3) {
    mostrarErro(campoNome, 'O nome deve ter pelo menos 3 caracteres.');
    return false;
  }

  limparErro(campoNome);
  return true;
}

// Valida o e-mail: obrigatório e em formato válido (texto@dominio.com)
function validarEmail() {
  const valor = campoEmail.value.trim();
  const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (valor === '') {
    mostrarErro(campoEmail, 'Digite seu e-mail.');
    return false;
  }
  if (!formatoEmail.test(valor)) {
    mostrarErro(campoEmail, 'Digite um e-mail válido, como nome@exemplo.com.');
    return false;
  }

  limparErro(campoEmail);
  return true;
}

// Valida a mensagem: obrigatória e com pelo menos 10 caracteres
function validarMensagem() {
  const valor = campoMensagem.value.trim();

  if (valor === '') {
    mostrarErro(campoMensagem, 'Escreva sua mensagem.');
    return false;
  }
  if (valor.length < 10) {
    mostrarErro(campoMensagem, 'A mensagem deve ter pelo menos 10 caracteres.');
    return false;
  }

  limparErro(campoMensagem);
  return true;
}

// Evento de envio do formulário
formulario.addEventListener('submit', function (evento) {
  // Impede o envio real da página
  evento.preventDefault();
  mensagemSucesso.textContent = '';

  // Roda as três validações (todas, para mostrar todos os erros de uma vez)
  const nomeOk = validarNome();
  const emailOk = validarEmail();
  const mensagemOk = validarMensagem();

  // Se tudo estiver certo, simula o envio
  if (nomeOk && emailOk && mensagemOk) {
    mensagemSucesso.textContent = 'Mensagem enviada com sucesso! (simulação)';
    formulario.reset();
  }
});

// Remove o erro assim que a pessoa volta a digitar no campo
campoNome.addEventListener('input', function () { limparErro(campoNome); });
campoEmail.addEventListener('input', function () { limparErro(campoEmail); });
campoMensagem.addEventListener('input', function () { limparErro(campoMensagem); });
