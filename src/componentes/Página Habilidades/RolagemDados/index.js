import './rolagem.css'

const RolagemDados = (props) => {

      return (
            <section>
                  <div className='dado'>{Math.floor(Math.random() * 6) + 1}</div>
            </section>
      )
}
export default RolagemDados