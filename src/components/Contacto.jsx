import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";
import { RiMailSendFill } from "react-icons/ri";
import Map from "../layout/contactoComponents/Map";


export default function Contacto() {
    const form = useRef();

    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_99pra1k','template_g3hg5ao',form.current,{
            publicKey : 'gGzCyZ8vPxL9leunU'
        })
        .then(() =>{
            alert('Mensagem enviada com sucesso');
        },(err) =>{
            alert('Falha ao mandar mensagem :'+err);
        });
    };
  return (
    <div className="w-full h-screen">
      <h1 className="font-bold text-orange-600 font-custom text-center text-2xl md:text-5xl pt-20 hover:text-purple-900 hover:cursor-pointer">
        Contacte-nos
      </h1>
      <div className="w-[20%] h-[10px] border-b-4 border-orange-600 mt-4 mx-auto hover:text-purple-900 hover:cursor-pointer"></div>
      <p className="text-center text-purple-900 pt-8 px-4 text-1xl md:px-20 md:text-2xl">
        Estamos aqui para ajudar! Se você tem dúvidas sobre nossos serviços de
        consultoria em Recursos Humanos ou deseja discutir como podemos apoiar
        sua empresa, não hesite em nos contatar.
      </p>
      <div className="w-[90%] h-auto flex flex-col lg:flex-row m-auto mt-8">
        <div className="flex-1 flex flex-col bg-white shadow-lg mb-4 lg:mb-0">
          <form ref={form} onSubmit={sendEmail} >
            <h3 className="font-mono font-bold text-purple-900 pt-8 pl-6">
              Envie-nos uma mensagem
            </h3>
            <div className="w-[90%] h-[100px] m-auto mt-4 flex flex-col md:flex-row justify-between">
              <input
                type="text"
                name="user_name"
                className="w-[90%] h-[50px] mx-auto md:mx-0 md:w-[44%] outline-2 outline-purple-600 border-2 border-gray-400 pl-4 rounded"
                placeholder="Nome"
              />
              <input
                type="email"
                name="user_email"
                className="w-[90%] h-[50px] mx-auto mt-4 md:mt-0 md:mx-0 md:w-[44%] outline-2 outline-purple-600 border-2 border-gray-400 pl-4 rounded"
                placeholder="Email"
              />
            </div>
            
            <textarea
              name="message"
              placeholder="Mensagem"
              className="w-[90%] h-[150px] outline-2 outline-purple-600 border-2 border-gray-400 pl-4 mx-auto ml-4  mt-6 rounded pt-4 md:ml-6  md:mx-0 "
            ></textarea>
            <button
              type="submit"
              className="mt-6 w-[100%] h-[40px] bg-purple-900 text-white font-bold font-sans  rounded mb-8 md:w-[130px] md:ml-6 "
            >
              Enviar
            </button>
          </form>
        </div>
        <div className="flex-1 h-[auto] shadow-lg md:mt-4 lg:ml-4">
          <Map className="h-[100%]" />
        </div>
      </div>
      <div className="w-[90%] h-auto flex flex-col md:flex-row justify-between m-auto mt-4">
        <div className="w-full md:w-[23%] h-auto flex flex-col items-center justify-center mt-12 mb-8 hover:scale-105 hover:cursor-pointer transition-transform transform">
          <FaMapLocationDot className="text-orange-600 text-6xl" />
          <p className="font-custom font-light text-purple-800 text-center pt-4">
            <strong className="font-bold">Endereço :</strong> Rua João de Barros
            Nº 367 Sommerschield, Maputo
          </p>
        </div>
        <div className="w-full md:w-[23%] h-auto flex flex-col items-center justify-center mt-12 mb-8 hover:scale-105 hover:cursor-pointer transition-transform transform">
          <FaPhoneAlt className="text-orange-600 text-6xl" />
          <p className="font-custom font-light text-purple-800 text-center pt-4">
            <strong className="font-bold">Telefone :</strong> (+258) 84 898 9079
          </p>
        </div>
        <div className="w-full md:w-[23%] h-auto flex flex-col items-center justify-center mt-12 mb-8 hover:scale-105 hover:cursor-pointer transition-transform transform">
          <RiMailSendFill className="text-orange-600 text-6xl" />
          <p className="font-custom font-light text-purple-800 text-center pt-4">
            <strong className="font-bold">Email :</strong> geral@pathway.co.mz
          </p>
        </div>
        <div className="w-full md:w-[23%] h-auto flex flex-col items-center justify-center mt-12 mb-8 hover:scale-105 hover:cursor-pointer transition-transform transform">
          <IoIosGlobe className="text-orange-600 text-6xl" />
          <p className="font-custom font-light text-purple-800 text-center pt-4">
            <strong className="font-bold">Website :</strong> pathway.co.mz
          </p>
        </div>
      </div>
    </div>
  );
}
