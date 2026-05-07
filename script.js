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
    nombre: 'Team Member',
    rol: 'Diseñador UX/UI',
    github: '#',
    linkedin: '#',
    portfolio: '#',
    imagen: ''
  },
  {
    nombre: 'Team Member',
    rol: 'Estratega Digital',
    github: '#',
    linkedin: '#',
    portfolio: '#',
    imagen: ''
  },
  {
    nombre: 'Team Member',
    rol: 'Ingeniero de Calidad',
    github: '#',
    linkedin: '#',
    portfolio: '#',
    imagen: ''
  },
  {
    nombre: 'Team Member',
    rol: 'Gestor de Proyectos',
    github: '#',
    linkedin: '#',
    portfolio: '#',
    imagen: ''
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

    const links = document.createElement('div');
    links.className = 'team-links';

    const isEmilio = member.nombre === 'Emilio De La Peña Chacón';
    links.appendChild(createLink('GitHub', member.github));
    links.appendChild(createLink('LinkedIn', member.linkedin));
    links.appendChild(createLink('Portfolio', member.portfolio, isEmilio));

    card.appendChild(avatar);
    card.appendChild(name);
    card.appendChild(role);
    card.appendChild(links);
    fragment.appendChild(card);
  });

  teamContainer.appendChild(fragment);
}

renderTeam();
