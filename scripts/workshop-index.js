/* ============================================================
   Workshop Index — scripts/workshop-index.js
   Index page: filter, sort, render categories
   Data is loaded from scripts/workshop-data.js
   ============================================================ */

'use strict';

// Data (CATEGORIES, WORKSHOPS, helpers) loaded from scripts/workshop-data.js

// ============================================================
// 3. STATE
// ============================================================
let state = {
    search: '',
    mode: 'all',   // all | online | offline | hybrid
    sort: 'popular'
};

// ============================================================
// 4. FILTER & SORT
// ============================================================
function getFiltered(cat) {
    let data = WORKSHOPS.filter(w => w.category === cat.id);

    // mode filter
    if (state.mode !== 'all') {
        data = data.filter(w => w.status === state.mode);
    }

    // search filter
    if (state.search) {
        const q = state.search.toLowerCase();
        data = data.filter(w =>
            w.title.toLowerCase().includes(q) ||
            w.desc.toLowerCase().includes(q) ||
            w.instructor.toLowerCase().includes(q) ||
            w.tags.some(t => t.toLowerCase().includes(q))
        );
    }

    // sort
    if (state.sort === 'popular') data.sort((a, b) => b.popularity - a.popularity);
    if (state.sort === 'date') data.sort((a, b) => new Date(a.date) - new Date(b.date));
    if (state.sort === 'rating') data.sort((a, b) => b.rating - a.rating);
    if (state.sort === 'slots') data.sort((a, b) =>
        (a.maxParticipants - a.participants) - (b.maxParticipants - b.participants) > 0 ? -1 : 1
    );

    return data;
}

// ============================================================
// 5. RENDER HELPERS
// ============================================================
function statusLabel(s) {
    const map = { online: 'Online', offline: 'Offline', hybrid: 'Hybrid' };
    return map[s] || s;
}

function pctFill(p, max) {
    return Math.round((p / max) * 100);
}

function renderCard(ws, isFeatured) {
    const pct = pctFill(ws.participants, ws.maxParticipants);
    const isFull = ws.participants >= ws.maxParticipants;

    const tagsHtml = ws.tags.map(t => `<span class="ws-tag">${t}</span>`).join('');

    const actionBtn = isFull
        ? `<span class="ws-full-badge"><i class="fa-solid fa-lock"></i> Penuh</span>`
        : `<a href="workshop-category.html?cat=${ws.category}&ws=${ws.id}" class="ws-register-btn">Daftar Sekarang</a>`;

    const featuredBadge = isFeatured
        ? `<div class="featured-badge"><i class="fa-solid fa-fire"></i> Terpopuler</div>` : '';

    return `
    <div class="ws-card ${isFeatured ? 'featured' : ''}" id="${ws.id}"
         onclick="window.location='workshop-category.html?cat=${ws.category}&ws=${ws.id}'"
         style="cursor:pointer">
        ${featuredBadge}
        <div class="ws-card-banner" style="background:${ws.gradient}">
            <i class="${ws.icon} ws-card-banner-icon"></i>
            <div class="ws-status-pill ${ws.status}">${statusLabel(ws.status)}</div>
            <div class="ws-date-pill">
                <span class="ws-date-day">${ws.day}</span>
                <span class="ws-date-month">${ws.month}</span>
            </div>
        </div>
        <div class="ws-card-body">
            <h3 class="ws-card-title">${ws.title}</h3>
            <p class="ws-card-desc">${ws.desc}</p>
            <div class="ws-card-meta">
                <div class="ws-meta-row"><i class="fa-regular fa-clock"></i> ${ws.time}</div>
                <div class="ws-meta-row"><i class="fa-solid fa-chalkboard-user"></i> ${ws.instructor}</div>
                <div class="ws-meta-row"><i class="fa-solid fa-users"></i> ${ws.participants}/${ws.maxParticipants} Peserta</div>
            </div>
            <div class="ws-pop-bar">
                <div class="ws-pop-label">
                    <span>Ketersediaan</span>
                    <span>${pct}% terisi</span>
                </div>
                <div class="ws-pop-track">
                    <div class="ws-pop-fill" style="--fill-width:${pct}%"></div>
                </div>
            </div>
            <div class="ws-tags">${tagsHtml}</div>
            <div class="ws-card-footer">
                <div class="ws-rating">
                    <i class="fa-solid fa-star"></i>
                    ${ws.rating.toFixed(1)}
                </div>
                ${actionBtn}
            </div>
        </div>
    </div>`;
}

