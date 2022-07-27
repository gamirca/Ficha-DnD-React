import RolagemDados from '../RolagemDados'
import './BotãoDados.css'

const BotãoDados = (props) => {

      return (
            <section>

                  <button onClick={RolagemDados} className='botão'>
                        Role os dados
                  </button>
            </section>
      )
}

export default BotãoDados