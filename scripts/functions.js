let NavOpened = false
let cont=document.querySelector(".container");
let melyikCsillag;
let CsillagkepInformaciok = {
  'AstroNet': 'Bolyai Farkas Elméleti Líceum: XI.G \n\nKészítők: \nBenedek Lóránd-Csongor\nCsászár Csongor-Károly\nCsiszér Bálint\nZsombori Artúr',
  'Halak (Pisces)': 'Története: A keresztény kultúrkör Krisztussal azonosítja a Halak csillagképet, mivel a tavaszpont a Kosból akkor került vissza a Halak jegyébe, amikorra Krisztus születése tehető.A csillagkép eredetileg egyetlen halból állt és elődje egy félig ember, félig haltestű szíriai istennő, Atargatisz.A görögök Aphroditét és Erószt, míg a rómaiak Venust és fiát, Cupidót látták a csillagokban.A mítosz szerint anyát és gyermekét megtámadta Tüphón, a szörnyeteg. Aphrodité és gyermeke a vízen keresztül menekültek, és mindketten hallá váltak. Hogy el ne sodródjanak egymástól, egy szalagot kötöttek egymás lábára. Ezt a szalagot a szeretet kötelékeként is aposztrofálni szokták, és a csillagkép ábrázolásában is megjelenik.\n\n A Halak zömmel az északi félgömbön van, de délnyugati része 6 fokkal nyúlik az égi egyenlítő alá. Magyarországról a megfelelő időszakban teljes terjedelmében látható.',
  'Sas (Aquila)': 'Története: Ez a csillagkép mezopotámiai eredetű. Már egy Kr.e. 1200-ból származó domborművön is sasként ábrázolták. A görögök szemében a sas - a levegő többi teremtményéhez hasonlóan - Zeusz madara volt (a római mitológiában Iuppiteré). A madarak királyát kitüntetett királyi szolgaként és a nagy égisten harci állataként tartották számon, akinek többek között az volt a feladata, hogy visszaszerezze a villámokat, amelyeket Zeusz elhajigált.A Sas csillagképhez fűződik Ganümédész, a szépséges ifjú halandó elrablásának és elcsábításának mítosza, amelyben a szerelemre gerjedt Zeusz jelenik meg a madár képében. A Sast gyakran ábrázolják úgy, hogy karmai között egy ifjút tart. Ganümédészt a csillagképtől délre képzelték elődeink az égre, fejét a β Aql alkotja.Egy másik mítosz a sasmadár vérengző természetéről tanúskodik. Egyes források arról tudósítanak, hogy Prométheusz - akinek neve "előrelátót" jelent - a titánok utolsó nemzedékéhez tartozott, s az első istenpár, Uranosz és Gaia gyermeke volt. Őt tartják az emberiség teremtőjének és isteni védelmezőjének.',
  'Androméda (Andromeda)': 'Története: A csillagkép a görög mitológiában szereplő Androméda királylányról kapta nevét. Androméda Képheusz aithiopiai király és Kassziopeia királyné leánya volt. A királyné azzal dicsekedett, hogy ő a nimfáknál is szebb. Ezért az istenek megharagudtak rá, és Poszeidón, a tengerek istene egy tengeri szörnyet küldött, amely rengeteg embert elpusztított. A királyi pár egy jósdához fordult, ahol azt a jóslatot kapták, hogy akkor szabadulhatnak meg a szörnytől, ha leányukat feláldozzák neki. Vállalták ezt az áldozatot, és Andromédát meztelenül a tengerparti sziklához láncolták Joppa közelében (kikötőváros az ókori Palesztinában), hogy ott Kétónak (latin Cetus), a tengeri szörnynek a zsákmányául essék. Miközben a lány a kegyetlen véget várta, arra száguldott Perszeusz, Zeusz halandó fia. Éppen hazafelé tartott sikeres vállalkozásából, melynek során megölte Meduszát, az egyik félelmetes gorgót.Egyesek szerint saruját, Pallasz Athéné (a bölcsesség istennőjének és a hősök védelmezőjének) ajándékát viselte. ',
  'Nyilas (Sagittarius)': 'Története: A görögök kentaurjaihoz kapcsolható csillagképet már Mezopotámiában is nyilazó emberként képzelték el. A kentaurok közül, akiket vadnak és kegyetlennek tartottak, Kheirón volt az egyetlen bölcs és nagylelkű tanítómester: tanítványait, többek között Akhilleuszt, az orvoslás, az íj, a parittya és a lant művészetére oktatta. Kheirón halhatatlan volt, egy napon azonban Héraklész véletlenül megsebesítette mérgezett nyilával, és Kheirónnak rettenetes szenvedéseket kellett emiatt eltűrnie. Mivel fájdalmai nagyon erősek voltak, Kheirón önként lemondott halhatatlanságáról. Zeusz hagyta őt meghalni és halála után az égboltra helyezte csillagkép formájában.\n Láthatósága,megkeresése:	A Nyilas csillagkép a déli horizont fölött 10-25°-os magasságban, a Tejút legfényesebb részén helyezkedik el, tekintettel arra, hogy itt van galaxisunk középpontja. Emiatt már kézi látcsővel is fényes felhők, halmazok figyelhetők meg a területen. Európa északabbi részein egyáltalán nem látható',
  'Bika (Taurus)': 'Története: A Taurus csillagkép nagyon régi, valószínűleg a rézkorban, vagy talán már a kőkorszakban is ismerték.A müncheni Lajos–Miksa Egyetem tanára, Michael Rappenglück úgy véli, hogy a Lascaux-i barlangban található, i. e. 15 000 körül készült egyik festmény a Taurus csillagképet ábrázolja.A Taurus jelölte ki a tavaszpontot a rézkorban és a korai bronzkorban (ez volt a „Bika kora"). Bikakultusz volt Mezopotámiában és Krétán is. A görög mitológiában Zeusz egy fehér bika alakjában rabolta el Európét, a föníciai hercegnőt, és Kréta szigetére úszott vele.A csillagképnek köze lehet Héraklész (latin nevén Hercules) hetedik feladatához is: Kréta szigetén megszelídítette a Poszeidón által megőrjített bikát, és az állat átúszott vele Argoszra.\n\n Láthatóság, megkeresése: Fényes csillagokat és halmazokat tartalmazó látványos csillagkép. A téli hónapokban lehet megfigyelni, könnyen megtalálható; az Orion csillagkép övét alkotó három csillag vonalának északnyugat felé történő meghosszabbítása elvezet a Bika legfényesebb csillagához, az Aldebaranhoz.',
  'Szekeres (Auriga)': 'Története: Mezopotámiában a csillagképet kocsihajtónak képzelték. A legkorábbi időktől úgy ábrázolták, hogy kecskét vagy kecskegidákat dajkál az ölében. Később azt tartották, hogy ez az Amalthea nevű kecske, amely a görög mítoszban Zeuszt (a római mitológiában Jupitert) szoptatta. Mások Erikthoniosz alakját vélték felfedezni a csillagképben, a Földanya és Héphaisztosz gyermekét. Erikthoniosz vezette be a négylovas kocsikat Athénban.Egy másik értelmezés szerint a Fuvaros a balsorsú kocsihajtó, Mürtilosz égre vetített alakja. Oinomaosz király, a lovak nagy kedvelője, nem tudta elviselni a gondolatot, hogy lánya, Hippodameia (neve annyit tesz: „lószelídítő”) férjhez menjen. Ezért kocsiversenyt hirdetett a kérők számára, akiknek élete volt a tét. Oinomaosz apjától, Arésztól (Marstól) kapta az északi szélnél, a Boreasznál is sebesebb lovait. Ezek a csodálatos paripák legyőzhetetlenek voltak, a király így lánya valamennyi kérőjét megölte.',
  'Kassziopeia (Cassiopeia)': 'Története: A csillagkép a görög mitológiában szereplő Kassziopeiáról kapta nevét. Kassziopeia Képheusz aithiopiai király felesége és Androméda anyja volt. A királyné azzal dicsekedett, hogy ő a nimfáknál is szebb. Ezért az istenek megharagudtak rá, és Poszeidón, a tengerek istene egy tengeri szörnyet küldött, amely rengeteg embert elpusztított.A királyi pár egy jósdához fordult, ahol azt a jóslatot kapták: akkor szabadulhatnak meg a szörnytől, ha leányukat feláldozzák neki. Vállalták ezt az áldozatot, és Andromédát kitették egy tengeri sziklára, hogy ott a szörny zsákmányául essék.A hős Perszeusz Androméda segítségére sietett, legyőzte a szörnyet, kiszabadította a leányt, majd feleségül vette. A történet később azzal bővült, hogy Kassziopeiát a trónjához kötözték és fél napig fejjel lefelé lógatták.\n\n Láthatóság, megkeresése: A Cassiopeia egy csillagkép az északi égbolton.A csillagkép cirkumpoláris, tehát minden derült éjszakán látható. Helyzetétől függően M vagy W formájú.',
  'Ökörhajcsár (Bootes)': 'Története: Több legenda is fűződik hozzá. Az egyik szerint az Ökörhajcsár találta fel a szántást. A másik szerint medvetáncoltató volt, aki a Nagy Medvét táncoltatja. A harmadik monda szerint két vadászebbel űzi a medvét, ezek is csillagkép-alakban megtalálhatók. A negyedik legenda szerint az athéni Ikariosszal, Érigoné atyjával azonosítja a csillagképet. Dionüszosz (a római mitológiában Bacchus) megtanította Ikariosznak a borkészítés titkát. Ő azután bort adott a parasztoknak, akik lerészegedtek a veszedelmes nedűtől. Mivel azt hitték, mérgezés áldozatai, lemészárolták, majd eltemették Ikarioszt. Érigonét atyja kutyája, Maira vezette el Ikariosz sírjához. Amikor megtalálta sírt, bánatában felakasztotta magát. Zeusz (némelyek szerint maga Dionüszosz) Szűzként az égre helyezte a leányt. Ikariosz lett az Ökörhajcsár csillagkép, Maira pedig vagy a Procyon a Kis Kutyában vagy a szomszédos Vadászebek egyik ebe.A csillagkép régebbi neve Arcturus volt, azaz a Medve Őre. Ma ezt a névet már csak a legfényesebb csillaga viseli',
  'Orion (Orion)': 'Története: Mivel az Orion feltűnő, jellegzetes csillagkép, az ősidőktől kezdve rengeteg mitológiai történet kapcsolódik hozzá. Mai nevét a görögöktől kapta, ami valószínűleg az akkád Uru-anna (mennyei fény) elnevezésből származik. Ősi eredete miatt bizonyára előbb nevezték el a csillagképet és csak később szőttek történeteket köré, szemben azzal a gyakorlattal, miszerint egy már meglévő hőshöz rendeltek csillagokat.A görög mitológiában Órión Poszeidón fia, óriás termetű vadász, aki Atlasz hét leányát addig üldözte szerelmével, amíg azok csillagokká nem változtak: ők lettek a Plejádok hét csillaga. Később Artemisz, a vadászat szűz istennője iránt lobbant szerelemre, aki azonban íjával lelőtte.\n\nLáthatóság, megkeresése: Az Orion az egyik legismertebb és egyik leglátványosabb csillagkép a déli égbolton. Az égi egyenlítőn fekszik, ezért a világ minden tájáról jól látható, Magyarországról nézve télen figyelhető meg legjobban. Ősszel késő este kel, kora tavaszi esténként a nyugati égbolton ragyognak csillagai. ',
  'Paradicsommadár (Apus)': 'TÖrténete:Petrus Plancius „Paradysvogel Apis Indica” néven jegyezte fel a csillagképet, ám Bayer Uranometriájában már Apis Indica néven került be. Eközben mások Avisként hivatkoztak rá. Nicolas-Louis de Lacaille francia csillagász nagy hatású művében, a Coelum Australe Stelliferumban Apus néven található, ám az Apus és Avis alternatívák használata Titius Bode idején újra központba került.Az apus szó láb nélkülit jelent, a bennszülöttek ugyanis levágták a paradicsommadár gyönyörű tollazatához képest csúnya lábát, és láb nélkül adták a madarat az idegeneknek. A csillagképnek nincs mitológiai vonatkozása.',
  'Lant (Lyra)': 'Története: A régi görögök hangszere volt a líra, innen ered a műnem („líra”) és a csillagkép neve is. A lírát a mitológia szerint Hermész találta fel, de csínytevései miatt Apollónnak kellett adnia. Az egyik monda szerint ez a lant Arióné volt, aki ennek segítségével menekült meg a biztos halálból. Mikor hajóját kalózok támadták meg, csak annyit kért, hogy egy utolsót dalolhasson. Énekével a hajóhoz csalt egy csapat delfint, a vízbe ugrott, az állatok pedig kivitték a partra.A másik monda Orpheuszhoz fűződik, aki az alvilágból akarta visszahozni kedvesét. Énekével megszelídítette a Kerberoszt, Perszephoné pedig visszaengedte Eurüdikét azzal a feltétellel, hogy Orpheusz nem néz hátra. A dalnok azonban nem bírta ki, hogy vissza ne nézzen, s örökre elveszítette kedvesét.\n\nLáthatósága, megkeresése: Legfényesebb csillaga az α Lyrae - Vega, az égbolt egyik legfényesebb csillaga.A Líra csillagkép az északi féltekén tavasztól őszig látható, míg a déli féltekéről csak a téli hónapokban, az égbolt alján látható.',
  'Kefeusz (Cepheus)': 'Története, mitológia: A Cepheus az északi égbolt egyik csillagképe. Az égbolton a görög mitológiából ismert Képheuszt, Etiópia (mitológiai) királyát jeleníti meg.Képheusz, Kassziopeia, Androméda, Pégaszosz, Kétó és Perszeusz történetei egy mondakörbe tartoznak. Képheusz felesége, Kassziopeia meg volt győződve arról, hogy az ő szépsége meghaladja a tengeri nimfák messze földön híres szépségét. Dicsekvését az istenek nem nézték jó szemmel. Poszeidón, a tengerek istene egy óriási cethalat küldött büntetésül, mely rengeteg emberrel végzett. A király jósokhoz fordult, választ akart kapni arra, hogyan tudna megszabadulni a szörnyetegtől. A jóslat szerint csak egy mód volt a menekvésre, ha feláldozzák a szörnyetegnek egyetlen lányukat, Andromédát. A királyi pár eleget tett a feladatnak, és Andromédát egy sziklához kötötték a tenger közelében. Perszeusz azonban a lány segítségére sietett, végzett a szörnyeteggel, kiszabadította Andromédát és feleségül vette.',
  'Pegazus (Pegasus)': 'Története, mitológiája Nevét Pégaszoszról kapta a görög mitológia mesés állatáról. Egy szárnyas ló, melyet Poszeidón a gorgók egyikével, Meduszával az Ókeanosz forrásainál nemzett.	Hésziodosz szerint nyomban születése után az Olümposzra röppent, ahol Zeusz számára a villámokat és mennyköveket szállítja. Későbbieknél Éósz lova, és mint ilyen, a csillagképek egyike. Bellerophontész Poszeidóntól ajándékba kapta és segítségével legyőzte Khimairát, nemkülönben az amazonokat is. Az Androméda-mondakör egyik változata szerint Perszeusz a Pégaszoszon lovagolt akkor is, amikor a Joppe mellett a sziklához láncolt Andromédát megmentette Kétosztól, azaz a Cettől.	A mondák szerint a Pégaszosz a múzsák lova is egyben, mivel a Helikont, mely a múzsák éneke felett érzett gyönyörűségtől az égbe akart emelkedni, patkója ütésével a földhöz szegezte, egyúttal pedig a Hippokrene forrást a földből kicsalta (ezt némelyek Troizénben keresték). Az újabb időkben Pegazus a költők lova, melyen ihletettségükben az ég felé emelkednek.',
  'Rák (Cancer)': 'Története, mitológia: A rák Héraklész mondakörébe tartozik. Amikor a hős a Hüdrával küzdött, Héra egy hatalmas rákot küldött, hogy harapdálja Héraklész bokáját. Ő (vagy Iolaosz) azonban agyonütötte a rákot, amit ezután Héra az égre helyezett. Egy másfajta, de hasonló monda: amikor Héraklész a Hüdrával küzdött, a vízi állatok közül mindegyik melléállt, kivéve a rákot. Héra jutalmul a rákot az égre emelte.',
  'Vízöntő (Aquarius)': 'Története: Ganümédész a Trója nevét adó Trósz király gyermeke a görög mitológiában. Egyszer Ganümédész az Ida hegyen legeltette nyáját, amikor Zeusz megpillantotta a szépséges ifjút, és egyből beleszeretett. Sas képében leszállt hozzá, és felvitte magával az Olümposzra. A fiú az istenek pohárnoka lett, és így megkapta a főistentől a halhatatlanságot is.Trósz király csak évekkel később tudta meg, hogy fia hova tűnt, és olyan keserves siránkozásba kezdett, hogy Zeusz fiáért kárpótlásul leküldte Hermészt, hogy adja Trósznak a világ legjobb és leggyorsabb lovait, amelyek olyan gyorsak voltak, hogy át tudtak futni a vízen. Hermész egy aranytőkét is ajándékozott a trójai királynak. A lovakat Héraklész nyerte el Trósz királytól, amikor megszabadította a várost a Poszeidón által küldött tengeri szörnytől. Így Ganümédész az Olümposzon maradt Zeusszal, akinek szeretője maradt. Ezt hamarosan sértésnek vette Héra, így a főisten, hogy megóvja szerelmét felesége haragjától a csillagok közé emelte. \n Láthatósága, megkeresése: A Vízöntő zömmel az égi egyenlítő alatt helyezkedik el.',
  'Oroszlán (Leo)': 'Története: Az Oroszlán csillagkép a nemeai oroszlánról kapta a nevét, akit Héraklész pusztított el a tizenkét munkájának egyike során. A szörnyet Zeusz helyezte az égre Héraklész hőstette emlékére. A nemeai oroszlán egyébként az Orthosz nevű kutya és ennek édesanyja, Ekhidna gyermeke, a thébai Szphinx testvére volt, akit Héra, mások szerint Szeléné nevelt fel.',
  'Kis Medve (Ursa Minor)': 'Története, mitológia Az ókori görögök a Nagy Medve csillagképben és a Kis Medve csillagképekben Kallisztót és Arkaszt vélték látni. Egy másik változatuk szerint a Ökörhajcsár csillagkép volt Arcas, a Kis Medve pedig egy kutya. Ez magyarázza a Polaris egykori nevét: ’’Kutyafarok’’. A Kis Medve egykori neve ’’Dragon szárnya’’ is volt. A Kis Medvét mint csillagképet, minden bizonnyal Thalész vette át az egyiptomi csillagászatból a görög csillagképek közé. Számos nép körében szekérként ismerték: négy csillaga a kocsit, három csillaga a rudat alkotják. Ámde ez a hét csillag a Nagy Göncöl hét csillagával szemben meglehetősen halovány. A rúd utolsó csillaga az α Ursae Minoris, vagyis a Kis Medve legfényesebb csillaga, a Sarkcsillag (Polaris)',
  'Skorpió (Scorpius)': 'Története, mitológiaA Skorpió csillagkép ábrázolása a 15. században. Mitológiai története összekapcsolódik az Orionnal. A történet szerint ez a skorpió ölte meg Oriont, a vadászt. Az égen is üldözi őt, de itt már sosem érheti el: csak akkor kerül a látóhatár fölé keleten, miután Orion már lenyugodott nyugaton. A gyakorlatban ez azt jelenti, hogy míg az Orion főleg télen látható, a Skorpió jellegzetes nyári csillagkép. Egy monda szerint Artemisz, a vadászat istennője küldte a skorpiót Orion után azért, hogy ölje meg őt. Egy másik változat szerint a Földanya ölette meg a skorpióval a fennhéjázó Oriont, aki kijelentette, hogy minden vadállatot meg tud  ölni. A halászó tengeri népek egy olyan horgot láttak a Skorpióban, amivel egy egész szigetet ki lehet fogni.         \n\n            Láthatósága, megkeresése: A Skorpió csillagkép a déli égbolton helyezkedik el. Így legdélebbi széle még elméletileg sem látható hazánkból. A csillagkép januártól októberig kereshető fel az éjszakai égbolton.  Május-júniusban éjfél előtt delel.',
  'Nagy Medve (Ursa Major)': 'Története, mitológia: Kallisztó nimfa hiába tett szüzességi fogadalmat, nem tudott ellenállni Zeusznak. A kapcsolatból fiú született, a neve Arkasz. Zeusz felesége, Héra istennő meg akarta ölni a nimfát, de Zeusz az égre helyezte Kallisztót a fiával együtt, ők a Nagy- és a Kis Medve. Héra istennő még a halott vetélytársnőjére is haragudott, és kijárta, hogy az anya és fia soha ne fürödhessenek meg a hűsítő óceánban. A magyar kultúrkörben Nagy Medve hét csillagából a középső, legfényesebb rész a Göncölszekér. A magyar mondavilágban Göncöl egy csodatevő táltos volt, értett az állatok nyelvén, ismerte a gyógyfüveket, betegeket gyógyított. Amikor eltörött a szekerének a kereke, hiába várt segítséget az emberektől, ezért a szekérrel együtt az égbe repült. További magyar nevei: Angyalok hintója, Benceszekér, Csíkiszekér, Denceszekér, Döncőszekér, Gönciszekér stb…\n\n A csillagkép láthatósága: Ősszel figyelhető meg legkevésbé. A szekér látszólag ilyenkor a kerekén áll. Télen az északkeleti horizont fölött áll. Tavasszal magasan a horizont felett látható. Nyáron magasan az égen látható.',
  'Mérleg (Libra)': 'Története, mitológia	A Mérleg csillagkép története még a babiloni időkbe nyúlik vissza, amikor is a mérleget a holtak fölötti ítélet mérlegének tekintették. Hasonló jelentése volt az ókori Egyiptomban is, ahol Anubisz használta: a holtak lelkét a mérleg egyik serpenyőjébe tette, míg a másikon egy tollpihe feküdt. Ha a lélek könnyebb volt a pihénél, részesülhetett a túlvilági életben, ha viszont nem, egy vízilófejű szörnyeteg elnyelte. Az egyiptomiak azonban az állatövi jegyek átvételéig (kb. i.e. II.-I. század) nem ismerték a Mérleg csillagképet, annak három legfényesebb csillaga (α, β, és σ Librae) elképzeléseik szerint bárkát formázott.A római időkben együtt ábrázolták a Virgóval(Szűz), mint az igazságot megtestesítő Aestraet (görög megfelelője: Asztraia).Érdekes, hogy csak ekkoriban vált önálló csillagképpé: korábban a Skorpió csillagkép része volt. Csillagainak nevei ezt a hagyományt őrzik. Zubenelgenubi annyi, mint „a skorpió ollója”.      \n\n  Láthatósága, megkeresés: A Mérleg csillagkép a déli égbolton helyezkedik el. Decembertől októberig kereshető fel az éjszakai égbolton.',
}


