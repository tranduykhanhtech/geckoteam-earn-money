<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import TechStackSection from './components/TechStackSection.vue'
import PricingSection from './components/PricingSection.vue'
import TestimonialSection from './components/TestimonialSection.vue'
import WhyUsSection from './components/WhyUsSection.vue'
import TeamSection from './components/TeamSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'

const showScrollTop = ref(false)
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleGlobalClick = (e: Event) => {
  const target = e.target as HTMLElement
  const anchor = target.closest('a[href^="#"]')
  
  if (anchor) {
    if (isMobileMenuOpen.value) {
      isMobileMenuOpen.value = false
    }

    const href = anchor.getAttribute('href')
    if (href) {
      e.preventDefault()
      
      if (href === '#') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        return
      }

      const el = document.querySelector(href)
      if (el) {
        const headerOffset = 70
        const elementPosition = el.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }
}

onMounted(() => {
  // Ngăn trình duyệt tự động khôi phục vị trí cuộn cũ khi F5
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }
  
  // Buộc cuộn lên đầu trang mỗi khi tải lại
  window.scrollTo(0, 0)

  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleGlobalClick)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleGlobalClick)
})
</script>

<template>
  <header class="header">
    <div class="container header-container">
      <a href="#" class="logo" aria-label="Go to top">
        <span class="logo-text">Gecko<span class="text-gradient">Team</span></span>
      </a>
      <nav class="nav desktop-nav">
        <a href="#services">Dịch vụ</a>
        <a href="#process">Quy trình</a>
        <a href="#tech">Công nghệ</a>
        <a href="#pricing">Giải pháp</a>
        <a href="#why-us">Ưu điểm</a>
        <a href="#team">Đội ngũ</a>
        <a href="#faq">FAQ</a>
        <a href="#contact" class="btn btn-primary btn-sm">Liên hệ</a>
      </nav>

      <!-- Hamburger Menu Button -->
      <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="Mở menu">
        <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div class="mobile-nav-overlay" :class="{ 'is-open': isMobileMenuOpen }">
      <nav class="mobile-nav">
        <a href="#services">Dịch vụ</a>
        <a href="#process">Quy trình</a>
        <a href="#tech">Công nghệ</a>
        <a href="#pricing">Giải pháp</a>
        <a href="#why-us">Ưu điểm</a>
        <a href="#team">Đội ngũ</a>
        <a href="#faq">FAQ</a>
        <a href="#contact" class="btn btn-primary">Liên hệ ngay</a>
      </nav>
    </div>
  </header>

  <main>
    <HeroSection />
    <ServicesSection />
    <ProcessSection />
    <TechStackSection />
    <PricingSection />
    <TestimonialSection />
    <WhyUsSection />
    <TeamSection />
    <FaqSection />
    <ContactSection />
  </main>

  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-info">
        <div class="logo">
          <span class="logo-text">Gecko<span class="text-gradient">Team</span></span>
        </div>
        <p>Giải pháp phần mềm & website trọn gói cho startups.</p>
      </div>
      <div class="footer-copyright">
        &copy; 2026 Gecko Team. All rights reserved.
      </div>
    </div>
  </footer>

  <button 
    v-show="showScrollTop" 
    @click="scrollToTop" 
    class="scroll-to-top"
    aria-label="Cuộn lên đầu trang"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
  </button>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 1000;
  border-bottom: 1px solid var(--color-border);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.05em;
  color: var(--color-text);
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.desktop-nav a:not(.btn) {
  color: var(--color-text-soft);
  font-weight: 500;
  font-size: 0.85rem;
}

.desktop-nav a:not(.btn):hover {
  color: var(--color-text);
}

.btn-sm {
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
}

main {
  margin-top: 70px;
}

.footer {
  background-color: #09090b; /* Zinc 950 */
  padding: 4rem 0 2rem;
  border-top: 1px solid #27272a; /* Zinc 800 */
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}

.footer-info .logo {
  color: white;
}

.footer-info p {
  color: #a1a1aa; /* Zinc 400 */
  margin-top: 0.5rem;
  font-size: 0.95rem;
}

.footer-copyright {
  color: #71717a; /* Zinc 500 */
  font-size: 0.875rem;
  border-top: 1px solid #27272a; /* Zinc 800 */
  padding-top: 2rem;
  width: 100%;
}

@media (max-width: 992px) {
  .desktop-nav {
    display: none;
  }
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-nav-overlay {
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  z-index: 999;
}

.mobile-nav-overlay.is-open {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.mobile-nav a:not(.btn) {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text);
}

@media (max-width: 992px) {
  .mobile-menu-btn {
    display: block;
  }
}

.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  background-color: var(--color-text);
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow);
  z-index: 9999;
  transition: all var(--transition-speed) ease;
}

.scroll-to-top:hover {
  transform: translateY(-3px);
  background-color: #27272a;
}
</style>
