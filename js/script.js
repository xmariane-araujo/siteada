document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)
  
  var nomeusuaria = nome;
  var emailusuaria = email;
  var telefoneusuaria = telefone;

function validaFormulario(){
  if(nomeusuaria.value != "" && emailusuaria.value != "" && telefoneusuaria.value != ""){
    alert("Prontinho! você receberá as novidade por email.")
  }else{
    alert("Por favor, preencha os campos nome, email e telefone!")
  }
}






