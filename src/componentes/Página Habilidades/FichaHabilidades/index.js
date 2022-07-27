import React from 'react';
import RolagemDados from '../RolagemDados';
import BotãoDados from '../BotãoDados';
import { useState } from 'react';

const FichaHabilidades = () => {

      const [rolagem, setRolagem] = useState('')

      const salvaHabilidade = (e) => {
            e.preventDefault()
      }

      return (
            <section className='formulariohabilidades'>
                  <form onSubmit={salvaHabilidade}>
                        <RolagemDados />
                        <BotãoDados />
                  </form>
            </section>
      )
}

export default FichaHabilidades