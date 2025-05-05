
function valida_formulario(){
	var nome = document.querySelector("#nome");
	var telefone = document.querySelector("#telefone");
	var email = document.querySelector("#email");

	//se nome estiver == vazio
	if(nome.value == ""){
		// exiba um balão: digite seu nome
		alert("Digite seu nome");
		return false;
	}
	//senão se telefone estiver == vazio
	else if(telefone.value == ""){
		// exiba um balão: digite seu telefone
		alert("Digite seu telefone");
		return false;
	}
	//se não se email estiver == vazio
	else if(email.value == ""){
		// exiba um balão: digite seu email	
		alert("Digite seu email")
		return false;
	}
	alert("Todos os dados foram preenchidos com sucesso")
	return true;
}