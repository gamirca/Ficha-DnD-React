import "./raças.css";

const SelectRaças = (props) => {
      return (
            <div className='SelectRaças'>

                  <label>{props.label}</label>

                  <select onChange={event => props.resumoRaça(event)}>
                        <option value="">Selecione sua raça</option>
                        {props.itens.map(item => <option key={item}>{item}</option>)}

                  </select>
            </div>
      )
}



export default SelectRaças