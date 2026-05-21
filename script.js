const teamMembers = [
  {
    nombre: 'Emilio De La Peña Chacón',
    rol: 'SCRUM Master & Desarrollador backend',
    github: 'https://github.com/EmilioChacon',
    linkedin: 'https://www.linkedin.com/in/emilio-dlp-chacon/',
    portfolio: 'https://emiliochacon.dev/',
    imagen: 'emilio.jpeg'
  },
  {
    nombre: 'Santiago Regidor',
    rol: 'Desarrollador frontend',
    linkedin: '#',
    cv: 'CV_Santiago.pdf',
    imagen: 'Santi.jpeg'
  },
  {
    nombre: 'Rafael Sánchez',
    rol: 'Desarrollador fullstack',
    github: 'https://github.com/KingMapachelo',
    linkedin: 'https://www.linkedin.com/in/rafael-s%C3%A1nchez-mart%C3%ADnez-0077b23b3/',
    cv: 'CVRafaelSanchez.pdf',
    imagen: 'RafaelSanchez.jpg'
  },
  {
    nombre: 'Javier Galán',
    rol: 'Desarrollador backend',
    github: 'https://github.com/JavGalGas',
    linkedin: 'https://www.linkedin.com/in/javier-galan-360748351/',
    imagen: 'javier.jpg'
  },
  {
    nombre: 'Sonia Perez',
    rol: 'Desarrolladora Fullstack',
    github: 'https://github.com/soniaaperez',
    linkedin: 'https://www.linkedin.com/in/sonia-pérez-simarro-032098331',
    portfolio: 'https://soniaperezsimarro.vercel.app',
    cv: 'CV_Sonia.pdf',
    imagen: 'sonia.jpg'
  }
];

const teamContainer = document.getElementById('team-container');

function createLink(label, href, isPrimaryCTA = false) {
  const anchor = document.createElement('a');
  anchor.className = 'team-link';
  if (isPrimaryCTA) {
    anchor.classList.add('cta-primary');
  }
  anchor.href = href;
  anchor.target = '_blank';
  anchor.rel = 'noreferrer noopener';
  anchor.textContent = label;
  return anchor;
}

function renderTeam() {
  const fragment = document.createDocumentFragment();

  // Activar scroll suave en toda la página (Comportamiento CSS nativo a través de JS)
  document.documentElement.style.scrollBehavior = 'smooth';

  // 1. Crear el menú "Dock" de navegación
  const dock = document.createElement('nav');
  dock.className = 'team-dock';
  dock.style.display = 'flex';
  dock.style.justifyContent = 'center';
  dock.style.gap = '1rem';
  dock.style.marginBottom = '2rem';
  dock.style.position = 'sticky';
  dock.style.top = '10px';
  dock.style.zIndex = '50';

  // Añadir el dock al inicio del fragmento
  fragment.appendChild(dock);

  teamMembers.forEach(member => {
    // Generar un ID único válido para el ancla (ej: "sonia-perez")
    const memberId = member.nombre.toLowerCase().replace(/\s+/g, '-');

    const card = document.createElement('article');
    card.className = 'team-card scroll-mt-20';
    card.id = memberId; // Añadir el ID destino para el scroll dinámico
    // Margen superior extra de fallback por si no se usa Tailwind (para que el dock no tape la tarjeta)
    card.style.scrollMarginTop = '6rem'; 

    const avatar = document.createElement('div');
    avatar.className = 'avatar';

    if (member.imagen) {
      const image = document.createElement('img');
      image.src = member.imagen;
      image.alt = `${member.nombre} - foto de perfil`;
      avatar.appendChild(image);

      // Añadir la foto del miembro en formato miniatura al dock
      const dockLink = document.createElement('a');
      dockLink.href = `#${memberId}`;
      dockLink.title = `Ir a ${member.nombre}`;
      
      const dockImg = document.createElement('img');
      dockImg.src = member.imagen;
      dockImg.alt = member.nombre;
      // Clases Tailwind y estilos inline de fallback
      dockImg.className = 'w-12 h-12 rounded-full shadow-md';
      dockImg.style.width = '50px';
      dockImg.style.height = '50px';
      dockImg.style.borderRadius = '50%';
      dockImg.style.objectFit = 'cover';
      dockImg.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
      
      // Pequeño efecto hover para que parezca más interactivo (estilo iOS)
      dockImg.addEventListener('mouseenter', () => dockImg.style.transform = 'scale(1.15) translateY(-3px)');
      dockImg.addEventListener('mouseleave', () => dockImg.style.transform = 'scale(1) translateY(0)');

      dockLink.appendChild(dockImg);
      dock.appendChild(dockLink);
    }

    const name = document.createElement('h2');
    name.className = 'team-name';
    name.textContent = member.nombre;

    const role = document.createElement('p');
    role.className = 'team-role';
    role.textContent = member.rol;

    const links = document.createElement('div');
    links.className = 'team-links';

    const isEmilio = member.nombre === 'Emilio De La Peña Chacón';
    
    if (member.github) {
      links.appendChild(createLink('GitHub', member.github));
    }
    if (member.linkedin) {
      links.appendChild(createLink('LinkedIn', member.linkedin));
    }
    if (member.portfolio) {
      links.appendChild(createLink('Portfolio', member.portfolio, isEmilio));
    }
    if (member.cv) {
      links.appendChild(createLink('CV', member.cv));
    }

    card.appendChild(avatar);
    card.appendChild(name);
    card.appendChild(role);
    card.appendChild(links);
    fragment.appendChild(card);
  });

  teamContainer.appendChild(fragment);

  // 2. Crear el botón flotante para volver al punto de inicio (arriba)
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.innerHTML = '&#8679;'; // Flecha hacia arriba
  scrollTopBtn.className = 'scroll-top-btn';
  scrollTopBtn.title = 'Volver arriba';
  scrollTopBtn.style.position = 'fixed';
  scrollTopBtn.style.bottom = '30px';
  scrollTopBtn.style.right = '30px';
  scrollTopBtn.style.display = 'none'; // Oculto por defecto
  scrollTopBtn.style.width = '45px';
  scrollTopBtn.style.height = '45px';
  scrollTopBtn.style.borderRadius = '50%';
  scrollTopBtn.style.border = 'none';
  scrollTopBtn.style.backgroundColor = '#1a202c'; // Color oscuro (estilo slate-900)
  scrollTopBtn.style.color = '#ffffff';
  scrollTopBtn.style.cursor = 'pointer';
  scrollTopBtn.style.zIndex = '100';
  scrollTopBtn.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3)';
  scrollTopBtn.style.fontSize = '20px';
  scrollTopBtn.style.transition = 'opacity 0.3s ease';
  
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Escuchar el evento de scroll en la ventana para mostrar/ocultar el botón
  window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  document.body.appendChild(scrollTopBtn);
}

renderTeam();
