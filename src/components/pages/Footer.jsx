import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="w-full h-auto flex  flex-col mt-4 mb-6">
            <div className="w-full h-auto flex flex-col md:flex-row bg-orange-600 pb-4">
                <div className="flex-1">
                    <p style={{ fontSize: '1.2rem' }} className="font-sans font-bold text-purple-900 text-1xl pl-8 pt-4">
                        Conecte-se a nós através das nossas redes sociais
                    </p>
                </div>
                <div className="flex-none w-full md:w-[30%] flex flex-row justify-evenly md:justify-start">
                    <FaWhatsapp className="text-4xl text-purple-900 mt-4 mx-2" />
                    <FaFacebook className="text-4xl text-purple-900 mt-4 mx-2" />
                    <FaLinkedin className="text-4xl text-purple-900 mt-4 mx-2" />
                    <FaSquareXTwitter className="text-4xl text-purple-900 mt-4 mx-2" />
                    <IoLogoGoogle className="text-4xl text-purple-900 mt-4 mx-2" />
                </div>
            </div>
            <div className="w-full h-auto bg-purple-900 flex flex-col md:flex-row">
                <div className="w-full md:w-[40%] h-auto flex flex-col mb-8">
                    <h6 className="text-white font-bold font-serif pl-8 text-3xl pt-9">
                        Pathway Consulting
                    </h6>
                    <p className="text-white pl-8 pr-10 pt-8">
                        Somos uma empresa de consultoria de RH e Negócios que se destaca
                        pela abordagem inovadora e pela busca incansável pela excelência.
                    </p>
                </div>
                <div className="w-full md:w-[40%] h-auto flex flex-col ml-3 mb-8">
                    <h6 className="text-white font-bold font-sans text-2xl pt-9">Serviços</h6>
                    <ul className="md:list-disc ml-4 mt-4">
                        <li className="text-white">Aquisição de Talentos</li>
                        <li className="text-white">Mapeamento de Talentos</li>
                        <li className="text-white">Levantamento de Referências 360</li>
                        <li className="text-white">Assessment - Testes Psicotécnicos</li>
                        <li className="text-white">Formação e Desenvolvimento</li>
                        <li className="text-white">Desenvolvimento de liderança e coaching executivo</li>
                        <li className="text-white">Análise de clima organizacional e engajamento dos colaboradores</li>
                        <li className="text-white">Auditoria de RH</li>
                        <li className="text-white">Gestão de talentos e gestão de desempenho</li>
                    </ul>
                </div>
                <div className="w-full md:w-[40%] h-auto flex flex-col ml-3 mb-8">
                    <h6 className="text-white font-bold font-sans text-2xl pt-9">Links Úteis</h6>
                    <ul className="mt-8">
                        <li className="text-white hover:text-orange-500"><Link to="/">Inicio</Link></li>
                        <li className="text-white hover:text-orange-500"><Link to="/servicos">Serviços</Link></li>
                        <li className="text-white hover:text-orange-500"><Link to="/sobre">Sobre Nós</Link></li>
                        <li className="text-white hover:text-orange-500"><Link to="/vagas">Vagas</Link></li>
                        <li className="text-white hover:text-orange-500"><Link to="/contactos">Contactos</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}