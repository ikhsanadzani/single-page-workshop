/* ============================================================
   scripts/workshop-member.js
   Member / Certificate Verification Page Logic
   Depends on: workshop-data.js
   ============================================================ */

'use strict';

// ============================================================
// STATE
// ============================================================
const state = {
    category:    null,
    activeBatch: 'batch1',
    searchQuery: '',
};

// Debounce utility
function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

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
    renderCertGrid();
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

    document.title = `Member ${cat.label} — Yuros.org`;
}

// ============================================================
// HERO
// ============================================================
function renderHero() {
    const cat = state.category;
    document.getElementById('hero-title').textContent = `Verifikasi Sertifikat — ${cat.label}`;
    document.getElementById('hero-desc').textContent = `Cari dan verifikasi sertifikat peserta workshop ${cat.label} berdasarkan nama.`;

    const bcLink = document.getElementById('bc-category-link');
    if (bcLink) {
        bcLink.href = `workshop-category.html?cat=${cat.id}`;
        bcLink.textContent = cat.label;
    }
}

// ============================================================
// CERT GRID
// ============================================================
function renderCertGrid() {
    const catId   = state.category.id;
    const batchId = state.activeBatch;
    const grid    = document.getElementById('cert-grid');
    const empty   = document.getElementById('empty-state');
    const countEl = document.getElementById('cert-count');
    const query   = state.searchQuery.toLowerCase().trim();

    const batches = MEMBER_CERTIFICATES[catId];
    let certs = batches ? (batches[batchId] || []) : [];

    // Apply search filter
    if (query) {
        certs = certs.filter(c =>
            c.name.toLowerCase().includes(query) ||
            c.certCode.toLowerCase().includes(query)
        );
    }

    if (certs.length === 0) {
        grid.style.display = 'none';
        empty.style.display = 'block';
        countEl.innerHTML = '';

        const emptyMsg = document.getElementById('empty-msg');
        if (query) {
            emptyMsg.textContent = `Tidak ada sertifikat yang cocok dengan pencarian "${state.searchQuery}".`;
        } else {
            emptyMsg.textContent = 'Data sertifikat untuk batch ini belum tersedia.';
        }
        return;
    }

    empty.style.display = 'none';
    grid.style.display = 'grid';
    countEl.innerHTML = `Menampilkan <strong>${certs.length}</strong> sertifikat${query ? ` untuk "${state.searchQuery}"` : ''}`;

    grid.innerHTML = certs.map(c => {
        const displayName = query ? highlightText(c.name, query) : c.name;

        return `
        <div class="cert-card">
            <div class="cert-card-header">
                <div class="cert-name">${displayName}</div>
                <span class="cert-badge"><i class="fa-solid fa-circle-check"></i> Verified</span>
            </div>
            <div class="cert-info">
                <div class="cert-row">
                    <i class="fa-solid fa-bookmark"></i>
                    ${c.workshopTitle}
                </div>
                <div class="cert-row">
                    <i class="fa-solid fa-barcode"></i>
                    <span class="cert-code">${c.certCode}</span>
                </div>
                <div class="cert-row">
                    <i class="fa-regular fa-calendar"></i>
                    ${c.certDate}
                </div>
            </div>
            <div class="cert-preview">
                <img src="${c.certImage}" alt="Sertifikat ${c.name}" loading="lazy">
            </div>
        </div>`;
    }).join('');
}

// ============================================================
// HIGHLIGHT SEARCH TEXT
// ============================================================
function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="search-hl">$1</span>');
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
            renderCertGrid();
        });
    });

    // Search input
    const searchInput = document.getElementById('search-input');
    const clearBtn    = document.getElementById('search-clear');

    const handleSearch = debounce(() => {
        state.searchQuery = searchInput.value;
        clearBtn.style.display = searchInput.value ? 'flex' : 'none';
        renderCertGrid();
    }, 250);

    searchInput.addEventListener('input', handleSearch);

    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        state.searchQuery = '';
        clearBtn.style.display = 'none';
        searchInput.focus();
        renderCertGrid();
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
