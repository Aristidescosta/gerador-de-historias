const nomePersonalizado = document.getElementById('nomePersonalizado');
const botao_gerar_historia_aleatorio = document.querySelector('.botaoGerarHistoria');
const historia = document.querySelector('.historia');

//Função que escolhe um nome aleatorio de inserirNome
function gerar_valor_aleatorio(array){
  const aleatorio = Math.floor(Math.random()*array.length);
  return array[aleatorio];
}

var textoDaHistoria = 
  `Estava 94 fahrenheit lá fora, então inserirNome foi dar um passeio. 
  Quando eles chegaram a inserirLocal , eles olharam horrorizados por alguns momentos, depois inserirNome inserirEvento. 
  Alassana viu tudo, mas não se surpreendeu, pesa 300 libras e foi um dia quente.`;

var inserirNome = [
    "Aristides o Back-end",
    "Buda o Sábio",
    "Daniel o Optimus Prime"
]

var inserirLocal = [
    "Kyoto",
    "Disneyland",
    "Cidade de Iwami"
]

var inserirEvento = [
    "teve uma combustão espontânea",
    "abriu o seu grimório e partiu para a batalha",
    "se transformou em uma lesma e rastejou para longe"
]


botao_gerar_historia_aleatorio.addEventListener('click', resultado);

function resultado() {

  let novaHistoria = textoDaHistoria;  

  if(nomePersonalizado.value !== '') {
    let nome = nomePersonalizado.value;
    //alterar o valor da historia e substituir o nome origanl por um novo nome
    novaHistoria = novaHistoria.replace("Alassana", nome);
  }

  if(document.getElementById("uk").checked) {
    let peso = Math.round(300 * 0.071429) + " pedra";
    let temperatura =  Math.round((94 - 32) / 1.8) + " celcius";
    //alterar o valor da historia e substituir os pesos origanais por novos pesos
    novaHistoria = novaHistoria.replace("300 libras", peso);
    novaHistoria = novaHistoria.replace("94 fahrenheit", temperatura);

  }

  //guardando o item escolhido dos respectivos arrays
  let Item_y = gerar_valor_aleatorio(inserirLocal);
  let Item_z = gerar_valor_aleatorio(inserirEvento);

  for(var i = 0; i < 2; i++){
    let Item_x = gerar_valor_aleatorio(inserirNome); 
    //alterar o valor da historia e substituir as expressoes no texto por novas expressões
    novaHistoria = novaHistoria.replace("inserirLocal", Item_y)
    novaHistoria = novaHistoria.replace("inserirEvento", Item_z)
    novaHistoria = novaHistoria.replace("inserirNome", Item_x)
  }
  

  historia.textContent = novaHistoria;
  historia.style.visibility = 'visible';
}