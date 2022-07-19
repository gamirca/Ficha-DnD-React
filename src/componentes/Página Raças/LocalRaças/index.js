const LocalRaças = (props) => {
      if (props.raça == 'Humano') {
            localStorage.setItem('raça', 'humano')
            localStorage.setItem('força', 1)
            localStorage.setItem('destreza', 1)
            localStorage.setItem('constituição', 1)
            localStorage.setItem('inteligência', 1)
            localStorage.setItem('sabedoria', 1)
            localStorage.setItem('carisma', 1)
      } else if (props.raça == 'Draconato') {
            localStorage.setItem('raça', 'draconato')
            localStorage.setItem('força', 2)
            localStorage.setItem('destreza', 0)
            localStorage.setItem('constituição', 0)
            localStorage.setItem('inteligência', 0)
            localStorage.setItem('sabedoria', 0)
            localStorage.setItem('carisma', 1)
      } else if (props.raça == 'Meio-Elfo') {
            localStorage.setItem('raça', 'meioElfo')
            localStorage.setItem('força', 0)
            localStorage.setItem('destreza', 0)
            localStorage.setItem('constituição', 0)
            localStorage.setItem('inteligência', 0)
            localStorage.setItem('sabedoria', 0)
            localStorage.setItem('carisma', 2)
      } else if (props.raça == 'Meio-Orc') {
            localStorage.setItem('raça', 'meioOrc')
            localStorage.setItem('força', 2)
            localStorage.setItem('destreza', 0)
            localStorage.setItem('constituição', 1)
            localStorage.setItem('inteligência', 0)
            localStorage.setItem('sabedoria', 0)
            localStorage.setItem('carisma', 0)
      } else if (props.raça == 'Tiefling') {
            localStorage.setItem('raça', 'tiefling')
            localStorage.setItem('força', 0)
            localStorage.setItem('destreza', 0)
            localStorage.setItem('constituição', 0)
            localStorage.setItem('inteligência', 1)
            localStorage.setItem('sabedoria', 0)
            localStorage.setItem('carisma', 2)
      }
      //Subraça Anão
      if (props.subRaça == 'Anão da Colina') {
            localStorage.setItem('raça', 'Anão da Colina')
            localStorage.setItem('força', 0)
            localStorage.setItem('destreza', 0)
            localStorage.setItem('constituição', 2)
            localStorage.setItem('inteligência', 0)
            localStorage.setItem('sabedoria', 1)
            localStorage.setItem('carisma', 0)
      } else if (props.subRaça == 'Anão da Montanha') {
            localStorage.setItem('raça', 'Anão da Montanha')
            localStorage.setItem('força', 2)
            localStorage.setItem('destreza', 0)
            localStorage.setItem('constituição', 2)
            localStorage.setItem('inteligência', 0)
            localStorage.setItem('sabedoria', 0)
            localStorage.setItem('carisma', 0)
      }
      //Subraça elfo
      if (props.subRaça == 'Alto Elfo') {
            localStorage.setItem('raça', 'Alto Elfo')
            localStorage.setItem('força', 0)
            localStorage.setItem('destreza', 2)
            localStorage.setItem('constituição', 0)
            localStorage.setItem('inteligência', 1)
            localStorage.setItem('sabedoria', 0)
            localStorage.setItem('carisma', 0)
      } else if (props.subRaça == 'Elfo da Floresta') {
            localStorage.setItem('raça', 'Elfo da Floresta')
            localStorage.setItem('força', 0)
            localStorage.setItem('destreza', 2)
            localStorage.setItem('constituição', 0)
            localStorage.setItem('inteligência', 0)
            localStorage.setItem('sabedoria', 1)
            localStorage.setItem('carisma', 0)
      } else if (props.subRaça == 'Elfo Negro') {
            localStorage.setItem('raça', 'Elfo Negro')
            localStorage.setItem('força', 0)
            localStorage.setItem('destreza', 2)
            localStorage.setItem('constituição', 0)
            localStorage.setItem('inteligência', 0)
            localStorage.setItem('sabedoria', 0)
            localStorage.setItem('carisma', 1)
      }
      //Subraça Halfling
      if (props.subRaça == 'Pés Leves') {
            localStorage.setItem('raça', 'Pés Leves')
            localStorage.setItem('força', 0)
            localStorage.setItem('destreza', 2)
            localStorage.setItem('constituição', 0)
            localStorage.setItem('inteligência', 0)
            localStorage.setItem('sabedoria', 0)
            localStorage.setItem('carisma', 1)
      } else if (props.subRaça == 'Robusto') {
            localStorage.setItem('raça', 'Robusto')
            localStorage.setItem('força', 0)
            localStorage.setItem('destreza', 2)
            localStorage.setItem('constituição', 1)
            localStorage.setItem('inteligência', 0)
            localStorage.setItem('sabedoria', 0)
            localStorage.setItem('carisma', 0)
      }
      //Subraça Gnomo
      if (props.subRaça == 'Gnomo da Floresta') {
            localStorage.setItem('raça', 'Gnomo da Floresta')
            localStorage.setItem('força', 0)
            localStorage.setItem('destreza', 1)
            localStorage.setItem('constituição', 0)
            localStorage.setItem('inteligência', 2)
            localStorage.setItem('sabedoria', 0)
            localStorage.setItem('carisma', 0)
      } else if (props.subRaça == 'Gnomo das Rochas') {
            localStorage.setItem('raça', 'Gnomo das Rochas')
            localStorage.setItem('força', 0)
            localStorage.setItem('destreza', 0)
            localStorage.setItem('constituição', 1)
            localStorage.setItem('inteligência', 2)
            localStorage.setItem('sabedoria', 0)
            localStorage.setItem('carisma', 0)
      }
}

export default LocalRaças