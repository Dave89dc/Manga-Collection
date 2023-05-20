import { Injectable } from '@angular/core';
import { Manga } from '../models/manga';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  manga: Manga[];

  constructor() {
    this.manga = [
      {
        title: 'Goblin Slayer',
        imageUrl: '',
        author: ['Kumo'],
        target: 'Seinen',
        originalRun: '25 Maggio 2016 - in corso',
        publishedBy: 'J-Pop',
        genre: ['Dark fantasy'],
        plot: "La storia è ambientata in un mondo medievale dove gli avventurieri firmano contratti con una gilda per svolgere lavori e ottenere compensi. Una giovane sacerdotessa alle prime armi si unisce con incertezza a un gruppo di avventurieri in missione per liberare alcune donne rapite dai goblin. Nonostante la presunta facilità dell'impresa, i suoi compagni vengono sconfitti e uccisi, lasciandola preda del terrore che la stessa sorte stia per toccare a lei. In suo soccorso giunge un uomo noto come Goblin Slayer, un risoluto e abile sterminatore di goblin che la ragazza deciderà di assistere come aiutante.",
        volumes: 12,
        isComplete: false
      },
      {
        title: 'Uzumaki',
        imageUrl: '',
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
        imageUrl: '',
        author: ['Kenta Shinohara'],
        target: 'Shōnen',
        originalRun: 'Maggio 2016 - Dicembre 2017',
        publishedBy: 'Star Comics',
        genre: ['Fantascienza'],
        plot: "Anno 2061: i viaggi nello spazio sono ora possibili, così come il commercio per le sue vie. Gli studenti della Caird High School si imbarcano per raggiungere un pianeta ma quando il gruppo B5 giunge sul luogo, un'improvvisa sfera di luce senziente catapulta 9 studenti nello spazio aperto, mandandoli a 5012 anni luce di distanza dal loro pianeta madre. Gli studenti scoprono una vecchia nave spaziale senza equipaggio e cercano di sopravvivere utilizzando le loro limitate risorse rimanendo uniti in quello spazio così grande e oscuro, con l'obiettivo di tornare indietro a bordo della Astra.",
        volumes: 5,
        isComplete: true
      },
      {
        title: 'Rent a Girlfriend',
        imageUrl: '',
        author: ['Reiji Miyajima'],
        target: 'Shōnen',
        originalRun: '12 Luglio 2017 - in corso',
        publishedBy: 'J-Pop',
        genre: ['Commedia romantica', 'Harem'],
        plot: "Kazuya Kinoshita è un normale studente universitario che è stato appena scaricato dalla fidanzata per un altro ragazzo. Preso dallo sconforto, per sentirsi meglio, decide di usare una app chiamata Diamond per assumere come fidanzata a noleggio, Chizuru Mizuhara. Sin dal primo incontro ella sembra la ragazza perfetta per lui, ma non è forse vero che c'è di più di quel che gli occhi riescono a vedere?",
        volumes: 14,
        isComplete: false
      },
      {
        title: 'Frieren - Oltre la fine del viaggio',
        imageUrl: '',
        author: ['Kanehito Yamada', 'Tsukasa Abe'],
        target: 'Shōnen',
        originalRun: '28 Febbraio 2020 - in corso',
        publishedBy: 'J-Pop',
        genre: ['Avventura', 'Drammatico', 'Fantasy'],
        plot: "Frieren è una maga che fa parte della squadra di eroi che ha sconfitto il re dei demoni. Essendo un'elfa, per lei i dieci anni passati con gli altri eroi rappresentano soltanto un piccolo frammento della sua lunga vita. Ora, Frieren riflette sul significato di quelle memorie e sui vari sentimenti che prova a riguardo.",
        volumes: 1,
        isComplete: false
      },
      {
        title: 'Chainsaw Man',
        imageUrl: '',
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
        title: '20th Century Boys',
        imageUrl: '',
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
        imageUrl: '',
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
        imageUrl: '',
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
        imageUrl: '',
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
        imageUrl: '',
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
        imageUrl: '',
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
        imageUrl: '',
        author: ['Yasuhiro Nightow'],
        target: 'Seinen',
        originalRun: 'Dicembre 1997 - Maggio 2007',
        publishedBy: 'J-Pop',
        genre: ['Fantascienza', 'Steampunk'],
        plot: "Vash the Stampede, noto come tifone umanoide, è il primo uomo nella storia dichiarato calamità naturale. Ritenuto responsabile di disastri in molte città, ha su di sé una taglia da 60 miliardi di $$ (doppi dollari). La sua vera natura è però ben lontana dall'essere malvagia e crudele come tutti s'immaginano: Vash è in realtà un tipo spensierato e un pacifista convinto, sempre pronto a soccorrere e salvare i più deboli, e con due sole grandi passioni, le belle donne e le ciambelle. Dotato di una sensibilità estrema e al tempo stesso di una grandissima determinazione e forza interiore (per non parlare della grande resistenza del suo corpo) Vash aiuta e difende i più deboli, cercando sempre di evitare di ferire a morte i criminali che affronta, capace di mettere a repentaglio la sua vita per aiutare tutti i bisognosi che incontra lungo il suo cammino. L'intera storia si svolge sulla superficie di un lontano e desertico pianeta, Gunsmoke, illuminato da due soli e circondato da cinque lune, colonizzato un secolo prima da navi spaziali terrestri e appartenenti al progetto Seeds. È un mondo duro e selvaggio, in cui i coloni umani faticano a mantenere un'esistenza dignitosa, tra la continua regressione tecnologica (Gunsmoke è molto simile al vecchio West americano) e le faide di antiche e potenti famiglie rivali. Vash è anche ingiustamente incolpato della distruzione di un'intera cittadina, July City, e proprio per questa fama di tifone umanoide, una società di assicurazioni assegna due agenti, Meryl Strife e Milly Thompson, sui suoi passi nella speranza di rintracciarlo e ridurre al minimo i danni da lui provocati. Da questo momento in poi faranno la loro comparsa nella serie decine di nuovi personaggi, tra cui Legato Bluesummer, che avverte Vash di avergli messo alle costole ben 12 sicari nel tentativo di farlo fuori, e Nicholas D. Wolfwood, un reverendo nonché pistolero bravo quasi quanto Vash, che lo aiuterà a sconfiggere i 12 assassini della Gung-Ho Guns seguendolo ovunque vada e aiutandolo nelle sue folli imprese pur essendo a sua volta uno dei Gung-Ho Guns. La sfida finale sarà l'incontro tra il tifone umanoide e suo fratello Knives, uno scontro da cui dipenderà il destino dell'intero genere umano.",
        volumes: 14,
        isComplete: true
      },
      {
        title: "Domestic Girlfriend",
        imageUrl: '',
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
        imageUrl: '',
        author: ['Naoya Matsumoto'],
        target: 'Shōnen',
        originalRun: '3 Luglio 2020 - in corso',
        publishedBy: 'Star Comics',
        genre: ['Avventura', 'Fantascienza'],
        plot: "In un Giappone minacciato dai kaiju, mostri mortali che il mondo è costretto a fronteggiare, Hibino Kafka è un trentaduenne con il sogno di entrare nella Japan Defense Force, un'organizzazione militare incaricata di neutralizzare i kaiju. Si pone un problema, Hibino si trasforma improvvisamente in un kaiju venendo riconosciuto dalla Japan Defence Force come nemico e identificato con il nome in codice Kaiju No. 8.",
        volumes: 7,
        isComplete: false
      },
      {
        title: "La Regina d'Egitto",
        imageUrl: '',
        author: ['Chie Inudō'],
        target: 'Seinen',
        originalRun: '2014 - 2021',
        publishedBy: 'J-Pop',
        genre: ['Drammatico', 'Storico'],
        plot: "L'Egitto dei Faraoni si avvia verso una nuova era: il matrimonio fra la giovane Hatshepsut e il fratellastro Sethi rendono quest'ultimo il legittimo erede al trono con il nome di Thutmose II. Sotto la maschera da moglie perfetta, tuttavia, Hatshepsut nasconde una rabbia profonda... la giovane, infatti, non si accontenta di essere regina in quanto sposa, ma aspirerebbe al trono di Faraone. Perché mai non dovrebbe poter ereditare il titolo solo per il fatto di essere nata donna? Hatshepsut inizia così una guerra alle tradizioni, rifiutando i limiti a lei imposti.",
        volumes: 9,
        isComplete: true
      },
      {
        title: "La Regina d'Egitto",
        imageUrl: '',
        author: ['Chie Inudō'],
        target: 'Seinen',
        originalRun: '2014 - 2021',
        publishedBy: 'J-Pop',
        genre: ['Drammatico', 'Storico'],
        plot: "L'Egitto dei Faraoni si avvia verso una nuova era: il matrimonio fra la giovane Hatshepsut e il fratellastro Sethi rendono quest'ultimo il legittimo erede al trono con il nome di Thutmose II. Sotto la maschera da moglie perfetta, tuttavia, Hatshepsut nasconde una rabbia profonda... la giovane, infatti, non si accontenta di essere regina in quanto sposa, ma aspirerebbe al trono di Faraone. Perché mai non dovrebbe poter ereditare il titolo solo per il fatto di essere nata donna? Hatshepsut inizia così una guerra alle tradizioni, rifiutando i limiti a lei imposti.",
        volumes: 9,
        isComplete: true
      },
    ]

  }
}
