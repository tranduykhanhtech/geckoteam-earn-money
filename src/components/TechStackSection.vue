<script setup lang="ts">
const metrics = [
  {
    value: '99',
    unit: '/100',
    label: 'Điểm hiệu năng (Lighthouse)',
    desc: 'Tối ưu tốc độ tải trang cực nhanh, giữ chân khách hàng.'
  },
  {
    value: '99.9',
    unit: '%',
    label: 'Thời gian hoạt động (Uptime)',
    desc: 'Hệ thống server ổn định, sẵn sàng mở rộng khi traffic tăng đột biến.'
  },
  {
    value: '< 1',
    unit: 's',
    label: 'Tốc độ phản hồi',
    desc: 'Kiến trúc backend hiện đại cho phép xử lý dữ liệu tức thì.'
  }
]

const technologies = [
  'Vue.js', 'React', 'Next.js', 'Nuxt.js', 'Node.js', 'Go', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Vercel', 'Docker', 'Figma'
]
</script>

<template>
  <section id="tech" class="section tech-stack">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title fade-up" v-animate>Hiệu năng vượt trội</h2>
        <p class="section-subtitle fade-up delay-100" v-animate>
          Không chỉ có giao diện đẹp, sản phẩm của Gecko Team được xây dựng trên nền tảng kỹ thuật vững chắc nhất.
        </p>
      </div>

      <div class="metrics-grid">
        <div 
          v-for="(metric, index) in metrics" 
          :key="index"
          class="metric-card fade-up"
          v-animate
          :style="`transition-delay: ${index * 150}ms`"
        >
          <div class="metric-value-wrap">
            <span class="metric-value">{{ metric.value }}</span>
            <span class="metric-unit">{{ metric.unit }}</span>
          </div>
          <h3 class="metric-label">{{ metric.label }}</h3>
          <p class="metric-desc">{{ metric.desc }}</p>
        </div>
      </div>

      <div class="tech-ecosystem fade-up delay-300" v-animate>
        <h3 class="ecosystem-title">Hệ sinh thái công nghệ</h3>
        <div class="tech-tags">
          <span 
            v-for="(tech, idx) in technologies" 
            :key="idx" 
            class="tech-tag"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech-stack {
  background-color: #09090b; /* Dark theme to match Services */
  color: white;
  border-top: 1px solid #27272a;
  border-bottom: 1px solid #27272a;
}

.section-header {
  margin-bottom: 4rem;
  text-align: center;
}

.section-title {
  font-size: 2.75rem;
  color: white;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #a1a1aa;
  margin-top: 1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-bottom: 5rem;
}

.metric-card {
  background: #18181b;
  border: 1px solid #27272a;
  border-radius: var(--radius);
  padding: 3rem 2rem;
  text-align: center;
  transition: all var(--transition-speed) ease;
}

.metric-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -10px rgba(16, 185, 129, 0.15);
}

.metric-value-wrap {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.25rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.metric-value {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.05em;
}

.metric-unit {
  font-size: 1.5rem;
  font-weight: 700;
}

.metric-label {
  font-size: 1.25rem;
  color: white;
  margin-bottom: 0.75rem;
}

.metric-desc {
  color: #a1a1aa;
  font-size: 0.95rem;
  line-height: 1.6;
}

.tech-ecosystem {
  text-align: center;
  background: linear-gradient(180deg, rgba(24, 24, 27, 0) 0%, rgba(24, 24, 27, 0.5) 100%);
  padding: 3rem;
  border-radius: var(--radius);
  border: 1px dashed #3f3f46;
}

.ecosystem-title {
  font-size: 1.125rem;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.tech-tag {
  background: #27272a;
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #3f3f46;
  transition: all var(--transition-speed) ease;
  cursor: default;
}

.tech-tag:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
  transform: scale(1.05);
}

@media (max-width: 992px) {
  .metrics-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .tech-ecosystem {
    padding: 2rem 1rem;
  }
}
</style>
