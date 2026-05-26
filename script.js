const teamMembers = [
  { id: 'emilio', nombre: 'Emilio De La Peña Chacón', rol: 'SCRUM & Backend', github: 'https://github.com/EmilioChacon', linkedin: 'https://www.linkedin.com/in/emilio-dlp-chacon/', portfolio: 'https://emiliochacon.dev/', imagen: 'emilio.jpeg' },
  { id: 'santiago', nombre: 'Santiago Regidor', rol: 'Frontend Dev', cv: 'CV_Santiago.pdf', imagen: 'Santi.jpeg' },
  { id: 'rafael', nombre: 'Rafael Sánchez', rol: 'Fullstack Dev', github: 'https://github.com/KingMapachelo', linkedin: 'https://www.linkedin.com/in/rafael-s%C3%A1nchez-mart%C3%ADnez-0077b23b3/', cv: 'CVRafaelSanchez.pdf', imagen: 'RafaelSanchez.jpg' },
  { id: 'javier', nombre: 'Javier Galán', rol: 'Backend Dev', github: 'https://github.com/JavGalGas', linkedin: 'https://www.linkedin.com/in/javier-galan-360748351/', imagen: 'javier.jpg' },
  { id: 'sonia', nombre: 'Sonia Perez', rol: 'Fullstack Dev', github: 'https://github.com/soniaaperez', linkedin: 'https://www.linkedin.com/in/sonia-pérez-simarro-032098331', portfolio: 'https://soniaperezsimarro.vercel.app', cv: 'CV_Sonia.pdf', imagen: 'sonia.jpg' }
];

const teamContainer = document.getElementById('team-container');
const quickNav = document.getElementById('quick-nav');
const themeSwitcher = document.getElementById('theme-switcher');

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
    // 1. Crear Botón de Nav Rápida (Estilo Historias Instagram)
    const navBtn = document.createElement('button');
    navBtn.className = 'quick-nav-btn';
    navBtn.title = `Ir a ${member.nombre}`;
    navBtn.addEventListener('click', () => {
      document.getElementById(member.id).scrollIntoView({ behavior: 'smooth' });
    });

    const avatarWrapper = document.createElement('div');
    avatarWrapper.className = 'nav-avatar-wrapper';

    if (member.imagen) {
      const navImg = document.createElement('img');
      navImg.src = member.imagen;
      navImg.alt = member.nombre;
      avatarWrapper.appendChild(navImg);
    }
    navBtn.appendChild(avatarWrapper);

    const navName = document.createElement('span');
    navName.textContent = member.nombre.split(' ')[0]; // Extrae el primer nombre
    navBtn.appendChild(navName);

    navFragment.appendChild(navBtn);

    // 2. Crear Tarjeta del Equipo
    const card = document.createElement('article');
    card.className = 'team-card';
    card.id = member.id;

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

// Asegurarse de que el DOM está listo antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderUI();
});
