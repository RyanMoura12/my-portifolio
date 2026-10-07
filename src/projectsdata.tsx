import sicarp from "./assets/mock/sicarp.png";
import sipas from "./assets/mock/sipas.png";
import siato from "./assets/mock/siato.png";
import pralicitar from "./assets/mock/pralicitar.png";

interface PortfolioProject {
  id: number;
  img?: string;
  title: string;
  description: string;
  tool: string;
  link?: string;
}

const ProjectsData: PortfolioProject[] = [
  {
    id: 5,
    title: "Docbit",
    description: "Plataforma de protocolo e gestão documental, com produção de documentos, modelos e acompanhamento de processos.",
    tool: "Vue.js · TypeScript · Laravel · GraphQL",
  },
  {
    id: 6,
    title: "SICAT",
    description: "Sistema de catálogo de materiais e serviços, com classificação, organização e importação de itens para apoiar a gestão pública.",
    tool: "Vue.js · TypeScript · Laravel · GraphQL",
  },
  {
    id: 7,
    title: "SIPOR",
    description: "Sistema para gestão de informações de servidores, com acesso a contracheques, documentos e acompanhamento de solicitações.",
    tool: "PHP · Laravel · JavaScript · Bootstrap",
  },
  {
    id: 8,
    title: "SISTP",
    description: "Sistema de apoio à transparência pública, com gestão de publicações, edições, relatórios e avaliações por critérios.",
    tool: "PHP · Laravel · JavaScript · Bootstrap",
  },
  {
    id: 9,
    title: "LegisAI",
    description: "Central de automações com inteligência artificial para organizar registros, documentos e rotinas de acompanhamento jurídico, com gestão pelo chat e painel integrado.",
    tool: "Vue 3 · Vite · Python · SQLite · Claude",
  },
  {
    id: 1,
    img: sicarp,
    title: "Sicarp",
    description:
      "Sistema para acompanhamento e controle de compras públicas, com organização das informações e apoio à gestão dos processos.",
    tool: "Vue.js · Laravel · GraphQL",
    link: "https://sicarp.diretoriodigital.net.br/",
  },
  {
    id: 2,
    img: sipas,
    title: "Sipas",
    description:
      "Plataforma para registro e acompanhamento de benefícios e serviços sociais, como tratamento fora do domicílio, cestas básicas, kits para bebês e medicamentos.",
    tool: "Vue.js · Laravel · GraphQL",
    link: "https://sipas.diretoriodigital.net.br/",
  },
  {
    id: 3,
    img: siato,
    title: "Siato - Atendimento Social",
    description:
      "Sistema de atendimento social para organização dos registros e acompanhamento dos atendimentos à população.",
    tool: "Vue.js · Laravel · GraphQL",
    link: "https://siato.diretoriodigital.net.br/",
  },
  {
    id: 4,
    img: pralicitar,
    title: "PraLicitar",
    description:
      "Sistema voltado à gestão de processos licitatórios.",
    tool: "Vue.js · Laravel · GraphQL",
    link: "https://pralicitar.diretoriodigital.net.br/",
  },
];

export const featuredProject = {
  title: "@barber",
  description:
    "Aplicativo para conectar clientes, barbeiros e gestores de barbearias. Reúne a busca por estabelecimentos, o agendamento de serviços e a organização da rotina da barbearia em uma experiência mobile.",
  features: [
    { title: "Para clientes", description: "Busca de barbearias, localização no mapa e agendamento de serviços." },
    { title: "Para barbeiros", description: "Consulta da agenda e acompanhamento dos ganhos." },
    { title: "Para gestores", description: "Gestão de profissionais, serviços, comissões e relatórios." },
  ],
  technologies: ["React Native", "Expo", "TypeScript", "GraphQL", "Laravel"],
};

export default ProjectsData;