function renderCategory(cat) {
    const workshops = getFiltered(cat);
    if (workshops.length === 0) return null;

    // Top 5: index 0 is featured, 1-4 are regular
    const top5 = workshops.slice(0, 5);
    const featured = top5[0];
    const regulars = top5.slice(1);

    const cardsHtml = [
        renderCard(featured, true),
        ...regulars.map(w => renderCard(w, false))
    ].join('');

    // Count badge in sidebar
    const countEl = document.getElementById(`count-${cat.id}`);
    if (countEl) countEl.textContent = workshops.length;

    return `
    <section class="category-section" id="cat-${cat.id}" data-cat="${cat.id}">
        <div class="category-header">
            <div class="category-label">
                <div class="category-icon" style="background:${cat.gradient}; color:${cat.color}">
                    <i class="fa-solid ${cat.icon}"></i>
                </div>
                <div>
                    <h2>${cat.label}</h2>
                    <span>${cat.desc}</span>
                </div>
            </div>
            <a href="workshop-category.html?cat=${cat.id}" class="category-view-all">
                Lihat Semua ${workshops.length} Workshop <i class="fa-solid fa-arrow-right"></i>
            </a>
        </div>
        <div class="ws-top-picks">
            ${cardsHtml}
        </div>
    </section>`;
}

// ============================================================
// 6. MAIN RENDER
// ============================================================
function render() {
    const container = document.getElementById('categories-container');
    const emptyState = document.getElementById('empty-state');

    let html = '';
    let totalVisible = 0;

    CATEGORIES.forEach(cat => {
        const sec = renderCategory(cat);
        if (sec) {
            html += sec;
            totalVisible += getFiltered(cat).length;
        }
    });

    container.innerHTML = html;

    // empty state
    if (totalVisible === 0) {
        emptyState.style.display = 'block';
        container.style.display = 'none';
    } else {
        emptyState.style.display = 'none';
        container.style.display = 'block';
    }

    // Animate progress bars with IntersectionObserver
    animateBars();

    // Update active sidebar link based on visible sections
    updateSidebarActive();
}

// ============================================================
// 7. PROGRESS BAR ANIMATION
// ============================================================
function animateBars() {
    const bars = document.querySelectorAll('.ws-pop-fill');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('animate');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.3 });

    bars.forEach(b => io.observe(b));
}

// ============================================================
// 8. SIDEBAR SCROLL SPY
// ============================================================
function updateSidebarActive() {
    const sections = document.querySelectorAll('.category-section');
    const links = document.querySelectorAll('.cat-nav-link');

    if (!sections.length) return;

    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const id = e.target.dataset.cat;
                links.forEach(l => l.classList.toggle('active', l.dataset.cat === id));
            }
        });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sections.forEach(s => io.observe(s));
}

// ============================================================
// 9. CONTROLS
// ============================================================
function initControls() {
    const searchInput = document.getElementById('global-search');
    const clearBtn = document.getElementById('search-clear');
    const sortSelect = document.getElementById('sort-select');
    const modeButtons = document.querySelectorAll('.mode-btn');

    // Search
    searchInput.addEventListener('input', () => {
        state.search = searchInput.value.trim();
        clearBtn.classList.toggle('visible', state.search.length > 0);
        render();
    });

    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        state.search = '';
        clearBtn.classList.remove('visible');
        render();
    });

    // Sort
    sortSelect.addEventListener('change', () => {
        state.sort = sortSelect.value;
        render();
    });

    // Mode filter
    modeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.mode = btn.dataset.mode;
            render();
        });
    });

    // Reset btn
    document.getElementById('reset-btn').addEventListener('click', () => {
        searchInput.value = '';
        state.search = '';
        state.mode = 'all';
        state.sort = 'popular';
        clearBtn.classList.remove('visible');
        modeButtons.forEach(b => b.classList.toggle('active', b.dataset.mode === 'all'));
        sortSelect.value = 'popular';
        render();
    });
}

// ============================================================
// 10. NAVBAR SCROLL
// ============================================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    // Mobile toggle
    const toggle = document.getElementById('nav-toggle');
    const menu = document.querySelector('.nav-menu');
    toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
}

// ============================================================
// 11. CAT SIDEBAR SMOOTH SCROLL
// ============================================================
function initCatNav() {
    document.querySelectorAll('.cat-nav-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const cat = link.dataset.cat;
            const section = document.getElementById(`cat-${cat}`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ============================================================
// 12. STAT COUNTER ANIMATION
// ============================================================
function animateCounter(el, target) {
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current.toLocaleString('id-ID');
    }, 20);
}

function initCounters() {
    const totalEl = document.getElementById('stat-total');
    animateCounter(totalEl, WORKSHOPS.length);
}

// ============================================================
// 13. INIT
// ============================================================
function init() {
    initNavbar();
    initControls();
    initCatNav();
    initCounters();
    render();
}

document.addEventListener('DOMContentLoaded', init);
