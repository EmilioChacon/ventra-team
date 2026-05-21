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
    cv: 'Currículum_Santiago_Regidor.pdf',
    imagen: ''
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
}

renderTeam();
