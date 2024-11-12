import { useState } from "react";
import { FaBookReader, FaBriefcase } from "react-icons/fa";
import { FaArrowsDownToPeople, FaPeopleLine } from "react-icons/fa6";
import { ImStatsBars } from "react-icons/im";
import { MdManageAccounts, MdSource } from "react-icons/md";
import { TbView360Number } from "react-icons/tb";
import styled from 'styled-components';
import Card from '../layout/servicosComponents/Card';
import Form from '../layout/servicosComponents/Form';
import Footer from '../pages/Footer';


const Breakpoints = {
  mobile : '425px',
  tablet : '768px',
  laptop :'1024px'
}


const Wrapper = styled.div`
    margin: 0 auto;
    margin-top:50px;
    display: flex;
    flex-direction: row;
    flex-wrap : wrap;
    @media(min-width:${Breakpoints.mobile}){
      flex-direction: column;
      justify-items: center;
      justify-content: center;
      
    };
    @media(min-width : ${Breakpoints.tablet}){
      flex-direction : row;
      flex-wrap : wrap;
      justify-content: center;
      justify-items: center;
    }
`


export default function Servicos() {
  
  const[isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () =>{
    setModalOpen(!isModalOpen);
  }

  return (
    <div className="w-full h-screen">
      <Wrapper className="w-[90%] h-auto">
          <Card action={toggleModal}  iconStyle={{fontSize:'3rem'}} titulo="Aquisição de Talentos" icon={FaArrowsDownToPeople} text="Na nossa abordagem de aquisição de talentos, entendemos que cada empresa possui necessidades únicas. Por isso, oferecemos um serviço completo e personalizado para indentificar e atrair profissionais altamente qualificados, alinhados ao perfil desejado"  />
          <Card action={toggleModal} iconStyle={{fontSize:'3rem'}} titulo="Mapeamento de Talentos" icon={FaPeopleLine} text="Nosso serviço de mapeamento de talentos visa identificar e analisar as habilidades e competências dos colaboradores da sua empresa. Realizamos um diagnóstico detalhado para compreender o potencial interno, ajudando a alinhar talentos com as necessidades estratégicas do negócio"  />
          <Card action={toggleModal} iconStyle={{fontSize:'3rem'}} titulo="Refêrencias 360°" icon={TbView360Number} text="Oferecemos um serviço completo de verificação de referências profissionais e académicas para garantir que os candidatos recomendados atendem aos mais altos padrões de qualidade. Validamos o histórico dos candidatos com feedback direto das empresas anteriores e a autenticação dos certificados académicos junto das instituições de ensino. Com esta abordagem rigorosa, entregamos profissionais altamente qualificados e bem referenciados no mercado. "  />
          <Card action={toggleModal} iconStyle={{fontSize:'3rem'}} titulo="Assessment de Talentos" icon={ImStatsBars} text="O nosso serviço de assessment de talentos oferece uma análise precisa e abrangente das competências e do potencial dos profissionais, utilizando ferramentas de avaliação modernas para medir a inteligência, a capacidade de aprendizagem, a retenção de informações, o raciocínio lógico, a velocidade perceptiva e os traços de personalidade. "  />
          <Card action={toggleModal} iconStyle={{fontSize:'3rem'}} titulo="Formaçao e Desenvolvimento" icon={FaBookReader} text="Nosso serviço de formação e desenvolvimento visa capacitar os colaboradores da sua empresa por meio de programas personalizados de aprendizagem. Oferecemos treinamentos práticos e teóricos que abordam competências técnicas e comportamentais."  />
          <Card action={toggleModal} iconStyle={{fontSize:'3rem'}} titulo="Auditoria RH" icon={FaBriefcase} text="A auditoria de RH é essencial para avaliar e otimizar os processos e práticas de recursos humanos de uma empresa. Este serviço envolve uma análise detalhada das políticas, conformidade legal e gestão de talentos permitindo a identificação de áreas de melhoria e oportunidades de eficiência."  />
          <Card action={toggleModal} iconStyle={{fontSize:'3rem'}} titulo="Man Power" icon={MdManageAccounts} text="Os nossos serviços de manpower, call-off de talentos e outsourcing de RH oferecem soluções flexíveis e escaláveis, adaptadas às necessidades específicas da sua empresa. Se enfrenta períodos de maior demanda ou projetos temporários, fornecemos profissionais qualificados, prontos para integrar a sua equipa.       Com o manpower, conseguimos alocar rapidamente profissionais especializados, sem a sobrecarga dos processos de recrutamento.
          "  />
           <Card iconStyle={{fontSize:'3rem'}} titulo="OutSourcing de RH" icon={MdSource} text="O nosso serviço de outsourcing de RH garante uma gestão estratégica e integral de recursos humanos. Desde o recrutamento até à gestaaao contínua onde asseguramos a integração perfeita dos colaboradores na sua empresa, permitindo-lhe focar-se nos objectivos do seu negócio.
          "  />
          {isModalOpen && (
              <Form onClick={toggleModal} action={toggleModal}></Form>
          )}
      </Wrapper>
      <Footer/>
    </div>
  );
}