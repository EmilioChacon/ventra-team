const teamMembers = [
  {
    nombre: 'Emilio De La Peña Chacón',
    rol: 'Desarrollador Full Stack',
    github: 'https://github.com/EmilioChaconx',
    linkedin: 'https://www.linkedin.com/in/emilio-dlp-chacon/',
    portfolio: 'https://emiliochacon.dev/',
    imagen: 'emilio.jpeg',
    descripcion: 'Creador de experiencias digitales modernas, con enfoque en detalle, accesibilidad y rendimiento.'
  },
  {
    nombre: 'Team Member',
    rol: 'Diseñador UX/UI',
    github: '#',
    linkedin: '#',
    portfolio: '#',
    imagen: '',
    descripcion: 'Placeholder para información del miembro del equipo. Reemplaza con datos reales cuando estés listo.'
  },
  {
    nombre: 'Team Member',
    rol: 'Estratega Digital',
    github: '#',
    linkedin: '#',
    portfolio: '#',
    imagen: '',
    descripcion: 'Placeholder para información del miembro del equipo. Reemplaza con datos reales cuando estés listo.'
  },
  {
    nombre: 'Team Member',
    rol: 'Ingeniero de Calidad',
    github: '#',
    linkedin: '#',
    portfolio: '#',
    imagen: '',
    descripcion: 'Placeholder para información del miembro del equipo. Reemplaza con datos reales cuando estés listo.'
  },
  {
    nombre: 'Team Member',
    rol: 'Gestor de Proyectos',
    github: '#',
    linkedin: '#',
    portfolio: '#',
    imagen: '',
    descripcion: 'Placeholder para información del miembro del equipo. Reemplaza con datos reales cuando estés listo.'
  }
];

const teamContainer = document.getElementById('team-container');

function createLink(label, href) {
  const anchor = document.createElement('a');
  anchor.className = 'team-link';
  anchor.href = href;
  anchor.target = '_blank';
  anchor.rel = 'noreferrer noopener';
  anchor.textContent = label;
  return anchor;
}

function renderTeam() {
  const fragment = document.createDocumentFragment();

  teamMembers.forEach(member => {
    const card = document.createElement('article');
    card.className = 'team-card';

    const avatar = document.createElement('div');
    avatar.className = 'avatar';

    if (member.imagen) {
      const image = document.createElement('img');
      image.src = member.imagen;
      image.alt = `${member.nombre} - foto de perfil`;
      avatar.appendChild(image);
    }

    const name = document.createElement('h2');
    name.className = 'team-name';
    name.textContent = member.nombre;

    const role = document.createElement('p');
    role.className = 'team-role';
    role.textContent = member.rol;

    const description = document.createElement('p');
    description.className = 'team-description';
    description.textContent = member.descripcion;

    const links = document.createElement('div');
    links.className = 'team-links';

    links.appendChild(createLink('GitHub', member.github));
    links.appendChild(createLink('LinkedIn', member.linkedin));
    links.appendChild(createLink('Portfolio', member.portfolio));

    card.appendChild(avatar);
    card.appendChild(name);
    card.appendChild(role);
    card.appendChild(description);
    card.appendChild(links);
    fragment.appendChild(card);
  });

  teamContainer.appendChild(fragment);
}

renderTeam();
