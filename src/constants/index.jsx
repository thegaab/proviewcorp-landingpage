import { BellElectric, BrickWall, Shell, ShieldCheck, Unplug } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Serviços", href: "#services" },
  { label: "Certificados", href: "#certifications" },
  { label: "Sobre nós", href: "#about-us" },
];

export const casesCompany = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BrickWall />,
    text: "Contrução",
    description:
      "Obras e projetos, topografia, reforma residencial, reforma de apartamento, reforma comercial, pisos e revestimentos, alvenaria, estrutural, pinturas e acabamentos",
  },
  {
    icon: <Unplug />,
    text: "Elétrica",
    description:
      "Projeto elétrico, proj. alta/média/baixa tensão, proj. poste coluna, elétrica residencial, elétrica comercial, spda aterramento, iluminação interna e externa, estudo básico de potência, balanço de carga, tratativas com concessionária de energia.",
  },
  {
    icon: <Shell />,
    text: "Hidráulica",
    description:
      "Projeto hidrossanitário, instalação, encanamento, água pluvial, água esgoto, hidráulica residencial, hidráulica comercial, hidráulica predial.",
  },
  {
    icon: <ShieldCheck />,
    text: "Regularização de Imóvel junto PMSP",
    description:
      "Análise da edificação e seus documentos; Identificação de possíveis irregularidades construtivas comrelação às leis e normas vigentes(Código de Obras, Lei de Zoneamento, etc);Elaboração do projeto de regularização da edificação;Montagem e gerenciamento do processo para a regularizaçãoou anistia de imóveis;Obtenção do Auto de Regularização de Imóvel."
  },
  {
    icon: <BellElectric />,
    text: "AVCB/CLCB - Projeta sua edificação",
    description:
      "Projeto simplificado, projeto técnico completo, emissão de avcb e clcb, hidrantes, central de alarme, placas de sinalização, luz de emergência, detector de fumaça, extintores, laudos, assessoria técnica, art de responsabilidade técnica, brigada de incêndio, instalação de equipamentos.",
  },
];

export const checklistItems = [
  {
    title: "NR 08",
    description:
      "Edificações.",
  },
  {
    title: "NR 10",
    description:
      "Elétrica.",
  },
  {
    title: "NR 12",
    description:
      "Segurança do trabalho.",
  },
  {
    title: "NR 17",
    description:
      "Ergonomia.",
  },
  {
    title: "NR 23",
    description:
      "Proteção contra incêndios.",
  },
  {
    title: "NR 35",
    description:
      "Trabalho em altura.",
  },
];

export const contactLinks = [
  { href: "https://www.google.com/maps/place/Rua+Vict%C3%B3rio+Santim,+2776+-+Vila+Carmosina,+S%C3%A3o+Paulo+-+SP,+08290-001/@-23.5584036,-46.4496507,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce66886fb92d3b:0x361c0c44b15c3679!8m2!3d-23.5584036!4d-46.4496507!16s%2Fg%2F11cp9t79v2?entry=ttu", text: ("Rua Victório Santim, 2776, CEP: 08290-001") },
  { href: "tel:+5511941354764", text: "(11) 94135-4764" },
  { href: "mailto:proviewraf@icloud.com", text: "proviewraf@icloud.com" },
];

export const importantLinks = [
  { text: ("Instituição Bancaria Nubank Ag: 0001 CC: 53985936-3") },
  { text: ("RRS CONSTRUÇÕES & REFORMAS EIRELI, CNPJ: 34.396.560/0001-29,") },
  { text: ("TEC. EDIFICAÇÕES, TEC. AGRICOLA, ENG. CIVIL") },
];

export const socialsLinks = [
  { href: "tel:+5511941354764", text: "Whatsapp" },
  { href: "mailto:proviewraf@icloud.com", text: "E-mail" },
];
