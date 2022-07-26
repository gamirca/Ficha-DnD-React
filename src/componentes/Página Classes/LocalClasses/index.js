import { React, useEffect } from 'react'




const LocalClasses = (props) => {

      const Classe =
            useEffect(() => {
                  localStorage.setItem('classe', JSON.stringify(props.classe))
            }, [props.classe])

      const Prof1 =
            useEffect(() => {
                  localStorage.setItem('proficiencia1', JSON.stringify(props.proficiencia1))
            }, [props.proficiencia1])
      const Prof2 =
            useEffect(() => {
                  localStorage.setItem('proficiencia2', JSON.stringify(props.proficiencia2))
            }, [props.proficiencia2])

      const Prof3 =
            useEffect(() => {
                  localStorage.setItem('proficiencia3', JSON.stringify(props.proficiencia3))
            }, [props.proficiencia3])

      const Prof4 =
            useEffect(() => {
                  localStorage.setItem('proficiencia4', JSON.stringify(props.proficiencia4))
            }, [props.proficiencia4])

      return (
            <section>
                  {Classe, Prof1, Prof2, Prof3, Prof4}
            </section>
      )

}

export default LocalClasses