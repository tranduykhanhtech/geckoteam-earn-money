<script setup lang="ts">
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container">
      <div class="contact-header">
        <h2 class="section-title fade-up" v-animate>Kết nối với chúng tôi</h2>
        <p class="section-subtitle fade-up delay-100" v-animate>
          Hãy để lại lời nhắn hoặc ghé thăm văn phòng của chúng tôi để trao đổi trực tiếp về dự án của bạn.
        </p>
      </div>
      
      <div class="contact-grid">
        <div class="contact-card fade-up delay-100" v-animate>
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </div>
          <h3>Email</h3>
          <p>support@gecko.io.vn</p>
        </div>

        <div class="contact-card fade-up delay-200" v-animate>
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </div>
          <h3>Điện thoại</h3>
          <p>0388494802</p>
        </div>

        <div class="contact-card fade-up delay-300" v-animate>
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          <h3>Địa chỉ</h3>
          <p>289 Nguyễn Thái Sơn, Phường An Nhơn, Hồ Chí Minh</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background-color: var(--color-background);
}

.contact-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-soft);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem; /* Khoảng cách 20px giữa các thẻ */
  }

  .contact-card {
    padding: 1.5rem 1rem !important; /* Giảm padding bên trong thẻ */
  }

  .icon-wrapper {
    width: 3rem !important;
    height: 3rem !important;
    margin: 0 auto 1rem !important;
  }

  .icon-wrapper svg {
    width: 20px;
    height: 20px;
  }
}

.contact-card {
  padding: 3rem 2rem;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  text-align: center;
  transition: all var(--transition-speed) ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
  border-color: var(--color-primary-light);
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border);
}

.contact-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.contact-card p {
  color: var(--color-text-soft);
  margin: 0;
  font-size: 1rem;
}
</style>
