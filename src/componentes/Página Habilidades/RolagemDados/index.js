import './rolagem.css'
import { useState } from 'react'

const RolagemDados = (props) => {


      const [dado, setDado] = useState('')
      let rolagem1 = [Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)]
      let rolagemFinal = rolagem1.reduce((pv, cv) => pv + cv)


      return (

            <section>
                  <div className='dado'>{ }</div>
            </section>
      )
}
export default RolagemDados