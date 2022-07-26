import React from 'react';
import RolagemDados from '../RolagemDados';
import BotãoDados from '../BotãoDados';

const FichaHabilidades = () => {

      const salvaHabilidade = (e) => {
            e.preventDefault()
      }

      return (
            <section className='formulariohabilidades'>
                  <form onSubmit={salvaHabilidade}>
                        <BotãoDados />
                        <RolagemDados />

                  </form>
            </section>
      )
}

export default FichaHabilidades