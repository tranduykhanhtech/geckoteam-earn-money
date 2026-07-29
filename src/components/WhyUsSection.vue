<script setup lang="ts">
const reasons = [
  {
    title: 'Giải pháp tối ưu cho Startup',
    desc: 'Thiết kế các gói dịch vụ linh hoạt, loại bỏ những chi phí thừa để tập trung vào giá trị cốt lõi của sản phẩm.'
  },
  {
    title: 'Triển khai thần tốc',
    desc: 'Quy trình làm việc tinh gọn, giao tiếp trực tiếp với đội ngũ kỹ sư giúp rút ngắn thời gian ra mắt thị trường.'
  },
  {
    title: 'Cam kết chất lượng dài hạn',
    desc: 'Không dừng lại ở lúc bàn giao. Chúng tôi đồng hành bảo trì và nâng cấp hệ thống khi dự án của bạn mở rộng.'
  }
]
</script>

<template>
  <section id="why-us" class="section why-us">
    <div class="container">
      <div class="why-us-grid">
        <div class="why-us-intro">
          <h2 class="section-title fade-up" v-animate>Tại sao chọn <br/><span class="text-gradient">Gecko Team?</span></h2>
          <p class="section-subtitle fade-up delay-100" v-animate>
            Khác biệt của chúng tôi không chỉ nằm ở những dòng code, mà ở tư duy đồng hành cùng sự phát triển kinh doanh của bạn.
          </p>
          <div class="metrics fade-up delay-200" v-animate>
            <div class="metric">
              <span class="metric-value">100%</span>
              <span class="metric-label">Minh bạch chi phí</span>
            </div>
            <div class="metric-divider"></div>
            <div class="metric">
              <span class="metric-value">24/7</span>
              <span class="metric-label">Hỗ trợ kỹ thuật</span>
            </div>
          </div>
        </div>
        
        <div class="reasons-list">
          <div v-for="(reason, index) in reasons" :key="index" class="reason-item slide-in-right" v-animate :style="`transition-delay: ${index * 150 + 200}ms`">
            <div class="reason-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div class="reason-content">
              <h4 class="reason-title">{{ reason.title }}</h4>
              <p class="reason-desc">{{ reason.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-us {
  background-color: var(--color-background-soft);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.why-us-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.section-title {
  font-size: 2.75rem;
  margin-bottom: 1.5rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-soft);
  margin-bottom: 3rem;
  line-height: 1.8;
}

.metrics {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.metric-value {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.25rem;
  letter-spacing: -0.05em;
}

.metric-label {
  font-size: 0.875rem;
  color: var(--color-text-soft);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.metric-divider {
  width: 1px;
  height: 40px;
  background-color: var(--color-border);
}

.reasons-list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.reason-item {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.reason-icon {
  background-color: var(--color-primary-bg);
  color: var(--color-primary-dark);
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.reason-title {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.reason-desc {
  color: var(--color-text-soft);
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 992px) {
  .why-us-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
