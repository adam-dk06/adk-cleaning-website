export type ServiceCategory = 'glas-gevel' | 'dak-buiten' | 'interieur';

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: number;
  slug: string;
  name: string;
  category: ServiceCategory;
  categoryLabel: string;
  targetAudience: string;
  shortDescription: string;
  editorialIntro: string;
  detailDescription: string;
  image: string;
  imageAlt: string;
  benefits: string[];
  steps: ServiceStep[];
}

const IMG_GLASS_BUILDING = '/src/assets/images/hero_modern_glass_building_1794951870666.jpg';
const IMG_MODERN_HOUSE = '/src/assets/images/dutch_brick_house_photo_1794952186865.jpg';
const IMG_FLOOR = '/src/assets/images/clean_office_interior_1794951872194.jpg';
const IMG_SOLAR_ROOF = '/src/assets/images/service_solar_roof_1794950067760.jpg';
const IMG_EQUIPMENT = '/src/assets/images/clean_driveway_equipment_1794951872148.jpg';

export const IMG_VW_TRANSPORTER = '/src/assets/images/vw_transporter_standard_1794951870235.jpg';
export const IMG_VAN = IMG_VW_TRANSPORTER;
export const IMG_HERO = IMG_GLASS_BUILDING;
export const IMG_HOUSE = IMG_MODERN_HOUSE;
export const IMG_DRIVEWAY_EQUIPMENT = IMG_EQUIPMENT;
export const IMG_INTERIOR_FLOOR = IMG_FLOOR;

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    slug: 'glasbewassing-binnen-en-buiten',
    name: 'Glasbewassing binnen en buiten',
    category: 'glas-gevel',
    categoryLabel: 'Glas & gevel',
    targetAudience: 'Particulieren, bedrijven en VvE’s',
    shortDescription:
      'Streeploos heldere ramen, kozijnen en glaspartijen op iedere hoogte voor een representatieve uitstraling.',
    editorialIntro:
      'Kristalhelder zicht naar buiten en een verzorgde eerste indruk van uw pand. Wij verzorgen zowel traditionele glasbewassing als telescoopbewassing met zuiver osmosewater.',
    detailDescription:
      'Of het nu gaat om een vrijstaande woning, een kantoorcomplex met hoge vliesgevels of een VvE-appartementencomplex: bij glasbewassing binnen en buiten nemen wij niet alleen het glas, maar ook de omliggende kozijnen, tussenstijlen en vensterbanken zorgvuldig mee.',
    image: IMG_GLASS_BUILDING,
    imageAlt: 'Modern glazen kantoorgebouw met streeploos schone gevelramen',
    benefits: [
      'Inclusief grondige afname van kozijnen, lekdorpels en vensterbanken',
      'Veilig werken op hoogte met telescoopstelen en gedemineraliseerd osmosewater',
      'Vrij van zeepresten en kalkvlekken waardoor vuil zich minder snel hecht',
      'Flexibele onderhoudsschema’s per 4, 6, 8 of 12 weken'
    ],
    steps: [
      {
        title: 'Inspectie & bereikbaarheid',
        description:
          'Wij beoordelen de glassoort, bereikbaarheid en gewenste frequentie voor de veiligste werkmethode.'
      },
      {
        title: 'Grondige wassing',
        description:
          'Zowel binnen als buiten reinigen wij het glaswerk en de aangrenzende kozijnprofielen tot in de hoeken.'
      },
      {
        title: 'Streeploze controle',
        description:
          'Na afloop controleren wij het glaswerk tegen het licht zodat alles vlekkeloos en helder oplevert.'
      }
    ]
  },
  {
    id: 2,
    slug: 'vloerreiniging',
    name: 'Vloerreiniging',
    category: 'interieur',
    categoryLabel: 'Interieur & oplevering',
    targetAudience: 'Bedrijven, VvE’s en particulieren',
    shortDescription:
      'Dieptereiniging en beschermende conservering voor natuursteen, tegels, PVC, linoleum en gietvloeren.',
    editorialIntro:
      'Een entreehal, kantoorvloer of trappenhuis bepaalt direct de sfeer binnen een gebouw. Wij verwijderen diep ingelopen vuil en herstellen de oorspronkelijke glans of matte afwerking.',
    detailDescription:
      'Dagelijks dweilen laat vaak een dunne zeepfilm achter waarin fijn vuil zich ophoopt. Met professionele éénschijfsmachines en afgestemde reinigingsmiddelen trekken wij poriën en voegen schoon zonder de vloerafwerking te belasten.',
    image: IMG_FLOOR,
    imageAlt: 'Spiegelende natuurstenen vloer in een lege moderne entreehal',
    benefits: [
      'Afgestemd op natuursteen, keramiek, PVC, linoleum, terrazzo en gietvloeren',
      'Verwijdert hardnekkige loopsporen, vetfilm en oude waslagen',
      'Optionele beschermende polymeer- of impregneerlaag voor langdurig behoud',
      'Planning mogelijk buiten reguliere kantoortijden'
    ],
    steps: [
      {
        title: 'Ondergrondanalyse',
        description:
          'Wij bepalen het vloertype en kiezen de juiste pad, borstel en pH-neutrale reinigingsoplossing.'
      },
      {
        title: 'Machinale dieptereiniging',
        description:
          'Met professionele vloerapparatuur wordt vervuiling uit poriën, naden en voegen losgewerkt en afgezogen.'
      },
      {
        title: 'Afwerking & bescherming',
        description:
          'Indien gewenst brengen wij een beschermende sealer of matte beschermlaag aan tegen nieuwe slijtage.'
      }
    ]
  },
  {
    id: 3,
    slug: 'kunststofreiniging',
    name: 'Kunststofreiniging',
    category: 'glas-gevel',
    categoryLabel: 'Glas & gevel',
    targetAudience: 'Particulieren, bedrijven en VvE’s',
    shortDescription:
      'Veilige reiniging en kleurbehoud van kunststof kozijnen, deuren, Trespa en Keralit gevelbekleding.',
    editorialIntro:
      'Kunststof is onderhoudsarm, maar zeker niet onderhoudsvrij. Zonder tijdige reiniging vreet atmosferische aanslag en UV-vervuiling in de toplaag van kozijnen en gevelpanelen.',
    detailDescription:
      'Wij reinigen kunststof kozijnen, boeidelen, windveren, Trespa-beplating en Keralit zonder schurende middelen of agressieve oplosmiddelen. Zo blijven rubbers soepel en behouden de panelen hun diepe kleur en matte of satijnen glans.',
    image: IMG_MODERN_HOUSE,
    imageAlt: 'Moderne woning met schone kunststof en aluminium raamkozijnen',
    benefits: [
      'Voorkomt verwering, vergrijzing en blijvende verkleuring van kunststof',
      'Veilig voor afsluitrubbers, folielagen en kitnaden',
      'Beschermende wax-nabehandeling maakt het oppervlak vuil- en waterafstotend',
      'Uitstekend te combineren met periodieke glasbewassing'
    ],
    steps: [
      {
        title: 'Zacht voorspoelen',
        description:
          'Los zand en stuifmeel worden voorzichtig afgespoeld om microkrassen tijdens het wassen uit te sluiten.'
      },
      {
        title: 'Dieptereiniging profielen',
        description:
          'Wij reinigen sponningen, scharnierkanten en beplating grondig met speciaal geformuleerde kunststofreinigers.'
      },
      {
        title: 'Conserverende laag',
        description:
          'Een voedende beschermfilm sluit de poriën af zodat regenwater en vuil minder vat krijgen.'
      }
    ]
  },
  {
    id: 4,
    slug: 'gevelreiniging',
    name: 'Gevelreiniging',
    category: 'glas-gevel',
    categoryLabel: 'Glas & gevel',
    targetAudience: 'Bedrijven, VvE’s en particulieren',
    shortDescription:
      'Vakkundig herstel van baksteen, beton, stucwerk en damwandprofielen voor een representatief pand.',
    editorialIntro:
      'Uitlaatgassen, roetaanslag en weersinvloeden geven een gevel na verloop van jaren een grauwe sluier. Met een materiaalgerichte methode krijgt uw gebouw zijn frisse architectuur terug.',
    detailDescription:
      'Iedere gevel vraagt om maatwerk. Poreus metselwerk, oud voegwerk, gespoten pleisterwerk of aluminium gevelbeplating reageren elk anders op druk en temperatuur. Wij kiezen altijd de zachtste techniek die een volledig schoon resultaat geeft.',
    image: IMG_MODERN_HOUSE,
    imageAlt: 'Strak gereinigde bakstenen en glazen buitengevel van een moderne woning',
    benefits: [
      'Geschikt voor baksteen, sierpleister, beton en metalen gevelbeplating',
      'Verwijdert groene aanslag, roet, mos en atmosferische vervuiling',
      'Voorkomt vochtproblemen en vorstschade aan het gevelmateriaal',
      'Advies over aansluitende hydrofobering of impregnering'
    ],
    steps: [
      {
        title: 'Gevelinspectie',
        description:
          'Controle van steensoort, voegkwaliteit en vervuilingstype om schade aan het metselwerk te voorkomen.'
      },
      {
        title: 'Gecontroleerde reiniging',
        description:
          'Verwijdering van vuil met passende werkdruk, warm water of zachte biologische middelen.'
      },
      {
        title: 'Inspectie & nazorg',
        description:
          'Wij spoelen het geheel zorgvuldig na en geven desgewenst advies over langdurige gevelbescherming.'
      }
    ]
  },
  {
    id: 5,
    slug: 'zonnepanelenreiniging',
    name: 'Zonnepanelenreiniging',
    category: 'dak-buiten',
    categoryLabel: 'Dak & buitenterrein',
    targetAudience: 'Particulieren, bedrijven en VvE’s',
    shortDescription:
      'Krasvrije reiniging met zuiver osmosewater voor optimaal energierendement en een langere levensduur.',
    editorialIntro:
      'Fijnstof, pollen, saharazand en vogeluitwerpselen vormen een hardnekkige waas die regen niet wegspoelt. Een schone installatie benut het zonlicht weer maximaal.',
    detailDescription:
      'Zonnepanelen hebben een gevoelige anti-reflectiecoating. Daarom werken wij nooit met zeep, hogedruk of harde borstels. Met speciaal ontwikkelde zachte borstels en 100% gedemineraliseerd osmosewater maken wij het glas krasvrij en kalkloos schoon.',
    image: IMG_SOLAR_ROOF,
    imageAlt: 'Schone zonnepanelen op een modern hellend dak',
    benefits: [
      'Behoudt en herstelt de maximale lichtopbrengst van uw panelen',
      '100% kalkvrij en zeepvrij osmosewater laat geen residu achter',
      'Krasvrije zachte borstelkoppen speciaal voor zonnepaneelglas',
      'Veilige uitvoering voor zowel woonhuizen als grote bedrijfsdaken'
    ],
    steps: [
      {
        title: 'Veilige toegang',
        description:
          'Wij werken bij voorkeur vanaf de grond met lichtgewicht carbonstelen of veilig gezekerd op het dak.'
      },
      {
        title: 'Reiniging met osmosewater',
        description:
          'Vogelpoep, mosranden en fijnstof worden zacht losgeweekt en volledig weggespoeld.'
      },
      {
        title: 'Visuele dakcheck',
        description:
          'Tijdens het werk letten wij direct op losliggende kabels of zichtbare beschadigingen aan de omlijsting.'
      }
    ]
  },
  {
    id: 6,
    slug: 'dakkapel-en-lijstenreiniging',
    name: 'Dakkapel- en lijstenreiniging',
    category: 'dak-buiten',
    categoryLabel: 'Dak & buitenterrein',
    targetAudience: 'Particulieren en VvE’s',
    shortDescription:
      'Complete reiniging van dakkapellen, boeidelen, windveren, overstekken en omliggende kozijnen.',
    editorialIntro:
      'Dakkapellen en daklijsten vangen veel wind en neerslag, maar zijn vanaf de grond lastig bereikbaar. Regelmatig onderhoud houdt houtwerk en kunststof in topconditie.',
    detailDescription:
      'Wij reinigen de volledige dakkapel: van het boeideel, de zijwangen en de rolluikkast tot aan het glaswerk en de loodslabben. Zwarte regenstrepen en groene algen verdwijnen zonder dat u zelf het dak op hoeft.',
    image: IMG_SOLAR_ROOF,
    imageAlt: 'Strakke gereinigde dakkapellen en daklijsten',
    benefits: [
      'Verlengt de levensduur van schilderwerk en gevelbekleding',
      'Inclusief zijwangen, boeidelen, kozijnen en ramen van de dakkapel',
      'Veilig uitgevoerd zonder dat u zelf op ladders hoeft te staan',
      'Direct merkbaar verschil voor het aanzicht van uw woning'
    ],
    steps: [
      {
        title: 'Opstelling & veiligheid',
        description:
          'Met telescoopsystemen of gezekerd dakmateriaal bereiken wij elk onderdeel rondom de dakkapel.'
      },
      {
        title: 'Reinigen van lijsten & zijwangen',
        description:
          'Groene aanslag, spinnenwebben en zwarte regenbanen worden grondig en krasvrij verwijderd.'
      },
      {
        title: 'Glasbewassing & afwerking',
        description:
          'Als laatste stap wassen wij de ramen en lekdorpels van de dakkapel streeploos schoon.'
      }
    ]
  },
  {
    id: 7,
    slug: 'dakgotenreiniging',
    name: 'Dakgotenreiniging',
    category: 'dak-buiten',
    categoryLabel: 'Dak & buitenterrein',
    targetAudience: 'Particulieren, bedrijven en VvE’s',
    shortDescription:
      'Tijdig legen, doorspoelen en reinigen van dakgoten en hemelwaterafvoeren om lekkage te voorkomen.',
    editorialIntro:
      'Opgehoopt blad, mos en dakgruis blokkeren de afvoer van regenwater. Een verstopte dakgoot kan ongemerkt leiden tot vochtdoorslag aan gevels en houtrot bij dakoverstekken.',
    detailDescription:
      'Wij maken zinken, kunststof en aluminium goten volledig leeg, spoelen de hemelwaterafvoeren door en controleren bladvangers. Op verzoek nemen wij direct de buitenzijde van de bakgoot en de omliggende boeidelen mee.',
    image: IMG_SOLAR_ROOF,
    imageAlt: 'Schone zinken dakgoot en regenpijp aan een modern huis',
    benefits: [
      'Voorkomt overstromende goten, lekkage en vochtschade aan de gevel',
      'Inclusief controle en vrijmaken van regenpijpen en bladroosters',
      'Alle vrijgekomen blad- en slibresten worden netjes afgevoerd',
      'Optionele reiniging van de onder- en buitenzijde van de dakgoot'
    ],
    steps: [
      {
        title: 'Legen van de goot',
        description:
          'Bladeren, mos en bezinksel worden zorgvuldig uit de volledige gootlengte verwijderd.'
      },
      {
        title: 'Doorspoelen hemelwaterafvoer',
        description:
          'We testen en spoelen de afvoerbuizen door voor een gegarandeerde vrije doorstroming.'
      },
      {
        title: 'Buitenzijde & afvoer',
        description:
          'Desgewenst wassen wij de zichtbare gootbak schoon en ruimen wij al het afval netjes op.'
      }
    ]
  },
  {
    id: 8,
    slug: 'anti-spin-behandeling',
    name: 'Anti-spin behandeling',
    category: 'dak-buiten',
    categoryLabel: 'Dak & buitenterrein',
    targetAudience: 'Particulieren, bedrijven en VvE’s',
    shortDescription:
      'Biologisch afbreekbare bescherming tegen spinnenwebben en vervuiling rond kozijnen, verlichting en overstekken.',
    editorialIntro:
      'Net gewassen kozijnen en gevels kunnen binnen enkele dagen weer vol zitten met spinnenwebben. Met een gerichte anti-spin behandeling blijft uw pand maandenlang schoon.',
    detailDescription:
      'Uitwerpselen van spinnen zijn zuur en kunnen schilderwerk blijvend aantasten. Nadat wij alle bestaande webben zorgvuldig hebben verwijderd, brengen wij een onzichtbare, milieuvriendelijke beschermlaag aan op naden, hoeken, dakranden en buitenlampen.',
    image: IMG_MODERN_HOUSE,
    imageAlt: 'Schone gevel en kozijnen vrij van spinnenwebben',
    benefits: [
      '100% biologisch afbreekbaar en veilig voor kinderen, huisdieren en tuin',
      'Laat geen vlekken of doffe waas achter op glas en schilderwerk',
      'Beschermt laklagen tegen aantasting door zure uitwerpselen',
      'Ideaal als jaarlijkse voor- en najaarsbehandeling'
    ],
    steps: [
      {
        title: 'Verwijderen oud spinrag',
        description:
          'Alle bestaande webben, nestjes en sporen rondom kozijnen en verlichting worden eerst verwijderd.'
      },
      {
        title: 'Aanbrengen beschermlaag',
        description:
          'Wij vernevelen het beschermende middel gericht langs randen, kieren en overstekken.'
      },
      {
        title: 'Langdurige werking',
        description:
          'Spinnen hechten zich niet meer op de behandelde zones, waardoor glas en houtwerk merkbaar langer schoon blijven.'
      }
    ]
  },
  {
    id: 9,
    slug: 'hogedrukreiniging',
    name: 'Hogedrukreiniging',
    category: 'dak-buiten',
    categoryLabel: 'Dak & buitenterrein',
    targetAudience: 'Particulieren, bedrijven en VvE’s',
    shortDescription:
      'Egaliserende reiniging van terrassen, opritten, galerijen en bedrijfsterreinen zonder opspattend vuil.',
    editorialIntro:
      'Gladde algvorming op bestrating, vervuilde parkeervakken en bemoste bedrijfstoegangen verminderen zowel de uitstraling als de veiligheid. Wij brengen het oppervlak weer strak terug.',
    detailDescription:
      'In plaats van strepen te spuiten met een losse lans gebruiken wij afgeschermde roterende oppervlaktereinigers. De waterdruk stemmen wij nauwkeurig af op keramiek, betonstraatstenen of natuursteen zodat het materiaal en de omliggende gevels onbeschadigd blijven.',
    image: IMG_EQUIPMENT,
    imageAlt: 'Schoon en strak gereinigd terras en oprit met professioneel materieel',
    benefits: [
      'Spatvrije uitvoering dankzij professionele roterende terrasreinigers',
      'Verwijdert gladde aanslag, mos en hardnekkig straatvuil egaal',
      'Verhoogt de loopveiligheid op galerijen, trappen en entrees',
      'Optioneel opnieuw invegen van bestrating met schoon voegzand'
    ],
    steps: [
      {
        title: 'Afstemmen werkdruk',
        description:
          'Wij testen de juiste druk en temperatuur afgestemd op het type steen of beton.'
      },
      {
        title: 'Spatvrij reinigen',
        description:
          'Met afgeschermde oppervlaktereinigers werken wij de volledige bestrating baan voor baan egaal schoon.'
      },
      {
        title: 'Naspoelen & invegen',
        description:
          'Losgekomen vuil wordt afgevoerd en op wens vegen wij de voegen netjes opnieuw in.'
      }
    ]
  },
  {
    id: 10,
    slug: 'softwashreiniging',
    name: 'Softwashreiniging',
    category: 'glas-gevel',
    categoryLabel: 'Glas & gevel',
    targetAudience: 'Particulieren, bedrijven en VvE’s',
    shortDescription:
      'Zachte lage-drukreiniging voor kwetsbare gevels, stucwerk en daken met langdurige werking bij de bron.',
    editorialIntro:
      'Waar hogedruk te krachtig is voor stucwerk, hout of kwetsbare dakpannen, biedt softwash uitkomst. Zachte druk gecombineerd met diepwerkende reiniging pakt vervuiling bij de wortel aan.',
    detailDescription:
      'Softwash verwijdert niet alleen het zichtbare vuil aan de oppervlakte, maar neutraliseert ook de sporen van algen, korstmossen en schimmels diep in de poriën. Daardoor blijft het oppervlak aanzienlijk langer schoon zonder risico op losse voegen of vochtschade.',
    image: IMG_MODERN_HOUSE,
    imageAlt: 'Schone gevel behandeld met zachte softwashreiniging',
    benefits: [
      'Veilig voor kwetsbaar stucwerk, hout, crepi en oudere dakpannen',
      'Geen mechanische drukbelasting op voegen, kitnaden of verfwerk',
      'Pakt micro-organismen bij de wortel aan voor een langduriger resultaat',
      'Zorgvuldig afgestemd op omliggend groen en tuinbeplanting'
    ],
    steps: [
      {
        title: 'Voorbescherming omgeving',
        description:
          'Gevoelige beplanting in de directe omgeving wordt vooraf bevochtigd en beschermd.'
      },
      {
        title: 'Lage-druk applicatie',
        description:
          'De biologisch actieve oplossing wordt onder zachte druk gelijkmatig over het oppervlak verdeeld.'
      },
      {
        title: 'Zachte spoeling & resultaat',
        description:
          'Na de inwerktijd spoelen wij het oppervlak licht na voor een diep en langdurig schoon resultaat.'
      }
    ]
  },
  {
    id: 11,
    slug: 'opleveringsschoonmaak',
    name: 'Opleveringsschoonmaak',
    category: 'interieur',
    categoryLabel: 'Interieur & oplevering',
    targetAudience: 'Aannemers, bedrijven en particulieren',
    shortDescription:
      'Volledige eindschoonmaak na nieuwbouw, renovatie of verhuizing voor een direct instapklare overdracht.',
    editorialIntro:
      'Na een bouw- of renovatietraject blijven fijn bouwstof, verfspatten, stickers en cementsluier achter. Wij maken elke ruimte grondig schoon zodat het pand direct gebruikt of opgeleverd kan worden.',
    detailDescription:
      'Onze opleveringsschoonmaak is volledig afgestemd op strakke bouwplanningen. Van het krasvrij verwijderen van folie en kitresten op ruiten tot het diep reinigen van sanitair, keukens, vloeren en luchtroosters: wij leveren niets minder dan een instapklaar resultaat.',
    image: IMG_FLOOR,
    imageAlt: 'Instapklaar gereinigde hal en glaspartijen na opleveringsschoonmaak',
    benefits: [
      'Krasvrije verwijdering van stickers, bouwfolie, verf- en kitresten',
      'Grondige ontstoffing van wanden, kozijnen, plinten, lampen en roosters',
      'Inclusief complete glasbewassing en vloerreiniging',
      'Flexibel en snel inzetbaar rondom uw opleverdatum'
    ],
    steps: [
      {
        title: 'Verwijderen van bouwresten',
        description:
          'Wij halen beschermfolies, labels, verfspatten en achtergebleven bouwvuil krasvrij weg.'
      },
      {
        title: 'Totale reiniging van boven naar beneden',
        description:
          'Alle ruimtes, sanitair, keukens, kasten, ruiten en vloeren worden systematisch gereinigd.'
      },
      {
        title: 'Opleveringsronde',
        description:
          'Samen met u of de uitvoerder lopen wij het pand na voor een vlekkeloze eindoplevering.'
      }
    ]
  }
];
