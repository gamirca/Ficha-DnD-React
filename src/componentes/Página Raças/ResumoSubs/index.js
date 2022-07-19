import './resumosubs.css'

const ResumoSubs = (props) => {

      return (
            <div className='subs'>

                  <div id='AnãoColina' style={props.subRaça == 'Anão da Colina' && props.raça == 'Anão' ? { height: 'fit-content' } : null}>
                        <p>
                              <b>+2 em Constituição e +1 em Sabedoria</b>
                              <br />
                              Como um anão da colina, você tem sentidos aguçados,
                              maior intuição e notável resiliência. Os anões dourados de
                              Faerûn, que vivem em seu poderoso reino ao sul do
                              continente, são anões da colina, assim como os exilados
                              Neidar e os depreciáveis Klar de Krynn, no cenário de
                              Dragonlance. </p>
                  </div>
                  <div id='AnãoMontanha' style={props.subRaça == 'Anão da Montanha' && props.raça == 'Anão' ? { height: 'fit-content' } : null}>
                        <p>
                              <b>+2 em Constituição e +2 em Força</b>
                              <br />
                              Como um anão da montanha, você é forte e resistente,
                              acostumados a uma vida difícil em terrenos difíceis. Você,
                              provavelmente tem a descendência daqueles mais altos
                              (para um anão) e tende a possuir uma coloração mais
                              clara. Os anões do escudo do norte de Faerûn, bem como o
                              clã governante Hylar e os clãs nobres Daewar de
                              Dragonlance, são anões da montanha. </p>
                  </div>

                  <div id='AltoElfo' style={props.subRaça == 'Alto Elfo' && props.raça == 'Elfo' ? { height: 'fit-content' } : null}>
                        <p>
                              <b>+2 em Destreza e +1 em Inteligência</b>
                              <br />
                              Como alto elfo, você possui uma mente afiada e um
                              domínio da magia básico. Em muitos dos mundos de
                              D&D, existem dois tipos de altos elfos. Um tipo (que
                              inclui os elfos cinzentos e elfos do vale de Greyhawk, os
                              Silvanesti de Dragonlance, e os elfos do sol dos
                              Reinos Esquecidos) são arrogantes e reclusos,
                              acreditando serem superiores aos não elfos e até
                              mesmo a outros elfos. O outro tipo (como os altos
                              elfos de Greyhawk, os Qualinesti de Dragonlance
                              e os elfos da lua dos Reinos Esquecidos) são
                              mais comuns e amigáveis, e muitas vezes
                              encontrados entre humanos e outras raças.
                              Os elfos do sol de Faerûn (também chamado de elfos
                              dourados ou elfos do amanhecer) têm pele bronzeada e
                              cabelos cor de cobre, negros ou louro dourado. Seus
                              olhos são dourados, prateados ou negros. Os elfos da
                              lua (também chamados de elfos de prata ou elfos
                              cinzentos) são muito mais pálidos, com pele de
                              alabastro por vezes tingida de azul. Normalmente, eles
                              têm cabelos de um branco prateado, negros ou azuis,
                              diversos tons de loiro, castanho e vermelho não são
                              incomuns. Seus olhos são azuis ou verdes com manchas
                              douradas. </p>
                  </div>
                  <div id='ElfoFloresta' style={props.subRaça == 'Elfo da Floresta' && props.raça == 'Elfo' ? { height: 'fit-content' } : null}>
                        <p>
                              <b>+2 em Destreza e +1 em Sabedoria</b>
                              <br />
                              Como um elfo da floresta, você possui sentidos e intuição
                              aguçados, seus pés ágeis guiam-no rápida e furtivamente
                              através de suas florestas nativas. Essa categoria inclui os
                              elfos selvagens (grugach) de Greyhawk e os Kagonesti de
                              Dragonlance, bem como as raças chamadas de elfos da
                              floresta em Greyhawk e nos Reinos Esquecidos. Em
                              Faerûn, os elfos da floresta (também chamados de elfos
                              selvagens, elfos verdes ou elfos do bosque) são reclusos e
                              desconfiados dos não elfos.
                              A pele dos elfos da floresta tende a ser de matiz
                              cobreada, algumas vezes com traços esverdeados. Seu
                              cabelo geralmente é castanho ou negro, mas
                              ocasionalmente podem ser loiros ou cor de cobre. Seus
                              olhos são verdes, castanhos ou cor de avelã. </p>
                  </div>
                  <div id='ElfoNegro' style={props.subRaça == 'Elfo Negro' && props.raça == 'Elfo' ? { height: 'fit-content' } : null}>
                        <p>
                              <b>+2 em Destreza e +1 em Carisma</b>
                              <br />
                              Descendentes de uma antiga sub-raça de elfos de pele
                              negra, os drow foram banidos da superfície do mundo por
                              seguirem a deusa Lolth pelo caminho do mal e corrupção.
                              Agora, eles construíram sua própria civilização nas
                              profundezas do Subterrâneo, moldados pelo Caminho de
                              Lolth. Também conhecidos como elfos negros, os drow
                              possuem pele negra similar a obsidiana polida e cabelos
                              brancos opacos ou amarelo pálido. Normalmente eles
                              possuem olhos muito pálidos (tão pálidos que são
                              confundidos com olhos brancos) com tons de lilás, prata,
                              rosa, vermelho e azul. Eles costumam ser menores e mais
                              magros que a maioria dos elfos.
                              Aventureiros drow são raros e a raça não existe em
                              todo o mundo. Verifique com seu Mestre se a raça drow
                              está disponível como personagem de jogador.</p>
                  </div>

                  <div id='PésLeves' style={props.subRaça == 'Pés Leves' && props.raça == 'Halfling' ? { height: 'fit-content' } : null}>
                        <p>
                              <b>+2 em Destreza e +1 em Carisma</b>
                              <br />
                              Como um halfling pés-leves, você pode esconder-se
                              facilmente, mesmo usando apenas outras pessoas como
                              cobertura. Você geralmente é afável e se dá muito bem
                              com os outros. Nos Reinos Esquecidos, os halflings pésleves espalharam-se até os lugares mais distantes e são a
                              variedade mais comum.
                              Pés-leves são mais propensos à vontade de viajar do
                              que os outros halflings, e muitas vezes vivem ao lado de
                              outras raças ou levam uma vida nômade. No mundo de
                              Greyhawk, estes halflings são chamados pés-peludos ou
                              companheiros altos. </p>
                  </div>
                  <div id='Robusto' style={props.subRaça == 'Robusto' && props.raça == 'Halfling' ? { height: 'fit-content' } : null}>
                        <p>
                              <b>+2 em Destreza e +1 em Constituição</b>
                              <br />
                              Um halfling robustos é mais resistente do que a média de
                              sua raça e possui certa resistência aos venenos. Alguns
                              dizem que os robustos têm sangue dos anões. Nos Reinos
                              Esquecidos, esses halflings são chamados de austeros, e
                              são mais comuns no sul. </p>
                  </div>

                  <div id='GnomoFloresta' style={props.subRaça == 'Gnomo da Floresta' && props.raça == 'Gnomo' ? { height: 'fit-content' } : null}>
                        <p>
                              <b>+2 em Inteligência e +1 em Destreza</b>
                              <br />
                              Como um gnomo da floresta, você possui um traquejo
                              natural com ilusões e velocidade e furtividade naturais.
                              Nos mundos de D&D, gnomos da floresta são raros e
                              reservados. Eles vivem em comunidades escondidas em
                              florestas silvestres, usando suas ilusões e truques para se
                              esconderem das ameaças ou para mascarar sua fuga
                              antes de serem detectados. Gnomos da floresta tendem a
                              ser amigáveis com outros povos da floresta espirituosos e
                              eles tem nos elfos e fadas bondosas como seus mais
                              importantes aliados. Eles gnomos também fazem amizade
                              com pequenos animais silvestres e contam com eles para
                              obter informações sobre ameaças que estejam
                              perambulando por suas terras.</p>
                  </div>
                  <div id='GnomoRochas' style={props.subRaça == 'Gnomo das Rochas' && props.raça == 'Gnomo' ? { height: 'fit-content' } : null}>
                        <p>
                              <b>+2 em Inteligência e +1 em Constituição</b>
                              <br />
                              Como um gnomo das rochas, você possui uma
                              inventividade e resistência naturais acima dos outros
                              gnomos. A maioria dos gnomos nos mundos de D&D são
                              gnomos das rochas, incluindo os gnomos engenhoqueiros
                              do cenário de Dragonlance.</p>
                  </div>
            </div >
      )
}

export default ResumoSubs