const toggle = document.getElementById('languageToggle');
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.desktop-nav');
let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-en][data-ar]').forEach((el) => {
    el.innerHTML = el.dataset[lang];
  });
  toggle.textContent = lang === 'en' ? 'العربية' : 'English';
  toggle.setAttribute('aria-label', lang === 'en' ? 'Switch to Arabic' : 'Switch to English');
  document.title = lang === 'en' ? 'Abdelkhalek Mohamed | Accounting Manager' : 'عبد الخالق محمد | مدير حسابات';
}
toggle.addEventListener('click', () => setLanguage(currentLang === 'en' ? 'ar' : 'en'));
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
