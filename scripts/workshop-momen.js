/* ============================================================
   scripts/workshop-momen.js
   Momen / Alumni Gallery Page Logic
   Depends on: workshop-data.js
   ============================================================ */

'use strict';

// ============================================================
// STATE
// ============================================================
const state = {
    category:    null,
    activeBatch: 'batch1',
};

// ============================================================
// INIT
// ============================================================
function init() {
    const params = new URLSearchParams(window.location.search);
    const catId  = params.get('cat');

    state.category = CATEGORIES.find(c => c.id === catId);
    if (!state.category) {
        window.location.href = 'workshop-index.html';
        return;
    }

    applyCategoryTheme(state.category);
    renderHero();
    renderAlumniGrid();
    initEventListeners();
    initNavbar();
}

// ============================================================
// THEME
// ============================================================
function applyCategoryTheme(cat) {
    const colorMap = {
        '#6366f1': '99,102,241',
        '#10b981': '16,185,129',
        '#ef4444': '239,68,68',
        '#0ea5e9': '14,165,233',
        '#a855f7': '168,85,247',
        '#f59e0b': '245,158,11',
    };
    const raw = colorMap[cat.color] || '99,102,241';
    const root = document.documentElement;
    root.style.setProperty('--cat-color', cat.color);
    root.style.setProperty('--cat-color-raw', raw);
    root.style.setProperty('--cat-color-glow', `rgba(${raw}, 0.2)`);

    document.title = `Momen ${cat.label} — Yuros.org`;
}

// ============================================================
// HERO
// ============================================================
function renderHero() {
    const cat = state.category;
    document.getElementById('hero-title').textContent = `Momen & Alumni — ${cat.label}`;
    document.getElementById('hero-desc').textContent = `Lihat alumni dan momen dari setiap batch workshop ${cat.label} yang telah berlangsung.`;

    const bcLink = document.getElementById('bc-category-link');
    if (bcLink) {
        bcLink.href = `workshop-category.html?cat=${cat.id}`;
        bcLink.textContent = cat.label;
    }
}

// ============================================================
// ALUMNI GRID
// ============================================================
function renderAlumniGrid() {
    const catId   = state.category.id;
    const batchId = state.activeBatch;
    const grid    = document.getElementById('alumni-grid');
    const empty   = document.getElementById('empty-state');
    const countEl = document.getElementById('alumni-count');

    const batches = ALUMNI_BATCHES[catId];
    const alumni  = batches ? (batches[batchId] || []) : [];

    if (alumni.length === 0) {
        grid.style.display = 'none';
        empty.style.display = 'block';
        countEl.innerHTML = '';
        return;
    }

    empty.style.display = 'none';
    grid.style.display = 'grid';
    countEl.innerHTML = `Menampilkan <strong>${alumni.length}</strong> alumni`;

    grid.innerHTML = alumni.map(a => `
        <div class="alumni-card">
            <img src="${a.photo}" alt="${a.name}" class="alumni-avatar" loading="lazy">
            <div class="alumni-name">${a.name}</div>
            <div class="alumni-workshop">
                <i class="fa-solid fa-bookmark"></i>
                ${a.workshopTitle}
            </div>
            <div class="alumni-date">
                <i class="fa-regular fa-calendar-check"></i>
                Selesai: ${a.completedDate}
            </div>
        </div>
    `).join('');
}

// ============================================================
// EVENT LISTENERS
// ============================================================
function initEventListeners() {
    // Batch pills
    document.querySelectorAll('.batch-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.batch-pill').forEach(p => {
                p.classList.remove('active');
                p.setAttribute('aria-selected', 'false');
            });
            pill.classList.add('active');
            pill.setAttribute('aria-selected', 'true');
            state.activeBatch = pill.dataset.batch;
            renderAlumniGrid();
        });
    });
}

// ============================================================
// NAVBAR
// ============================================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    const toggle = document.getElementById('nav-toggle');
    const menu   = document.getElementById('nav-menu');
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
}

// ============================================================
// START
// ============================================================
document.addEventListener('DOMContentLoaded', init);
