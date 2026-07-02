/* ═══════════════════════════════════════════════
   portfolio-static / js/script.js
   Composants partagés + interactions globales
═══════════════════════════════════════════════ */

// ── Navigation HTML ──────────────────────────────────────────────
const NAV_HTML = `
<header class="glass-header fixed top-0 left-0 right-0 z-50" style="border-bottom:1px solid rgba(31,41,55,0.8);">
  <div style="max-width:72rem; margin:0 auto; padding:0 1rem;">
    <div style="display:flex; align-items:center; justify-content:space-between; height:4rem;">
      <a href="index.html" class="text-accent" style="font-family:'Fira Code',monospace; font-weight:700; font-size:1.125rem; text-decoration:none;">
        &lt;Abdoul Sarba /&gt;
      </a>
      <nav class="desktop-nav" style="display:none; align-items:center; gap:1.5rem; font-size:0.875rem;">
        <span style="display:flex; align-items:center; gap:0.375rem; color:#4ade80; font-family:'Fira Code',monospace; font-size:0.75rem; border:1px solid rgba(74,222,128,0.3); border-radius:9999px; padding:0.25rem 0.75rem;">
          <span class="animate-pulse" style="width:8px; height:8px; border-radius:50%; background:#4ade80; display:inline-block;"></span>
          Disponible
        </span>
        <a href="index.html"         class="nav-link">Accueil</a>
        <a href="about.html"         class="nav-link">À propos</a>
        <a href="projects.html"      class="nav-link">Projets</a>
        <a href="services.html"      class="nav-link">Services</a>
        <a href="blog.html"          class="nav-link">Blog</a>
        <a href="certifications.html"class="nav-link">Certifications</a>
        <a href="contact.html" class="btn-primary" style="padding:0.5rem 1rem; font-size:0.875rem;">Contact</a>
      </nav>
      <button id="mobile-menu-btn" style="display:block; background:none; border:none; cursor:pointer; color:#8892b0;">
        <svg id="menu-icon-open"  width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        <svg id="menu-icon-close" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="display:none;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>
    <nav id="mobile-menu" style="display:none; padding-bottom:1rem;">
      <a href="index.html">Accueil</a>
      <a href="about.html">À propos</a>
      <a href="projects.html">Projets</a>
      <a href="services.html">Services</a>
      <a href="blog.html">Blog</a>
      <a href="certifications.html">Certifications</a>
      <a href="contact.html" class="btn-primary" style="margin-top:0.5rem; display:inline-block; padding:0.5rem 1rem;">Contact</a>
    </nav>
  </div>
</header>`;

