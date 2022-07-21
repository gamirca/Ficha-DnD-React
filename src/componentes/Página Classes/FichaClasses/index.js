import React from 'react';
import { useState } from "react";
import './fichaClasses.css'
import SelectClasses from '../SelectClasses'
import ResumoClasses from '../ResumoClasses'
import Proficiência from '../Proficiência'

const FichaClasses = () => {

      const Classes = ['Bárbaro', 'Bardo', 'Bruxo', 'Clérigo', 'Druida', 'Feiticeiro', 'Guerreiro', 'Ladino', 'Mago', 'Monge', 'Paladino', 'Patrulheiro']

      const salvaClasse = (e) => {
            e.preventDefault();
      }

      const [proficiencia1, setProficiencia1] = useState('')
      const [proficiencia2, setProficiencia2] = useState('')
      const [proficiencia3, setProficiencia3] = useState('')
      const [proficiencia4, setProficiencia4] = useState('')
      const [classe, setClasse] = useState('')

      return (
            <section className='formularioclasse'>
                  <form onSubmit={salvaClasse}>

                        < SelectClasses
                              classes={Classes}
                              resumoClasse={(event) => setClasse(event.target.value)}
                        />
                        <ResumoClasses
                              classe={classe}
                        />
                        <Proficiência
                              classe={classe}
                              proficiencia1={proficiencia1}
                              proficiencia2={proficiencia2}
                              proficiencia3={proficiencia3}
                              proficiencia4={proficiencia4}
                              setprof1={(event) => setProficiencia1(event.target.value)}
                              setprof2={(event) => setProficiencia2(event.target.value)}
                              setprof3={(event) => setProficiencia3(event.target.value)}
                              setprof4={(event) => setProficiencia4(event.target.value)}
                        />

                  </form>
            </section>
      )
}

export default FichaClasses