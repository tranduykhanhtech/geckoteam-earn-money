<script setup lang="ts">
const pricingPlans = [
  {
    id: 1,
    name: 'Khởi động MVP',
    price: 'Siêu Tiết Kiệm',
    description: 'Landing Page tốc độ cao giúp Startup kiểm chứng thị trường với ngân sách cực thấp.',
    features: [
      'Giao diện chuẩn SEO',
      'Chuẩn Responsive (Mobile)',
      'Hoàn thành 3 - 5 ngày',
      'Bảo hành kỹ thuật 6 tháng'
    ],
    buttonText: 'Bắt đầu ngay',
    isPopular: false
  },
  {
    id: 2,
    name: 'Cơ bản (Basic)',
    price: 'Ngân Sách Nhỏ',
    description: 'Website doanh nghiệp đầy đủ tính năng thiết yếu, chi phí cực kỳ hợp lý.',
    features: [
      'Giao diện đa trang (Multi-page)',
      'Hệ thống quản trị (CMS) dễ dùng',
      'Tích hợp form liên hệ',
      'Bảo hành kỹ thuật 1 năm'
    ],
    buttonText: 'Chọn gói này',
    isPopular: false
  },
  {
    id: 3,
    name: 'Mở rộng (Growth)',
    price: 'Tối Ưu Hóa',
    description: 'Hệ thống toàn diện với kiến trúc có thể mở rộng nhưng không làm thủng ví của bạn.',
    features: [
      'Thiết kế UI/UX độc quyền (Figma)',
      'Tích hợp Thanh toán, API bên thứ 3',
      'Tối ưu hiệu năng mức cao nhất',
      'Bảo hành & Hỗ trợ trọn đời'
    ],
    buttonText: 'Nhận tư vấn kỹ thuật',
    isPopular: false
  },
  {
    id: 4,
    name: 'Đội ngũ riêng',
    price: 'Linh Động',
    description: 'Thuê đội ngũ kỹ sư đồng hành phát triển sản phẩm dài hạn, chi phí thỏa thuận.',
    features: [
      'Làm việc như In-house team',
      'Cam kết tiến độ hàng tuần',
      'Giao toàn bộ mã nguồn',
      'Bảo mật tuyệt đối (NDA)'
    ],
    buttonText: 'Liên hệ đàm phán',
    isPopular: false
  }
]
</script>

<template>
  <section id="pricing" class="section pricing">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title fade-up" v-animate>Giải pháp tối ưu chi phí</h2>
        <p class="section-subtitle fade-up delay-100" v-animate>
          Thiết kế dành riêng cho các Startup. Chúng tôi mang đến chất lượng cao cấp nhất với mức đầu tư dễ chịu nhất.
        </p>
      </div>

      <div class="pricing-grid">
        <div 
          v-for="(plan, index) in pricingPlans" 
          :key="plan.id" 
          class="pricing-card fade-up" 
          v-animate 
          :style="`transition-delay: ${index * 150}ms`"
          :class="{ 'is-popular': plan.isPopular }"
        >
          <div class="popular-badge" v-if="plan.isPopular">Khuyên dùng</div>
          
          <div class="card-header">
            <h3 class="plan-name">{{ plan.name }}</h3>
            <div class="plan-price">{{ plan.price }}</div>
            <p class="plan-desc">{{ plan.description }}</p>
          </div>
          
          <div class="card-body">
            <ul class="feature-list">
              <li v-for="feature in plan.features" :key="feature">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
          
          <div class="card-footer">
            <a href="#contact" class="btn w-100" :class="plan.isPopular ? 'btn-primary' : 'btn-outline'">
              {{ plan.buttonText }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing {
  background-color: var(--color-background);
}

.section-header {
  margin-bottom: 4rem;
  text-align: center;
}

.section-title {
  font-size: 2.75rem;
  color: var(--color-text);
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-soft);
  margin-top: 1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1300px;
  margin: 0 auto;
}

@media (max-width: 1200px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 800px;
  }
}

@media (max-width: 768px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 450px;
  }
}

.pricing-card {
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all var(--transition-speed) ease;
}

.pricing-card:hover {
  border-color: var(--color-primary-light);
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.pricing-card.is-popular {
  border-color: var(--color-primary);
  box-shadow: 0 10px 30px -10px rgba(16, 185, 129, 0.2);
  transform: scale(1.05);
  background-color: var(--color-background); /* Highlight effect */
  z-index: 1;
}

@media (max-width: 992px) {
  .pricing-card.is-popular {
    transform: scale(1); /* Tắt hiệu ứng scale trên mobile để tránh vỡ giao diện */
  }
}

.popular-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-primary);
  color: white;
  padding: 0.35rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.2);
  white-space: nowrap;
}

.card-header {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-border);
}

.plan-name {
  font-size: 1.15rem;
  color: var(--color-text);
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.plan-price {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-text);
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.plan-desc {
  font-size: 0.95rem;
  color: var(--color-text-soft);
  line-height: 1.6;
}

.card-body {
  flex-grow: 1;
  margin-bottom: 2rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--color-text);
}

.check-icon {
  color: var(--color-primary);
  flex-shrink: 0;
  margin-top: 2px;
}

.card-footer {
  margin-top: auto;
}

.w-100 {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