// ── Footer HTML ──────────────────────────────────────────────────
const FOOTER_HTML = `
<section style="padding:4rem 0; border-top:1px solid rgba(31,41,55,0.8); background:rgba(10,25,47,0.5);">
  <div style="max-width:56rem; margin:0 auto; padding:0 1.5rem; text-align:center;">
    <h3 style="font-size:1.75rem; font-weight:700; color:#ccd6f6; margin-bottom:1rem;">Un projet en tête ?</h3>
    <p style="color:#8892b0; margin-bottom:2rem; max-width:36rem; margin-left:auto; margin-right:auto;">
      Besoin d'un QA Engineer ou DevOps pour votre projet ? Discutons de vos besoins et trouvons la meilleure solution ensemble.
    </p>
    <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:1rem;">
      <a href="https://wa.me/2250170998499?text=Bonjour%2C%20je%20souhaite%20discuter%20d%27un%20projet." target="_blank" rel="noopener" class="btn-primary">Discutons de votre projet</a>
      <a href="https://linkedin.com/in/abdoul-sacourou-sarba-92799228b" target="_blank" rel="noopener" class="btn-outline">Me suivre sur LinkedIn</a>
    </div>
  </div>
</section>

<footer style="border-top:1px solid rgba(31,41,55,0.8); padding:3rem 0;">
  <div style="max-width:72rem; margin:0 auto; padding:0 1.5rem;">
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:2rem; margin-bottom:2.5rem;">
      <div>
        <a href="index.html" style="font-family:'Fira Code',monospace; font-weight:700; font-size:1.125rem; color:#64ffda; text-decoration:none;">&lt;Abdoul Sarba /&gt;</a>
        <p style="color:#8892b0; font-size:0.875rem; margin-top:0.5rem;">Testeur QA / DevOps Engineer</p>
        <span style="display:inline-flex; align-items:center; gap:0.375rem; color:#4ade80; font-family:'Fira Code',monospace; font-size:0.75rem; margin-top:0.75rem;">
          <span class="animate-pulse" style="width:6px; height:6px; border-radius:50%; background:#4ade80; display:inline-block;"></span>
          Disponible pour une mission
        </span>
      </div>
      <div>
        <p style="color:#64ffda; font-family:'Fira Code',monospace; font-size:0.75rem; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:1rem;">// Navigation</p>
        <nav style="display:flex; flex-direction:column; gap:0.5rem;">
          ${[['index.html','Accueil'],['about.html','À propos'],['projects.html','Projets'],['services.html','Services'],['blog.html','Blog'],['certifications.html','Certifications'],['contact.html','Contact']].map(([href,label])=>`
          <a href="${href}" style="color:#8892b0; font-size:0.875rem; font-family:'Fira Code',monospace; text-decoration:none;" onmouseover="this.style.color='#64ffda'" onmouseout="this.style.color='#8892b0'">
            <span style="color:rgba(100,255,218,0.4);">›</span> ${label}
          </a>`).join('')}
        </nav>
      </div>
      <div>
        <div class="terminal-block" style="padding:1rem;">
          <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.75rem; padding-bottom:0.5rem; border-bottom:1px solid rgba(31,41,55,0.8);">
            <span class="terminal-dot-red"></span>
            <span class="terminal-dot-yellow"></span>
            <span class="terminal-dot-green"></span>
            <span style="font-family:'Fira Code',monospace; font-size:0.75rem; color:#546e7a; margin-left:0.25rem;">~/contact</span>
          </div>
          <p style="font-family:'Fira Code',monospace; font-size:0.8rem;"><span style="color:#4ade80;">$</span> <span style="color:#8892b0;">echo $AVAILABILITY</span></p>
          <p style="color:#64ffda; font-family:'Fira Code',monospace; font-size:0.8rem; margin-top:0.25rem;">Disponible</p>
          <p style="font-family:'Fira Code',monospace; font-size:0.8rem; margin-top:0.5rem;"><span style="color:#4ade80;">$</span> <span style="color:#8892b0;">cat links.txt</span></p>
          <div style="margin-top:0.25rem; display:flex; flex-direction:column; gap:0.2rem;">
            <a href="https://github.com/abdoul-sakhur" target="_blank" rel="noopener" style="color:#8892b0; font-family:'Fira Code',monospace; font-size:0.75rem; text-decoration:none;" onmouseover="this.style.color='#64ffda'" onmouseout="this.style.color='#8892b0'">→ GitHub</a>
            <a href="https://linkedin.com/in/abdoul-sacourou-sarba-92799228b" target="_blank" rel="noopener" style="color:#8892b0; font-family:'Fira Code',monospace; font-size:0.75rem; text-decoration:none;" onmouseover="this.style.color='#64ffda'" onmouseout="this.style.color='#8892b0'">→ LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
    <div style="border-top:1px solid rgba(31,41,55,0.5); padding-top:1.5rem; display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:0.5rem;">
      <p style="color:#8892b0; font-size:0.75rem; font-family:'Fira Code',monospace;">© ${new Date().getFullYear()} Abdoul-sacourou Sarba. Tous droits réservés.</p>
      <p style="color:#8892b0; font-size:0.75rem; font-family:'Fira Code',monospace;"><span style="color:#64ffda;"></span></p>
    </div>
  </div>
</footer>`;

