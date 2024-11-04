import PersonalInfoForm from '../layout/PersonalInfoForm'
import style from './Contactos.module.css'
import Footer from './Footer'

function Candidaturas() {
  return (
    <div className={style.vagas_constainer}>
      
      <PersonalInfoForm />
      <Footer/>
    </div>
  )
}

export default Candidaturas