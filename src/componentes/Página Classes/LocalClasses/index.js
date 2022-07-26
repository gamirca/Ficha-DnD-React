import { useEffect } from 'react'



const LocalClasses = (props) => {

      return (

            useEffect(() => {
                  localStorage.setItem('classe', JSON.stringify(props.classe))
            }, [props.classe]),

            useEffect(() => {
                  localStorage.setItem('proficiencia1', JSON.stringify(props.proficiencia1))
            }, [props.proficiencia1]),

            useEffect(() => {
                  localStorage.setItem('proficiencia2', JSON.stringify(props.proficiencia2))
            }, [props.proficiencia2]),

            useEffect(() => {
                  localStorage.setItem('proficiencia3', JSON.stringify(props.proficiencia3))
            }, [props.proficiencia3]),

            useEffect(() => {
                  localStorage.setItem('proficiencia4', JSON.stringify(props.proficiencia4))
            }, [props.proficiencia4])

      )
}

export default LocalClasses