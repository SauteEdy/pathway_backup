import { FaBookReader, FaBriefcase } from "react-icons/fa";
import { FaArrowsDownToPeople, FaPeopleLine } from "react-icons/fa6";
import { MdAssessment } from "react-icons/md";
import { TbView360Number } from "react-icons/tb";
import Card from "../layout/servicosComponents/Card";
import Footer from "./Footer";

export default function Servicos() {
  return (
    <div className="w-full h-screen ">
      <h1 className="text-orange-600 font-bold text-5xl text-center pt-16 font-custom transition-transform transform hover:text-purple-900 hover:cursor-pointer">
        Nossos Serviços
      </h1>
      <div className="w-[20%] h-[10px] border-b-4 border-orange-600 mt-4 mx-auto hover:text-purple-900 hover:cursor-pointer"></div>
      <div className="w-full h-auto flex lg:flex lg:flex-row lg:flex-wrap lg:justify-evenly flex-col md:hidden md:justify-center md:items-center">
        <Card
          icon={FaArrowsDownToPeople}
          titulo={"Aquisição de Talentos"}
          text={
            "Na nossa abordagem de aquisição de talentos, entendemos que cada empresa possui necessidades únicas. Por isso, oferecemos um serviço completo e personalizado para identificar e atrair profissionais altamente qualificados, alinhados ao perfil desejado."
          }
          iconStyle={{ fontSize: "5rem", paddingTop: "2rem" }}
        />
        <Card
          icon={FaPeopleLine}
          titulo={"Mapeamento de Talentos"}
          text={
            "Nosso serviço de mapeamento de talentos visa identificar e analisar as habilidades e competências dos colaboradores da sua empresa. Realizamos um diagnóstico detalhado para compreender o potencial interno, ajudando a alinhar talentos com as necessidades estratégicas do negócio."
          }
          iconStyle={{ fontSize: "5rem", paddingTop: "2rem" }}
        />
        <Card
          icon={TbView360Number}
          titulo={"Referências 360°"}
          text={
            "Nosso serviço de levantamento de referências 360° oferece uma avaliação abrangente do desempenho e comportamento dos colaboradores. Coletamos feedback de colegas, supervisores e subordinados para proporcionar uma visão holística das competências."
          }
          iconStyle={{ fontSize: "5rem", paddingTop: "2rem" }}
        />
        <Card
          icon={MdAssessment}
          titulo={"Assessment de Talentos"}
          text={
            "Nosso serviço de assessment de talentos proporciona uma análise aprofundada das habilidades e competências dos colaboradores. Utilizamos ferramentas de avaliação modernas para medir o potencial, desempenho e adequação cultural dos profissionais dentro da sua organização."
          }
          iconStyle={{ fontSize: "5rem", paddingTop: "2rem" }}
        />
        <Card
          icon={FaBookReader}
          titulo={"Formação e Desenvolvimento"}
          text={
            "Nosso serviço de formação e desenvolvimento visa capacitar os colaboradores da sua empresa por meio de programas personalizados de aprendizagem. Oferecemos treinamentos práticos e teóricos que abordam competências técnicas e comportamentais. "
          }
          iconStyle={{ fontSize: "5rem", paddingTop: "2rem" }}
        />
        <Card
          icon={FaBriefcase}
          titulo={"Auditoria RH"}
          text={
            "A auditoria de RH é essencial para avaliar e otimizar os processos e práticas de recursos humanos de uma empresa. Este serviço envolve uma análise detalhada das políticas, conformidade legal e gestão de talentos, permitindo a identificação de áreas de melhoria e oportunidades de eficiência."
          }
          iconStyle={{ fontSize: "5rem", paddingTop: "2rem" }}
        />
      </div>
      <div className="md:w-full md:h-auto md:flex md:flex-row md:justify-evenly md:overflow-x-auto  lg:hidden sm:hidden hidden">
        <Card
          icon={FaArrowsDownToPeople}
          titulo={"Aquisição de Talentos"}
          text={
            "Na nossa abordagem de aquisição de talentos, entendemos que cada empresa possui necessidades únicas. Por isso, oferecemos um serviço completo e personalizado para identificar e atrair profissionais altamente qualificados, alinhados ao perfil desejado."
          }
          iconStyle={{ fontSize: "5rem", paddingTop: "2rem" }}
        />
        <Card
          icon={FaPeopleLine}
          titulo={"Mapeamento de Talentos"}
          text={
            "Nosso serviço de mapeamento de talentos visa identificar e analisar as habilidades e competências dos colaboradores da sua empresa. Realizamos um diagnóstico detalhado para compreender o potencial interno, ajudando a alinhar talentos com as necessidades estratégicas do negócio."
          }
          iconStyle={{ fontSize: "5rem", paddingTop: "2rem" }}
        />
        <Card
          icon={TbView360Number}
          titulo={"Referências 360°"}
          text={
            "Nosso serviço de levantamento de referências 360° oferece uma avaliação abrangente do desempenho e comportamento dos colaboradores. Coletamos feedback de colegas, supervisores e subordinados para proporcionar uma visão holística das competências."
          }
          iconStyle={{ fontSize: "5rem", paddingTop: "2rem" }}
        />
        <Card
          icon={MdAssessment}
          titulo={"Assessment de Talentos"}
          text={
            "Nosso serviço de assessment de talentos proporciona uma análise aprofundada das habilidades e competências dos colaboradores. Utilizamos ferramentas de avaliação modernas para medir o potencial, desempenho e adequação cultural dos profissionais dentro da sua organização."
          }
          iconStyle={{ fontSize: "5rem", paddingTop: "2rem" }}
        />
        <Card
          icon={FaBookReader}
          titulo={"Formação e Desenvolvimento"}
          text={
            "Nosso serviço de formação e desenvolvimento visa capacitar os colaboradores da sua empresa por meio de programas personalizados de aprendizagem. Oferecemos treinamentos práticos e teóricos que abordam competências técnicas e comportamentais. "
          }
          iconStyle={{ fontSize: "5rem", paddingTop: "2rem" }}
        />
        <Card
          icon={FaBriefcase}
          titulo={"Auditoria RH"}
          text={
            "A auditoria de RH é essencial para avaliar e otimizar os processos e práticas de recursos humanos de uma empresa. Este serviço envolve uma análise detalhada das políticas, conformidade legal e gestão de talentos, permitindo a identificação de áreas de melhoria e oportunidades de eficiência."
          }
          iconStyle={{ fontSize: "5rem", paddingTop: "2rem" }}
        />
      </div>
      <Footer/>
    </div>
  );
}
