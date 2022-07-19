import './resumoclasses.css'

const ResumoClasses = (props) => {

      return (
            <section className='resumoClasse'>
                  <div id='bárbaro'
                        style={props.classe == 'Bárbaro' ? { height: 'fit-content' } : null}
                  >
                        <p> Um humano alto membro de alguma tribo caminha em
                              meio a uma nevasca, coberto por peles e empunhando seu
                              machado. Ele gargalha à medida que avança em direção
                              do gigante do gelo que ousou caçar os alces que o seu povo
                              arrebanhava.
                              <br />
                              Uma meio-orc rosna para o último que ousou desafiar
                              sua autoridade sobre a tribo selvagem, pronta para
                              quebrar seu pescoço com suas mãos nuas da mesma
                              forma que ela fez com os outros seis rivais anteriores.
                              Espumando pela boca, um anão bate com seu elmo na
                              cara de um inimigo drow, depois dirige seu cotovelo
                              armadurado na direção do estômago de outro.
                              <br />
                              Esses bárbaros, diferentes da forma que conseguem,
                              são definidos por sua fúria: desenfreada, inextinguível e
                              irracional fúria. Mais que uma mera emoção, sua raiva é
                              a ferocidade de um predador acuado, o assalto implacável
                              de uma tempestade, a turbulência agitada do mar.
                              <br />
                              Para alguns, suas fúrias emerge da comunhão com
                              ferozes espíritos animais. Outras provem de um
                              reservatório turvo de raiva de um mundo cheio de dor.
                              Para cada bárbaro, a fúria é um poder que preenche não
                              apenas o frenesi de batalha, mas também reflexos,
                              resiliência e proezas de força incríveis.
                        </p>
                  </div>
                  <div id='bardo'
                        style={props.classe == 'Bardo' ? { height: 'fit-content' } : null}
                  >
                        <p>
                              Cantarolando enquanto entrelaça os seus dedos
                              em volta de um monumento antigo em uma ruina
                              a muito esquecida, uma meio-elfa vestida em couros
                              gastos encontra o conhecimento que brota de sua
                              mente, conjurado através da magia de sua música
                              –
                              conhecimento do povo que construiu o monumento
                              e a saga mística é descrita.
                              <br />
                              Um austero guerreiro humano bate sua espada
                              ritmicamente contra sua brunea, ditando o andamento
                              do seu canto de guerra e exortando bravura e heroísmo
                              em seus companheiros. A magia da sua canção os
                              fortalece e encoraja.
                              <br />
                              Gargalhando enquanto entoa sua citara, uma
                              gnoma tece sua sutil magia sobre os nobres reunidos,
                              garantindo que as palavras dos seus companheiros
                              serão bem recebidas.
                              <br />
                              Não importa se um escolar, escaldo ou malandro,
                              o bardo tece sua magia através de palavras e
                              música para inspirar aliados, desmoralizar
                              oponentes, manipular mentes, criar ilusões e,
                              até mesmo, curar ferimentos.
                        </p>
                  </div>
                  <div id='bruxo'
                        style={props.classe == 'Bruxo' ? { height: 'fit-content' } : null}
                  >
                        <p>
                              Com um pseudodragão enrolado em seu ombro, um jovem
                              elfo vestindo robes dourados sorri calorosamente, tecendo
                              um charme mágico através de suas doces palavras e
                              dobrando a sentinela do palácio como deseja.
                              <br />
                              A medida que chamas ganham vida em suas mãos, um
                              mirrado humanos sussurra o nome secreto do seu patrono
                              demoníaco, infundindo sua magia com poder abissal.
                              <br />
                              Olhando, ora para um tomo surrado, ora para o
                              alinhamento incomum das estrelas acima, um tiefling de
                              olhos selvagens profere o ritual místico que abrirá uma
                              passagem para um mundo distante.
                              <br />
                              Os bruxos são desbravadores do conhecimento que
                              existe escondido no tecido do multiverso. Através de
                              pactos feitos com seres misteriosos detentores de poder
                              sobrenatural, os bruxos desbloqueiam efeitos mágicos tão
                              sutis quanto espetaculares. Extraindo o conhecimento
                              antigo de seres como nobres fadas, demônios, diabos,
                              bruxas e entidades alienígenas do Reino Distante, os
                              bruxos remontam segredos arcanos para aprimorar seus
                              próprios poderes.
                        </p>
                  </div>
                  <div id='clérigo'
                        style={props.classe == 'Clérigo' ? { height: 'fit-content' } : null}
                  >
                        <p>
                              Os braços e olhos erguem-se na direção do sol e com uma
                              prece em seus lábios, um elfo começa a brilhar com luz
                              própria, que irradia para curar seus surrados
                              companheiros em batalha.
                              <br />
                              Com um cântico de batalha, um anão golpeia com seu
                              machado por todos os lados, abrindo caminho em meio às
                              linhas de orcs posicionadas contra ele, louvando os deuses
                              por cada inimigo derrubado.
                              <br />
                              Invocando maldições contra as forças de mortos-vivos,
                              um humano levanta seu símbolo sagrado enquanto a luz
                              divina brilha ao seu redor, banindo as criaturas que há
                              um momento atrás se amontoavam sobre seus
                              companheiros.
                              <br />
                              Clérigos são intermediadores entre o mundo mortal e o
                              distante plano dos deuses. Tão variados quanto os deuses
                              que servem, clérigos se esforçam para ser a própria mão
                              de seus deuses. Não é apenas um sacerdote comum, mas
                              alguém investido de poder divino.
                        </p>
                  </div>
                  <div id='druida'
                        style={props.classe == 'Druida' ? { height: 'fit-content' } : null}
                  >
                        <p>
                              Erguendo um cajado retorcido envolto em azevinho, uma
                              elfa invoca a fúria da tempestade e convoca raios
                              explosivos de eletricidade para destruir os orcs
                              carregando tochas que ameaçam sua floresta.
                              <br />
                              Se esgueirando, fora da vista, no alto da copa das
                              árvores na forma de um leopardo, um humano espreita
                              para fora da selva, em direção da estranha construção de
                              um Templo do Elemental do Ar Maligno, mantendo os
                              olhos fixos nas atividades dos cultistas.
                              <br />
                              Brandindo uma lâmina feita de puro fogo, um meioelfo investe em direção a uma massa de soldados
                              esqueléticos, destruindo a magia sobrenatural que deu as
                              tolas criaturas o semblante falso de vida.
                              <br />
                              Quer seja convocando as forças elementais da
                              natureza, ou emulando as criaturas do mundo animal, os
                              druidas são encarnações da resistência, astúcia e fúria da
                              natureza. Eles não se consideram donos da natureza. Ao
                              invés disso, eles se veem como extensões da vontade
                              indomável da natureza.
                        </p>
                  </div>
                  <div id='feiticeiro'
                        style={props.classe == 'Feiticeiro' ? { height: 'fit-content' } : null}
                  >
                        Com olhos brilhando dourado, uma
                        humana estica suas mãos e libera o fogo
                        dracônico que queima em suas veias. A
                        medida que um inferno consome seus
                        oponentes, asas de couro surgem nas suas
                        costas e ela ergue-se no ar.
                        <br />
                        Os longos cabelos balançam com a conjuração
                        do vento, um meio elfo abre seus braços totalmente
                        e joga a cabeça para trás. Erguendo-o
                        momentaneamente do chão, uma onda de magia
                        surge sobre ele, por meio dele e, fora dele, uma
                        poderosa explosão de relâmpago.
                        <br />
                        Esgueirando-se atrás de uma estalagmite, uma
                        halfling aponta seu dedo em um troglodita em investida.
                        Uma explosão de chamas é liberada através do seu dedo e
                        atinge a criatura. Ela toma cobertura atrás da formação
                        rochosa com um sorriso, sem saber que sua magia
                        selvagem deixou sua pele com um brilho azulado.
                        <br />
                        Os feiticeiros carregam um patrimônio mágico
                        conferido a eles por uma linhagem exótica, alguma
                        influência de outro mundo ou exposição a forças cósmicas
                        desconhecidas. Não é possível estudar feitiçaria como se
                        aprende um idioma, assim como não se aprende a viver
                        uma vida lendária. Ninguém escolhe a feitiçaria: os
                        poderes escolhem o feiticeiro.
                  </div>
                  <div id='guerreiro'
                        style={props.classe == 'Guerreiro' ? { height: 'fit-content' } : null}
                  >
                        <p>
                              Uma humana em sua armadura de placas empunha seu
                              escudo antes de ir ao encontro de um bando de goblins.
                              Um elfo atrás dela, em seu corselete de couro batido,
                              salpica os goblins com flechas atiradas de seu primoroso
                              arco. O meio-orc próximo, dá ordens visando coordenar os
                              ataques dos dois combatentes para obter a melhor
                              vantagem.
                              <br />
                              Um anão em sua cota de malha coloca seu escudo
                              entre à clava de um ogro e seu companheiro, direcionando
                              o ataque mortal para o outro lado. Seu companheiro, um
                              meio-elfo em sua brunea, brande suas duas cimitarras em
                              um turbilhão de golpes, rodeando o ogro a procura de um
                              ponto fraco em suas defesas.
                              <br />
                              Um gladiador luta por esporte em uma arena, um
                              mestre com seu tridente e rede, hábil em prender os
                              inimigos e arrastá-los para delírio da plateia – e sua
                              própria vantagem tática. A espada de seu oponente
                              lampeja com um brilho azul um instante antes de um
                              relâmpago atingi-lo pelas costas.
                              <br />
                              Todos esses heróis são guerreiros, talvez a mais
                              diversificada classe de personagens nos mundos de
                              DUNGEONS & DRAGONS. Cavaleiros em missões, lordes
                              conquistadores, campeões reais, infantaria de elite,
                              mercenários rígidos e bandidos reis, como guerreiros, eles
                              compartilham de uma maestria com armas e armaduras
                              sem precedentes, bem como um vasto conhecimento e
                              habilidades em combate. E eles estão bem familiarizados
                              com a morte, seja simplesmente conhecendo-a ou
                              desafiando-a cara a cara.
                        </p>
                  </div>
                  <div id='ladino'
                        style={props.classe == 'Ladino' ? { height: 'fit-content' } : null}
                  >
                        <p>
                              Sinalizando para seus companheiros esperarem, uma
                              halfling esgueira-se à frente pelo corredor da masmorra.
                              Ela encosta seus ouvidos na porta, puxa suas ferramentas
                              e abre a fechadura em um piscar de olhos. Ela então
                              desaparece nas sombras, ao mesmo tempo em que seu
                              companheiro guerreiro se move para abrir a porta com
                              um chute.
                              <br />
                              Uma humana espreita nas sombras de um beco,
                              enquanto seu cúmplice se prepara para a parte dele na
                              emboscada. Quando seu alvo – um notório traficante de
                              escravos – passa pelo beco, seu cúmplice grita, o
                              traficante de escravos vem investigar e a lâmina da
                              assassina corta sua garganta antes mesmo dele ser capaz
                              de emitir qualquer som.
                              <br />
                              Disfarçando uma risadinha, uma gnoma agita seus
                              dedos e magicamente surrupia o molho de chaves do cinto
                              do guarda. No momento seguinte, as chaves estão em
                              suas mãos, a porta da cela está aberta e ela e seus
                              companheiros estão livres para escapar.
                              <br />
                              Ladinos contam com sua perícia, furtividade e as
                              vulnerabilidades de seus inimigos para obter vantagem
                              em qualquer situação. Eles possuem uma habilidade
                              especial para encontrar a solução para praticamente
                              qualquer problema, demonstrando desenvoltura e
                              versatilidade, a chave de qualquer grupo aventureiro de
                              sucesso.
                        </p>
                  </div>
                  <div id='mago'
                        style={props.classe == 'Mago' ? { height: 'fit-content' } : null}
                  >
                        <p>Vestida com uma túnica prata que denota seu posto,
                              uma elfa fecha seus olhos para distanciar-se das
                              distrações do campo de batalha e entoa o seu canto
                              sereno. Dedos se agitam à sua frente, ela completa sua
                              magia e lança uma pequena centelha de fogo em direção
                              dos inimigos, explodindo em chamas o incêndio que
                              engolfa os soldados.
                              <br />
                              Verificando mais de uma vez o seu trabalho, um
                              humano inscreve um círculo mágico com giz no chão de
                              pedra, então espalha pó de ferro ao longo de cada linha e
                              curva graciosas. Quando o círculo está completo, ele
                              murmura um longo encantamento. Um buraco se abre no
                              espaço dentro do círculo, trazendo um cheiro de enxofre
                              de outro plano bem distante.
                              <br />
                              Agachado no chão em um cruzamento da masmorra,
                              um gnomo joga um punhado de pequenos ossos com
                              símbolos místicos escritos, murmurando algumas
                              palavras de poder sobre eles. Ele fecha os olhos para
                              receber as visões mais claramente, acena com a cabeça
                              lentamente, então abre os olhos e aponta para baixo,
                              indicando a passagem à sua esquerda.
                              <br />
                              Os magos são usuários de magia soberanos, unidos e
                              definidos como uma classe pelas magias que conjuram.
                              Usufruindo de uma trama sutil de magia que permeia o
                              cosmos, os magos conjuram magias explosivas de fogo,
                              arcos de relâmpagos, enganos sutis e controle de mentes
                              de força bruta. Sua magia invoca monstros de outros
                              planos de existência, vislumbra o futuro ou transforma
                              inimigos mortos em zumbis. Suas magias mais poderosas
                              podem transformar uma substância em outra, evocar
                              meteoros que caem do céu ou abrir portais para outros
                              mundos.</p>
                  </div>
                  <div id='monge'
                        style={props.classe == 'Monge' ? { height: 'fit-content' } : null}
                  >
                        <p>
                              Seus punhos criam um borrão enquanto defletem uma
                              revoada de flechas que vem vindo, uma meio-elfa corre
                              sobre uma barricada e se arremessa nas maciças fileiras
                              de hobgoblins do outro lado. Ela gira entre eles,
                              distribuindo seus golpes e enviando-os para o chão, até
                              que, finalmente, apenas ela está de pé.
                              <br />
                              Respirando profundamente, um humano coberto por
                              tatuagens toma uma postura de batalha. Quando os
                              primeiro orcs em investida alcançam-no, ele exala e uma
                              rajada de fogo é expelida de sua boca, engolfando seus
                              oponentes.
                              <br />
                              Movendo-se com o silêncio da noite, uma halfling com
                              vestes negras pisa em uma sombra embaixo de um arco e
                              emerge de outra mancha sombria numa sacada a poucos
                              passos de distância. Ela desliza sua lâmina para fora da
                              bainha de panos enrolados e se esgueira através da janela
                              aberto em direção ao príncipe tirano, tão vulnerável no
                              abraço do sono.
                              <br />
                              Qualquer que seja suas disciplinas, os monges partilha
                              de sua habilidade de aproveitar magicamente da energia
                              que flui em seus corpos. Se canalizada como um exibição
                              impressionante de maestria do combate, ou como um foco
                              mais sutil de habilidade defensiva e velocidade, essa
                              energia infunde tudo que um monge faz.
                        </p>
                  </div>
                  <div id='paladino'
                        style={props.classe == 'Paladino' ? { height: 'fit-content' } : null}
                  >
                        <p>
                              Vestido em uma armadura de placas que reluz a luz do
                              sol, a despeito da poeira e sujeira de uma longa viagem,
                              um humano larga sua espada e escudo e coloca suas mãos
                              em um homem fatalmente ferido. Radiação divina brilha
                              de suas mãos, o ferimento do homem se fecha e seus olhos
                              se arregalam com espanto.
                              <br />
                              Um anão se esgueira por detrás de um afloramento,
                              seu manto negro o torna praticamente invisível durante a
                              noite, e observa uma banda de guerra orc celebrando sua
                              recente vitória. Silenciosamente, ele espreita em meio a
                              eles e sussurra seu juramento e dois orcs morrem antes
                              mesmo de perceberem que ele estava ali.
                              <br />
                              Com um cabelo prateado que brilha com um raio de
                              luz que parece iluminar apenas ele, um elfo gargalha com
                              exultação. Sua lança golpeia num piscar, como o dos seus
                              olhos, perfurando de novo e de novo em um gigante
                              contorcendo-se, até que finalmente sua luz supera a
                              escuridão dele.
                              <br />
                              Seja lá quais forem suas origens e suas missões,
                              paladinos são unidos pelos seus juramentos de se
                              imporem contra as forças do mal. Quer seja jurado ante o
                              altar de um deus com um sacerdote como testemunha,
                              quer seja em um clareira sagrada diante dos espíritos da
                              natureza e seres feéricos, ou em um momento de
                              desespero e aflição com os mortos como únicas
                              testemunhas, o juramento de um paladino é um laço
                              poderoso. Ele é uma fonte de poder que transforma um
                              guerreiro devotado em um campeão abençoado.
                        </p>
                  </div>
                  <div id='patrulheiro'
                        style={props.classe == 'Patrulheiro' ? { height: 'fit-content' } : null}
                  >
                        <p>
                              De aparência áspera e
                              selvagem, um humano
                              espreita sozinho através das
                              sombras das árvores, caçando
                              os orcs que ele sabe estarem
                              planejando um assalto a uma
                              fazenda próxima. Segurando
                              uma espada curta em cada mão,
                              ele se transforma em um vendaval
                              de aço, talando um inimigo após o outro.
                              <br />
                              Após se evadir de um cone de ar congelante,
                              uma elfa encontra-se de pé e saca seu arco das costas,
                              disparando uma flecha no dragão branco. Ignorando a
                              onda de medo que emana do dragão, assim como ignorou
                              o frio do seu sopro, ela envia uma flecha após a outro
                              tentando encontrar as brechas entre as espessas escamas
                              do dragão.
                              <br />
                              Erguendo sua mão para o alto, um meio-elfo assobia
                              para o falcão que o circunda acima, chamando o pássaro
                              de volta para o seu lado. Sussurrando instruções em
                              Élfico, ele aponta para o urso-coruja que ele estava
                              rastreando e envia o falcão para distrair a criatura
                              enquanto ele prepara seu arco.
                              <br />
                              Longe do alvoroço das cidades e vilas, passando das
                              divisas que abrigam a fazendas mais longínquas dos
                              horrores do ermo, entre as árvores densas de florestas
                              sem trilhas e através das vastas planícies vazias, os
                              patrulheiros mantem sua vigília interminável.
                        </p>
                  </div>

            </section>
      )

}

export default ResumoClasses