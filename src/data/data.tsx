import { NavlinkItem, ProjectI, ResumeData, InfoYEntrevistas, SliderImages } from "../models/types";
import videoFlatt from "/videos/coverFlatt.mp4"
import videoBiomorfismos from "/videos/coverBiomorfismos.mp4"

export const homeImages: SliderImages[] = [
  { original: "https://i.ibb.co/k2FWVZ5/background-1.jpg" },
  { original: "https://i.ibb.co/C6V8JJB/background-2.jpg" },
  { original: "https://i.ibb.co/wCk10nB/IMAGEN-1-Y-2-LISTA-DE-PROYECTOS-E-INICIAL-web1.jpg" },
  { original: "https://i.ibb.co/DLYpxsw/background-4.jpg" },
  { original: "https://i.ibb.co/HTNfqr1/background-5.jpg" },
  { original: "https://i.ibb.co/fr6trCY/background-6.jpg" },
  { original: "https://i.ibb.co/xYPsD1W/background-7.jpg" },]

export const navLinks: NavlinkItem[] = [
  {
    to: "/proyectos",
    title: "proyectos",
  },
  {
    to: "/bio",
    title: "bio",
  },
  {
    to: "/resume",
    title: "resume",
  },
  {
    to: "/contacto",
    title: "contacto",
  },
];

