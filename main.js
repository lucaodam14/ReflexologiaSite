function validar(){
 
 var nome = form1.nome.value;
 var email = form1.email.value;
 var categoria = form1.categoria.value;
 
 if(nome==""){
  alert("Preencha o campo 'Nome'");
  form1.nome.focus();
  return false;
 }
 
 if(email==""){
  alert("Preencha o campo 'E-Mail'");
  form1.email.focus();
  return false;
 }
 
 if (categoria==""){
  alert("Escolha a categoria");
  form1.categoria.focus();
  return false;
 }
}
