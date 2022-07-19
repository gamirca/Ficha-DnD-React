import React from 'react';
import { useState } from "react";
import SelectRaças from "../SelectRaças";
import ResumoRaças from "../ResumoRaças";
import SubRaças from "../Subraças"
import './fichaRaças.css'
import ResumoSubs from '../ResumoSubs';
import BotãoRaças from '../BotãoRaças';
import LocalRaças from '../LocalRaças'

const FichaRaças = (props) => {

      const Raças = ['Anão', 'Elfo', 'Halfling', 'Humano', 'Draconato', 'Gnomo', 'Meio-Elfo', 'Meio-Orc', 'Tiefling',]

      const SubAnão = ['Anão da Colina', 'Anão da Montanha',]

      const SubElfo = ['Alto Elfo', 'Elfo da Floresta', 'Elfo Negro']

      const SubHalfling = ['Pés Leves', 'Robusto']

      const SubGnomo = ['Gnomo da Floresta', 'Gnomo das Rochas']

      const salvaRaça = (e) => {
            e.preventDefault();

      }

      const [raça, setRaça] = useState('')
      const [subRaça, setSub] = useState('')




      return (
            <section className='formularioraça'>
                  <form onSubmit={salvaRaça}>
                        <SelectRaças
                              label='Raças'
                              itens={Raças}
                              resumoRaça={(event) => setRaça(event.target.value)}
                        />
                        <ResumoRaças
                              resumoRace={raça}
                        />
                        <SubRaças
                              selectRaça={raça}
                              SubAnão={SubAnão}
                              SubElfo={SubElfo}
                              SubHalfling={SubHalfling}
                              SubGnomo={SubGnomo}
                              resumoSub={(event) => setSub(event.target.value)}

                        />
                        <ResumoSubs
                              subRaça={subRaça}
                              raça={raça}
                        />

                        <BotãoRaças
                              raça={raça}
                              subRaça={subRaça}

                        />
                        <LocalRaças
                              subRaça={subRaça}
                              raça={raça}
                        />
                  </form>
            </section>
      )
}

export default FichaRaças