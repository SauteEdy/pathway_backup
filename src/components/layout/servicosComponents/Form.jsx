import styled from 'styled-components';

const BreakPoints = {
    mobile : '425px',
    tablet : '768px',
    laptop : '1024px'
}

const ModalDiv = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
` 
const ModalContent = styled.div`
    width: 30%;
    height: 500px;
    background-color: white;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: space-evenly;
    @media(min-width: ${BreakPoints.mobile}){
        width: 95%;
    }
    @media(min-width: ${BreakPoints.tablet}){
        width: 90%;
    }
    @media(min-width:${BreakPoints.laptop}){
        width: 35%;
    }
    
`

export default function Form({action}){
    return(
        <>
           <ModalDiv>
                <ModalContent>
                    <button onClick={action} className='w-[30px] bg-purple-900 font-bold text-white rounded-lg ml-6'>X</button>
                    <p className="text-purple-900 pb-8 text-center"><strong className="text-red-600 font-bold">Nota :</strong>Os detalhes serão enviados para o seu email!</p>
                    <input className='w-[80%] h-[40px] border-2 border-gray-500 ml-12 pl-5 ' type="text" name="" id="" placeholder='Seu nome'/>
                    <input className='w-[80%] h-[40px] border-2 border-gray-500 ml-12 pl-5  ' type="email" name="" id="" placeholder='Seu email'/>
                    <textarea className='w-[80%] h-[200px] border-2 border-gray-500 ml-12 pl-5 ' name="" id="" placeholder='Observações'></textarea>
                    <button className='mx-auto w-[200px] h-[40px] bg-purple-900 text-white font-bold font-sans'>Submeter</button>
                </ModalContent>
           </ModalDiv>
        </>
    );
}