{/* <script>
  // Mobile nav toggle
  function toggleNav() {
    document.getElementById('nav-links').classList.toggle('open')
  }
  function closeNav() {
    document.getElementById('nav-links').classList.remove('open')
  }

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 70;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    })
  })

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  reveals.forEach(el => observer.observe(el));

  // Team tabs
  function switchTeam(id) {
    document.querySelectorAll('.team-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.team-panel').forEach(p => p.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('team-' + id).classList.add('active');
  }

  // Nav highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.pageYOffset >= s.offsetTop - 100) current = s.id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? 'var(--leaf)' : '';
    });
  });
</script> */}


// Mobile nav toggle
function toggleNav() {
  document.getElementById('nav-links').classList.toggle('open');
}

function closeNav() {
  document.getElementById('nav-links').classList.remove('open');
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.08 });

reveals.forEach(el => observer.observe(el));

// Team tabs (fixed version)
document.querySelectorAll('.team-tab').forEach(tab => {
  tab.addEventListener('click', e => {
    const id = tab.dataset.team; // expects data-team="1", "2", etc.

    document.querySelectorAll('.team-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.team-panel').forEach(p => p.classList.remove('active'));

    e.target.classList.add('active');
    document.getElementById('team-' + id).classList.add('active');
  });
});

// Nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.pageYOffset >= s.offsetTop - 100) current = s.id;
  });

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--leaf)' : '';
  });
});
