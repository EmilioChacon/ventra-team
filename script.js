const teamMembers = [
  {
    id: 'emilio',
    badge: 'SCRUM',
    nombre: 'Emilio De La Peña Chacón',
    rol: 'SCRUM & Backend',
    github: 'https://github.com/EmilioChacon',
    linkedin: 'https://www.linkedin.com/in/emilio-dlp-chacon/',
    portfolio: 'https://emiliochacon.dev/',
    imagen: 'emilio.jpeg'
  },
  {
    id: 'santiago',
    badge: 'FRONT',
    nombre: 'Santiago Regidor',
    rol: 'Frontend Dev',
    linkedin: '#',
    cv: 'CV_Santiago.pdf',
    imagen: 'Santi.jpeg'
  },
  {
    id: 'rafael',
    badge: 'FULL',
    nombre: 'Rafael Sánchez',
    rol: 'Fullstack Dev',
    github: 'https://github.com/KingMapachelo',
    linkedin: 'https://www.linkedin.com/in/rafael-s%C3%A1nchez-mart%C3%ADnez-0077b23b3/',
    cv: 'CVRafaelSanchez.pdf',
    imagen: 'RafaelSanchez.jpg'
  },
  {
    id: 'javier',
    badge: 'BACK',
    nombre: 'Javier Galán',
    rol: 'Backend Dev',
    github: 'https://github.com/JavGalGas',
    linkedin: 'https://www.linkedin.com/in/javier-galan-360748351/',
    imagen: 'javier.jpg'
  },
  {
    id: 'sonia',
    badge: 'FULL',
    nombre: 'Sonia Perez',
    rol: 'Fullstack Dev',
    github: 'https://github.com/soniaaperez',
    linkedin: 'https://www.linkedin.com/in/sonia-pérez-simarro-032098331',
    portfolio: 'https://soniaperezsimarro.vercel.app',
    cv: 'CV_Sonia.pdf',
    imagen: 'sonia.jpg'
  }
];

const teamContainer = document.getElementById('team-container');
const quickNav = document.getElementById('quick-nav');
const themeSwitcher = document.getElementById('theme-switcher');

// --- Theme Management ---
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

themeSwitcher.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// --- UI Rendering ---
function createLink(label, href) {
  const anchor = document.createElement('a');
  anchor.className = 'team-link';
  anchor.href = href;
  anchor.target = '_blank';
  anchor.rel = 'noreferrer noopener';
  anchor.textContent = label;
  return anchor;
}

function renderUI() {
  const cardFragment = document.createDocumentFragment();
  const navFragment = document.createDocumentFragment();

  teamMembers.forEach(member => {
    // 1. Create Quick Nav Button
    const navBtn = document.createElement('button');
    navBtn.className = 'quick-nav-btn';
    navBtn.textContent = member.badge;
    navBtn.addEventListener('click', () => {
      document.getElementById(member.id).scrollIntoView({ behavior: 'smooth' });
    });
    navFragment.appendChild(navBtn);

    // 2. Create Team Card
    const card = document.createElement('article');
    card.className = 'team-card';
    card.id = member.id; // Added ID for scroll targeting

    const avatarContainer = document.createElement('div');
    avatarContainer.className = 'avatar';

    if (member.imagen) {
      const image = document.createElement('img');
      image.src = member.imagen;
      image.alt = `Foto de perfil de ${member.nombre}`;
      avatarContainer.appendChild(image);
    }

    const name = document.createElement('h2');
    name.className = 'team-name';
    name.textContent = member.nombre;

    const roleBadge = document.createElement('span');
    roleBadge.className = 'role-badge';
    roleBadge.textContent = member.rol;

    const links = document.createElement('div');
    links.className = 'team-links';

    if (member.github) links.appendChild(createLink('GitHub', member.github));
    if (member.linkedin) links.appendChild(createLink('LinkedIn', member.linkedin));
    if (member.portfolio) links.appendChild(createLink('Portfolio', member.portfolio));
    if (member.cv) links.appendChild(createLink('CV', member.cv));

    card.appendChild(avatarContainer);
    card.appendChild(name);
    card.appendChild(roleBadge);
    card.appendChild(links);
    cardFragment.appendChild(card);
  });

  quickNav.appendChild(navFragment);
  teamContainer.appendChild(cardFragment);
}

// Initialize
initTheme();
renderUI();
