/* ============================================================
   scripts/workshop-category.js
   Category Detail Page Logic
   Depends on: workshop-data.js (must be loaded first)
   ============================================================ */

'use strict';

// ============================================================
// STATE
// ============================================================
const state = {
    category:          null,   // current CATEGORIES item
    workshops:         [],     // workshops in this category
    selectedWorkshop:  null,   // currently selected workshop
    selectedTrainer:   null,   // selected trainer ID
    activeScope:       'private', // private or group
    activeMode:        'online',  // online or regular
    activeTierId:      null,   // null until user clicks "Pilih Paket"
    statusFilter:      'all',
    selectedDate:      null,
    selectedTime:      null,
};

// ============================================================
// INIT — entry point
// ============================================================
function init() {
    const params = new URLSearchParams(window.location.search);
    const catId  = params.get('cat');
    const wsId   = params.get('ws');

    // Guard: unknown category → redirect
    state.category = CATEGORIES.find(c => c.id === catId);
    if (!state.category) {
        window.location.href = 'workshop-index.html';
        return;
    }

    state.workshops = WORKSHOPS.filter(w => w.category === catId);
    state.selectedWorkshop = wsId
        ? WORKSHOPS.find(w => w.id === wsId) || state.workshops[0]
        : state.workshops[0];

    applyCategoryTheme(state.category);
    renderHero();
    renderWorkshopGrid();
    renderSelectedDetail();
    renderTypeBody();
    initEventListeners();
    initNavbar();
}

// ============================================================
// THEME — apply category color as CSS variables
// ============================================================
function applyCategoryTheme(cat) {
    // Map hex color to comma-separated RGB for rgba() usage
    const colorMap = {
        '#6366f1': '99,102,241',
        '#10b981': '16,185,129',
        '#ef4444': '239,68,68',
        '#0ea5e9': '14,165,233',
        '#a855f7': '168,85,247',
        '#f59e0b': '245,158,11',
    };
    const rgb = colorMap[cat.color] || '99,102,241';

    document.documentElement.style.setProperty('--cat-color', cat.color);
    document.documentElement.style.setProperty('--cat-color-glow', `rgba(${rgb},0.2)`);
    document.documentElement.style.setProperty('--cat-color-raw', rgb);
}

// ============================================================
// HERO SECTION
// ============================================================
function renderHero() {
    const cat = state.category;

    // Page title & meta
    document.getElementById('page-title').textContent = `${cat.label} Workshop — Yuros.org`;
    document.getElementById('page-desc').content = cat.longDesc;

    // Breadcrumb
    document.getElementById('bc-category').textContent = cat.label;

    // Category tag
    document.getElementById('cat-tag-icon').className = `fa-solid ${cat.icon}`;
    document.getElementById('cat-tag-label').textContent = cat.label;

    // Hero background gradient
    document.getElementById('cat-hero-bg').style.background = `
        radial-gradient(ellipse 70% 70% at 0% 50%, rgba(var(--cat-color-raw),0.12) 0%, transparent 60%),
        radial-gradient(ellipse 50% 50% at 100% 0%, rgba(139,92,246,0.05) 0%, transparent 60%),
        var(--bg-base)
    `;

    // Title & description
    document.getElementById('cat-title').textContent = `Workshop ${cat.label}`;
    document.getElementById('cat-desc').textContent = cat.longDesc;

    // Highlights pills
    const hlEl = document.getElementById('cat-highlights');
    hlEl.innerHTML = cat.highlights.map(h =>
        `<span class="highlight-pill"><i class="fa-solid fa-check"></i>${h}</span>`
    ).join('');

    // Stats
    const instructors = [...new Set(state.workshops.map(w => w.instructor))].length;
    animateCounter('stat-ws',     state.workshops.length,   0);
    animateCounter('stat-instr',  instructors,               0);
    animateCounter('stat-alumni', cat.totalAlumni,           0);

    const avgRating = state.workshops.reduce((s, w) => s + w.rating, 0) / state.workshops.length;
    document.getElementById('stat-rating').textContent = avgRating.toFixed(1);
}

