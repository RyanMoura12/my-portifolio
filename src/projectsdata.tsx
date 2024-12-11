import sicarp from "./assets/mock/sicarp.png";
import sipas from "./assets/mock/sipas.png";
import siato from "./assets/mock/siato.png";
import pralicitar from "./assets/mock/pralicitar.png";

const ProjectsData = [
  {
    id: 1,
    img: sicarp,
    title: "Sicarp",
    description:
      "Through SICARP, it is possible to monitor and audit information related to information, ensuring transparency and control over public purchases. Furthermore, it allows greater agility and efficiency in the management of these processes, avoiding rework and errors.",
    tool: "React · Firebase",
    github: "https://github.com/ogabrielbarbosa/TCC-Professor",
    link: "https://sicarp.diretoriodigital.net.br/",
  },
  {
    id: 2,
    img: sipas,
    title: "Sipas",
    description:
      "It is a platform for recording the City Hall's main social services such as: TFD – Treatment Outside the Home, Basic Food Basket, Baby Kit, Medicines, etc.",
    tool: "React · Firebase",
    github: "https://github.com/ogabrielbarbosa/TCC-Orientador",
    link: "https://sipas.diretoriodigital.net.br/",
  },
  {
    id: 3,
    img: siato,
    title: "Siato - Atendimento Social",
    description:
      "is a system that controls the bidding process, controlling all stages and generating documents that are used for each stage of the process.",
    tool: "React · TypeScript · PokeAPI",
    github: "https://github.com/ogabrielbarbosa/pokedex",
    link: "https://siato.diretoriodigital.net.br/",
  },
  {
    id: 4,
    img: pralicitar,
    title: "PraLicitar",
    description:
      "Plataforma de filmes em exibição, com acesso a informações do filme, como tempo de duração, gêneros, sinopse, entre outras coisas.",
    tool: "React · TheMovieDB",
    github: "https://github.com/ogabrielbarbosa/flix",
    link: "https://pralicitar.diretoriodigital.net.br/",
  },
];

export default ProjectsData;
