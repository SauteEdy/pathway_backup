import "../../Animations.css";
import Logo from "../../assets/iconPeople.png";

export default function Sobre() {
  return (
    <div className="w-full h-[20%]">
      <h1 className="font-bold font-custom text-center pt-24 text-5xl text-purple-900">
        SOBRE NÓS
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
    </div>
  );
}