// ============================================================
// WORKSHOP GRID
// ============================================================
function renderWorkshopGrid() {
    const grid = document.getElementById('ws-cards-grid');
    const sub  = document.getElementById('ws-list-sub');

    let workshops = state.workshops;
    if (state.statusFilter !== 'all') {
        workshops = workshops.filter(w => w.status === state.statusFilter);
    }

    sub.textContent = `${workshops.length} workshop tersedia${state.statusFilter !== 'all' ? ` (${statusLabel(state.statusFilter)})` : ''}`;

    if (workshops.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted)">
            <i class="fa-solid fa-circle-xmark" style="font-size:2rem;margin-bottom:12px;display:block"></i>
            Tidak ada workshop ${statusLabel(state.statusFilter)} di kategori ini.
        </div>`;
        return;
    }

    grid.innerHTML = workshops.map(ws => renderCompactCard(ws)).join('');

    // Animate capacity bars
    setTimeout(() => {
        grid.querySelectorAll('.wc-cap-fill').forEach(el => {
            el.style.width = el.dataset.width;
        });
    }, 100);
}

function renderCompactCard(ws) {
    const pct      = fillPct(ws.participants, ws.maxParticipants);
    const isSelected = ws.id === state.selectedWorkshop?.id;

    return `
    <article class="ws-compact-card ${isSelected ? 'selected' : ''}"
             id="card-${ws.id}" data-id="${ws.id}" role="button" tabindex="0"
             aria-label="Pilih workshop: ${ws.title}">
        <div class="wc-banner" style="background:${ws.gradient}">
            <i class="${ws.icon} wc-banner-icon"></i>
            <span class="wc-status ${ws.status}">${statusLabel(ws.status)}</span>
            <span class="wc-date-badge">${ws.day} ${ws.month} 2026</span>
            <div class="selected-check"><i class="fa-solid fa-check"></i></div>
        </div>
        <div class="wc-body">
            <h3 class="wc-title">${ws.title}</h3>
            <div class="wc-meta">
                <div class="wc-meta-row"><i class="fa-regular fa-clock"></i>${ws.time}</div>
                <div class="wc-meta-row"><i class="fa-solid fa-chalkboard-user"></i>${ws.instructor}</div>
            </div>
            <div class="wc-cap-bar">
                <div class="wc-cap-label">
                    <span>Kapasitas</span>
                    <span>${ws.participants}/${ws.maxParticipants}</span>
                </div>
                <div class="wc-cap-track">
                    <div class="wc-cap-fill" data-width="${pct}%" style="width:0%"></div>
                </div>
            </div>
            <div class="wc-footer">
                <div class="wc-rating"><i class="fa-solid fa-star"></i>${ws.rating}</div>
                <button class="wc-select-btn">
                    ${isSelected ? '<i class="fa-solid fa-check"></i> Dipilih' : 'Pilih Workshop'}
                </button>
            </div>
        </div>
    </article>`;
}

// ============================================================
// SELECTED WORKSHOP DETAIL
// ============================================================
function renderSelectedDetail() {
    const detail = document.getElementById('selected-detail');
    const ws    = state.selectedWorkshop;

    if (!ws) { detail.style.display = 'none'; return; }

    // Set initial trainer based on workshop instructor if matches
    const matchedTrainer = TRAINERS.find(t => t.name === ws.instructor);
    state.selectedTrainer = matchedTrainer ? matchedTrainer.id : TRAINERS[0].id;

    document.getElementById('sd-title').textContent = ws.title;
    document.querySelector('#sd-date span').textContent  = `${ws.day} ${ws.month} 2026`;
    document.querySelector('#sd-time span').textContent  = ws.time;
    
    updateInstructorDisplay();
    renderTrainerPicker();
    // Image & Certificate Link
    const certBtn = document.getElementById('sd-cert-btn');
    if (certBtn) {
        if (ws.certificate && ws.certificate.image) {
            certBtn.href = ws.certificate.image;
            certBtn.target = "_blank";
        } else {
            certBtn.href = "#";
            certBtn.removeAttribute("target");
        }
    }

    renderSchedulePicker(ws);

    detail.style.display = 'block';
}

function renderTrainerPicker() {
    const grid = document.getElementById('trainer-cards-grid');
    if (!grid) return;

    grid.innerHTML = TRAINERS.map(t => `
        <div class="trainer-card ${state.selectedTrainer === t.id ? 'active' : ''}" data-tid="${t.id}" role="button" tabindex="0" aria-label="Pilih trainer: ${t.name}">
            <div class="trainer-selected-icon"><i class="fa-solid fa-check"></i></div>
            <img src="${t.photo}" alt="${t.name}" class="trainer-photo">
            <h5 class="trainer-name">${t.name}</h5>
            <div class="trainer-role">${t.role}</div>
            <p class="trainer-exp">${t.experience}</p>
        </div>
    `).join('');

    // Attach events
    grid.querySelectorAll('.trainer-card').forEach(card => {
        card.onclick = () => {
            state.selectedTrainer = card.dataset.tid;
            renderTrainerPicker(); // Re-render to update active state
            updateInstructorDisplay();
        };
        // Keyboard support
        card.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.onclick();
            }
        };
    });
}

function updateInstructorDisplay() {
    const trainer = TRAINERS.find(t => t.id === state.selectedTrainer);
    if (trainer) {
        document.querySelector('#sd-instructor span').textContent = trainer.name;
    }
}

function renderSchedulePicker(ws) {
    const dayPills = document.getElementById('sd-day-pills');
    const statusArea = document.getElementById('sd-schedule-status');
    const fDateInput = document.getElementById('f-date');
    const fTimeInput = document.getElementById('f-time');
    
    if (!dayPills || !statusArea) return;

    // Default: no day selected on load
    if (!state.selectedDate) {
        statusArea.style.display = 'none';
    }

    // Attach events to day pills (only need to do once, but innerHTML is static so we can just attach)
    const dayBtns = dayPills.querySelectorAll('.sd-pill-btn');
    
    // Clear previous listeners by cloning (if re-rendering)
    // Actually, since HTML is static for days, we just toggle active class
    dayBtns.forEach(btn => {
        btn.onclick = (e) => {
            state.selectedDate = e.target.dataset.day;
            state.selectedTime = null; // reset time when day changes
            updateScheduleUI(ws);
        };
    });

    updateScheduleUI(ws);
}

function updateScheduleUI(ws) {
    const dayPills = document.getElementById('sd-day-pills');
    const statusArea = document.getElementById('sd-schedule-status');
    const fDateInput = document.getElementById('f-date');
    const fTimeInput = document.getElementById('f-time');
    
    if (!state.selectedDate) return;

    // Update active pill
    dayPills.querySelectorAll('.sd-pill-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.day === state.selectedDate);
    });

    // Mock availability logic: 
    // Let's say "Selasa" and "Minggu" are unavailable, the rest are available.
    const isAvailable = !['Selasa', 'Minggu'].includes(state.selectedDate);

    statusArea.style.display = 'block';
    statusArea.className = `sd-schedule-status ${isAvailable ? 'available' : 'unavailable'}`;

    if (isAvailable) {
        const times = ['09:00 - 12:00 WIB', '13:00 - 16:00 WIB', '19:00 - 21:00 WIB'];
        const timeHtml = times.map(t => {
            const isActive = state.selectedTime === t;
            return `<button class="sd-pill-btn ${isActive ? 'active' : ''}" data-time="${t}">${t}</button>`;
        }).join('');

        statusArea.innerHTML = `
            <div class="sd-status-msg"><i class="fa-solid fa-circle-check"></i> Hari ${state.selectedDate} Tersedia.</div>
            <div class="sd-time-picker-area">
                <label>Pilih Sesi Waktu:</label>
                <div class="sd-pills" id="sd-time-pills">
                    ${timeHtml}
                </div>
            </div>
        `;

        // Attach time events
        statusArea.querySelectorAll('.sd-pill-btn').forEach(btn => {
            btn.onclick = (e) => {
                state.selectedTime = e.target.dataset.time;
                updateScheduleUI(ws);
            };
        });
    } else {
        statusArea.innerHTML = `
            <div class="sd-status-msg"><i class="fa-solid fa-circle-xmark"></i> Maaf, jadwal untuk hari ${state.selectedDate} penuh atau libur.</div>
            <p style="font-size: 0.85rem; color: var(--text-sec); margin:0;">Silakan pilih hari lain yang tersedia.</p>
        `;
        state.selectedTime = null;
    }

    // Sync to form
    if (fDateInput) {
        fDateInput.value = isAvailable ? `Hari ${state.selectedDate}` : '';
    }
    if (fTimeInput) {
        fTimeInput.value = state.selectedTime || '';
    }
}

function renderTypeBody() {
    const activeTypeId = `${state.activeScope}-${state.activeMode}`;
    const bodyEl = document.getElementById('type-body');
    const type   = REGISTRATION_TYPES.find(t => t.id === activeTypeId);
    const tiers  = PACKAGE_TIERS[activeTypeId];

    const highlightsHtml = type.highlights.map(h =>
        `<span class="type-hl"><i class="fa-solid fa-check"></i>${h}</span>`
    ).join('');

    const packagesHtml = tiers.map(tier => renderPackageCard(tier)).join('');

    bodyEl.innerHTML = `
    <div class="type-body-content">
        <div class="type-desc-block">
            <div class="type-desc-icon">
                <i class="fa-solid ${type.icon}"></i>
            </div>
            <div class="type-desc-text">
                <p>${type.desc}</p>
                <div class="type-highlights">${highlightsHtml}</div>
            </div>
        </div>
        <div class="packages-grid">${packagesHtml}</div>
    </div>`;

    // Re-bind package CTA events
    bodyEl.querySelectorAll('.pkg-cta').forEach(btn => {
        btn.addEventListener('click', () => {
            const tierName = btn.dataset.tier;
            selectPackage(tierName);
        });
    });
}

function renderPackageCard(tier) {
    const featuresHtml = tier.features.map(f => `<li>${f}</li>`).join('');

    return `
    <div class="pkg-card ${tier.isPopular ? 'popular' : ''}">
        ${tier.isPopular ? '<span class="pkg-popular-badge">Terpopuler</span>' : ''}
        <p class="pkg-name">${tier.name}</p>
        <div class="pkg-price-wrap">
            <span class="pkg-price">${formatPrice(tier.price)}</span>
            <span class="pkg-price-unit">${tier.priceUnit}</span>
        </div>
        <p class="pkg-price-note">${tier.priceNote}</p>
        <div class="pkg-meta">
            <div class="pkg-meta-item"><i class="fa-regular fa-clock"></i>${tier.duration}</div>
            <div class="pkg-meta-item"><i class="fa-solid fa-circle-check"></i>${tier.features.length} benefit</div>
        </div>
        <ul class="pkg-features">${featuresHtml}</ul>
        <button class="pkg-cta" data-tier="${tier.name}">
            <i class="fa-solid fa-tags"></i> Pilih Paket ${tier.name}
        </button>
    </div>`;
}

// ============================================================
// PACKAGE SELECTION → show form
// ============================================================
function selectPackage(tierName) {
    const activeTypeId = `${state.activeScope}-${state.activeMode}`;
    state.activeTierId = tierName;
    const type = REGISTRATION_TYPES.find(t => t.id === activeTypeId);
    const tier = PACKAGE_TIERS[activeTypeId].find(t => t.name === tierName);
    const ws   = state.selectedWorkshop;

    // Populate form summary
    const summaryEl = document.getElementById('form-summary');
    summaryEl.innerHTML = `
        <div class="summary-item">
            <label>Workshop</label>
            <strong>${ws?.title || '—'}</strong>
        </div>
        <div class="summary-item">
            <label>Tipe</label>
            <strong>${type.label}</strong>
            <span>${type.tagline}</span>
        </div>
        <div class="summary-item">
            <label>Paket</label>
            <strong>${tier.name}</strong>
            <span>${formatPrice(tier.price)} ${tier.priceUnit}</span>
        </div>`;

    // Show/hide conditional fields
    const isGroup   = state.activeScope === 'group';
    const isInplace = state.activeMode === 'onsite';
    document.getElementById('fg-participants').style.display = isGroup   ? 'flex' : 'none';
    document.getElementById('fg-location').style.display     = isInplace ? 'flex' : 'none';

    // Show form section
    const formSection = document.getElementById('form-section');
    formSection.style.display = 'block';
    
    // Scroll to schedule picker instead of form directly
    setTimeout(() => {
        const schedulePicker = document.getElementById('sd-schedule-picker');
        if (schedulePicker) {
            schedulePicker.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Brief highlight effect to draw attention
            const origBoxShadow = schedulePicker.style.boxShadow;
            const origTransition = schedulePicker.style.transition;
            schedulePicker.style.transition = 'box-shadow 0.3s ease';
            schedulePicker.style.boxShadow = '0 0 0 2px var(--cat-color)';
            
            setTimeout(() => {
                schedulePicker.style.boxShadow = origBoxShadow;
                schedulePicker.style.transition = origTransition;
            }, 1000);
        } else {
            formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 80);
}

// ============================================================
// FORM SUBMIT
// ============================================================
function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    let valid = true;

    // Clear previous invalid states
    form.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));

    // Validate required fields
    form.querySelectorAll('[required]').forEach(input => {
        const group = input.closest('.form-group');
        if (!group || group.style.display === 'none') return;
        if (!input.value.trim()) {
            input.classList.add('invalid');
            valid = false;
        }
    });

    if (!valid) return;

    // Simulate submission
    const submitBtn = document.getElementById('form-submit-btn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Mengirim...';

    setTimeout(() => {
        document.getElementById('form-section').style.display = 'none';
        const successEl = document.getElementById('success-state');
        successEl.style.display = 'block';
        successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Kirim Permintaan';
    }, 1400);
}

// ============================================================
// EVENT LISTENERS
// ============================================================
function initEventListeners() {
    // Workshop card click (delegated)
    document.getElementById('ws-cards-grid').addEventListener('click', e => {
        const card = e.target.closest('.ws-compact-card');
        if (!card) return;
        selectWorkshop(card.dataset.id);
    });
    // Keyboard accessibility for cards
    document.getElementById('ws-cards-grid').addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            const card = e.target.closest('.ws-compact-card');
            if (card) { e.preventDefault(); selectWorkshop(card.dataset.id); }
        }
    });

    // Scope & Mode pickers (delegated or direct)
    document.querySelectorAll('#scope-pills .type-card').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('#scope-pills .type-card').forEach(b => b.classList.remove('active'));
            const target = e.currentTarget;
            target.classList.add('active');
            state.activeScope = target.dataset.scope;
            state.activeTierId = null;
            document.getElementById('form-section').style.display = 'none';
            renderTypeBody();
        });
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });

    document.querySelectorAll('#mode-pills .type-card').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('#mode-pills .type-card').forEach(b => b.classList.remove('active'));
            const target = e.currentTarget;
            target.classList.add('active');
            state.activeMode = target.dataset.mode;
            state.activeTierId = null;
            document.getElementById('form-section').style.display = 'none';
            renderTypeBody();
        });
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });

    // Status filter pills
    document.querySelectorAll('.filter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            state.statusFilter = pill.dataset.status;
            renderWorkshopGrid();
            // Re-bind card events after re-render
            rebindCardEvents();
        });
    });

    // Change workshop button
    const changeWsBtn = document.getElementById('change-ws-btn');
    if (changeWsBtn) {
        changeWsBtn.addEventListener('click', () => {
            document.getElementById('workshops').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Form submit
    document.getElementById('reg-form').addEventListener('submit', handleFormSubmit);

    // Register another
    document.getElementById('reg-another-btn').addEventListener('click', () => {
        document.getElementById('success-state').style.display = 'none';
        document.getElementById('reg-form').reset();
        state.activeTierId = null;
        document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
    });
}

function rebindCardEvents() {
    document.getElementById('ws-cards-grid').addEventListener('click', e => {
        const card = e.target.closest('.ws-compact-card');
        if (card) selectWorkshop(card.dataset.id);
    });
}

// ============================================================
// SELECT WORKSHOP
// ============================================================
function selectWorkshop(wsId) {
    const ws = state.workshops.find(w => w.id === wsId);
    if (!ws) return;
    state.selectedWorkshop = ws;

    // Update card states
    document.querySelectorAll('.ws-compact-card').forEach(card => {
        const isSelected = card.dataset.id === wsId;
        card.classList.toggle('selected', isSelected);
        const btn = card.querySelector('.wc-select-btn');
        if (btn) btn.innerHTML = isSelected
            ? '<i class="fa-solid fa-check"></i> Dipilih'
            : 'Pilih Workshop';
    });

    renderSelectedDetail();

    // Scroll to selected detail (Schedule Picker)
    setTimeout(() => {
        const detailEl = document.getElementById('schedule-section');
        if (detailEl) {
            detailEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 160);
}

// (switchType function removed since UI changed)

// ============================================================
// NAVBAR SCROLL
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
// COUNTER ANIMATION
// ============================================================
function animateCounter(elId, target, startDelay) {
    const el = document.getElementById(elId);
    if (!el) return;
    setTimeout(() => {
        let current = 0;
        const step  = Math.max(1, Math.ceil(target / 60));
        const timer = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            el.textContent = current.toLocaleString('id-ID');
        }, 18);
    }, startDelay);
}

// ============================================================
// START
// ============================================================
document.addEventListener('DOMContentLoaded', init);
