<script setup lang="ts">
const steps = [
  {
    title: 'Khám phá & Tư vấn',
    desc: 'Lắng nghe yêu cầu, phân tích bài toán kinh doanh và đề xuất giải pháp kỹ thuật tối ưu nhất về chi phí cho Startup.'
  },
  {
    title: 'Thiết kế UI/UX',
    desc: 'Lên wireframe và thiết kế giao diện (Figma) bám sát bộ nhận diện thương hiệu. Chốt thiết kế trước khi lập trình.'
  },
  {
    title: 'Lập trình & Kiểm thử',
    desc: 'Phát triển Frontend/Backend theo chuẩn mã nguồn sạch. Kiểm thử kỹ lưỡng đảm bảo không có lỗi (bug) phát sinh.'
  },
  {
    title: 'Bàn giao & Hỗ trợ',
    desc: 'Triển khai lên server, hướng dẫn sử dụng. <strong>Đặc biệt: Bảo hành và hỗ trợ trọn đời để hệ thống luôn ổn định.</strong>'
  }
]
</script>

<template>
  <section id="process" class="section process">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title fade-up" v-animate>Quy trình làm việc</h2>
        <p class="section-subtitle fade-up delay-100" v-animate>Minh bạch, tinh gọn và hiệu quả ở từng giai đoạn.</p>
      </div>

      <div class="process-timeline">
        <div v-for="(step, index) in steps" :key="index" class="timeline-item fade-up" v-animate :style="`transition-delay: ${index * 150}ms`">
          
          <!-- Phần đỉnh: Hình tròn số thứ tự và Mũi tên nối -->
          <div class="timeline-header">
            <div class="step-circle">{{ index + 1 }}</div>
            <div class="step-connector" v-if="index !== steps.length - 1">
              <div class="line"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
          </div>
          
          <!-- Phần nội dung: Text -->
          <div class="step-content">
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc" v-html="step.desc"></p>
          </div>
          
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.process {
  background-color: var(--color-background-soft);
  border-top: 1px solid var(--color-border);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
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

/* Timeline Layout */
.process-timeline {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
}

.timeline-item {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.timeline-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  width: 100%;
}

.step-circle {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: var(--color-primary); /* Đổi sang màu xanh lá chủ đạo */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25); /* Đổ bóng màu xanh nhẹ */
  font-family: monospace;
}

/* Connector Line & Arrow */
.step-connector {
  flex-grow: 1;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-right: 0.5rem;
  color: var(--color-border);
}

.line {
  flex-grow: 1;
  height: 1px;
  background-color: transparent;
  border-top: 2px dashed var(--color-border);
}

.arrow {
  margin-left: -5px; /* Kéo mũi tên dính vào nét đứt */
}

/* Content */
.step-content {
  padding-right: 1rem;
}

.step-title {
  font-size: 1.25rem;
  color: var(--color-text);
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.step-desc {
  font-size: 0.95rem;
  color: var(--color-text-soft);
  line-height: 1.6;
}

/* Responsive cho Mobile */
@media (max-width: 992px) {
  .process-timeline {
    flex-direction: column;
    gap: 3rem;
  }
  
  .step-connector {
    display: none; /* Ẩn mũi tên ngang trên mobile */
  }

  .timeline-header {
    margin-bottom: 1rem;
  }
}
</style>
