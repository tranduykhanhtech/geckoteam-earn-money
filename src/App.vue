<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import WhyUsSection from './components/WhyUsSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'

const showScrollTop = ref(false)

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
    const href = anchor.getAttribute('href')
    if (href && href !== '#') {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) {
        const headerOffset = 70
        const elementPosition = el.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
        history.pushState(null, '', href)
      }
    }
  }
}

onMounted(() => {
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
      <div class="logo">
        <span class="logo-text">Gecko<span class="text-gradient">Team</span></span>
      </div>
      <nav class="nav">
        <a href="#services">Dịch vụ</a>
        <a href="#process">Quy trình</a>
        <a href="#portfolio">Dự án</a>
        <a href="#faq">FAQ</a>
        <a href="#contact" class="btn btn-primary btn-sm">Liên hệ</a>
      </nav>
    </div>
  </header>

  <main>
    <HeroSection />
    <ServicesSection />
    <ProcessSection />
    <PortfolioSection />
    <WhyUsSection />
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
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.05em;
  color: var(--color-text);
}

.nav {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav a:not(.btn) {
  color: var(--color-text-soft);
  font-weight: 500;
  font-size: 0.9rem;
}

.nav a:not(.btn):hover {
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
  background-color: var(--color-background);
  padding: 4rem 0 2rem;
  border-top: 1px solid var(--color-border);
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}

.footer-info p {
  color: var(--color-text-soft);
  margin-top: 0.5rem;
  font-size: 0.95rem;
}

.footer-copyright {
  color: var(--color-text-muted);
  font-size: 0.875rem;
  border-top: 1px solid var(--color-border);
  padding-top: 2rem;
  width: 100%;
}

@media (max-width: 768px) {
  .nav {
    display: none;
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
