import SomeVagas from '../layout/SomeVagas'
import VagasHeader from '../layout/VagasHeader'
import Footer from '../pages/Footer'
import style from './Vagas.module.css'

function Vagas() {
  return (
    <div className={style.vagas_constainer}>
      
      <VagasHeader />
      <SomeVagas />
      <Footer/>
    </div>
  )
}

export default Vagas