function openNav() {
  NavOpened = true;
  document.getElementById("mySidenav").style.width = "400px";
  document.getElementById("main").style.marginLeft = "400px";
}

function closeNav(){
  NavOpened = false;
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  if (melyikCsillag!=='Csillagkepek'){
    document.getElementById("szovegdoboz").style.width = "23rem";
    document.getElementById("szovegpara").style.fontSize = "19px";
  }
  
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function Change(x) {
	x.classList.toggle("change");
	if (NavOpened === true)closeNav();
	else openNav();
  
}

function getVectorFromTwoPoints(point1, point2) {
  return {
    x: point2.x - point1.x,
    y: point2.y - point1.y,
  };
}

function getDistanceBetweenPoints(point1, point2) {
  const x = point1.x - point2.x;
  const y = point1.y - point2.y;

  return Math.sqrt(x * x + y * y);
}

const FRAME_DURATION = 1000 / 60;
const getTime = typeof performance === 'function' ? performance.now : Date.now;
let rafID;

function drawLine(ca, startPoint, endPoint, drawingSpeed = 5, onAnimationEnd, startingLength = 0) {
  let lastUpdate = getTime();
  let currentPoint = { ...startPoint };
  const vector = getVectorFromTwoPoints(startPoint, endPoint);
  const startToEndDistance = getDistanceBetweenPoints(startPoint, endPoint);
  const lineStep = drawingSpeed / startToEndDistance;
  const vectorStep = {
    x: vector.x * lineStep,
    y: vector.y * lineStep,
  };

  const animate = () => {
    const now = getTime();
    const delta = (now - lastUpdate) / FRAME_DURATION;
    const deltaVector = {
      x: vectorStep.x * delta,
      y: vectorStep.y * delta,
    };

    if (startingLength > 0) {
      const startingLengthFactor = startingLength / startToEndDistance;
      deltaVector.x += vector.x * startingLengthFactor;
      deltaVector.y += vector.y * startingLengthFactor;
      startingLength = 0;
    }

    let nextPoint = {
      x: currentPoint.x + deltaVector.x,
      y: currentPoint.y + deltaVector.y
    };

    let isFinished = false;
    const startToNextPointDistance = getDistanceBetweenPoints(startPoint, nextPoint);

    if (startToNextPointDistance >= startToEndDistance) {
      isFinished = true;
      nextPoint = endPoint;
    }

    ca.beginPath();
    ca.moveTo(currentPoint.x, currentPoint.y);
    ca.lineTo(nextPoint.x, nextPoint.y);
    ca.stroke();

    if (isFinished) {
      if (onAnimationEnd) {
        onAnimationEnd(0);
      }
      return;
    }

    currentPoint = nextPoint;
    lastUpdate = now;
    rafID = requestAnimationFrame(animate);
  };

  animate();
}

function drawLines(ca, lines, drawingSpeed = 5, onAnimationEnd) {
  const numLines = lines.length;

  function drawLineAtIndex(lineIndex) {
    const line = lines[lineIndex];
    const startPoint = line.start;
    const endPoint = line.end;

    drawLine(ca, startPoint, endPoint, drawingSpeed, () => {
      if (lineIndex === numLines - 1) {
        if (onAnimationEnd) onAnimationEnd();
      } else {
        drawLineAtIndex(lineIndex + 1);
      }
    });
  }

  drawLineAtIndex(0);
}

function rajz(x, cx, cy, kezd, veg, nev, sp) {
  let canvas = document.getElementById("csillagkep");
  let ca = canvas.getContext("2d");
  melyikCsillag=nev;

  Change(cont);

  ca.clearRect(0, 0, canvas.width, canvas.height);
  ca.fillStyle = "white";

  cancelAnimationFrame(rafID);

  function korok(i) {
    ca.beginPath();
    ca.arc(cx[i], cy[i], 10, 0, 2 * Math.PI);
    ca.fill();
  }

  for (let i = 0; i < x; i++) {
    korok(i);
  }

  let lines = [];
  for (let i = 0; i < kezd.length+1; i++) {
    const start = { x: cx[kezd[i] - 1], y: cy[kezd[i] - 1] };
    const end = { x: cx[veg[i] - 1], y: cy[veg[i] - 1] };
    lines.push({ start, end });
  }

  ca.lineCap = 'round';
  ca.lineWidth = 2.5;
  ca.strokeStyle = 'white';

  drawLines(ca, lines, sp, () => console.log('lefutott a rajz'));

  showTitle(nev);
  showText(CsillagkepInformaciok[nev]);
}

function ClearPage(){
 let canvas = document.getElementById("csillagkep");
 let ca = canvas.getContext("2d");

 ca.clearRect(0,0,canvas.width,canvas.height);
 cancelAnimationFrame(rafID);
}

function showTitle(text) {
  document.getElementById('szovegcim').innerText = text;
}

function showText(text) {
  document.getElementById('szovegpara').innerText = text;
}

function FooldalSzoveg() {
  melyikCsillag='Csillagkepek';
  ClearPage();
  Change(cont);
  showTitle('Csillagképek');
  showText('Az éjszakai égbolt csillagai közti könnyebb eligazodás érdekében az emberek már több ezer évvel ezelőtt is az egymáshoz közel látszó, fényesebb csillagok csoportjait - nem kis képzelőerővel - emberi vagy isteni lények, állatok vagy tárgyak képével azonosították: ma is ez a csillagkép - latin eredetű szóval konstelláció - egyik jelentése. Az európai kultúrkörben a görög mitológián alapuló csillagképrendszer honosodott meg, és a csillagászatban ez vált nemzetközivé. Egyes csillagképeken belül előfordulnak önálló névvel rendelkező csoportosulások: ezeket csillagalakzatoknak, idegen szóval aszterizmusoknak nevezzük.' + '\n\n' + 'A csillagképek fejlődése' + '\n' + 'Bár az időben távolabbra is vissza lehetne menni, elsőként említhető, hogy Aratosz görög költő Kr. e. a 3. században Phainomena című költeményében részletesen ismertette kora 40-nél több csillagképét. A csillaggömbök (glóbuszok) is ezeket ábrázolták, a fényesebb csillagokkal együtt. A kora újkori „figurális” csillagtérképeknek, atlaszoknak művészi értéke összevethető tudományos jelentőségükkel, mivel a csillagokat helyüknek és fényességüknek megfelelően igyekeztek ábrázolni. A 17. század legelterjedtebb ilyen műve a Johannes Bayer által készített Uranometria, amely több kiadást ért meg. A csillagképekről nehéz lenne a csillagtérkép említése nélkül beszélni, hiszen térképen kerülnek bemutatásra. Az ókori mondavilágot művészien megjelenítő csillagképgrafikát tartalmazó atlaszok utolsó két legjelentősebbje Flamsteed Atlas Coelestise (1729) és Bode Uranographiája (1802). Az idő múlásával az atlaszokban a hangsúly egyre inkább a csillagok pontos ábrázolására helyeződött át, a csillagképek jelölése a figurális körvonalak és görbe vonalú határok feltüntetésére redukálódott.' + '\n\nA ma érvényes csillagképek\n' + 'A 19. század nagy égboltfelmérései nyomán szükségessé vált az egyes csillagképek területének pontos meghatározása, egységesítése, amiről a Nemzetközi Csillagászati Unió 1928-ban hozott határozatot. E. Delporte, belga csillagász javaslatát fogadták el. Az éggömb teljes felülete 88 részre lett felosztva úgy, hogy a csillagképek határvonalait az 1875. epochájú egyenlítői (ekvatoriális) koordináta rendszer pólusokon át húzott gömbi főköreinek- illetve deklinációs köreinek ívdarabjai alkotják. Amennyire lehetett, megtartották a korábbi, általánosan használt neveket és égterületeket.');
  document.getElementById("szovegdoboz").style.width = "104.7rem";
  document.getElementById("szovegpara").style.fontSize = "23px";
  // document.getElementById("szovegdoboz").style.width = "100%";
  // document.getElementById("szovegdoboz").style.right = "25px";
}

Change(cont);
//rajz(5,[593,630,613,546,700],[227,410,475,589,631],[1,2,3,3],[2,3,4,5],'AstroNet');
