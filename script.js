const inicio = new Date("2024-06-22T00:00:00");
const timer = document.getElementById("timer");

function atualizarTempo() {
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  timer.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(atualizarTempo, 1000);
atualizarTempo();

const fotos = {
  encontros: [
    {
      tipo: "imagem",
      src: "assets/img/encontro1.PNG",
      titulo: "",
      texto: "Nossa história começou de um jeito estranho e peculiar, eu diria. Mas foi ali na 'Casa Caldera' o nosso primeiro encontro forçado, kkk. No começo, eu estava extremamente desconfortável , mas mal sabia eu que, diante de mim, estaria a minha futura esposa! ❤️ Rolou de tudo naquela noite, até eu me engasgando no final 😅, mas, ouvindo um pouco do que você compartilhava na mesa, senti que naquela moça havia mais que apenas beleza: havia um coração doce e puro que amava a Jesus. 🙏 Nossa noite terminou, e cada um foi para um canto, mas isso não foi o fim. 😉",
    },
    {
      tipo: "imagem",
      src: "assets/img/encontro1.jpg",
      titulo: "",
      texto: "Infelizmente, não temos uma foto nossa desse momento. Mas foi neste café que a nossa história começou. Eu estava nervoso, com medo de gaguejar, e te perguntei: 'Você sabe por que te trouxe aqui, né?'. E quando vi seu sorriso... ali eu soube: queria te ver sorrindo para sempre."
    }
  ],
  viagens: [
    {
      tipo: "imagem",
      src: "assets/img/viagem1.jpg",
      titulo: "",
      texto: "Nossa primeira viagem juntos teve como destino Bragança Paulista. Foi ali que a minha ficha caiu: com você ao meu lado, tudo seria possível. Você me fez enxergar o mundo de uma forma diferente, transformou dias simples em inesquecíveis.",
    },
    {
      tipo: "imagem",
      src: "assets/img/Viagem 2.jpg",
      titulo: "",
      texto: "Seu sorriso logo cedo, ao amanhecer, me mostrou que o mais difícil eu já conquistei. Desde que te conheci, te fazer sorrir se tornou minha meta pessoal. Nesse dia, o nascer do sol era só um detalhe, pois você já havia iluminado o meu dia."
    },
    {
      tipo: "imagem",
      src: "assets/img/Viagem 3.jpg",
      titulo: "",
      texto: "Esses dias foram especiais pra mim, afinal, nas primeiras e ultimas horas do dia, havia você e seu lindo sorriso iluminando meus dias. "
    }
  ],
  momentos: [
    {
      tipo: "video",
      src: "assets/video/1.mp4",
      titulo: "O nosso proposito",
      texto: "Estávamos decididos a buscar a resposta do Senhor para entender se Ele aprovaria ou não o nosso relacionamento. A meta estava definida: se a resposta fosse não ou não houvesse resposta alguma, não iríamos nos relacionar. A única opção era o sim",
    },
    {
      tipo: "video",
      src: "assets/video/v2.mp4",
      titulo:"O dia da Resposta",
      texto: "Estávamos no último dia do propósito, 21/06/2024. Até aquele momento, apenas eu havia recebido as confirmações. Mas, em conjunto, entendíamos que a confirmação deveria vir de ambos. Com corações aflitos, chegamos à vigília, aguardando, então, algum sinal do céu. O pregador da noite iniciou a mensagem de um modo um tanto quanto diferente: caricato e divertido. O relógio bateu meia-noite, e agora? Foi aí que o de repente de Deus CHEGOU. Você presenciou tudo e recebeu a tão aguardada confirmação. Ali iniciava o começo da nossa história."
    },
    {
      tipo: "imagem",
      src: "",
      titulo:"O JARDIM",
      texto: "Não temos uma foto para representar o momento no Jardim, mas foi ali que tivemos nossa primeira conversa como um casal. Foi ali que você me confirmou que iríamos nos relacionar. Lembro que meu coração estava cheio de expectativa e medo, afinal, você não havia me contado nada no dia anterior. Combinamos de conversar no jardim do seu prédio. A conversa começou com o coração acelerado, aflito e apreensivo. Alguns minutos depois, veio a resposta do sim, e um alívio pairou sobre o meu coração. Deu certo! 😍"
    },
    {
      tipo: "imagem",
      src: "assets/img/casasogro.jpg",
      titulo:"A benção dos Pais",
      texto: "Havia mais uma coisa a ser feita: era hora de anunciar aos seus pais o nosso relacionamento. Era um domingo, dia 23/06/2024, por volta das 12h. Eu estava bem nervoso, afinal, você é filha de pastores, e novamente fui surpreendido positivamente. Não esperava uma recepção tão incrível. Fui abraçado, acolhido e cuidado pela sua família."
    },
    {
      tipo: "video",
      src: "assets/video/hoje.mp4",
      titulo:"Nós Hoje",
      texto: "Vivemos muitas coisas desde o dia 22/06/2024. Comecei a ver as coisas pela sua ótica, tive experiências que nunca imaginei viver, conheci novos lugares, provei comidas diferentes e conheci uma nova família que, desde o primeiro dia, tem torcido por nós. Choramos juntos, rimos, dançamos, fofocamos bastante (rsrsrs). Descobrimos os gostos um do outro. Creio que viveremos coisas ainda mais incríveis nos próximos anos, te tendo não apenas como minha namorada, mas como minha esposa. Te amo!"
    }
  ]
};

let indiceAtual = {
  encontros: 0,
  viagens: 0,
  momentos: 0
};

let categoriaAtiva = 'encontros'; // Estado da categoria ativa

function mostrarCategoria(id) {
  document.querySelectorAll(".conteudo-categoria").forEach(div => {
    div.style.display = "none";
  });
  document.getElementById(id).style.display = "flex";
  categoriaAtiva = id; // Atualiza a categoria ativa
  atualizarFoto(id); // Atualiza o conteúdo da categoria selecionada
}

function mudarFotoProxima() {
  mudarFoto(categoriaAtiva, 1);
}

function mudarFotoAnterior() {
  mudarFoto(categoriaAtiva, -1);
}

function mudarFoto(categoria, direcao) {
  const total = fotos[categoria].length;
  indiceAtual[categoria] = (indiceAtual[categoria] + direcao + total) % total;
  atualizarFoto(categoria);
}

function atualizarFoto(categoria) {
  const dados = fotos[categoria][indiceAtual[categoria]];
  const img = document.getElementById(`img-${categoria}`);
  const video = document.getElementById(`video-${categoria}`);
  const titulo = document.getElementById(`titulo-${categoria}`);
  const texto = document.getElementById(`descricao-${categoria}`);

  if (dados.tipo.toLowerCase() === "imagem") {
    if (dados.src) {
      img.src = dados.src;
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
    video.style.display = "none";
    video.pause();
    video.src = "";
  } else if (dados.tipo.toLowerCase() === "video") {
    video.src = dados.src || "";
    video.style.display = "block";
    video.load();
    img.style.display = "none";
    img.src = "";
  } else {
    img.style.display = "none";
    video.style.display = "none";
  }

  titulo.textContent = dados.titulo;
  texto.textContent = dados.texto;
}

// Inicializa com a categoria encontros
mostrarCategoria('encontros');

// === PLAYLIST ===
const faixas = [
  "assets/audio/Tantos Olhares.mp3",
  "assets/audio/Love never fails.mp3",
  "assets/audio/Dancing.mp3"
];

let indiceMusica = 0;
const player = document.getElementById("player");

function tocarProxima() {
  indiceMusica = (indiceMusica + 1) % faixas.length;
  player.src = faixas[indiceMusica];
  player.play().catch(() => {});
}

function proximaFaixa() {
  tocarProxima();
}

function faixaAnterior() {
  indiceMusica = (indiceMusica - 1 + faixas.length) % faixas.length;
  player.src = faixas[indiceMusica];
  player.play().catch(() => {});
}

// Inicializa primeira faixa
player.src = faixas[indiceMusica];
player.play().catch(() => {});

// Avança para próxima automaticamente
player.addEventListener("ended", tocarProxima);

// Tenta ativar som automaticamente
document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('player');
  if (audio) {
    audio.play().then(() => {
      audio.muted = false; // Remove muted após iniciar
    }).catch(error => {
      console.log('Autoplay bloqueado pelo navegador:', error);
    });
  }
});