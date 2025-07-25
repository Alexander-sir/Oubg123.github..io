// Scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Mission filter
document.getElementById('platform-filter').addEventListener('change', filterMissions);
document.getElementById('search-missions').addEventListener('input', filterMissions);

function filterMissions() {
    const platform = document.getElementById('platform-filter').value;
    const search = document.getElementById('search-missions').value.toLowerCase();
    const cards = document.querySelectorAll('.mission-card');

    cards.forEach(card => {
        const platformMatch = platform === 'all' || card.dataset.platform === platform;
        const textMatch = card.textContent.toLowerCase().includes(search);
        card.style.display = platformMatch && textMatch ? 'block' : 'none';
    });
}

// Redeem form (mock submission)
document.getElementById('redeem-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const code = document.getElementById('redeem-code').value;
    alert(`ریڈیم کوڈ "${code}" جمع ہو گیا! (فیچر جلد آ رہا ہے)`);
});

// Language toggle
function toggleLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[lang][key] || element.textContent;
    });
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        element.placeholder = translations[lang][key] || element.placeholder;
    });
}

// Default to Urdu for Pakistani users
toggleLanguage('ur');