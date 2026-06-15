const questions = [
  {
    question: "Qual foi a primeira linha do Windows criada como sistema 32 bits de verdade pela Microsoft?",
    answers: ["Windows 3.11", "Windows NT 3.1", "Windows 95", "Windows 98"],
    correct: 1,
    explanation: "O Windows NT 3.1, lançado em 1993, foi criado como uma linha profissional 32 bits. O Windows 95 popularizou o uso doméstico dos 32 bits."
  },
  {
    question: "Qual é a principal diferença entre memória RAM e memória ROM?",
    answers: ["RAM é volátil; ROM mantém dados gravados mesmo sem energia", "RAM só funciona em notebooks; ROM só em desktops", "RAM armazena arquivos do usuário; ROM armazena vídeos", "Não existe diferença técnica entre elas"],
    correct: 0,
    explanation: "A RAM é memória temporária e volátil. A ROM guarda instruções ou dados permanentes, mesmo sem energia."
  },
  {
    question: "Por que um arquivo de 6 GB não copia para um pendrive formatado em FAT32?",
    answers: ["Porque o USB 2.0 não aceita arquivos grandes", "Porque o Windows bloqueia arquivos acima de 5 GB", "Porque o FAT32 limita arquivos individuais a cerca de 4 GB", "Porque FAT32 só funciona em Linux"],
    correct: 2,
    explanation: "O FAT32 aceita partições grandes, mas cada arquivo individual fica limitado a cerca de 4 GB."
  },
  {
    question: "Qual é uma diferença importante entre MBR e GPT?",
    answers: ["GPT é mais antigo que MBR", "MBR permite mais partições primárias que GPT", "GPT é mais moderno e suporta discos maiores", "MBR só funciona com SSD"],
    correct: 2,
    explanation: "GPT é o padrão mais moderno, usado com UEFI, e suporta discos maiores e mais partições que o MBR tradicional."
  },
  {
    question: "O que significa SSD em informática?",
    answers: ["System Security Driver", "Solid State Drive", "Super Speed Disk", "Serial Storage Device"],
    correct: 1,
    explanation: "SSD significa Solid State Drive, uma unidade de armazenamento sem partes mecânicas móveis."
  },
  {
    question: "Qual é a principal vantagem de um SSD sobre um HDD comum?",
    answers: ["Ter mais barulho", "Usar discos magnéticos maiores", "Ser mais rápido no acesso aos dados", "Funcionar apenas em computadores novos"],
    correct: 2,
    explanation: "O SSD costuma ser muito mais rápido no acesso e leitura dos dados, melhorando inicialização e abertura de programas."
  },
  {
    question: "Qual é a função do DNS na internet?",
    answers: ["Transformar nomes de sites em endereços IP", "Aumentar a memória RAM do navegador", "Formatar discos de rede", "Substituir o antivírus"],
    correct: 0,
    explanation: "O DNS traduz nomes como exemplo.com para endereços IP que os computadores conseguem localizar na rede."
  },
  {
    question: "Na prática, qual é a diferença básica entre TCP e UDP?",
    answers: ["TCP confirma a entrega; UDP prioriza velocidade e simplicidade", "UDP é sempre criptografado; TCP nunca é", "TCP só funciona em Wi-Fi; UDP só em cabo", "Não há diferença entre eles"],
    correct: 0,
    explanation: "O TCP trabalha com conexão e confirmação de entrega. O UDP é mais simples e rápido, mas não garante entrega da mesma forma."
  },
  {
    question: "Para que serve o DHCP em uma rede?",
    answers: ["Distribuir endereços IP automaticamente", "Apagar vírus do roteador", "Aumentar a velocidade do processador", "Converter FAT32 para NTFS"],
    correct: 0,
    explanation: "O DHCP permite que dispositivos recebam automaticamente IP, gateway e DNS ao entrar na rede."
  },
  {
    question: "Comparando BIOS e UEFI, qual afirmação é mais correta?",
    answers: ["UEFI é mais moderno e substitui a BIOS tradicional", "BIOS é usada apenas em celulares", "UEFI só funciona em disquetes", "BIOS é sempre mais rápida que UEFI"],
    correct: 0,
    explanation: "UEFI é uma interface de firmware mais moderna, com recursos superiores ao BIOS tradicional."
  },
  {
    question: "Qual protocolo é muito usado para transferir arquivos entre computadores ou dispositivos na rede?",
    answers: ["FTP", "VGA", "RAM", "BIOS"],
    correct: 0,
    explanation: "FTP significa File Transfer Protocol e é usado para transferência de arquivos em rede."
  },
  {
    question: "O que o cadeado do HTTPS costuma indicar no navegador?",
    answers: ["Que a conexão usa criptografia", "Que o site está sempre livre de golpes", "Que o computador não precisa de antivírus", "Que a internet está mais rápida"],
    correct: 0,
    explanation: "HTTPS indica conexão criptografada, mas não garante sozinho que o site seja honesto ou seguro contra golpes."
  },
  {
    question: "Qual é a função da memória cache em um computador?",
    answers: ["Guardar dados acessados com frequência para acelerar o processamento", "Substituir o HD permanentemente", "Apagar arquivos temporários do Windows", "Trocar a resolução do monitor"],
    correct: 0,
    explanation: "Cache é uma memória rápida usada para guardar dados frequentes e reduzir o tempo de acesso."
  },
  {
    question: "Qual sistema de arquivos é muito comum em instalações modernas do Windows?",
    answers: ["EXT4", "NTFS", "HFS+", "AmigaFS"],
    correct: 1,
    explanation: "NTFS é o sistema de arquivos mais comum nas instalações modernas do Windows."
  },
  {
    question: "O que pode acontecer quando a RAM está muito cheia e o sistema usa paginação no disco?",
    answers: ["O computador pode ficar bem mais lento", "O monitor troca automaticamente de cor", "A placa-mãe desliga a internet", "O teclado passa a funcionar como mouse"],
    correct: 0,
    explanation: "Quando falta RAM, o sistema pode usar o disco como memória virtual. Isso costuma deixar tudo mais lento, especialmente em HDDs."
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const creditsScreen = document.getElementById("credits-screen");
const questionCounter = document.getElementById("question-counter");
const scoreCounter = document.getElementById("score-counter");
const progressBar = document.getElementById("progress-bar");
const questionText = document.getElementById("question-text");
const answersBox = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const finalScore = document.getElementById("final-score");
const rankTitle = document.getElementById("rank-title");
const rankMessage = document.getElementById("rank-message");

function showScreen(screen) {
  [startScreen, quizScreen, resultScreen, creditsScreen].forEach(item => item.classList.remove("active"));
  screen.classList.add("active");
}

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  answered = false;
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const item = questions[currentQuestion];
  answered = false;
  questionCounter.textContent = `Pergunta ${currentQuestion + 1}/${questions.length}`;
  scoreCounter.textContent = `Pontuação: ${score}`;
  progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;
  questionText.textContent = item.question;
  feedback.classList.add("hidden");
  nextBtn.classList.add("hidden");
  answersBox.innerHTML = "";

  item.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = `${String.fromCharCode(65 + index)}) ${answer}`;
    button.addEventListener("click", () => selectAnswer(index));
    answersBox.appendChild(button);
  });
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;

  const item = questions[currentQuestion];
  const buttons = document.querySelectorAll(".answer-btn");
  const isCorrect = index === item.correct;

  if (isCorrect) score += 10;

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === item.correct) button.classList.add("correct");
    if (buttonIndex === index && !isCorrect) button.classList.add("wrong");
  });

  feedback.innerHTML = `<strong>${isCorrect ? "Correto!" : "Incorreto."}</strong><br>${item.explanation}`;
  feedback.classList.remove("hidden");
  scoreCounter.textContent = `Pontuação: ${score}`;
  nextBtn.textContent = currentQuestion === questions.length - 1 ? "Ver Resultado" : "Próxima";
  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    showResult();
  } else {
    renderQuestion();
  }
}

