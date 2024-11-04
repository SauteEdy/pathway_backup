import { FaRegEye } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoRocketOutline } from "react-icons/io5";
import "../../Animations.css";
import Logo from "../../assets/iconPeople.png";
import Footer from '../pages/Footer';

export default function Sobre() {
  return (
    <div className="w-full h-[20%]">
      <h1 className="font-bold font-custom text-center pt-24 text-5xl text-orange-600 hover:text-purple-900 hover:cursor-pointer">
        Sobre Nós
      </h1>
      <div className="w-[70%] h-[8] m-auto border-4  border-b-purple-900 mt-4"></div>
      <div className="w-full h-[40%] flex lg:flex-row mt-12">
        <div className="flex-1  flex-row items-center justify-center hidden md:hidden lg:flex">
          <img
            className="w-[60%] h-auto max-h-full object-contain pingpong "
            src={Logo}
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col items-center text-center md:text-left">
          <h3 className="text-2xl text-purple-900 font-bold font-custom px-4 md:px-36 lg:px-0 lg:pr-20">
            Consultoria de RH e Negócios: Inovação que Transforma, Excelência
            que Impulsiona.
          </h3>
          <p className="text-purple-900 pt-7 px-4 md:px-36 lg:px-0 lg:pr-20">
            Somos uma empresa de consultoria de RH e Negócios que se destaca
            pela abordagem inovadora e pela busca incansável pela excelência.{" "}
            <br /> <br />
            Possuímos uma equipe de profissionais com mais de 10 anos de
            experiência em Gestão de RH, Negócios e Projetos. Fundimos expertise
            e sinergias para oferecer soluções disruptivas e inovadoras às
            empresas. <br /> <br />
            Nosso propósito é fornecer as melhores soluções em captação, seleção
            e retenção de talentos, gestão de projetos, consultoria de negócios
            e auditoria de RH, adaptando-nos às necessidades únicas de cada
            cliente e forjando parcerias com entidades reconhecidas nacional e
            internacionalmente nas nossas áreas de atuação. <br /> <br />
            Com um foco incansável na excelência, estamos empenhados em
            impulsionar e transformar seus negócios por meio de estratégias
            únicas.
          </p>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col mt-8 mb-8 md:flex-col md:items-center lg:flex-row ">
        <div className="w-full h-auto flex flex-col items-center justify-center mb-8 md:w-[33%]  md:mb-0">
          <IoRocketOutline
            style={{ fontSize: "10rem" }}
            className="text-purple-900"
          />
          <h6 className="font-sans font-bold text-purple-900 pt-8 text-3xl">
            Missão
          </h6>
          <p className="px-6 pt-8 text-center font-sans font-normal text-purple-800 md:px-2 lg:px-6">
            Nossa equipe utiliza uma abordagem estratégica e personalizada para
            cada cliente, entendendo suas necessidades específicas e adaptando
            nossas estratégias de prospecção para obter resultados eficientes.
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-center mb-8  md:w-[33%] md:mb-0">
          <IoMdHeartEmpty
            style={{ fontSize: "10rem" }}
            className="text-purple-900 mt-14"
          />
          <h6 className="font-sans font-bold text-purple-900 pt-8 text-3xl">
            Valores
          </h6>
          <p className="px-6 pt-8 text-center font-sans font-normal text-purple-800 md:px-2 lg:px-6">
            Na Pathway, acreditamos na inovação constante, buscando soluções
            disruptivas, excelência em cada interação e entrega, colaboração e
            parceria como alicerces de nosso trabalho, flexibilidade e adaptação
            para atender às necessidades em evolução, e um compromisso com um
            impacto sustentável e positivo, sempre alinhado com nossa missão de
            inspirar, motivar, inovar e transformar empresas e comunidades.
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-center mb-8 md:w-[33%]  md:mb-0">
          <FaRegEye style={{ fontSize: "10rem" }} className="text-purple-900" />
          <h6 className="font-sans font-bold text-purple-900 pt-8 text-3xl">
            Visão
          </h6>
          <p className="px-6 pt-8 text-center font-sans font-normal text-purple-800 md:px-2 lg:px-6">
            Inspirar e impulsionar a excelência empresarial e ser reconhecidos
            como líderes inovadores em consultoria, ao motivar equipas, inovar
            processos e transformar empresas de modo sustentável e impactante,
            actuando como parceiros estratégicos essenciais para o sucesso da
            gestão estratégica de negócios e Recursos Humanos.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