// ═══════════════════════════════════════════════
// INITIALISATION PRINCIPALE
// ═══════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    injectComponents();
    initResponsiveNav();
    highlightActiveLink();
    initScrollReveal();
    initCounters();
    initContactForm();
});

// ── Injection nav + footer ───────────────────────────────────────
function injectComponents() {
    const navEl    = document.getElementById('nav-placeholder');
    const footerEl = document.getElementById('footer-placeholder');
    if (navEl)    navEl.innerHTML    = NAV_HTML;
    if (footerEl) footerEl.innerHTML = FOOTER_HTML;
}

// ── Navigation responsive ────────────────────────────────────────
function initResponsiveNav() {
    // Afficher le nav desktop sur md+
    const desktopNav = document.querySelector('.desktop-nav');
    const mobileBtn  = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconOpen   = document.getElementById('menu-icon-open');
    const iconClose  = document.getElementById('menu-icon-close');

    function handleResize() {
        if (window.innerWidth >= 768) {
            if (desktopNav) desktopNav.style.display = 'flex';
            if (mobileBtn)  mobileBtn.style.display  = 'none';
        } else {
            if (desktopNav) desktopNav.style.display = 'none';
            if (mobileBtn)  mobileBtn.style.display  = 'block';
        }
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.style.display === 'block';
            mobileMenu.style.display = isOpen ? 'none' : 'block';
            if (iconOpen)  iconOpen.style.display  = isOpen ? 'block' : 'none';
            if (iconClose) iconClose.style.display = isOpen ? 'none'  : 'block';
        });
    }
}

// ── Lien actif dans la nav ────────────────────────────────────────
function highlightActiveLink() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === page || (page === '' && href === 'index.html')) {
            link.classList.add('active');
            link.style.color = '#64ffda';
        }
    });
}

// ── Scroll reveal (IntersectionObserver) ────────────────────────
function initScrollReveal() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Compteurs animés (page d'accueil) ────────────────────────────
function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el     = entry.target;
            const target = parseInt(el.dataset.counter, 10);
            let count    = 0;
            const step   = Math.max(1, Math.ceil(target / 40));
            const timer  = setInterval(() => {
                count += step;
                if (count >= target) { count = target; clearInterval(timer); }
                el.textContent = count;
            }, 30);
            observer.unobserve(el);
        });
    }, { threshold: 0.5 });
    counters.forEach(el => observer.observe(el));
}

// ── Formulaire de contact ─────────────────────────────────────────
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        const name    = form.querySelector('#name')?.value?.trim();
        const email   = form.querySelector('#email')?.value?.trim();
        const subject = form.querySelector('#subject')?.value?.trim();
        const message = form.querySelector('#message')?.value?.trim();

        if (!name || !email || !message) {
            showToast('Veuillez remplir tous les champs obligatoires.', 'error');
            return;
        }
        const btn = form.querySelector('[type="submit"]');
        const original = btn.textContent;
        btn.textContent = 'Envoi en cours...';
        btn.disabled = true;

        setTimeout(() => {
            form.reset();
            btn.textContent = original;
            btn.disabled = false;
            showToast('Message envoyé avec succès ! (version statique)', 'success');
        }, 1200);
    });
}

// ── Toast notification ────────────────────────────────────────────
function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = 'position:fixed; bottom:1rem; right:1rem; z-index:9999; display:flex; flex-direction:column; gap:0.5rem;';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.style.cssText = type === 'success'
        ? 'padding:0.75rem 1rem; border-radius:8px; font-family:"Fira Code",monospace; font-size:0.875rem; background:#064e3b; color:#6ee7b7; border:1px solid rgba(52,211,153,0.3); box-shadow:0 4px 12px rgba(0,0,0,0.4);'
        : 'padding:0.75rem 1rem; border-radius:8px; font-family:"Fira Code",monospace; font-size:0.875rem; background:#7f1d1d; color:#fca5a5; border:1px solid rgba(248,113,113,0.3); box-shadow:0 4px 12px rgba(0,0,0,0.4);';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; }, 3500);
    setTimeout(() => toast.remove(), 4000);
}
