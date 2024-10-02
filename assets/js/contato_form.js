alert("Entro JS")
function valida_formulario(){
	//pegaremos os dados de nome, telefone e recado
	var input_nome = document.querySelector("#nome").value; //nome
	var input_telefone = document.querySelector("#telefone").value;//telefone;
	var txt_recado = document.querySelector("#recado").value;//recado


	//verificação se o 3 campos estão vazio
	//  se sim, retornar falso e enviar mensagem para que o mesmo preencha a informaçao 
	// se não, indica que os dados foram preechidos. enviar verdadeiro e mensagem: Todos os dados foram preenchidos com sucesso
	if(input_nome == ""){
		alert("Digite seu nome")
		input_nome.focus();
		return false;
	}
	if (input_telefone == "") {
		alert("Digite seu telefone")
		input_telefone.focus();
		return false;
	}
	if (txt_recado == "") {
		alert("Digite seu recado")
		txt_recado.focus();
		return false;
	}
	alert("Todos os dados foram preenchido com sucesso")
}