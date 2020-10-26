const projectsList = () => ([
    {
      name: 'Lovicon',
      img: 'proyectolovicon.jpg',
      excerpt: 'Proyecto realizado con Gatsby JS',
      url: 'lovicon',
      technologies: ['Html5', 'Css3', 'Javascript', 'React', 'Gatsby', 'Github'],
      description: 'Página web estática realizada para Lovicon, se necesitaba que la web fuese rápida, por esta razón, se realizo con Gatsby JS, esta tecnología nos permitió asegurar buen rendimiento, además, usamos un plugin de Gatsby que nos permite cargar las imágenes de la web en baja resolución en el primer renderizado, esto da un extra de velocidad a la web.',
      urlProject: 'http://loviconretail.co/',
      git: 'https://github.com/interactivos123/Lovicon'
    },
    {
      name: 'Manolo',
      img: 'manolo.png',
      excerpt: 'Proyecto realizado con Wordpress',
      url: 'manolo',
      technologies: ['Html5', 'Css3', 'Javascript', 'Wordpress', 'Elemen tor'],
      description: 'Portafolio de Manuel Ayala, experto en marketing digital, proyecto realizado con wordpress y el constructor de sitios de Elementor, con tema claro y oscuro para que el usuario elija el de su preferencia.',
      urlProject: 'https://manolo.com.co'
    },
    {
      name: 'App podcast',
      img: 'podcastPlatzi.png',
      excerpt: 'Proyecto realizado con Next JS',
      url: 'app-podcast',
      technologys: ['Html5', 'Css3', 'Javascript', 'React', 'Next', 'Github'],
      description: 'Proyecto del curso de Next Js de Platzi, realizamos una app de podcast, consumiendo los datos de la api de audioboom y haciendo server side rendering de una página bastante dinámica, luego mostramos todos estos datos traídos de la api.',
      urlProject: 'https://app-podcast.vercel.app/'
    },
    {
      name: 'Petgram',
      img: 'petgram.png',
      excerpt: 'Proyecto realizado con React JS',
      url: 'petgram',
      technologys: ['Html5', 'Css3', 'Javascript', 'React', 'Github'],
      description: 'Proyecto del curso de React Avanzado de Platzi, aquí desarrollamos un clon de Instagram de animales, usamos hooks, GraphQL, React Apollo y gestionamos la sesión del usuario.',
      urlProject: 'https://petgram-lwj3yh1o8.vercel.app/'
    },
    {
      name: 'Platzi Badges',
      img: 'projectBadges.png',
      excerpt: 'Proyecto realizado con React JS',
      url: 'platzi-badges',
      technologies: ['Html5', 'Css3', 'Javascript', 'React', 'Github'],
      description: 'Proyecto realizado para el curso de React de Platzi, en este implementamos todos los conocimientos básicos de la librería para desarrollar un sistema de control de participantes en la PlatziConf.',
      git: 'https://github.com/simontorresdev/Platzi-Badges'
    },
    {
      name: 'Global',
      img: 'Global.png',
      excerpt: 'Proyecto realizado con Wordpress',
      url: 'global',
      technologies: ['Html5', 'Css3', 'Javascript', 'Wordpress', 'Elementor'],
      description: 'Proyecto realizado para la empresa Global Securities Colombia, desarrollada con Wordpress y el constructor de sitios Elementor, además, consumimos un web service de Global para mostrar ciertos datos en la web.',
      urlProject: 'https://www.globalcdb.com'
    },
    {
      name: 'App Platzi video',
      img: 'platzivideo1.jpg',
      img2: 'platzivideo2.jpg',
      excerpt: 'Proyecto realizado con React Native',
      url: 'app-platzi-video',
      technologies: ['Html5', 'Css3', 'Javascript', 'React Native', 'Github'],
      description: 'App realizada en el curso de React Native de Platzi, en esta consumimos una api para traer datos de películas y luego mostrarlas y clasificarlas em diferentes pantallas.',
      git: 'https://github.com/simontorresdev/platzivideo'
    },
    {
      name: 'Gallery',
      img: 'Gallery.jpg',
      excerpt: 'Proyecto realizado con Wordpress',
      url: 'gallery',
      technologies: ['Html5', 'Css3', 'Javascript', 'Wordpress', 'Elementor'],
      description: 'Página web realizada para la empresa Gallery constructora, desarrollada con Wordpress y el constructor de sitios Elementor, en ella se muestran los proyectos que la empresa ha realizado y aquellos que se encuentran en venta actualmente.',
      urlProject: 'https://galleryconstructora.com/'
    }
  ])
  
  module.exports = { projectsList }