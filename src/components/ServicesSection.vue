<script setup lang="ts">
const services = [
  {
    id: 1,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>',
    title: 'Thiết kế UI/UX',
    description: 'Nghiên cứu hành vi người dùng, thiết kế wireframe và giao diện pixel-perfect để tối đa hóa tỷ lệ chuyển đổi.'
  },
  {
    id: 2,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    title: 'Phát triển Web/App',
    description: 'Xây dựng frontend mượt mà và backend mạnh mẽ. Sử dụng các framework hiện đại như Vue, React, Node.js.'
  },
  {
    id: 3,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
    title: 'DevOps & Triển khai',
    description: 'Thiết lập CI/CD, tự động hóa quy trình kiểm thử và deploy lên các nền tảng Cloud (AWS, GCP, Vercel).'
  }
]
</script>

<template>
  <section id="services" class="section services">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title fade-up" v-animate>Chuyên môn hóa</h2>
        <p class="section-subtitle fade-up delay-100" v-animate>Chúng tôi tập trung vào những gì mình làm giỏi nhất để mang lại giá trị cao nhất cho khách hàng.</p>
      </div>

      <div class="services-grid">
        <div v-for="(service, index) in services" :key="service.id" class="service-card fade-up" v-animate :style="`transition-delay: ${index * 150}ms`">
          <div class="service-icon" v-html="service.icon"></div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-desc">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  background-color: #09090b; /* Nền đen Zinc 950 */
  color: white;
}

.section-header {
  margin-bottom: 4rem;
  max-width: 600px;
}

.section-title {
  font-size: 2.75rem;
  color: white;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #a1a1aa; /* Zinc 400 */
  margin-top: 1rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.service-card {
  background: #18181b; /* Zinc 900 */
  border: 1px solid #27272a; /* Zinc 800 */
  border-radius: var(--radius);
  padding: 2.5rem;
  transition: all var(--transition-speed) ease;
}

.service-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-5px);
}

.service-icon {
  margin-bottom: 1.5rem;
  display: inline-flex;
  padding: 0.75rem;
  background: #27272a;
  border-radius: 6px;
  color: var(--color-primary);
  border: 1px solid #3f3f46;
  box-shadow: var(--shadow-sm);
}

.service-title {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: white;
}

.service-desc {
  color: #a1a1aa;
  line-height: 1.7;
  font-size: 0.95rem;
}
</style>
