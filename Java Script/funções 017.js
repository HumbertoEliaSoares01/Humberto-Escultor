
function mudaFoto (tipo) {
	if (tipo == 0) { arquivo = "imagens/Mostruário/Apresentação.jpg"; }
	if (tipo == 1) { arquivo = "imagens/Mostruário/Anjo.jpg"; }
	if (tipo == 2) { arquivo = "imagens/Mostruário/Bêbado.jpg"; }
	if (tipo == 3) { arquivo = "imagens/Mostruário/Canoeiro.jpg"; }
	if (tipo == 4) { arquivo = "imagens/Mostruário/Cavaleiro.jpg"; }
	if (tipo == 5) { arquivo = "imagens/Mostruário/Égua Deitada.jpg"; }
	if (tipo == 6) { arquivo = "imagens/Mostruário/Enxadristas.jpg"; }
	if (tipo == 7) { arquivo = "imagens/Mostruário/Gárgula.jpg"; }
	if (tipo == 8) { arquivo = "imagens/Mostruário/Maestro.jpg"; }
	if (tipo == 9) { arquivo = "imagens/Mostruário/Mulher Varrendo.jpg"; }
	if (tipo == 10) { arquivo = "imagens/Mostruário/Pandeirista.jpg"; }
	if (tipo == 11) { arquivo = "imagens/Mostruário/Pé.jpg"; }
	if (tipo == 12) { arquivo = "imagens/Mostruário/Violeiro.jpg"; }
	if (tipo == 13) { arquivo = "imagens/Mostruário/Potro.jpg"; }
	if (tipo == 14) { arquivo = "imagens/Mostruário/São Francisco.jpg"; }
	if (tipo == 15) { arquivo = "imagens/Mostruário/Servente.jpg"; }
	if (tipo == 16) { arquivo = "imagens/Mostruário/Peladeiro.jpg"; }
	if (tipo == 17) { arquivo = "imagens/Mostruário/Mulher Deitada.jpg"; }
	if (tipo == 42) { arquivo = "imagens/foto perfil 02.jpg"; }
	if (tipo == 50) { arquivo = "imagens/AgroSerra.jpg"; }
	if (tipo == 51) { arquivo = "imagens/Tijolinho.jpg"; }
	if (tipo == 52) { arquivo = "imagens/Bebedouro de Passarinho.jpg"; }
	if (tipo == 53) { arquivo = "imagens/Cavalo de Barro.jpg"; }
	if (tipo == 54) { arquivo = "imagens/De Margem à Margem 02.jpg"; }
	if (tipo == 55) { arquivo = "imagens/Um Cubo de Todo o Ar.jpg"; }
	if (tipo == 56) { arquivo = "imagens/Artesanato.jpg"; }
	
	document.getElementById ("foto").src = arquivo;
} 
