<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: 'FinTech Dashboard',
    category: 'Web Application',
    tags: ['Vue 3', 'TypeScript', 'Tailwind'],
    imageColor: '#f1f5f9',
    image: '/fintech-dashboard.png' // Thêm đường dẫn ảnh
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    category: 'Website & CMS',
    tags: ['Nuxt', 'Node.js', 'Stripe'],
    imageColor: '#1a1a1a', // Đổi màu nền tối để hợp với viền ảnh e-commerce
    image: '/ecommerce-platform.png'
  },
  {
    id: 3,
    title: 'HealthCare App',
    category: 'Mobile First',
    tags: ['React Native', 'Firebase'],
    imageColor: '#ebf5ee', // Màu xanh mint nhạt hợp với nền ảnh
    image: '/healthcare-app.png'
  },
  {
    id: 4,
    title: 'Fitness Tracking App',
    category: 'Cross-platform Mobile',
    tags: ['Flutter', 'Supabase'],
    imageColor: '#eef4fd', // Nền xanh lam nhạt đồng điệu với màu ảnh
    image: '/fitness-app.png'
  }
]
</script>

<template>
  <section id="portfolio" class="section portfolio">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Dự án tiêu biểu</h2>
        <p class="section-subtitle">Những sản phẩm chúng tôi đã xây dựng với sự tỉ mỉ và tiêu chuẩn khắt khe nhất.</p>
      </div>

      <div class="portfolio-grid">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-image" :style="{ backgroundColor: project.imageColor }">
            <img v-if="project.image" :src="project.image" :alt="project.title" class="project-img" />
            <div v-else class="image-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="placeholder-icon"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            </div>
          </div>
          <div class="project-info">
            <p class="project-category">{{ project.category }}</p>
            <h3 class="project-title">{{ project.title }}</h3>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio {
  background-color: var(--color-background);
}

.section-header {
  margin-bottom: 4rem;
  max-width: 600px;
}

.section-title {
  font-size: 2.75rem;
  color: var(--color-text);
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-soft);
  margin-top: 1rem;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.project-card {
  display: flex;
  flex-direction: column;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: border-color var(--transition-speed) ease;
  background-color: var(--color-background);
}

.project-card:hover {
  border-color: var(--color-text-muted);
}

.project-image {
  aspect-ratio: 16/10;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--color-border);
  overflow: hidden;
  background-color: #f8fafc;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Đảm bảo ảnh vừa khít 100% không bị cắt */
  object-position: center;
  transition: transform var(--transition-speed) ease;
}

.project-card:hover .project-img {
  transform: scale(1.05);
}

.placeholder-icon {
  color: var(--color-text-muted);
  opacity: 0.3;
}

.project-info {
  padding: 1.5rem;
}

.project-category {
  font-size: 0.85rem;
  color: var(--color-text-soft);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.project-title {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  background-color: var(--color-background-mute);
  color: var(--color-text-soft);
  border: 1px solid var(--color-border);
  border-radius: 9999px;
  font-weight: 500;
}
</style>
