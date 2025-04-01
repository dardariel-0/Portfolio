// Configuração do i18next
i18next.init({
  lng: "pt", // Idioma padrão
  debug: true,
  resources: {
    pt: {
      translation: {
        // header
        projetos: "Projetos",
        sobre: "Sobre",
        contato: "Contato",
        idioma: "Idioma",
        modo: "Modo",

        //meses
        fev: "Fev",
        abr: "Abr",
        maio: "Maio",
        ago: "Ago",
        set: "Set",
        out: "Out",
        dez: "Dez",

        //conteudo
        stacks:
          "Trabalho com ferramentas como Figma para UX Design e prototipagem, além de HTML, CSS e JavaScript no desenvolvimento Front-End. Sempre busco aprender mais e aprimorar minhas habilidades. Essa junção de design e código me permite criar interfaces funcionais, intuitivas e visualmente agradáveis.",

        Projetos: "projetos",
        konda:
          "Projeto de site para uma marca de roupas, desenvolvido com uma estética cyberpunk. O design equilibra a identidade visual da marca, a clareza das informações e uma jornada de compra simplificada — tudo reforçado por microinterações que elevam a usabilidade.",
        kof: "A interface deste projeto foi criada para simular as telas de seleção de personagens dos jogos da franquia The King of Fighters. Os elementos visuais, cores e tipografia remetem diretamente à estética retrô dos arcades.",
        nove: "A interface prioriza a simplicidade, utilizando tons claros e espaçamento amplo para valorizar os produtos. A navegação foi pensada para ser fluida, com seções bem organizadas que conduzem o usuário de forma intuitiva desde a descoberta dos produtos até a finalização da compra.",
        esteticaTitulo: "Clínica Estética",
        estetica:
          "O layout foi projetado para ser intuitivo, com chamadas de ação estratégicas que direcionam o usuário a agendar consultas ou explorar os serviços. Com design 100% responsivo, a página garante uma experiência profissional e agradável em qualquer dispositivo.",
        gits: "O conceito inicial deste projeto era uma landing page que recriasse o visual de um pôster do filme Ghost in the Shell. O principal objetivo foi testar animações em hover utilizando JavaScript.",
        corretor:
          "Estudo de Landing Page que emprega microanimações no layout, com seções organizadas hierarquicamente para guiar o usuário de forma intuitiva pelos serviços oferecidos.",

        Sobre: "sobre mim",
        sobre1:
          "Olá! Sou o Daniel, designer formado pela UFCG com 4 anos de experiência em Design Gráfico. Desde 2024, venho expandindo minha atuação para UX Design e Front-End, unindo minha base criativa com habilidades técnicas voltadas ao desenvolvimento de interfaces.",
        sobre2:
          "No meu tempo livre, gosto de desenhar ouvindo música, jogar videogame ou, mais frequentemente, assistir a animes — que, de certa forma, são uma grande inspiração para minha criatividade. Esses momentos me ajudam a explorar novas ideias e a ousar mais em meus projetos.",
        exp: "Experiência Profissional",
        exp1: "Designer Gráfico",
        atualmente: "Atualmente",
        topico: "- Desenvolvimento de identidades visuais para clientes.",
        topico2: "- Criação de conteúdo gráfico para marketing.",

        grad: "Graduação e Certificados",
        grad1: "UFCG - Graduação",

        //contato
        Contato: "contato",
        contato1:
          "Se quiser discutir um projeto, trocar ideias ou simplesmente bater um papo sobre design, fique à vontade para me contatar. Estou sempre aberto a novas oportunidades, colaborações e — claro — feedbacks!",
        form1: "Nome",
        form2: "Mensagem",
        ph1: "Seu nome",
        ph2: "contato@email.com",
        ph3: "Como posso te ajudar?",

        // footer

        rights: "Todos os direitos reservados.",

        //buttons
        btnProjeto: "VER PROJETO",
        btnMensagem: "ENVIAR MENSAGEM",
      },
    },
    en: {
      translation: {
        // header
        projetos: "Projects",
        sobre: "About",
        contato: "Contact",
        idioma: "Language",
        modo: "Mode",

        //meses
        fev: "Feb",
        abr: "Apr",
        maio: "May",
        ago: "Aug",
        set: "Sep",
        out: "Oct",
        dez: "Dec",

        //conteudo

        stacks:
          "I work with tools like Figma for UX Design and prototyping, as well as HTML, CSS, and JavaScript for Front-End development. I constantly seek to expand my knowledge and refine my abilities. This combination of design and code allows me to create functional, intuitive, and visually appealing interfaces.",

        Projetos: "projects",
        konda:
          "Website project for a fashion brand, crafted with a cyberpunk aesthetic. The design balances the brand’s visual identity, clear information hierarchy, and a streamlined shopping journey — all enhanced by micro-interactions that improve usability.",
        kof: "This project's interface was designed to replicate the character selection screens from The King of Fighters game series. The visual elements, color scheme, and typography directly reference the retro aesthetic of arcade games.",
        nove: "The interface emphasizes simplicity, using light tones and ample spacing to showcase products. The navigation is designed for fluidity, with well-organized sections that intuitively guide users from product discovery all the way through checkout.",
        esteticaTitulo: "Cosmetic Clinic",
        estetica:
          "The layout is designed for intuitiveness, with strategic call-to-action buttons that guide users to book appointments or explore services. Featuring a fully responsive design, the page delivers a seamless and professional experience across all devices.",
        gits: "The initial concept for this project was a landing page that recreates the visual style of a Ghost in the Shell movie poster. The primary objective was to experiment with hover animations using JavaScript.",
        corretor:
          "Landing Page case study implementing micro-animations throughout the layout, with hierarchically organized sections that intuitively guide users through the offered services.",

        Sobre: "about me",
        sobre1:
          "Hello! I'm Daniel, a designer graduated from UFCG with 4 years of experience in Graphic Design. Since 2024, I've been expanding into UX Design and Front-End Development, merging my creative foundation with technical skills for interface development.",
        sobre2:
          "In my free time, I enjoy drawing while listening to music, playing video games, or most often watching anime — which in many ways serves as a major creative inspiration. These moments help me explore new ideas and take bolder risks in my projects.",
        exp: "Professional Experience",
        exp1: "Graphic Designer",
        atualmente: "Currently",
        topico: "- Visual identity development for clients.",
        topico2: "- Graphic content creation for marketing.",

        grad: "Education & Certifications",
        grad1: "UFCG - Bachelor's Degree",

        //contato
        Contato: "contact",
        contato1:
          "If you'd like to discuss a project, exchange ideas, or just chat about design, feel free to reach out. I'm always open to new opportunities, collaborations, and — of course — feedback!",
        form1: "Name",
        form2: "Message",
        ph1: "Your name",
        ph2: "contact@email.com",
        ph3: "How can I help you?",

        // footer
        rights: "All rights reserved.",

        //buttons
        btnProjeto: "SEE PROJECT",
        btnMensagem: "SEND MESSAGE",
      },
    },
  },
});

// Função para trocar idioma
function changeLanguage(lang) {
  i18next.changeLanguage(lang, () => updateTexts());
  document.getElementById("nome").placeholder = i18next.t("ph1");
  document.getElementById("email").placeholder = i18next.t("ph2");
  document.getElementById("mensagem").placeholder = i18next.t("ph3");
}

// Atualiza todos os textos na página
function updateTexts() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = i18next.t(key);
  });
}

// Inicializa os textos ao carregar a página
document.addEventListener("DOMContentLoaded", () => updateTexts());
