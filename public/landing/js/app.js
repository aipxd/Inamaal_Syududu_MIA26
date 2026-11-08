/**
 * CekPangan - Minimalist Landing Page Script
 * Hanya digunakan untuk fungsionalitas pendukung kecil (Responsif & Interaktivitas Ringan)
 * Modul diorganisir rapi baris per fungsi dengan dokumentasi jelas.
 */

// Menjalankan fungsi setelah DOM siap
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScrolling();
});

/* ==========================================================================
   1. Toggle Menu Navigasi Responsif (Mobile Hamburger Menu)
   ========================================================================== */
function toggleMobileNav() {
  const navMenu = document.getElementById('navMenu');
  const toggleBtn = document.getElementById('menuToggleBtn');
  
  if (!navMenu) return;

  const isOpen = navMenu.classList.toggle('open');
  
  // Ubah ikon tombol sesuai status terbuka/tertutup
  if (toggleBtn) {
    toggleBtn.textContent = isOpen ? '✕' : '☰';
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }
}

/* ==========================================================================
   2. Inisialisasi Smooth Scrolling & Auto Close Mobile Nav
   ========================================================================== */
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');

      // Periksa apakah tautan adalah anchor internal
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          event.preventDefault();
          
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Otomatis tutup menu di layar mobile setelah link diklik
          closeMobileNavIfOpen();
        }
      }
    });
  });
}

/* ==========================================================================
   3. Tutup Menu Mobile Saat Klik di Luar atau Setelah Navigasi
   ========================================================================== */
function closeMobileNavIfOpen() {
  const navMenu = document.getElementById('navMenu');
  const toggleBtn = document.getElementById('menuToggleBtn');

  if (navMenu && navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
    if (toggleBtn) {
      toggleBtn.textContent = '☰';
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  }
}
