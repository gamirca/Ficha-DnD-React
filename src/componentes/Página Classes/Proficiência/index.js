import './proficiencia.css'

const Proficiência = (props) => {



      const profBarbaro = ['Adestrar Animais', 'Atletismo', 'Intimidação', 'Natureza', 'Percepção', 'Sobrevivência']
      const profBardo = ['Atletismo', 'Acrobacia', 'Furtividade', 'Prestidigitação', 'Arcanismo', 'História', 'Investigação', 'Natureza', 'Religião', 'Adestrar Animais', 'Intuição', 'Medicina', 'Percepção', 'Sobrevivência', 'Atuação', 'Enganação', 'Intimidação', 'Persuasão']
      const profBruxo = ['Arcanismo', 'Enganação', 'História', 'Intimidação', 'Investigação', 'Natureza', 'Religião']
      const profClérigo = ['História', 'Intuição', 'Medicina', 'Persuasão', 'Religião']
      const profDruida = ['Arcanismo', 'Adestrar Animais', 'Intuição', 'Medicina', 'Natureza', 'Percepção', 'Religião', 'Sobrevivência']
      const profFeiticeiro = ['Arcanismo', 'Enganação', 'Intuição', 'Intimidação', 'Persuasão', 'Religião']
      const profGuerreiro = ['Acrobacia', 'Adestrar Animais', 'Atletismo', 'História', 'Intuição', 'Intimidação', 'Percepção', 'Sobrevivência']
      const profLadino = ['Acrobacia', 'Atletismo', 'Atuação', 'Enganação', 'Furtividade', 'Intimidação', 'Intuição', 'Investigação', 'Percepção', 'Persuasão', 'Prestidigitação']
      const profMago = ['Arcanismo', 'História', 'Intuição', 'Investigação', 'Medicina', 'Religião']
      const profMonge = ['Acrobacia', 'Atletismo', 'Furtividade', 'História', 'Intuição', 'Religião']
      const profPaladino = ['Atletismo', 'Intuição', 'Intimidação', 'Medicina', 'Persuasão', 'Religião']
      const profPatrulheiro = ['Adestrar Animais', 'Atletismo', 'Furtividade', 'Intuição', 'Investigação', 'Natureza', 'Percepção', 'Sobrevivência']

      return (
            <section>

                  {/* Bárbaro */}
                  <div id='Bárbaro' style={props.classe === 'Bárbaro' ? { display: 'inline' } : null}>
                        <select onChange={event => props.setprof1(event)}>
                              <option value="" key={''}>Escolha sua primeira proficiência</option>
                              {profBarbaro.filter(item => item !== props.proficiencia2).map(item => <option key={item}>{item}</option>)}
                        </select>
                        <select onChange={event => props.setprof2(event)}>
                              <option value="" key={''}>Escolha sua segunda proficiência</option>
                              {profBarbaro.filter(item => item !== props.proficiencia1).map(item => <option key={item}>{item}</option>)}
                        </select>
                  </div>

                  {/* Bardo */}

                  <div id='Bardo' style={props.classe === 'Bardo' ? { display: 'inline' } : null}>
                        <select onChange={event => props.setprof1(event)}>
                              <option value="" key={''}>Escolha sua primeira proficiência</option>
                              {profBardo.filter(item => item !== props.proficiencia2 && item !== props.proficiencia3).map(item => <option key={item}>{item}</option>)}
                        </select>
                        <select onChange={event => props.setprof2(event)}>
                              <option value="" key={''}>Escolha sua segunda proficiência</option>
                              {profBardo.filter(item => item !== props.proficiencia1 && item !== props.proficiencia3).map(item => <option key={item}>{item}</option>)}
                        </select>
                        <select onChange={event => props.setprof3(event)}>
                              <option value="" key={''}>Escolha sua terceira proficiência</option>
                              {profBardo.filter(item => item !== props.proficiencia1 && item !== props.proficiencia2).map(item => <option key={item}>{item}</option>)}
                        </select>
                  </div>

                  {/* Bruxo */}

                  <div id='Bruxo' style={props.classe === 'Bruxo' ? { display: 'inline' } : null}>
                        <select onChange={event => props.setprof1(event)}>
                              <option value="" key={''}>Escolha sua primeira proficiência</option>
                              {profBruxo.filter(item => item !== props.proficiencia2).map(item => <option key={item}>{item}</option>)}
                        </select>
                        <select onChange={event => props.setprof2(event)}>
                              <option value="" key={''}>Escolha sua segunda proficiência</option>
                              {profBruxo.filter(item => item !== props.proficiencia1).map(item => <option key={item}>{item}</option>)}
                        </select>
                  </div>

                  {/* Clérigo */}

                  <div id='Clérigo' style={props.classe === 'Clérigo' ? { display: 'inline' } : null}>
                        <select onChange={event => props.setprof1(event)}>
                              <option value="" key={''}>Escolha sua primeira proficiência</option>
                              {profClérigo.filter(item => item !== props.proficiencia2).map(item => <option key={item}>{item}</option>)}
                        </select>
                        <select onChange={event => props.setprof2(event)}>
                              <option value="" key={''}>Escolha sua segunda proficiência</option>
                              {profClérigo.filter(item => item !== props.proficiencia1).map(item => <option key={item}>{item}</option>)}
                        </select>
                  </div>

                  {/* Druida */}

                  <div id='Druida' style={props.classe === 'Druida' ? { display: 'inline' } : null}>
                        <select onChange={event => props.setprof1(event)}>
                              <option value="" key={''}>Escolha sua primeira proficiência</option>
                              {profDruida.filter(item => item !== props.proficiencia2).map(item => <option key={item}>{item}</option>)}
                        </select>
                        <select onChange={event => props.setprof2(event)}>
                              <option value="" key={''}>Escolha sua segunda proficiência</option>
                              {profDruida.filter(item => item !== props.proficiencia1).map(item => <option key={item}>{item}</option>)}
                        </select>
                  </div>

                  {/* Feiticeiro */}

                  <div id='Feiticeiro' style={props.classe === 'Feiticeiro' ? { display: 'inline' } : null}>
                        <select onChange={event => props.setprof1(event)}>
                              <option value="" key={''}>Escolha sua primeira proficiência</option>
                              {profFeiticeiro.filter(item => item !== props.proficiencia2).map(item => <option key={item}>{item}</option>)}
                        </select>
                        <select onChange={event => props.setprof2(event)}>
                              <option value="" key={''}>Escolha sua segunda proficiência</option>
                              {profFeiticeiro.filter(item => item !== props.proficiencia1).map(item => <option key={item}>{item}</option>)}
                        </select>
                  </div>

                  {/* Guerreiro */}

                  <div id='Guerreiro' style={props.classe === 'Guerreiro' ? { display: 'inline' } : null}>
                        <select onChange={event => props.setprof1(event)}>
                              <option value="" key={''}>Escolha sua primeira proficiência</option>
                              {profGuerreiro.filter(item => item !== props.proficiencia2).map(item => <option key={item}>{item}</option>)}
                        </select>
                        <select onChange={event => props.setprof2(event)}>
                              <option value="" key={''}>Escolha sua segunda proficiência</option>
                              {profGuerreiro.filter(item => item !== props.proficiencia1).map(item => <option key={item}>{item}</option>)}
                        </select>
                  </div>

                  {/* Ladino */}

                  <div id='Ladino' style={props.classe === 'Ladino' ? { display: 'inline' } : null}>
                        <select onChange={event => props.setprof1(event)}>
                              <option value="" key={''}>Escolha sua primeira proficiência</option>
                              {profLadino.filter(item => item !== props.proficiencia2 && item !== props.proficiencia3 && item !== props.proficiencia4).map(item => <option key={item}>{item}</option>)}
                        </select>
                        <select onChange={event => props.setprof2(event)}>
                              <option value="" key={''}>Escolha sua segunda proficiência</option>
                              {profLadino.filter(item => item !== props.proficiencia1 && item !== props.proficiencia3 && item !== props.proficiencia4).map(item => <option key={item}>{item}</option>)}
                        </select>
                        <select onChange={event => props.setprof3(event)}>
                              <option value="" key={''}>Escolha sua terceira proficiência</option>
                              {profLadino.filter(item => item !== props.proficiencia1 && item !== props.proficiencia2 && item !== props.proficiencia4).map(item => <option key={item}>{item}</option>)}
                        </select>
                        <select onChange={event => props.setprof4(event)}>
                              <option value="" key={''}>Escolha sua terceira proficiência</option>
                              {profLadino.filter(item => item !== props.proficiencia1 && item !== props.proficiencia2 && item !== props.proficiencia3).map(item => <option key={item}>{item}</option>)}
                        </select>
                  </div>

                  {/* Mago */}

                  <div id='Mago' style={props.classe === 'Mago' ? { display: 'inline' } : null}>
                        <select onChange={event => props.setprof1(event)}>
                              <option value="" key={''}>Escolha sua primeira proficiência</option>
                              {profMago.filter(item => item !== props.proficiencia2).map(item => <option key={item}>{item}</option>)}
                        </select>
                        <select onChange={event => props.setprof2(event)}>
                              <option value="" key={''}>Escolha sua segunda proficiência</option>
                              {profMago.filter(item => item !== props.proficiencia1).map(item => <option key={item}>{item}</option>)}
                        </select>
                  </div>

                  {/* Monge */}

                  <div id='Monge' style={props.classe === 'Monge' ? { display: 'inline' } : null}>
                        <select onChange={event => props.setprof1(event)}>
                              <option value="" key={''}>Escolha sua primeira proficiência</option>
                              {profMonge.filter(item => item !== props.proficiencia2).map(item => <option key={item}>{item}</option>)}
                        </select>
                        <select onChange={event => props.setprof2(event)}>
                              <option value="" key={''}>Escolha sua segunda proficiência</option>
                              {profMonge.filter(item => item !== props.proficiencia1).map(item => <option key={item}>{item}</option>)}
                        </select>
                  </div>

                  {/* Paladino */}

                  <div id='Paladino' style={props.classe === 'Paladino' ? { display: 'inline' } : null}>
                        <select onChange={event => props.setprof1(event)}>
                              <option value="" key={''}>Escolha sua primeira proficiência</option>
                              {profPaladino.filter(item => item !== props.proficiencia2).map(item => <option key={item}>{item}</option>)}
                        </select>
                        <select onChange={event => props.setprof2(event)}>
                              <option value="" key={''}>Escolha sua segunda proficiência</option>
                              {profPaladino.filter(item => item !== props.proficiencia1).map(item => <option key={item}>{item}</option>)}
                        </select>
                  </div>

                  {/* Patrulheiro */}

                  <div id='Patrulheiro' style={props.classe === 'Patrulheiro' ? { display: 'inline' } : null}>
                        <select onChange={event => props.setprof1(event)}>
                              <option value="" key={''}>Escolha sua primeira proficiência</option>
                              {profPatrulheiro.filter(item => item !== props.proficiencia2 && item !== props.proficiencia3).map(item => <option key={item}>{item}</option>)}
                        </select>
                        <select onChange={event => props.setprof2(event)}>
                              <option value="" key={''}>Escolha sua segunda proficiência</option>
                              {profPatrulheiro.filter(item => item !== props.proficiencia1 && item !== props.proficiencia3).map(item => <option key={item}>{item}</option>)}
                        </select>
                        <select onChange={event => props.setprof3(event)}>
                              <option value="" key={''}>Escolha sua terceira proficiência</option>
                              {profPatrulheiro.filter(item => item !== props.proficiencia1 && item !== props.proficiencia2).map(item => <option key={item}>{item}</option>)}
                        </select>
                  </div>

            </section>
      )
}

export default Proficiência