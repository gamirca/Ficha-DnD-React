import './SelectClasses.css'

const SelectClasses = (props) => {

      return (
            <select onChange={event => props.resumoClasse(event)}>
                  <option value="">Escolha sua classe</option>
                  {props.classes.map(item => <option key={item}>{item}</option>)}
            </select>
      )

}

export default SelectClasses