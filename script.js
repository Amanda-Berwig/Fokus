const html = document.querySelector('html')
const startPauseBt = document.getElementById('start-pause');
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const titulo = document.querySelector('.app__title');
const timer = document.querySelector('.app__card-timer');
const imagemPrincipal = document.querySelector('.app__image');
const botoes = document.querySelectorAll(".app__card-button")
const iniciarOuPausarBt = document.querySelector('#start-pause span')
const iconeBt = document.querySelector(".app__card-primary-butto-icon")
const musicaFocoInput = document.getElementById("alternar-musica");
const musica = new Audio('./sons/luna-rise-part-one.mp3'); // Importando o arquivo de áudio como objeto
const musicaPause = new Audio('./sons/pause.mp3');
const musicaPlay = new Audio('./sons/play.wav');
const musicaTempoEsgotado = new Audio('./sons/beep.mp3')
musica.loop = true;

let tempoDecorridoEmSegundos = 5;
let intervaloId = null;

focoBt.addEventListener('click', () => {
    alterandoContexto('foco');
    focoBt.classList.add('active')
});


curtoBt.addEventListener('click', () => {
    alterandoContexto('descanso-curto');
    curtoBt.classList.add('active')
});

longoBt.addEventListener('click', () => {
    alterandoContexto('descanso-longo');
    longoBt.classList.add('active')
});
 function alterandoContexto(contexto) {
  botoes.forEach(botao => botao.classList.remove('active'));
    html.setAttribute('data-contexto', contexto);
    imagemPrincipal.src = `./imagens/${contexto}.png`;
   
    switch (contexto) {
        case 'foco':
          titulo.innerHTML = `Otimize sua produtividade,<br>
              <strong class="app__title-strong">mergulhe no que importa.</strong>`
          break;
        case 'descanso-curto':
          titulo.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong"> Faça uma pausa curta!</strong>`
          break;
        case 'descanso-longo':
          titulo.innerHTML = `Hora de voltar à superfície. <strong class="app__title-strong"> Faça uma pausa longa.</strong>`
          break;
        default:
          break;
    }
 }

 musicaFocoInput.addEventListener('change', () => {musicaFocoInput.checked ? musica.play(): musica.pause();});

const contagemRegressiva = () => {
  if (tempoDecorridoEmSegundos <= 0) {
      musicaTempoEsgotado.play();
      alert("Tempo finalizado")
      zerar();
      musicaTempoEsgotado.pause();
      return
  }
  tempoDecorridoEmSegundos -= 1;
  // console.log("temporizador: " + tempoDecorridoEmSegundos);
  mostrarTempoNaTela()
 }

 startPauseBt.addEventListener('click', iniciarOuPausar); 
  
 function iniciarOuPausar() {
  if (intervaloId) {
      musicaPause.play();
      zerar();
      return
  }
  musicaPlay.play();
  intervaloId = setInterval(contagemRegressiva,1000); //milissegundos
  iniciarOuPausarBt.innerHTML = 'Pausar';
  iconeBt.src = './imagens/pause.png';
  
  
 }

 function zerar() {
  
  clearInterval(intervaloId);
  iniciarOuPausarBt.innerHTML = 'Começar';
  iconeBt.src = './imagens/play_arrow.png';
  intervaloId = null;
 }

 function mostrarTempoNaTela() {
  const tempo = tempoDecorridoEmSegundos;
  timer.innerHTML = `${tempo}`

 }

 mostrarTempoNaTela();