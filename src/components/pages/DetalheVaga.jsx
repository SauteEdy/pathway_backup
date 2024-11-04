import logo from '../../assets/logo.png';
import Objectivo from '../layout/detalheVaga/Objectivo';
import Requisitos from '../layout/detalheVaga/Requisitos';
import Responsabilidades from '../layout/detalheVaga/Responsabilidades';

export default function DetalheVaga({Titulo,Objetivo,Responsabilidade,Requisito}){
    const data = ['Comer','Jogar Game','Organizar as coisas','Estudar']
    const data2 = ['Lincenciatura em Eng.Software','Mais de 25 anos de idade','Experiencia 2 anos com dados']
    return(
        <div className="w-full h-auto flex flex-col items-center mt-8">
            <div className="w-[80%] h-[20%] flex mx-auto lg:flex-row lg:justify-center">
                 <img src={logo} alt="" className='w-[100px] h-[100px] object-scale-down' />
                 <h1 className='font-sans text-purple-900 text-5xl font-bold pl-4 pt-6'>{Titulo}</h1>
            </div>
            <Objectivo Texto="O objetivo de uma vaga para Analista de Dados Sênior é liderar a análise e interpretação de grandes volumes de dados para fornecer insights estratégicos que direcionem as tomadas de decisão da empresa. Este profissional deve ser capaz de identificar padrões e tendências, otimizar processos e desenvolver soluções preditivas, sempre com foco em melhorar a eficiência e competitividade da organização. Além disso, é esperado que o Analista de Dados Sênior colabore com equipes multidisciplinares, orientando analistas juniores e implementando boas práticas de análise e governança de dados para garantir a precisão e a qualidade dos resultados."/>
            <Responsabilidades Dados={data}/>
            <Requisitos Dados={data2}/>
            <button className='w-[300px] h-[60px] bg-purple-900 text-white font-bold font-sans mt-10 mx-auto'>Candidatar-se</button>
        </div>
    );
}