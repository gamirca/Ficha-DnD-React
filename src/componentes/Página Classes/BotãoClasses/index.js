import './botaoClasses.css'
import { Link } from 'react-router-dom'
import LocalClasses from '../LocalClasses'
import Proficiência from '../Proficiência'


const BotaoClasses = (props) => {

      let prosseguir = ''

      if (props.classe === '') {
            prosseguir = 'Escolha uma classe!'
      } else if ((props.proficiencia1 === '' || props.proficiencia2 === '') || ((props.classe === 'Bardo' || props.classe === 'Patrulheiro') && props.proficiencia3 === '') || (props.classe === 'Ladino' && props.proficiencia4 === '')) {
            prosseguir = 'Escolha suas proficiências!'
      } else {
            prosseguir = 'Prossiga!'
      }

      return (
            <button onClick={LocalClasses}>
                  {prosseguir === 'Prossiga!' ? <Link to={'/FichaHabilidades'}>{prosseguir}</Link> : prosseguir}
            </button>
      )

}

export default BotaoClasses