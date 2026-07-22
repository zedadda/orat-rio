/* ===========================================================
   Devocionário — dados
   Fonte única: "Maná ou Alimento da Alma Devota" — orações e
   exercícios piedosos compilados por Frei Ambrósio Johanning,
   O.F.M., XXII edição, Editora Vozes, 1965 (imprimatur 1937).

   Estrutura e ordem seguem EXATAMENTE o índice do livro.
   Prayers com pending:true ainda não foram transcritas —
   isso será feito progressivamente, capítulo por capítulo.

   Estrutura:
   CATEGORIES = [
     { id, title, glyph, note, page, prayers: [
         { id, title, page, text: [...], pending: true|false }
     ]}
   ]
   =========================================================== */

const CATEGORIES = [

  // ---------------------------------------------------------
  { id: "oracoes-diarias", title: "Orações Diárias", page: 9,
    note: "Maná ou Alimento da Alma Devota — Frei Ambrósio Johanning, O.F.M.",
    prayers: [
      { id: "oracao-manha", title: "Oração da Manhã", page: 9,
        text: [
          { section: "Ao Despertar" },
          { note: "Em hora certa, o cristão se levanta da cama e dirige o pensamento ao Senhor, para agradecer os seus muitos benefícios e pedir-lhe suas graças para o novo dia, fazendo (com água benta, se for possível) o sinal da cruz." },
          "✠ Pelo sinal da santa cruz ✠ livrai-nos, Deus Nosso Senhor, ✠ dos nossos inimigos. ✠ Em nome do Padre e do Filho e do Espírito Santo. Amém.",
          { section: "Ao Vestir-se" },
          { note: "Ao vestir-se, não se esqueça da santa presença de Deus; vista-se com decência, sobretudo se estiver na presença de outros, podendo recitar, ao mesmo tempo:" },
          "Glória ao Padre, que me criou! Glória ao Filho, que me salvou! Glória ao Espírito Santo, que me santificou. Ó doce Jesus que tanto me amais, fazei que eu vos ame cada vez mais! Doce Coração de Maria, sede minha salvação.",
          "Meu Deus, eu creio em vós, porque sois a verdade infalível. Meu Deus, eu espero em vós, porque sois a bondade infinita. Meu Deus, eu vos amo, porque sois o sumo e amantíssimo bem, digno de todo o amor.",
          { note: "Depois de vestido, ponha-se de joelhos, diante de um crucifixo, ou de alguma outra imagem, e reze com devoção o ato de adoração seguinte." },
          { section: "Ato de Adoração, Ação de Graças, Petição e Oferecimento" },
          "Louvada e adorada seja a santa e indivídua Trindade, agora e sempre, por toda a eternidade. Seja feita, louvada e eternamente exaltada a justíssima, altíssima e amabilíssima vontade de Deus em todas as coisas!",
          "Deus todo-poderoso, dou-vos infinitas graças por me haverdes conservado esta noite e preservado duma morte repentina. Dai-me forças para não vos ofender por algum pecado, especialmente neste dia.",
          "Em união com os merecimentos de Jesus Cristo, de sua Mãe Santíssima e de todos os santos, ofereço-vos todos os meus pensamentos, palavras e obras, para maior glória vossa, em ação de graças por todos os benefícios e em satisfação de meus pecados. Encomendo-me em todas as orações, santas Missas e boas obras que, hoje, vos serão oferecidas, e faço tenção de ganhar todas as indulgências que, neste dia, posso lucrar.",
          "Ouvi, Senhor, as minhas orações, que vos ofereço por meus pais, parentes e benfeitores, por meus amigos e inimigos e por toda a Igreja Católica; derramai sobre nós todas as vossas bênçãos e concedei-nos o que é necessário. Deus de bondade, compadecei-vos das almas que estão sofrendo no purgatório. Amém.",
          "Padre nosso, que estais nos céus, santificado seja o vosso nome, venha a nós o vosso reino, seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; e perdoai-nos as nossas dívidas, assim como nós perdoamos aos nossos devedores; e não nos deixeis cair em tentação; mas livrai-nos do mal. Amém.",
          "Ave, Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. Amém.",
          "Glória ao Padre e ao Filho e ao Espírito Santo. Assim como era no princípio, agora e sempre e por todos os séculos dos séculos. Amém.",
          "Creio em Deus, Padre todo-poderoso, Criador do céu e da terra; e em Jesus Cristo, um só seu Filho, Nosso Senhor, o qual foi concebido do Espírito Santo; nasceu de Maria Virgem; padeceu sob o poder de Pôncio Pilatos; foi crucificado, morto e sepultado; desceu aos infernos; ao terceiro dia ressurgiu dos mortos; subiu aos céus, está sentado à mão direita de Deus Padre, todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo; a Santa Igreja Católica; a comunhão dos santos; a remissão dos pecados; a ressurreição da carne; a vida eterna. Amém.",
          { section: "Consagração a Nossa Senhora" },
          "Ave, Maria... Ó Senhora minha! Ó minha Mãe! Eu me ofereço todo a vós. E em prova de minha devoção para convosco, vos consagro meus olhos, meus ouvidos, minha boca, meu coração e inteiramente todo o meu ser. E como assim sou vosso, ó boa Mãe, guardai-me e defendei-me como coisa e propriedade vossa.",
          "Lembrai-vos que vos pertenço, terna Mãe, Senhora nossa! Ah! guardai-me e defendei-me, como coisa própria vossa. Amém.",
          "Jesus, Maria, José, esclarecei-nos, socorrei-nos, salvai-nos. Amém.",
          { note: "São José, modelo e padroeiro dos devotos do Sagrado Coração de Jesus, rogai por nós." },
          { section: "Ao Santo Anjo da Guarda" },
          "Santo anjo do Senhor, meu zeloso guardador, se a ti me confiou a piedade divina, sempre me rege, guarda, governa e ilumina. Amém.",
          "Grande santo, cujo nome tenho a ventura de possuir, protegei-me e rogai por mim, para que possa servir a nosso Deus e Salvador, como vós o fizestes na terra, e glorificá-lo eternamente convosco no céu.",
          "Todos os anjos e santos de Deus, lembrai-vos de mim e rogai por mim ante o trono do Senhor.",
          { note: "Reze em seguida, três vezes:" },
          "Minha Mãe, preservai-me do pecado mortal."
        ]},
      { id: "outra-oracao-manha", title: "Outra Oração da Manhã", page: 13,
        attribution: "Conforme manda rezar a Santa Madre Igreja a seus ministros",
        text: [
          "Senhor Deus, todo-poderoso, que nos fizestes chegar ao princípio deste dia, salvai-nos, hoje, pelo vosso poder, para que neste dia não caiamos nalgum pecado, mas sempre se encaminhem nossas palavras e se dirijam nossos pensamentos e nossas obras para o cumprimento dos preceitos da vossa justiça. Por Nosso Senhor Jesus Cristo. Amém.",
          "Dignai-vos, Senhor, Rei do céu e da terra, dirigir e santificar, hoje, nossos corações e nossos corpos, nossos sentidos, nossas palavras e nossos atos, de conformidade com a vossa lei e nas obras dos vossos santos mandamentos, a fim de que, neste mundo e na eternidade, com os auxílios de vossa graça, mereçamos ser salvos, ó Salvador do mundo, que viveis e reinais pelos séculos dos séculos. Amém."
        ]},
      { id: "atos-fe-esperanca-caridade", title: "Atos de Fé, Esperança e Caridade", page: 14,
        text: [
          "Ato de fé — Eu creio firmemente, meu Deus, todas as verdades que tendes revelado, e que nos ensinais pela vossa Santa Igreja Católica, Apostólica, Romana, porque vós não vos podeis enganar, nem enganar-nos. E nesta fé quero viver e morrer. Amém.",
          "Ato de esperança — Eu espero, meu Deus, com firme confiança, que, pelos merecimentos de Nosso Senhor Jesus Cristo, me dareis o perdão de meus pecados e a vossa graça para alcançar a salvação eterna, porque assim o tendes prometido, vós que sois onipotente, misericordioso e fiel nas vossas promessas. E nesta esperança quero viver e morrer. Amém.",
          "Ato de caridade — Eu vos amo, meu Deus, de todo o meu coração e sobre todas as coisas, porque vós sois meu bom Pai, meu sumo e amantíssimo bem e digno de todo o amor. E por amor de vós amo a meu próximo como a mim mesmo. E nesta caridade quero viver e morrer. Amém."
        ]},
      { id: "oferecimento-dia-sagrado-coracao", title: "Oferecimento do Dia ao Sagrado Coração de Jesus", page: 15,
        attribution: "Para os associados do Apostolado da Oração",
        text: [
          "Divino Coração de Jesus, eu vos ofereço pelo Coração Imaculado de Maria todas as orações, obras e sofrimentos deste dia, em reparação das nossas ofensas e por todas as intenções, pelas quais vos imolais incessantemente sobre os nossos altares. Eu vo-las ofereço, em particular, pelas intenções recomendadas neste mês e neste dia aos associados do Apostolado da Oração."
        ]},
      { id: "oracao-sagrada-familia-diaria", title: "Oração para se Recitar Todos os Dias Diante da Imagem da Sagrada Família", page: 15,
        text: [
          "É louvável reunirem-se todas as pessoas de casa, para fazer em comum esta oração, aprovada pelo Santo Padre Leão XIII.",
          "Ó amantíssimo Jesus, que, com as vossas inefáveis virtudes e com os exemplos de vossa vida doméstica, santificastes a família, por vós escolhida neste mundo, dignai-vos lançar vosso piedoso olhar sobre esta nossa família, prostrada aqui, diante de vós, para implorar a vossa misericórdia. Lembrai-vos que esta família vos pertence, porque a vós se dedicou e se consagrou de um modo especial. Assisti-a benigno, defendei-a de todos os perigos, socorrei-a nas suas necessidades e dai-lhe a graça de perseverar na imitação de vossa santa família, para que, servindo-vos fielmente e amando-vos neste mundo, possa louvar-vos eternamente no paraíso.",
          "Maria, Mãe dulcíssima, recorremos à vossa intercessão, confiados em que vosso divino Filho ouvirá as vossas orações. E vós também, glorioso patriarca São José, socorrei-nos com a vossa poderosa mediação e oferecei nossos votos a Jesus pelas mãos de Maria. Amém.",
          "Jesus, Maria, José, esclarecei-nos, socorrei-nos, salvai-nos. Amém."
        ]},
      { id: "angelus-manha", title: "Ao Toque das Ave-Marias (Angelus)", page: 16,
        text: [
          "℣. O anjo do Senhor anunciou a Maria. ℟. E ela concebeu do Espírito Santo. Ave-Maria...",
          "℣. Eis aqui a serva do Senhor. ℟. Faça-se em mim segundo a vossa palavra. Ave-Maria...",
          "℣. E o Verbo se fez carne. ℟. E habitou entre nós. Ave-Maria...",
          "℣. Rogai por nós, Santa Mãe de Deus. ℟. Para que sejamos dignos das promessas de Cristo.",
          "Oremos: Infundi, Senhor, vos suplicamos, vossa graça em nossas almas, para que nós, que, pela anunciação do anjo, viemos ao conhecimento da Encarnação de Jesus Cristo, Vosso Filho, cheguemos por sua Paixão e Cruz à glória da Ressurreição. Pelo mesmo Cristo, Nosso Senhor. Amém.",
          "Glória ao Padre... (3 vezes, para dar graças à Santíssima Trindade pelos sublimes privilégios que concedeu à bem-aventurada Sempre Virgem Maria na sua gloriosa Ascensão ao Céu.)"
        ]},
      { id: "regina-caeli-diario", title: "Regina Cæli", page: 17,
        attribution: "No Tempo Pascal",
        text: [
          "℣. Rainha do Céu, alegrai-Vos. Aleluia! ℟. Porque Aquele que merecestes trazer em vosso ventre, Aleluia! ℣. Ressuscitou como disse, Aleluia! ℟. Rogai a Deus por nós, Aleluia! ℣. Regozijai-Vos e alegrai-Vos, ó Virgem Maria, Aleluia! ℟. Porque o Senhor ressuscitou verdadeiramente, Aleluia.",
          "Oremos: Ó Deus, que Vos dignastes alegrar o mundo com a Ressurreição do Vosso Filho, Nosso Senhor Jesus Cristo, concedei-nos que, por sua Mãe, a Virgem Maria, consigamos os gozos da vida eterna. Pelo mesmo Cristo Senhor Nosso. Amém.",
          "Glória ao Padre... (3 vezes)"
        ]},
      { id: "antes-estudo-livro", title: "Oração para Antes do Estudo", page: 18,
        text: [
          "Vinde, Espírito Santo! Enchei os corações de vossos fiéis, e acendei neles o fogo do vosso amor! ℣. Senhor, enviai o vosso Espírito, e tudo será criado. ℟. E renovareis a face da terra. Ave Maria."
        ]},
      { id: "depois-estudo-livro", title: "Oração para Depois do Estudo", page: 18,
        text: [
          "Oremos: Ó Deus, que instruístes os corações de vossos fiéis pela luz do Espírito Santo, concedei que pelo mesmo Espírito saibamos o que é reto e sempre gozemos de sua consolação. Por Cristo Senhor Nosso. Amém. Ave Maria."
        ]},
      { id: "antes-trabalho-livro", title: "Oração para Antes de Qualquer Trabalho", page: 18,
        text: [
          "Deus misericordioso, para louvor e glória de vosso nome, eu vos peço me concedais que ardentemente deseje, com prudência investigue, em verdade conheça e perfeitamente cumpra tudo o que for do vosso divino agrado. Amém."
        ]},
      { id: "antes-refeicao-livro", title: "Oração para Antes da Refeição", page: 18,
        text: [
          "Abençoai, Senhor, as nossas pessoas e a comida que vossa liberalidade nos concede, e dignai-vos, ó Rei da eterna Glória, admitir-nos à mesa celestial. Amém."
        ]},
      { id: "depois-refeicao-livro", title: "Para Depois da Refeição", page: 19,
        text: [
          "Muitas graças vos damos por todos os vossos benefícios, Deus onipotente, que viveis e reinais pelos séculos dos séculos. Amém.",
          "Louvemos ao Senhor! Demos graças a Deus! Que as almas dos fiéis defuntos, pela misericórdia de Deus, descansem em paz. Amém."
        ]},
      { id: "oracao-noite-livro", title: "Oração da Noite", page: 19,
        text: [
          "(Quando possível, reze-se de joelhos)",
          "Meu Deus, meu Pai e meu Criador, eu vos adoro e reverencio de todo o meu coração. Dou-vos infinitas graças por todos os benefícios que me concedestes neste dia, no corpo e na alma. Dignai-vos, Senhor, guardar-me esta noite de todos os assaltos do espírito maligno, de uma morte repentina e de todos os males do corpo e da alma. Amém.",
          "Aqui examina-te um momento sobre os pecados cometidos durante o dia, por pensamentos, palavras e obras e, principalmente, sobre aqueles a que tens maior inclinação, lembrando-te das pessoas e dos lugares que frequentaste. Conhecidos os pecados, arrepende-te seriamente, fazendo, do melhor modo que puderes, um ato de contrição perfeita, mormente se cometeste algum pecado mortal, pois a contrição perfeita, com a vontade de se confessar oportunamente, já tira até os pecados mortais. Só assim poderás dormir tranquilamente e comparecer perante o tribunal de Deus, se ele te chamar talvez esta noite."
        ]},
      { id: "ato-contricao-livro", title: "Ato de Contrição", page: 19,
        text: [
          "Senhor meu Jesus Cristo, Deus e homem verdadeiro, Criador e Redentor meu, por serdes vós quem sois, sumamente bom e digno de ser amado sobre todas as coisas; e porque eu vos amo e estimo, pesa-me, Senhor, de todo o meu coração, de vos ter ofendido; pesa-me também por ter perdido o céu e merecido o inferno; e proponho firmemente, ajudado com os auxílios de vossa divina graça, emendar-me e nunca mais vos tornar a ofender, e espero alcançar o perdão de minhas culpas pela vossa infinita misericórdia. Amém.",
          "Eterno Pai, eu vos ofereço o sangue preciosíssimo de Jesus Cristo, em satisfação dos meus pecados, em sufrágio das benditas almas do purgatório e pelas necessidades da Santa Igreja.",
          { section: "Salve-Rainha" },
          "Salve, Rainha, Mãe de misericórdia, vida, doçura, esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei, e depois deste desterro nos mostrai Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria!",
          "℣. Rogai por nós, Santa Mãe de Deus. ℟. Para que sejamos dignos das promessas de Cristo.",
          { note: "Em seguida, reze 3 Ave-Marias, repetindo depois de cada uma:" },
          "Minha Mãe, preservai-me do pecado mortal.",
          { section: "Ao Santo Anjo e aos Santos" },
          "Santo anjo do Senhor, meu zeloso guardador, se a ti me confiou a piedade divina, sempre me rege e guarda, governa e ilumina! Amém.",
          "Todos os santos de Deus, especialmente vós, meus santos padroeiros, recomendai-me a mim e a todos os homens esta noite à proteção divina. E as almas dos fiéis, pela misericórdia de Deus, descansem em paz. Amém.",
          { section: "Ao Deitar-se" },
          { note: "Agora asperge tua cama e a ti mesmo com água benta, fazendo com devoção o sinal da santa cruz. Despe, então, com decência, os teus vestidos, e, ao deitar-te, dize:" },
          "Em nome de meu Senhor Jesus Cristo, crucificado, deito-me. Queira ele me abençoar, governar e proteger esta noite de todos os males, e depois desta vida conduzir-me à vida eterna. Amém.",
          { note: "Antes de adormecer, entrega a tua alma à proteção de Jesus, Maria e José, pedindo-lhes a graça duma boa morte, dizendo:" },
          "Jesus, não sejais juiz para mim, mas sede antes meu Salvador. Jesus, Maria, José, dou-vos meu coração e minha alma. Jesus, Maria, José, assisti-me na última agonia. Jesus, Maria, José, expire minha alma entre vós em paz.",
          "Nas vossas mãos, Senhor, entrego a minha alma; fazei que convosco durma e descanse."
        ]},
      { id: "oracao-breve-noite", title: "Outra Oração Mais Breve para a Noite", page: 22,
        attribution: "Conforme reza a Santa Madre Igreja no Completório",
        text: [
          "Visitai, Senhor, nós vos rogamos, esta habitação, e afastai dela todas as ciladas dos inimigos. Os vossos anjos queiram habitar nela e nos guardar em paz. E a vossa bênção esteja sempre sobre nós. Por Cristo Nosso Senhor. Amém.",
          "O Senhor onipotente e misericordioso, ✠ Padre, Filho e Espírito Santo, nos abençoe e nos guarde. Amém.",
          "A vossa proteção recorremos, Santa Mãe de Deus. Não desprezeis as nossas súplicas em nossas necessidades; mas livrai-nos sempre de todos os perigos, ó Virgem gloriosa e bendita! Ó Senhora nossa, medianeira nossa, intercessora nossa! Reconciliai-nos com vosso Filho, recomendai-nos a vosso Filho, apresentai-nos a vosso Filho. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém."
        ]}
    ]
  },

  // ---------------------------------------------------------
  { id: "santa-missa", title: "Método para Assistir à Santa Missa", page: 23,
    note: "Ainda a transcrever do livro.",
    prayers: [
      { id: "observacao-missa", title: "Observação", page: 23,
        text: [
          "Que é o santo sacrifício da Missa? É o sacrifício do corpo e sangue de Jesus Cristo oferecido a Deus debaixo das espécies de pão e de vinho, e que tem por fim representar e continuar o mesmo sacrifício da cruz, e aplicar-nos seus merecimentos. É, pois, a Santa Missa o mesmo sacrifício da cruz, renovado todos os dias sobre os nossos altares pelas mãos dos sacerdotes, mas de um modo incruento, isto é, sem derramar novamente o sangue do nosso divino Salvador: porque Jesus morreu uma só vez para nos remir dos nossos pecados. Sendo, pois, o mesmo Jesus, Criador e Salvador nosso, a vítima, a oferta, que na Santa Missa se apresenta à divina Majestade, é evidente que não há culto mais sublime e mais perfeito na nossa santa religião do que o sacrifício da Santa Missa.",
          "É só por ele que podemos dignamente louvar e agradecer à divina Majestade, prestar-lhe uma digna satisfação por nossos pecados e proferir com mais eficácia as nossas súplicas. A Santa Missa é a verdadeira fonte de todas as graças e bênçãos, onde convém haurir todos os dias consolação e conforto de que precisamos nas diversas condições da vida. Oh! se compreendêssemos bem a palavra do grande missionário São Leonardo de Porto Maurício, de que uma Missa vale mais do que todo o mundo, certamente assistiríamos com maior frequência, respeito e devoção, a este grande mistério da nossa santa religião, colhendo as mais abundantes graças e bênçãos, para nós e toda a nossa família.",
          "O modo de ouvir a Santa Missa depende da devoção de cada um; o preferível, porém, seria unir-se às intenções do sacerdote e acompanhá-lo nas orações da Missa, embora não sejam as mesmas do sacerdote. Outro modo ainda de assistir à Santa Missa é rezar o terço, uma ladainha ou outras orações. Convém, porém, neste caso, acompanhar o sacerdote ao menos nas partes principais da Santa Missa, que são o ofertório, a consagração e comunhão, interrompendo por alguns momentos as orações, rezando ou meditando um pouco na respectiva parte da Missa. Para esses fins podem servir as orações seguintes:"
        ]},
      { id: "metodo-paixao-missa", title: "Método para Assistir à Santa Missa Meditando na Sagrada Paixão de Nosso Senhor Jesus Cristo", page: 24,
        text: [
          "Oração preparatória — Deus e Senhor meu! Apresento-me diante de vossa divina majestade, confessando-me, como o publicano, pelo maior dos pecadores e pedindo-vos perdão de minhas grandes culpas, as quais tomastes sobre os vossos ombros, para me livrar da morte eterna e abrir a porta do céu! Oh! lavai minha alma no vosso preciosíssimo sangue, a fim de que devotamente possa assistir à incruenta renovação do santo sacrifício da cruz, considerando nos mistérios de vossa sagrada paixão, pela qual espero alcançar todas as graças necessárias para mim e todos os homens, principalmente para aqueles pelos quais tenho obrigação de rezar. Ó Maria, Mãe dolorosa, a cuja alma ao pé da cruz traspassou uma espada de dor, por vossa intercessão alcançai-me a graça duma verdadeira compaixão com os sofrimentos e angústias de vosso divino Filho Jesus e duma contrição sincera de todos os meus pecados. Amém.",
          "Ao principiar a Missa — Jesus Cristo no horto das Oliveiras: Senhor meu Jesus Cristo, que na oração quisestes ser confortado por um anjo, concedei-me a graça de perfeita oração, e dai-me nela a assistência dos anjos, para que por estes possa ser defendido em todas as adversidades.",
          "A Confissão — Jesus prostrado por terra, suando gotas de sangue: Senhor meu Jesus Cristo, que antes da morte quisestes experimentar as angústias e amarguras dela, suando sangue no horto das Oliveiras, dai-me uma viva lembrança deste tão grande mistério e já que não posso, como vós, suar gotas de sangue, derrame copiosas lágrimas por meus pecados, para alcançar o perdão de todos os meus pecados.",
          "Ao beijar o altar — Judas entrega Cristo com um ósculo: Senhor meu Jesus Cristo, que permitistes que fôsseis entregue por um discípulo perverso, fazei que daqui eu aprenda a amar meu próximo, ainda quando inimigo, para que eu seja perfeito imitador vosso.",
          "Ao Intróito — Jesus Cristo é preso e conduzido à presença de Anás e Caifás: Senhor meu Jesus Cristo, que consentistes em serdes preso e conduzido à presença de Anás e Caifás, por esta afronta tão grande que sofrestes, concedei-me a graça necessária para suportar todas as injúrias, e para vos louvar e agradecer em todas as adversidades.",
          "Ao Kyrie — Jesus Cristo é negado por São Pedro: Senhor meu Jesus Cristo, que com paciência sofrestes que um discípulo vosso três vezes vos negasse, concedei-me a graça, para sofrer todas as acusações que falsamente me imputarem, e perdoar a todos os que me perseguirem.",
          "Ao Dominus Vobiscum — Arrependimento de São Pedro: Senhor meu Jesus Cristo, que com olhos de misericórdia viestes a Pedro e o movestes a uma perfeita contrição de seus pecados, olhai para a minha alma pecadora e movei-a a detestar sinceramente todos os seus pecados, para que, impregnada toda em vosso amor, viva convosco eternamente.",
          "A Epístola — Jesus Cristo é acusado perante o tribunal de Pilatos: Senhor meu Jesus Cristo, que permitistes que vos acusassem diante de Pilatos, ensinai-me a sofrer com paciência e resignação à vontade divina em todas as desgraças e condições de minha vida, e acusar sinceramente todos os meus pecados no tribunal da penitência.",
          "Ao ser levado o Missal — Nosso Senhor é levado perante Herodes: Senhor meu Jesus Cristo, que por amor de mim quisestes ser escarnecido diante de Herodes, concedei-me que com paciência possa sofrer todos os escárnios e afrontas para imitar vossa paixão.",
          "Ao Evangelho — Jesus é conduzido novamente à presença de Pilatos; Barrabás é preferido a Jesus: Senhor meu Jesus Cristo, que por amor de mim permitistes que a vós preferissem um malfeitor, concedei-me a graça de que, jamais, levado pelo respeito humano, me desvie da observância de vossa santa lei, e tenha por grande honra sofrer pelo vosso santo nome.",
          "Ao Credo — Jesus é declarado inocente por Pilatos: Senhor meu Jesus Cristo, que, apesar de serdes declarado inocente, fostes condenado à morte na cruz, concedei-me que, embora não tenha imitado a vossa inocência, vos siga agora no caminho da penitência e mortificação.",
          "Ao ser descoberto o cálice — Jesus é despido de suas vestes: Senhor meu Jesus Cristo, que por mim quisestes ser despido de vossas vestes para cobrirdes as minhas faltas, concedei-me que humilde e inteiramente as declare na santa confissão, para que assim alcance o perdão delas e consiga a vida eterna.",
          "Ao oferecer a hóstia — Jesus é açoitado: Senhor meu Jesus Cristo, que por amor de nós quisestes ser cruelmente açoitado, para satisfazer à divina Majestade pelos pecados da impureza, concedei-nos a graça de crucificar a nossa carne pela mortificação, e de assim evitar tudo o que possa manchar a pureza da nossa alma.",
          "Ao oferecer o cálice — Coroação de espinhos: Senhor meu Jesus Cristo, que por amor de nós quisestes ser coroado de espinhos, para satisfazer pelos pecados da soberba, concedei-nos a graça de evitar todos os pecados do orgulho e da vaidade, para que, imitando-vos aqui na vossa humilhação, um dia possamos receber das vossas mãos a coroa da eterna glória no céu.",
          "A purificação dos dedos — Pilatos lava as mãos como mostrando ser inocente na morte de Cristo: Senhor meu Jesus Cristo, que pela fingida justiça de Pilatos quisestes declarar a vossa inocência, concedei-me a inocência da alma, para que, livre de toda culpa, me faça digno de comparecer, na hora da minha morte, perante o vosso tribunal, a fim de ouvir aquelas palavras consoladoras: 'Vem, bendito de meu Pai, e possui o reino que te está preparado'.",
          "Ao Orate Fratres — Jesus é mostrado ao povo por Pilatos, com as palavras 'Ecce homo': Senhor meu Jesus Cristo, por aquela ingratidão dos judeus com que pediram a vossa morte, concedei-me a graça de nunca mais tornar-me culpado de semelhante crime, ofendendo-vos por um pecado mortal. Fazei-me lembrar, na hora da tentação, a vossa sagrada paixão, a fim de que, confortado pela virtude desta mesma paixão, vença todos os inimigos da minha alma.",
          "Ao Prefácio — Jesus com a cruz às costas: Senhor meu Jesus Cristo, que por amor de mim tomastes sobre os vossos divinos ombros o peso da sagrada cruz, dai-me paciência para sofrer a cruz de minhas tribulações, a fim de ser perfeito imitador vosso.",
          "Ao Cânon — Jesus caminha para o Calvário: Senhor meu Jesus Cristo, que sobre os vossos ombros levastes a cruz de meus pecados, fazei que em seguimento vosso leve a minha cruz, e com resignação abrace os vossos amorosos castigos. Dai-me a graça de que com lágrimas de penitência chore os meus pecados, segundo exortastes as filhas de Jerusalém, que não chorassem sobre vós, mas sim sobre os seus pecados, causa de vossa morte. Imprimi profundamente na minha alma a lembrança de vossa paixão, assim como deixastes impresso o vosso rosto sagrado na toalha de Verônica.",
          "A bênção da hóstia e do cálice — Jesus é pregado na cruz: Senhor meu Jesus Cristo, que por mim quisestes ser pregado no madeiro da cruz com duríssimos cravos, traspassai o meu coração com o santo temor de Deus, a fim de que passe em inocência minha vida no cumprimento dos vossos santos preceitos. Seja feita, louvada e eternamente exaltada a justíssima, altíssima e amabilíssima vontade de Deus em todas as coisas.",
          "A elevação da hóstia — Jesus é exaltado na cruz: Senhor meu Jesus Cristo, que por meu amor quisestes ser exaltado na cruz, fazei que por vossa paixão e cruz seja convosco exaltado na glória do céu. Reza devota e pausadamente: Alma de Cristo, santificai-me. Corpo de Cristo, salvai-me. Sangue de Cristo, inebriai-me. Água do lado de Cristo, lavai-me. Paixão de Cristo, confortai-me. Ó bom Jesus, ouvi-me. Dentro das vossas chagas escondei-me. Não permitais que eu me separe de vós. Do espírito maligno defendei-me. E na hora da minha morte chamai-me e mandai-me ir para Vós, para que com os vossos Santos Vos louve por todos os séculos dos séculos. Amém.",
          "À elevação do Cálice — Jesus na Cruz, vertendo das suas chagas o seu preciosíssimo Sangue: Senhor meu Jesus Cristo, em vosso preciosíssimo Sangue lavai-me de todas as manchas do pecado, e, abrigado nas vossas santíssimas chagas, protegei e preservai-me dos assaltos e ciladas da malícia de Satanás. Eterno Pai, eu vos ofereço o Sangue preciosíssimo de Jesus Cristo em satisfação por meus pecados e pelas necessidades da Santa Igreja.",
          "Ao Memento pelos Defuntos — Jesus ora por seus inimigos e promete o paraíso ao bom ladrão: Senhor meu Jesus Cristo, que na vossa imensa bondade, na Cruz, ainda perdoastes aos vossos inimigos e prometestes a glória do Paraíso ao bom ladrão, admiti as súplicas que vos faço pelas almas dos defuntos, principalmente pelas N. N. (aqui podem-se lembrar as almas pelas que se quer rezar em particular) e concedei-lhes o descanso eterno. Ó Maria, Mãe de Deus, e Mãe de misericórdia, rogai por nós e pelos fiéis defuntos. Amém.",
          "Ao Nobis Quoque Peccatoribus — Jesus converte o bom ladrão: Senhor meu Jesus Cristo, que na Cruz atendestes ao ladrão contrito, prometendo-lhe o Paraíso, assisti-me na hora da minha última agonia, instantemente vos peço, a fim de que eu também possa ouvir da vossa boca aquelas palavras que dirigistes ao bom ladrão: 'Ainda hoje estarás comigo no Paraíso'.",
          "Ao Pater Noster — Jesus recomenda sua Mãe Santíssima ao discípulo amado: Senhor meu Jesus Cristo, que no último instante de vossa vida entregastes vossa Mãe Santíssima aos cuidados do discípulo amado, concedei-me a graça de ser também filho amante da melhor das mães, imitando as suas virtudes e gozando a sua poderosa proteção.",
          "Ao partir a Santa Hóstia — O Salvador expira na Cruz: Senhor meu Jesus Cristo, que para a salvação de nossas almas expirastes na Cruz, entregando a vossa alma ao Eterno Pai, não permitais que a vossa Paixão e Morte para mim sejam perdidas; mas antes lavai a minha alma no vosso preciosíssimo Sangue, a fim de que, livre de toda a mancha e culpa, na hora da minha morte, possa entregá-la nas vossas mãos para receber a coroa da eterna glória. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém.",
          "Ao ser deitada no cálice a pequena parte da hóstia — Jesus desce ao limbo para consolar as almas dos justos: Senhor meu Jesus Cristo, que na cruz vencestes o demônio, quebrando as portas do inferno e abrindo-nos o paraíso, dai-me força para vencer as tentações diabólicas e tomar firme resolução de mortificar a minha carne, a fim de que, desapegado dos bens deste mundo, pelos merecimentos da vossa paixão seja livre das penas do inferno e do purgatório.",
          "Ao Agnus Dei — Perante os judeus, cheios de contrição, bate no peito, dizendo: 'Em verdade, este é o Filho de Deus!': Senhor meu Jesus Cristo, em virtude das vossas cinco chagas, por amor de mim recebidas, vos peço que também toqueis o meu coração, tão duro, por uma contrição perfeita; e que, em todas as desgraças e contradições de minha vida e principalmente na minha última agonia, me abrigueis nas vossas sacratíssimas chagas, para assim ser defendido contra os assaltos dos espíritos malignos e em companhia dos santos anjos vos veja face a face. Ó Coração agonizante de Jesus, compadecei-vos dos moribundos!",
          "À comunhão — Nosso Senhor é colocado nos braços de sua Santíssima Mãe e depositado num sepulcro que simboliza a alma, que real ou espiritualmente o recebe na santa comunhão: Senhor meu Jesus Cristo, que quisestes ser depositado num sepulcro novo, pela intercessão de vossa Mãe Santíssima vos peço que na santa comunhão sempre vos receba num coração limpo e bem preparado; e, como hoje não vos posso receber realmente, vinde ao menos visitar-me com as vossas graças e bênçãos, pois creio firmemente que com divindade e humanidade estais presente na hóstia consagrada. Amo-vos, ó Jesus, de todo o meu coração e sobre todas as coisas e espero amar e agradar-vos cada vez mais. Oh! vinde confortar-me na minha fraqueza, consolar-me nas minhas misérias e enriquecer-me na minha pobreza, para nunca mais separar-me de vós.",
          "À purificação dos dedos — Jesus é embalsamado por Nicodemos e José de Arimatéia: Senhor meu Jesus Cristo, que por amor de mim quisestes ser ungido com aromas e envolto em lençóis limpos, fazei que cada vez mais procure agradar-vos com o suave aroma das virtudes e obras de caridade.",
          "Ao ser levado o Missal e ao Dominus Vobiscum — Jesus ressuscitado aparece a Maria Santíssima e aos apóstolos: Senhor meu Jesus Cristo, por vossa gloriosa ressurreição, concedei-me que ressuscite da minha vida de pecados e principie uma nova vida de observância dos vossos mandamentos, a fim de que um dia minha alma vá unir-se ao corpo, para receber o prêmio de meus trabalhos, que prometestes a todos que fielmente vos servirem em trilhar o caminho da vossa cruz. Tudo isso espero de vossa bondade, pela intercessão de Maria Santíssima e de vossos santos apóstolos.",
          "As últimas orações — Jesus instruindo os apóstolos: Senhor meu Jesus Cristo, que por vossos amados apóstolos nos anunciastes a vossa santa fé, fazei que cada vez mais nos compenetremos do espírito da Santa Igreja, e como filhos obedientes e fiéis a ela vivamos e morramos. Amém.",
          "À bênção e ao último Evangelho — Jesus subindo ao céu e abençoando os seus discípulos: Senhor meu Jesus Cristo, que subistes aos céus para tomardes posse da vossa glória, dai-me a vossa bênção divina, para que cada vez mais viva para o céu, desprezando o que é da terra, e um dia, em companhia de todos os santos, possa cantar os vossos louvores por todos os séculos dos séculos. Amém.",
          "Orações prescritas por Sua Santidade Leão XIII — Reza-se 3 Ave-Marias, seguidas de:",
          "Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva; a vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei; e depois deste desterro, mostrai-nos Jesus, bendito fruto de vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria! ℣. Rogai por nós, Santa Mãe de Deus. ℟. Para que sejamos dignos das promessas de Cristo.",
          "Oremos. Deus, refúgio e fortaleza nossa, atendei propício aos clamores de vosso povo, e, pela intercessão da gloriosa e imaculada Virgem Maria, Mãe de Deus, e do bem-aventurado São José, esposo de Maria, de vossos bem-aventurados apóstolos Pedro e Paulo, e de todos os santos, ouvi benigno e misericordioso as súplicas que do fundo da alma vos dirigimos, pela conversão dos pecadores, pela liberdade e exaltação da Santa Madre Igreja. Pelo mesmo Cristo, Nosso Senhor. Amém.",
          "São Miguel Arcanjo, defendei-nos no combate, sede nosso refúgio contra a maldade e as ciladas do demônio. Ordene-lhe Deus, instantemente o pedimos; e vós, príncipe da milícia celeste, pela virtude divina, precipitai no inferno a Satanás e a todos os espíritos malignos, que andam pelo mundo para perder as almas. Amém.",
          "Sacratíssimo Coração de Jesus (três vezes) — Tende piedade de nós.",
          "Os fiéis que, depois da celebração da Santa Missa, à qual devotamente assistiram, juntamente com o sacerdote, de joelhos, recitarem estas preces, lucrarão indulgência de 10 anos e mais 7 anos de indulgência pela jaculatória ao Sagrado Coração de Jesus."
        ]},
      { id: "ordinario-missa", title: "Ordinário da Missa", page: 38, pending: true, text: [] },
      { id: "proprio-missa-sc", title: "Próprio da Missa do Sagrado Coração de Jesus", page: 60, pending: true, text: [] },
      { id: "proprio-missa-imaculada", title: "Próprio da Missa da Imaculada Conceição", page: 66, pending: true, text: [] },
      { id: "missa-defuntos", title: "Missa pelos Defuntos", page: 71, pending: true, text: [] }
    ]
  },

  // ---------------------------------------------------------
  { id: "confissao", title: "A Confissão", page: 82,
    note: "Ainda a transcrever do livro.",
    prayers: [
      { id: "metodo-confessar-bem", title: "Método para Confessar-se Bem", page: 82,
        text: [
          "Lembra-te, ó cristão, que coisa santa e inestimável é a confissão; pois a confissão, ou penitência, é aquele sacramento que nos perdoa os pecados cometidos depois do batismo; é um meio eficacíssimo que Nosso Senhor Jesus Cristo, na sua bondade e misericórdia, nos proporcionou para salvar a nossa alma. Todos que, depois do batismo, cometeram um pecado mortal, o devem empregar. Não é a confissão um objeto de aborrecimento ou de medo, mas sim uma instituição da misericórdia divina.",
          "Pobres de nós, se não tivéssemos um meio tão simples, tão eficaz e seguro e, para assim dizer, tão natural, como é a sincera, humilde e contrita confissão dos nossos pecados. Aproveita-te, pois, muitas vezes, deste meio tão salutar, e tanto mais, quanto maior for a tua fraqueza e propensão ao pecado. Recebe, porém, sempre este sacramento tão santo com a disposição necessária, isto é: 1º depois de ter séria e tranquilamente examinado a tua consciência; 2º depois de ter feito uma contrição sincera de teus pecados, com o firme propósito de emenda. Cuida bem de não depreciar este sacramento por negligência e superficialidade no exame de consciência, ou falta de contrição, ou por calar, de propósito, um pecado mortal. De outra parte, procura ter uma grande confiança em Deus, que não despreza a quem, de boa vontade e de coração contrito, se converter a ele. Procedendo assim, sempre hás de tirar grande aproveitamento da confissão e assegurar-te a tua eterna salvação.",
          "Para bem praticar uma obra tão santa, aproxima-te dela com toda a humildade e fé e ausílio das orações seguintes."
        ]},
      { id: "oracao-preparatoria-confissao", title: "Oração Preparatória", page: 83,
        text: [
          "Reza-se ao Espírito Santo, dizendo com devoção:",
          "Vinde, Espírito Santo, enchei os corações de vossos fiéis, e acendei neles o fogo de vosso divino amor. ℣. Enviai o vosso Espírito, e tudo será criado. ℟. E renovareis a face da terra.",
          "Oremos. Ó Deus, que instruístes os corações dos fiéis com a luz do Espírito Santo, concedei que pelo mesmo Espírito saibamos o que é reto e sempre gozemos de sua consolação. Por Cristo Nosso Senhor. Amém.",
          "Em seguida, reze devotamente:",
          "Meu Deus e Senhor, vou receber agora o sacramento da penitência. Ajudai-me, para bem cumpri-lo, com o auxílio de vossas graças; porque nada posso em vós. Enviai-me o Espírito Santo, para que conheça bem o número e a gravidade dos meus pecados, deles devida e sinceramente me arrependa e faça um firme propósito de não pecar mais. Assisti-me com a vossa graça, para que confesse sinceramente todos os meus pecados e não cale nada do que deva dizer, dando-me força para me emendar verdadeiramente. Amém.",
          "Santa Maria, Mãe de Deus, rogai por mim, pobre pecador, para que faça uma boa confissão e alcance o perdão para todos os meus pecados.",
          "Jesus, Maria, José, esclarecei-me, socorrei-me e salvai-me.",
          "Santo anjo da guarda e todos os anjos e santos de Deus, rogai por mim nesta hora. Amém.",
          "Padre Nosso, Ave Maria."
        ]},
      { id: "exame-consciencia-confissao", title: "Exame de Consciência", page: 84,
        text: [
          "Nota — Para examinar bem a consciência é necessário saber o que é que constitui um pecado mortal. É: 1º a matéria grave; 2º o pleno conhecimento, e 3º o pleno consentimento. Faltando uma destas três condições, não se pode falar em pecado mortal. Convém saber ainda que a culpabilidade duma ação sempre depende do conhecimento que temos da ação.",
          "Se, p. ex., praticamos alguma ação que julgamos ser pecado mortal, mas que, na realidade, não o é, nos tornamos réus de pecado mortal, porque tínhamos a vontade de cometê-lo. Quem, p. ex., julgar ser pecado mortal uma mentira (que geralmente é pecado venial), comete tal, mesmo se depois ouvir que é somente pecado venial. Ou se alguém pensar ser hoje dia de abstinência, quando não o é, comete um pecado comendo carne. Assim, pela mesma razão, um grande pecado pode tornar-se pequeno.",
          "Também não se deve esquecer que, para examinar bem a consciência, é necessário indagar o número e as espécies de pecados mortais, o quanto possível, e todas as circunstâncias que tornam um pecado venial mortal, ou um mortal venial. Quem, p. ex., roubar a um pobre, comete maior pecado do que se o fizera a um rico; ou, se alguém furtar um objeto na igreja, comete dois pecados, um contra o 7º e outro contra o 1º mandamento de Deus.",
          "Nos pecados veniais não é necessário indicar a miúdo o número. Basta dizer se foi uma ou muitas vezes. Afinal, convém saber que, se não soubermos chegar ao pleno conhecimento de ser ou não ser alguma coisa pecado grande ou pequeno, ou quando tivermos dúvida sobre alguma coisa, ou quando estivermos com vergonha, o declaremos ao nosso confessor, que muitas vezes, com algumas perguntas, saberá remover as dificuldades.",
          "Tempo e lugar para examinar bem a consciência — Convém notar que é obrigação grave empregar o tempo suficiente para examinar-se e arrepender-se. Em primeiro lugar vejamos quando nos confessamos a última vez. Depois devemos ver se essa confissão teve valor.",
          "Note-se bem: Uma confissão não tem valor: 1º Quando, por grave negligência no exame de consciência, deixamos de dizer um pecado mortal, ou o número e as circunstâncias necessárias dele. 2º Quando nos confessamos sem verdadeira contrição e sem propósito sincero de emenda. 3º Quando calamos de propósito um pecado mortal. 4º Quando, antes de recebermos a absolvição, já tínhamos a intenção de não cumprir a penitência.",
          "Quem antes de receber a absolvição tem a vontade de cumprir a penitência e depois, sem própria culpa, se esqueceu de cumpri-la, não cometeu pecado e a confissão é válida. Quem, porém, deixa de cumprir a penitência por própria culpa, comete um pecado e deve dizê-lo ao confessor. — Quem conhecer que a confissão foi sacrílega, deve dizer isto ao confessor e repeti-la toda, arrependendo-se de coração por ter cometido um pecado grande, abusando de um sacramento tão santo.",
          "Os dez mandamentos da lei de Deus — Para dar maior esclarecimento sobre a distinção dos pecados em mortais e veniais, sempre o indicaremos em parêntese. No lugar dos pontinhos diga-se o número das vezes; nos veniais basta dizer se foram muitas ou poucas vezes.",
          "1º Mandamento — Amar a Deus sobre todas as coisas. Contra o 1º mandamento pequei: Não rezei... vezes a oração da manhã e da noite por negligência (omitir as orações diárias durante algum tempo e por mera preguiça, não passa dum pecado venial). Rezei as orações diárias... vezes sem devoção, rindo-me, ou olhando para outras coisas (é pecado venial). Neguei... vezes alguma verdade da fé (é pecado mortal). Duvidei voluntariamente de alguma verdade da fé... vezes (é pecado mortal). Falei... vezes contra a nossa santa religião ou seus ministros (se foi em coisa grave, é pecado mortal). Gostei de ouvir falar... vezes contra a nossa santa religião, contra Deus e seus ministros (conforme a matéria e o consentimento que demos, é pecado mortal ou venial). Zombei... vezes de coisas santas, por exemplo, da Santa Missa, das procissões (é pecado venial ou mortal, conforme a matéria e o desprezo). Tive vergonha da minha religião, deixando, por exemplo, de ir à Missa ou de cumprir outro dever de nossa santa religião por causa do respeito humano (é pecado mortal ou venial, conforme a matéria e as circunstâncias). Li... vezes livros ou jornais escritos contra a fé.",
          "Quem souber que a leitura de tais livros não prejudica a sua alma, já não pode por isso estudá-los, nem mesmo para poder defender sua fé católica, ou por achar neles assuntos que tocam a matéria de seus estudos; mas tem que pedir antes a licença da autoridade eclesiástica.",
          "Descuidei de instruir-me sobre os deveres de cristão, por muito ou pouco tempo, por exemplo, não estudando o catecismo, ou nunca assistindo às práticas. Quem, por grave negligência, deixou de instruir-se nas verdades necessárias da fé, cometeu pecado mortal; tem, por conseguinte, a obrigação de procurar a instrução necessária.",
          "Consultei ou mandei consultar espiritistas, feiticeiros, benzedores ou cartomantes... vezes (é pecado mortal; pode ser venial se for por ignorância, ou mera curiosidade). Fiz mesmo feitiço... vezes (é pecado mortal; pode ser venial, se for por ignorância ou outra razão que diminui o pecado). Rezei orações supersticiosas... vezes (é pecado mortal; pode ser venial, se for por ignorância, curiosidade, etc.). Usei devoções supersticiosas... vezes (é pecado mortal; pode ser venial, se for por ignorância).",
          "Desconfiei de Deus, murmurando contra ele, dando-me ao desânimo em qualquer desgraça ou até ao desespero... vezes (é muitas vezes pecado venial; é, porém, mortal, se propriamente desesperamos da misericórdia de Deus ou da nossa salvação). Pequei por presunção... vezes, isto é, continuar a pecar e deixar de converter-se, contando com a misericórdia de Deus (é pecado mortal); ou expor-se sem razão ao risco de vida ou outro grave perigo, esperando que Deus nos salvará por um milagre (é pecado mortal; às vezes pode ser venial por falta de plena advertência). Tive aborrecimentos, indiferença, desprezo ou até ódio das coisas santas, dos santos ou até de Deus... vezes (ter próprio desprezo ou ódio das coisas santas é pecado mortal; enquanto ao aborrecimento é muitas vezes pecado venial, por falta de malícia e plena advertência).",
          "2º Mandamento — Não jurar seu santo nome em vão. Contra o 2º mandamento pequei: Pronunciei o nome de Deus ou dos santos sem respeito e devoção... vezes (é pecado venial). Jurei... vezes falso (se for próprio juramento falso, é pecado mortal). Jurei... vezes à-toa (é pecado venial em geral). Dizendo simplesmente 'eu juro', já não é fazer um juramento. Roguei pragas... vezes, isto é, proferir maldições contra si mesmo ou contra outros (é pecado mortal; se for sem advertência, pode ser venial). Blasfemei... vezes, isto é, proferi palavras injuriosas contra Deus ou contra os santos (é em geral pecado mortal). Não cumpri... vezes uma promessa que fiz (diga se era grande ou pequena).",
          "Se me obriguei, debaixo de pecado mortal, a cumprir uma promessa de grande valor (isto é, em matéria grave), deixando, em seguida, de cumpri-la por culpa própria, cometo pecado mortal; mas havendo feito uma promessa em matéria leve, a omissão será pecado venial. Não convém fazer uma promessa em assunto grave, sem ter antes consultado o confessor.",
          "3º Mandamento — Guardar os domingos e festas de guarda. Contra o 3º mandamento pequei: Faltei, por minha culpa, à Missa nos domingos e dias santos... vezes (é pecado mortal). Cheguei muito ou pouco tarde à Missa, por minha própria culpa, nos domingos e dias santos... vezes. É muito tarde, quando se chega depois do ofertório; se, neste caso, não ouvirmos outra Missa, sendo possível, cometemos um pecado mortal; se, porém, chegamos antes do ofertório, não somos obrigados a ouvir outra Missa; cometemos, porém, pecado venial, se for por própria culpa.",
          "Fui... vezes irreverente na igreja, rindo-me ou conversando com outros, distraindo-os (muitas vezes o desrespeito não passa dum pecado venial). Trabalhei... vezes nos domingos e dias santos, sem necessidade — diga que trabalho foi e quanto tempo (é pecado mortal, conforme o trabalho e o tempo que empregamos; p. ex., 2 a 3 horas).",
          "4º Mandamento — Honrar pai e mãe. Contra o 4º mandamento pequei: Desobedeci... vezes a meus pais, ou a outras pessoas que fazem as vezes deles (é em geral pecado venial; em coisa grave e segundo certas circunstâncias pode ser mortal). Faltei-lhes ao respeito... vezes, respondendo-lhes mal, talvez com palavras ásperas e grosseiras, ou até desprezando-os no coração por palavras e ações; p. ex.: caçoando ou falando deles (é pecado mortal ou venial, segundo a matéria e o desprezo). Contrariei e aborreci... vezes meus pais por má-criação, em coisa grave ou pequena (se for em coisa grave, p. ex., a ponto de os fazer chorar, pode ser mortal, aliás é venial). Deixei de socorrer a meus pais em suas necessidades... vezes — diga em que coisa foi (é pecado mortal ou venial, conforme a matéria e outras circunstâncias). Desejei grande ou pequeno mal a meus pais... vezes (se era grande mal, é pecado mortal, aliás é venial). Ralhei... vezes de pessoas pobres, velhas e defeituosas (é muitas vezes pecado venial; pode ser mortal, se gravemente ofendemos a tais pessoas).",
          "Neste mandamento também nos devemos examinar sobre o procedimento para com os mestres, professores, patrões e outros superiores. Os pais de família têm de examinar-se sobre os deveres mútuos, como também sobre as obrigações que têm para com seus filhos, como são a boa educação e os bons exemplos que lhes devem. Podem pecar gravemente os pais, descuidando de educar os filhos e instruí-los ou fazê-los instruir sobre os deveres de nossa santa religião, mandando-os, p. ex., para colégios descrentes, ou onde correm risco de perder sua fé católica; ou, por amor cego, não lhes dando a correção necessária, ou não vigiando sobre o procedimento deles, ou dando-lhes maus exemplos.",
          "Igualmente os superiores devem examinar-se sobre as obrigações que têm para com os criados e os mais que estão a seus cuidados, tratando-os bem, dando-lhes o salário conveniente, vigiando também sobre o procedimento deles e proporcionando-lhes o tempo necessário para cumprirem os deveres de cristão, por exemplo, de ouvirem a Santa Missa nos dias de preceito. Também neste ponto os pecados são graves ou leves, segundo a matéria e as mais circunstâncias.",
          "5º Mandamento — Não matar. Contra o 5º mandamento pequei: Briguei com meus irmãos ou outras pessoas... vezes (é, em geral, pecado venial, e pode ser mortal, segundo as circunstâncias, p. ex., tendo ferido gravemente uma pessoa numa briga). Maltratei muito ou pouco, ou até feri outras pessoas... vezes (é pecado mortal ou venial, conforme os maus tratos). Se, por culpa grave, prejudicarmos gravemente a vida corporal do próximo, devemos indenizá-lo de tudo quanto por nossa causa sofreu; p. ex., nas despesas do médico, da farmácia e a perda do lucro, etc. Desejei grande ou pequeno mal a mim ou outras pessoas... vezes (segundo o mal que desejamos, é pecado mortal ou venial). Injuriei... vezes outros, chamando-lhes nomes; p. ex., de demônio, ou proferindo talvez injúrias mais graves. Segundo a injúria que, com tais palavras, se faz ao próximo, o pecado é mortal ou venial; convém, porém, saber que chamá-lo pelo nome do demônio e outros semelhantes é, em geral, pecado venial, suposto que não sejam nomes gravemente injuriosos que, geralmente, constituem pecado mortal. Tive raiva, ódio ou inimizade, muito ou pouco tempo, duma pessoa... vezes. Ter raiva por algum momento é, geralmente, pecado venial; mantendo, porém, o ódio ou inimizade por mais tempo, pode ser pecado mortal: para fazer uma boa confissão, é necessário perdoar de coração ao nosso inimigo e ter a vontade sincera de deixar a inimizade. Tive desejo de me vingar em coisa grande ou pequena... vezes (o desejo de vingança é pecado venial ou mortal, conforme a matéria e as mais circunstâncias). Fiz pecar os outros por maus exemplos, conselho, palavras ou obras... vezes — diga-se em que pecado foi. São tentações, más ações, etc., que levam outros a pecarem, dando escândalo. Segundo o pecado, de que fomos causa, o escândalo é pecado mortal ou venial. Lembremo-nos sempre das palavras ameaçadoras de Nosso Senhor Jesus Cristo acerca dos que dão escândalo: 'Quem escandalizar a um destes pequeninos, que creem em mim, melhor lhe fora que lhe pendurassem ao pescoço uma mó de moer e o lançassem ao fundo do mar'. Maltratei bichinhos e outros animais... vezes (é, em geral, pecado venial).",
          "6º e 9º Mandamentos — Não pecar contra a castidade; não desejar a mulher do próximo. Observação: Todos os pensamentos, desejos, palavras e ações voluntárias, diretamente contra o 6º mandamento de Deus, são pecados mortais; podem tornar-se veniais, às vezes, por falta de plena advertência ou pleno consentimento. É por isso que não convém indicar a distinção de pecados mortais e veniais. Cumpre notar, porém, que, além de indicar o número das vezes, é necessário declarar também as circunstâncias que constituem nova espécie de pecado. Assim, p. ex., deve-se declarar se os desejos ou ações contra a castidade se referem à própria pessoa ou a pessoa do mesmo ou de outro sexo, a pessoas casadas, parentes, etc., sem, contudo, jamais dizer o nome de pessoa alguma.",
          "Acusa-te com sinceridade e confiança de tudo quanto neste ponto grava a tua consciência, pois que a menor falta voluntária contra a virtude da castidade e pureza do coração pode fàcilmente ser a fonte de uma torrente de pecados e crimes vergonhosos, que arrastam a alma para a desgraça eterna do fogo do inferno. 'Bem sabeis', diz o grande apóstolo São Paulo, 'que nenhum impuro tem herança no reino de Deus' (Ef 5,5). Diga, pois, o mundo o que quiser, verdade é que os pecados da impureza levam às portas do inferno, e às vezes muito cedo e muito depressa. Procura purificar cada vez mais a tua alma de toda mancha por meio de uma humilde acusação no santo sacramento da penitência. Não te deixes levar, vencido por vergonha falsa, a calar um pecado mortal, ou outra coisa que julgas dever dizer. Não sabendo se alguma coisa é, ou não, pecaminosa, ou se não souberes exprimir-te bem, consulta o confessor, que te responderá em nome de Deus. Tem para sempre um amor de predileção à virtude preciosa da santa pureza, lembrando-te constantemente das sublimes palavras de Jesus: 'Bem-aventurados os limpos de coração, porque eles verão a Deus' (Mt 5).",
          "Contra o 6º e 9º mandamentos pequei: Pensei voluntariamente em coisas desonestas... vezes. Tive o propósito de ver, ouvir, falar, ler, ou de fazer coisas desonestas... vezes. Olhei de propósito e com prazer para figuras e outras coisas desonestas, ou para pessoas descompostas... vezes. Cantei cantigas imorais... vezes. Tive conversas desonestas... vezes (falar nomes indecentes em geral é pecado venial). Gostei de ouvir coisas desonestas... vezes. Li livros, jornais ou outras coisas imorais... vezes. Emprestei tais livros ou escritos a outros... vezes. Se pudermos dispor de tais livros ou escritos, procuremos queimá-los, ou, de outra maneira, destruí-los. Usei vestidos indecentes... vezes. Ir mascarado, sem usar vestidos indecentes e sem faltar à modéstia, não é pecado em si; torna-se, porém, muitas vezes pecaminoso por causa de escândalos e outras circunstâncias. Mostrei a outros imagens desonestas... vezes. Se, ao tratar de figuras ou estampas desonestas, delas pudermos dispor, procuraremos destruí-las. Faltei à modéstia ao vestir ou ao despir-me, só ou em outras ocasiões semelhantes, só ou em presença de outros... vezes. Provoquei, ou ajudei a outros por minhas palavras, ações, etc., a cometerem um pecado desonesto... vezes.",
          "Também deves examinar-te e acusar-te sobre as ocasiões próximas de pecado, isto é, sobre pessoas ou ocasiões que sempre ou quase sempre te levam ao pecado, como são certas pessoas, más companhias, teatros ou bailes indecentes ou perigosos, certos lugares e conhecimento ou reuniões perigosas, livros indecentes ou perigosos, ou enfim outros divertimentos desonestos ou perigosos. Quem se expõe voluntariamente a tais ocasiões, sabendo que poderão causar-lhe a ruína espiritual, já comete, pela mesma frequência de tais lugares, pessoas, etc., um pecado mortal. Convém notar, porém, que certas ocasiões são absolutamente perigosas para todos, enquanto outras somente o são relativamente, isto é, para certas pessoas ou por causa de certas circunstâncias. Se nos acharmos em ocasiões perigosas, que não podemos deixar, por causa de nosso ofício, ou outra gravíssima razão, devemos procurar vencer as tentações pela oração, pela vigilância sobre os nossos sentidos e pela frequência dos sacramentos. Quem na confissão não tiver vontade firme de deixar tais ocasiões próximas do pecado, não poderá receber a absolvição. Não digas que não as podes deixar. Manifesta humildemente ao confessor as fraquezas e feridas de tua alma, escuta os conselhos que te der, e Deus não deixará de dar-te as graças necessárias para venceres cada vez mais os inimigos da tua alma.",
          "7º e 10º Mandamentos — Não furtar; não cobiçar as coisas alheias. Observação: A gravidade dos pecados contra o 7º e 10º mandamentos de Deus depende dos objetos que se tiraram ou injustamente se retiveram, ou se estragaram, como também das circunstâncias que a aumentam ou diminuem. Assim, um furto feito na igreja ou a um pobre é maior pecado do que se fora feito em lugar profano, ou a um rico. Feita esta observação, deixamos também nesses dois mandamentos de indicar a distinção dos pecados em mortais e veniais.",
          "Contra o 7º mandamento pequei: Furtei alguma coisa... vezes — dize se era coisa de valor. Tive o propósito de furtar alguma coisa grande ou pequena... vezes. Comprei ou guardei coisas roubadas... vezes — dize se eram coisas de valor. Fiquei com coisa achada, sem procurar os donos... vezes — dize se eram coisas de grande valor. Fiquei com coisas emprestadas... vezes — diga se tinham grande ou pequeno valor. Não paguei, ou demorei em pagar, por muito tempo, sem justa razão, as minhas dívidas... vezes (é pecado mortal ou venial, segundo as dívidas que não se pagaram ou segundo a perda que outro passou pela demora injusta). Enganei outros no preço, na medida, nos objetos que lhes vendi, ou em outros negócios ou encomendas... vezes. Prejudiquei outros nos seus bens, estragando ou destruindo alguma coisa... vezes — dize se foi em coisa grande ou pequena. Ajudei outros a fazerem tais pecados contra o 7º mandamento, mandando, provocando, aconselhando, aprovando, guardando silêncio, ou não proibindo tais ações ilícitas, quando estava obrigado a falar e proibi-las, por ser pai, senhor, chefe ou empregado... vezes. Arrisquei a minha fortuna, ou de minha família, em jogos ou de outras maneiras... vezes.",
          "8º Mandamento — Não levantar falso testemunho. Contra o 8º mandamento pequei: Menti... vezes (é geralmente pecado venial). Prejudiquei outros mentindo... vezes — dize se foi em coisa grave ou leve (é pecado mortal ou venial, segundo o prejuízo que causamos ao próximo, mentindo). Murmurei da vida alheia, isto é, falando mal do próximo, criticando-o ou censurando-o, ou descobrindo faltas graves ou leves dele, sem necessidade... vezes.",
          "A gravidade do pecado depende da gravidade do mal que se descobre do próximo, como também da nossa malícia ou má intenção; porque muitas vezes se fala em tais objetos, sem reparar propriamente no mal que se profere, o que muitas vezes diminui o pecado. Quem descobriu uma falta grave do próximo, sem necessidade, deve esforçar-se a restituir-lhe a fama, que por sua culpa perdeu, desculpando-o, ou elogiando as suas boas qualidades, etc.",
          "Levantei falso testemunho, grande ou pequeno, contra o próximo... vezes (a calúnia é pecado grande ou pequeno, conforme a gravidade da matéria). Quem levantou grande falso contra o próximo deve revogá-lo para restituir-lhe a fama e assim obter o perdão do seu pecado; em dúvida sobre este ponto, peça-se o conselho do confessor. Provoquei, gostei, ou favoreci tais conversas contra o próximo, por palavras, aplausos, gestos, etc... vezes — dize se foi em coisa grave (é pecado mortal ou venial, segundo o prejuízo que causamos ao próximo com tais conversas). Fiz juízo temerário do próximo, isto é, julgar mal dele sem justa razão... vezes — dize se foi em coisa grande ou leve (é pecado mortal ou venial, segundo os maus conceitos que, sem fundamento, formamos do próximo e segundo os motivos que para isso tivemos). Causei discórdias, grandes ou pequenas, entre pessoas, por minhas murmurações, calúnias ou conversas... vezes (é pecado mortal ou venial, segundo as discórdias que, com nossas murmurações, etc., causamos). Fiz pouco caso de pessoa doente, pobre, ou melhor do que eu... vezes (é muitas vezes pecado venial; pode ser mortal, se se trata de coisa grave, como, p. ex., se deu com os fariseus, cuja hipocrisia Jesus repreendeu com palavras severas).",
          "Igualmente examinemos se, porventura, descobrimos, sem justa razão, algum segredo que nos confiaram, ou se violamos qualquer outro segredo, lendo cartas alheias, sem ter licença, ou por outro modo. A gravidade do pecado neste ponto sempre depende da importância do segredo que descobrimos ou de qualquer modo violamos, como também de outras circunstâncias; mas muitas vezes a amizade diminui a gravidade do pecado. (9º Mandamento: não desejar a mulher do próximo — veja pecado contra o 6º mandamento. 10º Mandamento: não cobiçar as coisas alheias — veja pecado contra o 7º mandamento.)",
          "Contra os preceitos da Santa Igreja — Deixei, por minha culpa, de confessar-me uma vez por ano e de comungar pelo tempo da Páscoa (é pecado mortal). O tempo da comunhão pascal foi determinado pela Santa Igreja, a fim de que todos os fiéis, ao menos uma vez por ano, se chegassem à mesa sagrada. Para proporcionar a todos tempo suficiente de cumprir esta santa obrigação, o prazo da comunhão é bastante prolongado nas diversas dioceses. Estende-se, no Brasil, desde o domingo da Setuagésima, até à festa de São Pedro e São Paulo, 29 de junho.",
          "Comi carne nos dias proibidos pela Santa Igreja, sem ter licença, ou sem outra razão grave... vezes (é pecado mortal ou venial, segundo a quantidade da carne e conforme outras circunstâncias). São obrigados a guardar abstinência os que tiverem 7 anos completos. Os que têm 21 anos de idade devem examinar-se também se têm deixado de jejuar sem justa razão, como são doenças, trabalhos pesados, ou dispensa. A gravidade deste pecado depende de diversas circunstâncias. Se tivermos dúvida a respeito do jejum, perguntemos ao confessor. Os dias de jejum e abstinência encontram-se no apêndice deste livro.",
          "Os pecados capitais — Fui vaidoso... vezes (é pecado venial). Fui orgulhoso, desprezando talvez os pobres e outros... vezes (é pecado venial, pode ser mortal, se gravemente ofendemos o próximo com o nosso desprezo e por outras razões). Fui avarento... vezes (é pecado mortal ou venial, segundo a gravidade da avareza). Cuidemos bem que, sob o pretexto de falsa economia, não caiamos no vício da avareza, apegando-nos com imoderação ao dinheiro e aos mais bens caducos deste mundo, tratando os pobres com dureza, etc. Tive inveja dos outros... vezes (é muitas vezes pecado venial; tratando-se, porém, de coisas graves, pode ser pecado mortal, como foi a inveja de Caim). Alegrei-me dos castigos ou desgraças do próximo... vezes (é pecado mortal ou venial, segundo o mal de que nos regozijamos e segundo a nossa malícia e advertência). Fiquei com raiva... vezes (é as mais das vezes pecado venial. Pode ser mortal segundo certas circunstâncias. Quem se indignar com justa razão, como, p. ex., os pais castigando os filhos para corrigi-los, não peca). Fiquei com preguiça, deixando, talvez, por isso, de cumprir as obrigações do meu estado... vezes (é, geralmente, pecado venial; pode ser mortal, se a preguiça for causa ou ocasião de graves prejuízos materiais ou espirituais). Guarda-te deste pecado, porque é a fonte de muitos crimes.",
          "Lembrando-te ainda de outros pecados que talvez não se achem neste método de exame de consciência, não deixes de declará-los também ao confessor. Assim, p. ex., cada um deve examinar-se também sobre as obrigações do próprio estado, aqui não especificadas, como as do médico, advogado, etc., etc."
        ]},
      { id: "contricao-bom-proposito", title: "A Contrição e o Bom Propósito", page: 102,
        text: [
          "Explicação — A contrição ou arrependimento é a condição mais necessária e mais importante para se obter o perdão dos pecados, pois sem a contrição não há perdão. Pode dar-se o caso de que a acusação dos pecados a um sacerdote se torne impossível, por falta de sacerdote, ou por ter o moribundo perdido a fala, etc., porém a contrição não se pode dispensar. Há muitos que aplicam o máximo cuidado no exame de consciência, achando mal o tempo para arrepender-se bem dos pecados.",
          "Não te contentes, pois, em fazer precipitadamente, pela boca, alguns atos de contrição; mas procura compenetrar o teu coração duma verdadeira compunção e dor, duma detestação e dum aborrecimento sincero das culpas cometidas, junto com o propósito de emenda. Não é necessário exprimi-lo com lágrimas e outros sinais sensíveis de dor dos pecados; é uma prova de arrependimento sincero termos a vontade firme de nos emendar, de evitar as ocasiões próximas do pecado e de empregar os meios necessários de nos emendar. Para fazer uma boa confissão é necessário arrepender-se ao menos de todos os pecados mortais e ter a vontade firme de deixá-los no futuro. A respeito dos pecados veniais, convém notar que, embora não tenhamos a obrigação de confessá-los, é contudo necessário arrependermo-nos daqueles que se apresentam ao tribunal da penitência; pois confessar os pecados veniais, sem propósito de emenda, é ridicularizar o sacramento da penitência.",
          "Para nos arrependermos bem, é necessário conhecermos os motivos de contrição que a fé nos ensina. Estes podem proceder do temor ou do amor de Deus: daquele, se nos arrependermos por ter perdido o céu e merecido os castigos do inferno e do purgatório; procedem do amor de Deus, se principalmente nos arrependermos por ter ofendido a Deus, que é o nosso maior benfeitor e melhor Pai, o nosso amantíssimo Salvador, nosso Criador e Senhor, nosso sumo e amantíssimo bem.",
          "A contrição excitada pelo temor de Deus chama-se contrição imperfeita, e é suficiente para fazer uma confissão válida; a contrição excitada pelo amor de Deus chama-se contrição perfeita; seu efeito é justificar o pecador ainda antes de receber o sacramento da penitência, contanto que tenha sincero desejo de se confessar. Apesar de ser suficiente a contrição imperfeita, procuremos sempre ter uma contrição perfeita, junto com o propósito de nos confessarmos sacramentalmente cada vez que tivermos a grande desgraça de haver cometido um pecado mortal.",
          "Intimamente unido com a sincera dor dos pecados está o bom propósito, ou a vontade firme e séria de emendar-se e de não pecar mais, isto é, de evitar firmemente todos os pecados mortais e as ocasiões próximas do pecado, de prestar a satisfação devida, como são: o fiel cumprimento da penitência que o sacerdote nos há de impor, a obrigação de indenizar o próximo por tudo que, por nossa causa, sofreu, e, afinal, empregar os meios necessários de emenda, tais quais são a vigilância sobre nós mesmos, a frequência dos sacramentos, a oração e, principalmente, o fiel cumprimento dos deveres de estado. Muito convém também pôr em prática os conselhos e instruções do confessor, o qual, como representante de Deus e médico das almas, bem saberá indicar o remédio conveniente para a salvação das almas.",
          "Para nos arrependermos bem dos pecados cometidos, façamos devota e pausadamente quatro considerações, segundo as fez São Carlos Borromeu, Bispo de Milão, na meditação que segue."
        ]},
      { id: "meditacao-carlos-borromeu", title: "Meditação de São Carlos Borromeu", page: 104,
        text: [
          "Para nos arrependermos bem dos pecados cometidos, façamos devota e pausadamente quatro considerações, segundo as fez São Carlos Borromeu, Bispo de Milão:",
          "1ª Transporta-te em espírito à beira dum túmulo. Imagina uma cova. Que é que lá verias? Um cadáver apodrecido, roído por milhares de bichos, tão feio, espalhando cheiro tão desagradável, que te custaria suportar tal presença. Eis aqui o homem — rei da terra, a criatura mais formosa e mais nobre deste mundo; um montão de ossos, uma comida de vermes! E que foi que o reduziu a estado tão horrível? Foi a morte. E quem veio introduzir a morte neste mundo? O pecado. Adão e Eva comeram o fruto proibido: desobedeceram a Deus e foram condenados à morte; e com eles, todo o gênero humano. Eis a consequência dum só pecado mortal! É o pecado que transforma o corpo humano — obra tão esplêndida e artificiosa da onipotência divina — num monturo de podridão. Foi um único pecado mortal que, num momento, transformou os anjos mais formosos no estado mais feio e abominável que há: em demônios. Que grande mal, pois, deve ser o pecado mortal! Sim, muito mais feio e mais horrível do que um cadáver reduzido a podridão...",
          "Contam que na antiguidade um tirano, para atormentar o seu inimigo do modo mais cruel possível, mandou-o ligar vivo a um cadáver. Que castigo horrível — dia e noite ser amarrado a um cadáver apodrecido! Muito mais feia, porém, é a alma manchada com o pecado mortal. Essa alma, feita à imagem de Deus — outrora tão formosa, um templo de Deus, mais bela que o mais lindo jardim de flores — agora uma morada, uma escrava do demônio! E, talvez, já haja muito tempo que vendeste, que entregaste tua alma ao demônio, dando entrada em teu coração a este teu inimigo capital, pelo pecado grave. Ah! como és infeliz agora! Em lugar de paz e de alegria, agora remorsos horríveis. Não permitais, meu Deus, que mais uma vez entregue minha alma imortal ao demônio, dando a meu corpo um prazer proibido, satisfazendo os desejos da carne, que sempre se revolta contra o meu espírito; desta carne que um dia vai ser reduzida a pó e cinza, a uma comida de bichos. Fazei que vença as minhas más inclinações, principalmente esta..., a fim de que um dia meu corpo ressuscite glorioso, para participar da glória celeste.",
          "2ª Ergue teu espírito ao céu. Imagina a coisa mais bela e mais sublime que há neste mundo — talvez um mimoso jardim no brilho das mais belas flores; ou uma cidade, segundo a descreve São João no seu Apocalipse — uma cidade com ruas de ouro puro, com portas de pérolas e brilhantes, com muros de pedras preciosas. Tudo isso, comparado ao céu, não é mais nada do que a fraca luz duma pequena lâmpada, em comparação ao sol radioso. Imagina um homem a quem foi concedido gozar — talvez uma vida inteira — todas as alegrias e prazeres que desde Adão pôde experimentar um pobre mortal: Todos esses gozos e deleites, comparados à glória do céu, são como uma gota de água em comparação ao oceano imenso. E este lugar de delícias era destinado para ti; mas, pelo pecado mortal, perdeste o direito de entrar naquela mansão celeste. Um único pecado mortal — e perdido está o céu com suas delícias. Ó meu Deus, que coisa horrível deve ser o pecado mortal, que nos priva dum bem tão grande e sublime! E tu o soubeste, minha alma; e, apesar disto, cometeste o pecado mortal, renunciaste à tua eterna salvação no céu, talvez por algum dinheiro que tiraste, talvez por outras tantas injustiças que cometeste contra o próximo, talvez por um prazer ilícito, por um pecado desonesto! Ah, que loucura — vender, perder sua eterna felicidade por um momento de prazeres proibidos — trocar o céu por algumas moedas, um punhado de bens e riquezas passageiras! Porventura queres de novo perder o céu, cometendo um pecado mortal? Transporta o teu espírito mais uma vez àquela região celeste, e contempla o Senhor do céu sentado no seu trono, cercado de majestade tremenda, de glória indizível. Imagina os milhares e milhares de espíritos angélicos, trêmulos, prostrados diante do trono de Deus, que, com as faces veladas e cheios de respeito e santa reverência, cantam incessantemente o 'Santo, santo, santo'. Eis como o céu e a terra se dobram diante da Majestade divina, e como tudo obedece à santíssima vontade de Deus.",
          "E tu — criatura tão vil e miserável — te atreveste a negar obediência a este Deus tão santo, tão forte, tão poderoso, e, ao mesmo tempo, tão bondoso — calcando aos pés a sua lei, transgredindo os seus mandamentos, provocando e desprezando a sua justa ira, afligindo amargamente o seu Coração paterno, que tanto te ama e te encheu de tantos benefícios. Prostra-te de joelhos na santíssima presença de Deus e, do fundo do teu coração, dize-lhe: 'Ó Deus de santidade e de misericórdia infinita, detesto agora sinceramente todos os pecados, com que na minha maldade ofendi a vossa divina majestade, desprezando a bondade do melhor dos pais. Ah, lançai um olhar de compaixão sobre mim, vosso filho ingrato, pois prometo ser agora e sempre um filho obediente, e não tornar a ofender-vos pelo pecado mortal'.",
          "3ª Desce em espírito ao inferno, e contempla os tormentos horríveis que lá sofrem os condenados. Queimar um pouco o dedo já causa uma grande dor, por nada deste mundo o deixarias, por uma hora inteira, no fogo. Os condenados, porém, sofrem num fogo muito mais ardente do que o nosso — tormentos horríveis no meio das chamas — e nem uma gota de água lhes é concedida para refrescar a sua língua. E quanto tempo são atormentados os condenados? Talvez 1 dia, 1 ano, ou um século? Isto não seria nada. Judas já está no inferno há 1900 anos, sem um momento de sossego e de descanso, e ainda que sofra mais 1900 anos, ou até 19.000, ou 19.000.000 de anos, nunca há de conseguir descanso; nunca virá o fim de tantos tormentos e dores; pois as penas são eternas, nunca terão fim. Os condenados sempre são atormentados por estes dois pensamentos: nunca, sempre. Nunca sair, sempre ficar na companhia das criaturas mais perversas e desgraçadas. Agora, minha alma, pergunta-te qual a causa de tormentos tão horríveis. É o pecado, o pecado mortal. E basta um só pecado mortal para te fazer merecedor de tais castigos da justiça divina. Se o bom Deus é o Deus de misericórdia — que não quer a morte do pecador, mas sim que se converta e viva — se ele castiga tão severamente o pecado, por acaso não deves estremecer e temer de tornar a ofender este Juiz tremendo e severo? Ah, promete agora emendar-te. Ainda há tempo. Sim, meu Deus, antes morrer, que vos ofender pelo pecado mortal. Dai-me força para evitá-lo, principalmente este... (aqui digas o pecado a que te vês mais inclinado).",
          "4ª Transporta teu espírito ao Calvário e contempla a Jesus crucificado. As dores que teu Salvador sofre são tão horríveis, que te deviam mover à compaixão, mesmo se fosse o teu inimigo mortal que lá padecesse. Mas é teu Salvador! Contempla-o: desde a ponta dos pés à cabeça, não há nem um ponto do seu corpo que não fosse martirizado; todo o corpo ferido, todo o corpo uma chaga. A cabeça é atormentada pela coroa de espinhos agudos; a boca, pela sede ardente; as mãos e os pés são traspassados por pregos duros; a alma santíssima é abismada no mais profundo abandono. O verme, quando pisado, pode torcer-se; Jesus nem sequer pode mover-se na cruz. E quem é aquele que tão cruelmente é maltratado? Talvez um malfeitor? Não. É o mais santo, o mais inocente — é o próprio Filho de Deus. E por que se deixou pregar na cruz? Por causa de teus pecados — para salvar-te da morte eterna do inferno, para reconciliar-te com Deus: Jesus, o Filho de Deus, morre na cruz. Para salvar o servo, o Filho é condenado à morte! Oh, que amor! E tu soubeste quanto custou a teu Jesus tua alma imortal — quantas dores, quantos açoites, quantas gotas de seu sangue preciosíssimo! E, apesar disto, calcaste o sangue de Deus aos pés, cometendo o pecado mortal. Sim, para pagar a tua desobediência e o teu orgulho, Jesus carregou a sua cruz. Para satisfazer os teus pensamentos e desejos pecaminosos foram-lhe enterrados aqueles espinhos pungentíssimos. Aquela sede ardente sofreu-a Jesus por causa de tantas palavras livres e indecentes ou ofensivas ao próximo! E, para pagar tantas ações ilícitas e pecaminosas, Jesus recebeu aqueles açoites horríveis e se deixou cravar com pregos duros no lenho da cruz.",
          "Minha alma, queres pregar mais uma vez a teu Jesus na cruz? Ajoelha-te diante da imagem de teu Jesus crucificado; pede-lhe perdão por tanta ingratidão, e promete nunca mais ofender a teu amável Salvador. Dize-lhe de coração contrito: 'Ah, meu Jesus, por amor de vossas cinco chagas, por amor de vosso sangue preciosíssimo, lavai a minha pobre alma de toda mancha do pecado. Deixai cair sobre minha alma uma só gota de vosso precioso sangue, tão copiosamente derramado, e minha alma será inteiramente purificada, e poderei chamar-me outra vez vosso filho. Ó doce Jesus, que tanto me amais: fazei que eu vos ame cada vez mais!'",
          "Vendo excitada em ti, por meio destas considerações, uma contrição sincera, convém acrescentar ainda o seguinte."
        ]},
      { id: "ato-mais-breve", title: "Ato de Contrição e Bom Propósito", page: 108,
        text: [
          "Eis-me aqui, meu Deus, cheio de confusão à vista de minhas culpas. Ah, quantas vezes pequei! Não sou digno de ser chamado vosso filho. Os anjos que pecaram, logo reprovastes e lançastes no inferno. Adão e Eva, logo depois de terem comido o fruto proibido, foram expulsos do paraíso! Mas a mim ainda me suportastes. Muitos homens lançastes no inferno, ou os condenastes a sofrer as penas horríveis do purgatório, porque vos ofenderam. Mas a mim ainda me poupastes! Quanta gratidão vos devia por tanta bondade, e quão ingrato fui para convosco, meu Pai misericordioso! Esqueci-me de tantos benefícios que me fizestes. Vós me criastes para o céu, mas eu nada fiz para alcançá-lo. Vosso Filho unigênito me remiu por sua dolorosa paixão e morte na cruz, derramando, por amor de mim, todo o seu sangue. Mas eu, em vez de mostrar gratidão a tanto amor, renovei a sua paixão com os meus pecados. Ó meu Deus, perdoai-me! Sei que fiz mal — pesa-me de não vos ter amado, mas sim desprezado e ofendido! Sim, meu Deus, envergonho-me e arrependo-me agora, do fundo de meu coração, de todos os meus pecados, e proponho firmemente não tornar a ofender-vos. Quero agora emendar-me sinceramente, cumprindo fielmente os vossos mandamentos. Penetrai, Senhor, a minha alma com a graça de uma verdadeira penitência, que me faça mudar de vida e evitar as ocasiões de pecado.",
          "Virgem Santíssima e Mãe de misericórdia, intercedei por mim, para que obtenha o perdão do passado, com as graças necessárias para resistir ao pecado no futuro. Meu bom anjo, zeloso guarda de minha alma, ajudai-me a erguer-me e a evitar todos os pecados. Amém."
        ]},
      { id: "pratica-confissao", title: "Prática da Confissão", page: 110,
        text: [
          "Tendo feito, com fervor e devoção, o ato de contrição, e prometido a Deus, com toda a sinceridade, deixar de pecar e emendar seriamente a vida, entra, com os olhos baixos e as mãos postas, no confessionário, onde o sacerdote te receberá em nome de Jesus. Não podendo logo chegar-te aos pés do ministro de Deus, espera com paciência e recolhimento, meditando sobre os motivos da contrição, ou rezando orações que te movam mais ao arrependimento. Quem tem profundo pesar de ter ofendido a Deus, não se distrai voluntariamente antes ou depois da confissão, vagueando com os olhos por toda parte, rindo-se ou conversando. No confessionário, ajoelha-te humildemente, como se estivesses aos pés de Jesus mesmo, e dize:",
          "✠ Pelo sinal da santa cruz ✠ livrai-nos, Deus Nosso Senhor, ✠ dos nossos inimigos. ✠ Em nome do Padre e do Filho e do Espírito Santo. Amém.",
          "Padre, dai-me a vossa bênção, porque pequei.",
          "Eu, pecador, me confesso a Deus todo-poderoso, à bem-aventurada sempre Virgem Maria, ao bem-aventurado São Miguel Arcanjo, ao bem-aventurado São João Batista, aos santos apóstolos São Pedro e São Paulo, a todos os santos e a vós, padre, que pequei muitas vezes por pensamentos, palavras e obras, por minha culpa, minha culpa, minha tão grande culpa. Portanto, peço e rogo à bem-aventurada sempre Virgem Maria, ao bem-aventurado São Miguel Arcanjo, ao bem-aventurado São João Batista, aos santos apóstolos São Pedro e São Paulo, a todos os santos e a vós, padre, que rogueis a Deus Nosso Senhor por mim. Amém.",
          "O sacerdote perguntará há quanto tempo não te confessaste, se recebeste a absolvição e se cumpriste a penitência.",
          "Em seguida, procura declarar cada um dos teus pecados mortais, com as circunstâncias necessárias, dizendo também o número dos pecados, quanto possível. Não acuses outras pessoas, nem digas coisas supérfluas. Tendo assim declarado sinceramente todos os teus pecados, podes dizer:",
          "Destes pecados, e de todos os pecados da minha vida passada, peço a Deus perdão e a vós, padre, penitência e absolvição.",
          "Em seguida, responde sinceramente às perguntas que o confessor talvez te fizer, presta atenção aos conselhos do confessor e cumpre fielmente a penitência que der. Depois, inclinando humildemente a cabeça, reza com devoção o ato de contrição (veja pág. 109).",
          "Ouvida a absolvição, responde: 'Deus seja louvado!'. Ao sair do confessionário, dize: 'Jesus Cristo seja para sempre louvado!' e retira-te com todo o recolhimento.",
          "Nota: Havendo muita afluência de penitentes, pode-se abreviar no princípio da confissão, dizendo: 'Padre, dai-me a vossa bênção, porque pequei. Há tantas semanas... meses, que me confessei; destes pecados me acuso, etc.'. Quem tiver cometido apenas faltas veniais, convém acrescentar à confissão algum pecado mais grave da vida passada, já confessado, que mais te mova à contrição, dizendo, depois de ter acusado os pecados veniais: 'Acuso-me, enfim, de todos os pecados da minha vida passada, principalmente de ter...' (aqui dirás algum pecado da vida passada, já confessado)."
        ]},
      { id: "depois-confissao", title: "Orações para Depois da Confissão", page: 112,
        text: [
          "Ação de Graças — Meu Deus e meu Pai, como hei de manifestar-vos a minha gratidão pela bondade, pelo amor, pela misericórdia que agora tivestes comigo! Vós me destes, pelos merecimentos de Jesus Cristo, o perdão de todos os meus pecados, pela boca de vosso sagrado ministro. É verdade, meu Deus, vós não quereis a morte do pecador, mas sim que ele se converta e viva. Ó minha alma, alegra-te no Senhor, glorifica a teu Deus, dá graças sem cessar a teu Salvador.",
          "Salmo 102 — 1. Bendiz, ó minha alma, o Senhor, e tudo quanto palpita em mim, bendiga o seu santo nome. 2. Bendiz, ó minha alma, o Senhor, e não esqueças nenhum de seus benefícios. 3. Ele é quem perdoa todas as tuas culpas; é quem cura todas as tuas enfermidades. 4. É ele quem resgata da morte a tua vida, e quem te coroa de misericórdia e de graças. 5. É quem sacia todos os teus desejos, para que, como a da águia, se renove a tua juventude (espiritual). 6. É o Senhor quem faz misericórdia e justiça a todos os que sofrem injúrias. 7. Fez conhecer a Moisés os seus caminhos, e aos filhos de Israel a sua vontade. 8. O Senhor é compassivo, paciente e de muita misericórdia. 9. Não ficará irado para sempre, nem ameaçará perpetuamente. 10. Não nos tratou segundo os nossos pecados, nem nos puniu segundo as nossas maldades. 11. Porque, como os céus imperam sobre a terra, assim domina sua misericórdia sobre os que o temem. 12. Quanto dista o oriente do ocidente, tanto afastou de nós os nossos pecados. 13. Como um pai se compadece dos seus filhos, assim se compadeceu o Senhor dos que o temem. 14. Porque ele sabe que fomos formados da terra, lembra-se de que somos pó. 15. Os dias do homem passam como feno; como a flor do campo, assim floresce, e assim passa. 16. Porque como um sopro de vento passará ele, e não subsistirá, e não conhecerá mais o seu lugar. 17. Mas a misericórdia do Senhor estende-se desde a eternidade até a eternidade sobre os que o temem. 18. E sua justiça, sobre a descendência dos filhos que guardam a sua aliança e se lembram dos seus mandamentos, a fim de os cumprirem. 19. O Senhor preparou o seu trono no céu, e o seu reino dominará sobre todos. 20. Bendizei o Senhor, vós todos, os seus anjos, poderosos e fortes, que sois executores de sua palavra, prontos para obedecer à voz de suas ordens. 21. Bendizei o Senhor, todos os seus exércitos celestes e ministros seus, que fazeis a sua vontade. 22. Bendizei o Senhor, vós todas as suas obras, em toda a extensão de seu império. 23. Bendize, ó minha alma, o Senhor.",
          "Renovação do bom propósito — Deus de bondade e misericórdia, o mais brando e mais amoroso de todos os pais, aceitai benignamente estas ações de graças que vos oferece um pecador, o qual por vossa infinita misericórdia se tornou vosso filho. Eu vos amo, meu Senhor e meu Deus, e meu coração abrasa-se no vosso amor. Por isso torno a tomar a firmíssima resolução de evitar, aborrecer e detestar o pecado para sempre e por amor de vós. Seja a maior consolação e felicidade da minha vida cumprir fielmente os vossos santos mandamentos. Quero reparar as minhas faltas e os meus pecados pela oração, pela mortificação dos meus sentidos, e pelo santo zelo e fervor no vosso serviço. Senhor, vós sabeis todas as coisas, sabeis também que agora vos amo; sabeis que é sincero o meu bom propósito de amar-vos até ao fim. Mas, ó meu Jesus, sou frágil e inconstante; vós mesmo dissestes no horto das Oliveiras: 'O espírito, na verdade, está pronto, mas a carne é fraca'. Peço-vos, portanto, humildemente, com santa confiança, ajudai-me com a vossa divina graça e fortalecei-me no combate contra as tentações.",
          "Meu amabilíssimo Jesus, encerrai-me em vosso Coração, para que nem o mundo, nem o demônio, nem divertimentos, nem tribulações, nem a mesma morte me possam separar de vós. Dai-me a graça da santa perseverança, para que eu possa glorificar, com todos os santos anjos, a vossa infinita misericórdia por toda a eternidade. Amém. Sacratíssimo Coração de Jesus, sede meu refúgio; ó Jesus, vinde a mim e ficai comigo; fazei que eu vos ame cada vez mais, resistindo às tentações com santa energia e sofrendo tudo com paciência por vosso amor.",
          "Reza-se, se for possível, a penitência imposta pelo confessor. Depois podes ainda rezar, em louvor de Nossa Senhora, a seguinte oração:",
          "Oração a Maria Santíssima (para alcançar a perseverança) — Santíssima Virgem Maria, Rainha do céu! Tive a desgraça de cair em pecado, mas me arrependi e recebi perdão no santo sacramento da penitência. Venho humildemente à vossa presença, ó minha santíssima Mãe, para vos agradecer, do fundo do meu coração, por me haverdes ajudado a alcançar de Jesus o perdão de todas as minhas culpas. De novo me consagro ao vosso serviço. Lembrai-vos, ó minha doce Mãe, de que tornei a ser vosso filho; tende compaixão de mim e recebei-me de novo debaixo de vossa maternal proteção. Em vós ponho, depois de Jesus, toda a minha confiança, esperando que não me abandonareis, como me não abandonastes. Ainda estou exposto ao perigo de tornar a ofender o vosso divino Filho, meu Senhor Jesus Cristo, a quem só quero amar até ao último suspiro. Os meus inimigos não dormem, as tentações me hão de perseguir de novo, por toda parte. Protegei-me, Rainha gloriosa do céu, defendei-me, ó minha boa Mãe, socorrei-me contra os ataques do inferno, ó Virgem imaculada. Preservai-me da desgraça imensa de perder a minha alma e ao meu Deus; pois é essa a graça que vos peço, ó Maria, e espero poder alcançá-la pela vossa piedosa intercessão. Amém.",
          "Ó Maria, concebida sem pecado, rogai por nós, que recorremos a vós. São José, meu santo anjo da guarda, todos os anjos e santos, rogai por mim. Amém. Seja amado por toda parte o Sagrado Coração de Jesus. Seja bendita a santa, imaculada e puríssima Conceição da bem-aventurada Virgem Maria, Mãe de Deus.",
          "Lembra-te ainda, em casa, dos bons conselhos do confessor e prepara o teu coração para a sagrada comunhão."
        ]},
      { id: "metodo-breve-exame", title: "Método Breve para o Exame de Consciência", page: 117,
        attribution: "Para pessoas que se confessam mais a miúdo",
        text: [
          "Oração preparatória — Invoca o Espírito Santo, dizendo com toda a devoção: Vinde, Espírito Santo! Enchei os corações de vossos fiéis e acendei neles o fogo de vosso divino amor. ℣. Senhor, enviai o vosso Espírito e tudo será criado. ℟. E renovareis a face da terra. Oremos: Ó Deus, que instruístes os corações de vossos fiéis com a luz do Espírito Santo, concedei que pelo mesmo Espírito saibamos o que é reto e sempre gozemos da sua consolação. Por Cristo Nosso Senhor. Amém.",
          "Depois acrescenta: Meu Deus e Senhor! Vou receber agora o sacramento da penitência. Ajudai-me para bem cumpri-lo, com o auxílio de vossa graça, porque nada posso sem vós. Enviai-me o Espírito Santo, para que conheça bem o número e a gravidade de meus pecados, deles devida e sinceramente me arrependa e faça um firme propósito de não pecar mais. Assisti-me com a vossa graça, para que confesse sinceramente os meus pecados e nada cale que deva dizer, dando-me força para me emendar verdadeiramente.",
          "Santa Maria, Mãe de Deus, rogai por mim, pobre pecador, para que faça uma boa confissão e alcance o perdão de todos os meus pecados. Jesus, Maria, José, esclarecei-me, socorrei-me e salvai-me. Santo anjo da guarda e todos os anjos e santos de Deus, rogai por mim nesta hora. Amém.",
          "Exame de Consciência — 1º Pecados contra Deus. Por pensamentos: dúvidas na fé. Por palavras: blasfêmias, falsos juramentos, contra a religião e seus ministros. Por obras: leitura de livros ímpios, falta ao preceito de ouvir Missa; mau comportamento na igreja.",
          "2º Pecados contra o próximo. Por pensamentos: juízos temerários, inveja, ira, ódio, desejo de vingança. Por palavras: censuras, murmurações, levantar falso testemunho, injúrias. Por obras: prejuízos nos seus bens, furto, fraude.",
          "3º Pecados contra mim mesmo. Por pensamentos: orgulho, desonestidade. Por palavras: mentiras, pragas, palavras, conversas ou cantigas desonestas. Por obras: violação da lei do jejum e abstinência; descuidos nos deveres do meu estado; leitura, vistas, tatos, ações desonestas, só ou com outros.",
          "Nos pecados mortais é preciso, quanto possível, indicar o número.",
          "Ato de contrição (veja pág. 108 ou 109). Em lugar deste ato de contrição, também pode servir o capítulo seguinte da Imitação de Cristo, Livro III, cap. 52 (vejam texto da edição de Petrópolis):",
          "1ª Senhor, eu não sou digno de vossa consolação, nem de vossa visita espiritual; por isso justiça usais comigo, deixando-me pobre e desconsolado. Nem que derramasse um mar de lágrimas, nem assim mereço vossa consolação. Pois só mereço flagelo e punição por tantas ofensas e tão graves delitos que cometi. De maneira que, tudo bem ponderado, não tenho direito nem ao menor conforto. Vós, porém, Deus clemente e benigno, não quereis que pereçam vossas obras; patenteais os tesouros da vossa bondade nos vasos de misericórdia e vos dignais consolar vosso servo, sem merecimento seu algum, de modo sobre-humano, que não se parecem vossas consolações com os vãos discursos dos homens.",
          "2ª Que fiz eu, Senhor, para que me deis a celeste consolação? Bem algum me não lembro que eu fizesse, que antes fui sempre pronto para o mal, e tardio na emenda. É esta a verdade, não há negá-lo; se outra coisa dissera, estaríeis contra mim e não haveria quem me defendesse. Que mereceram meus pecados, senão o inferno, o fogo eterno?",
          "3ª Confesso, com sinceridade, que de todo escárnio e desprezo sou digno, não de ser contado entre os vossos servos. Em que me doam os ouvidos, a bem da verdade, acusarei meus pecados, para alcançar mais segura misericórdia vossa. Que direi eu, de pecado e de confusão coberto? Boca não tenho para dizer senão estas palavras: Pequei, Senhor, pequei; tende piedade de mim, perdoai-me. Deixai-me tempo de exalar minha dor, antes que entre na região tenebrosa, coberta das sombras da morte. Que mais exigis do mísero pecador, senão que se humilhe e arrependa dos seus pecados? Da contrição humilde e sincera nasce a esperança do perdão; serena-se então a consciência assustada, recupera-se a graça perdida, é preservado o homem da futura vingança, em ósculo santo une-se Deus à alma arrependida.",
          "4ª Agradeço-vos, Senhor, o humilde pesar dos pecados, sacrifício de mais suave odor para vós, que o do mais fino incenso. É este o agradável ungüento, que quisestes derramassem sobre vossos sagrados pés, pois nunca desprezastes o coração contrito e humilhado. Na contrição achamos o refúgio contra a fúria do inimigo; ali se emenda o pecador e se purifica de todas as manchas que alhures contraiu."
        ]}
    ]
  },

  // ---------------------------------------------------------
  { id: "sagrada-comunhao", title: "A Sagrada Comunhão", page: 121,
    note: "Ainda a transcrever do livro.",
    prayers: [
      { id: "exercicio-primeira-comunhao", title: "Exercício Piedoso para o Dia da (Primeira) Comunhão", page: 121,
        text: [
          "Advertência — 'O grande dia, há tanto tempo desejado, chegou. Ainda poucos momentos, e meu Jesus estará comigo!' Com tais e semelhantes pensamentos, logo ao acordar, deves ocupar teu coração. Não te distraias com teus vestidos novos, nem com outras coisas desnecessárias. Evita, quanto possível, a conversa com os outros, guardando-te bem recolhido, principalmente no caminho da igreja, cuidando somente em ter bem preparada a tua alma para a vinda de tão grande hóspede. Para a oração da manhã pode servir a seguinte, a qual também poderá servir para os outros dias em que se tomar a santa comunhão.",
          "Oração — Acordei agora, meu Deus, para o dia mais belo e mais feliz de minha vida. Muitas graças vos rendo, Senhor, que em vossa grande bondade e misericórdia me fizestes chegar ao princípio de tão ditoso dia, pelo qual esperei já há tanto tempo. Oh! seja bendito, dia delicioso de alegria e de minha verdadeira felicidade! Ah! quem me dera festejá-lo dignamente com todo o fervor e recolhimento! Afastai de mim, ó meu bom Pai dos céus, tudo o que poderia perturbar a paz e a devoção de minha alma. Fazei que este dia seja só para vós. Dirigi e santificai todos os meus pensamentos, palavras e obras, para que minha alma torne a ser uma digna morada vossa. Eu vos espero ardentemente, ó meu Jesus; vinde, vinde e não tardeis mais! E com estes desejos de amor saúdo e bendigo-vos já agora no Santíssimo Sacramento. Só alguns momentos ainda, e eu estarei convosco, e vós comigo! Oh! hora ditosa! Jesus, comigo, e eu com ele! Ó Jesus, só para vós quero viver e morrer e a vós pertencer na vida e na morte. Ó Maria Santíssima, minha boa Mãe, São José, santo anjo da guarda, e vós, anjos e santos de Deus todos, alegrai-vos comigo e rogai por mim nesta hora. Afastai de mim tudo o que possa desagradar a meu Jesus e acompanhai-me à mesa sagrada. Amém."
        ]},
      { id: "renovacao-promessas-batismo-com", title: "Renovação das Promessas do Batismo", page: 122,
        text: [
          "Palavras que o sacerdote pode dirigir aos meninos, antes da renovação das promessas: Quereis hoje, meus caros meninos, aproximar-vos (pela primeira vez) da mesa sagrada, para receber em vossos corações o vosso Deus e Senhor. Mas, antes de vos confortardes com o pão dos anjos, com a carne do Filho de Deus, renovai solenemente, aqui, na presença de Jesus sacramentado, que daqui a pouco estará presente em vossas almas, na companhia de vossos santos anjos da guarda, debaixo da proteção de Maria Santíssima e de todos os santos e anjos, perante os vossos queridos pais e todos os fiéis que tomam parte nesta solenidade, renovai as promessas de vosso batismo, aprovando e prometendo hoje, pública e solenemente, o que em vosso nome prometeram vossos padrinhos, isto é: renunciar ao demônio, suas obras e suas vaidades, e pertencer só a Jesus, vosso Salvador, e ser fiéis e obedientes à Santa Madre Igreja Católica, Apostólica, Romana, crendo e fazendo tudo o que esta Igreja infalível exige de vós.",
          "Repeti, pois, agora, estas mesmas promessas; Jesus benignamente as escutará como penhor de vossa fidelidade, e confortar-vos-á, na sagrada comunhão, com o pão dos fortes, seu próprio corpo e sangue, dando-vos as graças necessárias para guardardes fielmente até à morte o que agora quereis prometer. Perguntai-vos, pois:",
          "Renunciais ao demônio e a todas as suas obras e vaidades? — Renunciamos.",
          "Credes em Deus Padre, todo-poderoso, Criador do céu e da terra? — Cremos.",
          "Credes também em Jesus Cristo, um só seu Filho, Nosso Senhor; o qual foi concebido do Espírito Santo, nasceu de Maria Virgem; padeceu sob o poder de Pôncio Pilatos, foi crucificado, morto e sepultado; desceu aos infernos; ao terceiro dia ressurgiu dos mortos; subiu ao céu, está assentado à mão direita de Deus Padre todo-poderoso, donde há de vir a julgar os vivos e os mortos? — Cremos.",
          "Credes no Espírito Santo; a Santa Igreja Católica; a comunhão dos santos; a remissão dos pecados; a ressurreição da carne e a vida eterna? — Cremos.",
          "Confessai, pois, esta vossa fé, recitando o Creio em Deus Padre: Creio em Deus Padre, todo-poderoso, Criador do céu e da terra. E em Jesus Cristo, um só seu Filho, Nosso Senhor; o qual foi concebido do Espírito Santo, nasceu de Maria Virgem; padeceu sob o poder de Pôncio Pilatos; foi crucificado, morto e sepultado; desceu aos infernos; ao terceiro dia ressurgiu dos mortos; subiu ao céu, está assentado à mão direita de Deus Padre todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo; a Santa Igreja Católica; a comunhão dos santos; a remissão dos pecados; a ressurreição da carne; a vida eterna. Amém.",
          "Credes, pois, o que esta Santa Igreja Católica, Apostólica, Romana vos ensina e propõe a crer? — Cremos.",
          "Credes também que esta Santa Igreja na sua doutrina e na explicação da mesma não pode errar, por ser infalível? — Sim, cremos, porque Jesus Cristo, a verdade infalível, prometeu ficar com ela todos os dias até à consumação dos séculos.",
          "Quereis sempre, até ao fim da vida, pertencer a esta Santa Igreja Católica, Apostólica Romana? — Queremos.",
          "Quereis também viver como filhos verdadeiros e obedientes desta mesma Igreja, praticando tudo o que ela manda, guardando os mandamentos e recebendo os sacramentos? — Queremos.",
          "Pois bem, demos graças a Deus e peçamos a sua bênção divina, para que fielmente guardeis o que prometestes.",
          "Ó Pai celestial, dou-vos infinitas graças, de todo o meu coração, pois me chamastes para a fé única e verdadeira. Creio em vós, em Jesus Cristo, vosso Filho, meu amantíssimo Salvador, e no Espírito Santo. Agradeço-vos o ser filho da vossa Santa Igreja. Protesto mais uma vez permanecer sempre filho fiel desta mesma Igreja até meu último suspiro, guardando tudo o que esta boa mãe exige de mim. Não permitais nunca que me separe dela, pois nesta mesma fé quero viver e morrer. Amém."
        ]},
      { id: "consagracao-sc-comunhao", title: "Consagração ao Sagrado Coração de Jesus", page: 125,
        text: [
          "Sacerdote — Sagrado Coração de Jesus, estamos aqui prostrados na vossa divina presença, para nos consagrarmos a vós para sempre.",
          "Meninos — Doce Coração de Jesus, tende piedade de nós. Amabilíssimo Jesus, durante os dias de vossa vida mortal, vos aprazíeis em abençoar as crianças, em estreitá-las sobre o vosso divino coração, dizendo com infinito amor: 'Deixai vir a mim as crianças, porque delas é o reino dos céus'. Muito vos agradecemos, ó Jesus, por nos haverdes querido tanto. Por gratidão e amor, nós vos oferecemos o nosso coração.",
          "Por gratidão e amor nós vos oferecemos o nosso coração. Clementíssimo Jesus, em vossa entrada triunfante em Jerusalém, as crianças cantavam: Hosana, glória ao Filho de Davi! Unindo hoje as nossas vozes às dos meninos de Jerusalém, repetimos com santa alegria: Adoração, honra e glória ao Sagrado Coração de Jesus!",
          "Adoração, honra e glória ao Sagrado Coração de Jesus! Jesus, cheio de bondade, neste belo dia, atendei aos nossos desejos, ouvi as nossas orações. Todos ao mesmo tempo vos pedimos, pelo vosso preciosíssimo sangue: Sagrado Coração de Jesus, guardai-nos a inocência e pureza do coração.",
          "Sagrado Coração de Jesus, guardai-nos a inocência e pureza do coração. Sagrado Coração de Jesus, abençoai aos nossos pais, parentes e benfeitores. Sagrado Coração de Jesus, abençoai aos nossos pais, parentes e benfeitores. Sagrado Coração de Jesus, tende compaixão dos pobres pecadores. Sagrado Coração de Jesus, tende compaixão dos pobres pecadores.",
          "Ó Jesus, abençoai estas crianças, que hoje com tanto fervor se consagram ao vosso divino Coração. São vossas, meu Jesus, protegei-as e defendei-as, e fazei que nenhuma delas jamais se separe de vós. Sagrado Coração de Jesus, abençoai-nos; por vosso amor queremos viver e morrer. Amém."
        ]},
      { id: "consagracao-imaculado-comunhao", title: "Consagração ao Coração Imaculado de Maria", page: 127,
        text: [
          "Sacerdote — Puríssimo Coração de Maria, que sois de Deus fonte inexaurível de bondade, de pureza, de amor e misericórdia, vós agradais a Deus mais que os serafins, ó Coração Imaculado da Mãe de Jesus, que tão bem conhecestes as nossas misérias e tanto fizestes pela nossa salvação, que pelo vosso próprio Coração merecestes o respeito, o amor, o reconhecimento e a confiança de todos os homens, dignai-vos de receber benignamente (hoje, no dia da nossa primeira comunhão) a nossa consagração.",
          "Meninos — Ó Senhora minha, ó minha Mãe, eu me ofereço todo a vós; e em prova de minha devoção para convosco, vos consagro meus olhos, meus ouvidos, minha boca, meu coração e inteiramente todo o meu ser. E como assim sou vosso, ó boa Mãe, guardai-me e defendei-me como coisa e propriedade vossa.",
          "Sacerdote — Ó Mãe de Deus e nossa Mãe Santíssima, recebei estes meninos que vos são consagrados, guardai-os com cuidado maternal, para que nenhum deles se perca. Defendei-os contra as ciladas do demônio e contra os escândalos do mundo, para que sejam sempre humildes, mansos e puros. Ó Mãe nossa, Mãe de misericórdia, rogai por nós e, depois deste desterro, mostrai-nos Jesus, bendito fruto de vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria! Amém."
        ]},
      { id: "antes-santa-comunhao", title: "Orações para Antes da Santa Comunhão", page: 128,
        text: [
          "Ato de fé e de adoração — Grande Deus, Nosso Senhor e Salvador Jesus Cristo! Cremos que estais presente no Santíssimo Sacramento do Altar, debaixo da espécie de pão, real e verdadeiramente, com corpo e alma, divindade e humanidade. É verdade que aos nossos olhos corporais estais oculto; mas, pelos olhos da fé, vemo-vos clara e perfeitamente. Aumentai a nossa fé, Jesus!",
          "Cremos firmemente que neste Santo Sacramento sois o mesmo, que, com o Padre e o Espírito Santo, vive e reina, Deus, por todos os séculos dos séculos; que desceu do céu por amor de nós e de todos os homens; que nasceu de Maria Virgem; e, para nos salvar, morreu na cruz, ressurgiu dos mortos e subiu ao céu, donde há de vir a julgar os vivos e os mortos. Ó Deus inescrutável! Quem há que possa compreender vossa sabedoria e vosso poder infinito? Quem medir o abismo de vossa grandeza? Ninguém o pode; mas cremos, cremos firmemente na vossa divina e infalível palavra. Aumentai a nossa fé, Jesus!",
          "Cremos que o Santíssimo Sacramento do Altar é o pão do céu, que prometestes aos apóstolos e por eles a nós também. Aumentai a nossa fé, Jesus! Cremos que a vossa santa carne é verdadeiramente uma comida e vosso precioso sangue verdadeiramente uma bebida. Aumentai a nossa fé, Jesus! Cremos que é o mesmo corpo, que sacrificastes na cruz pelos pecados do mundo. Aumentai a nossa fé, Jesus! Cremos que quereis apresentar-nos neste Santo Sacramento vosso corpo e sangue, para serem o sustento espiritual de nossas almas e um penhor da ressurreição gloriosa. Aumentai a nossa fé, Jesus!",
          "Nesta santa fé, ó Jesus sacramentado, vos adoramos com toda a humildade e devoção e vos reconhecemos como nosso Senhor e Deus, nosso Redentor e Salvador. Adoramos vosso santo corpo e alma, vossa santa carne e sangue, vossa divindade e humanidade. Ah! quem dera que todos neste Santíssimo Sacramento vos conhecessem e honrassem, amassem e adorassem, assim como vossos escolhidos no céu vos conhecem, honram, amam e adoram!",
          "Ato de esperança e de oferecimento — Ó Jesus, nossa esperança e confiança! Levantamos os nossos corações ao Santíssimo Sacramento, em que escondestes as maravilhas do vosso amor. Aí encontramos vossa infinita bondade, a qual nos quer ajudar; aí conhecemos vossa força, a qual nos pode valer; escutamos vossa voz amável que nos diz: 'Vinde a mim todos que andais em trabalhos e vos achais carregados, e eu vos aliviarei'. Aí achamos o vosso precioso sangue, que por nós derramastes na cruz; aí está presente o vosso Coração, cheio de amor, o qual pede dia e noite a Deus perdão e misericórdia para nós. Ó Jesus, nossa salvação, esperamos de vós o inteiro perdão de todos os nossos pecados. Confortai nossa esperança, Jesus!",
          "Esperamos de vós consolação e socorro em todos os perigos e incômodos desta vida. Confortai nossa esperança, Jesus! Esperamos de vós a graça de praticar a virtude, de viver convosco em contínua união e de morrer duma morte boa, quando vós o quiserdes. Confortai nossa esperança, Jesus! Esperamos de vós a salvação eterna e a felicidade de adorar-vos face a face no céu. Confortai nossa esperança, Jesus!",
          "Nesta santa esperança, ó amável Jesus, vos oferecemos todos os nossos pensamentos, desejos, sentimentos, nossos sentidos, nosso corpo e nossa alma. Governai e reinai sobre nós segundo a vossa divina bondade. Tudo o que ordenardes, aceitaremos com profunda resignação, pois nada procuramos senão a vós, ó bem de nosso coração. Também vos apresentamos as intenções de nossos pais e irmãos, nossos parentes e benfeitores, amigos e inimigos; deixai-os participar dos efeitos deste Santo Sacramento, a fim de que experimentem a vossa proteção e direção, confiando plenamente na promessa feita por vós. Em vós esperamos, divino Salvador; e não seremos confundidos eternamente. Amém.",
          "Ato de caridade — Ó Jesus, nosso amado e eterno bem, nossa única salvação, nosso Deus e Redentor! Amamo-vos e abraçamo-vos neste Santíssimo Sacramento, no qual vós mesmo estais escondendo todo o vosso amor e misericórdia. Ainda nos amais como outrora nos amastes, até à morte de cruz; pois aí nos quereis dar-vos, vós mesmo, com corpo e sangue e com tudo o que sois em vossa divindade e humanidade. Como poderemos recompensar-vos este amor? Queremos amar-vos, Jesus, amar-vos sobre todas as coisas. Oxalá tivéssemos amado sempre, procurado somente a vós! Perdoai-nos, Senhor, todo pensamento, toda palavra, todo passo, que não foi para vossa honra e glória, e tudo o que, por acaso, nos afastou do vosso amor; pois a vós queremos amar sobre todas as coisas, a vós, ó Deus, cuja natureza é misericórdia. Amamo-vos, Jesus, nosso Salvador e Redentor, e desejamos amar-vos cada vez mais. Inflamai nosso amor, Jesus!",
          "Nós vos amamos, tendo vós nos amado tanto e sofrido por nosso amor a morte dolorosa na cruz. Inflamai nosso amor, Jesus! Nós vos amamos por causa do infinito amor que vos incitou a oferecer-vos a vós mesmo neste Santo Sacramento, em satisfação por nossos pecados e para serdes o alimento espiritual de nossa alma. Inflamai nosso amor, Jesus! Desejamos amar-vos, como os santos no céu, como os serafins em redor do vosso trono e como a Santíssima Virgem, nossa bem-aventurada Mãe. Desejamos amar-vos agora e sempre e por toda a eternidade, sendo vós o nosso Deus, nossa vida e salvação. Jesus, para vós vivemos; Jesus, para vós morremos; Jesus, a vós pertencemos na vida e na morte.",
          "Ato de humildade e desejo — Nosso coração está preparado, ó Senhor e Salvador, para vos receber. Desejamos ardentemente que venhais a nossa alma, para nunca mais nos separarmos de vós e para que sempre permaneçamos na vossa graça. Como é possível que venhais a nós? Quem somos nós, para que vos deis a nós? Vós sois infinitamente grande, bom, justo, e nós, o nada, a fraqueza, a ignorância; vós, a própria santidade, nós cheios de iniquidade. Como ousa o pecador aparecer diante de vós? E vós, como vos dignais vir a ele? Bem conheceis vosso pobre servo e sabeis que nada em si há de bom que lhe possa atrair esta graça. Confesso, pois, minha baixeza, reconheço vossa grandeza, louvo vossa misericórdia e rendo-vos graças por vossa nímia caridade. Mas como hei de preparar neste momento a minha alma, aproximando-me do meu Senhor, a quem não seria bastante reverenciar, segundo devo, desejando, porém, recebê-lo dignamente? Que coisa melhor e mais salutar poderei pensar, senão humilhar-me profundamente diante de vós e exaltar a vossa infinita bondade para comigo?",
          "Senhor, não somos dignos de receber-vos em nosso coração. Vós, porém, nos chamais e por isso vimos; vós o quereis assim e por isso aproximamo-nos. Confiando em vossa bondade e misericórdia, ouvimos a vossa voz amável que nos convida ao banquete celestial. Fracos e famintos, chegamos a vós, pão da vida. Ó Jesus, em nossa fraqueza confortai-nos!",
          "Imundos, chegamos a vós, fonte da santidade. Ó Jesus, dos nossos pecados livrai-nos! Enfermos, chegamos a vós, médico das almas. Ó Jesus, dos nossos defeitos sanai-nos! Cegos, chegamos a vós, luz da claridade eterna. Ó Jesus, em nossa cegueira alumiai-nos! Pobres, chegamos a vós, Senhor do céu e da terra. Ó Jesus, em nossa pobreza tende piedade de nós.",
          "Eis aqui nossos desejos; nada queremos senão a vós; vinde, Jesus, e aceitai-nos só para vós, pois a vós entregamos o nosso coração e tudo quanto somos e possuímos. Ó Jesus, sede-nos propício; ó Jesus, sede-nos misericordioso; ó Jesus, perdoai nossos pecados. Vós, santos de Deus, todos vós, principalmente nossos santos padroeiros, rogai por nós, para que recebamos dignamente o nosso Deus e Salvador. Rogai por nós, Rainha dos santos, nossa benigna Mãe. Rogai por nós, ó São José; rogai por nós, vós, santos anjos, especialmente vós, santos anjos da guarda, a fim de que, cheios de vossa reverência e inflamados de vosso amor, recebamos agora, dignamente, Nosso Senhor Jesus Cristo, com o qual queremos viver e morrer. Amém."
        ]},
      { id: "depois-santa-comunhao", title: "Depois da Santa Comunhão", page: 135,
        text: [
          "Que Nosso Senhor Jesus Cristo guarde a minha alma para a vida eterna. Amém.",
          "Ó Jesus Cristo, como recompensar-vos poderei o benefício que nos acabais de fazer? Muitos benefícios nos dais somente vossas graças; no sacramento do vosso santo corpo e sangue, porém, nos destes o maior de todos — a vós mesmo. Os céus vos louvem por vossa bondade e admirem o milagre de vossa condescendência; e o homem vos agradeça as graças que lhe destes. Louvamo-vos, Senhor Jesus!",
          "Cremos que em verdade estais conosco. Louvamo-vos, Senhor Jesus! Cremos que vivais em nós; e nada viva em nossas almas senão vós, o nosso Deus. Louvamo-vos, Senhor Jesus! Livrai-nos a todos de vós, a fim de que vos conservemos sempre no coração, nem admitamos nada que vos possa desagradar. A vós pertencemos, a vós continuamos pertencendo, ó Jesus!",
          "Quem nos dera que pudéssemos sempre dizer com vosso apóstolo: 'Eu vivo, mas não eu, Cristo vive em mim'. 'Nada me poderá separar do amor de Cristo, nem a tribulação ou a angústia, nem a fome, nem a espada'. A vós pertencemos, a vós continuamos pertencendo, ó Jesus! A vós pertencemos, Jesus! Segurai-nos com vossas graças. Concedei que conheçamos sempre os perigos que nos possam separar de vós, e que os evitemos energicamente. Fazei que nos lembremos sempre da vossa santa presença, para ser a nossa vida semelhante ao viver no céu. Para vós vivemos, para vós morremos, ó Jesus!",
          "Divino Salvador, nunca poderemos dar-vos ações de graças como devemos. Oferecemos-vos, pois, todos os louvores e ações de graças de vossa Mãe Maria Santíssima, de todos os anjos e santos e de vosso próprio Coração. E penetrados do mais vivo reconhecimento, consagramo-vos nosso coração, nossa alma, nosso corpo, nossa liberdade, nossos sofrimentos, nossa vida e nossa morte. Reinai em nós, Jesus! Vós sois nosso Rei e Senhor. Dirigi a nossa vontade, para que não desejemos, não queiramos senão o que vos agrade. Pertencemos a vós, ó Jesus!",
          "Nenhum prazer, nenhum bem deste mundo nos separará de vós. Pertencemos a vós, ó Jesus! Nas alegrias e nas aflições, nos dias de saúde e nas enfermidades, na vida e na morte. Pertencemos a vós, ó Jesus! Só a vós queremos amar, só em vós queremos confiar, só a vós queremos seguir em união com os santos e anjos. Pertencemos a vós, ó Jesus! Somos vossos na vida, ficaremos vossos na morte. Para vós vivemos, para vós morremos, ó Jesus!",
          "Amabilíssimo Jesus, ensinastes-nos a recorrer a vós em todas as nossas necessidades, dizendo: 'Vinde a mim vós todos, que vos achais em tribulação, e eu vos aliviarei. Pedi e recebereis'. Vimos, pois, hoje, com toda a confiança, para vos apresentar as nossas petições pelas mãos de Maria Imaculada. Sem vós nada somos e nada podemos; ficai conosco com a vossa graça, e não nos desampareis. Vivei em nós, para que nós possamos viver convosco. Santificai o nosso corpo e purificai cada vez mais a nossa alma. Inflamai-nos de vosso amor; abrasai e consumi o nosso coração no vosso amor. Ouvi-nos e abençoai-nos, ó Jesus!",
          "Livrai-nos de todo pecado, das ciladas do demônio e da morte eterna. Conservai o nosso coração limpo e sem mancha. Defendei-nos contra a tentação; e fazei que percamos antes a liberdade e a própria vida do que a vós, a vossa graça e o vosso amor. Ouvi-nos e abençoai-nos, ó Jesus! Não permitais, Senhor, que nós jamais nos aproximemos indignamente à mesa sagrada da santa comunhão, comendo e bebendo assim a própria condenação. Fazei que nós sempre bem nos preparemos por uma boa confissão, para que pela santa comunhão cada vez mais aumente e acenda o amor de Deus e o desejo de vê-lo face a face. Ouvi-nos e abençoai-nos, ó Jesus!",
          "Dai-nos o vosso espírito, o espírito de paciência e caridade; fazei-nos humildes e mansos de coração; e concedei-nos a graça de amar o nosso próximo, como a nós mesmos. Fazei que sejamos todos um só coração e uma só alma. Ouvi-nos e abençoai-nos, ó Jesus!",
          "Com santa confiança entregamos nas vossas mãos nosso corpo e nossa alma. Seja feita a vossa vontade, assim na terra como no céu. Não nos deixeis cair, ó Deus, em tentação, nem partir deste mundo, sem termos recebido em viático vosso sagrado corpo e vosso precioso sangue. Assisti-nos, ó amabilíssimo Redentor, nas angústias da morte; defendei e guardai a nossa alma; e conduzi-nos à bem-aventurança eterna, para que possamos cantar eternamente, com todos os santos e anjos, as vossas misericórdias. Ouvi-nos e abençoai-nos, ó Jesus!",
          "Vossa divina bênção desça também sobre nossos pais, irmãos, benfeitores, amigos e inimigos. Vós, Senhor, conheceis as suas aflições, necessidades e sofrimentos. Abençoai-os, ó Jesus! Tende piedade das crianças inocentes, dos órfãos, dos pobres e enfermos, dos desamparados e aflitos, dos pecadores, dos moribundos e de todos os que sofrem e precisam de vosso auxílio. Abençoai-os, ó Jesus! Tende piedade das almas do purgatório, livrai-as, ó Jesus! Vossa divina bênção desça sobre nós todos e permaneça conosco para sempre. Amém."
        ]},
      { id: "diante-crucifixo", title: "Oração para se Rezar Diante da Imagem de Jesus Crucificado", page: 139,
        text: [
          "Eis-me aqui, ó bom e dulcíssimo Jesus! De joelhos ante a vossa divina presença eu vos peço e suplico, com o mais ardente fervor de minha alma, que vos digneis gravar em meu coração profundos sentimentos de fé, de esperança, de caridade, de verdadeiro arrependimento de meus pecados e vontade firmíssima de me emendar, enquanto com sincero afeto e íntima dor de coração considero e medito em vossas cinco chagas, tendo bem presentes aquelas palavras que o profeta Davi já dizia de vós, ó meu bom Jesus: 'Traspassaram as minhas mãos e os meus pés, e contaram todos os meus ossos'."
        ]},
      { id: "exaltacao-igreja", title: "Oração a Deus pela Exaltação da Santa Igreja", page: 140,
        text: [
          "Lembrai-vos, ó Padre Eterno, da vossa Igreja, que possuístes desde o princípio; reconhecei-a por esposa de Jesus Cristo, vosso unigênito Filho, que por ela derramou todo o seu sangue. Dignai-vos exaltá-la; fazei-a brilhar com tal resplendor de santidade e enchei-a de tal abundância de graças, que se faça digna de seu divino Esposo e do preço do seu resgate. Fazei que todos os seus filhos vos reconheçam com viva fé, vos invoquem com firme esperança e vos amem com perfeito amor. Amém.",
          "Padre-Nosso, Ave-Maria e Glória ao Padre."
        ]},
      { id: "conversao-infieis", title: "Oração pela Conversão dos Infiéis", page: 140,
        attribution: "São Francisco Xavier",
        text: [
          "Deus eterno, Criador de todas as coisas! Lembrai-vos que as almas dos infiéis são obra de vossas mãos, e que são feitas à vossa imagem e semelhança. Vede, porém, Senhor, como em desdouro do vosso nome o inferno se enche destas almas. Lembrai-vos que Jesus Cristo, vosso Filho, derramou todo o seu sangue e padeceu morte atrocíssima por elas. Não permitais, pois, Senhor, que o vosso Filho seja por mais tempo desprezado pelos infiéis. Deixai-vos antes aplacar e mover à piedade pelas orações de vossos santos e da Igreja, esposa de vosso santíssimo Filho. Lembrai-vos da vossa misericórdia e, esquecendo a sua idolatria e infidelidade, fazei que também eles, enfim, conheçam a Jesus Cristo, Nosso Senhor, nossa salvação, vida e ressurreição, e por quem fomos livres e salvos, a quem sejam dadas honra, glória e louvor para sempre."
        ]},
      { id: "pelo-santo-padre-com", title: "Oração pelo Santo Padre, o Soberano Pontífice", page: 141,
        text: [
          "Oremos pelo nosso Pontífice N. O Senhor o conserve, e lhe dê vida, e o faça feliz na terra, e não o entregue às mãos dos seus inimigos.",
          "Padre-Nosso e Ave-Maria.",
          "Alma de Cristo, santificai-me. Corpo de Cristo, salvai-me. Sangue de Cristo, inebriai-me. Água do lado de Cristo, lavai-me. Paixão de Cristo, confortai-me. Ó bom Jesus, ouvi-me. Dentro das vossas chagas escondei-me. Não permitais que eu me separe de vós. Do espírito maligno defendei-me. Na hora da morte chamai-me, e mandai-me ir para vós, para que com os vossos santos vos louve por todos os séculos dos séculos. Amém."
        ]},
      { id: "oracao-sao-inacio", title: "Oração de Santo Inácio de Loiola", page: 142,
        text: [
          "Aceitai, Senhor, toda a minha liberdade; recebei minha memória, entendimento e vontade; tudo o que tenho ou possuo, vós mo destes, e eu tudo vos restituo e me entrego inteiramente à vossa vontade para ser governado; concedei-me unicamente o vosso amor e a vossa graça; serei sobejamente rico, nem mais pedirei. Amém."
        ]},
      { id: "ao-ss-coracao-com", title: "A Primeira Consagração ao Sagrado Coração de Jesus", page: 142,
        attribution: "Santa Margarida Maria Alacoque",
        text: [
          "Eu, N., me dou e consagro ao Sagrado Coração de Nosso Senhor Jesus Cristo, minha pessoa e minha vida, minhas ações, penas e sofrimentos, não querendo mais servir-me de parte alguma do meu ser senão para honrá-lo, amá-lo e glorificá-lo.",
          "É esta a minha vontade irrevogável: ser todo vosso e fazer tudo por amor a vós, renunciando de todo o meu coração a tudo quanto vos possa desagradar.",
          "Tomo-vos, pois, ó Sagrado Coração, por único objeto de meu amor, por protetor de minha vida, por segurança de minha salvação, por remédio de minha fragilidade e de minha inconstância, por reparador de todas as imperfeições de minha vida e por asilo seguro na hora de minha morte.",
          "Sede, ó Coração de bondade, minha justificação diante de Deus, vosso Pai, e desviai de mim sua justa cólera. Ó Coração de amor, eu ponho toda a minha confiança em vós, pois nada temo de minha malícia e fraqueza, mas tudo espero de vossa bondade.",
          "Livrai-me de tudo que vos possa desagradar ou que se oponha à vossa vontade. Esteja o vosso amor tão profundamente impresso em meu coração, que jamais vos possa esquecer ou separar-me de vós.",
          "Por todas as vossas atenções, suplico-vos que meu nome esteja escrito em vosso Coração, pois não almejo outra felicidade ou glória que a de viver e morrer como vosso escravo. Amém."
        ]},
      { id: "sao-luis-gonzaga-com", title: "Oração a São Luís Gonzaga", page: 143,
        text: [
          "São Luís, mancebo de angélicos costumes, eu, indigníssimo devoto vosso, recomendo-vos singularmente a castidade de minha alma e do meu corpo. Rogo-vos, por vossa angélica pureza, alcançai-me que, tendo perdido a inocência batismal, eu recupere ao menos a inocência de penitência, pelo puro amor de Deus.",
          "Rogai por mim ante o Cordeiro Imaculado de Cristo, e sua Santíssima Mãe, a Virgem das virgens, e que me preserveis de todo pecado mortal. Não permitais que eu seja manchado com nenhuma nódoa de impureza, mas quando me virdes em tentação ou perigo de pecar, afastai do meu coração todos os pensamentos e afetos imundos, e, despertando em mim a lembrança da eternidade e de Jesus crucificado, imprimi profundamente na minha alma o santo sentimento do temor de Deus, e inflamai-me no amor divino, para que, imitando-vos aqui na terra, mereça gozar de Deus convosco no céu. Amém.",
          "Padre-Nosso, Ave-Maria e Glória ao Padre.",
          "℣. São Luís, rogai por nós. ℟. Para que sejamos dignos das promessas de Cristo.",
          "Oremos. Deus, distribuidor dos dons celestiais, associastes no jovem angélico Luís uma admirável inocência de vida com a penitência. Concedei-nos, por seus merecimentos e súplicas, que imitemos na penitência a quem não seguimos na inocência. Por Cristo Senhor Nosso. Amém."
        ]},
      { id: "metodo-breve-preparacao-comunhao", title: "Método Breve de Preparação para a Santa Comunhão", page: 144,
        attribution: "Segundo a Imitação de Cristo",
        text: [
          "Livro IV, cap. 16 — Ó dulcíssimo e mui amado Senhor, a quem desejo receber agora com piedade! Bem sabeis minha fraqueza e minhas precisões, quantos males e vícios me oprimem, quantas são as minhas mágoas, tentações, pesares e faltas!",
          "Aqui venho buscar o remédio, implorando-vos alívio e consolação. A vós me dirijo, que tudo sabeis; para vós não tem segredo meu coração. Vós só me podeis valer e consolar-me perfeitamente. Vós sabeis de que bens mais falta sinto, e quão pobre sou em virtudes.",
          "Aqui estou diante de vós, pobre e desvalido, mercê vos rogo, vossa misericórdia imploro. Dai de comer a este esfaimado mendigo vosso, aquecei-me o frio com o fogo de vosso amor, iluminai-me as trevas com o clarão de vossa presença. Convertei-me amargura em tudo que é terreno, e paciência em todas as penas e contrariedades; ensinai-me o desprezo e olvido de todas as coisas vãs e caducas.",
          "Levantai o meu coração para vós no céu; não me deixeis vaguear na terra. Sede vós, desde hoje, para sempre, o meu único bem, que sois vós só o meu alimento, minha bebida, meu amor e deleite, minhas delícias, meu bem, meu tudo.",
          "Oxalá me acenda vossa presença, me abrase e transforme todo em vós, para que eu seja um só espírito convosco, pela graça da união interior, como derretido pelo intenso amor. Não me deixeis, Senhor, de vós apartar-me faminto e sequioso; antes comigo usai misericórdia, como tantas vezes pasmosamente usastes com os vossos santos.",
          "Que muito estranharia que por vós abrasado todo me consumisse, se sois vós o fogo sempre aceso e nunca amortecido, o amor que purifica os corações e esclarece o entendimento?",
          "Livro IV, cap. 14 — Que doçura sem conta reservais, Senhor, para os que vos temem! Envergonhado fico, muitas vezes, quando relembro a devoção e afeto com que recebem o Sacramento alguns fiéis servos vossos, ao tempo que eu tão tíbio e frio me chego ao vosso altar santo, à mesa da sagrada comunhão; tão seco e falto de coração, e tão indiferente e sem vontade de abrasar-me todo diante de vós, Deus meu! E muitos fiéis, com veemência atraídos e comovidos, não podem conter seu pranto pelo excesso de amor e de ternura com que desejam a comunhão. Seu coração, sua boca até, entranhavelmente aspiram à fonte viva, que sois vós, Deus meu, nem há temperar-lhes nem fartar a fome, enquanto não recebem vosso corpo, com delícia igual à santa sofreguidão.",
          "Ó fé verdadeira e ardente aquela! E que manifesta prova da vossa real presença! Estes, com efeito, verdadeiramente conhecem seu Senhor ao partir do pão, que tanto se lhe inflama o coração, porque Jesus com eles anda. Que longe de mim, muitas vezes, tal devoção e afeto, tão vivo e ardente amor! Sede-me propício, ó doce, ó clemente, ó bom Jesus! Concedei a este pobre mendigo vosso que sinta, uma vez ou outra, na sagrada comunhão, algum tanto de vosso eterno e cordial amor, para que se me alente a fé, cresça a minha esperança em vossa bondade, e minha caridade, uma vez bem acesa com o celeste maná, nunca mais esmoreça.",
          "Muita é vossa misericórdia para conceder-me esta desejada graça, o espírito de fervor, com vossa benigníssima visita, no dia que por bem tiverdes. Não tenho, é verdade, os ardentes desejos de vossos privilegiados servos; sinto, porém, por mercê vossa, o desejo daqueles grandes abrasados desejos; rogo e almejo ter parte no fervor dos que tanto vos amam e ser contado em sua santa companhia.",
          "Ato de fé — Senhor meu Jesus Cristo, creio e confesso tudo o que a vossa Santa Igreja Católica nos propõe a crer. Creio especialmente que estais real e verdadeiramente presente no Santíssimo Sacramento do Altar com o vosso corpo, sangue, alma e divindade, porque vós, verdade infalível, o dissestes. Nesta fé quero viver e morrer.",
          "Ato de adoração — Eu vos adoro, meu Jesus, neste augusto Sacramento de vosso amor, e vos reconheço por meu Criador, Redentor e Senhor, meu único e sumo bem. Maria Santíssima, anjos e santos, adorai comigo a meu Jesus e supri minha insuficiência.",
          "Ato de esperança — Espero, ó meu Jesus, recebendo-vos, hoje, a mim, neste divino banquete, que usareis comigo de misericórdia e me dareis todas as graças necessárias para a minha eterna salvação; porque vós, meu Deus, sois onipotente, misericordioso e fiel, assim como o prometestes. Nesta esperança quero viver e morrer.",
          "Ato de caridade — Amo-vos, ó meu Jesus, com todo o meu coração e sobre todas as coisas, porque sois meu Pai, meu Redentor, meu Deus infinitamente bom e digno de todo o amor, que hoje vai unir-se intimamente comigo. E, ó Jesus, por amor de vós, amo também o meu próximo, como a mim próprio, e de todo o coração perdoo aos que me têm ofendido. Nesta caridade quero viver e morrer.",
          "Ato de contrição — Pesa-me, ó Jesus, de todo o meu coração, de vos ter ofendido tantas vezes na minha vida, por serdes vós, como sois, tão bom, tão santo e tão amável. Perdoai-me, pela vossa infinita misericórdia, agora, e não olheis para o número e gravidade dos meus pecados.",
          "Ato de humildade — Senhor, eu não sou digno de que entreis agora em minha casa, mas dizei uma só palavra e minha alma será salva.",
          "Ato de desejo — Desejo ardentemente unir-me convosco, ó Jesus. Vinde e não tardeis mais. Vinde, único objeto de meus suspiros. Vinde, ficai comigo e não permitais que jamais me separe de vós pelo pecado.",
          "O corpo de Nosso Senhor Jesus Cristo conduza a minha alma à vida eterna. Amém."
        ]},
      { id: "para-depois-santa-comunhao-2", title: "Para Depois da Santa Comunhão", page: 148,
        attribution: "Segundo a Imitação de Cristo, Livro IV, cap. 9",
        text: [
          "Vosso é, Senhor, tudo o que há no céu e na terra; quero fazer-vos a livre oblação de mim mesmo, e ser vosso para sempre. Senhor, na simplicidade do meu coração, a vós me ofereço hoje como servo perpétuo, em homenagem e sacrifício de eterno louvor.",
          "Aceitai-me com a santa oblação, que hoje vos faço, de vosso precioso corpo, na presença invisível de vossos anjos, para a salvação minha e de todo o vosso povo.",
          "Sobre vosso altar de propiciação deposito, Senhor, todos os pecados e erros que cometi desde vossa vista e de vossos santos anjos, desde o dia em que pude pecar até à presente hora; queimai-os e consumi todos, a um tempo, no fogo de vossa caridade, e tirai-me de todas as suas manchas; purificai-me a consciência de qualquer ofensa; restituí-me a graça que o pecado me roubara, e, com indulto pleno de vossa misericórdia, levantai-me ao ósculo santo da vossa paz.",
          "Que farei pelos meus pecados, senão confessá-los humildemente e lastimá-los, implorando sempre vossa clemência? Aqui estou, meu Deus, em vossa presença, a suplicar-vos: atendei-me. Em extremo detesto todos os meus pecados, nunca mais os quero cometer; deles me pesa e pesará toda a vida, pronto a fazer penitência e satisfazer conforme as minhas forças.",
          "Perdoai-me, Senhor, perdoai-me os pecados, por honra do vosso nome; salvai minha alma, que remistes com o vosso sangue precioso. Entrego-me à vossa misericórdia, resigno-me em vossas mãos; segundo a vossa bondade fazei de mim, não conforme a minha iniquidade e maldade.",
          "Ofereço-vos agora todo o bem que em mim há, ainda tão pouco embora e imperfeito; dignai-vos de o apurar e santificar; assim vos seja aceito e agradável, e o melhor o levai sempre; e a este vosso cobarde e inútil servozinho concedei, afinal, ventura e glória.",
          "Apresento-vos ainda todos os santos desejos dos fiéis, as necessidades de meus pais, amigos, irmãos, irmãs, de todos os que me são caros e de quantos me fizeram bem, a mim ou a outros, por amor de vós; dos que desejaram ou pediram-me orações e Missas por si e por todos os seus, vivos sejam ou defuntos; todos experimentem o socorro da vossa graça, a eficácia da vossa consolação, vosso amparo nos perigos, o fim de suas penas; livres, enfim, de todos os males, vos rendam, jubilosos, amplíssimas graças.",
          "Ofereço-vos igualmente a prece e hóstia de propiciação, por todos, nomeadamente, que de qualquer modo me lesaram, afligiram, ou me causaram algum dano ou vexame; e mais, por todos a quem eu haja afligido, perturbado, agravado e escandalizado, por palavras ou obras, acinte ou sem saber, a fim de que a todos, juntamente, nos perdoeis nossos pecados e mútuas ofensas. Apartai, Senhor, dos nossos corações, toda desconfiança, agastamento, ira e contenda, tudo que possa ferir a caridade ou diminuir a fraternal dileção.",
          "Piedade, Senhor, piedade dos que vo-la rogam; dai-nos a graça, que precisamos, e tais fazei-nos, que mereçamos gozá-la e aproveitá-la para a vida eterna. Amém.",
          "Ato de adoração — Adorável majestade de Deus, diante de quem é indigno de comparecer quanto há de maior no céu e sobre a terra, que posso eu fazer aqui, na vossa presença, senão calar-me e adorar-vos no mais profundo aniquilamento de minha alma? Bendigo-vos, ó Deus meu, e rendo minhas homenagens a essa infinita grandeza, diante da qual se dobra todo joelho e em cuja presença todo poder é fraqueza, toda prosperidade miséria, e as mais brilhantes luzes trevas.",
          "Deus só, grande Deus, Rei dos séculos, pertence a vós só, toda a honra e toda a glória. Glória, honra, salvação e bênção àquele que vem em nome do Senhor! Bendito seja o Filho eterno do Altíssimo, que se digna unir-se tão intimamente a mim e tomar posse de meu coração.",
          "Ato de amor — Enfim, tenho a felicidade de possuir-vos, ó Deus de amor! Que bondade! Ah, quem me dera possuir mil corações para vos amar como o mereceis! Abrasai-me, Deus meu, inflamai e consumi de amor o meu coração. Todo, sem reserva, me pertence, Jesus, o amável Jesus, que se dá a mim... Anjos do céu, Mãe santíssima do céu e da terra, ajudai-me a agradecer-lhe por tão incompreensível benefício.",
          "Ato de agradecimento — Que ações de graças, ó meu Deus, podem igualar o favor que acabo de receber? Não satisfeito de me terdes amado até morrer por mim, Deus de bondade, dignai-vos ainda vir em pessoa honrar-me com vossa visita e dar-vos a mim! Ó minha alma, glorifica ao Senhor teu Deus, reconhece a sua bondade, exalta sua magnificência, publica eternamente sua misericórdia! De todo o coração vos agradeço, ó amável Salvador, a grande graça que me acabais de fazer. Tenho sido um infiel, um negligente, um prevaricador; mas não quero ser um ingrato, quero lembrar-me eternamente que hoje vos destes a mim, e mostrar-vos minha gratidão, dando-me inteiramente a vós.",
          "Ato de oferecimento — Encheis-me de dons, ó Deus de misericórdia, e, dando-vos a mim, quereis que eu só viva para vós. É também este o meu maior desejo; sim, quero pertencer-vos para sempre. Doravante tudo o que sou, o que tenho: saúde, força, espírito, talento, bens, reputação, tudo é vosso, tudo será empregado nos interesses de vossa glória. Sujeitai, pois, a vós, ó Rei de meu coração, todas as potências de minha alma; reinai absolutamente sobre minha vontade, que a sujeite eu inteiramente a vós.",
          "Ato de pedido — Vós estais em mim, inexaurível de todo o bem; aí estais, com mãos cheias de graças, pronto a derramá-las com profusão. Vede minhas grandes necessidades. Tirai de mim o que vos desagrada; purificai meu corpo, santificai minha alma, aplicai-me os merecimentos de vossa morte; uni-vos a mim, ó celeste Esposo das almas, uni-me a vós; vivei em mim, a fim de que eu viva em vós, e nunca mais de vós me separe.",
          "Ato de bom propósito — Adorável Senhor! Renuncio, de todo o coração, a tudo quanto até aqui me tem afastado de vós, e proponho, com o auxílio de vossa graça, não mais reincidir em minhas culpas passadas.",
          "Prometo, ó meu Deus, daqui por diante nenhum pensamento ou desejo, nenhuma palavra ou ação que ofenda de leve, sequer, ao pudor ou caridade; nem juramentos, nem mentiras, nem impaciências, nem murmurações, nem tibieza de meus deveres, nem frieza no vosso serviço, nem amizades mundanas, nem familiaridades indiscretas nem caprichos, nem interesse, nem receio dos juízos do mundo, nem cobiça da estima dos homens. Antes morrer, meu Deus, antes expirar aqui diante de vós, que tornar a ofender-vos.",
          "Aceitai, Deus de bondade, esta resolução firme, e o desejo sincero, que sinto, de viver só para vossa glória. Amém.",
          "(Para depois da comunhão, veja também a oração diante da imagem do crucifixo, página 139.)"
        ]},
    ]
  },

  // ---------------------------------------------------------
  { id: "devocoes-breves", title: "Orações e Devoções Breves", page: 154,
    note: "Ainda a transcrever do livro.",
    prayers: [
      { id: "ss-trindade", title: "À Santíssima Trindade", page: 154,
        note: "Segundo as principais festas e estações do ano eclesiástico",
        text: [
          "Glória ao Padre, que me criou! Glória ao Filho, que me salvou! Glória ao Espírito Santo, que me santificou! Seja feita, louvada e eternamente exaltada a justíssima, altíssima e amabilíssima vontade de Deus, em todas as coisas."
        ]},
      { id: "trisagio-angelico", title: "Triságio Angélico", page: 154,
        text: [
          "Santo, santo, santo sois vós, Senhor, Deus dos exércitos. A terra está cheia de vossa glória. Glória ao Padre, glória ao Filho, glória ao Espírito Santo!"
        ]},
      { id: "oferecimento-breve", title: "Oferecimento", page: 154,
        text: [
          "Eterno Pai, nós vos oferecemos o sangue, paixão e morte de Jesus Cristo, as dores da bem-aventurada Virgem Maria e de São José, em satisfação por nossos pecados, para a consolação das almas do purgatório, pelas necessidades da Santa Madre Igreja e pela conversão dos pecadores. Amém."
        ]},
      { id: "honra-ss-trindade", title: "Oração em Honra da Santíssima Trindade", page: 155,
        text: [
          "Glória ao Padre, que, por seu poder, me tirou do nada e me criou à sua imagem e semelhança! Glória ao Filho, que, por amor, me resgatou do inferno e me abriu a porta do céu! Glória ao Espírito Santo, que, por sua misericórdia, me santificou no batismo e opera continuamente minha santificação pelas graças que todos os dias recebo de sua infinita bondade! Glória às três adoráveis pessoas da Santíssima Trindade, como era no princípio, agora e sempre e por todos os séculos dos séculos.",
          "Eu vos adoro, Trindade beatíssima, com viva fé, devoção e profundo respeito; e vos dou graças por nos haverdes revelado tão glorioso e adorável mistério. Humildemente vos suplico que me concedais que, perseverando até à morte nesta crença, possa ver e glorificar no céu o que agora firmemente creio na terra: um Deus em três pessoas distintas: Padre, Filho e Espírito Santo. Amém."
        ]},
      { id: "oferecimento-merecimentos-jesus", title: "Oferecimento dos Merecimentos de Jesus", page: 155,
        text: [
          "1º Ofereçamos à Santíssima Trindade os merecimentos de Jesus Cristo, em agradecimento pelo preciosíssimo sangue que ele derramou no horto das Oliveiras por nós; e, por seus merecimentos, supliquemos à divina Majestade que perdoe os nossos pecados. Padre-Nosso, Ave-Maria e Glória ao Padre.",
          "2º Ofereçamos à Santíssima Trindade os merecimentos de Jesus Cristo, em agradecimento pela dolorosíssima morte que por nós padeceu na cruz; e, por seus merecimentos, supliquemos à divina Majestade que nos remita as penas devidas aos nossos pecados. Padre-Nosso, Ave-Maria e Glória ao Padre.",
          "3º Ofereçamos à Santíssima Trindade os merecimentos de Jesus Cristo, em agradecimento pela sua inefável caridade, com que desceu do céu à terra, a tomar nossa natureza humana, a padecer e morrer por nós na cruz; e, por seus merecimentos, supliquemos à divina Majestade a graça de conduzir as nossas almas, depois da morte, à glória celestial. Padre-Nosso, Ave-Maria e Glória ao Padre."
        ]},
      { id: "divino-espirito-santo", title: "Ao Divino Espírito Santo", page: 156,
        text: [
          "Ó Espírito Santo, Espírito de amor e de verdade, autor da santificação das nossas almas! Eu vos adoro como o princípio da minha felicidade eterna. Muitas graças vos dou, soberano Dispensador dos benefícios que do céu recebo, e vos invoco como a fonte das luzes e da fortaleza, que me são necessárias para conhecer o bem e poder praticá-lo. Espírito de luz e fortaleza, alumiai o meu entendimento, fortificai a minha vontade, purificai o meu coração, regulai todos os meus movimentos e fazei-me dócil a todas as vossas inspirações. Ó Espírito consolador, aliviai as penas e os trabalhos, que me afligem neste vale de lágrimas; dai-me conformidade e paciência, para que eu mereça fazer neste mundo penitência dos meus pecados e gozar no outro a luz eterna da bem-aventurança. Amém."
        ]},
      { id: "sete-dons-doze-frutos", title: "Oração para Alcançar os Sete Dons e Doze Frutos do Espírito Santo", page: 157,
        text: [
          "Vinde, Espírito Santo, enchei os corações de vossos fiéis e acendei neles o fogo de vosso amor.",
          "Ó Espírito Santo, concedei-me o dom do temor de Deus, para que eu sempre me aproxime de vós com suma reverência e profundo respeito da vossa divina presença; trema com os anjos diante de vossa divina majestade e receie tanto como desagradar a vossos santos olhos. — Ave-Maria.",
          "Espírito Santo, concedei-me o dom da piedade, que me tornará delicioso o trato e a conversação convosco na oração e me fará amar-vos com íntimo amor, como a meu Pai, a Maria Santíssima como a minha Mãe e a todos os homens como a meus irmãos em Jesus Cristo. — Ave-Maria.",
          "Espírito Santo, concedei-me o dom da ciência, para que eu conheça, cada vez mais, as minhas próprias misérias e fraquezas, a beleza da virtude e o valor inestimável da alma, para que sempre veja claramente as ciladas do demônio, da carne e do mundo, e possa evitá-las. — Ave-Maria.",
          "Espírito Santo, concedei-me o dom da fortaleza, para que eu despreze todo o respeito humano diante do pecado, pratique a virtude com fervor e afronte com paciência, e mesmo com alegria de espírito, os desprezos e prejuízos, perseguições e a própria morte, antes que renegar por palavras ou por obras a meu amabilíssimo Senhor e Salvador Jesus Cristo. — Ave-Maria.",
          "Espírito Santo, concedei-me o dom do conselho, tão necessário em tantos passos melindrosos da vida, para que sempre escolha o que mais vos agrade, siga em tudo a vossa divina graça e com bons e carinhosos conselhos, socorra ao próximo. — Ave-Maria.",
          "Espírito Santo, concedei-me o dom da inteligência, para que eu, alumiado pela luz celeste de vossa graça, bem entenda as sublimes verdades da salvação, a doutrina da santa religião. — Ave-Maria.",
          "Espírito Santo, concedei-me o dom da sabedoria, a fim de que eu, cada vez mais, goste das coisas divinas e, abrasado do fogo de vosso amor, prefira com alegria as coisas do céu a tudo que é mundano e me una para sempre a Jesus, sofrendo tudo neste mundo por seu amor. — Ave-Maria.",
          "Vinde, Espírito criador, visitai e enchei o meu coração, que vós criastes com a vossa divina graça. Vinde e repousai sobre mim, Espírito de sabedoria e inteligência, Espírito de conselho e fortaleza, Espírito de ciência, de piedade e de temor de Deus. Vinde, Espírito Santo, habitai comigo e derramai sobre mim as vossas divinas bênçãos.",
          "Espírito Santo, amor eterno do Padre e do Filho, dignai-vos também conceder-me os vossos doze frutos: o fruto da caridade, que me una intimamente convosco pelo amor; o fruto da alegria, que me encha de santa consolação; o fruto da paz, que produza em mim a tranquilidade da alma; o fruto da paciência, que me faça sofrer tudo por amor de Jesus e Maria; o fruto da benignidade, que me leve a socorrer de boa vontade às necessidades dos meus semelhantes; o fruto da bondade, que me torne afável e clemente a todos; o fruto da longanimidade, que me faça esperar com paciência qualquer demora; o fruto da brandura, que me faça suportar com toda mansidão o que o próximo tem de incômodo; o fruto da fé, que me faça crer firmemente na palavra de Deus; o fruto da modéstia, que regule o meu exterior; enfim, os frutos da continência e castidade, que conservem as minhas ações inocentes e meu coração limpo e puro. Espírito divino, fazei que a minha alma seja para sempre vossa morada e o meu corpo o vosso sagrado templo. Habitai em mim como habitastes na terra, para que eu mereça reinar eternamente no reino da glória. Amém."
        ]},
      { id: "oracao-pela-igreja-breve", title: "Oração pela Igreja", page: 159,
        text: [
          "Espírito Santo criador, assisti benignamente a toda a Igreja Católica. Fortalecei-a, defendei-a pela vossa divina virtude contra os ataques dos inimigos. Renovai também pela vossa graça e caridade o espírito dos vossos servos que ungistes, para que em vós glorifiquem o Padre e seu Filho unigênito, Jesus Cristo, Nosso Senhor. Amém."
        ]},
      { id: "oracao-indulgenciada", title: "Oração Indulgenciada", page: 160,
        text: [
          "Espírito Santo, Espírito da verdade, vinde aos nossos corações. Dai aos povos a clareza de vossa luz, a fim de que, unidos pela fé, sejam do vosso agrado."
        ]},
      { id: "santissimo-nome-jesus", title: "Ao Santíssimo Nome de Jesus", page: 160,
        text: [
          "Jesus! Só esta lembrança motiva um gosto inefável; porém, mais do que o mel é doce a sua presença amável.",
          "Do meu Jesus nada pode nem mais suave cantar-se; nem ouvir-se mais tocante, nem mais doce cogitar-se.",
          "Ó esperança dos contritos, se és tão pio a quem te orar, a quem te buscar tão bom, qual serás a quem te achar?",
          "Não chega a língua a dizer, nem as letras a exprimir o que seja amar Jesus: sabe-o só quem o sentir.",
          "Pois que sereis nosso prêmio, sede já nossa alegria, dai-nos a glória de ver-vos da eternidade no dia. Amém.",
          "℣. Seja bendito o nome do Senhor. ℟. Desde agora e para sempre.",
          "Oremos. Ó Deus, que constituístes o vosso Filho unigênito Salvador do gênero humano e determinastes que se chamasse Jesus, concedei propício que nós, que na terra veneramos o seu santo nome, gozemos no céu da sua suspirada presença. Pelo mesmo Jesus Cristo, vosso Filho, que convosco vive e reina na unidade do Espírito Santo, Deus, por todos os séculos dos séculos. Amém."
        ]},
      { id: "menino-jesus-presepio", title: "Oração ao Menino Jesus no Presépio", page: 161,
        text: [
          "Adoro-vos, Verbo encarnado, verdadeiro Filho de Deus desde toda a eternidade e verdadeiro Filho de Maria Virgem na plenitude dos tempos. Adorando a vossa divina pessoa e a humanidade, que vos está unida, não posso deixar de venerar o pobre berço em que vos reclinastes ainda menino e que verdadeiramente foi o primeiro trono do vosso amor. Possa eu prostrar-me diante dele com a simplicidade dos pastores, com a fé de São José, com a caridade da bem-aventurada Virgem Maria! Seja-me permitido também inclinar-me a adorar, com espírito de mortificação, de pobreza e de humildade, um tão precioso monumento da nossa salvação, em que vós, embora Senhor do céu e da terra, escolhestes um presépio para receptáculo dos vossos pobres membros! E vós, ó Senhor, que, apenas recém-nascido, vos dignastes repousar neste berço, dignai-vos também derramar no meu coração uma gota daquele júbilo, que deviam produzir não só a vista de vossa amável infância, mas também os portentos que acompanharam o vosso nascimento. Em virtude desta alegria, enfim, vos suplico que concedais a todo o mundo a paz e boa vontade, e em nome de todo o gênero humano deis todas as graças e toda a glória ao Padre e ao Espírito Santo, que convosco vive e reina como um só Deus pelos séculos dos séculos. Assim seja."
        ]},
      { id: "breve-consagracao-menino", title: "Breve Consagração ao Menino Jesus", page: 162,
        text: [
          "Meu amável Menino Jesus, meu Deus e Senhor, para vos testemunhar o meu reconhecimento e em reparação das minhas infidelidades, dou-vos hoje o meu coração, consagro-me inteiramente a vós e proponho, com a vossa graça, nunca mais vos ofender. Amém."
        ]},
      { id: "ladainha-santo-nome-jesus", title: "Ladainha do Santo Nome de Jesus", page: 162,
        text: [
          "Senhor, tende piedade de nós. Jesus Cristo, tende piedade de nós. Senhor, tende piedade de nós. Jesus, ouvi-nos. Jesus, atendei-nos.",
          "Pai celeste, que sois Deus, tende piedade de nós. Filho, Redentor do mundo, que sois Deus, tende piedade de nós. Espírito Santo, que sois Deus, tende piedade de nós. Santíssima Trindade, que sois um só Deus, tende piedade de nós.",
          "Jesus, Filho de Deus vivo — tende piedade de nós. Jesus, esplendor do Padre — Jesus, pureza da luz eterna — Jesus, Rei da glória — Jesus, sol de justiça — Jesus, Filho da Virgem Maria — Jesus amável — Jesus admirável — Jesus, Deus forte — Jesus, Pai do futuro século — Jesus, Anjo do grande conselho — Jesus poderosíssimo — Jesus pacientíssimo — Jesus obedientíssimo — Jesus, manso e humilde de coração — Jesus, amante da castidade — Jesus, amador nosso — Jesus, Deus da paz — Jesus, autor da vida — Jesus, exemplar das virtudes — Jesus, zelador das almas — Jesus, nosso Deus — Jesus, nosso refúgio — Jesus, Pai dos pobres — Jesus, tesouro dos fiéis — Jesus, bom Pastor — Jesus, luz verdadeira — Jesus, sabedoria eterna — Jesus, bondade infinita — Jesus, nosso caminho e nossa vida — Jesus, alegria dos anjos — Jesus, Rei dos patriarcas — Jesus, Mestre dos apóstolos — Jesus, Doutor dos evangelistas — Jesus, fortaleza dos mártires — Jesus, luz dos confessores — Jesus, pureza das virgens — Jesus, coroa de todos os santos.",
          "Sede-nos propício; perdoai-nos, Jesus. Sede-nos propício; ouvi-nos, Jesus.",
          "De todo mal, livrai-nos, Jesus. De todo pecado — De vossa ira — Das ciladas do demônio — Do espírito da impureza — De morte eterna — Do desprezo das vossas inspirações — livrai-nos, Jesus.",
          "Pelo mistério da vossa santa encarnação — Pela vossa natividade — Pela vossa infância — Pela vossa diviníssima vida — Pelos vossos trabalhos — Pela vossa agonia e paixão — Pela vossa cruz e desamparo — Pelas vossas angústias — Pela vossa morte e sepultura — Pela vossa ressurreição — Pela vossa ascensão — Pela vossa instituição da Santíssima Eucaristia — Pelas vossas alegrias — Pela vossa glória — livrai-nos, Jesus.",
          "Cordeiro de Deus, que tirais os pecados do mundo, perdoai-nos, Jesus. Cordeiro de Deus, que tirais os pecados do mundo, ouvi-nos, Jesus. Cordeiro de Deus, que tirais os pecados do mundo, tende piedade de nós, Jesus.",
          "Jesus, ouvi-nos. Jesus, atendei-nos.",
          "Oremos. Senhor Jesus Cristo, que dissestes: Pedi, e recebereis; buscai, e achareis; batei, e abrir-se-vos-á; nós vos suplicamos que concedais a nós, que vo-lo pedimos, os afetos de vosso diviníssimo amor, a fim de que vos amemos de todo o coração, boca e obras, e sem cessar vos louvemos. Permiti que tenhamos sempre, Senhor, igual temor e amor por vosso santo nome; pois não deixais de governar àqueles que estabeleceis na firmeza do vosso amor. Vós que viveis e reinais pelos séculos dos séculos. Amém."
        ]},
      { id: "jesus-crucificado-breve", title: "A Jesus Crucificado", page: 167,
        attribution: "Santo Afonso de Ligório",
        text: [
          "Meu Jesus, no horto das Oliveiras, orando profundamente angustiado, em agonia, coberto de suor e de sangue, tende piedade de nós. ℟. Tende piedade de nós, Senhor; tende piedade de nós!",
          "Meu Jesus, pelo ósculo traidor entregue aos vossos inimigos, maltratado, amarrado com cordas, abandonado pelos discípulos, tende piedade de nós. ℟. Tende piedade de nós, Senhor; tende piedade de nós!",
          "Meu Jesus, pelo injusto conselho dos judeus, réu de morte e entregue a Pilatos, escarnecido pelo ímpio Herodes, tende piedade de nós. ℟. Tende piedade de nós, Senhor; tende piedade de nós!",
          "Meu Jesus, despido, preso a uma coluna e açoitado cruelmente, tende piedade de nós. ℟. Tende piedade de nós, Senhor; tende piedade de nós!",
          "Meu Jesus, coroado de penetrantes espinhos, ferida a vossa sagrada cabeça, com uma cana batido, escarnecido com um manto de púrpura e carregado de opróbrios, tende piedade de nós. ℟. Tende piedade de nós, Senhor; tende piedade de nós!",
          "Dulcíssimo Jesus, mais odiado que um ladrão e assassino, reprovado pelos judeus, condenado à morte da cruz, tende piedade de nós. ℟. Tende piedade de nós, Senhor; tende piedade de nós!",
          "Dulcíssimo Jesus, carregado com a pesada cruz, caído em terra, levado ao Calvário como o cordeiro ao matadouro, tende piedade de nós. ℟. Tende piedade de nós, Senhor; tende piedade de nós!",
          "Dulcíssimo Jesus, homem das dores, despojado de vossas pobres vestes, contado entre os criminosos, imolado em sacrifício por nossos pecados, tende piedade de nós. ℟. Tende piedade de nós, Senhor; tende piedade de nós!",
          "Dulcíssimo Jesus, cravado cruelmente na cruz, ferido dolorosamente por causa de nossas iniquidades, quebrantado por causa de nossas culpas, tende piedade de nós. ℟. Tende piedade de nós, Senhor; tende piedade de nós!",
          "Dulcíssimo Jesus, escarnecido ainda na cruz, atormentado e oprimido de dores inefáveis, consumido de sede, abandonado, na mais dolorosa agonia, pelo próprio Pai celestial, tende piedade de nós. ℟. Tende piedade de nós, Senhor; tende piedade de nós!",
          "Dulcíssimo Jesus, morto na cruz, traspassado por uma lança à vista de vossa dolorosa Mãe, tende piedade de nós. ℟. Tende piedade de nós, Senhor; tende piedade de nós!",
          "Dulcíssimo Jesus, descido da cruz, depositado nos braços de vossa Santíssima Mãe e banhado em suas lágrimas, tende piedade de nós. ℟. Tende piedade de nós, Senhor; tende piedade de nós!",
          "Dulcíssimo Jesus, ungido e embalsamado pelos discípulos amantes com preciosos aromas, envolvido em lençóis limpos e depositado no sepulcro, tende piedade de nós. ℟. Tende piedade de nós, Senhor; tende piedade de nós! Verdadeiramente ele tomou sobre si as nossas iniquidades, e as nossas dores ele as suportou.",
          "Oremos: Senhor Jesus, Filho unigênito de Deus, e da Virgem Imaculada, que pela salvação de minha alma quisestes ser reprovado pelos judeus, traído por Judas, atado com cordas, levado ao matadouro como um cordeiro, apresentado injustamente aos juízes Anás, Caifás, Pilatos e Herodes, acusado por falsos testemunhos, ferido com pancadas, saciado de opróbrios e injúrias, cuspido no rosto, açoitado cruelmente, coroado de espinhos, condenado à morte, despojado das vestes, pregado com toda a crueldade na cruz, suspenso entre dois ladrões, vexado com fel e vinagre, abandonado em tormentosa agonia e, finalmente, traspassado por uma lança; por estes tormentos, Senhor, dos quais nós, indignos filhos vossos, agora com devoção, gratidão e amor nos lembramos, e pela vossa santíssima morte na cruz, livrai-nos das penas eternas do inferno e dignai-vos conduzir-nos ao paraíso, para onde levastes convosco o bom ladrão.",
          "Tende piedade de nós, ó bom Jesus, que com o Padre e o Espírito Santo viveis e reinais por todos os séculos dos séculos. Amém.",
          { note: "Convém rezar esta piedosa oração à tarde das quintas-feiras, ou nas sextas-feiras, principalmente no tempo da Santa Quaresma, em união com outras pessoas e com toda a família. Nosso Senhor crucificado não deixará de derramar sua bênção sobre as pessoas e famílias que, com piedade e devoção, se lembrarem de sua sagrada paixão e morte." }
        ]},
      { id: "via-sacra-livro", title: "Via-Sacra", page: 171,
        text: [
          "Oração preparatória — Meu divino Salvador, com todo o coração, por amor de vós, arrependo-me, com viva contrição, de todos os pecados que durante a minha vida contra vós tenho cometido. Humildemente vos peço me concedais a graça de fazer agora, com espírito de fervor e penitência, este santo exercício da Via-Sacra, com aquela intenção com que caminhastes ao Calvário e com que Maria Santíssima, vossa bendita Mãe, vos acompanhou; em ação de graças por tantos benefícios, em satisfação por meus pecados, para alcançar os vossos benefícios para mim, meus pais, parentes e benfeitores, para toda a Igreja Católica, para todos os homens e pelas benditas almas do purgatório, principalmente por aquelas pelas quais tenho maior obrigação e daquelas das quais vós quereis mais.",
          "Ó Maria, Mãe da divina graça, santo anjo da guarda, e vós, meus santos padroeiros, acompanhai-me neste santo exercício e alcançai-me a graça de vossa intercessão.",
          "I ESTAÇÃO — Jesus é condenado à morte. ℣. Nós vos adoramos, Santíssimo Senhor Jesus Cristo, e vos bendizemos. ℟. Porque pela vossa santa cruz remistes o mundo. Graças e louvores vos sejam dados, ó misericordioso Salvador, pelo grande amor com que vós, ó Inocentíssimo, por mim, o pecador, aceitastes a injusta sentença de morte. Ó meu dulcíssimo Jesus, quando um dia comparecer perante o vosso tribunal, não sejais juiz para mim, mas sede antes meu Salvador. Todo arrependido, detesto e aborreço agora, seriamente, tantos pecados de língua, com que já muitas vezes subscrevi a injusta sentença de vossa morte; desejo ardentemente não fazer mais um juízo temerário do próximo; quero sempre acusar-me com sinceridade, a mim mesmo, no tribunal da penitência. Maria Santíssima, refúgio dos pecadores, na hora da minha morte recomendai-me a vosso Filho, apresentai-me a vosso Filho e reconciliai-me com vosso Filho. Amém. Padre-Nosso, Ave-Maria e Glória ao Padre. ℣. Meu Jesus, misericórdia. ℟. Dulcíssimo Coração de Maria, sede minha salvação!",
          "II ESTAÇÃO — Jesus toma a pesada cruz aos ombros. ℣. Nós vos adoramos, Santíssimo Senhor Jesus Cristo, e vos bendizemos. ℟. Porque pela vossa santa cruz remistes o mundo. Com ardente desejo abraça o bom Jesus, já esgotado de tantos sofrimentos, o pesado madeiro da cruz, para carregá-lo em obediência a seu Pai celestial e por amor de mim, pecador. Se eu for inimigo da cruz, jamais poderei ser amigo de Jesus Cristo; o único caminho para o céu é o caminho da cruz. Ó Jesus, perdoai minhas impaciências, o meu desânimo nos sofrimentos e trabalhos; confortai-me, pela virtude da santa cruz, a suportar com resignação todas as tribulações que a vossa mão paterna me mandar para o bem de minha alma. Sim, Jesus, seja feita a vossa vontade, quer na ventura, quer na desgraça. Dai-me também força e coragem para nunca me desviar da observância dos vossos mandamentos, levado de respeito humano. Ó Mãe dolorosa, alcançai-me verdadeira paciência e humilde resignação à santíssima vontade de Deus. Amém. Padre-Nosso, Ave-Maria e Glória ao Padre. ℣. Meu Jesus, misericórdia. ℟. Dulcíssimo Coração de Maria, sede minha salvação!",
          "III ESTAÇÃO — Jesus cai pela primeira vez em terra. ℣. Nós vos adoramos, Santíssimo Senhor Jesus Cristo, e vos bendizemos. ℟. Porque pela vossa santa cruz remistes o mundo. A cruz pesadíssima e mais ainda o peso de meus pecados fazem cair em terra o bom Jesus. Ah! que dor terá causado ao Coração amoroso de meu Salvador o meu primeiro pecado, a perda da minha inocência! Meu Jesus, misericórdia! Antes morrer do que tornar a ofender-vos pelo pecado mortal. Ó Maria Santíssima, impetrai a todas as almas inocentes a graça da perseverança e a mim a graça duma verdadeira penitência. Amém. Padre-Nosso, Ave-Maria e Glória ao Padre. ℣. Meu Jesus, misericórdia. ℟. Dulcíssimo Coração de Maria, sede minha salvação!",
          "IV ESTAÇÃO — Jesus encontra-se com sua Mãe aflita. ℣. Nós vos adoramos, Santíssimo Senhor Jesus Cristo, e vos bendizemos. ℟. Porque pela vossa santa cruz remistes o mundo. Quem poderá compreender a ardente dor que traspassou os Corações de Jesus e de Maria a tal encontro! Estes Corações inocentíssimos, como deviam sofrer tão horríveis dores por causa dos meus pecados! Ó Jesus, pela intercessão de Maria, fazei-me também vossa Mãe Santíssima, que eu seja digno filho vosso. Concedei que eu, desde este mesmo momento, comece a demonstrar-vos meu amor pela imitação constante das vossas santíssimas virtudes. Vós, ó Jesus, que tanto me amais, fazei que eu vos ame cada vez mais. Amém. Padre-Nosso, Ave-Maria e Glória ao Padre. ℣. Meu Jesus, misericórdia. ℟. Dulcíssimo Coração de Maria, sede minha salvação!",
          "V ESTAÇÃO — Simão Cireneu ajuda Jesus a levar a cruz. ℣. Nós vos adoramos, Santíssimo Senhor Jesus Cristo, e vos bendizemos. ℟. Porque pela vossa santa cruz remistes o mundo. Jesus está quase reduzido a um extremo de fraqueza; está para desfalecer, e os soldados forçam por isso a Simão Cireneu, que vinha do campo, a ajudar Jesus a levar a cruz fabricada por meus pecados. E tu, minha alma, não queres também prestar este obséquio a teu Salvador, suportando com resignação a pequena cruz que a Providência te impuser, e praticando fielmente com o próximo as obras de misericórdia espirituais e corporais? Pois o que fazes por amor ao próximo, o fazes a Jesus mesmo. Peço-vos, pois, ó Jesus, por causa de vosso grande amor para com o gênero humano, vos peço perdão por tantos pecados e faltas cometidas contra vós e meu próximo. Ó Maria Santíssima, impetrai para nós todo o espírito da caridade ativa e de compaixão sincera dos sofrimentos do próximo. Amém. Padre-Nosso, Ave-Maria e Glória ao Padre. ℣. Meu Jesus, misericórdia. ℟. Dulcíssimo Coração de Maria, sede minha salvação!",
          "VI ESTAÇÃO — A Verônica enxuga o rosto de Jesus. ℣. Nós vos adoramos, Santíssimo Senhor Jesus Cristo, e vos bendizemos. ℟. Porque pela vossa santa cruz remistes o mundo. Ó face amortecida, coberta de sangue e feridas! Minha própria alma seja a toalha em que se imprima, sem jamais se apagar, a lembrança de vosso rosto desfigurado. Sim, ó bom Jesus, instantemente vos peço a graça de que meu espírito cada vez mais se compenetre da contemplação dos mistérios da vossa sagrada paixão. Fazei que me lembre dela, principalmente na hora das tentações. Ó Maria, Mãe das dores, alcançai-nos uma devoção verdadeira aos mistérios sagrados da nossa redenção. Amém. Padre-Nosso, Ave-Maria e Glória ao Padre. ℣. Meu Jesus, misericórdia. ℟. Dulcíssimo Coração de Maria, sede minha salvação!",
          "VII ESTAÇÃO — Jesus cai pela segunda vez em terra. ℣. Nós vos adoramos, Santíssimo Senhor Jesus Cristo, e vos bendizemos. ℟. Porque pela vossa santa cruz remistes o mundo. Eis o Rei de majestade, aquele a quem adoram os coros dos espíritos celestes, cai outra vez por terra, oprimido pelo grande peso da cruz. Eis aqui, minha alma, teu divino Salvador prostrado em terra e pisado como um verme, por causa do teu orgulho e de tuas repetidas quedas nos mesmos pecados. É como se Jesus, de joelhos, te suplicasse o teu amor. E tu, porventura, mais uma vez o queres ofender? Ó meu Jesus, compadecei-vos de minha miserável fraqueza, pois, sem o auxílio de vossa graça, nada posso fazer; mas tudo posso naquele que me conforta. Concedei-me, pois, ó Jesus, a graça para evitar também os pecados veniais, principalmente aqueles a que estou mais inclinado. Ó Mãe do Salvador, impetrai-me um espírito de verdadeira vigilância e constância na execução dos bons propósitos. Amém. Padre-Nosso, Ave-Maria e Glória ao Padre. ℣. Meu Jesus, misericórdia. ℟. Dulcíssimo Coração de Maria, sede minha salvação!",
          "VIII ESTAÇÃO — Jesus consola as filhas de Jerusalém. ℣. Nós vos adoramos, Santíssimo Senhor Jesus Cristo, e vos bendizemos. ℟. Porque pela vossa santa cruz remistes o mundo. Meu Jesus, com palavras de brandura consolastes as piedosas mulheres de Jerusalém e as exortastes a não chorarem tanto a vossa paixão, senão antes a causa dela, os seus pecados. Sim, Jesus, com lágrimas de dor quero chorar, por toda a minha vida, os meus pecados, a causa de vossa paixão e morte. A lembrança dos meus pecados e da pouca penitência que fiz me enche de temor. Mas, todo confiado no valor infinito de vosso precioso sangue, espero o inteiro perdão de todos os meus pecados e o conforto necessário para satisfazer por eles e evitá-los no futuro. Peço-vos, Jesus, que vós mesmo me imponhais uma penitência salutar. Sim, tudo o que me mandardes aceitarei com profunda resignação. Ó Maria, consoladora dos aflitos, assisti-nos com vosso poderoso amparo na hora da dor e da tentação. Amém. Padre-Nosso, Ave-Maria e Glória ao Padre. ℣. Meu Jesus, misericórdia. ℟. Dulcíssimo Coração de Maria, sede minha salvação!",
          "IX ESTAÇÃO — Jesus cai pela terceira vez em terra. ℣. Nós vos adoramos, Santíssimo Senhor Jesus Cristo, e vos bendizemos. ℟. Porque pela vossa santa cruz remistes o mundo. É a terceira vez que o bom Jesus cai sob o peso da cruz. Tantos escândalos e maus exemplos, tantos hábitos pecaminosos, tantas ocasiões de pecado, às quais, a custo de perder a inocência, me expus, são a causa dessa queda tormentosa. Ó Jesus, tende compaixão de minha cegueira e fraqueza! Fazei que cada vez mais me conheça a mim próprio, assim como os inimigos da minha salvação. Alumiai meu entendimento e fortificai a minha vontade, para que eu conheça o que é reto e o pratique com firmeza. Esta graça também vos suplico por todos os pecadores. Ó Jesus, tende também compaixão daqueles que, por minha causa, caíram em pecado. Salvai-os, por vossa infinita misericórdia. Ó Maria, refúgio dos pecadores e auxílio dos cristãos, impetrai-nos a graça de fugirmos das ocasiões de pecado, e de cumprirmos, fielmente, os nossos bons propósitos. Amém. Padre-Nosso, Ave-Maria e Glória ao Padre. ℣. Meu Jesus, misericórdia. ℟. Dulcíssimo Coração de Maria, sede minha salvação!",
          "X ESTAÇÃO — Jesus é despido de suas vestes. ℣. Nós vos adoramos, Santíssimo Senhor Jesus Cristo, e vos bendizemos. ℟. Porque pela vossa santa cruz remistes o mundo. Que afronta e dor não causou ao Cordeiro Imaculado, Jesus, esta cena dolorosa! À vista duma grande multidão de povo é despojado de suas vestes o inocentíssimo Jesus, a alegria dos anjos, aquele em quem o Pai celestial pôs todas as suas complacências. Ao tirar-lhe os vestidos, renovam-se as feridas, vertendo copioso sangue. A língua, atormentada pela sede ardente, é amargurada com fel e vinagre. E Jesus sofre tudo isto com paciência admirável, para pagar tantos pecados de luxo, de sensualidade e de gula. Ó Jesus, misericórdia e perdão! Restituí inteiramente o brilho da veste nupcial da graça santificante, com que exornastes a minha alma no dia do batismo. Compenetrai minha carne com vosso santo temor e dai-lhe o espírito de mortificação, que me há de preservar duma nova perda da graça santificante. Ó Maria, concebida sem pecado, conservai-me a pureza do coração e da alma. Amém. Padre-Nosso, Ave-Maria e Glória ao Padre. ℣. Meu Jesus, misericórdia. ℟. Dulcíssimo Coração de Maria, sede minha salvação!",
          "XI ESTAÇÃO — Jesus é pregado na cruz. ℣. Nós vos adoramos, Santíssimo Senhor Jesus Cristo, e vos bendizemos. ℟. Porque pela vossa santa cruz remistes o mundo. Para dar glória a seu Pai celestial e para a salvação de minha alma imortal, Jesus, o Filho de Deus, se estende sobre o duro lenho da cruz, com amor imenso! Para resgatar o servo, é sacrificado o Filho. Com pregos grossos são traspassadas suas mãos e pés, que só se moveram para fazer bem a todos. Jesus, sem tremer nem proferir uma palavra, oferece este sacrifício a seu Pai eterno para a nossa salvação. Ó minha alma! Queres, porventura, tornar a crucificar a teu Jesus, cometendo mais um pecado grave? Pois cada pecado mortal é como um novo cravo fincado na mão benfazeja de Jesus. Ó Cordeiro de Deus, que tirais os pecados do mundo, perdoai-me tudo quanto pequei na minha vida, e admirai a vossa grande generosidade com que sofrestes as penas que eu merecia. Antes morrer, meu Jesus, do que nunca mais ofender a vossa divina Majestade. Concedei-me que em meu coração tenha sempre lembrança viva das chagas de vossas mãos. Amém. Padre-Nosso, Ave-Maria e Glória ao Padre. ℣. Meu Jesus, misericórdia. ℟. Dulcíssimo Coração de Maria, sede minha salvação!",
          "XII ESTAÇÃO — Jesus morre na cruz. ℣. Nós vos adoramos, Santíssimo Senhor Jesus Cristo, e vos bendizemos. ℟. Porque pela vossa santa cruz remistes o mundo. Eis aqui teu divino Salvador imolado sobre o altar da cruz, para completar a obra de tua redenção! Contempla um momento a pessoa sagrada de teu divino Salvador! As mãos e os braços estão abertos para te abençoar e abraçar; a cabeça está inclinada para te dar o ósculo de paz e de reconciliação; o seu Coração divino está aberto para encerrar-te nele. Derrama Jesus a última gota de seu sangue divino para manifestar-te seu amor ilimitado. Ó Jesus, tornai-me todo vosso. Eis meu coração com todos os seus afetos e aspirações; eis minha alma com todas as suas faculdades e potências; eis meu corpo com todos os sentidos e forças; tudo isto, de boa vontade, consagro a vosso santo serviço. Oh! não permitais que para mim seja perdido o vosso precioso sangue! Ó Maria, consoladora dos aflitos, impetrai-me a graça de chorar convosco as dores de vosso divino Filho e os meus pecados. E, ao sair a minha alma do corpo, dai-me a palma da vitória, por vossa Mãe, ó Jesus. Amém. Padre-Nosso, Ave-Maria e Glória ao Padre. ℣. Meu Jesus, misericórdia. ℟. Dulcíssimo Coração de Maria, sede minha salvação!",
          "XIII ESTAÇÃO — Jesus é descido da cruz e depositado nos braços de sua Mãe Santíssima. ℣. Nós vos adoramos, Santíssimo Senhor Jesus Cristo, e vos bendizemos. ℟. Porque pela vossa santa cruz remistes o mundo. Ó Maria, Virgem dolorosa, que espada de dor traspassou o vosso Coração materno, ao verdes ensanguentado e morto, em vossos braços, vosso adorado Filho Jesus! Estas dores vos constituíram Rainha dos mártires. Ó minha Mãe Santíssima, foram também os meus pecados que vos fizeram sofrer tanto por mim! Mas peço-vos sinceramente perdão por tudo quanto vos ofendi e vos agradeço de ter concorrido tanto para a minha salvação. Ah! quão pouco meditei nas dores e sofrimentos de Jesus e de Maria! Fazei-me, porém, ó Mãe da divina graça, enquanto eu viver, condoer-me com meu Jesus e acompanhar o vosso pranto. E vós, ó meu Jesus, quando a morte me levar, fazei que minha alma entre na glória do paraíso. Amém. Padre-Nosso, Ave-Maria e Glória ao Padre. ℣. Meu Jesus, misericórdia. ℟. Dulcíssimo Coração de Maria, sede minha salvação!",
          "XIV ESTAÇÃO — Jesus é depositado no sepulcro. ℣. Nós vos adoramos, Santíssimo Senhor Jesus Cristo, e vos bendizemos. ℟. Porque pela vossa santa cruz remistes o mundo. Meu divino Salvador Jesus Cristo, eis-me aqui em espírito prostrado à beira de vosso sepulcro. Cheio de humildade e reconhecimento, adoro com profundo respeito as vossas cinco chagas, agradecendo-vos, de todo o coração, o grande amor, que vos fez padecer por mim tantos sofrimentos e trabalhos e, enfim, a morte dolorosa na cruz. Fazei que mais e mais me desapegue das coisas deste mundo. Concedei-me a graça de meditar mais vezes sobre o meu destino eterno, a fim de que eu sempre esteja pronto para morrer e um dia possa gozar convosco os frutos da vossa paixão e morte na glória do céu. Seja a minha alma sempre um sepulcro vivo e digno de vosso sagrado corpo na hora da comunhão. Dignai-vos, também, ó Jesus, conceder-me a graça particular de não partir deste mundo sem ser confortado com o vosso santo viático. Ó Maria, Mãe do Salvador, rogai por nós, para que sejamos dignos das promessas de Cristo. Amém. Padre-Nosso, Ave-Maria e Glória ao Padre. ℣. Meu Jesus, misericórdia. ℟. Dulcíssimo Coração de Maria, sede minha salvação!",
          "Oração final — Meu divino Salvador, Jesus Cristo, aceitai propício esta breve meditação de vossa sagrada paixão e morte, como penhor de meu amor e gratidão. Perdoai-me todas as distrações e faltas; dignai-vos atender às minhas súplicas, pela virtude do sangue precioso, derramado de vossas cinco chagas. Maria Santíssima, Mãe das dores, meu anjo da guarda e todos os santos e santas de Deus, intercedei por mim. Amém.",
          "Amado Jesus, José e Maria! Meu coração vos dou e minha alma. Amado Jesus, José e Maria! Assisti-me na última agonia. Amado Jesus, José e Maria! Expire em paz entre vós minha alma."
        ]},
      { id: "precioso-sangue-breve", title: "Ao Precioso Sangue de Jesus", page: 186,
        text: [
          { note: "Jaculatória:" },
          "Eterno Pai, eu vos ofereço o sangue precioso de Jesus Cristo em satisfação por meus pecados, em sufrágio das benditas almas do purgatório e pelas necessidades da Santa Igreja.",
          "Eterno Pai, nós vos oferecemos o sangue preciosíssimo de Jesus Cristo, derramado por nós, com tanto amor e sofrimento, da chaga da sua mão direita; e pelos merecimentos e virtudes do mesmo sangue, suplicamos à vossa divina majestade que nos conceda a sua bênção para que, em virtude dela, possamos ser defendidos de nossos inimigos e livres de todos os males, dizendo: A bênção de Deus onipotente, Padre, Filho e Espírito Santo, desça sobre nós e fique sempre. Padre-Nosso, Ave-Maria e Glória ao Padre.",
          { note: "Outras ofertas do precioso sangue de Jesus:" },
          "1ª Eterno Pai, eu vos ofereço os merecimentos do precioso sangue de Jesus, vosso diletíssimo Filho e meu divino Redentor, pela propagação e exaltação da Santa Igreja, minha cara mãe, pela conservação e prosperidade da sua cabeça visível, o Sumo Pontífice Romano, pelos Cardeais, Bispos, pastores das almas e por todos os ministros do santuário. Glória ao Padre, etc. Acrescenta-se a jaculatória: Jesus seja sempre bendito e louvado, porque com seu sangue nos tem resgatado.",
          "2ª Eterno Pai, eu vos ofereço os merecimentos do precioso sangue de Jesus, vosso diletíssimo Filho e meu divino Redentor, pela paz e concórdia dos reis e príncipes católicos, pela humilhação dos inimigos da santa fé e pela felicidade do povo cristão. Glória ao Padre, etc. Jesus seja sempre, etc.",
          "3ª Eterno Pai, eu vos ofereço os merecimentos do precioso sangue de Jesus, vosso diletíssimo Filho e meu divino Redentor, pela iluminação dos incrédulos, pela extirpação de todas as heresias e pela conversão dos pecadores. Glória ao Padre, etc. Jesus seja sempre, etc.",
          "4ª Eterno Pai, eu vos ofereço os merecimentos do precioso sangue de Jesus, vosso diletíssimo Filho e meu divino Redentor, por todos os meus parentes, amigos e inimigos; pelos indigentes, enfermos e atribulados, e por todos aqueles por quem vós sabeis que devo orar e quereis que eu ore. Glória ao Padre, etc. Jesus seja sempre, etc.",
          "5ª Eterno Pai, eu vos ofereço os merecimentos do precioso sangue de Jesus, vosso diletíssimo Filho e meu divino Redentor, por todos aqueles que neste dia passam à outra vida, para que os livreis das penas do inferno e os admitais, com a maior brevidade, à posse da vossa glória. Glória ao Padre, etc. Jesus seja sempre, etc.",
          "6ª Eterno Pai, eu vos ofereço os merecimentos do precioso sangue de Jesus, vosso diletíssimo Filho e meu divino Redentor, por todos aqueles que são amantes de tão grande tesouro; por aqueles que estão unidos comigo para a sua honra e adoração; e, enfim, por aqueles que trabalham em propagar a sua devoção. Glória ao Padre, etc. Jesus seja sempre, etc.",
          "7ª Eterno Pai, eu vos ofereço os merecimentos do precioso sangue de Jesus, vosso diletíssimo Filho e meu divino Redentor, por todas as minhas necessidades espirituais e corporais; em sufrágio das santas almas do purgatório, especialmente daquelas que foram mais devotas do preço da nossa redenção e das dores e penas de vossa prezada Mãe, Maria Santíssima. Glória ao Padre, etc. Jesus seja sempre, etc.",
          "Viva o sangue de Jesus, agora e sempre e por todos os séculos dos séculos. Amém."
        ]},
    ]
  },

  // ---------------------------------------------------------
  { id: "santissimo-sacramento", title: "Ao Santíssimo Sacramento do Altar", page: 189,
    note: "Ainda a transcrever do livro.",
    prayers: [
      { id: "jesus-ss-sacramento", title: "Oração a Jesus no Santíssimo Sacramento", page: 189, pending: true, text: [] },
      { id: "atos-adoracao-louvor", title: "Atos de Adoração e Louvor, de Amor, de Adoração e Reparação", page: 190, pending: true, text: [] },
      { id: "encomendacao-jesus", title: "Encomendação a Jesus", page: 194, pending: true, text: [] },
      { id: "peticoes-suplicas", title: "Petições e Súplicas", page: 194, pending: true, text: [] },
      { id: "comunhao-espiritual-livro", title: "Comunhão Espiritual", page: 196, pending: true, text: [] },
      { id: "comunhao-espiritual-afonso-livro", title: "Comunhão Espiritual de Santo Afonso de Ligório", page: 197, pending: true, text: [] },
      { id: "maria-santissima-sacramento", title: "Oração a Maria Santíssima", page: 198, pending: true, text: [] },
      { id: "bencao-ss-sacramento", title: "À Bênção do Santíssimo Sacramento", page: 199, pending: true, text: [] }
    ]
  },

  // ---------------------------------------------------------
  { id: "sagrado-coracao", title: "Orações ao Sagrado Coração de Jesus", page: 204,
    note: "Ainda a transcrever do livro.",
    prayers: [
      { id: "ato-consagracao-sc", title: "Ato de Consagração", page: 204, pending: true, text: [] },
      { id: "pequena-coroa-sc", title: "A Pequena Coroa em Honra do Sagrado Coração de Jesus", page: 205, pending: true, text: [] },
      { id: "ladainha-sc-livro", title: "Ladainha do Sagrado Coração de Jesus", page: 209, pending: true, text: [] },
      { id: "atos-reparacao-sc", title: "Atos de Reparação ao Sagrado Coração de Jesus", page: 213, pending: true, text: [] },
      { id: "ato-desagravo-sc", title: "Ato de Desagravo ao Sagrado Coração de Jesus", page: 216, pending: true, text: [] },
      { id: "breve-consagracao-sc", title: "Breve Consagração", page: 218, pending: true, text: [] },
      { id: "oferecimento-boa-intencao", title: "Oferecimento — A Boa Intenção", page: 218, pending: true, text: [] },
      { id: "jaculatorias-sc-livro", title: "Jaculatórias", page: 219, pending: true, text: [] },
      { id: "lembrai-vos-sc", title: "Lembrai-vos", page: 221, pending: true, text: [] },
      { id: "honra-sc-livro", title: "Oração em Honra do Sagrado Coração de Jesus", page: 222, pending: true, text: [] },
      { id: "cristo-rei", title: "Oração a Cristo-Rei", page: 224, pending: true, text: [] },
      { id: "consagracao-genero-humano", title: "Consagração do Gênero Humano ao Sagrado Coração de Jesus", page: 224, pending: true, text: [] }
    ]
  },

  // ---------------------------------------------------------
  { id: "nossa-senhora", title: "A Nossa Senhora", page: 226,
    prayers: [
      { id: "magnificat-livro", title: "O Magnificat", page: 226, pending: false, text: [
        "Minha alma glorifica o Senhor, e meu espírito exulta de alegria em Deus, meu Salvador. Porque lançou os olhos em sua humilde serva; por isso todas as gerações me chamarão bem-aventurada. Porque fez em mim grandes coisas aquele que é poderoso, e cujo nome é santo. E cuja misericórdia se estende de geração em geração sobre aqueles que o temem. Manifestou o poder de seu braço; dissipou aqueles que se orgulham nos pensamentos de seu coração. Depôs os poderosos do trono, e exaltou os humildes. Encheu de bens os famintos, e despediu vazios os ricos. Tomou cuidado de Israel, seu servo, lembrado da sua misericórdia. Como prometeu a nossos pais, a Abraão e a sua geração, por todos os séculos.",
        "Glória ao Padre, e ao Filho e ao Espírito Santo. Assim como era no princípio, agora e sempre, e por todos os séculos dos séculos. Amém.",
        { note: "Indulgência de 3 anos; ind. plen. nas condições habituais, a quem rezar este cântico diariamente durante um mês inteiro. — (Preces 291.)" }
      ] },
      { id: "louvores-maria-livro", title: "Louvores a Maria Santíssima", page: 227, pending: false, text: [
        "Ó Maria, Virgem Santíssima, eu vos bendigo, de todo o meu coração, sobre todos os anjos e santos do céu, como a Filha do eterno Padre; e vos dou e consagro a minha alma com todas as suas potências.",
        "Ó Maria, Virgem Santíssima, eu vos bendigo, de todo o meu coração, sobre todos os anjos e santos do céu, como a Mãe do Filho unigênito de Deus; e vos dou e consagro o meu corpo com todos os seus sentidos.",
        "Ó Maria, Virgem Santíssima, eu vos bendigo, de todo o meu coração, sobre todos os anjos e santos do céu, como a Esposa predileta do Espírito Santo; e vos dou e consagro o meu coração com todos os seus sentimentos, para que, ao mesmo tempo, me alcanceis da Santíssima Trindade tudo o que me é necessário para a eterna salvação.",
        { note: "Indulgência de 300 dias; ind. plen. nas condições habituais, a quem recitar estes louvores durante todo o mês. — (Preces 305.)" }
      ] },
      { id: "oferecimento-luis-gonzaga-livro", title: "Oferecimento a Maria Santíssima", page: 228, pending: false, text: [
        { note: "De S. Luís Gonzaga." },
        "Minha Senhora, Santa Maria, eu me encomendo à vossa bendita fidelidade e singular patrocínio; e, no seio de vossa misericórdia, entrego hoje, cada dia e na hora da morte, minha alma e meu corpo, todas as minhas esperanças, consolações e todos os meus trabalhos e penalidades, toda a minha vida e o fim dela, para que, por meio de vossa santíssima intercessão e merecimentos, todas as minhas obras se dirijam e disponham conforme a vossa vontade e a de vosso Filho santíssimo. Assim seja.",
        { note: "Indulgência de 3 anos; ind. plen. nas condições habituais, a quem recitar a oração durante todo o mês. — (Preces 313.)" },
        { section: "Outro Oferecimento (de S. Estanislau)" },
        "Ó minha terna Mãe, eu vos ofereço meu trabalho e meus sofrimentos, meu espírito e meu coração. Dignai-vos aceitar esta fraca homenagem de meu respeito e amor por vós; oferecei-a vós mesma a Jesus Cristo, vosso divino Filho e meu Redentor."
      ] },
      { id: "nsra-sc-livro", title: "Oração à Nossa Senhora do Sagrado Coração de Jesus", page: 228, pending: false, text: [
        "Lembrai-vos, ó Nossa Senhora do Sagrado Coração de Jesus, do poder sem limites que vosso divino Filho vos tem dado sobre o seu adorável Coração. Cheios de confiança em vossos méritos, viemos implorar a vossa proteção, ó soberana Senhora do Sagrado Coração de Jesus, cujo Coração, fonte inesgotável de todas as graças, podeis abrir segundo o vosso desejo, para que desçam sobre os homens todos os tesouros de amor e misericórdia, de luz e de salvação que encerra em si.",
        "Vos suplicamos nos concedais a graça que, com fervor, vos pedimos. Não podemos deixar de contar convosco, porque sois a nossa esperança, ó Nossa Senhora do Sagrado Coração de Jesus; acolhei, com bondade, nossas súplicas e dignai-vos de ouvi-las."
      ] },
      { id: "coroazinha-imaculada-livro", title: "Coroazinha da Imaculada Conceição", page: 229, pending: false, text: [
        "Em nome do Padre e do Filho e do Espírito Santo. Amém.",
        "Bendita seja a santa e imaculada Conceição da bem-aventurada sempre Virgem Maria!",
        { note: "Padre-Nosso, 4 Ave-Marias, 1 Glória ao Padre — repete-se três vezes." },
        { section: "Jaculatórias a Nossa Senhora" },
        "Dulcíssimo Coração de Maria, sede minha salvação! — (Preces 352.)",
        "Bendita seja a santa, imaculada e puríssima Conceição da bem-aventurada Virgem Maria, Mãe de Deus. — (Preces 324.)",
        "Ó Maria, concebida sem pecado, rogai por nós, que recorremos a vós. — (Preces 325.)",
        "Ó Maria, Mãe de Deus e Mãe de misericórdia, rogai por nós e pelos fiéis defuntos. — (Preces 271.)",
        "Conhecidos, louvados, benditos, amados, servidos e glorificados sejam para sempre e por toda parte o divino Coração de Jesus e o puríssimo Coração de Maria. Amém."
      ] },
      { id: "ladainha-nsra-livro", title: "Ladainha de Nossa Senhora", page: 230, pending: false, text: [
        { pt: "Senhor, tende piedade de nós.", lt: "Kýrie, eléison." },
        { pt: "Cristo, tende piedade de nós.", lt: "Christe, eléison." },
        { pt: "Senhor, tende piedade de nós.", lt: "Kýrie, eléison." },
        { pt: "Cristo, ouvi-nos.", lt: "Christe, audi nos." },
        { pt: "Cristo, atendei-nos.", lt: "Christe, exáudi nos." },
        { pt: "Deus Pai dos céus, tende piedade de nós.", lt: "Pater de cælis, Deus, miserére nobis." },
        { pt: "Deus Filho, Redentor do mundo, tende piedade de nós.", lt: "Fili, Redémptor mundi, Deus, miserére nobis." },
        { pt: "Deus Espírito Santo, tende piedade de nós.", lt: "Spíritus Sancte, Deus, miserére nobis." },
        { pt: "Santíssima Trindade, que sois um só Deus, tende piedade de nós.", lt: "Sancta Trínitas, unus Deus, miserére nobis." },
        { pt: "Santa Maria, rogai por nós.", lt: "Sancta María, ora pro nobis." },
        { pt: "Santa Mãe de Deus, rogai por nós.", lt: "Sancta Dei Génitrix, ora pro nobis." },
        { pt: "Santa Virgem das virgens, rogai por nós.", lt: "Sancta Virgo vírginum, ora pro nobis." },
        { pt: "Mãe de Jesus Cristo, rogai por nós.", lt: "Mater Christi, ora pro nobis." },
        { pt: "Mãe da divina graça, rogai por nós.", lt: "Mater divínæ grátiæ, ora pro nobis." },
        { pt: "Mãe puríssima, rogai por nós.", lt: "Mater puríssima, ora pro nobis." },
        { pt: "Mãe castíssima, rogai por nós.", lt: "Mater castíssima, ora pro nobis." },
        { pt: "Mãe imaculada, rogai por nós.", lt: "Mater inviolata, ora pro nobis." },
        { pt: "Mãe intacta, rogai por nós.", lt: "Mater intemeráta, ora pro nobis." },
        { pt: "Mãe amável, rogai por nós.", lt: "Mater amábilis, ora pro nobis." },
        { pt: "Mãe admirável, rogai por nós.", lt: "Mater admirábilis, ora pro nobis." },
        { pt: "Mãe do bom conselho, rogai por nós.", lt: "Mater boni consílii, ora pro nobis." },
        { pt: "Mãe do Criador, rogai por nós.", lt: "Mater Creatóris, ora pro nobis." },
        { pt: "Mãe do Salvador, rogai por nós.", lt: "Mater Salvatóris, ora pro nobis." },
        { pt: "Virgem prudentíssima, rogai por nós.", lt: "Virgo prudentíssima, ora pro nobis." },
        { pt: "Virgem venerável, rogai por nós.", lt: "Virgo veneránda, ora pro nobis." },
        { pt: "Virgem louvável, rogai por nós.", lt: "Virgo prædicánda, ora pro nobis." },
        { pt: "Virgem poderosa, rogai por nós.", lt: "Virgo potens, ora pro nobis." },
        { pt: "Virgem benigna, rogai por nós.", lt: "Virgo clemens, ora pro nobis." },
        { pt: "Virgem fiel, rogai por nós.", lt: "Virgo fidélis, ora pro nobis." },
        { pt: "Espelho de justiça, rogai por nós.", lt: "Spéculum justítiæ, ora pro nobis." },
        { pt: "Sede da sabedoria, rogai por nós.", lt: "Sedes sapiéntiæ, ora pro nobis." },
        { pt: "Causa de nossa alegria, rogai por nós.", lt: "Causa nostræ lætítiæ, ora pro nobis." },
        { pt: "Vaso espiritual, rogai por nós.", lt: "Vas spirituále, ora pro nobis." },
        { pt: "Vaso honorífico, rogai por nós.", lt: "Vas honorábile, ora pro nobis." },
        { pt: "Vaso insigne de devoção, rogai por nós.", lt: "Vas insígne devotiónis, ora pro nobis." },
        { pt: "Rosa mística, rogai por nós.", lt: "Rosa mýstica, ora pro nobis." },
        { pt: "Torre de Davi, rogai por nós.", lt: "Turris Davídica, ora pro nobis." },
        { pt: "Torre de marfim, rogai por nós.", lt: "Turris ebúrnea, ora pro nobis." },
        { pt: "Casa de ouro, rogai por nós.", lt: "Domus áurea, ora pro nobis." },
        { pt: "Arca da aliança, rogai por nós.", lt: "Fœderis arca, ora pro nobis." },
        { pt: "Porta do céu, rogai por nós.", lt: "Jánua cæli, ora pro nobis." },
        { pt: "Estrela da manhã, rogai por nós.", lt: "Stella matutína, ora pro nobis." },
        { pt: "Saúde dos enfermos, rogai por nós.", lt: "Salus infirmórum, ora pro nobis." },
        { pt: "Refúgio dos pecadores, rogai por nós.", lt: "Refúgium peccatórum, ora pro nobis." },
        { pt: "Consoladora dos aflitos, rogai por nós.", lt: "Consolátrix afflictórum, ora pro nobis." },
        { pt: "Auxílio dos cristãos, rogai por nós.", lt: "Auxílium Christianórum, ora pro nobis." },
        { pt: "Rainha dos anjos, rogai por nós.", lt: "Regína Angelórum, ora pro nobis." },
        { pt: "Rainha dos patriarcas, rogai por nós.", lt: "Regína Patriarchárum, ora pro nobis." },
        { pt: "Rainha dos profetas, rogai por nós.", lt: "Regína Prophetárum, ora pro nobis." },
        { pt: "Rainha dos apóstolos, rogai por nós.", lt: "Regína Apostolórum, ora pro nobis." },
        { pt: "Rainha dos mártires, rogai por nós.", lt: "Regína Mártyrum, ora pro nobis." },
        { pt: "Rainha dos confessores, rogai por nós.", lt: "Regína Confessórum, ora pro nobis." },
        { pt: "Rainha das virgens, rogai por nós.", lt: "Regína Vírginum, ora pro nobis." },
        { pt: "Rainha de todos os santos, rogai por nós.", lt: "Regína Sanctórum ómnium, ora pro nobis." },
        { pt: "Rainha concebida sem pecado original, rogai por nós.", lt: "Regína sine labe originali concépta, ora pro nobis." },
        { pt: "Rainha assunta aos céus, rogai por nós.", lt: "Regína in cælum assúmpta, ora pro nobis." },
        { pt: "Rainha do Santíssimo Rosário, rogai por nós.", lt: "Regína sacratíssimi Rosárii, ora pro nobis." },
        { pt: "Rainha da paz, rogai por nós.", lt: "Regína pacis, ora pro nobis." },
        { pt: "Cordeiro de Deus, que tirais os pecados do mundo, perdoai-nos, Senhor.", lt: "Agnus Dei, qui tollis peccáta mundi, parce nobis, Dómine." },
        { pt: "Cordeiro de Deus, que tirais os pecados do mundo, ouvi-nos, Senhor.", lt: "Agnus Dei, qui tollis peccáta mundi, exáudi nos, Dómine." },
        { pt: "Cordeiro de Deus, que tirais os pecados do mundo, tende piedade de nós.", lt: "Agnus Dei, qui tollis peccáta mundi, miserére nobis." },
        { pt: "℣. Rogai por nós, Santa Mãe de Deus.", lt: "℣. Ora pro nobis, sancta Dei Génitrix." },
        { pt: "℟. Para que sejamos dignos das promessas de Cristo.", lt: "℟. Ut digni efficiámur promissiónibus Christi." },
        "Oremos. Senhor Deus, nós vos suplicamos que concedais a vossos servos perpétua saúde de alma e corpo; e que, pela gloriosa intercessão da bem-aventurada sempre Virgem Maria, sejamos livres da presente tristeza e gozemos da eterna alegria. Por Cristo Nosso Senhor. Amém.",
        { note: "No mês de outubro, em lugar do versículo acima: ℣. Rogai por nós, Rainha do sacratíssimo Rosário. ℟. Para que sejamos dignos das promessas de Cristo. Indulgência de 7 anos. Plenária no mês, nas condições de costume, rezando todos os dias a ladainha com o versículo e a oração. — (Preces 290.)" },
        { section: "Tota Pulchra" },
        { pt: "℣. Toda sois formosa, ó Maria. ℟. Toda sois formosa, ó Maria.", lt: "℣. Tota pulchra es, María. ℟. Tota pulchra es, María." },
        { pt: "℣. E mácula original não há em vós. ℟. E mácula original não há em vós.", lt: "℣. Et mácula originális non est in te. ℟. Et mácula originális non est in te." },
        { pt: "℣. Vós sois a glória de Jerusalém. ℟. Vós a alegria de Israel.", lt: "℣. Tu glória Jerúsalem. ℟. Tu lætítia Israël." },
        { pt: "℣. Vós a honra do nosso povo. ℟. Vós a advogada dos pecadores.", lt: "℣. Tu honorificéntia pópuli nostri. ℟. Tu advocáta peccatórum." },
        { pt: "℣. Ó Maria. ℟. Ó Maria.", lt: "℣. O María. ℟. O María." },
        { pt: "℣. Virgem prudentíssima. ℟. Mãe clementíssima.", lt: "℣. Virgo prudentíssima. ℟. Mater cleméntissima." },
        { pt: "℣. Rogai por nós. ℟. Intercedei por nós a Nosso Senhor Jesus Cristo.", lt: "℣. Ora pro nobis. ℟. Intercéde pro nobis ad Dóminum Jesum Christum." },
        { pt: "℣. Vós fostes, ó Virgem, imaculada em vossa conceição. ℟. Rogai por nós ao Pai, cujo Filho destes à luz.", lt: "℣. In Conceptióne tua, Virgo, immaculáta fuísti. ℟. Ora pro nobis Patrem, cujus Fílium peperísti." },
        "Oremos. Ó Deus, que pela imaculada conceição da Virgem Maria preparastes a vosso Filho digna morada, nós vos rogamos que, pois a preservastes de toda mancha pela previsão da morte de vosso mesmo Filho, nos concedais, por sua intercessão, que também nós, purificados, até vós cheguemos. Pelo mesmo Cristo, Senhor Nosso. Amém.",
        { note: "Indulgência de 500 dias. — (Preces 327.)" }
      ] },
      { id: "mes-de-maria", title: "Oração Preparatória para o Mês de Maria", page: 235, pending: false, text: [
        "Abri, Senhor, os nossos lábios, para bendizer o vosso santo nome na veneração da Santíssima Virgem Maria. Purificai também o nosso coração de todos os pensamentos inúteis, estranhos e perversos. Iluminai o nosso entendimento, inflamai a nossa vontade, para que possamos fazer esta oração digna, atenta e devotamente, e assim mereçamos ser atendidos na presença de vossa divina majestade. Por Jesus Cristo Nosso Senhor. Amém.",
        "Ó Virgem, por excelência e gloriosa Mãe de Deus, Maria Santíssima, eis-nos outra vez aqui reunidos humildemente ao pé de vosso altar, a fim de testemunhar-vos o nosso respeito e amor. Possuídos de santa alegria, contemplamos as excelsas prerrogativas de que sois dotada, as graças copiosas que vos foram concedidas, os privilégios singulares de que sois revestida, e a glória indizível que gozais no céu, ao lado do vosso divino Filho Jesus.",
        "Rendemos graças ao Todo-Poderoso, que vos deu por Mãe e adornou o vosso Coração como ornamento e brilho de todas as virtudes. Nós vos dedicamos, ó Virgem-Mãe, todos os dias deste mês e em particular o presente. Sereis hoje e para sempre a nossa advogada, medianeira e Mãe perante o Altíssimo. A vós consagramos o nosso corpo, nosso coração, nossa alma imortal. Cheios de confiança, depositamos em vossas mãos abençoadas todas as nossas angústias e tribulações, nossas dúvidas, nossas alegrias e esperanças; e, pela vossa intercessão poderosa, esperamos a graça de uma morte preciosa aos olhos do Senhor.",
        "Mostrai que sois a nossa Mãe, lançando carinhosamente a vossa bênção maternal sobre todos os vossos filhos e filhas. Recomendamos à vossa solicitude a Santa Igreja Católica, principalmente o Sumo Pontífice, o Papa, todos os bispos e sacerdotes, nossos amigos e inimigos, todos os aflitos e atribulados e as benditas almas do purgatório. O vosso Coração amoroso ache delícia em acolher benignamente os nossos cânticos e orações, que sobem deste vale de lágrimas ao vosso trono elevado, unindo-se às harmonias dos coros angélicos, que celebram os vossos louvores e cantam as vossas glórias.",
        "Finalmente, de vós esperamos a graça de perseverar até ao fim da nossa vida no santo serviço de Deus, de obter a felicidade incomparável de contemplá-lo um dia no céu e louvar e bendizer convosco a Santíssima Trindade por todos os séculos dos séculos. Amém.",
        "Lembrai-vos, ó piíssima Virgem Maria, que nunca se ouviu dizer que algum daqueles que têm recorrido à vossa proteção, implorado a vossa assistência e reclamado o vosso socorro, fosse por vós desamparado. Animado eu, pois, com igual confiança, a vós, ó Virgem entre todas singular, como a Mãe recorro, a vós me valho, e, gemendo sob o peso de meus pecados, me prostro a vossos pés. Não desprezeis as minhas súplicas, ó Mãe do Filho de Deus humanado, mas dignai-vos de as ouvir propícia e de me alcançar o que vos rogo. Amém.",
        { note: "Indulgência de 3 anos; ind. plen. nas condições habituais, a quem recitar a oração durante todo o mês. — (Preces 309.)" }
      ] },
      { id: "coracao-imaculado-livro", title: "Oração ao Coração Imaculado de Maria", page: 237, pending: false, text: [
        { note: "Oração do Papa Pio VII." },
        "Ó Coração de Maria, Mãe de Deus e nossa Mãe, Coração amabilíssimo, objeto das complacências da Santíssima Trindade, digno de veneração e de todo o amor dos anjos e dos homens, Coração o mais semelhante ao Coração de Jesus, do qual vós sois a mais perfeita imagem, Coração cheio de bondade, tende compaixão das nossas misérias, livrai nossos corações de sua frieza e fazei com que se consagrem inteiramente ao Coração do divino Salvador. Derramai neles vosso amor e vossas virtudes e inflamai-os do fogo que abrasa o vosso Coração.",
        "Amparai com vossa proteção a Santa Igreja e sede sempre o seu refúgio e sua invencível defesa contra todos os ataques de seus inimigos. Sede nosso caminho para ir a Jesus, e o canal que nos transmita todas as graças necessárias à nossa salvação. Sede nosso socorro em nossas necessidades, nosso consolo em nossas aflições, nossa força em nossas tentações, nosso abrigo nas perseguições. Sede nosso auxílio em todos os perigos, mas sobretudo nos últimos combates da nossa vida, na hora da morte, quando, para conquistar nossa alma, o inferno se lançará contra nós.",
        "Socorrei-nos nesse momento supremo, nesse instante decisivo do qual dependerá todo o nosso eterno destino. Ah, Virgem compassiva, fazei sentir então a ternura de vosso Coração e a força de vosso poder sobre o Coração de Jesus, abrindo-nos, na própria fonte da misericórdia, um asilo seguro para que possamos bendizê-lo convosco no paraíso durante todos os séculos dos séculos. Amém.",
        { note: "Indulgência de 500 dias; ind. plenária, nas condições habituais, a quem recitar a oração durante todo o mês. — (Preces 358.)" }
      ] },
      { id: "estrela-do-ceu", title: "Oração a Nossa Senhora, Estrela do Céu", page: 238, pending: false, text: [
        { note: "Piíssima antífona e oração contra epidemias, extraídas das Crônicas da Ordem Seráfica dos Frades Menores." },
        "A Estrela do Céu (Maria Santíssima), que seus peitos nutriu ao Senhor, extinguiu a mortal peste que havia plantado o primeiro pai do gênero humano. Digne-se agora a mesma Estrela impedir os influxos dos astros, que por suas disposições malignas costumam ferir o povo com pestíferas chagas. Atendei-nos, ó Senhora, porque o vosso Filho, que vos honra, nada vos nega. E vós, Senhor Jesus, salvai-nos, deferindo as súplicas de vossa Mãe Virgem.",
        "℣. Rogai por nós, Santa Mãe de Deus. ℟. Para que sejamos dignos das promessas de Cristo.",
        "Oremos. Ó Deus de misericórdia, Deus de piedade, Deus de indulgência, que, condescendendo-vos na aflição do vosso povo, dissestes ao anjo que o feriu: suspende a tua mão. Por amor daquela Estrela gloriosa (vossa Mãe puríssima), de cujos preciosos peitos recebestes o licor, milagroso contraveneno dos males que nos afligem, concedei-nos o auxílio da vossa graça, para que sejamos com certeza livres e misericordiosamente preservados de toda peste, de improvisa morte, e de todo perigo de condenação eterna. Por vós, Jesus Cristo, Rei da glória, que viveis e reinais por todos os séculos dos séculos. Amém."
      ] },
      { id: "nsra-fatima", title: "A Nossa Senhora de Fátima", page: 239, pending: false, text: [
        "Minha alma engrandece ao Senhor e o meu espírito exulta de alegria em Deus, meu Salvador.",
        "Considerando os extremos de amor que Maria nos tem manifestado, apraz-nos servir-nos das suas próprias palavras para louvar a Deus e implorar por intercessão de Nossa Senhora de Fátima a graça que tanto desejamos. — Ave-Maria.",
        "Com profunda humildade, Maria acrescentou o ter posto os olhos na baixeza de sua serva; mas, inspirada pelo Espírito Santo, exclamou: “Porque eis aí de hoje em diante me chamarão bem-aventurada todas as gerações!”",
        "Reconhecidos que vos têm dado essas multidões, todos os meses, acorrem pressurosas a Fátima. — Ave-Maria.",
        "“Porque o Onipotente fez em mim grandes coisas e o seu nome é santo. E a sua misericórdia se estenderá de geração em geração sobre os que o temem!”",
        "Os vossos filhos estremecem de ventura, ó Nossa Senhora de Fátima, contemplando as vossas grandezas. Obtende-lhes da misericórdia divina a graça que fervorosamente vos pedem. — Ave-Maria.",
        "“Ele manifestou o poder do seu braço; dissipou os que no fundo do seu coração formavam altivos pensamentos. Depôs do trono os poderosos e elevou os humildes.”",
        "Desejosos de aproveitar as lições de humildade que estas vossas palavras nos dão, ó Nossa Senhora de Fátima, reconhecemos a nossa indignidade e miséria, mas, confiados na vossa bondade, suplicamos nos alcanceis a graça. — Ave-Maria.",
        "“Aos pobres famintos encheu de bens e aos ricos ambiciosos deixou vazios.”",
        "Eis-nos diante de vós, ó Nossa Senhora de Fátima, bem pobrezinhos e necessitados de vossos benefícios. Compadecei-vos da nossa indigência e concedei-nos a graça que especialmente vos pedimos. — Ave-Maria.",
        "“Tomou debaixo da sua proteção a Israel, seu servo, lembrado da sua misericórdia. Assim o tinha prometido a nossos pais, Abraão e sua posteridade para sempre!”",
        "A vós confiamos, ó Nossa Senhora de Fátima, os preciosos interesses da nossa alma, corpo, Pátria e família, todos os nossos desejos e intenções. Alcançai-nos de Deus a graça que tanto vos pedimos e tomai-nos, para sempre, debaixo de vossa proteção! — Ave-Maria.",
        { note: "Glória ao Padre, em louvor da Santíssima Trindade. Nossa Senhora do Rosário de Fátima, rogai por nós. Recomenda-se a união espiritual com os Peregrinos de Fátima no dia 13 de cada mês, com a Novena de 5 a 13, iniciada ou terminada por uma fervorosa comunhão." },
        { section: "À Virgem Dolorosa" },
        "Ó Santíssima Mãe, fazei, pelo intenso martírio que sofrestes ao pé da cruz, nas três horas de agonia de vosso Filho Jesus Cristo, dignai-vos alcançar a todos, que somos filhos de vossas dores, em nossa última agonia, que, por vossa intercessão, possamos, no leito da morte, adornar a coroa de vossa glória na glória do paraíso.",
        "Ó Mãe de graça e piedade, clemente, excelsa Maria, do dragão nos salva e acolhe em nossa extrema agonia.",
        "℣. Da súbita e improvisa morte, ℟. Livrai-nos, Senhor. ℣. Das traições do demônio, ℟. Livrai-nos, Senhor. ℣. Da morte eterna, ℟. Livrai-nos, Senhor.",
        "Oração. Ó Deus, que na dolorosíssima morte de vosso Filho constituístes o exemplo e o auxílio para a salvação do gênero humano, concedei-nos, como o pedimos, que no último perigo de nossa morte mereçamos conseguir o fruto de tão grande caridade e sejamos associados à glória do mesmo Redentor. Pelo mesmo Jesus Cristo Nosso Senhor. Amém.",
        "Amado Jesus, José e Maria! Meu coração vos dou e minha alma. Amado Jesus, José e Maria! Assisti-me na última agonia. Amado Jesus, José e Maria! Expire em paz entre vós minha alma.",
        { note: "Indulgência de 7 anos por cada uma das invocações; ind. plenária no fim do mês, a quem recitar as invocações durante todo o mês. — (Preces 589.)" }
      ] },
      { id: "santo-rosario-livro", title: "O Santo Rosário", page: 243, pending: false, text: [
        { note: "Resumo do livro — o desenvolvimento completo com os 15 mistérios está na aba Rosário do aplicativo." },
        "O Rosário é certo modo de orar, pelo qual se contemplam os quinze mistérios principais de nossa santa religião, rezando-se em cada um deles um Padre-Nosso, 10 Ave-Marias e 1 Glória ao Padre. Introduziu-se, porém, o costume de rezar somente cinco mistérios: o terço, por dia.",
        "A devoção do Santo Rosário foi revelada por Nossa Senhora, no ano de 1214, a S. Domingos, como meio eficacíssimo para combater as heresias, sustentar a fé, aumentar o amor de Deus e a caridade nos corações dos fiéis, e atrair as bênçãos do céu sobre todo o mundo. São inumeráveis os favores, as graças e bênçãos celestes, que foram alcançados por esta santa devoção, tão agradável a nossa Senhora, principalmente quando se tem o coração puro. Os Sumos Pontífices enriqueceram a devoção do Santo Rosário com muitíssimas indulgências, aplicáveis também às almas do purgatório. Mas, para ganhar estas indulgências, é imprescindível a meditação dos respectivos mistérios."
      ] },
      { id: "sabado-sacerdotes", title: "O Sábado dos Sacerdotes", page: 247, pending: false, text: [
        { note: "É grande o desejo de possuir sacerdotes santos que anima a alma cristã, a devoção de consagrar mensalmente todo o dia do 1.º sábado do mês à santificação do clero e à perseverança das vocações sacerdotais. Esta prática foi iniciada por um sacerdote salesiano, abençoada pelo Santo Padre e recomendada pelos nossos Bispos." },
        "No Sábado dos Sacerdotes, os fiéis oferecem ao Sagrado Coração de Jesus, pelas mãos de Maria Santíssima, suas orações, trabalhos, sacrifícios, alegrias e sofrimentos, particularmente, se possível for, a Santa Missa e a Sagrada Comunhão, pedindo a Deus sacerdotes segundo o Coração de Jesus, e a graça de ver algum membro da própria família servindo a Deus no altar.",
        { section: "Preces" },
        "Senhor, tende piedade de nós! Jesus Cristo, tende piedade de nós! Espírito Santo, tende piedade de nós! Padre Eterno, que sois Deus, tende piedade dos sacerdotes. Filho Redentor do mundo, que sois Deus, tende piedade dos sacerdotes. Espírito Divino, que sois Deus, tende piedade dos sacerdotes. Adorável e indivídua Trindade, tende piedade dos sacerdotes. Sagrado Coração de Jesus, modelo do coração sacerdotal, santificai os sacerdotes. Jesus, bom pastor, que dais a vida pelas vossas ovelhas, santificai os sacerdotes.",
        "Divino Salvador, Jesus Cristo, que confiastes aos sacerdotes, como a vossos representantes, a obra da redenção, a salvação e a felicidade dos homens, eu vos ofereço, pelas mãos de nossa Mãe Santíssima, para a santificação dos sacerdotes e dos candidatos ao sacerdócio, inteiramente todas as orações, trabalhos, alegrias, sacrifícios e sofrimentos deste sábado.",
        "Concedei-nos, Senhor, sacerdotes verdadeiramente santos, que, abrasados pelo fogo do vosso amor divino, só procurem a vossa maior glória e a salvação de nossas almas. E vós, ó Maria, boa Mãe dos sacerdotes, protegei a todos eles nos perigos e dificuldades de sua santa vocação. Guiai também, com vossa mão maternal, os pobres sacerdotes transviados, que se tornaram infiéis à sua sublime vocação, para que voltem quanto antes para junto do Bom Pastor. Amém.",
        "Maria Santíssima, Rainha do clero, Mãe do sumo sacerdote Jesus, intercedei pelos sacerdotes e pelos que se preparam para o sacerdócio, e despertai verdadeiras vocações sacerdotais entre a mocidade.",
        { note: "“Deus no céu e nós na terra, nada desejamos com mais ardor, que orações e sacrifícios pelos sacerdotes. Peçamos muito a Deus nos dê sacerdotes santos. Tendo sacerdotes santos, tudo o mais conseguirá; faltando-nos eles, de nada nos servirá o mais.” (Pio XI.) — Indulgência plenária no primeiro sábado do mês e outras datas indicadas, confessando, comungando e rezando na intenção do Sumo Pontífice pelos sacerdotes. — (Preces 612.)" }
      ] }
    ]
  },

  // ---------------------------------------------------------
  { id: "sao-jose", title: "A São José", page: 252,
    note: "Ainda a transcrever do livro.",
    prayers: [
      { id: "lembrai-vos-sao-jose-livro", title: "Lembrai-vos", page: 252, pending: true, text: [] },
      { id: "sao-jose-igreja", title: "Oração a São José pela Santa Igreja", page: 252, pending: true, text: [] },
      { id: "pureza-sao-jose-livro", title: "Oração para Alcançar a Santa Virtude da Pureza", page: 253, pending: true, text: [] },
      { id: "estado-vida-sao-jose-livro", title: "Para Obter o Bom Acerto na Escolha de um Estado de Vida", page: 254, pending: true, text: [] },
      { id: "ladainha-sao-jose-livro", title: "Ladainha de São José", page: 254, pending: true, text: [] },
      { id: "conversao-pecador-sao-jose-livro", title: "Para Obter a Conversão de um Pecador", page: 257, pending: true, text: [] },
      { id: "patrocinio-sao-jose", title: "Patrocínio de São José", page: 257, pending: true, text: [] },
      { id: "oracoes-sao-jose-livro", title: "Orações a São José", page: 258, pending: true, text: [] },
      { id: "sao-jose-agonizantes", title: "A São José, pelos Agonizantes", page: 259, pending: true, text: [] },
      { id: "boa-morte-sao-jose", title: "Para Obter a Graça de uma Boa Morte", page: 259, pending: true, text: [] },
      { id: "invocacoes-sao-jose", title: "Invocações a São José", page: 260, pending: true, text: [] },
      { id: "sete-dores-alegrias-livro", title: "As Sete Dores e Sete Alegrias de São José", page: 260, pending: true, text: [] },
      { id: "sao-jose-purgatorio", title: "Oração a São José, pelas Almas do Purgatório", page: 263, pending: true, text: [] }
    ]
  },

  // ---------------------------------------------------------
  { id: "anjos-santos", title: "Aos Anjos e Santos", page: 264,
    note: "Ainda a transcrever do livro.",
    prayers: [
      { id: "arcanjos-livro", title: "Aos Santos Arcanjos São Miguel, São Gabriel e São Rafael", page: 264, pending: true, text: [] },
      { id: "anjos-guarda-livro", title: "Aos Santos Anjos da Guarda", page: 265, pending: true, text: [] },
      { id: "pedro-paulo-livro", title: "Orações aos Santos Apóstolos São Pedro e São Paulo", page: 265, pending: true, text: [] },
      { id: "joaquim-ana-livro", title: "A São Joaquim e Sant'Ana", page: 266, pending: true, text: [] },
      { id: "francisco-assis-livro", title: "A São Francisco de Assis", page: 266, pending: true, text: [] },
      { id: "santo-antonio-livro", title: "Ao Glorioso Santo Antônio", page: 267, pending: true, text: [] },
      { id: "responsorio-antonio-livro", title: "Responsório de Santo Antônio", page: 268, pending: true, text: [] },
      { id: "sao-sebastiao", title: "A São Sebastião, Advogado Contra a Peste", page: 270, pending: true, text: [] },
      { id: "sao-roque-epidemias", title: "A São Roque, Contra as Epidemias", page: 270, pending: true, text: [] },
      { id: "tres-padroeiros-mocidade", title: "Consagração Cotidiana aos Três Santos Padroeiros da Mocidade", page: 271, pending: true, text: [] },
      { id: "judas-tadeu", title: "Prece a São Judas Tadeu", page: 273, pending: true, text: [] },
      { id: "santa-ines-livro", title: "Oração a Santa Inês", page: 274, pending: true, text: [] },
      { id: "santa-rosa-lima-livro", title: "Oração a Santa Rosa de Lima", page: 275, pending: true, text: [] },
      { id: "joao-batista-livro", title: "Oração a São João Batista", page: 276, pending: true, text: [] },
      { id: "sao-roque-livro", title: "Oração a São Roque", page: 277, pending: true, text: [] },
      { id: "sao-benedito", title: "Oração a São Benedito", page: 277, pending: true, text: [] },
      { id: "sao-bras", title: "Oração a São Brás", page: 278, pending: true, text: [] },
      { id: "sao-expedito", title: "Oração a São Expedito", page: 279, pending: true, text: [] },
      { id: "teresinha-livro", title: "A Santa Teresinha do Menino Jesus", page: 279, pending: true, text: [] },
      { id: "santa-barbara", title: "Oração a Santa Bárbara", page: 280, pending: true, text: [] },
      { id: "santa-filomena", title: "Oração a Santa Filomena", page: 281, pending: true, text: [] },
      { id: "santa-rita-cassia", title: "Oração a Santa Rita de Cássia", page: 282, pending: true, text: [] },
      { id: "margarida-alacoque", title: "Oração a Santa Margarida Maria Alacoque", page: 282, pending: true, text: [] }
    ]
  },

  // ---------------------------------------------------------
  { id: "oracoes-diversas", title: "Orações Diversas", page: 283,
    note: "Ainda a transcrever do livro.",
    prayers: [
      { id: "pelos-pais", title: "Oração pelos Pais", page: 283, pending: true, text: [] },
      { id: "pelos-filhos", title: "Oração pelos Filhos", page: 284, pending: true, text: [] },
      { id: "pela-familia", title: "Oração pela Família", page: 284, pending: true, text: [] },
      { id: "pelo-papa", title: "Oração pelo Papa", page: 285, pending: true, text: [] },
      { id: "pelo-bispo", title: "Oração pelo Bispo", page: 285, pending: true, text: [] },
      { id: "pelo-confessor", title: "Oração pelo Confessor", page: 285, pending: true, text: [] },
      { id: "pelos-inimigos", title: "Oração pelos Inimigos", page: 286, pending: true, text: [] },
      { id: "pedir-castidade", title: "Oração para Pedir a Castidade", page: 286, pending: true, text: [] },
      { id: "pedir-humildade", title: "Oração para Pedir a Humildade", page: 286, pending: true, text: [] },
      { id: "pedir-paciencia", title: "Oração para Pedir a Paciência", page: 287, pending: true, text: [] },
      { id: "pedir-paz", title: "Oração para Pedir a Paz", page: 287, pending: true, text: [] },
      { id: "propagacao-fe", title: "Oração pela Propagação da Fé", page: 287, pending: true, text: [] },
      { id: "clero-vocacoes", title: "Oração pelo Clero e as Vocações Sacerdotais", page: 287, pending: true, text: [] },
      { id: "pelos-viajantes", title: "Oração pelos Viajantes", page: 288, pending: true, text: [] },
      { id: "conhecer-vocacao", title: "Oração para Conhecer a Vocação", page: 288, pending: true, text: [] },
      { id: "almas-purgatorio-diversas", title: "Pelas Almas do Purgatório", page: 289, pending: true, text: [] },
      { id: "pais-defuntos", title: "Pelos Pais Defuntos", page: 289, pending: true, text: [] },
      { id: "pelos-agonizantes-diversas", title: "Pelos Agonizantes", page: 289, pending: true, text: [] },
      { id: "por-um-enfermo", title: "Oração por um Enfermo", page: 290, pending: true, text: [] },
      { id: "ladainha-todos-santos-livro", title: "Ladainha de Todos os Santos", page: 290, pending: true, text: [] },
      { id: "ato-heroico-livro", title: "Ato Heróico de Caridade para com as Almas do Purgatório", page: 300, pending: true, text: [] },
      { id: "te-deum-livro", title: "Te Deum", page: 301, pending: true, text: [] },
      { id: "veni-creator-livro", title: "Veni Creator", page: 303, pending: true, text: [] },
      { id: "stabat-mater-livro", title: "Stabat Mater", page: 304, pending: true, text: [] },
      { id: "jaculatorias-diversas", title: "Jaculatórias", page: 306, pending: true, text: [] },
      { id: "preparacao-morte", title: "Preparação para a Morte", page: 307, pending: true, text: [] },
      { id: "ladainha-agonizantes", title: "Ladainha dos Agonizantes", page: 312, pending: true, text: [] },
      { id: "suplicas-agonizantes", title: "Súplicas", page: 314, pending: true, text: [] },
      { id: "outras-oracoes-agonizantes", title: "Outras Orações pelos Agonizantes", page: 318, pending: true, text: [] }
    ]
  },

  // ---------------------------------------------------------
  { id: "apendice", title: "Apêndice", page: 325,
    prayers: [
      { id: "renovacao-batismo-apendice", title: "Ato de Renovação das Promessas do Batismo", page: 325, pending: false, text: [
        { note: "Conforme a \"Pastoral Coletiva\", cap. VII, 56." },
        "Creio em vós, meu Deus, Pai onipotente, Criador do céu e da terra. Creio em Jesus Cristo, vosso Filho unigênito, verdadeiro Deus e verdadeiro homem, que morreu para nos salvar, que ao terceiro dia ressuscitou dentre os mortos e subiu ao céu, onde está sentado à direita do Pai, donde há de vir a julgar os vivos e os mortos. Creio na Santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne e na vida eterna.",
        { note: "Um trecho central deste Ato de Renovação — a renúncia a Satanás, às suas obras e vaidades, e a promessa de evitar espetáculos e diversões perigosas — veio numa das páginas mais corrompidas do scan original e não pôde ser reconstruído com segurança. Falta completar a partir de outra fonte." },
        "...com o vosso auxílio, guardar os vossos mandamentos, amar-vos sobre todas as coisas e ao próximo como a mim mesmo, por amor de vós. Conhecendo a minha fraqueza, peço-vos, Senhor, que me ajudeis a cumprir esta minha promessa e me concedais a perseverança final no gozo de vossa glória. Maria Santíssima, minha querida Mãe, meu anjo da guarda e os santos meus protetores e advogados, intercedei por mim, a fim de que eu constantemente persevere na graça do meu batismo. Amém."
      ]},
      { id: "dias-santos-guarda", title: "Dias Santos de Guarda", page: 326, pending: false, text: [
        { section: "Dias Santos de Guarda" },
        "Circuncisão de Nosso Senhor — 1 de janeiro. Epifania (Reis) — 6 de janeiro. Ascensão de Nosso Senhor — 40 dias depois da Páscoa. Corpo de Deus — quinta-feira depois do domingo da Santíssima Trindade. S. Pedro e S. Paulo — 29 de junho. Assunção de Nossa Senhora — 15 de agosto. Todos os Santos — 1 de novembro. Imaculada Conceição — 8 de dezembro. Natal — 25 de dezembro.",
        { section: "Dias Santos que se Festejam sem Ser de Obrigação sob Pecado" },
        "Purificação de Nossa Senhora — 2 de fevereiro. Anunciação de Nossa Senhora — 25 de março. S. João — 24 de junho. Natividade de Nossa Senhora — 8 de setembro."
      ]},
      { id: "dias-jejum-abstinencia", title: "Dias de Jejum e Abstinência", page: 326, pending: false, text: [
        { section: "1. Dias de Jejum com Abstinência" },
        "Quarta-feira de Cinzas. As sextas-feiras da Quaresma.",
        { section: "2. Dias de Jejum sem Abstinência" },
        "As quartas-feiras da Quaresma. Quinta-feira da Semana Santa. A sexta-feira das Quatro Têmporas do Advento.",
        { section: "3. Dias de Abstinência sem Jejum" },
        "A vigília do Natal. A vigília do Espírito Santo (Pentecostes). A vigília da Assunção de Nossa Senhora. A vigília de Todos os Santos."
      ]}
    ]
  }
];

/* ---------- Estilo visual (gradientes) por categoria ---------- */
const CATEGORY_STYLES = {
  "oracoes-diarias":       { grad: ["#D97A32", "#A8402C"] },
  "santa-missa":           { grad: ["#5C3D22", "#8A6530"] },
  "confissao":             { grad: ["#3B2A56", "#5E4370"] },
  "sagrada-comunhao":      { grad: ["#A8781E", "#7A5218"] },
  "devocoes-breves":       { grad: ["#254A4A", "#457474"] },
  "santissimo-sacramento": { grad: ["#8C6B24", "#B08D3E"] },
  "sagrado-coracao":       { grad: ["#63131E", "#96334A"] },
  "nossa-senhora":         { grad: ["#173B44", "#33665C"] },
  "sao-jose":              { grad: ["#31450F", "#5C6A2C"] },
  "anjos-santos":          { grad: ["#7A5C1E", "#A6883F"] },
  "oracoes-diversas":      { grad: ["#431214", "#732626"] },
  "apendice":              { grad: ["#26162C", "#472F52"] }
};

/* ===========================================================
   Rosário — dados
   PLACEHOLDER: títulos das dezenas e textos das orações fixas
   ainda a inserir a partir do livro "Maná". Tudo marcado com
   pending:true até a transcrição definitiva.
   =========================================================== */
const ROSARIO = {
  mistérios: {
    gozosos: {
      titulo: "Mistérios Gozosos",
      dias: [1, 4], // Segunda, Quinta
      dezenas: [
        { id: "goz-1", titulo: "I Mistério — Anunciação de Nossa Senhora e Encarnação do Verbo",
          contemplacao: "Neste primeiro mistério contemplamos o grande gozo e o prazer que teve Maria Santíssima, quando foi saudada pelo arcanjo S. Gabriel e recebeu em suas entranhas puríssimas o divino Verbo, segunda pessoa da Santíssima Trindade.",
          peticao: "Por este mistério vos pedimos, Virgem Mãe de Deus, nos alcanceis perdão de nossos pecados e humilde resignação nas mãos de Deus.",
          pending: false },
        { id: "goz-2", titulo: "II Mistério — Visita de Nossa Senhora a Santa Isabel",
          contemplacao: "Neste mistério contemplamos o grande gozo que teve Maria Santíssima, quando visitou a Santa Isabel, vendo seu divino Filho reconhecido e adorado por seu precursor, o qual, em saltos e júbilos, celebrava o ver-se livre do pecado original.",
          peticao: "Por este mistério vos pedimos, Virgem Mãe de Deus, nos alcanceis caridade para com o próximo e santificação de nossa alma.",
          pending: false },
        { id: "goz-3", titulo: "III Mistério — Nascimento de Nosso Senhor Jesus Cristo",
          contemplacao: "Neste mistério contemplamos o grande júbilo que teve Maria Santíssima quando viu, nascido de suas puríssimas entranhas, Jesus, Salvador do mundo, ficando intacta sua virginal pureza.",
          peticao: "Por este mistério vos pedimos, Virgem Mãe de Deus, nos alcanceis verdadeira humildade, aborrecimento das vaidades do mundo e paciência na pobreza.",
          pending: false },
        { id: "goz-4", titulo: "IV Mistério — Apresentação de Jesus no Templo",
          contemplacao: "Neste mistério contemplamos o grande gozo que teve a Mãe de Deus, vendo, no templo, o seu Filho reconhecido pelo santo velho Simeão e pela santa viúva Ana, os quais, com lume de fé, o confessaram e proclamaram como Senhor.",
          peticao: "Por este mistério vos pedimos, Virgem Mãe de Deus, nos alcanceis fé viva, perfeita caridade e pureza de consciência.",
          pending: false },
        { id: "goz-5", titulo: "V Mistério — A Virgem Acha Jesus no Templo",
          contemplacao: "Neste mistério contemplamos a grande alegria e consolação que teve a Mãe de Deus, vendo seu querido Filho restituído a seus braços, quando o achou no templo, assentado entre os doutores, depois de o ter perdido sem culpa.",
          peticao: "Por este mistério vos pedimos, Virgem Mãe de Deus, nos alcanceis graça, para não perdermos a Jesus, obediência aos pais e superiores.",
          pending: false }
      ]
    },
    dolorosos: {
      titulo: "Mistérios Dolorosos",
      dias: [2, 5], // Terça, Sexta
      dezenas: [
        { id: "dol-1", titulo: "I Mistério — Oração de Jesus no Horto das Oliveiras",
          contemplacao: "Neste mistério contemplamos a excessiva dor e agonia que teve a Mãe de Deus, vendo seu santíssimo Filho nas agonias do horto e desumanamente tratado por seus inimigos.",
          peticao: "Por este mistério vos pedimos, sentidíssima Senhora, nos alcanceis dor de nossos pecados, fervor na oração e conformidade com a vontade de Deus.",
          pending: false },
        { id: "dol-2", titulo: "II Mistério — Flagelação de Jesus",
          contemplacao: "Neste mistério contemplamos o sentimento que teve a Mãe de Deus, quando soube ser seu Filho santíssimo preso à coluna e cruelmente açoitado.",
          peticao: "Por este mistério vos pedimos, sentidíssima Senhora, nos alcanceis a dor de nossos pecados, desapego das afeições da terra e amor às mortificações.",
          pending: false },
        { id: "dol-3", titulo: "III Mistério — Tormento da Coroa de Espinhos",
          contemplacao: "Neste mistério contemplamos o sentimento que teve a Mãe de Deus, quando soube ser seu Filho santíssimo coroado de agudos espinhos, que lhe traspassaram a cabeça, e desumanamente escarnecido.",
          peticao: "Por este mistério vos pedimos, sentidíssima Senhora, nos alcanceis dor de nossos pecados e paciência nas afrontas e trabalhos.",
          pending: false },
        { id: "dol-4", titulo: "IV Mistério — Jesus no Caminho da Cruz",
          contemplacao: "Neste mistério contemplamos o grande sentimento que teve a Mãe de Deus, vendo seu Filho santíssimo caminhar, com a cruz às costas, entre dois ladrões, para o monte Calvário.",
          peticao: "Por este mistério vos pedimos, sentidíssima Senhora, nos alcanceis que choremos nossos pecados, levando com prontidão a cruz que o Senhor nos der.",
          pending: false },
        { id: "dol-5", titulo: "V Mistério — Crucificação de Nosso Senhor",
          contemplacao: "Neste mistério contemplamos o grande sentimento que teve a Mãe de Deus, vendo seu Filho santíssimo crucificado e morrendo na cruz.",
          peticao: "Por este mistério vos pedimos, Santíssima Senhora, nos alcanceis amor de Deus e que perdoemos a nossos inimigos, assim como nos perdoe nossos pecados, não nos desamparando na hora de nossa morte.",
          pending: false }
      ]
    },
    gloriosos: {
      titulo: "Mistérios Gloriosos",
      dias: [0, 3, 6], // Domingo, Quarta, Sábado
      dezenas: [
        { id: "glo-1", titulo: "I Mistério — Ressurreição de Jesus Cristo",
          contemplacao: "Neste mistério contemplamos o júbilo e a glória que teve a Mãe de Deus, quando viu seu Filho Santíssimo ressuscitado e glorioso, sendo acompanhado de todos os santos que tirara do Limbo.",
          peticao: "Por este mistério vos pedimos, Virgem Mãe de Deus, nos alcanceis a alegria de boa consciência e que ressuscitemos em boa vida e costumes.",
          pending: false },
        { id: "glo-2", titulo: "II Mistério — Gloriosa Ascensão de Jesus",
          contemplacao: "Neste mistério contemplamos o júbilo e a alegria que teve a Mãe de Deus, quando viu subir ao céu, triunfante e glorioso, seu Filho Santíssimo.",
          peticao: "Por este mistério vos pedimos, Virgem Mãe de Deus, nos alcanceis desapego das criaturas e que em tudo sejamos levados a amar as coisas celestiais.",
          pending: false },
        { id: "glo-3", titulo: "III Mistério — Vinda do Espírito Santo",
          contemplacao: "Neste mistério contemplamos o júbilo que teve a Mãe de Deus, quando viu o Espírito Santo, seu esposo, descer sobre os apóstolos e, com especialidade e superabundância, em seu imaculado Coração.",
          peticao: "Por este mistério vos pedimos, Virgem Mãe de Deus, nos alcanceis a graça, os dons do Espírito Santo e a perseverança na virtude.",
          pending: false },
        { id: "glo-4", titulo: "IV Mistério — Assunção de Maria Santíssima ao Céu",
          contemplacao: "Neste mistério contemplamos o júbilo e a glória que teve a Mãe de Deus, sendo, depois de seu dulcíssimo trânsito, levada ao céu, acompanhada dos santos anjos.",
          peticao: "Por este mistério vos pedimos, Virgem Mãe de Deus, nos sejais advogada em toda a nossa vida, nos livreis da morte repentina e nos defendais do demônio, quando sairmos deste mundo.",
          pending: false },
        { id: "glo-5", titulo: "V Mistério — Coroação de Maria no Céu",
          contemplacao: "Neste mistério contemplamos o júbilo e a glória que teve a Mãe de Deus quando se viu, pela Santíssima Trindade, coroada Rainha dos anjos, Senhora dos homens, Advogada dos pecadores e triunfadora dos demônios.",
          peticao: "Por este mistério vos pedimos, Virgem Mãe de Deus, nos alcanceis copiosos dons e graças, para que, em companhia dos bem-aventurados, na glória vos louvemos e à Santíssima Trindade.",
          pending: false }
      ]
    }
  },

  introducao: {
    titulo: "Orações Iniciais",
    pending: false,
    text: [
      { section: "CREIO" },
      "Creio em Deus, Padre todo-poderoso, Criador do céu e da terra; e em Jesus Cristo, um só seu Filho, Nosso Senhor, o qual foi concebido do Espírito Santo, nasceu da Virgem Maria; padeceu sob o poder de Pôncio Pilatos, foi crucificado, morto e sepultado; desceu aos infernos, ao terceiro dia ressurgiu dos mortos; subiu aos céus, está sentado à mão direita de Deus Padre todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém.",
      { section: "PADRE NOSSO" },
      "Padre nosso, que estais nos céus, santificado seja o vosso nome, venha a nós o vosso reino, seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; e perdoai-nos as nossas dívidas, assim como nós perdoamos aos nossos devedores; e não nos deixeis cair em tentação; mas livrai-nos do mal. Amém.",
      { section: "AVE MARIA (3x)" },
      "Ave, Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. Amém.",
      { section: "GLÓRIA AO PAI" },
      "Glória ao Padre e ao Filho e ao Espírito Santo. Assim como era no princípio, agora e sempre e por todos os séculos dos séculos. Amém."
    ]
  },

  rubricaDezena: "1 Padre-Nosso / 10 Ave-Marias / 1 Glória ao Padre / Ó meu Jesus",

  encerramento: {
    id: "salve-rainha",
    titulo: "Salve-Rainha",
    pending: false,
    text: [
      "Salve, Rainha, Mãe de misericórdia, vida, doçura, esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei, e depois deste desterro nos mostrai Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria!",
      "℣. Rogai por nós, Santa Mãe de Deus. ℟. Para que sejamos dignos das promessas de Cristo."
    ]
  },

  oracoesOpcionais: [
    { id: "oferecimento-rosario", titulo: "Oferecimento do Rosário", pending: false,
      text: [
        { section: "Oferecimento a Maria Santíssima (S. Luís Gonzaga)" },
        "Minha Senhora, Santa Maria, eu me encomendo à vossa bendita fidelidade e singular patrocínio; e, no seio de vossa misericórdia, entrego hoje, cada dia e na hora da morte, minha alma e meu corpo, todas as minhas esperanças, consolações e todos os meus trabalhos e penalidades, toda a minha vida e o fim dela, para que, por meio de vossa santíssima intercessão e merecimentos, todas as minhas obras se dirijam e disponham conforme a vossa vontade e a de vosso Filho santíssimo. Assim seja.",
        { section: "Outro Oferecimento (S. Estanislau)" },
        "Ó minha terna Mãe, eu vos ofereço meu trabalho e meus sofrimentos, meu espírito e meu coração. Dignai-vos aceitar esta fraca homenagem de meu respeito e amor por vós; oferecei-a vós mesma a Jesus Cristo, vosso divino Filho e meu Redentor."
      ]
    },
    { id: "ladainha-nsra", titulo: "Ladainha de Nossa Senhora", pending: false,
      text: [
        { pt: "Senhor, tende piedade de nós.", lt: "Kýrie, eléison." },
        { pt: "Cristo, tende piedade de nós.", lt: "Christe, eléison." },
        { pt: "Senhor, tende piedade de nós.", lt: "Kýrie, eléison." },
        { pt: "Cristo, ouvi-nos.", lt: "Christe, audi nos." },
        { pt: "Cristo, atendei-nos.", lt: "Christe, exáudi nos." },
        { pt: "Deus Pai dos céus, tende piedade de nós.", lt: "Pater de cælis, Deus, miserére nobis." },
        { pt: "Deus Filho, Redentor do mundo, tende piedade de nós.", lt: "Fili, Redémptor mundi, Deus, miserére nobis." },
        { pt: "Deus Espírito Santo, tende piedade de nós.", lt: "Spíritus Sancte, Deus, miserére nobis." },
        { pt: "Santíssima Trindade, que sois um só Deus, tende piedade de nós.", lt: "Sancta Trínitas, unus Deus, miserére nobis." },
        { pt: "Santa Maria, rogai por nós.", lt: "Sancta María, ora pro nobis." },
        { pt: "Santa Mãe de Deus, rogai por nós.", lt: "Sancta Dei Génitrix, ora pro nobis." },
        { pt: "Santa Virgem das virgens, rogai por nós.", lt: "Sancta Virgo vírginum, ora pro nobis." },
        { pt: "Mãe de Jesus Cristo, rogai por nós.", lt: "Mater Christi, ora pro nobis." },
        { pt: "Mãe da divina graça, rogai por nós.", lt: "Mater divínæ grátiæ, ora pro nobis." },
        { pt: "Mãe puríssima, rogai por nós.", lt: "Mater puríssima, ora pro nobis." },
        { pt: "Mãe castíssima, rogai por nós.", lt: "Mater castíssima, ora pro nobis." },
        { pt: "Mãe imaculada, rogai por nós.", lt: "Mater inviolata, ora pro nobis." },
        { pt: "Mãe intacta, rogai por nós.", lt: "Mater intemeráta, ora pro nobis." },
        { pt: "Mãe amável, rogai por nós.", lt: "Mater amábilis, ora pro nobis." },
        { pt: "Mãe admirável, rogai por nós.", lt: "Mater admirábilis, ora pro nobis." },
        { pt: "Mãe do bom conselho, rogai por nós.", lt: "Mater boni consílii, ora pro nobis." },
        { pt: "Mãe do Criador, rogai por nós.", lt: "Mater Creatóris, ora pro nobis." },
        { pt: "Mãe do Salvador, rogai por nós.", lt: "Mater Salvatóris, ora pro nobis." },
        { pt: "Virgem prudentíssima, rogai por nós.", lt: "Virgo prudentíssima, ora pro nobis." },
        { pt: "Virgem venerável, rogai por nós.", lt: "Virgo veneránda, ora pro nobis." },
        { pt: "Virgem louvável, rogai por nós.", lt: "Virgo prædicánda, ora pro nobis." },
        { pt: "Virgem poderosa, rogai por nós.", lt: "Virgo potens, ora pro nobis." },
        { pt: "Virgem benigna, rogai por nós.", lt: "Virgo clemens, ora pro nobis." },
        { pt: "Virgem fiel, rogai por nós.", lt: "Virgo fidélis, ora pro nobis." },
        { pt: "Espelho de justiça, rogai por nós.", lt: "Spéculum justítiæ, ora pro nobis." },
        { pt: "Sede da sabedoria, rogai por nós.", lt: "Sedes sapiéntiæ, ora pro nobis." },
        { pt: "Causa de nossa alegria, rogai por nós.", lt: "Causa nostræ lætítiæ, ora pro nobis." },
        { pt: "Vaso espiritual, rogai por nós.", lt: "Vas spirituále, ora pro nobis." },
        { pt: "Vaso honorífico, rogai por nós.", lt: "Vas honorábile, ora pro nobis." },
        { pt: "Vaso insigne de devoção, rogai por nós.", lt: "Vas insígne devotiónis, ora pro nobis." },
        { pt: "Rosa mística, rogai por nós.", lt: "Rosa mýstica, ora pro nobis." },
        { pt: "Torre de Davi, rogai por nós.", lt: "Turris Davídica, ora pro nobis." },
        { pt: "Torre de marfim, rogai por nós.", lt: "Turris ebúrnea, ora pro nobis." },
        { pt: "Casa de ouro, rogai por nós.", lt: "Domus áurea, ora pro nobis." },
        { pt: "Arca da aliança, rogai por nós.", lt: "Fœderis arca, ora pro nobis." },
        { pt: "Porta do céu, rogai por nós.", lt: "Jánua cæli, ora pro nobis." },
        { pt: "Estrela da manhã, rogai por nós.", lt: "Stella matutína, ora pro nobis." },
        { pt: "Saúde dos enfermos, rogai por nós.", lt: "Salus infirmórum, ora pro nobis." },
        { pt: "Refúgio dos pecadores, rogai por nós.", lt: "Refúgium peccatórum, ora pro nobis." },
        { pt: "Consoladora dos aflitos, rogai por nós.", lt: "Consolátrix afflictórum, ora pro nobis." },
        { pt: "Auxílio dos cristãos, rogai por nós.", lt: "Auxílium Christianórum, ora pro nobis." },
        { pt: "Rainha dos anjos, rogai por nós.", lt: "Regína Angelórum, ora pro nobis." },
        { pt: "Rainha dos patriarcas, rogai por nós.", lt: "Regína Patriarchárum, ora pro nobis." },
        { pt: "Rainha dos profetas, rogai por nós.", lt: "Regína Prophetárum, ora pro nobis." },
        { pt: "Rainha dos apóstolos, rogai por nós.", lt: "Regína Apostolórum, ora pro nobis." },
        { pt: "Rainha dos mártires, rogai por nós.", lt: "Regína Mártyrum, ora pro nobis." },
        { pt: "Rainha dos confessores, rogai por nós.", lt: "Regína Confessórum, ora pro nobis." },
        { pt: "Rainha das virgens, rogai por nós.", lt: "Regína Vírginum, ora pro nobis." },
        { pt: "Rainha de todos os santos, rogai por nós.", lt: "Regína Sanctórum ómnium, ora pro nobis." },
        { pt: "Rainha concebida sem pecado original, rogai por nós.", lt: "Regína sine labe originali concépta, ora pro nobis." },
        { pt: "Rainha assunta aos céus, rogai por nós.", lt: "Regína in cælum assúmpta, ora pro nobis." },
        { pt: "Rainha do Santíssimo Rosário, rogai por nós.", lt: "Regína sacratíssimi Rosárii, ora pro nobis." },
        { pt: "Rainha da paz, rogai por nós.", lt: "Regína pacis, ora pro nobis." },
        { pt: "Cordeiro de Deus, que tirais os pecados do mundo, perdoai-nos, Senhor.", lt: "Agnus Dei, qui tollis peccáta mundi, parce nobis, Dómine." },
        { pt: "Cordeiro de Deus, que tirais os pecados do mundo, ouvi-nos, Senhor.", lt: "Agnus Dei, qui tollis peccáta mundi, exáudi nos, Dómine." },
        { pt: "Cordeiro de Deus, que tirais os pecados do mundo, tende piedade de nós.", lt: "Agnus Dei, qui tollis peccáta mundi, miserére nobis." },
        { pt: "℣. Rogai por nós, Santa Mãe de Deus.", lt: "℣. Ora pro nobis, sancta Dei Génitrix." },
        { pt: "℟. Para que sejamos dignos das promessas de Cristo.", lt: "℟. Ut digni efficiámur promissiónibus Christi." },
        "Oremos. Senhor Deus, nós vos suplicamos que concedais a vossos servos perpétua saúde de alma e corpo; e que, pela gloriosa intercessão da bem-aventurada sempre Virgem Maria, sejamos livres da presente tristeza e gozemos da eterna alegria. Por Cristo Nosso Senhor. Amém.",
        { note: "No mês de outubro, em lugar do versículo acima: ℣. Rogai por nós, Rainha do sacratíssimo Rosário. ℟. Para que sejamos dignos das promessas de Cristo." }
      ]
    }
  ],

  comoRezar: {
    titulo: "Como Rezar o Rosário",
    pending: false,
    passos: [
      "Ao pegar o terço, faça o sinal da cruz sobre a cruz que fica na extremidade do rosário.",
      "Na cruz, reze o Creio em Deus Padre — com o qual se renova a santa fé, disposição mais necessária para a eficácia da oração.",
      "Na primeira conta grande, reze um Padre-Nosso.",
      "Nas três contas pequenas seguintes, reze uma Ave-Maria em cada uma, para alcançar o aumento da fé, da esperança e da caridade — uma virtude teologal por conta.",
      "Feche esta introdução com um Glória ao Padre, em louvor das três Pessoas da Santíssima Trindade.",
      "Em cada dezena, na conta grande que a inicia, anuncie o mistério correspondente e faça a contemplação e a petição próprias dele, antes de rezar o Padre-Nosso.",
      "Nas dez contas pequenas da dezena, reze uma Ave-Maria em cada uma.",
      "Ao final de cada dezena, reze um Glória ao Padre, seguido da jaculatória 'Ó meu Jesus'.",
      "Repita essa estrutura — Padre-Nosso, 10 Ave-Marias, Glória ao Padre, Ó meu Jesus — para os cinco mistérios do dia.",
      "Ao concluir as cinco dezenas, reze a Salve-Rainha, encerrando o terço."
    ]
  }
};

/* ===========================================================
   Orações Diárias — dados
   Fonte única: "Maná ou Alimento da Alma Devota" — seções de
   Orações Diárias (Manhã) e preces da Noite.
   Mesma estrutura rica do Rosário: strings para parágrafos,
   { section } para subtítulos internos, { note } para rubricas.
   =========================================================== */
const ORACOES_DIARIAS = {
  manha: [
    {
      id: "oracao-manha",
      titulo: "Oração da Manhã",
      text: [
        { section: "Ao Despertar" },
        { note: "Em hora certa, o cristão se levanta da cama e dirige o pensamento ao Senhor, para agradecer os seus muitos benefícios e pedir-lhe suas graças para o novo dia, fazendo (com água benta, se for possível) o sinal da cruz." },
        "✠ Em nome do Padre e do Filho e do Espírito Santo. Amém.",
        { section: "Ao Vestir-se" },
        { note: "Ao vestir-se, não se esqueça da santa presença de Deus; vista-se com decência, sobretudo se estiver na presença de outros, podendo recitar, ao mesmo tempo:" },
        "Glória ao Padre, que me criou! Glória ao Filho, que me salvou! Glória ao Espírito Santo, que me santificou. Ó doce Jesus que tanto me amais, fazei que eu vos ame cada vez mais! Doce Coração de Maria, sede minha salvação.",
        "Meu Deus, eu creio em vós, porque sois a verdade infalível. Meu Deus, eu espero em vós, porque sois a bondade infinita. Meu Deus, eu vos amo, porque sois o sumo e amantíssimo bem, digno de todo o amor.",
        { note: "Depois de vestido, ponha-se de joelhos, diante de um crucifixo, ou de alguma outra imagem, e reze com devoção o ato de adoração seguinte." },
        { section: "Ato de Adoração, Ação de Graças, Petição e Oferecimento" },
        "Louvada e adorada seja a santa e indivídua Trindade, agora e sempre, por toda a eternidade. Seja feita, louvada e eternamente exaltada a justíssima, altíssima e amabilíssima vontade de Deus em todas as coisas!",
        "Deus todo-poderoso, dou-vos infinitas graças por me haverdes conservado esta noite e preservado duma morte repentina. Dai-me forças para não vos ofender por algum pecado, especialmente neste dia.",
        "Em união com os merecimentos de Jesus Cristo, de sua Mãe santíssima e de todos os santos, ofereço-vos todos os meus pensamentos, palavras e obras, para maior glória vossa, em ação de graças por todos os benefícios e em satisfação de meus pecados. Encomendo-me em todas as orações, santas Missas e boas obras que, hoje, vos serão oferecidas, e faço tenção de ganhar todas as indulgências que, neste dia, posso lucrar.",
        "Ouvi, Senhor, as minhas orações, que vos ofereço por meus pais, parentes e benfeitores, por meus amigos e inimigos e por toda a Igreja Católica; derramai sobre nós todas as vossas bênçãos e concedei-nos o que é necessário. Deus de bondade, compadecei-vos das almas que estão sofrendo no purgatório. Amém.",
        "Padre nosso, que estais nos céus, santificado seja o vosso nome, venha a nós o vosso reino, seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; e perdoai-nos as nossas dívidas, assim como nós perdoamos aos nossos devedores; e não nos deixeis cair em tentação; mas livrai-nos do mal. Amém.",
        "Ave, Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. Amém.",
        "Glória ao Padre e ao Filho e ao Espírito Santo. Assim como era no princípio, agora e sempre e por todos os séculos dos séculos. Amém.",
        "Creio em Deus, Padre todo-poderoso, Criador do céu e da terra; e em Jesus Cristo, um só seu Filho, Nosso Senhor, o qual foi concebido do Espírito Santo; nasceu de Maria Virgem; padeceu sob o poder de Pôncio Pilatos; foi crucificado, morto e sepultado; desceu aos infernos; ao terceiro dia ressurgiu dos mortos; subiu aos céus, está sentado à mão direita de Deus Padre, todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo; a Santa Igreja Católica; a comunhão dos santos; a remissão dos pecados; a ressurreição da carne; a vida eterna. Amém.",
        { section: "Consagração a Nossa Senhora" },
        "Ave, Maria... Ó Senhora minha! Ó minha Mãe! Eu me ofereço todo a vós. E em prova de minha devoção para convosco, vos consagro meus olhos, meus ouvidos, minha boca, meu coração e inteiramente todo o meu ser. E como assim sou vosso, ó boa Mãe, guardai-me e defendei-me como coisa e propriedade vossa.",
        "Lembrai-vos que vos pertenço, terna Mãe, Senhora nossa! Ah! guardai-me e defendei-me, como coisa própria vossa. Amém.",
        "Jesus, Maria, José, esclarecei-nos, socorrei-nos, salvai-nos. Amém.",
        { note: "São José, modelo e padroeiro dos devotos do Sagrado Coração de Jesus, rogai por nós." },
        { section: "Ao Santo Anjo da Guarda" },
        "Santo anjo do Senhor, meu zeloso guardador, se a ti me confiou a piedade divina, sempre me rege, guarda, governa e ilumina. Amém.",
        "Grande santo, cujo nome tenho a ventura de possuir, protegei-me e rogai por mim, para que possa servir a nosso Deus e Salvador, como vós o fizestes na terra, e glorificá-lo eternamente convosco no céu.",
        "Todos os anjos e santos de Deus, lembrai-vos de mim e rogai por mim ante o trono do Senhor.",
        { note: "Reze em seguida, três vezes:" },
        "Minha Mãe, preservai-me do pecado mortal."
      ]
    },
    {
      id: "oferecimento-dia-sc",
      titulo: "Oferecimento do Dia ao Sagrado Coração de Jesus",
      text: [
        { note: "Para os associados do Apostolado da Oração." },
        "Divino Coração de Jesus, eu vos ofereço, pelo Coração Imaculado de Maria, todas as orações, obras e sofrimentos deste dia, em reparação das nossas ofensas e por todas as intenções, pelas quais vos imolais incessantemente sobre os nossos altares. Eu vo-las ofereço, em particular, pelas intenções recomendadas neste mês e neste dia aos associados do Apostolado da Oração."
      ]
    },
    {
      id: "outra-oracao-manha-diaria",
      titulo: "Outra Oração da Manhã",
      text: [
        { note: "Conforme manda rezar a Santa Madre Igreja a seus ministros." },
        "Senhor Deus, todo-poderoso, que nos fizestes chegar ao princípio deste dia, salvai-nos hoje pelo vosso poder, para que neste dia não venhamos a cair em pecado algum, mas que sempre se encaminhem nossas palavras e se dirijam nossos pensamentos e nossas obras para o cumprimento dos preceitos da vossa justiça. Por Nosso Senhor Jesus Cristo. Amém.",
        "Dignai-vos, Senhor, Rei do céu e da terra, dirigir e santificar, hoje, nossos corações e nossos corpos, nossos sentidos, nossas palavras e nossos atos, de conformidade com a vossa lei e nas obras dos vossos santos mandamentos, a fim de que, neste mundo e na eternidade, com os auxílios de vossa graça, mereçamos ser salvos, ó Salvador do mundo, que viveis e reinais pelos séculos dos séculos. Amém."
      ]
    }
  ],

  noite: [
    {
      id: "exame-consciencia",
      titulo: "Exame de Consciência",
      text: [
        { note: "Aqui examina-te um momento sobre os pecados cometidos durante o dia, por pensamentos, palavras e obras e, principalmente, sobre aqueles a que tens maior inclinação, lembrando-te das pessoas e dos lugares que frequentaste. Conhecidos os pecados, arrepende-te seriamente, fazendo, do melhor modo que puderes, um ato de contrição perfeita, mormente se cometeste algum pecado mortal, pois a contrição perfeita, com a vontade de se confessar oportunamente, já tira até os pecados mortais. Só assim poderás dormir tranquilamente e comparecer perante o tribunal de Deus, se ele te chamar talvez esta noite." }
      ]
    },
    {
      id: "ato-contricao-noite",
      titulo: "Ato de Contrição",
      text: [
        "Senhor meu Jesus Cristo, Deus e homem verdadeiro, Criador e Redentor meu, por serdes vós quem sois, sumamente bom e digno de ser amado sobre todas as coisas; e porque eu vos amo e estimo, pesa-me, Senhor, de todo o meu coração, de vos ter ofendido; pesa-me também por ter perdido o céu e merecido o inferno; e proponho firmemente, ajudado com os auxílios de vossa divina graça, emendar-me e nunca mais vos tornar a ofender, e espero alcançar o perdão de minhas culpas pela vossa infinita misericórdia. Amém.",
        "Eterno Pai, eu vos ofereço o sangue preciosíssimo de Jesus Cristo, em satisfação dos meus pecados, em sufrágio das benditas almas do purgatório e pelas necessidades da Santa Igreja."
      ]
    },
    {
      id: "preces-finais-noite",
      titulo: "Preces Finais da Noite",
      text: [
        { section: "Salve-Rainha" },
        "Salve, Rainha, Mãe de misericórdia, vida, doçura, esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei, e depois deste desterro nos mostrai Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria!",
        "℣. Rogai por nós, Santa Mãe de Deus. ℟. Para que sejamos dignos das promessas de Cristo.",
        { note: "Em seguida, reze 3 Ave-Marias, repetindo depois de cada uma:" },
        "Minha Mãe, preservai-me do pecado mortal.",
        { section: "Ao Santo Anjo e aos Santos" },
        "Santo anjo do Senhor, meu zeloso guardador, se a ti me confiou a piedade divina, sempre me rege e guarda, governa e ilumina! Amém.",
        "Todos os santos de Deus, especialmente vós, meus santos padroeiros, recomendai-me a mim e a todos os homens esta noite à proteção divina. E as almas dos fiéis, pela misericórdia de Deus, descansem em paz. Amém.",
        { section: "Ao Deitar-se" },
        { note: "Agora asperge tua cama e a ti mesmo com água benta, fazendo com devoção o sinal da santa cruz. Despe, então, com decência, os teus vestidos, e, ao deitar-te, dize:" },
        "Em nome de meu Senhor Jesus Cristo, crucificado, deito-me. Queira ele me abençoar, governar e proteger esta noite de todos os males, e, depois desta vida, conduzir-me à vida eterna. Amém.",
        { note: "Antes de adormecer, entrega a tua alma à proteção de Jesus, Maria e José, pedindo-lhes a graça duma boa morte, dizendo:" },
        "Jesus, não sejais juiz para mim, mas sede antes meu Salvador. Jesus, Maria, José, dou-vos meu coração e minha alma. Jesus, Maria, José, assisti-me na última agonia. Jesus, Maria, José, expire minha alma entre vós em paz.",
        "Nas vossas mãos, Senhor, entrego a minha alma; fazei que convosco durma e descanse."
      ]
    }
  ]
};

/* ===========================================================
   Missa — Ordinário
   Tridentina: fonte = "Maná" (Missal Romano de 1965), bilíngue
   latim/português, cada oração PT seguida da mesma em LT.
   Novo Ordo: NÃO está no livro-fonte (o Novus Ordo é de 1969,
   posterior à edição de 1965 do Maná) — precisa de fonte externa
   verificada (Missal Romano atual) antes de preenchermos.
   =========================================================== */
const MISSA = {
  tridentina: [
    {
      id: "oracoes-pe-altar",
      titulo: "Orações ao Pé do Altar",
      pending: false,
      text: [
        { note: "Postura dos fiéis: ajoelhados, do início até o Ofertório (salvo indicação em contrário)." },
        { pt: "S. Em nome do Pai, e do Filho, e do Espírito Santo. Amém. Vou-me aproximar do altar de Deus. ℟. Ao Deus que é a minha alegria.", lt: "S. In nómine Patris, et Fílii, et Spíritus Sancti. Amen. Introíbo ad altáre Dei. ℟. Ad Deum qui lætíficat juventútem meam." },
        { section: "Salmo 42" },
        { pt: "Julgai-me, ó Deus, e separai a minha causa da causa da gente ímpia; livrai-me do homem injusto e enganador. ℟. Pois vós, ó meu Deus, sois a minha força; por que me repelis? Por que ando eu triste, quando me aflige o inimigo? Enviai-me a vossa luz e a vossa verdade; elas me guiarão e hão de conduzir-me à vossa montanha santa, ao lugar onde habitais. ℟. E entrarei ao altar de Deus, ao Deus que é a minha alegria. Louvar-vos-ei, ó Deus, meu Deus, ao som da harpa; por que estais triste, ó minha alma? E por que me inquietas? ℟. Espera em Deus, porque ainda o louvarei, como meu Salvador e meu Deus. Glória ao Padre, e ao Filho, e ao Espírito Santo. ℟. Assim como era no princípio, agora e sempre, e por todos os séculos dos séculos. Amém.",
          lt: "Júdica me, Deus, et discérne causam meam de gente non sancta: ab hómine iníquo et dolóso érue me. ℟. Quia tu es, Deus, fortitúdo mea: quare me repulísti, et quare tristis incédo, dum afflígit me inimícus? Emítte lucem tuam et veritátem tuam: ipsa me deduxérunt, et adduxérunt in montem sanctum tuum, et in tabernácula tua. ℟. Et introíbo ad altáre Dei: ad Deum qui lætíficat juventútem meam. Confitébor tibi in cíthara, Deus, Deus meus: quare tristis es, ánima mea, et quare contúrbas me? ℟. Spera in Deo, quóniam adhuc confitébor illi: salutáre vultus mei, et Deus meus. Glória Patri, et Fílio, et Spirítui Sancto. ℟. Sicut erat in princípio, et nunc, et semper, et in sǽcula sæculórum. Amen." },
        { note: "Este salmo omite-se nas Missas de Defuntos e no Tempo da Paixão." }
      ]
    },
    { id: "confiteor-missa", titulo: "Confissão Geral (Confiteor)", pending: false, text: [
      { note: "O celebrante, profundamente inclinado, diz o Confiteor, e depois dele, os assistentes." },
      { quem: "Sacerdote", pt: "Eu, pecador, me confesso a Deus todo-poderoso, à bem-aventurada sempre Virgem Maria, ao bem-aventurado São Miguel Arcanjo, ao bem-aventurado São João Batista, aos santos apóstolos São Pedro e São Paulo, a todos os Santos, e a vós, irmãos, que pequei muitas vezes, por pensamentos, palavras, obras e omissões,", lt: "Confíteor Deo omnipoténti, beátæ Maríæ semper Vírgini, beáto Michǽli Archángelo, beáto Joánni Baptístæ, sanctis Apóstolis Petro et Paulo, ómnibus Sanctis, et vobis, fratres," },
      { note: "(bate três vezes no peito)" },
      { pt: "por minha culpa, minha culpa, minha máxima culpa.", lt: "mea culpa, mea culpa, mea máxima culpa." },
      { quem: "Sacerdote", pt: "Portanto, peço e rogo à bem-aventurada sempre Virgem Maria, ao bem-aventurado São Miguel Arcanjo, ao bem-aventurado São João Batista, aos santos apóstolos São Pedro e São Paulo, a todos os Santos, e a vós, irmãos, que rogueis por mim a Deus Nosso Senhor.", lt: "Ideo precor beátam Maríam semper Vírginem, beátum Michǽlem Archángelum, beátum Joánnem Baptístam, sanctos Apóstolos Petrum et Paulum, omnes Sanctos, et vos, fratres, oráre pro me ad Dóminum Deum nostrum." },
      { quem: "Povo", pt: "Deus todo-poderoso se compadeça de vós, perdoe os vossos pecados e vos conduza à vida eterna.", lt: "Misereátur tui omnípotens Deus, et dimíssis peccátis tuis, perdúcat te ad vitam ætérnam." },
      { quem: "Sacerdote", pt: "Amém.", lt: "Amen." },
      { note: "Os assistentes dizem o Confiteor:" },
      { quem: "Povo", pt: "Eu, pecador, me confesso a Deus todo-poderoso, à bem-aventurada sempre Virgem Maria, ao bem-aventurado São Miguel Arcanjo, ao bem-aventurado São João Batista, aos santos apóstolos São Pedro e São Paulo, a todos os Santos, e a vós, padre, que pequei muitas vezes, por pensamentos, palavras, obras e omissões,", lt: "Confíteor Deo omnipoténti, beátæ Maríæ semper Vírgini, beáto Michǽli Archángelo, beáto Joánni Baptístæ, sanctis Apóstolis Petro et Paulo, ómnibus Sanctis, et tibi, pater," },
      { note: "(bate três vezes no peito)" },
      { pt: "por minha culpa, minha culpa, minha máxima culpa. Portanto, peço e rogo à bem-aventurada sempre Virgem Maria, ao bem-aventurado São Miguel Arcanjo, ao bem-aventurado São João Batista, aos santos apóstolos São Pedro e São Paulo, a todos os Santos, e a vós, padre, que rogueis por mim a Deus Nosso Senhor.", lt: "mea culpa, mea culpa, mea máxima culpa. Ideo precor beátam Maríam semper Vírginem, beátum Michǽlem Archángelum, beátum Joánnem Baptístam, sanctos Apóstolos Petrum et Paulum, omnes Sanctos, et te, pater, oráre pro me ad Dóminum Deum nostrum." },
      { quem: "Sacerdote", pt: "Deus todo-poderoso tenha compaixão de vós, perdoe os vossos pecados e vos conduza à vida eterna.", lt: "Misereátur vestri omnípotens Deus, et dimíssis peccátis vestris, perdúcat vos ad vitam ætérnam." },
      { quem: "Povo", pt: "Amém.", lt: "Amen." },
      { note: "Fazendo o sinal da cruz, o celebrante diz:" },
      { quem: "Sacerdote", pt: "Indulgência, absolvição e remissão dos nossos pecados nos conceda o Senhor onipotente e misericordioso.", lt: "Indulgéntiam, absolutiónem, et remissiónem peccatórum nostrórum tríbuat nobis omnípotens et miséricors Dóminus." },
      { quem: "Povo", pt: "Amém.", lt: "Amen." },
      { quem: "Sacerdote", pt: "Ó Deus, voltando-vos para nós, nos dareis a vida.", lt: "Deus, tu convérsus vivificábis nos." },
      { quem: "Povo", pt: "E o vosso povo se alegrará em vós.", lt: "Et plebs tua lætábitur in te." },
      { quem: "Sacerdote", pt: "Mostrai-nos, Senhor, a vossa misericórdia.", lt: "Osténde nobis, Dómine, misericórdiam tuam." },
      { quem: "Povo", pt: "E dai-nos a vossa salvação.", lt: "Et salutáre tuum da nobis." },
      { quem: "Sacerdote", pt: "Ouvi, Senhor, a minha oração.", lt: "Dómine, exáudi oratiónem meam." },
      { quem: "Povo", pt: "E chegue até vós o meu clamor.", lt: "Et clamor meus ad te véniat." },
      { quem: "Sacerdote", pt: "O Senhor seja convosco.", lt: "Dóminus vobíscum." },
      { quem: "Povo", pt: "E com o vosso espírito.", lt: "Et cum spíritu tuo." },
      { note: "O celebrante sobe ao altar, dizendo:" },
      { quem: "Sacerdote", pt: "Oremos. Pedimos-vos, Senhor, afasteis de nós as nossas iniquidades, para que, com almas puras, mereçamos entrar no Santo dos Santos. Por Cristo Jesus Nosso Senhor. Amém.", lt: "Orémus. Aufer a nobis, quǽsumus, Dómine, iniquitátes nostras: ut ad Sancta sanctórum puris mereámur méntibus intoíre. Per Christum Dóminum nostrum. Amen." },
      { note: "O celebrante, inclinado, diz a seguinte oração (beijando o centro do altar):" },
      { quem: "Sacerdote", pt: "Nós vos suplicamos, Senhor, pelos méritos de vossos santos, cujas relíquias aqui se encontram, e de todos os demais santos, vos digneis perdoar todos os nossos pecados. Amém.", lt: "Orámus te, Dómine, per mérita Sanctórum tuórum, quorum relíquiæ hic sunt, et ómnium Sanctórum: ut indulgére dignéris ómnia peccáta mea. Amen." }
    ] },
    { id: "kyrie-gloria", titulo: "Kýrie e Glória", pending: false, text: [
      { note: "Nas Missas solenes, incensa-se o altar. O celebrante vai para o lado da Epístola e lê o Intróito, canto solene de entrada. Às primeiras palavras, todos se benzem." },
      { section: "Intróito" },
      { note: "Próprio da Missa do dia." },
      { section: "Kýrie Eléison" },
      { note: "O celebrante, no meio do altar, diz, alternadamente com os assistentes:" },
      { pt: "Senhor, tende piedade de nós. (3 vezes)", lt: "Kýrie, eléison. (ter)" },
      { pt: "Cristo, tende piedade de nós. (3 vezes)", lt: "Christe, eléison. (ter)" },
      { pt: "Senhor, tende piedade de nós. (3 vezes)", lt: "Kýrie, eléison. (ter)" },
      { section: "Glória in Excelsis" },
      { note: "Só se diz nas Missas de caráter festivo: Domingos (fora do Advento, Septuagésima e Quaresma), Tempos do Natal e Pascal, festas de Nosso Senhor, de Nossa Senhora, dos Anjos e Santos, e Missas votivas solenes. Omite-se nas demais." },
      { pt: "Glória a Deus nas alturas; e na terra paz aos homens de boa vontade. Nós Vos louvamos, nós Vos bendizemos, nós Vos adoramos, nós Vos glorificamos, nós Vos damos graças, por vossa imensa glória, Senhor Deus, Rei dos céus, Deus Pai onipotente. Senhor Filho unigênito. Senhor Deus, Cordeiro de Deus, Filho de Deus Pai. Vós que tirais o pecado do mundo, tende piedade de nós. Vós que tirais o pecado do mundo, acolhei a nossa súplica. Vós que estais à direita do Pai, tende piedade de nós. Só Vós sois Santo. Só Vós sois o Senhor. Só Vós o Altíssimo, Jesus Cristo. Com o Espírito Santo, na glória de Deus Pai. Amém.",
        lt: "Glória in excélsis Deo, et in terra pax homínibus bonæ voluntátis. Laudámus te, benedícimus te, adorámus te, glorificámus te, grátias ágimus tibi propter magnam glóriam tuam: Dómine Deus, Rex cæléstis, Deus Pater omnípotens. Dómine Fili unigénite, Jesu Christe; Dómine Deus, Agnus Dei, Fílius Patris: Qui tollis peccáta mundi, miserére nobis; qui tollis peccáta mundi, súscipe deprecatiónem nostram; qui sedes ad déxteram Patris, miserére nobis. Quóniam tu solus Sanctus, tu solus Dóminus, tu solus Altíssimus, Jesu Christe, cum Sancto Spíritu: in glória Dei Patris. Amen." },
      { note: "O celebrante beija o altar, volta-se ao povo e diz:" },
      { quem: "Sacerdote", pt: "O Senhor seja convosco.", lt: "Dóminus vobíscum." },
      { quem: "Povo", pt: "E com o vosso espírito.", lt: "Et cum spíritu tuo." },
      { quem: "Sacerdote", pt: "Oremos.", lt: "Orémus." }
    ] },
    { id: "coleta-epistola", titulo: "Coleta, Epístola e Evangelho", pending: false, text: [
      { section: "Coleta" },
      { note: "Breve oração que resume e apresenta a Deus os votos de toda a assembleia — próprio da Missa do dia." },
      { pt: "...por todos os séculos dos séculos.", lt: "...per ómnia sǽcula sæculórum." },
      { quem: "Povo", pt: "Amém.", lt: "Amen." },
      { section: "Epístola" },
      { note: "Nas Missas solenes, é cantada pelo subdiácono; nas outras, lida pelo celebrante — própria da Missa do dia. No fim, os assistentes respondem:" },
      { quem: "Povo", pt: "Graças a Deus!", lt: "Deo grátias!" },
      { section: "Gradual, Aleluia, Tracto" },
      { note: "No Tempo da Septuagésima, o Aleluia é substituído pelo Tracto. No Tempo Pascal, omite-se o Gradual e dizem-se dois Aleluia — próprios da Missa do dia." },
      { section: "Evangelho" },
      { note: "Postura dos fiéis: de pé, a partir daqui, até o fim do Evangelho." },
      { note: "O celebrante, ao meio do altar, profundamente inclinado, diz:" },
      { pt: "Purificai-me, Deus todo-poderoso, o coração e os lábios, Vós que purificastes os lábios do profeta Isaías com um carvão em brasa; pela vossa misericordiosa bondade, dignai-Vos purificar-me, para digna e competentemente proclamar o vosso santo Evangelho.",
        lt: "Munda cor meum ac lábia mea, omnípotens Deus, qui lábia Isaíæ prophétæ cálculo mundásti igníto: ita me tua grata miseratióne dignáre mundáre, ut sanctum Evangélium tuum digne váleam nuntiáre. Per Christum Dóminum nostrum. Amen." },
      { pt: "Dignai-Vos, Senhor, abençoar-me. Esteja o Senhor no meu coração e nos meus lábios, para digna e competentemente proclamar o seu Evangelho. Amém.", lt: "Jube, Dómine, benedícere. Dóminus sit in corde meo et in lábiis meis: ut digne et competénter annúntiem Evangélium suum. Amen." },
      { note: "Passa para o lado esquerdo do altar e lê ou canta o Evangelho, próprio da Missa do dia. Toda a assistência está de pé; às primeiras palavras, faz-se o sinal da cruz na testa, na boca e no peito." },
      { quem: "Sacerdote", pt: "O Senhor seja convosco.", lt: "Dóminus vobíscum." },
      { quem: "Povo", pt: "E com o vosso espírito.", lt: "Et cum spíritu tuo." },
      { quem: "Sacerdote", pt: "Continuação do santo Evangelho de Nosso Senhor Jesus Cristo, segundo N.", lt: "Sequéntia sancti Evangélii secúndum N." },
      { quem: "Povo", pt: "Glória a Vós, Senhor.", lt: "Glória tibi, Dómine." },
      { note: "[Conforme o Evangelho do dia]. No fim, responde-se:" },
      { quem: "Povo", pt: "Louvor a Vós, ó Cristo.", lt: "Laus tibi, Christe." },
      { note: "O celebrante beija o sagrado texto, dizendo:" },
      { pt: "Por este santo Evangelho proclamado, sejam perdoados os nossos pecados.", lt: "Per evangélica dicta deleántur nostra delícta." }
    ] },
    { id: "credo-missa", titulo: "Credo", pending: false, text: [
      { note: "Postura dos fiéis: de pé, até a genuflexão indicada abaixo." },
      { note: "O celebrante vai ao meio do altar e diz o Credo. Só se diz aos domingos, nas festas de 1ª classe, nas festas de Nosso Senhor e de Nossa Senhora, nas festas natalícias dos Apóstolos e Evangelistas, dos Doutores da Igreja, e nas Missas votivas solenes." },
      { pt: "Creio em um só Deus, Pai todo-poderoso, criador do céu e da terra, de todas as coisas visíveis e invisíveis. Creio em um só Senhor, Jesus Cristo, Filho unigênito de Deus, nascido do Pai antes de todos os séculos; Deus de Deus, luz da luz, Deus verdadeiro de Deus verdadeiro; gerado, não criado, consubstancial ao Pai, por Ele todas as coisas foram feitas. Por nós, homens, e para nossa salvação, desceu dos céus.",
        lt: "Credo in unum Deum, Patrem omnipoténtem, factórem cæli et terræ, visibílium ómnium et invisibílium. Et in unum Dóminum Jesum Christum, Fílium Dei unigénitum. Et ex Patre natum ante ómnia sǽcula. Deum de Deo, lumen de lúmine, Deum verum de Deo vero. Génitum, non factum, consubstantiálem Patri: per quem ómnia facta sunt. Qui propter nos hómines et propter nostram salútem descéndit de cælis." },
      { note: "(todos se ajoelham)" },
      { pt: "E Se encarnou, pelo Espírito Santo, no seio da Virgem Maria, e Se fez homem.", lt: "Et incarnátus est de Spíritu Sancto ex María Vírgine: et homo factus est." },
      { note: "(de pé novamente)" },
      { pt: "Também por amor de nós foi crucificado, sob Pôncio Pilatos; padeceu e foi sepultado. Ressuscitou ao terceiro dia, conforme as Escrituras. E subiu aos céus, onde está sentado à direita do Pai. E de novo há de vir, em sua glória, para julgar os vivos e os mortos; e o seu reino não terá fim. Creio no Espírito Santo, Senhor que dá a vida, e procede do Pai e do Filho; e com o Pai e o Filho é igualmente adorado e glorificado: Ele que falou pelos profetas. Creio na Igreja, una, santa, católica e apostólica. Professo um só batismo, para a remissão dos pecados. E espero a ressurreição dos mortos e a vida do mundo que há de vir. Amém.",
        lt: "Crucifíxus étiam pro nobis: sub Póntio Piláto passus, et sepúltus est. Et resurréxit tértia die, secúndum Scriptúras. Et ascéndit in cælum: sedet ad déxteram Patris. Et íterum ventúrus est cum glória judicáre vivos et mórtuos: cujus regni non erit finis. Et in Spíritum Sanctum, Dóminum et vivificántem: qui ex Patre, Filióque procédit. Qui cum Patre, et Fílio simul adorátur, et conglorificátur: qui locútus est per Prophétas. Et unam, sanctam, cathólicam et apostólicam Ecclésiam. Confíteor unum baptísma in remissiónem peccatórum. Et exspécto resurrectiónem mortuórum. Et vitam ventúri sǽculi. Amen." }
    ] },
    { id: "ofertorio", titulo: "Ofertório", pending: false, text: [
      { note: "Postura dos fiéis: ajoelhados, do início do Ofertório até a Comunhão (com exceção do Último Evangelho, ao final)." },
      { note: "Com o Ofertório começa a segunda parte da Missa, o Sacrifício propriamente dito. O celebrante volta-se ao povo:" },
      { quem: "Sacerdote", pt: "O Senhor seja convosco.", lt: "Dóminus vobíscum." },
      { quem: "Povo", pt: "E com o vosso espírito.", lt: "Et cum spíritu tuo." },
      { section: "Antífona do Ofertório" },
      { note: "Própria da Missa do dia. Nas Missas solenes, o subdiácono leva o cálice e a patena ao altar." },
      { section: "Oferecimento do Pão" },
      { pt: "Recebei, santo Pai, onipotente e eterno Deus, esta hóstia imaculada, que eu, vosso indigno servo, vos ofereço, ó meu Deus vivo e verdadeiro, por meus inumeráveis pecados, ofensas e negligências, por todos os que circundam este altar, e por todos os fiéis vivos e falecidos, a fim de que, a mim e a eles, este sacrifício aproveite para a salvação na vida eterna. Amém.",
        lt: "Súscipe, sancte Pater, omnípotens ætérne Deus, hanc immaculátam hóstiam, quam ego indígnus fámulus tuus óffero tibi, Deo meo vivo et vero, pro innumerabílibus peccátis, et offensiónibus, et negligéntiis meis, et pro ómnibus circumstántibus, sed et pro ómnibus fidélibus Christiánis vivis atque defúnctis: ut mihi, et illis profíciat ad salútem in vitam ætérnam. Amen." },
      { note: "Ao lado direito do altar, deita vinho no cálice, misturando umas gotas de água:" },
      { pt: "Ó Deus, que maravilhosamente criastes em sua dignidade a natureza humana, e mais prodigiosamente ainda a restaurastes, concedei-nos, que pelo mistério desta água e deste vinho, sermos participantes da divindade daquele que se dignou revestir-se de nossa humanidade, Jesus Cristo, vosso Filho e Senhor Nosso, que sendo Deus, convosco vive e reina em união com o Espírito Santo, por todos os séculos dos séculos. Amém.",
        lt: "Deus, qui humánæ substántiæ dignitátem mirabíliter condidísti, et mirabílius reformásti: da nobis per hujus aquæ et vini mystérium, ejus divinitátis esse consórtes, qui humanitátis nostræ fíeri dignátus est párticeps, Jesus Christus Fílius tuus Dóminus noster: Qui tecum vivit et regnat in unitáte Spíritus Sancti Deus: per ómnia sǽcula sæculórum. Amen." },
      { section: "Oferecimento do Cálice" },
      { pt: "Nós Vos oferecemos, Senhor, o cálice da salvação, suplicando a vossa clemência. Que ele suba qual suave incenso à presença de vossa divina majestade, para salvação nossa e de todo o mundo. Amém.",
        lt: "Offérimus tibi, Dómine, cálicem salutáris, tuam deprecántes cleméntiam: ut in conspéctu divínæ majestátis tuæ, pro nostra et totíus mundi salúte, cum odóre suavitátis ascéndat. Amen." },
      { note: "Inclinando-se:" },
      { pt: "Em espírito de humildade e coração contrito, sejamos por Vós acolhidos, Senhor. E assim se faça hoje este nosso sacrifício em vossa presença, de modo que Vos seja agradável, ó Senhor Nosso Deus.",
        lt: "In spíritu humilitátis et in ánimo contríto suscipiámur a te, Dómine: et sic fiat sacrifícium nostrum in conspéctu tuo hódie, ut pláceat tibi, Dómine Deus." },
      { pt: "Vinde, ó Santificador, onipotente e eterno Deus, e abençoai este sacrifício preparado para glorificar o vosso santo nome.", lt: "Veni, Sanctificátor, omnípotens ætérne Deus: et bénedic hoc sacrifícium, tuo sancto nómini præparátum." },
      { note: "Nas Missas solenes, incensam-se as oblatas, a cruz, o altar, o celebrante e o povo. Depois, o celebrante lava as mãos:" },
      { pt: "Lavo as minhas mãos entre os inocentes, e me aproximo do vosso altar, ó Senhor, para ouvir o cântico dos vossos louvores, e proclamar todas as vossas maravilhas. Eu amo, Senhor, a beleza da vossa casa, e o lugar onde reside a vossa glória. Não me deixeis, ó Deus, perder a minha alma com os ímpios, nem a minha vida com os sanguinários. Em suas mãos se encontram iniquidades, sua direita está cheia de dádivas. Eu, porém, tenho andado na inocência. Livrai-me, pois, e tende piedade de mim. Meus pés estão firmes no caminho reto. Eu Vos bendigo, Senhor, nas assembleias dos justos. Glória ao Pai, ao Filho e ao Espírito Santo. Assim como era no princípio, agora e sempre, e por todos os séculos dos séculos. Amém.",
        lt: "Lavábo inter innocéntes manus meas: et circúmdabo altáre tuum, Dómine. Ut áudiam vocem laudis: et enárrem univérsa mirabília tua. Dómine, diléxi decórem domus tuæ: et locum habitatiónis glóriæ tuæ. Ne perdas cum ímpiis, Deus, ánimam meam: et cum viris sánguinum vitam meam. In quorum mánibus iniquitátes sunt: déxtera eórum repléta est munéribus. Ego autem in innocéntia mea ingréssus sum: rédime me, et miserére mei. Pes meus stetit in dirécto: in ecclésiis benedícam te, Dómine. Glória Patri, et Fílio, et Spirítui Sancto. Sicut erat in princípio, et nunc, et semper: et in sǽcula sæculórum. Amen." },
      { note: "Nas Missas de defuntos e do Tempo da Paixão, omite-se o Glória Patri." },
      { section: "Oração à Santíssima Trindade" },
      { note: "Inclinado, ao meio do altar:" },
      { pt: "Recebei, ó Trindade Santíssima, esta oblação, que Vos oferecemos em memória da Paixão, Ressurreição e Ascensão de Nosso Senhor Jesus Cristo, e em honra da bem-aventurada e sempre Virgem Maria, de São João Batista, dos santos apóstolos Pedro e Paulo, e de todos os Santos; para que a eles sirva de honra e a nós de salvação, e eles se dignem interceder no céu por nós que na terra celebramos sua memória. Pelo mesmo Cristo, Senhor Nosso. Amém.",
        lt: "Súscipe, sancta Trínitas, hanc oblatiónem, quam tibi offérimus ob memóriam passiónis, resurrectiónis, et ascensiónis Jesu Christi, Dómini nostri, et in honórem beátæ Maríæ semper Vírginis, et beáti Joánnis Baptístæ, et sanctórum Apostolórum Petri et Pauli, et istórum, et ómnium Sanctórum: ut illis profíciat ad honórem, nobis autem ad salútem: et illi pro nobis intercédere dignéntur in cælis, quorum memóriam ágimus in terris. Per eúmdem Christum Dóminum nostrum. Amen." },
      { section: "Orate Fratres" },
      { note: "Voltando-se para a assistência, o celebrante convida-a a orar com ele:" },
      { quem: "Sacerdote", pt: "Orai, irmãos, para que este sacrifício, que também é vosso, seja aceito e agradável a Deus Pai Onipotente.", lt: "Oráte, fratres: ut meum ac vestrum sacrifícium acceptábile fiat apud Deum Patrem omnipoténtem." },
      { quem: "Povo", pt: "Receba o Senhor de vossas mãos este sacrifício, para louvor e glória de seu nome, para nosso bem e de toda a sua santa Igreja.", lt: "Suscípiat Dóminus sacrifícium de mánibus tuis ad laudem et glóriam nóminis sui, ad utilitátem quoque nostram, totiúsque Ecclésiæ suæ sanctæ." },
      { quem: "Sacerdote", pt: "Amém.", lt: "Amen." },
      { section: "Secreta" },
      { note: "Própria da Missa do dia." },
      { pt: "...por todos os séculos dos séculos.", lt: "...per ómnia sǽcula sæculórum." },
      { quem: "Povo", pt: "Amém.", lt: "Amen." }
    ] },
    { id: "prefacio-sanctus", titulo: "Prefácio e Sanctus", pending: false, text: [
      { note: "O Cânon constitui a parte central da Missa. Com o Prefácio, começa a grande prece eucarística. Curto diálogo introdutório:" },
      { quem: "Sacerdote", pt: "O Senhor seja convosco.", lt: "Dóminus vobíscum." },
      { quem: "Povo", pt: "E com o vosso espírito.", lt: "Et cum spíritu tuo." },
      { quem: "Sacerdote", pt: "Corações para o alto.", lt: "Sursum corda." },
      { quem: "Povo", pt: "Já os temos para o Senhor.", lt: "Habémus ad Dóminum." },
      { quem: "Sacerdote", pt: "Demos graças ao Senhor, nosso Deus.", lt: "Grátias agámus Dómino Deo nostro." },
      { quem: "Povo", pt: "É digno e justo.", lt: "Dignum et justum est." },
      { section: "Prefácio da Santíssima Trindade" },
      { note: "Diz-se nas festas e Missas votivas da SS. Trindade, e em todos os domingos do ano sem festa própria." },
      { pt: "É verdadeiramente digno, justo, racional e salutar, que sempre e em toda a parte Vos rendamos graças, Senhor Santo, Pai onipotente e Deus eterno; que sois, com o Vosso Filho Unigênito e com o Espírito Santo, um só Deus e um só Senhor, não na singularidade duma só pessoa, mas na Trindade duma só substância. Porque tudo aquilo que nos revelastes e cremos da Vossa glória, isso mesmo sentimos, sem diferença nem distinção, do Vosso Filho e do Espírito Santo, de maneira que, confessando a verdadeira e eterna Divindade, adoramos a propriedade nas Pessoas, a unidade na Essência e a igualdade na Majestade, a qual louvam os Anjos e os Arcanjos, os Querubins e os Serafins, que não cessam de cantar dizendo a uma só voz:",
        lt: "Vere dignum et justum est, æquum et salutáre, nos tibi semper et ubíque grátias ágere: Dómine sancte, Pater omnípotens, ætérne Deus: Qui cum unigénito Fílio tuo et Spíritu Sancto unus es Deus, unus es Dóminus: non in uníus singularitáte persónæ, sed in uníus Trinitáte substántiæ. Quod enim de tua glória, revelánte te, crédimus, hoc de Fílio tuo, hoc de Spíritu Sancto sine differéntia discretiónis sentímus. Ut in confessióne veræ sempiternǽque Deitátis, et in persónis propríetas, et in esséntia únitas, et in majestáte adorétur æquálitas. Quam laudant Angeli atque Archángeli, Chérubim quoque ac Séraphim: qui non cessant clamáre quotídie, una voce dicéntes:" },
      { section: "Sanctus" },
      { quem: "Todos", pt: "Santo, Santo, Santo, Senhor Deus do universo. O céu e a terra proclamam a vossa glória. Hosana nas alturas. Bendito o que vem em nome do Senhor. Hosana nas alturas!",
        lt: "Sanctus, Sanctus, Sanctus, Dóminus Deus Sábaoth. Pleni sunt cæli et terra glória tua. Hosánna in excélsis. Benedíctus qui venit in nómine Dómini. Hosánna in excélsis." }
    ] },
    { id: "canon-missa", titulo: "Cânon da Missa", pending: false, text: [
      { note: "O celebrante, profundamente inclinado, beija o altar e continua a grande oração sacerdotal." },
      { pt: "A Vós, Pai clementíssimo, por Jesus Cristo vosso Filho e Senhor nosso, humildemente rogamos e pedimos aceiteis e abençoeis estes dons, estas dádivas, estas santas oferendas ilibadas.",
        lt: "Te ígitur, clementíssime Pater, per Jesum Christum Fílium tuum, Dóminum nostrum, súpplices rogámus ac pétimus, uti accépta hábeas, et benedícas, hæc dona, hæc múnera, hæc sancta sacrifícia illibáta;" },
      { section: "Pela Igreja" },
      { pt: "Nós vo-los oferecemos, em primeiro lugar, pela vossa santa Igreja católica, à qual vos dignai conceder a paz, proteger, conservar na unidade e governar, através do mundo inteiro, e também pelo vosso servo o nosso Papa N., pelo nosso Bispo N., e por todos os ortodoxos, aos quais incumbe a guarda da fé católica e apostólica.",
        lt: "In primis, quæ tibi offérimus pro Ecclésia tua sancta cathólica: quam pacificáre, custodíre, adunáre et régere dignéris toto orbe terrárum: una cum fámulo tuo Papa nostro N. et Antístite nostro N. et ómnibus orthodóxis, atque cathólicæ et apostólicæ fídei cultóribus." },
      { section: "Memento dos Vivos" },
      { pt: "Lembrai-vos, Senhor, de vossos servos e servas N. e N., e de todos os que aqui estão presentes, cuja fé e devoção conheceis, e pelos quais Vos oferecemos, ou eles Vos oferecem, este sacrifício de louvor, por si e por todos os seus, pela redenção de suas almas, pela esperança de sua salvação e de sua conservação, e consagram suas dádivas a Vós, o Deus eterno, vivo e verdadeiro.",
        lt: "Meménto, Dómine, famulórum, famularúmque tuárum N. et N. et ómnium circumstántium, quorum tibi fides cógnita est, et nota devótio, pro quibus tibi offérimus: vel qui tibi ófferunt hoc sacrifícium laudis pro se, suísque ómnibus: pro redemptióne animárum suárum, pro spe salútis, et incolumitátis suæ: tibíque reddunt vota sua ætérno Deo, vivo et vero." },
      { section: "Comunicantes" },
      { pt: "Unidos na mesma comunhão, veneramos primeiramente a memória da gloriosa e sempre Virgem Maria, Mãe de Deus e Senhor Nosso Jesus Cristo; e também de São José, esposo da mesma Virgem, e dos vossos bem-aventurados Apóstolos e Mártires: Pedro e Paulo, André, Tiago, João e Tomé, Tiago, Filipe, Bartolomeu, Mateus, Simão e Tadeu, Lino, Cleto, Clemente, Xisto, Cornélio, Cipriano, Lourenço, Crisógono, João e Paulo, Cosme e Damião, e a de todos os vossos santos. Por seus méritos e preces, concedei-nos sejamos sempre fortalecidos com o socorro de vossa proteção. Pelo mesmo Cristo, Senhor Nosso. Amém.",
        lt: "Communicántes, et memóriam venerántes, in primis gloriósæ semper Vírginis Maríæ, Genitrícis Dei et Dómini nostri Jesu Christi: sed et beáti Joseph, ejúsdem Vírginis Sponsi, et beatórum Apostolórum ac Mártyrum tuórum, Petri et Pauli, Andréæ, Jacóbi, Joánnis, Thomæ, Jacóbi, Philíppi, Bartholomǽi, Matthǽi, Simónis, et Thaddǽi: Lini, Cleti, Cleméntis, Xysti, Cornélii, Cypriáni, Lauréntii, Chrysógoni, Joánnis et Pauli, Cosmæ et Damiáni: et ómnium Sanctórum tuórum; quorum méritis, precibúsque concédas, ut in ómnibus protectiónis tuæ muniámur auxílio. Per eúndem Christum Dóminum nostrum. Amen." },
      { note: "Estendendo as mãos sobre as oblatas:" },
      { pt: "Por isso, Vos rogamos, Senhor, aceiteis favoravelmente a homenagem de servidão que nós e toda a vossa Igreja Vos prestamos, firmai os nossos dias em vossa paz, arrancai-nos da condenação eterna, e colocai-nos entre os vossos eleitos. Por Jesus Cristo, Senhor Nosso. Amém.",
        lt: "Hanc ígitur oblatiónem servitútis nostræ, sed et cunctæ famíliæ tuæ, quǽsumus, Dómine, ut placátus accípias: diésque nostros in tua pace dispónas, atque ab ætérna damnatióne nos éripi, et in electórum tuórum júbeas grege numerári. Per Christum Dóminum nostrum. Amen." },
      { note: "O celebrante abençoa as oblatas:" },
      { pt: "Nós Vos pedimos, ó Deus, que esta oferta seja por Vós em tudo abençoada, aprovada, ratificada, digna e aceitável a vossos olhos, a fim de que se torne para nós o Corpo e o Sangue de Jesus Cristo, vosso diletíssimo Filho e Senhor Nosso.",
        lt: "Quam oblatiónem tu, Deus, in ómnibus, quǽsumus, benedíctam, adscríptam, ratam, rationábilem, acceptabilémque fácere dignéris: ut nobis Corpus, et Sanguis fiat dilectíssimi Fílii tui Dómini nostri Jesu Christi." },
      { section: "Consagração" },
      { note: "Inclina-se sobre o altar e profere as palavras da consagração da Hóstia. Em seguida adora-a, e eleva-a aos olhos dos assistentes, para que todos a adorem em silêncio." },
      { pt: "Ele, na véspera de sua paixão, tomou o pão em suas santas e veneráveis mãos, e elevando os olhos ao céu para Vós, ó Deus, seu Pai onipotente, dando-Vos graças, benzeu-o, partiu-o e deu-o a seus discípulos, dizendo: Tomai e comei dele, todos.",
        lt: "Qui prídie quam paterétur, accépit panem in sanctas ac venerábiles manus suas, et elevátis óculis in cælum ad te Deum Patrem suum omnipoténtem, tibi grátias agens, benedíxit, fregit, dedítque discípulis suis, dicens: Accípite, et manducáte ex hoc omnes." },
      { pt: "ISTO É O MEU CORPO.", lt: "HOC EST ENIM CORPUS MEUM." },
      { note: "Consagração do Cálice — de igual modo, depois de haver ceado:" },
      { pt: "De igual modo, depois de haver ceado, tomando também este precioso cálice em suas santas e veneráveis mãos, e novamente dando-Vos graças, benzeu-o e deu-o a seus discípulos, dizendo: Tomai e bebei dele, todos.",
        lt: "Símili modo postquam cænátum est, accípiens et hunc præclárum Cálicem in sanctas ac venerábiles manus suas: item tibi grátias agens, benedíxit, dedítque discípulis suis, dicens: Accípite, et bíbite ex eo omnes." },
      { pt: "ESTE É O CÁLICE DO MEU SANGUE, DO SANGUE DA NOVA E ETERNA ALIANÇA (MISTÉRIO DA FÉ!), O QUAL SERÁ DERRAMADO POR VÓS E POR MUITOS, PARA A REMISSÃO DOS PECADOS. Todas as vezes que isto fizerdes, fazei-o em memória de mim.",
        lt: "HIC EST ENIM CALIX SÁNGUINIS MEI, NOVI ET ÆTÉRNI TESTAMÉNTI: MYSTÉRIUM FÍDEI: QUI PRO VOBIS ET PRO MULTIS EFFUNDÉTUR IN REMISSIÓNEM PECCATÓRUM. Hæc quotiescúmque fecéritis, in mei memóriam faciétis." },
      { section: "Anamnese e Oferta" },
      { pt: "Por esta razão, Senhor, nós, vossos servos, com o vosso povo santo, lembrando-nos da bem-aventurada Paixão do mesmo Cristo, vosso Filho e Senhor Nosso, assim como de sua Ressurreição, saindo vitorioso do sepulcro, e de sua gloriosa Ascensão aos céus, oferecemos à vossa augusta Majestade, de vossos dons e dádivas, a Hóstia pura, a Hóstia santa, a Hóstia imaculada, o Pão santo da vida eterna, e o Cálice da salvação perpétua.",
        lt: "Unde et mémores, Dómine, nos servi tui, sed et plebs tua sancta, ejúsdem Christi Fílii tui Dómini nostri, tam beátæ passiónis, nec non et ab ínferis resurrectiónis, sed et in cælos gloriósæ ascensiónis: offérimus præcláræ majestáti tuæ de tuis donis ac datis, hóstiam puram, hóstiam sanctam, hóstiam immaculátam, Panem sanctum vitæ ætérnæ, et Cálicem salútis perpétuæ." },
      { pt: "Sobre estes dons, Vos pedimos digneis lançar um olhar favorável, e recebê-los benignamente, assim como recebestes as ofertas do justo Abel, vosso servo, o sacrifício de Abraão, pai de nossa fé, e o que Vos ofereceu vosso sumo sacerdote Melquisedeque, sacrifício santo, Hóstia imaculada.",
        lt: "Supra quæ propítio ac seréno vultu respícere dignéris; et accépta habére, sícuti accépta habére dignátus es múnera púeri tui justi Abel, et sacrifícium Patriárchæ nostri Abrahæ: et quod tibi óbtulit summus sacérdos tuus Melchísedech, sanctum sacrifícium, immaculátam hóstiam." },
      { note: "Profundamente inclinado:" },
      { pt: "Suplicantes vos rogamos, ó Deus onipotente, que, pelas mãos de vosso santo Anjo, mandeis levar estas ofertas ao vosso Altar sublime, à presença de vossa divina Majestade, para que, todos os que, participando deste altar, recebermos o sacrossanto Corpo e Sangue de vosso Filho, sejamos repletos de toda a bênção celeste e da Graça. Pelo mesmo Jesus Cristo, Nosso Senhor. Amém.",
        lt: "Súpplices te rogámus, omnípotens Deus, jube hæc perférri per manus sancti Angeli tui in sublíme altáre tuum, in conspéctu divínæ majestátis tuæ: ut, quotquot ex hac altáris participatióne sacrosánctum Fílii tui Corpus, et Sánguinem sumpsérimus, omni benedictióne cælésti et grátia repleámur. Per eúmdem Christum Dóminum nostrum. Amen." },
      { section: "Memento dos Defuntos" },
      { pt: "Lembrai-vos, também, Senhor, de vossos servos e servas N. e N., que nos precederam, marcados com o sinal da fé, e agora descansam no sono da paz. A estes, Senhor, e a todos os mais que repousam em Jesus Cristo, nós Vos pedimos, concedei o lugar do descanso, da luz e da paz. Pelo mesmo Jesus Cristo, Nosso Senhor. Amém.",
        lt: "Meménto étiam, Dómine, famulórum famularúmque tuárum N. et N. qui nos præcessérunt cum signo fídei, et dórmiunt in somno pacis. Ipsis, Dómine, et ómnibus in Christo quiescéntibus, locum refrigérii, lucis et pacis, ut indúlgeas, deprecámur. Per eúmdem Christum Dóminum nostrum. Amen." },
      { note: "O celebrante bate no peito:" },
      { pt: "Também a nós, pecadores, vossos servos, que esperamos na vossa infinita misericórdia, dignai-vos conceder um lugar na comunidade de vossos santos Apóstolos e Mártires: João, Estêvão, Matias, Barnabé, Inácio, Alexandre, Marcelino, Pedro, Felicidade, Perpétua, Águeda, Luzia, Inês, Cecília, Anastácia, e com todos os vossos Santos. Unidos a eles, pedimos, vos digneis receber-nos, não conforme nossos méritos, mas segundo a vossa misericórdia. Por Jesus Cristo, Nosso Senhor. Amém.",
        lt: "Nobis quoque peccatóribus fámulis tuis, de multitúdine miseratiónum tuárum sperántibus, partem áliquam, et societátem donáre dignéris, cum tuis sanctis Apóstolis et Martýribus: cum Joánne, Stéphano, Matthía, Barnaba, Ignátio, Alexándro, Marcellíno, Petro, Felicitáte, Perpétua, Agatha, Lúcia, Agnéte, Cæcília, Anastásia, et ómnibus Sanctis tuis: intra quorum nos consórtium, non æstimátor mériti, sed véniæ, quǽsumus, largítor admítte. Per Christum Dóminum nostrum. Amen." },
      { pt: "Por Ele, ó Senhor, sempre criais, santificais, vivificais, abençoais, e nos concedeis todos estes bens.", lt: "Per quem hæc ómnia, Dómine, semper bona creas, sanctíficas, vivíficas, benedícis, et præstas nobis." },
      { section: "Doxologia Final" },
      { pt: "Por Ele, com Ele e nEle, a Vós, Deus Pai onipotente, na unidade do Espírito Santo, toda a honra e toda a glória, por todos os séculos dos séculos.",
        lt: "Per ipsum, et cum ipso, et in ipso, est tibi Deo Patri omnipoténti, in unitáte Spíritus Sancti, omnis honor et glória. Per ómnia sǽcula sæculórum." },
      { quem: "Povo", pt: "Amém.", lt: "Amen." }
    ] },
    { id: "pater-noster-missa", titulo: "Pater Noster e Fração", pending: false, text: [
      { note: "Terminado o Cânon, o celebrante diz em voz alta:" },
      { quem: "Sacerdote", pt: "Oremos. Fiéis às ordens do Senhor e instruídos pelos divinos ensinamentos, ousamos dizer:", lt: "Orémus. Præcéptis salutáribus móniti, et divína institutióne formáti, audémus dícere:" },
      { pt: "Pai Nosso, que estais nos céus, santificado seja o vosso nome, venha a nós o vosso reino, seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje, e perdoai-nos as nossas dívidas, assim como nós perdoamos aos nossos devedores. E não nos deixeis cair em tentação,",
        lt: "Pater noster, qui es in cælis: Sanctificétur nomen tuum: Advéniat regnum tuum: Fiat volúntas tua, sicut in cælo, et in terra. Panem nostrum quotidiánum da nobis hódie: Et dimítte nobis débita nostra, sicut et nos dimíttimus debitóribus nostris. Et ne nos indúcas in tentatiónem," },
      { quem: "Povo", pt: "mas livrai-nos do mal.", lt: "Sed líbera nos a malo." },
      { note: "O celebrante diz \"Amém\" em voz baixa, e continua:" },
      { pt: "Livrai-nos de todos os males, ó Pai, passados, presentes e futuros, e pela intercessão da bem-aventurada e gloriosa sempre Virgem Maria, dos vossos bem-aventurados apóstolos Pedro, Paulo e André, e de todos os Santos, dai-nos propício a paz em nossos dias, para que, por vossa misericórdia, sejamos sempre livres do pecado, e preservados de toda a perturbação. Por Nosso Senhor Jesus Cristo, vosso Filho, que, sendo Deus, convosco vive e reina na unidade do Espírito Santo, por todos os séculos dos séculos.",
        lt: "Líbera nos, quǽsumus, Dómine, ab ómnibus malis, prætéritis, præséntibus, et futúris: et intercedénte beáta et gloriósa semper Vírgine Dei Genitríce María, cum beátis Apóstolis tuis Petro et Paulo, atque Andréa, et ómnibus Sanctis, da propítius pacem in diébus nostris: ut, ope misericórdiæ tuæ adjúti, et a peccáto simus semper líberi, et ab omni perturbatióne secúri. Per eúmdem Dóminum nostrum Jesum Christum, Fílium tuum. Qui tecum vivit et regnat in unitáte Spíritus Sancti Deus, per ómnia sǽcula sæculórum." },
      { quem: "Povo", pt: "Amém.", lt: "Amen." },
      { section: "Fração da Hóstia" },
      { note: "O celebrante parte a Hóstia ao meio, tira um fragmento e o deita no cálice, traçando com ele o sinal da cruz três vezes sobre o cálice:" },
      { quem: "Sacerdote", pt: "A paz do Senhor seja sempre convosco.", lt: "Pax Dómini sit semper vobíscum." },
      { quem: "Povo", pt: "E com o vosso espírito.", lt: "Et cum spíritu tuo." },
      { pt: "Que esta mistura sacramental do Corpo e do Sangue de Nosso Senhor Jesus Cristo seja, para nós que os vamos receber, penhor da vida eterna. Amém.", lt: "Hæc commíxtio et consecrátio Córporis et Sánguinis Dómini nostri Jesu Christi fiat accipiéntibus nobis in vitam ætérnam. Amen." }
    ] },
    { id: "agnus-comunhao", titulo: "Agnus Dei e Comunhão", pending: false, text: [
      { section: "Agnus Dei" },
      { note: "O celebrante bate três vezes no peito. (Na Quinta-feira Santa, diz-se \"miserere nobis\" as três vezes; nas Missas de Defuntos: \"dona eis requiem\", e à terceira \"dona eis requiem sempiternam\", sem bater no peito.)" },
      { quem: "Todos", pt: "Cordeiro de Deus, que tirais o pecado do mundo, tende piedade de nós. Cordeiro de Deus, que tirais o pecado do mundo, tende piedade de nós. Cordeiro de Deus, que tirais o pecado do mundo, dai-nos a paz.",
        lt: "Agnus Dei, qui tollis peccáta mundi: miserére nobis. Agnus Dei, qui tollis peccáta mundi: miserére nobis. Agnus Dei, qui tollis peccáta mundi: dona nobis pacem." },
      { note: "Inclinado, recita a oração pela paz da Igreja, após a qual se dá, nas Missas solenes, o ósculo da paz:" },
      { pt: "Senhor Jesus Cristo, que dissestes aos vossos apóstolos: Eu vos deixo a paz, eu vos dou a minha paz; não olheis os meus pecados, mas para a fé da vossa Igreja; dai-lhe a paz e a unidade, segundo a vossa vontade. Vós que, sendo Deus, viveis e reinais, em união com o Espírito Santo, por todos os séculos dos séculos. Amém.",
        lt: "Dómine Jesu Christe, qui dixísti Apóstolis tuis: Pacem relínquo vobis, pacem meam do vobis: ne respícias peccáta mea, sed fidem Ecclésiæ tuæ: eámque secúndum voluntátem tuam pacificáre et coadunáre dignéris: qui vivis et regnas Deus, per ómnia sǽcula sæculórum. Amen." },
      { section: "Preparação para a Comunhão" },
      { pt: "Senhor Jesus Cristo, Filho de Deus vivo, que por vontade do Pai, cooperando com o Espírito Santo, por vossa morte destes a vida ao mundo, livrai-me, por este vosso sacrossanto Corpo e por vosso Sangue, de todos os meus pecados e de todos os males. E fazei que eu observe sempre os vossos preceitos, e nunca me afaste de Vós, que, sendo Deus, viveis e reinais com Deus Pai e o Espírito Santo, por todos os séculos dos séculos. Amém.",
        lt: "Dómine Jesu Christe, Fili Dei vivi, qui ex voluntáte Patris, cooperánte Spíritu Sancto, per mortem tuam mundum vivificásti: líbera me per hoc sacrosánctum Corpus et Sánguinem tuum ab ómnibus iniquitátibus meis, et univérsis malis: et fac me tuis semper inhærére mandátis, et a te numquam separári permíttas. Qui cum eódem Deo Patre et Spíritu Sancto vivis et regnas Deus in sǽcula sæculórum. Amen." },
      { pt: "Este vosso Corpo, Senhor Jesus Cristo, que eu, que sou indigno, ouso receber, não seja para mim causa de juízo e condenação, mas por vossa misericórdia, sirva de proteção e defesa à minha alma e ao meu corpo, e de remédio aos meus males. Vós que, sendo Deus, viveis e reinais com Deus Pai e o Espírito Santo, por todos os séculos dos séculos. Amém.",
        lt: "Percéptio Córporis tui, Dómine Jesu Christe, quod ego, indígnus súmere præsúmo, non mihi provéniat in judícium et condemnatiónem; sed pro tua pietáte prosit mihi ad tutaméntum mentis et córporis, et ad medélam percipiéndam. Qui vivis et regnas cum Deo Patre in unitáte Spíritus Sancti Deus, per ómnia sǽcula sæculórum. Amen." },
      { section: "Comunhão do Celebrante" },
      { pt: "Receberei o Pão do céu e invocarei o nome do Senhor.", lt: "Panem cæléstem accípiam, et nomen Dómini invocábo." },
      { note: "Bate três vezes no peito:" },
      { pt: "Senhor, eu não sou digno de que entreis em minha morada, mas dizei uma só palavra e a minha alma será salva.", lt: "Dómine, non sum dignus, ut intres sub tectum meum: sed tantum dic verbo, et sanábitur ánima mea." },
      { pt: "O Corpo de Nosso Senhor Jesus Cristo guarde a minha alma para a vida eterna. Amém.", lt: "Corpus Dómini nostri Jesu Christi custódiat ánimam meam in vitam ætérnam. Amen." },
      { pt: "O Sangue de Nosso Senhor Jesus Cristo guarde a minha alma para a vida eterna. Amém.", lt: "Sánguis Dómini nostri Jesu Christi custódiat ánimam meam in vitam ætérnam. Amen." },
      { section: "Comunhão dos Fiéis" },
      { note: "Os fiéis, ou o acólito por eles, recitam o Confiteor (ver \"Confissão Geral\"). O celebrante, voltando-se para os fiéis, diz:" },
      { quem: "Sacerdote", pt: "Que Deus onipotente se compadeça de vós e, perdoando os vossos pecados, vos conduza à vida eterna.", lt: "Misereátur vestri omnípotens Deus, et dimíssis peccátis vestris, perdúcat vos ad vitam ætérnam." },
      { quem: "Povo", pt: "Amém.", lt: "Amen." },
      { quem: "Sacerdote", pt: "Indulgência, absolvição e remissão dos nossos pecados nos conceda o Senhor onipotente e misericordioso.", lt: "Indulgéntiam, absolutiónem, et remissiónem peccatórum nostrórum tríbuat nobis omnípotens et miséricors Dóminus." },
      { quem: "Povo", pt: "Amém.", lt: "Amen." },
      { note: "O celebrante genuflete e, voltando-se para os assistentes, ergue a Hóstia:" },
      { quem: "Sacerdote", pt: "Eis o Cordeiro de Deus! Eis Aquele que tira o pecado do mundo!", lt: "Ecce Agnus Dei, ecce qui tollit peccáta mundi." },
      { note: "E em seguida, três vezes:" },
      { quem: "Todos", pt: "Senhor, eu não sou digno de que entreis em minha morada, mas dizei uma só palavra e a minha alma será salva.", lt: "Dómine, non sum dignus, ut intres sub tectum meum: sed tantum dic verbo, et sanábitur ánima mea." },
      { note: "A cada comungante:" },
      { quem: "Sacerdote", pt: "O Corpo e o Sangue de Nosso Senhor Jesus Cristo guarde a tua alma para a vida eterna. Amém.", lt: "Corpus Dómini nostri Jesu Christi custódiat ánimam tuam in vitam ætérnam. Amen." },
      { section: "Abluções" },
      { note: "O celebrante purifica primeiro o cálice, depois os dedos, tomando as abluções:" },
      { pt: "Fazei, Senhor, que com o espírito puro, conservemos o que a nossa boca recebeu. E que desta dádiva temporal, nos venha remédio para a eternidade.",
        lt: "Quod ore súmpsimus, Dómine, pura mente capiámus, et de múnere temporáli fiat nobis remédium sempitérnum." },
      { pt: "Concedei, Senhor, que vosso Corpo e vosso Sangue que recebi me absorvam intimamente, e fazei que, restabelecido por estes puros e santos Sacramentos, não fique em mim mancha alguma de culpa. Vós, que sendo Deus, viveis e reinais com Deus Pai e o Espírito Santo, por todos os séculos dos séculos. Amém.",
        lt: "Corpus tuum, Dómine, quod sumpsi, et Sánguis, quem potávi, adhǽreat viscéribus meis: et præsta; ut in me non remáneat scélerum mácula, quem pura et sancta refecérunt Sacraménta. Qui vivis et regnas in sǽcula sæculórum. Amen." }
    ] },
    { id: "pos-comunhao-bencao", titulo: "Pós-Comunhão, Bênção e Último Evangelho", pending: false, text: [
      { section: "Antífona da Comunhão" },
      { note: "Própria da Missa do dia." },
      { quem: "Sacerdote", pt: "O Senhor seja convosco.", lt: "Dóminus vobíscum." },
      { quem: "Povo", pt: "E com o vosso espírito.", lt: "Et cum spíritu tuo." },
      { section: "Pós-Comunhão" },
      { note: "Própria da Missa do dia." },
      { pt: "...por todos os séculos dos séculos.", lt: "...per ómnia sǽcula sæculórum." },
      { quem: "Povo", pt: "Amém.", lt: "Amen." },
      { section: "Despedida" },
      { note: "O celebrante volta ao meio do altar, beija-o e, voltando-se para os fiéis, saúda-os:" },
      { quem: "Sacerdote", pt: "O Senhor seja convosco.", lt: "Dóminus vobíscum." },
      { quem: "Povo", pt: "E com o vosso espírito.", lt: "Et cum spíritu tuo." },
      { quem: "Sacerdote", pt: "Em boa hora vos ide.", lt: "Ite, Missa est." },
      { note: "Ou, nas Missas em que se omite o Glória: \"Bendigamos ao Senhor\" (Benedicamus Dómino); nas Missas de Réquiem: \"Descansem em paz\" (Requiéscant in pace)." },
      { quem: "Povo", pt: "Graças a Deus.", lt: "Deo grátias." },
      { note: "Voltando-se para o altar, recita:" },
      { pt: "Seja-vos agradável, ó Trindade santa, a oferta de minha servidão, a fim de que este sacrifício que, embora indigno aos olhos de vossa Majestade, Vos ofereci, seja aceito por Vós, e por vossa misericórdia, seja propiciatório para mim e para todos aqueles por quem ofereci. Por Cristo Jesus Nosso Senhor. Amém.",
        lt: "Pláceat tibi, sancta Trínitas, obséquium servitútis meæ: et præsta, ut sacrifícium quod óculis tuæ majestátis indígnus óbtuli, tibi sit acceptábile, mihíque, et ómnibus pro quibus illud óbtuli, sit, te miseránte, propitiábile. Per Christum Dóminum nostrum. Amen." },
      { note: "Beija o altar, volta-se para a assistência e dá a bênção:" },
      { quem: "Sacerdote", pt: "Abençoe-vos o Deus onipotente, Pai, Filho e Espírito Santo.", lt: "Benedícat vos omnípotens Deus: Pater, et Fílius, et Spíritus Sanctus." },
      { quem: "Povo", pt: "Amém.", lt: "Amen." },
      { section: "Último Evangelho" },
      { note: "Postura dos fiéis: de pé, até o fim da Missa." },
      { note: "O celebrante passa para o lado esquerdo do altar e recita, como último Evangelho, o princípio do Evangelho de São João (omitido na Quinta-feira Santa e na Vigília Pascal)." },
      { quem: "Sacerdote", pt: "O Senhor seja convosco.", lt: "Dóminus vobíscum." },
      { quem: "Povo", pt: "E com o vosso espírito.", lt: "Et cum spíritu tuo." },
      { quem: "Sacerdote", pt: "Início do santo Evangelho segundo São João.", lt: "Inítium sancti Evangélii secúndum Joánnem." },
      { quem: "Povo", pt: "Glória a Vós, Senhor.", lt: "Glória tibi, Dómine." },
      { pt: "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus. Ele estava no princípio com Deus. Todas as coisas foram feitas por Ele, e sem Ele nada do que foi feito se fez. Nele estava a vida, e a vida era a luz dos homens. E a luz resplandece nas trevas, e as trevas não a compreenderam. Houve um homem enviado de Deus, cujo nome era João. Este veio como testemunha para dar testemunho da luz, a fim de que todos cressem por meio dele. Não era Ele a luz, mas veio para dar testemunho da luz. Ali estava a Luz verdadeira, a que ilumina a todo o homem que vem a este mundo. Estava no mundo, e o mundo foi feito por Ele, e o mundo não O conheceu. Veio para o que era seu, e os seus não O receberam. Mas, a todos quantos O receberam, deu-lhes o poder de se tornarem filhos de Deus, aos que creem no seu Nome; os quais não nasceram do sangue, nem do desejo da carne, nem da vontade do homem, mas nasceram de Deus.",
        lt: "In princípio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum. Hoc erat in princípio apud Deum. Omnia per ipsum facta sunt, et sine ipso factum est nihil quod factum est; in ipso vita erat, et vita erat lux hóminum; et lux in ténebris lucet, et ténebræ eam non comprehendérunt. Fuit homo missus a Deo, cui nomen erat Joánnes. Hic venit in testimónium, ut testimónium perhibéret de lúmine, ut omnes créderent per illum. Non erat ille lux, sed ut testimónium perhibéret de lúmine. Erat lux vera quæ illúminat omnem hóminem veniéntem in hunc mundum. In mundo erat, et mundus per ipsum factus est, et mundus eum non cognóvit. In própria venit, et sui eum non recepérunt. Quotquot autem recepérunt eum, dedit eis potestátem fílios Dei fíeri, his qui credunt in nómine ejus: qui non ex sanguínibus, neque ex voluntáte carnis, neque ex voluntáte viri, sed ex Deo nati sunt." },
      { note: "(ajoelhar)" },
      { pt: "E O VERBO SE FEZ CARNE, e habitou entre nós, e vimos a sua glória, glória própria do Filho Unigênito do Pai, cheio de graça e de verdade.", lt: "ET VERBUM CARO FACTUM EST: et habitávit in nobis: et vídimus glóriam ejus, glóriam quasi Unigéniti a Patre, plenum grátiæ et veritátis." },
      { quem: "Povo", pt: "Demos graças a Deus.", lt: "Deo grátias." },
      { section: "Orações no Fim da Missa" },
      { note: "De joelhos diante do altar, o celebrante diz com os fiéis as preces prescritas pelo Papa Leão XIII, enriquecidas de indulgências." },
      { pt: "Ave Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora de nossa morte. Amém. (três vezes)",
        lt: "Ave María, grátia plena, Dóminus tecum, benedícta tu in muliéribus et benedíctus fructus ventris tui, Jesus. Sancta María, Mater Dei, ora pro nobis peccatóribus, nunc et in hora mortis nostræ. Amen. (ter)" },
      { pt: "Salve Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degradados filhos de Eva. Por vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei. E depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce Virgem Maria!",
        lt: "Salve Regína, Mater misericórdiæ, vita, dulcédo, et spes nostra, salve. Ad te clamámus, éxsules fílii Evæ. Ad te suspirámus geméntes et flentes in hac lacrimárum valle. Eia ergo, Advocáta nostra, illos tuos misericórdes óculos ad nos convérte. Et Jesum, benedíctum fructum ventris tui, nobis, post hoc exsílium, osténde. O clemens, o pia, o dulcis Virgo María." },
      { quem: "Sacerdote", pt: "Rogai por nós, Santa Mãe de Deus.", lt: "Ora pro nobis, sancta Dei Génitrix." },
      { quem: "Povo", pt: "Para que sejamos dignos das promessas de Cristo.", lt: "Ut digni efficiámur promissiónibus Christi." },
      { quem: "Sacerdote", pt: "Oremos. Deus, refúgio e fortaleza nossa, atendei propício os clamores de vosso povo; e, pela intercessão da gloriosa e imaculada Virgem Maria, Mãe de Deus, de São José, casto esposo de Maria, dos vossos bem-aventurados Apóstolos São Pedro e São Paulo, e de todos os Santos, ouvi benigno e misericordioso as preces que do fundo da alma Vos dirigimos para a conversão dos pecadores, para a liberdade e exaltação da Santa Madre Igreja. Pelo mesmo Jesus Cristo Nosso Senhor. Amém.",
        lt: "Orémus. Deus, refúgium nostrum et virtus, pópulum ad te clamántem propítius réspice; et intercedénte gloriósa, et immaculáta Vírgine Dei Genitríce María, cum beáto Joseph, ejus Sponso, ac beátis Apóstolis tuis Petro et Paulo, et ómnibus Sanctis, quas pro conversióne peccatórum, pro libertáte et exaltatióne sanctæ Matris Ecclésiæ, preces effúndimus, miséricors et benígnus exáudi. Per eúndem Christum Dóminum nostrum. Amen." },
      { pt: "São Miguel Arcanjo, defendei-nos no combate, cobri-nos com o vosso escudo contra os embustes e ciladas do demônio. Subjugue-o Deus, instantemente o pedimos. E vós, príncipe da milícia celeste, pelo divino poder, precipitai no inferno a Satanás e a todos os espíritos malignos que andam pelo mundo para perder as almas. Amém.",
        lt: "Sancte Michæl Archángele, defénde nos in prǽlio; contra nequítiam et insídias diáboli esto præsídium. Imperet illi Deus, súpplices deprecámur: tuque, Princeps milítiæ cæléstis, sátanam aliósque spíritus malígnos, qui ad perditiónem animárum pervagántur in mundo, divína virtúte in inférnum detrúde." },
      { note: "São Pio X acrescentou a seguinte jaculatória:" },
      { quem: "Sacerdote", pt: "Sacratíssimo Coração de Jesus.", lt: "Cor Jesu sacratíssimum." },
      { quem: "Povo", pt: "Tende piedade de nós. (três vezes)", lt: "Miserére nobis. (ter)" }
    ] }
  ],

  proprios: [
    { id: "proprio-sagrado-coracao", titulo: "Próprio do Sagrado Coração de Jesus", pending: true, text: [] },
    { id: "proprio-imaculada", titulo: "Próprio da Imaculada Conceição", pending: true, text: [] },
    { id: "proprio-defuntos", titulo: "Próprio dos Defuntos", pending: true, text: [] }
  ],

  tridentinaExplicada: [
    { id: "exp-pe-altar", titulo: "1. Orações ao Pé do Altar", pending: false, text: [
      { note: "Acompanha o Ordinário: seção \"Orações ao Pé do Altar\"." },
      { section: "Sinal da Cruz e Antífona" },
      "O sacerdote começa a Missa ainda fora do altar propriamente dito — aos seus pés —, como quem se prepara para subir ao monte santo de Deus. O sinal da cruz inicial já professa, no primeiro gesto, o mistério trinitário que sustenta toda a celebração. A antífona \"Introíbo ad altáre Dei\" (Vou-me aproximar do altar de Deus) anuncia o movimento espiritual de toda a Missa: uma aproximação progressiva, passo a passo, do lugar onde o sacrifício vai se realizar.",
      { section: "Salmo 42 (Júdica me)" },
      "Este salmo, omitido apenas nas Missas de Defuntos e no Tempo da Paixão (por seu tom de alegria contrastar com o luto e a proximidade da Cruz), exprime o desejo da alma de se aproximar do altar com pureza, contrastando a alegria da presença divina (\"ao Deus que é a minha alegria\") com a aflição causada pelo inimigo espiritual. É, antes de tudo, uma oração de confiança: mesmo sentindo-se perseguido e triste, o orante decide esperar em Deus.",
      { section: "Adjutorium e Confiteor" },
      "O versículo \"O nosso auxílio está no nome do Senhor\" reconhece que ninguém sobe ao altar por mérito próprio, mas pela graça. Segue-se o Confiteor (ver explicação seguinte), e depois dele, uma série de versículos que preparam a subida final: pedidos de misericórdia, de conversão (\"voltando-vos para nós, nos dareis a vida\") e de salvação, culminando no cumprimento \"O Senhor seja convosco\" — a primeira das muitas trocas de saudação entre sacerdote e povo ao longo da Missa, sinal de que a liturgia é sempre um diálogo, nunca um monólogo.",
      { section: "Oração ao subir ao altar" },
      "Só então, já purificado interiormente pelas orações anteriores, o sacerdote sobe de fato ao altar, pedindo que suas iniquidades sejam afastadas para que, com alma pura, mereça entrar no \"Santo dos Santos\" — expressão que evoca diretamente o Templo de Jerusalém, e situa o altar cristão como o novo lugar da presença real de Deus. Beijando o altar (que contém relíquias de santos, testemunhas físicas da comunhão da Igreja triunfante com a militante), pede que os méritos desses santos alcancem o perdão de seus pecados."
    ] },
    { id: "exp-confiteor", titulo: "2. Confissão Geral (Confiteor)", pending: false, text: [
      { note: "Acompanha o Ordinário: dentro de \"Orações ao Pé do Altar\", a seção do Confiteor." },
      { section: "Por que duas vezes" },
      "O Confiteor é rezado duas vezes seguidas: primeiro pelo sacerdote sozinho, depois pelos fiéis (ou pelos ministros em seu nome). Essa duplicação não é repetição vazia — o sacerdote se confessa antes de todos, por ser quem vai oferecer o sacrifício em nome da assembleia, e só depois os fiéis se confessam a ele e entre si, reconhecendo a dimensão comunitária do pecado e do perdão.",
      { section: "A extensão dos destinatários" },
      "Note-se a quem o Confiteor se dirige: a Deus, à Virgem Maria, a São Miguel Arcanjo, a São João Batista, aos apóstolos Pedro e Paulo, a todos os Santos — e aos próprios irmãos presentes. Essa lista extensa exprime a convicção católica de que o pecado, mesmo pessoal e interior, fere toda a comunhão dos santos, e por isso é diante de toda essa comunhão (visível e invisível) que o cristão se humilha.",
      { section: "O gesto de bater no peito" },
      "Bater no peito às palavras \"minha culpa, minha culpa, minha máxima culpa\" é um gesto físico de contrição, tomado do publicano do Evangelho (Lc 18,13), que batia no peito dizendo \"Meu Deus, tende piedade de mim, que sou pecador\". O corpo participa da confissão da alma: reconhece-se que o pecado nasce dentro de nós, no coração, e não fora.",
      { section: "A absolvição" },
      "A absolvição que se segue (\"Deus todo-poderoso tenha compaixão de vós...\") não substitui a Confissão sacramental nem perdoa pecados mortais — é uma bênção sacramental menor (um \"sacramental\"), que remove pecados veniais e dispõe a alma para participar dignamente do Santo Sacrifício que está prestes a começar."
    ] },
    { id: "exp-kyrie-gloria", titulo: "3. Kýrie e Glória", pending: false, text: [
      { note: "Acompanha o Ordinário: seção \"Kýrie e Glória\"." },
      { section: "Intróito" },
      "Antes mesmo do Kýrie, o celebrante lê o Intróito — canto de entrada próprio de cada Missa, que já anuncia o tema espiritual do dia ou da festa celebrada. Às suas primeiras palavras, todos se benzem: é o momento em que a Missa \"do dia\" propriamente começa, depois da preparação genérica que acabou de terminar.",
      { section: "Kýrie Eléison" },
      "O Kýrie eléison (\"Senhor, tende piedade\") é uma das raríssimas expressões gregas mantidas na liturgia romana, ecoando os Evangelhos, onde cegos, leprosos e aflitos clamavam repetidamente a Cristo por misericórdia. As nove invocações — três \"Kýrie\", três \"Christe\", três \"Kýrie\" novamente — formam uma súplica explicitamente trinitária: três vezes ao Pai (na primeira pessoa da Trindade que o \"Kýrie\", Senhor, evoca), três ao Filho encarnado (\"Christe\"), três de novo à totalidade da Trindade.",
      { section: "Glória in Excelsis" },
      "Diferente do Kýrie (que pede), o Glória é hino de louvor puro, sem nenhum pedido até quase o fim. Começa retomando literalmente o canto dos anjos na noite de Belém (Lc 2,14) e se expande numa aclamação a cada Pessoa divina. Por seu caráter de alegria festiva, é omitido nos tempos penitenciais do ano litúrgico — Advento, Septuagésima, Quaresma — e nas Missas de Defuntos, guardando-se propositalmente para os tempos e ocasiões de júbilo da Igreja, o que faz sua ausência, quando acontece, ser também um ensinamento espiritual sobre o tempo que se vive."
    ] },
    { id: "exp-coleta-epistola", titulo: "4. Coleta, Epístola e Evangelho", pending: false, text: [
      { note: "Acompanha o Ordinário: seção \"Coleta, Epístola e Evangelho\"." },
      { section: "Coleta" },
      "A palavra \"Coleta\" vem do latim colligere, recolher: essa breve oração literalmente \"recolhe\" e \"reúne\" numa só fórmula os votos e intenções silenciosas de toda a assembleia, apresentando-os a Deus em nome de todos. É por isso que o sacerdote a introduz com \"Oremos\" — um convite explícito à oração comum antes de resumi-la em palavras.",
      { section: "Epístola" },
      "A Epístola (geralmente um trecho das cartas apostólicas ou do Antigo Testamento) instrui a mente com o ensinamento apostólico que prepara para o Evangelho. Nas Missas solenes, é cantada pelo subdiácono — um ofício menor que o do diácono, que reserva-se a proclamação do Evangelho, sublinhando uma hierarquia de dignidade entre os textos proclamados.",
      { section: "Gradual, Aleluia, Tracto" },
      "Entre as leituras, cantos responsoriais (o Gradual) e de jubilosa aclamação (o Aleluia) permitem à assembleia meditar o que acabou de ouvir. No Tempo da Septuagésima — período de preparação penitencial pré-quaresmal hoje suprimido no calendário reformado — o alegre \"Aleluia\" é substituído pelo mais grave Tracto, antecipando o espírito da Quaresma que se aproxima.",
      { section: "Evangelho" },
      "O Evangelho é a Palavra do próprio Cristo, não apenas sobre Ele — por isso recebido de pé (postura de respeito e prontidão, diferente da atitude receptiva de quem está sentado para uma instrução), com a maior reverência: nas Missas solenes, o livro é incensado antes e beijado depois. O tríplice sinal da cruz na testa, boca e peito antes de proclamá-lo exprime o desejo de que a Palavra ilumine o pensamento, seja anunciada sem vergonha pelos lábios, e seja guardada e amada no coração."
    ] },
    { id: "exp-credo", titulo: "5. Credo", pending: false, text: [
      { note: "Acompanha o Ordinário: seção \"Credo\"." },
      { section: "Por que nem toda Missa tem Credo" },
      "O Credo é a resposta pessoal e comunitária da fé à Palavra que acabou de ser proclamada — por isso, só se reza nos dias em que a solenidade da celebração pede essa profissão pública: domingos, festas de primeira classe, solenidades de Nosso Senhor e de Nossa Senhora, festas natalícias dos Apóstolos e Evangelistas, dos Doutores da Igreja, e Missas votivas solenes. Em Missas feriais mais simples, omite-se, não por menor importância da fé, mas porque o Credo é reservado às ocasiões de maior relevo no calendário.",
      { section: "A genuflexão na Encarnação" },
      "O ponto central, física e teologicamente, é a genuflexão em \"Et incarnátus est... et homo factus est\" (E Se encarnou... e Se fez homem). Este é o instante mais decisivo de toda a história da salvação — o momento exato em que o Verbo eterno, consubstancial ao Pai, assumiu verdadeira carne humana no seio de Maria — e por isso todos se ajoelham, ainda que por um breve momento, diante desse mistério, antes de se levantarem e prosseguirem de pé até o fim do Credo."
    ] },
    { id: "exp-ofertorio", titulo: "6. Ofertório", pending: false, text: [
      { note: "Acompanha o Ordinário: seção \"Ofertório\"." },
      { section: "Início da Segunda Parte da Missa" },
      "Com o Ofertório começa a segunda grande parte da Missa: o Sacrifício propriamente dito (a primeira parte, com leituras e Credo, é chamada tradicionalmente de \"Missa dos Catecúmenos\", por ser a parte a que, na Igreja antiga, também os não batizados podiam assistir).",
      { section: "Oferecimento do Pão e do Vinho" },
      "O pão e o vinho são oferecidos ainda como simples pão e vinho — a Consagração só acontecerá no Cânon —, mas já com palavras que antecipam misteriosamente o que estão prestes a se tornar: \"que para nós se vai tornar pão da vida\" e \"cálice da salvação\". É uma oferta feita com plena consciência do que Deus fará dela.",
      { section: "A água e o vinho" },
      "A mistura de uma pequena quantidade de água ao vinho é rica em simbolismo: recorda a água e o sangue que jorraram do lado de Cristo na cruz (Jo 19,34), e simboliza também a união da humanidade (representada pela água, comum e abundante) com a divindade de Cristo (representada pelo vinho, nobre): \"sermos participantes da divindade daquele que se dignou revestir-se de nossa humanidade\".",
      { section: "Incensação e Lavabo" },
      "Nas Missas solenes, incensam-se as oferendas, a cruz, o altar, o celebrante e o povo — o incenso subindo simboliza a oração que sobe a Deus (Sl 140). O Lavabo, o lavar das mãos citando o Salmo 25, simboliza a pureza interior necessária para tocar as coisas sagradas: \"lavo as minhas mãos entre os inocentes\"."
    ] },
    { id: "exp-prefacio-sanctus", titulo: "7. Prefácio e Sanctus", pending: false, text: [
      { note: "Acompanha o Ordinário: seção \"Prefácio e Sanctus\"." },
      { section: "O diálogo introdutório" },
      "\"Corações para o alto\" / \"Já os temos para o Senhor\" (Sursum corda / Habémus ad Dóminum) é um convite literal a erguer o coração — sede tradicional dos afetos e da vontade — de todas as preocupações terrenas para a realidade celeste que está prestes a se realizar sobre o altar. É um dos diálogos mais antigos de toda a liturgia cristã, presente já nos textos do século III.",
      { section: "O Prefácio" },
      "O Prefácio é um grande hino de ação de graças que muda conforme o tempo litúrgico ou a festa celebrada (o Ordinário traz o Prefácio da Santíssima Trindade, usado nos domingos comuns e nas festas próprias da Trindade). Cada Prefácio contextualiza, em poucas frases, o mistério específico que está sendo celebrado naquele dia.",
      { section: "Sanctus" },
      "O Prefácio termina sempre no Sanctus, onde a Igreja na terra une literalmente sua voz à dos Anjos, Querubins e Serafins do livro de Isaías (Is 6,3) e do Apocalipse, que cantam sem cessar a santidade tríplice de Deus. A segunda parte do Sanctus (\"Bendito o que vem em nome do Senhor\") cita a aclamação da entrada triunfal de Jesus em Jerusalém (Mt 21,9), antecipando a chegada sacramental de Cristo que vai se realizar na Consagração."
    ] },
    { id: "exp-canon", titulo: "8. Cânon da Missa", pending: false, text: [
      { note: "Acompanha o Ordinário: seção \"Cânon da Missa\"." },
      { section: "O que significa \"Cânon\"" },
      "\"Cânon\" significa \"regra fixa\": é a parte mais antiga e mais imutável de toda a Missa, rezada em silêncio pelo sacerdote (na Missa Baixa) — um silêncio que não é ausência de oração, mas o mais alto grau de reverência ante o mistério que está prestes a se realizar.",
      { section: "Te Igitur e Comunicantes" },
      "O \"Te Igitur\" abre a grande oração de oferta, pedindo a Deus que aceite os dons pela Igreja inteira, começando pelo Papa e o Bispo local — sinal de que cada Missa, por mais pequena e local, é celebrada em comunhão visível com toda a Igreja universal. O \"Communicantes\" une explicitamente a Igreja da terra à comunhão dos santos do céu, nomeando a Virgem Maria, São José e uma lista de mártires dos primeiros séculos.",
      { section: "A Consagração" },
      "No centro de tudo estão as palavras da Consagração — as mesmas palavras que Cristo pronunciou na Última Ceia, repetidas pelo sacerdote in persona Christi (na pessoa de Cristo, não em nome próprio) — que transformam realmente o pão e o vinho no Corpo e no Sangue de Jesus Cristo. A elevação da Hóstia e depois do Cálice, para adoração silenciosa dos fiéis, é o ponto culminante de toda a Missa.",
      { section: "Memento dos Vivos e dos Defuntos" },
      "Antes e depois da Consagração, o sacerdote reza pelos vivos (\"Memento\" dos vivos, antes) e pelos falecidos (\"Memento\" dos defuntos, depois), unindo o sacrifício presente às necessidades espirituais de pessoas concretas — vivas ou já falecidas —, mostrando que a Missa não é um ato abstrato, mas intercessão real e concreta."
    ] },
    { id: "exp-pater-fracao", titulo: "9. Pater Noster e Fração", pending: false, text: [
      { note: "Acompanha o Ordinário: seção \"Pater Noster e Fração\"." },
      { section: "Pater Noster" },
      "Terminado o Cânon, reza-se a oração que o próprio Cristo ensinou aos apóstolos, introduzida por palavras que lembram sua origem divina: \"instruídos pelos divinos ensinamentos, ousamos dizer\". É a única oração de toda a Missa que remonta diretamente aos lábios de Jesus, e por isso ocupa esse lugar de honra, preparando imediatamente a Comunhão.",
      { section: "Libera Nos" },
      "O sacerdote prossegue sozinho, pedindo a libertação de todo mal e a paz \"em nossos dias\" — uma oração antiga que expandia o pedido final do Pai-Nosso (\"livrai-nos do mal\"), invocando também Maria e os Apóstolos Pedro, Paulo e André.",
      { section: "Fração da Hóstia" },
      "A fração da Hóstia — partida ao meio, e depois um pequeno fragmento é destacado — recorda diretamente a partilha do pão na Última Ceia e no episódio de Emaús, onde os discípulos reconheceram Cristo ressuscitado \"ao partir o pão\" (Lc 24,35).",
      { section: "A Comixtão" },
      "O pequeno fragmento da Hóstia é deitado no cálice, com um triplo sinal da cruz. Este gesto — chamado tecnicamente \"comixtão\" — simboliza a reunião do Corpo e do Sangue de Cristo ressuscitado, já não mais separados como estiveram na sua morte, mas unidos para sempre na glória da Ressurreição."
    ] },
    { id: "exp-agnus-comunhao", titulo: "10. Agnus Dei e Comunhão", pending: false, text: [
      { note: "Acompanha o Ordinário: seção \"Agnus Dei e Comunhão\"." },
      { section: "Agnus Dei" },
      "\"Cordeiro de Deus\" recorda diretamente o sacrifício do cordeiro pascal hebreu, cujo sangue nas portas das casas livrou o povo da morte no Egito (Ex 12) — figura antecipada do sacrifício de Cristo, o verdadeiro Cordeiro que \"tira o pecado do mundo\" (Jo 1,29). As três invocações preparam imediatamente o coração para a Comunhão que se segue.",
      { section: "Rito da Paz" },
      "Nas Missas solenes, segue-se o ósculo da paz, transmitido do celebrante ao diácono, deste ao subdiácono e ao clero — sinal visível de que ninguém se aproxima dignamente da Comunhão sem estar em paz e caridade com os irmãos.",
      { section: "Preparação Íntima do Sacerdote" },
      "As duas orações privadas antes de comungar (\"Senhor Jesus Cristo, Filho de Deus vivo...\" e \"Este vosso Corpo...\") exprimem, com grande intensidade pessoal, o temor e o amor com que a Igreja sempre tratou este momento supremo de união com Deus — pedindo que a Comunhão seja remédio e proteção, nunca motivo de juízo ou condenação.",
      { section: "Comunhão dos Fiéis" },
      "Antes de comungar, os fiéis (ou o acólito em seu nome) recitam também o Confiteor — reafirmando, mais uma vez, a necessidade de pureza de coração antes de receber o Corpo real de Cristo. A tradicional recepção de joelhos e na língua, na Missa Tridentina, é sinal de máxima reverência física ao mistério que se recebe."
    ] },
    { id: "exp-ritos-finais", titulo: "11. Pós-Comunhão, Bênção e Último Evangelho", pending: false, text: [
      { note: "Acompanha o Ordinário: seção \"Pós-Comunhão, Bênção e Último Evangelho\"." },
      { section: "Abluções e Pós-Comunhão" },
      "Depois da Comunhão, o sacerdote purifica o cálice e os dedos com as chamadas abluções, pedindo que \"o que a nossa boca recebeu\" seja conservado \"com o espírito puro\" — cuidado litúrgico que exprime o respeito devido a cada partícula do Sacramento. A Pós-Comunhão, própria de cada Missa, agradece formalmente pelo dom recebido.",
      { section: "Ite Missa Est" },
      "\"Ide, é o envio\" (Ite, Missa est) é a fórmula de despedida de onde vem a própria palavra \"Missa\": os fiéis, alimentados pelo Sacrifício, não ficam retidos no templo, mas são enviados de volta ao mundo para viver o que celebraram. Em Missas onde se omite o Glória, usa-se em seu lugar \"Bendigamos ao Senhor\"; nas Missas de Réquiem, \"Descansem em paz\".",
      { section: "Bênção Final" },
      "A bênção trinitária final sela sacramentalmente a celebração, comunicando aos fiéis a graça do sacrifício que acabaram de participar, para que a levem consigo ao saírem do templo.",
      { section: "Último Evangelho" },
      "O prólogo de São João (\"No princípio era o Verbo...\") é lido como Último Evangelho, recordando mais uma vez, já no fecho da Missa, o mistério central de toda a celebração: o Verbo eterno que Se fez carne. Por isso todos se ajoelham também neste instante final — a mesma genuflexão do Credo, agora repetida como síntese de tudo o que se celebrou."
    ] }
  ],

  novoOrdoExplicada: [
    { id: "exp-novo-piedade", titulo: "Como Assistir com Piedade", pending: false, text: [
      { note: "Um guia prático para viver a Missa Nova com o mesmo espírito de reverência da Missa Tridentina." },
      { section: "Antes da Missa" },
      "Chegue com alguns minutos de antecedência. O silêncio antes da Missa começar não é tempo morto — é preparação da alma, igual à que o sacerdote faz nas Orações ao Pé do Altar. Reserve esses minutos para um exame breve de consciência e para pedir a graça de participar com atenção e amor.",
      { section: "Silêncio Interior" },
      "A Missa Nova permite (e recomenda, nas rubricas do próprio Missal) momentos de silêncio — depois da homilia, depois da Comunhão, em certos pontos da Liturgia da Palavra. Aproveite-os de verdade: não são pausas vazias, mas espaços deixados propositalmente para a oração pessoal se unir à oração pública.",
      { section: "Sobre Ajoelhar-se" },
      "As posturas oficiais (de pé, sentado, ajoelhado) seguem as normas da Conferência Episcopal de cada país, e por isso variam um pouco de lugar para lugar — o app segue aqui a prática mais comum no Brasil e em Portugal. Mesmo onde a norma local for ficar de pé em algum momento da Prece Eucarística, o fiel que sentir necessidade de se ajoelhar em silêncio, sem perturbar os vizinhos (por exemplo, no momento da Consagração), pode fazê-lo como expressão legítima e louvável de devoção pessoal.",
      { section: "Sobre a Comunhão" },
      "O Direito Canônico e as normas litúrgicas universais da Igreja garantem a todo fiel, em qualquer país e em qualquer Missa (inclusive na forma atual), o direito de receber a Comunhão ajoelhado e diretamente na língua — essa é, de fato, a forma mais tradicional e continua plenamente permitida; nenhum ministro pode recusá-la. Quem deseja aproximar-se da reverência do rito antigo pode, com toda a liberdade, optar por essa forma.",
      { section: "Ação de Graças" },
      "Depois de comungar e depois do fim da Missa, não saia correndo. Reserve alguns minutos de ação de graças silenciosa — este era, tradicionalmente, um dos momentos mais valorizados da piedade eucarística, e continua inteiramente disponível na Missa Nova, ainda que hoje seja, na prática, menos praticado.",
      { section: "Postura Interior" },
      "Mais do que a postura do corpo, o que faz a Missa — em qualquer forma do Rito Romano — ser vivida com piedade é a disposição interior: fé viva na presença real de Cristo, atenção às palavras (mesmo quando já conhecidas de cor), e o desejo sincero de unir a própria vida ao sacrifício que se renova no altar."
    ] },
    { id: "exp-novo-ritos-iniciais", titulo: "1. Ritos Iniciais", pending: false, text: [
      { note: "Acompanha o Ordinário (Novo Ordo): seção \"Ritos Iniciais\"." },
      { section: "Sentido do Cântico de Entrada" },
      "O cântico de entrada (ou a antífona, se não houver canto) tem a mesma função do Intróito tridentino: reunir espiritualmente a assembleia dispersa e introduzir o tema da celebração do dia.",
      { section: "Saudação" },
      "A saudação inicial já é, em si, uma pequena catequese trinitária — nomeia explicitamente o Pai, o Filho e o Espírito Santo logo nas primeiras palavras da Missa, e sua fórmula muda conforme o tempo litúrgico, sublinhando o mistério específico celebrado naquele momento do ano (a vinda do Senhor no Advento, o nascimento no Natal, a conversão na Quaresma, a ressurreição na Páscoa).",
      { section: "Ato Penitencial" },
      "Assim como na Missa antiga, ninguém se aproxima do altar sem antes reconhecer-se pecador. A fórmula \"Confesso a Deus todo-poderoso e a vós, irmãos\" preserva a mesma estrutura teológica do Confiteor tridentino: o pecado fere tanto a Deus quanto a comunidade, e por isso se pede perdão a ambos, com o mesmo gesto de bater no peito.",
      { section: "Kýrie e Glória" },
      "O Kýrie continua sendo, como sempre foi, uma súplica de misericórdia (e pode até ser combinado com o próprio Ato Penitencial, numa das opções previstas pelo Missal). O Glória mantém a mesma regra antiga: omite-se no Advento e na Quaresma, reservando-se para os tempos de alegria."
    ] },
    { id: "exp-novo-credo", titulo: "2. Profissão de Fé (Credo)", pending: false, text: [
      { note: "Acompanha o Ordinário (Novo Ordo): seção \"Profissão de Fé\"." },
      { section: "Dois Credos, Um Só Mistério" },
      "A Missa Nova oferece dois textos: o Credo Niceno-Constantinopolitano (o mesmo, quase palavra por palavra, do rito antigo) e, como opção mais breve, o Símbolo dos Apóstolos, mais usado no Tempo Pascal e na Quaresma por sua simplicidade batismal.",
      { section: "A Inclinação (em vez da Genuflexão)" },
      "No lugar da genuflexão completa do rito antigo, o Missal atual prevê que todos se inclinem profundamente às palavras \"E encarnou pelo Espírito Santo...\" — um gesto mais discreto, mas com o mesmo significado teológico: reverenciar o instante exato da Encarnação do Verbo. Em algumas solenidades específicas do calendário (Anunciação e Natal), a rubrica pede genuflexão completa, como no rito antigo."
    ] },
    { id: "exp-novo-oracao-fieis", titulo: "3. Oração Universal", pending: false, text: [
      { note: "Acompanha o Ordinário (Novo Ordo): seção \"Oração Universal\"." },
      { section: "Uma Restauração Antiga" },
      "Esta oração comunitária, com intenções específicas lidas por um leitor ou diácono, existia nos primeiros séculos da Igreja, mas havia praticamente desaparecido do Ordinário Romano na época do Missal de 1962. Sua restauração recupera a antiga prática de a assembleia, já instruída pela Palavra que acabou de ouvir, interceder explicitamente pela Igreja, pelo mundo, pelos sofredores e pela própria comunidade — o mesmo espírito de intercessão que, no rito antigo, aparece de forma mais implícita dentro do próprio Cânon."
    ] },
    { id: "exp-novo-ofertorio", titulo: "4. Apresentação das Oferendas", pending: false, text: [
      { note: "Acompanha o Ordinário (Novo Ordo): seção \"Apresentação das Oferendas\"." },
      { section: "As Bênçãos do Pão e do Vinho" },
      "As fórmulas \"Bendito sejais, Senhor... fruto da terra e do trabalho do homem\" preservam o mesmo espírito do antigo \"Suscipe, sancte Pater\": reconhecer que aquilo que se oferece a Deus já é, ao mesmo tempo, dom d'Ele mesmo (fruto da terra) e fruto do esforço humano — e que ambos serão transformados no mistério que se aproxima.",
      { section: "Água e Vinho, Lavabo" },
      "A mistura de água ao vinho e o lavar das mãos do sacerdote mantêm exatamente o mesmo simbolismo da Missa antiga: a união da humanidade com a divindade de Cristo, e o desejo de pureza interior antes de tocar as coisas sagradas.",
      { section: "Orai, Irmãos" },
      "O convite \"Orai, irmãos\" e sua resposta são praticamente idênticos, palavra por palavra, ao Orate Fratres tridentino — um dos pontos de maior continuidade textual entre as duas formas do rito."
    ] },
    { id: "exp-novo-prece-eucaristica", titulo: "5. Prece Eucarística", pending: false, text: [
      { note: "Acompanha o Ordinário (Novo Ordo): seção \"Prece Eucarística\"." },
      { section: "O Diálogo e o Sanctus" },
      "\"Corações ao alto\" / \"Elevai os corações\" e o Sanctus que se segue são idênticos, em estrutura e sentido, aos do rito antigo — continuam sendo o convite para erguer a alma da terra ao céu e unir a voz da Igreja à dos anjos.",
      { section: "Várias Prece Eucarísticas" },
      "Diferente do Missal antigo (que tem um único Cânon fixo), o Missal atual oferece várias Preces Eucarísticas (I a IV, e outras para ocasiões específicas). A Prece Eucarística I, também chamada \"Cânon Romano\", é, na prática, a tradução quase literal do próprio Cânon tridentino — quem reza essa opção está, em espírito e conteúdo, muito próximo do rito antigo.",
      { section: "Consagração e Aclamação" },
      "As palavras da Consagração permanecem as mesmas palavras de Cristo na Última Ceia. A diferença mais visível é a introdução, logo depois, de uma aclamação do povo (\"Anunciamos, Senhor, a vossa morte...\") — uma resposta explícita da assembleia ao mistério que acabou de se realizar, algo que no rito antigo permanece implícito no silêncio adorante."
    ] },
    { id: "exp-novo-comunhao", titulo: "6. Pai-Nosso, Paz e Agnus Dei", pending: false, text: [
      { note: "Acompanha o Ordinário (Novo Ordo): seção \"Rito da Comunhão\"." },
      { section: "Pai-Nosso e Embolismo" },
      "A estrutura é idêntica à da Missa antiga: o Pai-Nosso, seguido de uma oração do sacerdote que desenvolve seu último pedido (\"livrai-nos do mal\") — o chamado embolismo —, concluído por uma aclamação do povo.",
      { section: "Rito da Paz" },
      "A saudação da paz, sempre presente na estrutura da Missa (ainda que nem sempre com o gesto físico de trocar a paz com os vizinhos, que é opcional e pode ser omitido a critério do celebrante), continua a preparar os fiéis para a Comunhão com o espírito do próprio Cristo: \"não olheis aos nossos pecados, mas à fé da vossa Igreja\".",
      { section: "Agnus Dei" },
      "Texto idêntico ao da Missa antiga, cantado ou recitado enquanto se parte a Hóstia — mantendo o mesmo simbolismo do Cordeiro pascal e o mesmo gesto de fração que recorda a Última Ceia e Emaús."
    ] },
    { id: "exp-novo-ritos-finais", titulo: "7. Ritos Finais", pending: false, text: [
      { note: "Acompanha o Ordinário (Novo Ordo): seção \"Ritos Finais\"." },
      { section: "Bênção e Despedida" },
      "A estrutura — bênção seguida do envio (\"Ide em paz\") — é a mesma da Missa antiga, com a mesma raiz etimológica da palavra \"Missa\": um envio, uma missão que continua depois que os fiéis deixam o templo.",
      { section: "O que Mudou" },
      "A principal ausência, em relação ao rito antigo, é o Último Evangelho — não existe mais como parte fixa do Ordinário. Nada impede, porém, que o fiel, já em oração pessoal de ação de graças depois da Missa, relembre por devoção própria esse mesmo texto do prólogo de São João, mantendo viva a memória do mistério central que sustenta toda a Missa, em qualquer uma de suas formas."
    ] }
  ],

  novoOrdo: [
    { id: "ritos-iniciais-novo", titulo: "Ritos Iniciais", pending: false, text: [
      { note: "Fonte: Missal Romano — Ordinário da Missa, Secretariado Nacional de Liturgia (Portugal). Reunido o povo, sacerdote e ministros encaminham-se para o altar enquanto se executa o cântico de entrada. Terminado o cântico, todos de pé, fazem o sinal da cruz." },
      { quem: "Sacerdote", texto: "Em nome do Pai e do Filho e do Espírito Santo." },
      { quem: "Povo", texto: "Amém." },
      { section: "Saudação" },
      { greetingSlot: true },
      { section: "Ato Penitencial" },
      { note: "O sacerdote convida os fiéis ao ato penitencial:" },
      { quem: "Sacerdote", texto: "Irmãos: Para celebrarmos dignamente os santos mistérios, reconheçamos que somos pecadores." },
      { note: "Guardam-se alguns momentos de silêncio. Confessemos os nossos pecados." },
      { quem: "Todos", texto: "Confesso a Deus todo-poderoso e a vós, irmãos, que pequei muitas vezes, por pensamentos e palavras, atos e omissões." },
      { note: "(batendo no peito)" },
      { quem: "Todos", texto: "Por minha culpa, minha culpa, minha tão grande culpa." },
      { quem: "Todos", texto: "E peço à Virgem Maria, aos anjos e santos, e a vós, irmãos, que rogueis por mim a Deus, nosso Senhor." },
      { note: "Segue-se a absolvição do sacerdote:" },
      { quem: "Sacerdote", texto: "Deus todo-poderoso tenha compaixão de nós, perdoe os nossos pecados e nos conduza à vida eterna." },
      { quem: "Povo", texto: "Amém." },
      { section: "Kýrie" },
      { quem: "Todos", texto: "Senhor, tende piedade de nós. Senhor, tende piedade de nós. Cristo, tende piedade de nós. Cristo, tende piedade de nós. Senhor, tende piedade de nós. Senhor, tende piedade de nós." },
      { section: "Glória" },
      { note: "Segundo as rubricas do dia (omitido no Advento e na Quaresma), canta-se ou recita-se o hino:" },
      { quem: "Todos", texto: "Glória a Deus nas alturas e paz na terra aos homens por Ele amados. Senhor Deus, Rei dos céus, Deus Pai todo-poderoso: nós Vos louvamos, nós Vos bendizemos, nós Vos adoramos, nós Vos glorificamos, nós Vos damos graças, por vossa imensa glória. Senhor Jesus Cristo, Filho unigénito, Senhor Deus, Cordeiro de Deus, Filho de Deus Pai: Vós que tirais o pecado do mundo, tende piedade de nós; Vós que tirais o pecado do mundo, acolhei a nossa súplica; Vós que estais à direita do Pai, tende piedade de nós. Só Vós sois o Santo; só Vós, o Senhor; só Vós, o Altíssimo, Jesus Cristo, com o Espírito Santo, na glória de Deus Pai. Amém." }
    ] },
    { id: "profissao-fe-novo", titulo: "Profissão de Fé (Credo)", pending: false, text: [
      { note: "Terminada a homilia, canta-se ou recita-se, quando é prescrito, o símbolo ou profissão de fé." },
      { section: "Símbolo Niceno-Constantinopolitano" },
      "Creio em um só Deus, Pai todo-poderoso, Criador do céu e da terra, de todas as coisas visíveis e invisíveis. Creio em um só Senhor, Jesus Cristo, Filho unigénito de Deus, nascido do Pai antes de todos os séculos: Deus de Deus, luz da luz, Deus verdadeiro de Deus verdadeiro; gerado, não criado, consubstancial ao Pai. Por Ele todas as coisas foram feitas. E por nós, homens, e para nossa salvação desceu dos céus.",
      { note: "Todos se inclinam às palavras seguintes:" },
      "E encarnou pelo Espírito Santo, no seio da Virgem Maria, e Se fez homem.",
      "Também por nós foi crucificado sob Pôncio Pilatos; padeceu e foi sepultado. Ressuscitou ao terceiro dia, conforme as Escrituras; e subiu aos céus, onde está sentado à direita do Pai. De novo há de vir em sua glória, para julgar os vivos e os mortos; e o seu reino não terá fim. Creio no Espírito Santo, Senhor que dá a vida, e procede do Pai e do Filho; e com o Pai e o Filho é adorado e glorificado: Ele que falou pelos profetas. Creio na Igreja una, santa, católica e apostólica. Professo um só batismo para remissão dos pecados. E espero a ressurreição dos mortos, e a vida do mundo que há de vir. Amen.",
      { section: "Símbolo dos Apóstolos (Advento, Quaresma e Tempo Pascal)" },
      { note: "Em vez do símbolo niceno-constantinopolitano, sobretudo no Tempo da Quaresma e no Tempo Pascal, pode dizer-se o símbolo batismal da Igreja Romana, chamado \"Símbolo dos Apóstolos\"." },
      "Creio em Deus, Pai todo-poderoso, Criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor,",
      { note: "Todos se inclinam às palavras seguintes:" },
      "que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria;",
      "padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus; está sentado à direita de Deus Pai todo-poderoso, de onde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo; na santa Igreja católica; na comunhão dos santos; na remissão dos pecados; na ressurreição da carne; na vida eterna. Amen."
    ] },
    { id: "oracao-fieis-novo", titulo: "Oração Universal", pending: false, text: [
      { note: "Segue-se a oração universal ou oração dos fiéis. O sacerdote convida os fiéis à oração com uma breve admonição inicial. As intenções são propostas por um diácono, leitor ou outra pessoa idónea, e o povo participa com uma invocação ou rezando em silêncio." },
      { section: "Ordem habitual das intenções" },
      "a) pelas necessidades da Igreja;",
      "b) pelas autoridades civis e pela salvação do mundo;",
      "c) por aqueles que sofrem dificuldades;",
      "d) pela comunidade local.",
      { note: "O sacerdote termina com uma oração conclusiva. No fim, o povo aclama: Amém." }
    ] },
    { id: "liturgia-eucaristica-novo", titulo: "Apresentação das Oferendas", pending: false, text: [
      { note: "Terminada a oração universal, inicia-se o cântico do ofertório. O sacerdote toma a patena com o pão e, elevando-a com ambas as mãos, diz em voz baixa (ou em voz alta, se não houver cântico):" },
      { quem: "Sacerdote", texto: "Bendito sejais, Senhor, Deus do universo, pelo pão que recebemos da vossa bondade, fruto da terra e do trabalho do homem, que hoje Vos apresentamos e que para nós se vai tornar pão da vida." },
      { note: "O povo pode aclamar: \"Bendito seja Deus para sempre.\" O diácono ou o sacerdote deita vinho e um pouco de água no cálice, dizendo em silêncio:" },
      { quem: "Sacerdote", texto: "Pelo mistério desta água e deste vinho, sejamos participantes da divindade d'Aquele que assumiu a nossa humanidade." },
      { note: "O sacerdote toma o cálice e, elevando-o, diz em voz baixa (ou em voz alta, se não houver cântico):" },
      { quem: "Sacerdote", texto: "Bendito sejais, Senhor, Deus do universo, pelo vinho que recebemos da vossa bondade, fruto da videira e do trabalho do homem, que hoje Vos apresentamos e que para nós se vai tornar vinho da salvação." },
      { note: "O povo pode aclamar: \"Bendito seja Deus para sempre.\" O sacerdote inclina-se e diz em silêncio:" },
      { quem: "Sacerdote", texto: "De coração humilhado e contrito sejamos recebidos por Vós, Senhor. Assim o nosso sacrifício seja agradável a vossos olhos, Senhor nosso Deus." },
      { note: "Pode incensar-se as oblatas, a cruz, o altar, o sacerdote e o povo. O sacerdote lava as mãos, dizendo em silêncio:" },
      { quem: "Sacerdote", texto: "Lavai-me, Senhor, da minha iniquidade e purificai-me do meu pecado." },
      { section: "Orai, irmãos" },
      { quem: "Sacerdote", texto: "Orai, irmãos, para que o meu e vosso sacrifício seja aceite por Deus Pai todo-poderoso." },
      { quem: "Povo", texto: "Receba o Senhor por tuas mãos este sacrifício, para glória do seu nome, para nosso bem e de toda a santa Igreja." },
      { note: "Segue-se a oração sobre as oblatas, própria do dia, concluída por \"Por Cristo nosso Senhor\" (ou fórmula equivalente). O povo aclama: Amém." }
    ] },
    { id: "prece-eucaristica-novo", titulo: "Prece Eucarística", pending: false, text: [
      { note: "O sacerdote começa a Oração eucarística. Abrindo os braços, diz:" },
      { quem: "Sacerdote", texto: "O Senhor esteja convosco." },
      { quem: "Povo", texto: "Ele está no meio de nós." },
      { quem: "Sacerdote", texto: "Corações ao alto." },
      { quem: "Povo", texto: "O nosso coração está em Deus." },
      { quem: "Sacerdote", texto: "Dêmos graças ao Senhor nosso Deus." },
      { quem: "Povo", texto: "É nosso dever, é nossa salvação." },
      { note: "Segue-se o prefácio, próprio do tempo litúrgico ou da festa (uma vasta coleção de textos que ainda vamos incluir, seguindo o mesmo mecanismo de seleção automática pela data que já usamos na Saudação). Ao final do prefácio, todos cantam ou recitam:" },
      { quem: "Todos", texto: "Santo, Santo, Santo, Senhor Deus do Universo. O céu e a terra proclamam a vossa glória. Hossana nas alturas. Bendito o que vem em nome do Senhor. Hossana nas alturas." },
      { note: "Segue-se o Cânon (a Prece Eucarística propriamente dita — há várias, I a IV e outras), com a Consagração do pão e do vinho. Este texto extenso ainda está pendente de transcrição. Após a Consagração, o sacerdote diz:" },
      { quem: "Sacerdote", texto: "Eis o mistério da fé!" },
      { quem: "Povo", texto: "Anunciamos, Senhor, a vossa morte, proclamamos a vossa ressurreição. Vinde, Senhor Jesus!" },
      { note: "A Prece Eucarística termina com a doxologia final (\"Por Cristo, com Cristo, em Cristo...\") e a grande aclamação \"Amém\" de todo o povo — texto ainda pendente." }
    ] },
    { id: "pai-nosso-novo", titulo: "Rito da Comunhão: Pai-Nosso, Paz e Agnus Dei", pending: false, text: [
      { section: "Pai-Nosso" },
      { note: "De braços abertos, o sacerdote convida à oração, e todos rezam juntos:" },
      { quem: "Todos", texto: "Pai nosso, que estais nos céus, santificado seja o vosso nome; venha a nós o vosso reino; seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal." },
      { note: "O sacerdote prossegue sozinho:" },
      { quem: "Sacerdote", texto: "Livrai-nos de todo o mal, Senhor, e dai ao mundo a paz em nossos dias, para que, ajudados pela vossa misericórdia, sejamos sempre livres do pecado e de toda a perturbação, enquanto esperamos a vinda gloriosa de Jesus Cristo nosso Salvador." },
      { quem: "Povo", texto: "Vosso é o reino e o poder e a glória para sempre." },
      { section: "Rito da Paz" },
      { quem: "Sacerdote", texto: "Senhor Jesus Cristo, que dissestes aos vossos apóstolos: Deixo-vos a paz, dou-vos a minha paz: não olheis aos nossos pecados, mas à fé da vossa Igreja, e dai-lhe a união e a paz, segundo a vossa vontade, Vós que viveis e reinais pelos séculos dos séculos." },
      { quem: "Povo", texto: "Amém." },
      { quem: "Sacerdote", texto: "A paz do Senhor esteja sempre convosco." },
      { quem: "Povo", texto: "O amor de Cristo nos uniu." },
      { note: "Saudai-vos na paz de Cristo. Todos se saúdam, segundo os costumes locais, em sinal de mútua paz, comunhão e caridade." },
      { section: "Agnus Dei" },
      { quem: "Todos", texto: "Cordeiro de Deus, que tirais o pecado do mundo, tende piedade de nós. Cordeiro de Deus, que tirais o pecado do mundo, tende piedade de nós. Cordeiro de Deus, que tirais o pecado do mundo, dai-nos a paz." },
      { section: "Comunhão" },
      { note: "O sacerdote, voltado para o povo, eleva a hóstia e diz:" },
      { quem: "Sacerdote", texto: "Felizes os convidados para a Ceia do Senhor. Eis o Cordeiro de Deus, que tira o pecado do mundo." },
      { quem: "Todos", texto: "Senhor, eu não sou digno de que entreis em minha morada, mas dizei uma palavra e serei salvo." },
      { note: "Ao distribuir a Comunhão, o sacerdote (ou o diácono) diz a cada um:" },
      { quem: "Sacerdote", texto: "O Corpo de Cristo." },
      { quem: "Povo", texto: "Amém." }
    ] },
    { id: "ritos-finais-novo", titulo: "Ritos Finais", pending: false, text: [
      { note: "Seguem-se, se os houver, breves avisos ao povo. Em seguida, faz-se a despedida. O sacerdote, voltado para o povo, diz:" },
      { quem: "Sacerdote", texto: "O Senhor esteja convosco." },
      { quem: "Povo", texto: "Ele está no meio de nós." },
      { note: "O sacerdote abençoa o povo:" },
      { quem: "Sacerdote", texto: "Abençoe-vos Deus todo-poderoso, Pai, Filho e Espírito Santo." },
      { quem: "Povo", texto: "Amém." },
      { note: "Em certos dias e ocasiões especiais, a bênção tem textos próprios (bênção solene ou oração sobre o povo) — ainda a transcrever. Por fim, o diácono ou o sacerdote diz:" },
      { quem: "Diácono", texto: "Ide em paz e o Senhor vos acompanhe." },
      { quem: "Povo", texto: "Graças a Deus." },
      { note: "No Tempo Pascal, em vez da fórmula acima: \"Levai a todos a alegria do Senhor ressuscitado. Aleluia. Ide em paz e o Senhor vos acompanhe.\"" }
    ] }
  ]
};

/* ===========================================================
   Jaculatórias — pequenas invocações para o widget da Home.
   Todas extraídas de trechos já transcritos em outras partes
   do app (Coroazinha, Ladainhas, Orações Diárias, Via Sacra).
   =========================================================== */
const JACULATORIAS = [
  { texto: "Doce Coração de Maria, sede minha salvação.", fonte: "Oração da Manhã" },
  { texto: "Minha Mãe, preservai-me do pecado mortal.", fonte: "Ao Santo Anjo" },
  { texto: "Sacratíssimo Coração de Jesus, tende piedade de nós.", fonte: "Ladainha do Sagrado Coração" },
  { texto: "Ó Maria, concebida sem pecado, rogai por nós, que recorremos a vós.", fonte: "Jaculatórias a Nossa Senhora" },
  { texto: "Jesus, Maria, José, esclarecei-nos, socorrei-nos, salvai-nos.", fonte: "Consagração a Nossa Senhora" },
  { texto: "Seja amado por toda parte o Sagrado Coração de Jesus.", fonte: "Jaculatórias" },
  { texto: "Seja bendita a santa, imaculada e puríssima Conceição da bem-aventurada Virgem Maria, Mãe de Deus.", fonte: "Jaculatórias a Nossa Senhora" },
  { texto: "Dulcíssimo Coração de Maria, sede minha salvação!", fonte: "Via Sacra" },
  { texto: "Meu Jesus, misericórdia!", fonte: "Via Sacra" },
  { texto: "Ó Maria, Mãe de Deus e Mãe de misericórdia, rogai por nós e pelos fiéis defuntos.", fonte: "Jaculatórias a Nossa Senhora" },
  { texto: "São José, modelo e padroeiro dos devotos do Sagrado Coração de Jesus, rogai por nós.", fonte: "Oração da Manhã" },
  { texto: "Conhecidos, louvados, benditos, amados, servidos e glorificados sejam para sempre e por toda parte o divino Coração de Jesus e o puríssimo Coração de Maria.", fonte: "Jaculatórias a Nossa Senhora" },
  { texto: "Santo anjo do Senhor, meu zeloso guardador, se a ti me confiou a piedade divina, sempre me rege, guarda, governa e ilumina.", fonte: "Ao Santo Anjo" },
  { texto: "Jesus, não sejais juiz para mim, mas sede antes meu Salvador.", fonte: "Ato de Contrição (preces da noite)" }
];