export const projects: ProjectI[] = [
  {
    id: '1',
    title: "Desterritorialización de mi avatar",
    location: "AURA Fábrica - Buenos Aires, Arg",
    year: '2023',
    listImage: "https://i.ibb.co/wCk10nB/IMAGEN-1-Y-2-LISTA-DE-PROYECTOS-E-INICIAL-web1.jpg",
    textColor: "#fff",
    data: {
      coverImage: "https://i.ibb.co/wCk10nB/IMAGEN-1-Y-2-LISTA-DE-PROYECTOS-E-INICIAL-web1.jpg",
      staticImage: "https://i.ibb.co/FnYXzfy/IMAGEN-4-web1.jpg",
      figure1: "https://i.ibb.co/8YGsYRs/IMAGEN-3-web1.jpg",
      figcaption1: "Realizadas con desechos tecnológicos e industriales rescatados de basurales y ensamblaje de piezas en impresión 3D.",
      figure2: "https://i.ibb.co/18RN3Xf/IMAGEN-5-web1.jpg",
      figcaption2: "",
      paragraph1: `En la actual era digital, cada clic, búsqueda y movimiento en línea contribuye a la formación de un "avatar", una representación virtual que evoluciona con cada interacción. Este avatar no se limita a ser una simple imagen; es una entidad en constante cambio que trasciende las restricciones del espacio físico, inmerso en un territorio digital en expansión constante.`,
      paragraph2: `Nuestro "avatar" se convierte en un reflejo especulativo de nuestras acciones y deseos digitales, un código que interpreta nuestra experiencia en línea y la traduce en una interfaz personalizada. Esta interfaz es única para cada individuo y tiene la capacidad de cambiar infinitamente en tiempo real. Similar a explorar nuevas dimensiones de territorio, la obra invita a explorar las fronteras de la identidad digital y la autenticidad en un mundo virtual.`,
      paragraph3: `La desterritorialización de mi avatar virtual se revela como una experiencia introspectiva y colectiva a la vez. Cada interacción digital desencadena un proceso de transformación en el avatar, generando una narrativa visual en constante desarrollo mientras navegamos por los vastos océanos de la web. La fluidez del avatar refleja la naturaleza cambiante de la identidad en una sociedad hiperconectada, desafiando las nociones tradicionales de espacio, tiempo y autenticidad.`,
      sliderImages: [
        { original: "https://i.ibb.co/pZMJYzS/CARROUSEL-1-web.jpg" },
        { original: "https://i.ibb.co/3N7TbWy/CARROUSEL-2-web.jpg" },
        { original: "https://i.ibb.co/9TnH5Jq/CARROUSEL-3-web.jpg" },
        { original: "https://i.ibb.co/jGytYp6/CARROUSEL-4-web.jpg" },
        { original: "https://i.ibb.co/B39VYHv/CARROUSEL-5-web.jpg" },
        { original: "https://i.ibb.co/tDS2kpK/CARROUSEL-6-web.jpg" },
        { original: "https://i.ibb.co/z512FCQ/CARROUSEL-7-web.jpg" },
        { original: "https://i.ibb.co/PjYYcfV/CARROUSEL-8-web.jpg" },
        { original: "https://i.ibb.co/ydV9pCh/CARROUSEL-9-web.jpg" },]
    }
  },
  {
    id: '2',
    title: "Tránsito",
    location: "La Plata - Buenos Aires, Arg",
    year: '2021 - 2023',
    listImage: "https://i.ibb.co/pyXt00X/IMAGEN-1.jpg",
    textColor: "#000",
    data: {
      coverImage: "https://i.ibb.co/g78Synm/imagen-2.jpg",
      staticImage: "https://i.ibb.co/DVgSMrV/imagen-4.jpg",
      staticImage2: "https://i.ibb.co/kcfCGNq/IMAGEN-ENTRE-PARRAFO-E-IMAGEN-3-achicado-transito.jpg",
      figure1: "https://i.ibb.co/Wx8sW8w/imagen-3-opcion-2.jpg",
      figcaption1: "“tu pulso lenguaje” /140x110x90cm/ 2023",
      figure2: "https://i.ibb.co/tMB256K/imagen-5.jpg",
      figcaption2: "",
      paragraph1: `Mi obra surge en un presente altamente vulnerado por problemáticas ambientales y sociales de la mano de un proceso de tecnologización y exploración de la inteligencia artificial. En la misma, el tiempo no tiene un carácter cronológico unidimensional, nos propone una convivencia entre nuestro presente colectivo y un futuro posible de vidas potenciales que exploran tránsitos de órdenes múltiples. La obra nace como un espacio de reflexión retrospectivo y proyectivo a la vez, que carga el compromiso de ofrecer una perspectiva temporal como herramienta para la problematización de nuestro presente.`,
      paragraph2: `Quienes habitan este futuro diseñado ya no somos nosotres, la humanidad se convierte en un vestigio, son seres fundamentalmente sintéticos con inteligencias propias que en su identidad artificial transitan experiencias de otro orden, una existencia virtual.  Estes seres comparten una intención; transgredir los límites de su naturaleza entrando en una interdependencia material tanto inocente y curiosa como crítica de sus contextos, motorizados por una profunda carga nostálgica de lo vivo, de la compañía, del sentirse. Se ponen en narrativa universos estéticos que involucran desde avatares customizables en softwares virtuales hasta robots con despertares sensibles y biomorfismos que buscan recrear la vida orgánica. En esta noción temporal que trasciende la nuestra vemos lo que permanece, un ciclo de obsolescencia, extinción y continuidad. Un encadenamiento de transformaciones continuas que siento muy presente en nuestra contemporaneidad bajo la lógica productiva de la economía global que tiene sus motores en la depredación de los recursos naturales, la obsolescencia programada y la abismante amenaza de la extinción.`,
      paragraph3: `Los materiales que uso para mi obra son desechos tecnológicos e industriales recuperados de basurales y plantas de separación. Mi proceso involucra técnicas como la investigación de la naturaleza de diversos artefactos, soldadura, herrería, robótica y diversas técnicas de fabricación. Poniéndome en contacto y articulando con organismos y cooperativas de gestión de residuos pude acceder a estas piezas y adjudicarles un nuevo uso, una segunda oportunidad, aquella utilidad que los reinvente y los exilie de la cadena de desperdicios.`,
      sliderImages: [
        { original: "https://i.ibb.co/LgVR4VZ/carrousel-1.jpg" },
        { original: "https://i.ibb.co/kDHZQSb/carrousel-2.jpg" },
        { original: "https://i.ibb.co/QHjx97h/CARROUSEL-3-TRANSITO-MEJORADA.jpg" },
        { original: "https://i.ibb.co/Yb5fNKc/carrousel-5.jpg" },]
    }
  },
  {
    id: '3',
    title: "Biomorfismos",
    location: "La Plata - Buenos Aires, Arg",
    year: '2023',
    listImage: "https://i.ibb.co/kHSLMr1/IMAGEN-1-web.jpg",
    textColor: "#000",
    data: {
      coverImage: videoBiomorfismos,
      staticImage: "https://i.ibb.co/H7RwSZH/IMAGEN-4-web.jpg",
      figure1: "https://i.ibb.co/M2jYx1L/IMAGEN-3-web.jpg",
      figcaption1: "Explorando la armonía entre lo tangible y lo virtual.",
      figure2: "https://i.ibb.co/603G031/IMAGEN-5-web.jpg",
      figcaption2: "“Vida III”, 2023",
      paragraph1: `Sobre la delgada frontera entre lo orgánico y lo sintético se erige un intrigante espectáculo de biomorfismos que desentrañan su plástica esencia en una reflexión conmovedora sobre la fragilidad inherente a lo orgánico en un mundo acosado por las vicisitudes del cambio climático y el progreso tecnológico. Estos avances no generan simples herramientas neutrales; más bien, ejercen un impacto profundo en la configuración de la sociedad y en la relación de los seres humanos con la naturaleza. El desarrollo tecnológico, desde esta perspectiva, podría acarrear consecuencias inevitables para nuestra interacción con el entorno natural.`,
      paragraph2: `La metáfora cobra una profundidad fascinante al escudriñar cada componente de los biomorfismos: el símil “agua”, en su esencia una amalgama química, el “pasto”, que se manifiesta ante nosotros como una imitación palpable de plástico. Estos elementos, imbuidos de una ternura nostálgica, encapsulan la incapacidad intrínseca de replicar con autenticidad lo orgánico. Más allá de meros indicadores, sirven como premoniciones de un futuro en el cual lo biológico podría desvanecerse ante la degradación ambiental. Observando detenidamente desde diferentes ángulos, se revelan detalles ocultos detrás de la superficie; microesculturas virtuales de la vida orgánica emergen; pequeñas plantas en crecimiento con formato de animaciones 3D en pantallas. Aquí la artista introduce una innovación técnica entrelazando el modelado tridimensional tanto en el ámbito virtual como en nuestra propia dimensión física, dando origen a una obra híbrida entre dimensiones que fusiona la estética del arte digital con la esencia más clásica de una creación manual.`,
      paragraph3: `En el paisaje parece haber un susurro de tristeza, una expresión inocente de esfuerzo por recrear lo que una vez fue. Las tecnologías, en su empeño por rescatar lo inexistente, manifiestan con sus movimientos un sentimiento tierno, como si recordaran con cariño y añoranza un pasado que se desvanece. Esta conmovedora mezcla de nostalgia y esfuerzo permea la obra plantando la incertidumbre de si acaso la tecnología podría convertirse en la nueva "naturaleza" o en la única forma de preservar elementos esenciales de la vida orgánica. Es como si estos dispositivos de alta tecnología se hubieran distanciado de su autenticidad productiva, llevándolos a una especie de alienación y provocando que olviden su propio ser. ¿Acaso en esta ficción la tecnología necesita lo biológico para funcionar? ¿Qué llevaría a esta voluntad de vida? ¿Un sentimiento o simple practicidad productiva? En una sociedad contemporánea cada vez más enfocada en la eficiencia y conveniencia, la tecnología puede desplazar la autenticidad individual en pos de la productividad. Las exigencias del entorno tecnológico pueden presionar a las personas a adoptar roles y comportamientos que no reflejan necesariamente su verdadero ser. Así como también en este contexto ficticio, la planta crece en lugares improbables, impulsada por una ¿inutil? nostalgia de vida.`,
      sliderImages: [
        { original: "https://i.ibb.co/J3R0RY9/CARROUSEL-3-web.jpg" },
        { original: "https://i.ibb.co/znc3WG2/carrousel-1-web.jpg" },
        { original: "https://i.ibb.co/bHfX8ZV/carrousel-2-web.jpg" },
        { original: "https://i.ibb.co/3mWnwVg/CARROUSEL-4-web.jpg" },
        { original: "https://i.ibb.co/Dgg2gWH/CARROUSEL-5-web.jpg" },
        { original: "https://i.ibb.co/g6BdT9x/CARROUSEL-6-web.jpg" },
        { original: "https://i.ibb.co/H4mVdmY/CARROUSEL-8-web.jpg" },
        { original: "https://i.ibb.co/TvBNjhR/CARROUSEL-9-web.jpg" },
        { original: "https://i.ibb.co/3kyG0s9/CARROUSEL-10-web.jpg" }]
    },
  },
  {
    id: '4',
    title: "a-genoma",
    location: "NN galería - Buenos Aires, Arg",
    year: '2023',
    listImage: "https://i.ibb.co/NYvwMkR/IMAGEN-1-Y-2.jpg",
    textColor: "#fff",
    data: {
      coverImage: "https://i.ibb.co/NYvwMkR/IMAGEN-1-Y-2.jpg",
      staticImage: "https://i.ibb.co/fpQfp6N/IMAGEN-4-web.jpg",
      figure1: "https://i.ibb.co/r0Sv0Tz/IMAGEN-3.jpg",
      figcaption1: "",
      figure2: "https://i.ibb.co/P1ScxKY/IMAGEN-5-web.jpg",
      figcaption2: "Portal.",
      paragraph1: `En el vasto espacio de la sala, reclama atención con su presencia majestuosa, como si fuera un faro que guía la curiosidad de aquellos que deambulan por el recinto. Sus formas sinuosas y su misteriosa esencia evocan un sentido de génesis, de un origen compartido entre lo natural y lo fabricado. Con una apariencia que oscila entre un útero, un pulpo y aletas con vertebración insondable, esta figura, de dimensión imponente, se yergue como un testimonio tangible de lo que será. Con una extremidad alargada, a-genoma se proyecta hacia el espectador extendiendo una invitación silente a la interacción, un llamado a explorar su superficie, a desentrañar el enigma que yace en su fusión de materiales y significados. Es un encuentro íntimo entre el tacto humano y una creación que parece susurrar en detalles, una apremiante voluntad de vida, una sed de existencia palpable en cada gesto.`,
      paragraph2: `Al tocar el sensor de pulso cardíaco, el espectador activa un diálogo entre su propia vitalidad biológica y la respuesta lumínica de las "amígdalas" del ser. Esta interacción directa refleja una identidad mestiza que desafía las distinciones convencionales entre lo orgánico y lo artificial. La obra responde y se activa con nuestra actividad interna; ahora somos parte de ella, en este acto de simbiosis nos completamos, siento que entiende algo sobre mí y yo entiendo algo sobre… ¿ella?. Acaso la tecnología no es simplemente una herramienta externa sino que se integra a nuestra existencia de manera íntima. La artista refleja en su obra que la relación entre tecnología y biología no es de oposición, sino de interdependencia. Por otro lado, al observar esta obra y su morfología tanto asexuada como bisexuada, podríamos imaginar que cumple efectivamente con las funciones de dos aparatos reproductores hermafroditas; examinamos las interconexiones entre el género, la tecnología y la biología, desafiando la idea de una naturaleza pura y proponiendo una comprensión más compleja de cómo estas dimensiones se entrelazan en la realidad contemporánea. Aboga por superar las dualidades tradicionales, como naturaleza/tecnología, hombre/mujer, estas dicotomías simplifican en exceso la realidad, aquí se inclina por una comprensión más matizada que reconozca la complejidad y la interconexión de las relaciones.`,
      paragraph3: `Para llegar a este monumento escultural, se requiere atravesar un portal de hierro, ascender dos escalones que marcan la transición hacia un espacio íntimo y transcendental. La artista, como maestra de ceremonias, plantea un desafío: ¿estás dispuestx a cruzar ese umbral y sumergirte en la experiencia que aguarda más allá? Así, al acercarse a la escultura, se gesta un momento íntimo entre  espectador y obra, una conexión tangible que trasciende la mera observación. Este acto de tocar, de explorar las texturas y formas se convierte en un rito de iniciación, una prueba de disposición a descifrar los secretos que esta creación encierra en su seno.`,
      sliderImages: [
        { original: "https://i.ibb.co/PzKzHSz/CARROUSEL-1.jpg" },
        { original: "https://i.ibb.co/P6QvVfK/CARROUSEL-2.jpg" },
        { original: "https://i.ibb.co/Jqf2PhM/CARROUSEL-3.jpg" },
        { original: "https://i.ibb.co/X4fZ55J/CARROUSEL-4.jpg" },
      ]
    },
  },
  {
    id: '5',
    title: "Flattening of Reality",
    location: "Media Galería - Buenos Aires, Arg",
    year: '2023',
    listImage: "https://i.ibb.co/PMxn8WW/IMAGEN-1.jpg",
    textColor: "#000",
    data: {
      coverImage: videoFlatt,
      staticImage: "https://i.ibb.co/WvsjsHq/IMAGESN-4.jpg",
      figure1: "https://i.ibb.co/xg6nmTB/IMAGEN-3.jpg",
      figcaption1: "“Lágrimas”, 2023",
      figure2: "https://i.ibb.co/my8HvsR/imagen-4-segunda-opcion.jpg",
      figcaption2: "“Parte de mi”, 2023",
      paragraph1: `Aplico las leyes que percibo en el entorno digital a mis pinturas, donde las representaciones 2D a menudo simplifican y aplanan la realidad, eliminando detalles complejos y utilizando formas y líneas claras para transmitir la esencia de un objeto o concepto. Esto funciona como una respuesta a la sobreabundancia de información en línea, donde la simplificación visual ayuda a la rápida asimilación de grandes cantidades de contenido; es crucial en entornos digitales y físicos donde la atención del espectador es fugaz. Mi elección estilística resona con la naturaleza selectiva y estilizada de la vida en línea y las plataformas web. Es el Flattening of Reality.`,
      paragraph2: `Mis personajes contemplan. Trato temas como el posible roce entre entes virtuales y la vida orgánica, el cruce de dimensiones, fantasías simuladas, escapes del ciberespacio, narrativas de la interweb y la nostalgia. Explorando la intersección entre la realidad y la simulación, mis creaciones buscan desentrañar los límites entre lo tangible y lo virtual. A medida que mis personajes se sumergen en paisajes digitales, abordo la conexión emocional entre la inteligencia artificial y los sentimientos humanos, planteando interrogantes sobre la autenticidad de las experiencias en un mundo cada vez más dominado por la tecnología.`,
      paragraph3: `A su vez, en mis pinturas se leen influencias del estilo animé japonés; histórico lienzo en blanco para la customización en materia de aspectos físicos fantásticos, la representación de unx mismx a través de avatares en redes sociales plantea preguntas sobre la construcción de la identidad digital. Los avatares pueden ser expresiones idealizadas o alter ego de los usuarios, permitiéndoles explorar aspectos de sí mismxs que pueden no ser evidentes en la vida cotidiana. Mis avatares sin dueñx deambulan en la red sin anuncio asignado, exploran dimensiones y reflexionan sobre sus esencias artificiales jugando con la noción de “avatar emocional".`,
      paragraph4: `A medida que me sumerjo en el universo de la narrativa digital, la dualidad entre la ilusión y la realidad se convierte en un tema recurrente. Mis obras buscan cuestionar la autenticidad de las narrativas construidas en línea y cómo estas afectan la percepción de la verdad en nuestra sociedad actual. De esta manera, mi exploración artística se convierte en un viaje hacia la comprensión de las complejidades de la existencia en la era digital. La inclusión ocasional de signos y símbolos del internet, como píxeles o detalles de edición de imágenes, interfaces de programas de modelado 3D fusionado con objetos tridimensionales físicos escultóricos se traducen en la sensación de que mis personajes se mueven entre dimensiones, como si fueran entidades que existen no solo en la aplanada realidad de la red sino también en nuestro eje espacio temporal.`,
      sliderImages: [
        { original: "https://i.ibb.co/xjQrFb4/carrousel-1.jpg" },
        { original: "https://i.ibb.co/ZMzt1Bg/carrousel-2.jpg" },
        { original: "https://i.ibb.co/mDKr1nK/carrousel-3.jpg" },
        { original: "https://i.ibb.co/xghh8zG/carrousel-4.jpg" },
        { original: "https://i.ibb.co/Lt5gK8z/carrousel-5.jpg" },
        { original: "https://i.ibb.co/MC7zQg2/carrousel-6.jpg" },
        { original: "https://i.ibb.co/3BF2Xjd/carrousel-7.jpg" },
        { original: "https://i.ibb.co/Xzvbrxx/carrousel-8.jpg" },
        { original: "https://i.ibb.co/GVdyF5X/carrousel-9.jpg" },
        { original: "https://i.ibb.co/3Rdt9Lh/carrousel-10.jpg" },
        { original: "https://i.ibb.co/0nDkLzP/carrosuel-11.jpg" },]
    },
  },
];

