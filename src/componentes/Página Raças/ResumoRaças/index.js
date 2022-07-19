import './resumo.css';

const ResumoRaças = (props) => {
      return (
            <section className='ResumoRaças'>
                  <div id='Anão'
                        style={props.resumoRace == 'Anão' ? { height: 'fit-content' } : null}
                  >
                        <p> Reinos ricos de antiga grandeza, salões esculpidos nas
                              raízes das montanhas, o eco de picaretas e martelos nas
                              minas profundas e nas forjas ardentes, um compromisso
                              com o clã e a tradição, e um ódio impetuoso contra goblins
                              e orcs – essas linhas comuns unem todos os anões. </p>
                  </div>
                  <div id='Elfo'
                        style={props.resumoRace == 'Elfo' ? { height: 'fit-content' } : null}
                  >
                        <p>Elfos são um povo mágico de graça sobrenatural, vivendo
                              no mundo sem pertencer inteiramente à ele. Eles vivem
                              em lugares de beleza etérea, no meio de antigas florestas
                              ou em torres prateadas brilhando com luz feérica, onde
                              uma música suave ecoa através do ar e fragrâncias
                              suaves flutuam na brisa. Elfos amam a natureza e a
                              magia, a arte e o estudo, a música e a poesia, e as coisas
                              boas do mundo.</p>
                  </div>
                  <div id='Halfling'
                        style={props.resumoRace == 'Halfling' ? { height: 'fit-content' } : null}
                  >
                        <p>Os confortos de um lar são os objetivos da maioria dos
                              halflings: um lugar para viver em paz e sossego, longe de
                              monstros saqueadores e embates de exércitos, com um
                              fogo aceso e uma refeição generosa, e também uma bebida
                              fina e boa conversa. Embora alguns halflings vivam seus
                              dias em remotas comunidades agrícolas, outros formam
                              bandos nômades que viajam constantemente, atraídos
                              pela estrada afora e o vasto horizonte para descobrir as
                              maravilhas de novas terras e povos. Mas mesmo esses
                              halflings andarilhos amam a paz, a comida, uma lareira e
                              um lar, mesmo que o lar seja em uma carruagem,
                              empurrada ao longo de uma estrada de terra, ou uma
                              balsa flutuando rio abaixo.</p>
                  </div>
                  <div id='Humano'
                        style={props.resumoRace == 'Humano' ? { height: 'fit-content' } : null}
                  >
                        <p>
                              <b>+1 em cada habilidade</b>
                              <br />
                              Nos confins da maioria dos mundos, os humanos são a
                              mais jovem das raças comuns, chegando mais tarde no
                              cenário mundial e com uma vida curta, se comparados aos
                              anões, elfos e dragões. Talvez seja por causa de suas vidas
                              mais curtas que eles se esforcem para alcançar o máximo
                              que podem nos anos que têm. Ou talvez eles sintam que
                              têm algo a provar às raças mais antigas, e é por esta
                              razão que eles constroem seus poderosos impérios através
                              da conquista e do comércio. O que quer que os motive, os
                              humanos são os inovadores, os realizadores e os pioneiros
                              dos mundos. </p>
                  </div>
                  <div id='Draconato'
                        style={props.resumoRace == 'Draconato' ? { height: 'fit-content' } : null}
                  >
                        <p>
                              <b>+2 em Força e +1 em Carisma</b>
                              <br />
                              Descendentes de dragões, como seus nomes
                              demonstram, os draconatos andam orgulhosamente pelo
                              mundo que os saúda com um temor incompreensível.
                              Moldados por deuses dracônicos ou pelos próprios
                              dragões, draconatos originalmente nasceram de ovos de
                              dragão como uma raça única, combinando os melhores
                              atributos de dragões e humanos. Alguns draconatos são
                              servos fieis de dragões verdadeiros, outros formas as
                              fileiras de soldados em grandes guerras e ainda existem
                              os que encontram-se à toa, sem um objetivo claro na vida.
                        </p>
                  </div>
                  <div id='Gnomo'
                        style={props.resumoRace == 'Gnomo' ? { height: 'fit-content' } : null}
                  >
                        <p>Um zumbido constante de atividades permeia a
                              vizinhança onde os gnomos formam suas comunidades
                              privadas. Barulhos estrondosos pontuam o zumbido: um
                              tilintar de engrenagens moendo aqui, uma pequena
                              explosão ali, um grito de surpresa ou comemoração e,
                              principalmente, muitas gargalhadas. Gnomos regozijam a
                              vida, apreciando cada momento de invento, exploração,
                              investigação, criação e brincadeira. </p>
                  </div>
                  <div id='Meio-Elfo'
                        style={props.resumoRace == 'Meio-Elfo' ? { height: 'fit-content' } : null}
                  >
                        <p>
                              <b>+2 em Carisma e +1 em duas habilidades à sua escolha</b>
                              <br />
                              Vagando entre dois mundos mas, na verdade, não
                              pertencendo a nenhum dos dois, meio-elfos combinam o
                              que alguns dizem ser as melhores qualidades dos seus
                              parentes elfos e humanos: a curiosidade, inventividade e
                              ambição humanas temperadas pelos sensos refinados,
                              amor a natureza e gostos artísticos dos elfos. Alguns
                              meio-elfos vivem entre os humanos, separados por suas
                              diferenças emocionais e físicas, vendo seus amigos e
                              amores envelhecer enquanto o tempo malmente os toca.
                              Outros vivem entre os elfos, crescendo impacientes à
                              medida que atingem a maturidade nos reinos élficos
                              intermináveis, enquanto seus amigos continuam a viver
                              como crianças. Muitos meio-elfos, incapazes de se
                              encaixar em nenhuma dessas sociedades, escolhem uma
                              vida solitária, vagando ou se juntando a outros
                              desafortunados e adentrando uma vida de aventura.</p>
                  </div>
                  <div id='Meio-Orc'
                        style={props.resumoRace == 'Meio-Orc' ? { height: 'fit-content' } : null}
                  >
                        <p>
                              <b>+2 em Força e +1 em Constituição</b>
                              <br />
                              Quer estejam unidos sob a liderança de um poderoso
                              bruxo ou estejam lutando por um impasse após anos de
                              conflito, tribos orcs e humanas as vezes formam alianças,
                              unindo forças em uma vasta horda para o pavor das
                              terras civilizadas próximas. Quando essas alianças são
                              seladas através do casamento, os meio-orcs nascem.
                              Alguns meio-orcs crescem e se tornam orgulhosos
                              comandantes de tribos orcs, seu sangue humano
                              concedem a eles um diferencial perante seus rivais orcs
                              de sangue puro. Alguns arriscam sair pelo mundo para
                              provar seu valor entre os humanos e outras raças mais
                              civilizadas. Muitos desses se tornam aventureiros,
                              adquirindo renome pelos seus poderosos feitos e
                              notoriedade por seus costumes bárbaros e fúria selvagem.</p>
                  </div>
                  <div id='Tiefling'
                        style={props.resumoRace == 'Tiefling' ? { height: 'fit-content' } : null}
                  >
                        <p>
                              <b>+1 em Inteligência e +2 em Carisma</b>
                              <br />
                              Ser recebido com olhares e cochichos, sofrer violência e
                              insultos nas ruas, ver a desconfiança e medo em cada
                              olhar: esse é o fardo do tiefling. E para completar tudo, os
                              tieflings sabem que isso é graças ao pacto feito gerações
                              atrás que infundiu a essência de Asmodeus – senhor
                              supremo dos Nove Infernos – em sua linhagem. Sua
                              aparência e natureza não é culpa deles, mas é o resultado
                              de um pecado ancestral, pelo qual eles, seus filhos e os
                              filhos de seus filhos serão eternamente responsabilizados.
                        </p>
                  </div>

            </section >


      )
}

export default ResumoRaças