import "./subraças.css";

const SubRaças = (props) => {
      return (
            <div>
                  <select id="subAnão"
                        style={props.selectRaça == 'Anão' ? { display: 'inline' } : null}
                        onChange={event => props.resumoSub(event)}
                  >
                        <option value="">Selecione sua subraça</option>
                        {props.SubAnão.map(item => <option key={item}>{item}</option>)}
                  </select>

                  <select id="subElfo"
                        style={props.selectRaça == 'Elfo' ? { display: 'inline' } : null}
                        onChange={event => props.resumoSub(event)}
                  >
                        <option value="">Selecione sua subraça</option>
                        {props.SubElfo.map(item => <option key={item}>{item}</option>)}
                  </select>

                  <select id="subHalfling"
                        style={props.selectRaça == 'Halfling' ? { display: 'inline' } : null}
                        onChange={event => props.resumoSub(event)}
                  >
                        <option value="">Selecione sua subraça</option>
                        {props.SubHalfling.map(item => <option key={item}>{item}</option>)}
                  </select>

                  <select id="subGnomo"
                        style={props.selectRaça == 'Gnomo' ? { display: 'inline' } : null}
                        onChange={event => props.resumoSub(event)}
                  >
                        <option value="">Selecione sua subraça</option>
                        {props.SubGnomo.map(item => <option key={item}>{item}</option>)}
                  </select>
            </div>
      )
}

export default SubRaças