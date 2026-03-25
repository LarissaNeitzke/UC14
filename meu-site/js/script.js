function validarLogin() {
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;
  let erro = document.getElementById("erro");

  if (usuario === "" || senha === "") {
    erro.textContent = "Preencha todos os campos!";
  } else {
    window.location.href = "home.html";
  }
}