import { Injectable } from '@angular/core';

import { Manga } from '../models/manga';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  mangas: Manga[];

  constructor() {
    this.mangas = [
      {
        title: 'Goblin Slayer',
        imageUrl: './assets/Goblin-Slayer.jpg',
        author: ['Kumo'],
        target: 'Seinen',
        originalRun: '25 Maggio 2016 - in corso',
        publishedBy: 'J-Pop',
        genre: ['Dark fantasy'],
        plot: "La storia è ambientata in un mondo fantastico dall'ambientazione medievale. Oltre agli umani e gli animali, esistono gli elfi, i nani e molte altre creature fantastiche, compresi i mostri e i demoni. Esistono la magia e i miracoli e, inoltre, in cielo brillano due lune. Una professione molto nota è quella dell'avventuriero: chi desidera dedicare la propria vita ad aiutare il prossimo, combattendo mostri e altre minacce, può rivolgersi alla Gilda, che gli assegnerà la licenza e la targhetta indicante il suo grado. Gli avventurieri, infatti, hanno un grado che indica la loro forza, abilità, esperienza, e soprattutto gli permette di accedere a missioni dalla sempre maggiore difficoltà oltre che più redditizie. 1) PLATINO: Il grado più alto, raggiunto finora soltanto da 16 avventurieri. Sono gli avventurieri dai poteri eccezionali che hanno salvato il mondo. 2) ORO: Avventurieri la cui abilità viene richiesta per gestire incarichi di importanza nazionale. 3) ARGENTO: Combattenti veterani. Sono coloro che si occupano di incarichi difficili e pericolosi, in cui sono richieste grandi abilità e competenze specifiche. Sono loro che si occupano di tenere sotto controllo le zone calde e di frontiera, assicurando che i mostri non causino troppi problemi. 4) BRONZO 5) RUBINO 6) SMERALDO 7) ZAFFIRO 8) FERRO 9) OSSIDIANA 10) PORCELLANA: Il grado più basso, che comprende coloro che sono diventati avventurieri da poco e gli avventurieri che, a causa di crimini, sono stati degradati. In base alle imprese, o alle abilità dimostrate portando a termine le missioni, un avventuriero può essere promosso ad un grado più alto. Se invece un avventuriero si dimostra disonesto e la Gilda lo scopre, può essere degradato.",
        volumes: 12,
        isComplete: false
      },
      {
        title: 'Uzumaki',
        imageUrl: './assets/Uzumaki.jpg',
        author: ['Junji Itō'],
        target: 'Seinen',
        originalRun: 'Agosto 1998 - Settembre 1999',
        publishedBy: 'Star Comics',
        genre: ['Horror', 'Soprannaturale'],
        plot: "Kirie Goshima e il suo fidanzato Shuichi Saito vivono nella piccola e fittizia cittadina di Kurozu-cho, una città che è maledetta da eventi soprannaturali che riguardano le spirali. Col progredire della storia Kirie e Shuichi sono testimoni di come la maledizione della spirale colpisca le persone intorno a loro facendo diventare i cittadini ossessionati e paranoici sulle spirali. Alla fine, Kirie è colpita dalla maledizione e i suoi capelli iniziano ad allungarsi in maniera innaturale diventando simili a delle spirali ipnotizzando la gente, succhiando la sua energia vitale e strangolandola ogni volta che lei prova a tagliarli; Shuichi però riesce a tagliarli e a salvarla. La maledizione continua a colpire la città fino a quando una tempesta evocata dalla maledizione distrugge la maggior parte degli edifici. Gli unici edifici rimasti sono antiche e abbandonate case a schiera, che i cittadini sono prima costretti a occupare e poi a conviverci quando la maledizione le rende sempre più affollate. Kirie e Shuichi escogitano un piano per scappare da Kurozu-cho ma quando tentano di scappare i loro sforzi non hanno successo. Dopo essere tornati in città, scoprono che sono passati molti anni da quando se ne sono andati. Gli altri cittadini hanno ampliato le case a schiera finché non si sono collegate in un'unica struttura che forma un modello a spirale. Kirie e Shuichi decidono di cercare i genitori di Kirie, andando al centro della spirale. Al centro, cadono in una voragine dove scoprono i cadaveri dei genitori di Kirie e degli altri cittadini e un'antica città completamente ricoperta dalle spirali. Shuichi esorta Kirie ad andare avanti e trovare un modo per fermare la maledizione, ma lei risponde che non ha più forze e che vuole stare con lui. I due si uniscono e i loro corpi si torcono e avvolgono insieme come risultato della maledizione. Mentre giacciono insieme, Kirie scopre che la maledizione si è conclusa nello stesso tempo in cui è iniziata e conclude che la maledizione è eterna e che tutti gli eventi si ripeteranno nel caso in cui una nuova Kurozu-cho verrà costruita dove era stabilita la precedente.",
        volumes: 2,
        isComplete: true
      },
      {
        title: 'Astra - Lost in Space',
        imageUrl: './assets/Astra-Lost-In-Space.jpg',
        author: ['Kenta Shinohara'],
        target: 'Shōnen',
        originalRun: 'Maggio 2016 - Dicembre 2017',
        publishedBy: 'Star Comics',
        genre: ['Fantascienza'],
        plot: "Nel 2063 i viaggi nello spazio sono più semplici e sfruttabili anche a livello commerciale. Un gruppo di studenti della scuola superiore Caird parte verso il vicino pianeta McPa per trascorrere il suo campeggio planetario quando, giunti da poco a destinazione, vengono spediti lontano anni luce nello spazio a causa di una misteriosa e sconosciuta sfera di luce. Fluttuando nell'orbita di un pianeta sconosciuto, il gruppo scopre che vicino a loro vi è una vecchia nave spaziale abbandonata. Collaborando insieme, si riuniscono a bordo del velivolo e pianificano il proprio ritorno a casa: un viaggio di 5 012 anni luce durante il quale effettueranno soste su altri pianeti per effettuare rifornimento di cibo ed acqua, affrontando diverse peripezie. Il lungo e pericoloso viaggio verso casa a bordo della nave, che chiameranno Astra, porterà con sé nuove rivelazioni sui personaggi, rafforzerà i legami dei suoi partecipanti e li porterà a scoprire come la posta in gioco del loro viaggio sia di gran lunga più grande di quanto potessero immaginare. Poiché il sistema di comunicazione della nave viene distrutto ed a volte vi è la ricomparsa della sfera di luce che tentare di catapultare di nuovo nello spazio i protagonisti, i ragazzi capiscono che tra di loro c'è un traditore. Tra sospetti e dubbi, un atterraggio su un pianeta compromette irrimediabilmente Astra. Sul pianeta scoprono una nave gemella dell'Astra ma anch'essa non più in grado di volare; fortunatamente. combinando le parti ancora integre delle due navi, riescono a riprendere il viaggio. All'interno della nave gemella scoprono inoltre in ibernazione uno degli esploratori, che entrerà poi a far parte dell'equipaggio dell'Astra. Durante il viaggio i ragazzi scoprono che sono tutti dei cloni, mentre Paulina, convinta di ritornare sulla Terra, scopre che la destinazione è il pianeta Astra. Sebbene i nomi geografici coincidano tra i due pianeti, la storia diverge dall'anno 1963, dove per i ragazzi vi è una Terza Guerra Mondiale, mentre per Paulina si è appena conclusa la Crisi dei missili di Cuba. Giunti quasi a destinazione smascherano Charce, che confessa di essere il traditore, il quale tenterà poi di suicidarsi attivando una sfera di luce. Kanata lo salverà a prezzo però del suo braccio destro. Charce, pentito delle sue azioni, racconterà tutti i segreti custoditi dal Regno di Vixia. La storia mantenuta segreta racconta infatti che l'umanità scoprì che la Terra sarebbe stata colpita da un meteorite e che l'unica possibilità di sopravvivenza sarebbe stata quella di trovare un nuovo pianeta. Mettendo da parte conflitti e rivalità partirono così diverse astronavi (tra cui quella di Paulina) alla ricerca del nuovo pianeta, il quale, una volta trovato, venne chiamato Astra. L'emigrazione dell'umanità fu eseguita attraverso i Wormhole (le sfere di luce), che fungevano da portali tra i due pianeti. Una volta giunti su Astra sfortunatamente cominciarono nuovamente i conflitti tra le popolazioni, portando così ad una decimazione dei terrestri. Per evitare nuovamente un simile evento i sopravvissuti decisero per l'appunto di cancellare il concetto di nazioni e religioni, di distruggere i congegni dei Wormhole - utilizzati infine anche per assassinii ed affidandone il compito all'industria creatrice, la Vixia - e di eliminare dalla storia l'emigrazione della Terra, riavvolgendo la storia di cento anni. L'equipaggio capisce così il pianta sconosciuto su cui trovarono in orbita l'astronave Astra altri non era che la Terra, ridotta ad un mondo ghiacciato. I ragazzi invece vengono a conoscenza che sono stati cresciuti come \"ricambi\" per i loro originali: il \"padre\" di Zack infatti stava studiando la possibilità di trasferire la coscienza di un individuo su un altro, rendendolo teoricamente immortale. La maggior parte di loro fu quindi cresciuta con quello scopo, mentre lo scopo di Aries e Funicia era quello di fungere da banca degli organi per i loro originali. La principessa di Vixia, Seira, quando scoprì che venne clonata a sua insaputa dal padre affidò la sua clone, che chiamò Aries, ad una cameriera, facendola fuggire dal regno. Venne deciso degli originali di eliminare i cloni al fine di evitare la prigione, in quanto venne varata una legge che ne impediva la loro creazione. Al ritorno a casa i ragazzi riescono quindi a smascherare gli originali, a farli imprigionare ed a far emergere la vera storia del pianeta Astra. L'astronave Astra verrà invece esposta in un museo. Successivamente Paulina diventa professoressa di storia presso la scuola Caird, Kanata ed Aries si fidanzano (come avvenuto in precedenza per Zack e Quitterie), Quitterie diventa una modella, Ulgar diventa giornalista, Yun-Hua diventa una cantante e Charce il nuovo Re di Vixia. Kanata, grazie ai proventi di un libro da lui scritto, riuscirà poi ad acquistare la vecchia astronave Astra, partendo per l'esplorazione assieme a Zack e Charce.",
        volumes: 5,
        isComplete: true
      },
      {
        title: 'Rent a Girlfriend',
        imageUrl: './assets/Rent-A-Girlfriend.jpg',
        author: ['Reiji Miyajima'],
        target: 'Shōnen',
        originalRun: '12 Luglio 2017 - in corso',
        publishedBy: 'J-Pop',
        genre: ['Commedia romantica', 'Harem'],
        plot: "VOLUMI 1-10: Kazuya Kinoshita, ragazzo di vent'anni vergine, dopo essere stato lasciato dalla fidanzata Mami Nanami, decide di iscriversi al servizio Diamond e noleggiare per un'ora una \"fidanzata\", al costo di 5000 yen; attratto dalla foto del suo profilo, Kazuya sceglie Chizuru Mizuhara, una sua coetanea che al primo incontro si dimostra la sua \"ragazza dei sogni\". La sera stessa, ripensando all'accaduto, il giovane si convince tuttavia che la ragazza abbia voluto soltanto giocare con i suoi sentimenti, e scrive una recensione negativa. A un incontro successivo, Chizuru rinfaccia a Kazuya il suo comportamento, mostrando una personalità forte e decisa, oltre che completamente diversa da quella usata per lavoro; nel corso della discussione, Kazuya riceve tuttavia una chiamata ed è costretto a recarsi all'ospedale, dove sua nonna era stata ricoverata per un malore. Poiché il \"noleggio\" non era ancora scaduto, la ragazza decide di seguire Kazuya all'ospedale e si presenta come sua fidanzata; la nonna del giovane rimane entusiasta, mostrando fin da subito simpatia per Chizuru. Il giorno seguente, Kazuya scopre non solo che Chizuru frequenta la sua stessa università — indossando un travestimento per non farsi riconoscere — ma che è anche la sua vicina di casa. Sebbene Chizuru inizialmente non intenda proseguire il \"noleggio\", essendo contro le politiche della società mescolare il lavoro alla vita privata, accetta per non far soffrire la nonna di Kazuya; peraltro, quest'ultima era diventata amica della nonna della giovane, la quale era anch'essa venuta a conoscenza della relazione. Mami scopre tuttavia la vera natura del \"rapporto\" tra i due e cerca di impedirlo; similmente Ruka Sarashina, un'altra ragazza a noleggio, si innamora di Kazuya e assume nei suoi confronti comportamenti morbosi, tanto da \"costringerlo\" a concedergli un periodo di fidanzamento di prova. Nel frattempo, Kazuya viene a conoscenza delle motivazioni che avevano spinto Chizuru a diventare una ragazza a noleggio: il suo sogno di diventare attrice, la necessità di ottenere del denaro per frequentare un'accademia e contemporaneamente l'aver bisogno di \"esercitarsi nella recitazione\"; lo scopo finale sarebbe stato apparire in un film prima della morte di sua nonna, alla quale era estremamente legata. VOLUMI 11+: Il giovane cerca di aiutare Chizuru in ogni modo, organizzando anche una campagna di raccolta fondi su Internet, gesto che colpisce profondamente la ragazza; quest'ultima, pur cercando di mantenere esclusivamente un \"cordiale rapporto tra vicini di casa\", si accorge di non essere più per lui una semplice fidanzata a noleggio. Kazuya invece è certo dei suoi sentimenti nei confronti di Chizuru e tenta anche di dichiararsi a lei; tuttavia, a causa di numerosi inconvenienti, della presenza di Mami e Ruka e temendo che Chizuru non ricambi ciò che prova, non riesce a trovare il coraggio definitivo per agire. Kazuya entra poi in contatto con due ragazze dal carattere diametralmente opposto: Sumi Sakurasawa e Mini Yaemori; la prima è una fidanzata a noleggio estremamente timida con il sogno di diventare una idol, la seconda una youtuber che diventa vicina di casa del ragazzo. Spinto dalle due ragazze, che cercano di farlo dichiarare a Chizuru, Kazuya riesce infine a terminare le riprese della pellicola e Chizuru ha modo di mostrare il lavoro svolto alla nonna, che poco dopo muore. Nel frattempo Kazuya decide di stare vicino a Chizuru, così da farle superare il triste momento: la ragazza, pur cercando di non farlo vedere a nessuno, viene infatti colta da improvvisi attacchi di tristezza nel ricordare i momenti passati con la nonna. Kazuya decide infine di spendere i propri risparmi per noleggiare Chizuru un giorno intero, e farla realmente divertire; la ragazza inizia così a comprendere quanto il giovane abbia fatto e continui a fare per lei, pur non essendo sicura dei propri sentimenti e incerta sul futuro.",
        volumes: 14,
        isComplete: false
      },
      {
        title: 'Frieren - Oltre la fine del viaggio',
        imageUrl: './assets/Frieren-Oltre-La-Fine-Del-Viaggio.jpg',
        author: ['Kanehito Yamada', 'Tsukasa Abe'],
        target: 'Shōnen',
        originalRun: '28 Febbraio 2020 - in corso',
        publishedBy: 'J-Pop',
        genre: ['Avventura', 'Drammatico', 'Fantasy'],
        plot: "La storia inizia con il trionfale ritorno nella capitale da parte di un gruppo di avventurieri, che, dopo dieci anni di peripezie, hanno finalmente sconfitto il Re Demone e salvato l'umanità. Il gruppo di eroi è composto dal paladino umano Himmel, dal guerriero nanico Eisen, dal chierico umano Heiter e dalla longeva maga elfa Frieren. Prima di separarsi definitivamente, ammirano insieme l'Era Meteors, una pioggia di meteoriti che si verifica una volta ogni cinquant'anni. Frieren accetta di rivederli in futuro e propone loro di condurli in un posto migliore per osservare l'evento celeste la prossima volta che si sarebbe verificato; il gruppo si congeda e la maga intraprende un viaggio per il mondo alla ricerca di nuovi incantesimi da imparare. Cinquant'anni dopo, Frieren torna nella capitale, trovando la città cambiata e i suoi ex compagni molto invecchiati. Dopo aver visto per l'ultima volta la pioggia di meteoriti insieme ai compagni, Himmel muore di vecchiaia. Durante i solenni funerali, Frieren è tormentata dal senso di colpa per non aver mai cercato di conoscerlo meglio. Vent'anni dopo, Frieren si ricongiunge per qualche tempo con Heiter, che, ormai in punto di morte, le affida il compito di prendersi cura di Fern, una bambina orfana che era stata adottata dal chierico, e di insegnarle la magia. Qualche anno dopo, in seguito ad un breve incontro con Eisen, che affida loro il suo allievo Stark, Frieren e Fern partono alla volta del Paradiso, un luogo nel quale riposano le anime dei defunti, allo scopo di rivedere Himmel, al quale l'elfa vuole finalmente esprimere i suoi sentimenti.",
        volumes: 1,
        isComplete: false
      },
      {
        title: 'Chainsaw Man',
        imageUrl: './assets/Chainsaw-Man.jpg',
        author: ['Tatsuki Fujimoto'],
        target: 'Shōnen',
        originalRun: '3 Dicembre 2018 - in corso',
        publishedBy: 'Planet Manga',
        genre: ['Azione', 'Dark fantasy', 'Horror'],
        plot: "Denji, un orfano senzatetto, incontra Pochita, il Diavolo Motosega, ferito a cui dona il suo sangue, stringendo inizialmente una semplice amicizia. Insieme si guadagnano da vivere cacciando Diavoli sottobanco per la yakuza per ripagare i debiti di Denji; questo finché un giorno, in uno scontro con il Diavolo Zombi (che aveva preso il controllo dei suoi creditori), Denji viene apparentemente ucciso. Pur di farlo sopravvivere, Pochita prende il posto del suo cuore, stringendo con lui un vero e proprio patto e trasformandolo così in Chainsaw Man. Divenuto un ibrido umano-diavolo, Denji elimina il Diavolo Zombi ed incontra Makima, un'ufficiale del reparto Cacciatori di Diavoli della Pubblica Sicurezza, la quale, viste le sue capacità di combattimento e affezionatasi rapidamente a lui, decide di arruolarlo nella Quarta Divisione della Pubblica Sicurezza, una sezione sperimentale nella quale viene messo alla prova l'impiego di diavoli non ostili agli esseri umani nella lotta contro altri diavoli. Qui Denji conoscerà lo scontroso Aki Hayakawa, Power ed altri Cacciatori umani e non umani con i quali inizierà la caccia al Diavolo Pistola, personificazione del terrore umano delle armi da fuoco, responsabile di una delle più orribili stragi della storia e ricercato in tutto il mondo in seguito alla sua improvvisa scomparsa.",
        volumes: 12,
        isComplete: false
      },
      {
        title: '20th Century Boys (Ultimate Deluxe Edition)',
        imageUrl: './assets/20th-Century-Boys.jpg',
        author: ['Naoki Urasawa'],
        target: 'Seinen',
        originalRun: '1999 - 2006',
        publishedBy: 'Planet Manga',
        genre: ['Fantascienza', 'Thriller'],
        plot: "Nel 1969 un gruppo di bambini composto da Kenji, Occio, Yoshitsune, Maruo, Yukiji e Donkey costruiscono un nascondiglio in un campo da utilizzare come base segreta e dove nascondersi per scambiarsi manga e ascoltare la radio. Per celebrare l'evento Occio disegna un simbolo che rappresenti la loro amicizia, composto da un occhio ed una mano che indica. Iniziano anche a fantasticare su uno scenario apocalittico, in cui dei cattivi tentano di distruggere il mondo mentre loro tentano di fermarli, trascrivendolo in un libro che chiamano Libro delle profezie. Trent'anni dopo, negli anni novanta, Kenji gestisce un minimarket insieme alla madre e prendendosi cura della figlia della sorella scomparsa. Dopo aver ricevuto la notizia che Donkey si è suicidato, Kenji viene a conoscenza di una setta comandata da una persona mascherata che si fa chiamare 'L'Amico', che utilizza lo stesso simbolo che i bambini crearono trent'anni prima e compiendo eventi simili a quelli descritti nel Libro delle profezie. Kenji radunerà così i vecchi compagni per capire chi si nasconda dietro la maschera dell'Amico e fermarlo prima che distrugga il genere umano.",
        volumes: 4,
        isComplete: false
      },
      {
        title: 'Mieruko-chan',
        imageUrl: './assets/Mieruko-Chan.jpg',
        author: ['Tomoki Izumi'],
        target: 'Seinen',
        originalRun: '2018 - in corso',
        publishedBy: 'Planet Manga',
        genre: ['Commedia', 'Horror', 'Scolastico', 'Soprannaturale'],
        plot: "Un giorno, una ragazza inizia improvvisamente a vedere delle strane creature farfuglianti che non possono essere viste da nessun altro. La ragazza non prova a sfuggirgli, né tenta di affrontarli... invece, fa di tutto per mantenere le apparenze e vivere come al solito.",
        volumes: 3,
        isComplete: false
      },
      {
        title: 'Slam Dunk',
        imageUrl: './assets/Slam-Dunk.jpg',
        author: ['Takehiko Inoue'],
        target: 'Shōnen',
        originalRun: '1 Ottobre 1990 - 17 Giugno 1996',
        publishedBy: 'Planet Manga',
        genre: ['Commedia', 'Spokon (pallacanestro)'],
        plot: "Hanamichi Sakuragi è una matricola del liceo Shohoku ed è sostanzialmente un attaccabrighe che non passa certo inosservato con i suoi capelli rossi fuori dal comune e con la sua altezza. Entrerà nel mondo del basket dopo essersi innamorato di una ragazza che si chiama Haruko, alla quale questo sport piace molto... quindi per conquistarla decide di entrare nella squadra di basket della sua scuola... anche se è totalmente a digiuno di questo sport, di cui non conosce nemmeno le regole! Gli inizi non saranno quindi certo dei più semplici, ma sotto sotto si potrà pian piano scoprire in lui un talento innato per questo sport!",
        volumes: 20,
        isComplete: true
      },
      {
        title: "I''s",
        imageUrl: "./assets/I''S.jpg",
        author: ['Masakazu Katsura'],
        target: 'Shōnen',
        originalRun: '1997 - 2000',
        publishedBy: 'Star Comics',
        genre: ['Sentimentale'],
        plot: "Seto Ichitaka, uno studente di liceo, è innamorato della sua compagna di classe Iori Yoshizuki, una modella e aspirante attrice di teatro, a cui non riesce a confessare i suoi sentimenti a causa di un trauma subito in passato da una ragazza per cui aveva un'infatuazione che l'aveva brutalmente respinto. Grazie a un colpo di fortuna, entra in coppia con Iori per il comitato organizzato per lo spettacolo di benvenuto dei nuovi studenti, coppia a cui la ragazza dà il nome I''s, dal nome dei due ragazzi. Seto riesce così ad allacciare un rapporto con lei, tentando di capire se Iori corrisponde i suoi sentimenti.",
        volumes: 15,
        isComplete: true
      },
      {
        title: "Welcome to the NHK",
        imageUrl: './assets/Welcome-To-The-NHK.jpg',
        author: ['Tatsuhiko Takimoto', 'Kendi Oiwa'],
        target: 'Shōnen',
        originalRun: '24 Giugno 2004 - 6 Giugno 2007',
        publishedBy: 'J-Pop',
        genre: ['Commedia drammatica'],
        plot: "Tatsuhiro Satō è un giovane che da quattro anni vive praticamente recluso nel suo piccolo appartamento di Tokyo e incarna perfettamente lo stereotipo dell'hikikomori giapponese: ha interrotto qualsiasi legame con il mondo esterno e si mantiene a malapena con i soldi che gli inviano i genitori (per questo è definito anche NEET). Un giorno, mentre è come al solito nel suo appartamento ad oziare e fantasticare, bussa alla porta un'anziana testimone di Geova accompagnata da una giovane. Questa successivamente si mette in contatto con Satō, affermando di conoscere il modo per curarlo dalla sua malattia. Misaki, questo il suo nome, gli porge quindi un contratto e lo invita a seguire alcune lezioni private di psicoanalisi improvvisata che terrà per lui la sera, al parco di Mita 4-Chome in cui egli suole recarsi. Sebbene il giovane inizialmente provi diffidenza e tenti in tutti i modi di cancellare l'offerta dalla sua mente, alla fine accetta e ogni sera si reca al parco vicino per ascoltare le lezioni della ragazza. Misaki appare timida e introversa almeno quanto Satō, ma si rifiuta di fornire al ragazzo informazioni su di sé, soprattutto perché si interessi tanto a lui e come fa a conoscere tutti i particolari della sua vita. I giorni si susseguono e Satō sembra effettivamente sollevarsi dalla sua condizione di hikikomori, almeno finché vecchie conoscenze dal passato non tornano a farsi vive scaricando i loro problemi sul ragazzo e mettendolo nuovamente con le spalle al muro.",
        volumes: 8,
        isComplete: true
      },
      {
        title: "Trigun",
        imageUrl: './assets/Trigun.jpg',
        author: ['Yasuhiro Nightow'],
        target: 'Shōnen',
        originalRun: 'Maggio 1995 - Febbraio 1997',
        publishedBy: 'J-Pop',
        genre: ['Fantascienza', 'Steampunk'],
        plot: "Vash the Stampede, noto come tifone umanoide, è il primo uomo nella storia dichiarato calamità naturale. Ritenuto responsabile di disastri in molte città, ha su di sé una taglia da 60 miliardi di $$ (doppi dollari). La sua vera natura è però ben lontana dall'essere malvagia e crudele come tutti s'immaginano: Vash è in realtà un tipo spensierato e un pacifista convinto, sempre pronto a soccorrere e salvare i più deboli, e con due sole grandi passioni, le belle donne e le ciambelle. Dotato di una sensibilità estrema e al tempo stesso di una grandissima determinazione e forza interiore (per non parlare della grande resistenza del suo corpo) Vash aiuta e difende i più deboli, cercando sempre di evitare di ferire a morte i criminali che affronta, capace di mettere a repentaglio la sua vita per aiutare tutti i bisognosi che incontra lungo il suo cammino. L'intera storia si svolge sulla superficie di un lontano e desertico pianeta, Gunsmoke, illuminato da due soli e circondato da cinque lune, colonizzato un secolo prima da navi spaziali terrestri e appartenenti al progetto Seeds. È un mondo duro e selvaggio, in cui i coloni umani faticano a mantenere un'esistenza dignitosa, tra la continua regressione tecnologica (Gunsmoke è molto simile al vecchio West americano) e le faide di antiche e potenti famiglie rivali. Vash è anche ingiustamente incolpato della distruzione di un'intera cittadina, July City, e proprio per questa fama di tifone umanoide, una società di assicurazioni assegna due agenti, Meryl Strife e Milly Thompson, sui suoi passi nella speranza di rintracciarlo e ridurre al minimo i danni da lui provocati. Da questo momento in poi faranno la loro comparsa nella serie decine di nuovi personaggi, tra cui Legato Bluesummer, che avverte Vash di avergli messo alle costole ben 12 sicari nel tentativo di farlo fuori, e Nicholas D. Wolfwood, un reverendo nonché pistolero bravo quasi quanto Vash, che lo aiuterà a sconfiggere i 12 assassini della Gung-Ho Guns seguendolo ovunque vada e aiutandolo nelle sue folli imprese pur essendo a sua volta uno dei Gung-Ho Guns. La sfida finale sarà l'incontro tra il tifone umanoide e suo fratello Knives, uno scontro da cui dipenderà il destino dell'intero genere umano.",
        volumes: 2,
        isComplete: true
      },
      {
        title: "Trigun Maximum",
        imageUrl: './assets/Trigun-Maximum.jpg',
        author: ['Yasuhiro Nightow'],
        target: 'Seinen',
        originalRun: 'Dicembre 1997 - Maggio 2007',
        publishedBy: 'J-Pop',
        genre: ['Fantascienza', 'Steampunk'],
        plot: "Continuazione della prima serie, Trigun, edito da Shonen Gahosha nella sua collana Young King OURs a partire dal gennaio del 1998, concluso il 30 marzo 2007 con la pubblicazione del 102° capitolo, per un totale di 14 volumi. Una prima edizione italiana del manga, ad opera della Dynamic Italia, si è interrotta al nono numero. Nel dicembre del 2007 la JPop ha iniziato la pubblicazione della riedizione di Maximum a partire dal primo numero, prevedendo la pubblicazione di tutti i tankōbon originali. Trigun narra le vicende di Vash the Stampede, primo caso nella storia di uomo dichiarato calamità naturale. Tutto ciò che si sa sul suo conto è che si tratta di un pericolosissimo ricercato alto, biondo, con un cappotto rosso, una grossa arma e soprattutto con una taglia sulla testa da 60 miliardi di $$ (doppi dollari), conosciuto nel mondo con il soprannome di tifone umanoide a causa dei tanti disastri che lascia dietro di sé viaggiando di città in città. Ma la vera natura del misterioso pistolero è ben lontana dall'essere malvagio e crudele che tutti si immaginano; Vash è in realtà un tipo spensierato e un pacifista convinto, sempre pronto ad intervenire per salvare gli altri e con due sole grandi passioni: le belle donne e le ciambelle. L'intera storia si svolge sulla superficie di un lontano e desertico pianeta, Gunsmoke, illuminato da due soli e circondato da cinque lune, colonizzato poco più di un secolo prima da decine di navi spaziali provenienti dalla Terra e appartenenti al progetto Seeds. È un mondo duro e selvaggio, in cui i coloni umani faticano a mantenere un'esistenza dignitosa, tra la continua regressione tecnologica (Il mondo di Trigun è molto simile al vecchio West americano) e le faide di antiche e potenti famiglie rivali. Incolpato anche della distruzione di July City, due agenti della società di assicurazioni Bernardelli vengono messe sui passi del tifone umanoide nella speranza di rintracciarlo e ridurre al minimo i danni da lui provocati. I loro nomi sono Meryl Strife e Milly Thompson.",
        volumes: 14,
        isComplete: true
      },
      {
        title: "Domestic Girlfriend",
        imageUrl: './assets/Domestic-Girlfriend.jpg',
        author: ['Kei Sasuga'],
        target: 'Shōnen',
        originalRun: '23 Aprile 2014 - 10 Giugno 2020',
        publishedBy: 'Planet Manga',
        genre: ['Sentimentale'],
        plot: "Natsuo Fujii è uno studente delle superiori e aspirante scrittore, innamorato della propria insegnante Hina. Essendo questo un amore destinato a non essere corrisposto, nel tentativo di lasciarsi alle spalle questa cotta decide di avere un rapporto con una ragazza appena conosciuta ad un incontro con gli amici, Rui Tachibana. Il loro legame finisce subito lì, ma in seguito la situazione si complica quando Natsuo viene a sapere da suo padre che ha deciso di risposarsi e che le figlie della futura matrigna sono proprio Hina e Rui.",
        volumes: 1+'-'+10+'/'+13+'-'+28+' (vol.11 e vol.12 mancanti)',
        isComplete: false
      },
      {
        title: "Kaiju No. 8",
        imageUrl: './assets/Kaiju-n8.jpg',
        author: ['Naoya Matsumoto'],
        target: 'Shōnen',
        originalRun: '3 Luglio 2020 - in corso',
        publishedBy: 'Star Comics',
        genre: ['Avventura', 'Fantascienza'],
        plot: "In un Giappone minacciato dai kaiju, mostri mortali che il mondo è costretto a fronteggiare, Hibino Kafka è un trentaduenne con il sogno di entrare nella Japan Defense Force, un'organizzazione militare incaricata di neutralizzare i kaiju. Si pone un problema, Hibino si trasforma improvvisamente in un kaiju venendo riconosciuto dalla Japan Defence Force come nemico e identificato con il nome in codice Kaiju No. 8.",
        volumes: 8,
        isComplete: false
      },
      {
        title: "La Regina d'Egitto",
        imageUrl: "./assets/La-Regina-D'Egitto.jpg",
        author: ['Chie Inudō'],
        target: 'Seinen',
        originalRun: '2014 - 2021',
        publishedBy: 'J-Pop',
        genre: ['Drammatico', 'Storico'],
        plot: "L'Egitto dei Faraoni si avvia verso una nuova era: il matrimonio fra la giovane Hatshepsut e il fratellastro Sethi rendono quest'ultimo il legittimo erede al trono con il nome di Thutmose II. Sotto la maschera da moglie perfetta, tuttavia, Hatshepsut nasconde una rabbia profonda...la giovane, infatti, non si accontenta di essere regina in quanto sposa, ma aspirerebbe al trono di Faraone. Perché mai non dovrebbe poter ereditare il titolo solo per il fatto di essere nata donna? Hatshepsut inizia così una guerra alle tradizioni, rifiutando i limiti a lei imposti.",
        volumes: 9,
        isComplete: true
      },
      {
        title: "Kill la Kill (Complete Edition)",
        imageUrl: './assets/Kill-La-Kill.jpg',
        author: ['Trigger', 'Ryō Akizuki'],
        target: 'Seinen',
        originalRun: '4 Ottobre 2013 - 4 Febbraio 2015',
        publishedBy: 'Planet Manga',
        genre: ['Azione', 'Commedia', 'Fantasy'],
        plot: "La storia ruota attorno a due studentesse, Ryuko Matoi e Satsuki Kiryuin, impegnate a combattere l'una contro l'altra in una feroce lotta. In un campus nel quale, più che lo studio, sembra dominare la legge del più forte, l'arrivo della protagonista, armata di una spada e di voglia di vendetta, sconvolgerà ogni equilibrio.",
        volumes: 1,
        isComplete: true
      },
      {
        title: "Steins;Gate",
        imageUrl: './assets/Steins;Gate.jpg',
        author: ['5pb.Nitroplus', 'Sarachi Yomi', 'Sakae Saitoh'],
        target: 'Seinen',
        originalRun: '26 Settembre 2009 - 27 Luglio 2011',
        publishedBy: 'J-Pop',
        genre: ['Fantascienza', 'Thriller'],
        plot: "La atoria è incentrata sulle avventure di un gruppo di amici che, modificando un apparecchio a microonde, riescono a creare un congegno in grado di mandare messaggi nel passato. Tuttavia, le loro sperimentazioni non passeranno inosservate perchè esse rappresentano un punto di partenza per la creazione della macchina del tempo e nel giro di breve tempo un organizzazione inzierà a dar loro la caccia con lo scopo di appropriarsi di queste scoperte e sfruttarle per i loro interessi. Per Rintaro Okabe e i suoi amici inizierà un’estenuante caccia all’uomo a cui i ragazzi tenteranno di sfuggire in tutti i modi, anche alterando il tempo.",
        volumes: 3,
        isComplete: true
      },
      {
        title: "Steins;Gate 0",
        imageUrl: './assets/Steins;Gate-0.jpg',
        author: ['5pb.Nitroplus', 'Taka Himeno'],
        target: 'Seinen',
        originalRun: '4 Luglio 2017 - 4 Febbraio 2020',
        publishedBy: 'J-Pop',
        genre: ['Fantascienza', 'Thriller'],
        plot: "Rintarō Okabe non è riuscito a salvare Kurisu Makise, finendo invece per ucciderla. Colto dalla disperazione, smette di comportarsi come \"Kyōma Hōōin\" e continua ad essere tormentato dai flashback della morte di Kurisu. I membri del laboratorio sono preoccupati per lui e, sotto consiglio di Mayuri, comincia un trattamento presso una clinica della salute. La sua vita torna ad essere stravolta quando, mentre stava aiutando ad un seminario universitario, incontra il professore e supervisore della ricerca di Kurisu, Alexis Leskinen, e la sua assistente, Maho Hiyajo. Kurisu ha lavorato nel loro stesso laboratorio all'Università Victor Chondria, studiando le intelligenze artificiali. Da loro viene a sapere del sistema \"Amadeus\", che può incamerare la memoria di un essere umano e creare una sua emulazione. Così la vita di Rintarō cambia completamente quando Leskinen gli chiede di diventare un tester nell'interazione con Amadeus, permettendogli di entrare in contatto con le memorie di Kurisu raccolte nel sistema. Come tester Rintarō continua a parlare con \"Kurisu\" usando un'applicazione sul cellulare. Con il susseguirsi delle conversazioni, così com'era successo con la vera Kurisu, la loro relazione comincia a farsi più forte. Comunque non riesce a dimenticare l'angoscia che lo attanaglia. I membri del laboratorio festeggiano Natale e Capodanno e lo tengono su di morale: le ragazze si vestono da Babbo Natale e da miko. Nel frattempo Daru frequenta Yuki Amane, la futura madre di Suzuha, incoraggiato proprio da Suzuha. Poi, mentre i membri del laboratorio sono riuniti, un misterioso gruppo mascherato con armi da fuoco attacca il laboratorio, e Rintarō è colpito dai ricordi delle numerose morti di Mayuri nella linea di universo. Ora il microonde telefonico non esiste più, ma potrebbe esserci un altro motivo per cui una qualche organizzazione li sta prendendo di mira. Successivamente, mentre Rintarō è nel laboratorio, riceve una chiamata di Amadeus Kurisu che gli chiede aiuto.",
        volumes: 6,
        isComplete: true
      },
      {
        title: "Bad Company",
        imageUrl: './assets/Bad-Company.jpg',
        author: ['Tōru Fujisawa'],
        target: 'Shōnen',
        originalRun: 'Giugno 1997',
        publishedBy: 'Dynit',
        genre: ['Dramma adolescenziale'],
        plot: "Ryuji Danma è uno studente trasferitosi alla scuola media Hacchu a causa del suo carattere turbolento e ribelle. La mattina del suo primo giorno nella nuova scuola assiste ad una rissa il cui vincitore ha i capelli coperti di sangue e che sembra avere una forza superiore alla norma. Così Ryuji tenterà, una volta scoperto che il ragazzo, Eikichi Onizuka, è un suo compagno di classe, di provocarlo allo scopo di sfidarlo e vedere chi dei due sia il più forte in combattimento. Ma col tempo e con l'aiuto di Sakura Yamato, Ryuji scoprirà il lato migliore di Eikichi e quanto lui tenga ai suoi amici aiutandolo a vendicarli contro una banda di teppisti emergente.",
        volumes: 1,
        isComplete: true
      },
      {
        title: "Shonan junai gumi - La banda dell'amore puro di Shonan",
        imageUrl: './assets/Shonan-Junai-Gumi.jpg',
        author: ['Tōru Fujisawa'],
        target: 'Shōnen',
        originalRun: '1991 - 1996',
        publishedBy: 'Dynit',
        genre: ['Azione', 'Commedia', 'Demenziale', 'Ecchi', 'Drammatico', 'Combattimento', 'Gang giovanili', 'Scolastico'],
        plot: "Eikichi Onizuka e Ryuji Danma sono due teppisti liceali che, nonostante la loro fama nelle risse, dove sono conosciuti col nome Oni-Baku, non hanno fortuna con le ragazze e sono ancora vergini. Tenteranno così di liberarsi della loro verginità cambiando scuola e stile di vita. Nonostante ciò la loro fama li rende bersagli dei vari teppisti e delle varie bande che tentano di raggiungere il titolo di più forte di Shōnan. Così tra una rissa e l'altra tenteranno di approcciare più ragazze possibili per raggiungere finalmente il loro obiettivo.",
        volumes: 15,
        isComplete: true
      },
      {
        title: "GTO - Great Teacher Onizuka",
        imageUrl: './assets/GTO.jpg',
        author: ['Tōru Fujisawa'],
        target: 'Shōnen',
        originalRun: '8 Gennaio 1997 - 13 Febbraio 2002',
        publishedBy: 'Dynit',
        genre: ['Commedia', 'Drammatico', 'Gang giovanili', 'Scolastico'],
        plot: "Eikichi Onizuka è uno studente universitario ventiduenne ed è un ex mototeppista nonché membro del duo Oni-Baku. Durante il suo soggiorno a Kichijōji, riesce a ottenere un appuntamento con una ragazza, scoprendo però che è in realtà fidanzata con un vecchio e brutto insegnante del liceo. Colpito da questo evento, decide di intraprendere la carriera di docente, in maniera tale da poter corteggiare le studentesse a cui insegnerà. Riesce a ottenere una laurea per l'insegnamento in un'università di terz'ordine ma, a causa di una sbadataggine, non partecipa al concorso per l'abilitazione, trovandosi dunque impossibilitato all'insegnamento in una scuola pubblica. Prova così un colloquio in una scuola privata, l'istituto Seirin: nonostante il pessimo esito, viene assunto dalla direttrice della scuola grazie alla forza di spirito dimostrata quando uno studente tenta di aggredire il vicepreside. Viene così assegnato al ruolo di professore responsabile della classe 3-4 delle scuole medie, composta di studenti problematici che hanno causato il licenziamento dei professori precedenti.",
        volumes: 13,
        isComplete: true
      },
      {
        title: "Alma",
        imageUrl: './assets/Alma.jpg',
        author: ['Shinji Mito'],
        target: 'Seinen',
        originalRun: '2019 - 2020',
        publishedBy: 'J-Pop',
        genre: ['Fantascienza', 'Drammatico', 'Avventura', 'Psicologico'],
        plot: "Rei e Rice sono due giovani ragazzi che sono cresciuti insieme in questo mondo post-apocalittico, circondati da rovine e deserti. Un giorno, dopo lungo tempo che non incontravano un altro essere umano, vengono improvvisamente attaccati da una misteriosa donna, che rivela a Rei un segreto che gli era stato tenuto nascosto per quindici anni...",
        volumes: 4,
        isComplete: true
      },
      {
        title: "Parasite in Love",
        imageUrl: './assets/Parasite-In-Love.jpg',
        author: ['Sugaru Miaki', 'Yuuki Hotate'],
        target: 'Shounen',
        originalRun: '2018 - 2029',
        publishedBy: 'J-Pop',
        genre: ['Drammatico', 'Psicologico', 'Sentimentale', 'Soprannaturale'],
        plot: "La storia tratta di un uomo le cui tendenze compulsive gli rendono impossibile mantenere a lungo un lavoro, e di una ragazza che marina la scuola e ama gli insetti. I due si incontrano, si aiutano a vicenda per reintegrarsi nella società, e si innamorano. Tuttavia, c'è un problema: i parassiti che vivono nelle loro teste.",
        volumes: 3,
        isComplete: true
      },
      {
        title: "Karma of Purgatory",
        imageUrl: './assets/Karma-Of-Purgatory.jpg',
        author: ['Shun Hirose', 'Negi Haruba'],
        target: 'Shounen',
        originalRun: '2014 - 2015',
        publishedBy: 'J-Pop',
        genre: ['Drammatico', 'Mistero', 'Scolastico', 'Soprannaturale'],
        plot: "La vita di Makoto è l'inferno in terra. Vittima di bullismo a scuola e picchiato regolarmente anche dal padre, il ragazzo sembra vivere per inerzia aggrappandosi al suo debole per Kirisaki, una sua compagna di classe. Quando la ragazza loda il suo talento nel disegno, Makoto sembra finalmente trovare uno spiraglio di speranza...fino a quando, poco dopo, scopre che Kirisaki è la ragazza del capo dei bulli che lo perseguitano - e che è stata lei stessa ad incitarli ad umiliarlo. In preda alla disperazione e senza più una ragione di vita, Makoto si toglie la vita saltando dal tetto della scuola. Quando torna in sé, Makoto si ritrova davanti ad una misteriosa donna che afferma il ragazzo si trovi in purgatorio; qui, la sua missione (o meglio, punizione) sarà quella di salvare la vita delle sei persone sulle quali il suicidio di Makoto avrà ripercussioni negative.",
        volumes: 5,
        isComplete: true
      },
      {
        title: "Rascal Does Not Dream of Bunny Girl Senpai",
        imageUrl: './assets/Bunny-Girl-Senpai.jpg',
        author: ['Hajime Kamoshida', 'Tsugumi Nanamiya'],
        target: 'Seinen',
        originalRun: '2015 - 2018',
        publishedBy: 'J-Pop',
        genre: ['Commedia', 'Scolastico', 'Sentimentale', 'Slice of life', 'Soprannaturale'],
        plot: "Proprio mentre iniziano a spargersi in giro delle voci incontrollate su una misteriosa \"sindrome della pubertà\", il liceale Sakuta Azusagawa vede improvvisamente una ragazza in costume da coniglietta apparire davanti a lui. Si tratta di Mai Sakurajima, una sua compagna di scuola più grande che tempo prima era stata una famosa attrice e che ora è in un periodo di pausa dalle scene. A quanto pare però, solo Sakuta riesce a vedere l'aspetto da coniglietta della ragazza e decide quindi di conoscerla meglio per cercare di risolvere il mistero.",
        volumes: 2,
        isComplete: true
      },
      {
        title: "Rascal Does Not Dream of Petite Devil Kohai",
        imageUrl: './assets/Petite-Devil-Kohai.jpg',
        author: ['Hajime Kamoshida', 'Tsugumi Nanamiya'],
        target: 'Seinen',
        originalRun: '2018',
        publishedBy: 'J-Pop',
        genre: ['Commedia', 'Scolastico', 'Sentimentale', 'Slice of life', 'Soprannaturale'],
        plot: "Sequel di Rascal Does Not Dream of Bunny Girl Senpai.",
        volumes: 2,
        isComplete: true
      },
      {
        title: "Ossa - Stand by Me, My Dear",
        imageUrl: './assets/Ossa.jpg',
        author: ['Yae Utsumi'],
        target: 'Shōnen',
        originalRun: '1 Maggio 2016 - 11 Febbraio 2018',
        publishedBy: 'Planet Manga',
        genre: ['Thriller', 'Horror', 'Commedia', 'Sentimentale'],
        plot: "Quando avevano undici anni, cinque amici (Shintaro, Tsubaki, Akira, Haruka e Ryu) uccisero un uomo e ne nascosero il cadavere; il macabro evento li ha fatti restare in contatto per i cinque anni successivi, quando improvvisamente iniziano a essere minacciati telefonicamente da qualcuno che conosce il loro segreto.",
        volumes: 7,
        isComplete: true
      },
      {
        title: "Zetman",
        imageUrl: './assets/Zetman.jpg',
        author: ['Masakazu Katsura'],
        target: 'Seinen',
        originalRun: '31 Ottobre 2002 - 24 Luglio 2014',
        publishedBy: 'Star Comics',
        genre: ['Fantascienza'],
        plot: "I player, mostri crudeli e pericolosi creati in laboratorio dalla misteriosa Amagi Corporation, sono utilizzati come bestie da combattimento per sadici giochi su cui scommettono numerosi magnati e personaggi facoltosi. Un giorno, senza preavviso, i player organizzano una ribellione, compiono una strage e riescono a fuggire dalla cattività arrivando a mescolarsi con la gente comune. Il presidente dalla Amagi Corporation, il vecchio Amagi, responsabile della sciagura, decide di dedicare il resto della sua vita a combattere i player, cercandoli e scovandoli con tutti i mezzi a sua disposizione, fino alla creazione di Z.E.T., un essere perfetto, forte, veloce ed imbattibile, con il solo scopo di eliminare tutti i player in circolazione. Il dottor Goro Kanzaki, uno degli scienziati di Amagi, riesce a dare vita al piccolo Jin, un bambino destinato a diventare Z.E.T., ma, ripensandoci, decide di fuggire con il bambino e sparire dalla circolazione. Il piccolo Jin si ritrova però presto solo, dopo che un player è riuscito a scovarli ed eliminare Kanzaki. Con la morte di Kanzaki si perde così il segreto di come trasformare Jin nell'essere perfetto, Z.E.T., essendo lo scienziato l'unico a conoscerne il procedimento. Il presidente Amagi, che negli anni non si è mai arreso, riesce a ritrovare un Jin ormai ragazzo, ma ogni tentativo di farlo trasformare si rivela un insuccesso. Intanto i player più evoluti hanno dato vita ad una misteriosa organizzazione, chiamata Evol, che intende liberarsi di Z.E.T., e dopo aver trovato il laboratorio nascosto di Amagi, lo attaccano distruggendolo, ma Jin riesce a salvarsi. Il presidente Amagi ha due nipoti, Konoha e Koga Amagi: Konoha, coetanea di Jin, lo aveva conosciuto da bambina e ne è da sempre segretamente innamorata; Koga invece cova l'ambizione di diventare un supereroe e a tale necessità si fa costruire un costume speciale a imitazione di un personaggio dei cartoni animati che guardava da bambino di nome Alphas.",
        volumes: 20,
        isComplete: true
      },
      {
        title: "L'isola dei bambini dimenticati",
        imageUrl: "./assets/L'Isola-Dei-Bambini-Dimenticati.jpg",
        author: ['Kei Sanbe'],
        target: 'Seinen',
        originalRun: '21 Dicembre 2008 - 3 Luglio 2009',
        publishedBy: 'Star Comics',
        genre: ['Horror', 'Thriller'],
        plot: "La storia è raccontata dal punto di vista di due fratelli, Kokoro e Yume, che vengono mandati su un'isola remota dopo che i genitori li hanno abbandonati. Lì iniziano a frequentare la scuola dove incontrano quattro insegnanti adulti e quattro bambini orfani o abbandonati che sono gli unici altri abitanti dell'isola, insieme al proprietario dell'isola. Dopo aver sentito voci e scoperto una stanza segreta, i bambini iniziano a sospettare che gli adulti stiano cercando di nascondere loro qualcosa. Cercano di scoprire di cosa si tratta e, mentre lo scoprono, mettono in gioco le loro vite.",
        volumes: 4,
        isComplete: true
      },
      {
        title: "Call of the Night",
        imageUrl: './assets/Call-Of-The-Night.jpg',
        author: ['Kotoyama'],
        target: 'Shōnen',
        originalRun: '18 Maggio 2022 - in corso',
        publishedBy: 'J-Pop',
        genre: ['Commedia romantica', 'Soprannaturale'],
        plot: "Ko Yamori è incapace di dormire e di trovare soddisfazione nella sua vita quotidiana, per questo smette di andare a scuola e inizia a vagare senza meta di notte per le strade della città. Una sera incontra Nazuna Nanakusa, una strana ragazza un po' più grande di lui, che si rivela una vampira e che mostra a Ko le gioie di camminare nella notte. A quel punto anche Ko vuole diventare un vampiro, ma per raggiungere il suo obiettivo deve prima innamorarsi di Nazuna.",
        volumes: 8,
        isComplete: false
      },
      {
        title: "The Witch and the Beast",
        imageUrl: './assets/The-Witch-And-The-Beast.jpg',
        author: ['Kousuke Satake'],
        target: 'Seinen',
        originalRun: '6 Novembre 2016 - in corso',
        publishedBy: 'Planet Manga',
        genre: ['Avventura', 'Dark fantasy', 'Thriller'],
        plot: "Un giorno, in una città fanno la loro apparizione Ashaf, un uomo pacato dai lineamenti delicati che trasporta una bara sulla schiena, e Guideau, un affascinante ragazza dalle lunghe zanne e con gli occhi di una bestia, i quali sono alla ricerca di una strega. Mentre sono in cerca di informazioni, arriva un gigantesco squalo volante che vuole portare la devastazione sul luogo ma sopraggiunge Ione, una famosa strega che viene considerata dagli abitanti come un'eroina, che riesce ad uccidere facilmente il mostro grazie ai suoi poteri magici. A questo punto Guideau rivela di odiare a morte Ione perché la considera un mostro come il resto delle streghe, così la attacca ma viene fermata dai poteri della sua avversaria, dopodiché si calma grazie all'intervento di Ashaf che invece tiene un tono più diplomatico. Il duo è così costretto a ritirarsi per aver fatto infuriare la folla e promettono di incontrarsi in un secondo momento. In seguito raggiungono la villa dove abita la donna e qui incontrano Mary, una ragazza a cui è stata salvata la vita da Ione, che spiega che per molti anni questa città ha perseguitato le streghe a causa di una di loro che era malvagia e per fare ammenda Ione ha deciso di utilizzare i propri poteri per salvare le persone con l'intento di riscattare il nome delle streghe. Tornati all'hotel, Ashaf conduce delle indagini in merito ad Ione e dopo essersi accertato che questa strega è malvagia, procede assieme a Guideau per ucciderla, dato che il loro compito è quello di dare caccia alle streghe che portano scompiglio.",
        volumes: 3,
        isComplete: false
      },
      {
        title: "Insomniacs After School",
        imageUrl: './assets/Insomniacs-After-School.jpg',
        author: ['Makoto Ojiro'],
        target: 'Seinen',
        originalRun: '20 Maggio 2019 - in corso',
        publishedBy: 'J-Pop',
        genre: ['Commedia', 'Sentimentale', 'Slice of life'],
        plot: "Gli studenti Ganta Nakami e Isaki Magari soffrono di insonnia e un giorno si incontrano per caso nel vecchio osservatorio della loro scuola. Dal momento che quella stanza è inutilizzata da anni e tutti gli studenti se ne tengono alla larga credendola infestata dai fantasmi, i due ragazzi decidono di usarla come il loro rifugio segreto in cui ritrovarsi e recuperare qualche minuto di sonno.",
        volumes: 4,
        isComplete: false
      },
      {
        title: "Love After World Domination",
        imageUrl: './assets/Love-After-World-Domination.jpg',
        author: ['Hiroshi Noda', 'Takahiro Wakamatsu'],
        target: 'Shōnen',
        originalRun: '4 Ottobre 2019 - 5 Novembre 2022',
        publishedBy: 'J-Pop',
        genre: ['Commedia romantica', 'Supereroi'],
        plot: "Per combattere la malvagia Società Segreta Gekko che mira alla conquista del mondo, viene formato il gruppo di cinque eroi Freezing Sentai Gelato 5. Il gruppo è composto dal capitano Fudō Aikawa (Red Gelato), Hayato Ōjino (Blue Gelato), Misaki Jingūji (gelato giallo), Daigo Todoroki (gelato verde), Haru Arisugawa (gelato rosa) e supervisionati dal professor Big Gelato, loro leader. La guerra diventa più complicata per gli eroi quando Gekko recluta come nuovo membro la \"Principessa Mietitrice\" Desumi Magahara, una combattente formidabile che prende il ruolo di uno dei sei comandanti dell'organizzazione. Fudō si innamora subito di Desumi e dopo essersi dichiarato la convince ad iniziare una relazione, nonostante siano nemici mortali. Nonostante entrambi siano privi di alcuna esperienza in campo sentimentale, iniziano a frequentarsi in segreto, tenendo nascosta la loro relazione alle rispettive organizzazioni.",
        volumes: 6,
        isComplete: true
      },
      {
        title: "Peep Hole",
        imageUrl: './assets/Peep-Hole.jpg',
        author: ['Wakō Honna'],
        target: 'Seinen',
        originalRun: 'Ottobre 2009 - Febbraio 2013',
        publishedBy: 'J-Pop',
        genre: ['Erotico', 'Sentimentale'],
        plot: "Finite le superiori, Tatsuhiko Kido si trasferisce a Tokyo per frequentare l'università, ma nella casa che ha preso in affitto scopre un'apertura sulla parete, che permette di vedere all'interno dell'appartamento di fianco. Kido, non volendo fare il guardone, decide di coprirla, tuttavia sarà proprio la sua vicina, Emiru Ikuno, a dirgli di non farlo. Anzi, gli propone persino di fare un gioco: il lunedì, il mercoledì e il venerdì lui potrà spiarla e il martedì, il giovedì e il sabato sarà lei a poterlo fare. Kido vorrebbe fare la persona per bene e rifiutare la proposta, ma la ragazza saprà essere molto convincente, riuscendo a fargliela accettare con un ricatto. Il resto della storia segue Kido alle prese con la vita di tutti i giorni, mentre si fa carico del peso di poter essere spiato e incoraggiato a spiare da Emiru. Alla fine Kido cede alla tentazione di spiare Emiru e assiste alla sua masturbazione. Successivamente, Kido scopre che la sua ragazza, Kotobiki Yuri, lo sta usando per far ingelosire il suo fidanzato. Questo spinge Kido a lasciare Yuri, che in seguito cerca di rimediare seducendolo ma viene respinta. Kido alla fine esce con un'altra ragazza, Madoka Watari, che sembra essere perfetta. All'inizio è estremamente riluttante a perdere la verginità, ma Kido riesce a convincerla. Con il passare del tempo, Kido capisce di provare dei seri sentimenti per Emiru e decide di rompere con Madoka. Il giorno della laurea, prima della cerimonia, Emiru lascia Kido, ma decide di integrare una nuova regola nel loro gioco di peeping: la aspetterà un anno prima di andare avanti.",
        volumes: 1,
        isComplete: false
      },
      {
        title: "One-Punch Man",
        imageUrl: './assets/One-Punch-Man.jpg',
        author: ['One', 'Yūsuke Murata'],
        target: 'Seinen',
        originalRun: '14 Giugno 2012 - in corso',
        publishedBy: 'Planet Manga',
        genre: ['Azione', 'Commedia', 'Supereroi'],
        plot: "Dopo tre anni di allenamento, un ragazzo venticinquenne di nome Saitama ha raggiunto il suo obiettivo: essere un eroe talmente forte da poter sconfiggere chiunque con un solo pugno. Tuttavia, essere diventato così potente ha reso talmente facile il ruolo di eroe a Saitama da renderlo perennemente annoiato e portarlo alla depressione. In seguito alla conoscenza del cyborg Genos (che diventerà suo allievo), Saitama entrerà a far parte dell'Associazione Eroi, un'organizzazione che riunisce gli eroi della Terra con lo scopo di combattere criminali, mostri e disastri vari. Il nuovo obiettivo di Saitama diventa quello di scalare le classifiche dell'associazione e diventare uno degli eroi più popolari.",
        volumes: 27,
        isComplete: false
      },
      {
        title: "The Ancient Magus Bride",
        imageUrl: './assets/The-Ancient-Magus-Bride.jpg',
        author: ['Kore Yamazaki'],
        target: 'Shōnen',
        originalRun: '30 Novembre 2013 - in corso',
        publishedBy: 'Star Comics',
        genre: ['Dark fantasy', 'Giallo', 'Soprannaturale'],
        plot: "Orfana di madre e con il padre scomparso da anni, Chise Hatori ha passato l'infanzia affidata a parenti vari senza ricevere amore familiare e perdendo la speranza, finché a quindici anni viene venduta in una strana asta di creature. A comprarla per una cifra esorbitante è Elias Ainsworth, un potente mago dalla testa a forma di cranio canino, che vuole fare di lei la sua apprendista per via dei suoi poteri magici. È così che inizia - con difficoltà per Chise - la sua nuova vita in Inghilterra, in un mondo di fate, draghi ed esseri magici, dove però le sorprese non finiscono qui: Elias annuncia infatti a Chise che diventerà la sua sposa.",
        volumes: 17,
        isComplete: false
      },
      {
        title: "DanDaDan",
        imageUrl: './assets/DanDaDan.jpg',
        author: ['Yukinobu Tatsu'],
        target: 'Shōnen',
        originalRun: '6 Aprile 2021 - in corso',
        publishedBy: 'J-Pop',
        genre: ['Azione', 'Commedia romantica', 'Horror', 'Soprannaturale', 'Thriller'],
        plot: "Momo Ayase è una liceale convinta che gli spiriti esistano e non siano solo frutto del folklore popolare; il suo compagno di scuola Ken Takakura crede invece nell'esistenza degli alieni. Un giorno Momo vede Ken preso di mira dai bulli a causa delle sue credenze e decide quindi di aiutarlo. I due si confidano così le rispettive ossessioni sovrannaturali ma nessuno crede all'altro, perciò decidono di fare una scommessa per dimostrare chi dei due abbia ragione: Momo andrà a visitare un ospedale abbandonato, luogo dove dovrebbero apparire degli alieni, mentre Ken andrà a visitare una vecchia galleria dove a detta di Momo dovrebbero comparire gli spiriti. Raggiunti i due luoghi designati, i ragazzi scopriranno che entrambi avevano ragione e che sia alieni che spiriti esistono, ritrovandosi invischiati in una disputa di proporzioni planetarie tra le fazioni dell'occulto.",
        volumes: 6,
        isComplete: false
      },
      {
        title: "L'isola errante",
        imageUrl: "./assets/L'Isola-Errante.jpg",
        author: ['Kenji Tsuruta'],
        target: 'Seinen',
        originalRun: '2010',
        publishedBy: 'Dynit',
        genre: ['Avventura', 'Mistero', 'Slice of life'],
        plot: "In seguito alla morte del nonno, Mikura sceglie di proseguire il loro servizio di corriere espresso. Insieme al suo gatto avventuroso, Endeavor, e al suo idrovolante, vive tranquillamente la sua vita. Presto, Mikura s'interessa a un'isola misteriosa che pare muoversi e, dopo alcuni sforzi, riesce ad intravederne brevemente qualcosa dal cielo. Ora che la protagonista sa che è tutto vero, lei è determinata a ritrovare quell'isola, non importa come!",
        volumes: 2,
        isComplete: true
      },
      {
        title: "Killing Morph",
        imageUrl: './assets/Killing-Morph.webp',
        author: ['Nokuto Koike', 'Masaya Hokazono'],
        target: 'Seinen',
        originalRun: '2017 - 2019',
        publishedBy: 'Planet Manga',
        genre: ['Azione', 'Mistero', 'Psicologico', 'Thriller'],
        plot: "Afflitta da visioni di uno psicopatico dopo un massacro in una strada trafficata di Ikebukuro, Madoka deve mettere in discussione la propria sanità mentale per capire se ciò che vede stia accadendo realmente.",
        volumes: 4,
        isComplete: true
      },
      {
        title: "Shy",
        imageUrl: './assets/Shy.jpg',
        author: ['Bukimi Miki'],
        target: 'Shounen',
        originalRun: '2019 - in corso',
        publishedBy: 'Planet Manga',
        genre: ['Azione', 'Supereroi'],
        plot: "Verso la metà del ventunesimo secolo, il mondo era sull'orlo di una Terza Guerra Mondiale, tuttavia, la comparsa di eroi da ogni parte del globo ha scongiurato la crisi, dando vita a un nuovo periodo di pace. Tra i vari eroi, in Giappone troviamo la giovane Shy, dietro la cui maschera si nasconde una studentessa di 14 anni di nome Teru Momijiyama. Dopo aver fallito nel salvare una ragazza coinvolta in un incidente in un parco dei divertimenti, la timida Teru si chiude sempre di più in se stessa, almeno fino a quando non trova la giusta motivazione per continuare il suo ruolo di eroina.",
        volumes: 6,
        isComplete: false
      },
      {
        title: "Le montagne della follia",
        imageUrl: './assets/Le-Montagne-Della-Follia.jpg',
        author: ['H.P. Lovecraft', 'Gō Tanabe'],
        target: 'Seinen',
        originalRun: '12 Settembre 2016 - 10 Novembre 2017',
        publishedBy: 'J-Pop',
        genre: ['Horror'],
        plot: "Una squadra di scienziati organizzata dalla Miskatonic University raggiunge il continente antartico per una missione di esplorazione. Lungo il loro cammino fanno una scoperta eccezionale: tra i ghiacci perenni individuano una catena montuosa dalle cime nere in cui rinvengono una antica e ignota città dove dimora un'orrenda creatura.",
        volumes: 4,
        isComplete: true
      },
      {
        title: "Violence Action",
        imageUrl: './assets/Violence-Action.jpg',
        author: ['Shin Sawada', 'Renji Asai'],
        target: 'Seinen',
        originalRun: '26 Aprile 2016 - in corso',
        publishedBy: 'J-Pop',
        genre: ['Azione'],
        plot: "Kei Kikuno è una studentessa universitaria, che studia per superare l'esame di secondo livello in contabilità indetto dalla camera di commercio e industria giapponese e lavora part-time come sicario a pagamento per la Pururun, un'agenzia di ragazze che si fingono escort per potersi infiltrare e portare a termine gli incarichi.",
        volumes: 6,
        isComplete: false
      },
      {
        title: "Sing 'Yesterday' for me",
        imageUrl: './assets/Sing-Yesterday-For-Me.jpg',
        author: ['Kei Tōme'],
        target: 'Seinen',
        originalRun: '15 dicembre 1997 - 3 Giugno 2015',
        publishedBy: 'Planet Manga',
        genre: ['Drammatico', 'Sentimentale', 'Slice of life'],
        plot: "Sebbene sia laureato, Rikuo Uozumi non ha la benché minima idea su quale direzione far prendere al proprio futuro; nel frattempo, lavora così in un negozio. Il ragazzo è inoltre innamorato, ma non corrisposto, di una sua ex-compagna di corso: Shinako Morinome. Nella vita del giovane entra però improvvisamente un'altra ragazza, l'eccentrica Haru Nozaka, la quale porta sempre con sé un piccolo corvo di nome Kansuke. Rikuo si ritrova così a dover maturare e a dover prendere delle decisioni fondamentali, prima che la sua vita vada completamente a rotoli.",
        volumes: 12,
        isComplete: true
      },
      {
        title: "DNA²",
        imageUrl: './assets/DNA2.jpg',
        author: ['Masakazu Katsura'],
        target: 'Shōnen',
        originalRun: '1993 - 1994',
        publishedBy: 'Star Comics',
        genre: ['Fantascienza', 'Azione', 'Sentimentale'],
        plot: "Una ragazza di nome Karin Aoi viene mandata 100 anni nel passato (corrispondente ai giorni nostri) per modificare la storia. Karin è una DNA Operator ed il suo compito è quello di evitare che Junta Momonari diventi il Mega Playboy. Nel futuro da cui lei proviene c'è un grave problema di sovrappopolazione: il Mega Playboy, durante la sua vita, ha avuto un figlio da ognuna delle sue 100 amanti; i figli maschi, a loro volta, hanno avuto 100 figli e nel giro di breve tempo la popolazione mondiale è cresciuta in maniera esponenziale. Dopo aver localizzato il bersaglio si meraviglia che Junta debba diventare il Mega Playboy. Junta infatti ha un grosso problema, se vede una ragazza anche solo in lingerie o ne sfiora il corpo (nonostante la ragazza sia vestita) non riesce a trattenersi dal vomitare. Solo una ragazza non scatena in lui questo effetto: Ami Kurimoto, amica d'infanzia, che si può definire maschiaccio nel comportamento e che lui non considera una ragazza. Proprio a causa di questo grosso dubbio decide che prima di agire deve verificare l'identità di Junta e per questo lo invita in un bar per raccogliere informazioni su di lui nel modo più diretto ed immediato. Lì gli racconta la sua missione e verificati i dati completa la sua missione sparandogli un apposito proiettile inibitorio. Immediatamente scappa via e torna nel nascondiglio della navicella del tempo contenta di aver già completato la sua missione. Lì si accorge però di aver portato via dal futuro il proiettile sbagliato e, facendo fare all'intelligenza artificiale di bordo una verifica, risulta che c'è una percentuale del 120% che questo errore provochi il risveglio del Mega Playboy. Questa notizia sconforta molto Karin che decide di osservare per un po' il comportamento di Junta. Qualcosa in lui effettivamente è cambiato: in situazioni dove c'è qualche ragazza da proteggere Junta si trasforma nel Mega Playboy e la sua forza e coraggio aumentano; tale effetto però dura solo pochi minuti e in breve Junta torna allo stato precedente, con il relativo problema. Nelle sue osservazioni Karin nota che c'è una ragazza che riesce a non scatenare il Mega Playboy, ma anzi riesce a bloccarlo e far tornate in sé Junta: questa ragazza è Ami e per questo Karin cerca di compiere la missione per cui era stata inviata cercando di far mettere insieme i due ragazzi.",
        volumes: 7,
        isComplete: true
      },
      {
        title: "Video Girl Ai",
        imageUrl: './assets/Video-Girl-AI.jpg',
        author: ['Masakazu Katsura'],
        target: 'Shōnen',
        originalRun: '1989 - 1992',
        publishedBy: 'Star Comics',
        genre: ['Fantascienza', 'Sentimentale'],
        plot: "Yota Moteuchi è uno studente liceale di 16 anni che, a causa di una enorme timidezza e di una gran dose di sfortuna, ha difficoltà a rapportarsi con l'altro sesso, venendo così soprannominato da tutti \"Motenai Yoda\", ossia \"senza donne\" (un gioco di parole ottenuto leggendo diversamente gli ideogrammi del suo nome). Il nostro impacciato protagonista è follemente innamorato della sua bella compagna di classe Moemi Hayakawa, ma non riesce mai a cogliere il momento opportuno per confidarle il suo amore. Dopo essere riuscito a diventare suo amico, Yota decide di confidare i suoi sentimenti alla ragazza, ma prima di riuscirvi scopre che Moemi in realtà prova una grande attrazione per Takashi Niimai, il suo migliore amico. Allora Yota, dimostrando un incredibile altruismo, decide di non dichiararsi e, addirittura, di aiutare Moemi a conquistare Takashi. Quest'ultimo però è a conoscenza dei sentimenti che prova Yota per Moemi e per questo sceglie di respingere la ragazza, pensando di fare così un favore al suo amico. Rincasando, Yota si imbatte in uno strano video noleggio, il Gokuraku Club (letteralmente il \"Club Paradiso\"). Incuriosito, vi entra e qui viene subito colpito da un video dal titolo \"Io ti consolerò - Ai Amano\". Convinto che la cassetta sia in realtà un video hard, il giovane decide di portarselo a casa. Ma una grande sorpresa lo aspetta! Infatti, mentre cerca di riprodurre la cassetta con il suo videoregistratore difettoso, il giovane viene investito da un enorme bagliore e scopre con sommo stupore che Ai è comparsa in carne e ossa al suo fianco. Aver riprodotto la cassetta nel videoregistratore rotto ha causato qualche piccolo inconveniente, il carattere e le \"curve\" di Ai risultano cambiati e non si rivelerà affatto tenera e servizievole come previsto, ma un vero e proprio tornado.",
        volumes: 20,
        isComplete: true
      },
    ]
  }

  addManga(newManga: Manga){
    console.log(newManga)
    this.mangas.push(newManga);
  }

  deleteManga(mangaToDelete: Manga){
    this.mangas = this.mangas.filter(elements => elements.title !== mangaToDelete.title);
    
  }

}
