var valida_formulario = () => {
	var input_nome = document.querySelector("#nome");
	var input_telefone = document.querySelector("#telefone");
	var input_email = document.querySelector("#email");

	if (input_nome.value == "") {
		alert("Digite seu nome");
		input_nome.focus();
		return false;
	}

	if (input_telefone.value == "") {
		alert("Digite seu telefone");
		input_telefone.focus();
		return false;
	}

	if (input_email.value == "") {
		alert("Digite seu email");
		input_email.focus();
		return false;
	}
	
	alert("Todos os dados foram enviados com sucesso!")
}