export const resumeData: ResumeData = [
  {
    title: "exhibiciones",
    items: [
      {
        subtitle: "solo show",
        list: [{
          spanBold: "TAL VEZ SEA",
          text: '/ NN Galería/ La Plata, Buenos Aires 2023',
        }
        ]
      },
      {
        subtitle: "colectiva",
        list: [
          {
            spanBold: "Host de nuestros sueños",
            text: '/ Aura Fábrica / 2023',
          },
          {
            spanBold: "ARTEBA",
            text: '/ Aura Fábrica / 2023',
          },
          {
            spanBold: "El animé me ayudó a respetar el planeta",
            text: '/ Media Galería / 2023',
          },
          {
            spanBold: "PLATEADA FERIA",
            text: '/ Teatro Argentino / 2023',
          },
          {
            spanBold: "Pleamar: Artes Electrónicas",
            text: '/ Centro Cultural Recoleta / 2023',
          },
          {
            spanBold: "MOMENTISMO ABSOLUTO",
            text: '/ MUNAR / 2023',
          },
          {
            spanBold: "Apología",
            text: '/ Club de Artes y Ocios / La Plata, 2023',
          },
          {
            spanBold: "Yo <3 La Plata",
            text: '/ La ferretería / 2023',
          },
          {
            spanBold: "¿A quién engaño?",
            text: '/ MUNAR / 2022',
          },
          {
            spanBold: "Refugio de valor",
            text: '/ MUNAR / 2022',
          },
          {
            spanBold: "Neo.nexo",
            text: '/ NN Galería / 2021',
          },
        ]
      }
    ]
  },
  {
    title: "premios",
    items: [
      {
        subtitle: "premio en obra",
        list: [{
          spanBold: "ARTEBA",
          text: '/ 2023',
        }
        ]
      },
      {
        subtitle: "mención especial escultura",
        list: [
          {
            spanBold: "110° Salón Nacional de Bellas Artes",
            text: '/ Centro cultural Borges / 2022',
          },
          {
            spanBold: "101° Salón provincial",
            text: '/ Museo Pettoruti / 2024',
          },
          {
            spanBold: "100° Salón provincial",
            text: '/ Museo Pettoruti / 2023',
          },
        ]
      }
    ]
  },
  {
    title: "educación",
    items: [
      {
        subtitle: "(2013 - 2015)",
        list: [
          {
            text: 'Taller y Clínica de Obra con Manuel Rubín',
          }
        ]
      },
      {
        subtitle: "(2015 - 2018)",
        list: [
          {
            text: 'Centro Polivalente de Artes, especialidad artes visuales',
          }
        ]
      },
      {
        subtitle: "(2015 - 2019)",
        list: [
          {
            text: 'Colegio Central Universitario UNSJ especialidad Artes Visuales',
          }
        ]
      },
      {
        subtitle: "(2019 - 2022)",
        list: [
          {
            text: 'Bachillerato de Bellas Artes de la Universidad de La Plata, especialidad cultura; experimentales',
          }
        ]
      },
      {
        subtitle: "(2022 - 2023)",
        list: [
          {
            text: 'Clínica de obra con Flavia Da Rin',
          }
        ]
      },
      {
        subtitle: "(2023 - 2024)",
        list: [
          {
            text: 'Programa de Artistas Universidad Torcuato di Tella (UTDT)',
          }
        ]
      },
      {
        subtitle: "(2023)",
        list: [
          {
            text: 'Taller escultura con Daniel Basso, Ramos General, La Plata',
          }
        ]
      },
      {
        subtitle: "(2023 - Actualidad)",
        list: [
          {
            text: 'Carrera Diseño de Imagen y Sonido, FADU, Universidad de Buenos Aires (UBA)',
          }
        ]
      },
      {
        subtitle: "(2024)",
        list: [
          {
            text: 'Taller de escultura con Luis Terán',
          }
        ]
      },
    ]
  },
];