function showResult() {
  progressBar.style.width = "100%";
  showScreen(resultScreen);
  finalScore.textContent = `${score}/150 pontos`;

  if (score <= 40) {
    rankTitle.textContent = "Usuário Curioso";
    rankMessage.textContent = "Você está começando sua jornada. Continue explorando o mundo da informática!";
  } else if (score <= 80) {
    rankTitle.textContent = "Entusiasta de Tecnologia";
    rankMessage.textContent = "Você já entende bastante coisa e tem uma boa base para evoluir.";
  } else if (score <= 120) {
    rankTitle.textContent = "Técnico de Informática";
    rankMessage.textContent = "Muito bom! Seu conhecimento já tem cara de bancada, manutenção e prática real.";
  } else if (score < 150) {
    rankTitle.textContent = "Técnico Raiz";
    rankMessage.textContent = "Excelente! Você sabe bem mais que o básico e passou com moral.";
  } else {
    rankTitle.textContent = "Lenda da Informática";
    rankMessage.textContent = "Perfeito! Certificado simbólico de Técnico Raiz Supremo da Klein Dream.";
  }
}

document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("credits-btn").addEventListener("click", () => showScreen(creditsScreen));
document.getElementById("credits-back-btn").addEventListener("click", () => showScreen(startScreen));
document.getElementById("restart-btn").addEventListener("click", startQuiz);
document.getElementById("back-home-btn").addEventListener("click", () => showScreen(startScreen));
nextBtn.addEventListener("click", nextQuestion);
