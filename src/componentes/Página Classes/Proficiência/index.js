import './proficiencia.css'

const Proficiência = (props) => {



      const profBarbaro = ['Adestrar Animais', 'Atletismo', 'Intimidação', 'Natureza', 'Percepção', 'Sobrevivência']
      const profBardo = ['Atletismo', 'Acrobacia', 'Furtividade', 'Prestidigitação', 'Arcanismo', 'História', 'Investigação', 'Natureza', 'Religião', 'Adestrar Animais', 'Intuição', 'Medicina', 'Percepção', 'Sobrevivência', 'Atuação', 'Enganação', 'Intimidação', 'Persuasão']

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
                        <select id=""></select>
                        <select id=""></select>
                  </div>

                  {/* Clérigo */}

                  <div id='Clérigo' style={props.classe === 'Clérigo' ? { display: 'inline' } : null}>
                        <select id=""></select>
                        <select id=""></select>
                  </div>

                  {/* Druida */}

                  <div id='Druida' style={props.classe === 'Druida' ? { display: 'inline' } : null}>
                        <select id=""></select>
                        <select id=""></select>
                  </div>

                  {/* Feiticeiro */}

                  <div id='Feiticeiro' style={props.classe === 'Feiticeiro' ? { display: 'inline' } : null}>
                        <select id=""></select>
                        <select id=""></select>
                  </div>

                  {/* Guerreiro */}

                  <div id='Guerreiro' style={props.classe === 'Guerreiro' ? { display: 'inline' } : null}>
                        <select id=""></select>
                        <select id=""></select>
                  </div>

                  {/* Ladino */}

                  <div id='Ladino' style={props.classe === 'Ladino' ? { display: 'inline' } : null}>
                        <select id=""></select>
                        <select id=""></select>
                  </div>

                  {/* Mago */}

                  <div id='Mago' style={props.classe === 'Mago' ? { display: 'inline' } : null}>
                        <select id=""></select>
                        <select id=""></select>
                  </div>

                  {/* Monge */}

                  <div id='Monge' style={props.classe === 'Monge' ? { display: 'inline' } : null}>
                        <select id=""></select>
                        <select id=""></select>
                  </div>

                  {/* Paladino */}

                  <div id='Paladino' style={props.classe === 'Paladino' ? { display: 'inline' } : null}>
                        <select id=""></select>
                        <select id=""></select>
                  </div>

                  {/* Patrulheiro */}

                  <div id='Patrulheiro' style={props.classe === 'Patrulheiro' ? { display: 'inline' } : null}>
                        <select id=""></select>
                        <select id=""></select>
                  </div>

            </section>
      )
}

export default Proficiência