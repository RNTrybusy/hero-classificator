// Função verifica a categoria correspondente
function levelCalculate() {
    let nomeHeroi = document.getElementById("name").value;
    let experiencia = document.getElementById("experience").value;
    let resultadoNivel = document.getElementById("level-result");
  
    if ( experiencia >= 0 ) {
        if ( experiencia <= 1000) {
            nivel = "Ferro";
        } else if ( experiencia <= 2000 ) {
            nivel = "Bronze";
        } else if ( experiencia <= 5000) {
            nivel = "Prata";
        } else if ( experiencia <= 7000) {
            nivel = "Ouro";
        } else if ( experiencia <= 8000) {
            nivel = "Platina";
        } else if ( experiencia <= 9000) {
            nivel = "Ascendente";
        } else if ( experiencia <= 10000) {
            nivel = "Imortal";
        } else {
            nivel = "Radiante";}
    // Exibe o resultado no console
    classification = "O Herói de nome " + nomeHeroi + " está no nível de " + nivel;
    resultadoNivel.innerText = classification; 
    }
    else if ( experiencia < 0 ) {
    // Exibe o resultado no console
    classification = "Informação de Nível Inválida";
    resultadoNivel.innerText = classification; 
    }
}