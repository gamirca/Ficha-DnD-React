import LocalRaças from '../LocalRaças';
import { Link } from 'react-router-dom'
import './botaoraças.css';


const BotãoRaças = (props) => {

      let prossiga = ''


      if (props.raça === '') {
            prossiga = 'Escolha sua raça!'
      } else if ((props.raça === 'Anão' || props.raça === 'Elfo' || props.raça === 'Halfling' || props.raça === 'Gnomo') && props.subRaça === '') {
            prossiga = 'Escolha sua subraça!'
      } else {
            prossiga = 'Prosseguir para a escolha de classe'
      }


      return (

            <button onClick={LocalRaças} id='botãoRaça'>
                  {prossiga === 'Prosseguir para a escolha de classe' ? <Link to={'/FichaClasses'}>{prossiga}</Link> : prossiga}
            </button>

      )
}

export default BotãoRaças