export const masInfoyEntrevistas: InfoYEntrevistas[] = [
  {
    title: "Entrevista en El Ojo del Arte con Maria Paula Zacharías",
    url: "https://open.spotify.com/episode/2KiE1rnJ1CEJuARMk1NUyc?si=9Mzst53iTyGlBVmOyhGhg"
  },
  {
    title: "Revista Anfibia, Ensayo CRÓNICA DE UNA RECONCILIACIÓN ANUNCIADA: TECNOLOGÍAS EN EL ARTE CONTEMPORÁNEO por Jazmín Adler",
    url: "https://www.revistaanfibia.com/tecnologias-en-el-arte-contemporaneo/"
  },
  {
    title: "Arte Online; Utopía, Una apuesta al futuro",
    url: "https://www.arte-online.net/Notas/Utopia"
  },
  {
    title: "Se conocieron los ganadores y ganadoras de los premios de la 110.ª edición del Salón Nacional de Artes Visuales",
    url: "https://www.argentina.gob.ar/noticias/se-conocieron-los-ganadores-y-ganadoras-de-los-premios-de-la-110a-edicion-del-salon"
  },
  {
    title: "3 stands para visitar en arteBA 2023",
    url: "https://indiehoy.com/arte/3-stands-para-visitar-en-arteba/"
  },
  {
    title: "Entrevista con Gustavo Bruzzone en MUNAR, La Boca",
    url: "https://www.instagram.com/reel/ChkbFg9Mu7a/?igsh=MTJ4cG1hODhzY3hyMg=="
  },
  {
    title: "Entrevista con Mariana Gioiosa en ARTEBA 2023",
    url: "https://www.instagram.com/reel/CwsZiPau0pl/?igsh=ZTA3M2cyb2Qzdmpr"
  },
  {
    title: "Se entregaron los premios del 110.° Salón Nacional de Artes Visuales",
    url: "https://palaisdeglace.cultura.gob.ar/noticia/se-entregaron-los-premios-del-110-salon-nacional-de-artes-visuales/"
  },
  {
    title: "Artes Electrónicas en El Recoleta",
    url: "http://centroculturalrecoleta.org/agenda/pleamar-artes-electronicas-en-el-recoleta"
  }
];

