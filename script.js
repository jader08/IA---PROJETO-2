const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em um futuro onde a inteligência artificial está em todo lugar, você se depara com um assistente virtual tão realista que é difícil distingui-lo de uma pessoa. Qual sua primeira reação?",
        alternativas: [
            {
                texto: "Fico maravilhado(a) e quero explorar todas as suas funcionalidades.",
                afirmacao: "Sua curiosidade o(a) impulsionou a mergulhar nas novas interações com a IA."
            },
            {
                texto: "Sinto um certo desconforto com a semelhança e a ideia de uma IA tão avançada.",
                afirmacao: "Uma ponta de apreensão o(a) acompanhou na adaptação a essa nova realidade tecnológica."
            }
        ]
    },
    {
        enunciado: "Sua escola agora utiliza IAs para personalizar o ensino, adaptando o conteúdo para cada aluno. Ao receber um projeto de pesquisa sobre o impacto da IA na sociedade, como você o aborda?",
        alternativas: [
            {
                texto: "Utilizo ferramentas de IA para otimizar minha pesquisa e organizar as informações complexas.",
                afirmacao: "Você demonstrou a capacidade de usar a IA como uma poderosa aliada no aprendizado e na organização de dados."
            },
            {
                texto: "Prefiro a pesquisa tradicional, buscando informações em diversas fontes e formulando minhas próprias análises.",
                afirmacao: "Sua abordagem valorizou a autonomia da pesquisa, preferindo o caminho mais independente de coleta e análise de informações."
            }
        ]
    },
    {
        enunciado: "No debate escolar sobre 'IA e o futuro do trabalho', a discussão gira em torno da automação. Qual sua principal preocupação ou otimismo em relação a esse cenário?",
        alternativas: [
            {
                texto: "Vejo a IA criando muitas novas profissões e melhorando a qualidade de vida ao automatizar tarefas repetitivas.",
                afirmacao: "Você se mostrou otimista, vendo a IA como uma força propulsora para a criação de um mercado de trabalho mais dinâmico e inovador."
            },
            {
                texto: "Preocupo-me com a perda de empregos em larga escala e a necessidade de requalificação profissional para muitos.",
                afirmacao: "Sua preocupação com o impacto social da IA o(a) levou a defender a importância da adaptação e do suporte aos trabalhadores."
            }
        ]
    },
    {
        enunciado: "Para um trabalho de arte digital, você precisa criar uma representação visual do futuro com IA. Qual sua escolha de ferramenta para expressar essa visão?",
        alternativas: [
            {
                texto: "Um gerador de imagens por IA, descrevendo minha visão em texto para a máquina criar.",
                afirmacao: "Você abraçou a criatividade assistida por IA, explorando as novas fronteiras da arte digital com comandos de texto."
            },
            {
                texto: "Um software de design gráfico tradicional, usando minhas próprias habilidades para cada detalhe.",
                afirmacao: "Sua paixão pela expressão manual e controle artístico o(a) impulsionou a criar a imagem com suas próprias habilidades em softwares convencionais."
            }
        ]
    },
    {
        enunciado: "Seu grupo de um projeto de ciências usou uma IA para gerar a maior parte do trabalho, e o resultado é quase idêntico ao de outros grupos. Como você reage a isso?",
        alternativas: [
            {
                texto: "Não vejo problema; o importante é a eficiência e o uso inteligente da tecnologia.",
                afirmacao: "A eficiência e a praticidade se tornaram prioridades para você, justificando o uso extensivo da IA em seus trabalhos."
            },
            {
                texto: "É crucial revisar e adicionar perspectivas pessoais para garantir originalidade e aprendizado genuíno.",
                afirmacao: "Você percebeu a importância da contribuição humana e da originalidade, entendendo que a IA é uma ferramenta de apoio, não de substituição total."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu futuro digital em 2055...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
