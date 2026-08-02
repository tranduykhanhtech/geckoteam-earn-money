<script setup lang="ts">
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'Chi phí thiết kế và làm web khoảng bao nhiêu?',
    answer: 'Chi phí phụ thuộc vào độ phức tạp của tính năng. Tuy nhiên, chúng tôi có các gói tối ưu đặc biệt dành riêng cho Startup với giá rất mềm, chỉ từ vài triệu đồng cho một website chuyên nghiệp hoàn chỉnh.',
    isOpen: true
  },
  {
    question: 'Thời gian hoàn thành dự án mất bao lâu?',
    answer: 'Một landing page cơ bản mất khoảng 3-5 ngày. Website doanh nghiệp phức tạp hơn hoặc ứng dụng web sẽ cần từ 2-4 tuần. Tiến độ luôn được cập nhật liên tục cho bạn.',
    isOpen: false
  },
  {
    question: 'Bảo hành và hỗ trợ sau khi bàn giao như thế nào?',
    answer: 'Đây là điểm tự hào của Gecko Team. Chúng tôi cam kết BẢO HÀNH VÀ HỖ TRỢ TRỌN ĐỜI đối với các lỗi phát sinh từ mã nguồn do chúng tôi phát triển. Bạn hoàn toàn yên tâm tập trung vào kinh doanh, kỹ thuật đã có chúng tôi lo.',
    isOpen: false
  },
  {
    question: 'Tôi cần chuẩn bị gì trước khi liên hệ làm việc?',
    answer: 'Bạn chỉ cần có ý tưởng hoặc liệt kê các tính năng mong muốn. Nếu có thêm các trang web mẫu (reference) mà bạn thích thì quá trình tư vấn sẽ nhanh chóng hơn.',
    isOpen: false
  }
])

const toggleFaq = (index: number) => {
  if (faqs.value[index]) {
    faqs.value[index].isOpen = !faqs.value[index].isOpen
  }
}
</script>

<template>
  <section id="faq" class="section faq">
    <div class="container">
      <div class="faq-layout">
        <div class="faq-header">
          <h2 class="section-title fade-up" v-animate>Câu hỏi thường gặp</h2>
          <p class="section-subtitle fade-up delay-100" v-animate>Giải đáp các thắc mắc phổ biến trước khi bạn quyết định hợp tác cùng Gecko Team.</p>
          <a href="#contact" class="btn btn-primary mt-4 fade-up delay-200" v-animate>Liên hệ tư vấn thêm</a>
        </div>
        
        <div class="faq-list">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index" 
            class="faq-item fade-up"
            v-animate
            :style="`transition-delay: ${index * 100}ms`"
          >
            <button class="faq-question" @click="toggleFaq(index)">
              <span>{{ faq.question }}</span>
              <span class="faq-icon">
                <svg v-if="!faq.isOpen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </span>
            </button>
            <div class="faq-answer-wrapper" :class="{ 'is-open': faq.isOpen }">
              <div class="faq-answer">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  background-color: var(--color-background);
}

.faq-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
}

.section-title {
  font-size: 2.75rem;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-soft);
  margin-bottom: 2rem;
}

.mt-4 {
  margin-top: 1rem;
}

.faq-list {
  display: flex;
  flex-direction: column;
}

.faq-item {
  border-bottom: 1px solid var(--color-border);
}

.faq-item:first-child {
  border-top: 1px solid var(--color-border);
}

.faq-question {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: inherit;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text);
  cursor: pointer;
}

.faq-icon {
  color: var(--color-text-muted);
  flex-shrink: 0;
  margin-left: 1rem;
}

.faq-answer-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}

.faq-answer-wrapper.is-open {
  grid-template-rows: 1fr;
}

.faq-answer {
  overflow: hidden;
  padding-bottom: 0;
  transition: padding-bottom 0.3s ease;
}

.faq-answer-wrapper.is-open .faq-answer {
  padding-bottom: 1.5rem;
}

.faq-answer p {
  color: var(--color-text-soft);
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 992px) {
  .faq-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
