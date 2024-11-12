import styled from 'styled-components';

const BreakPoints = {
  mobile : "425px",
  tablet : "768px",
  laptop : "1024px"
}

const CardBox = styled.div`
    width: 28%;
    height: 500px;
    border-bottom: 2px solid purple ;
    border-radius: 6px;
    display:flex;
    flex-direction : column;
    justify-content: center;

    @media(min-width:${BreakPoints.mobile}){
      width: 80%;
      margin: 0 auto;
    }
    @media(min-width:${BreakPoints.tablet}){
      width: 47%;
      margin-left: 10px;
    }

`



export default function Card({ icon: Icon, text, iconStyle, titulo,action }) {
    return (
      <CardBox className='shadow-lg lg:mr-16 hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer'>
        {Icon && <Icon className="text-orange-600 mx-auto" style={iconStyle} />}
        <h4 className="text-2xl font-semibold font-custom lg:pt-4 pb-2 text-center text-purple-900">{titulo}</h4>
        <p className="pt-4 pb-4 md:pl-2 md:pr-2 lg:pl-6 lg:pr-6 hover:text-orange-600 text-center text-purple-900">{text}</p>
        <span onClick={action} className='text-purple-900 text-center font-bold pt-8 hover:underline'>Requisitar Serviço -&gt;</span>
      </CardBox>
    );
  }