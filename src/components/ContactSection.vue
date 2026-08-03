<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const isLoading = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

const submitForm = async () => {
  isLoading.value = true
  errorMessage.value = ''
  isSuccess.value = false
  
  try {
    // Thay thế URL dưới đây bằng Webhook URL của Google Apps Script
    const scriptURL = 'https://script.google.com/macros/s/AKfycbys1hW89OsKfmIoqwWFK4kPCfRu_yar5FQxwD1Qi7uE831lA8ALC9Up7htn-NUVtCRp/exec'

    // Gửi data sang Google Sheets thông qua Webhook
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: new URLSearchParams(formData.value as any)
    })
    
    const data = await response.json()
    
    if (response.ok && data.result === 'success') {
      isSuccess.value = true
      formData.value = { name: '', email: '', phone: '', message: '' }
      setTimeout(() => { isSuccess.value = false }, 5000)
    } else {
      console.error('Lỗi từ Google Sheets:', data.error)
      throw new Error('Google Sheets báo lỗi: ' + JSON.stringify(data.error))
    }
  } catch (error) {
    errorMessage.value = 'Có lỗi xảy ra, vui lòng thử lại sau.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container">
      <div class="contact-header">
        <h2 class="section-title fade-up" v-animate>Bắt đầu dự án của bạn</h2>
        <p class="section-subtitle fade-up delay-100" v-animate>
          Hãy để lại thông tin, đội ngũ Gecko Team sẽ liên hệ tư vấn lộ trình và báo giá sơ bộ trong vòng 24h.
        </p>
      </div>
      
      <div class="contact-layout">
        <!-- Cột trái: Thông tin liên hệ -->
        <div class="contact-info">
          <div class="contact-card fade-up delay-100" v-animate>
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div>
              <h3>Email</h3>
              <p>support@gecko.io.vn</p>
            </div>
          </div>

          <div class="contact-card fade-up delay-200" v-animate>
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div>
              <h3>Điện thoại</h3>
              <p>0388494802</p>
            </div>
          </div>

          <div class="contact-card fade-up delay-300" v-animate>
            <div class="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div>
              <h3>Văn phòng</h3>
              <p>289 Nguyễn Thái Sơn, P. An Nhơn, TP. Hồ Chí Minh</p>
            </div>
          </div>
        </div>

        <!-- Cột phải: Form nhập liệu -->
        <div class="contact-form-wrapper fade-up delay-400" v-animate>
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="name">Họ và tên</label>
              <input type="text" id="name" v-model="formData.name" required placeholder="Nhập tên của bạn" />
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="email">Email liên hệ</label>
                <input type="email" id="email" v-model="formData.email" required placeholder="email@example.com" />
              </div>
              <div class="form-group">
                <label for="phone">Số điện thoại</label>
                <input type="tel" id="phone" v-model="formData.phone" required placeholder="09xx xxx xxx" />
              </div>
            </div>
            
            <div class="form-group">
              <label for="message">Mô tả dự án hoặc Lời nhắn</label>
              <textarea id="message" v-model="formData.message" required placeholder="Bạn cần chúng tôi hỗ trợ xây dựng hệ thống gì?" rows="4"></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary submit-btn" :disabled="isLoading" :class="{ 'is-loading': isLoading }">
              <span v-if="isLoading">Đang gửi dữ liệu...</span>
              <span v-else>Gửi Yêu Cầu</span>
            </button>

            <!-- Alerts -->
            <transition name="fade">
              <div v-if="isSuccess" class="form-alert success">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Gửi yêu cầu thành công! Chúng tôi sẽ gọi lại cho bạn sớm nhất.
              </div>
            </transition>
            <transition name="fade">
              <div v-if="errorMessage" class="form-alert error">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                {{ errorMessage }}
              </div>
            </transition>
          </form>
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
  font-size: 2.75rem;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-soft);
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;
}

/* LEFT COLUMN - INFO CARDS */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.5rem;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  transition: all var(--transition-speed) ease;
}

.contact-card:hover {
  transform: translateX(5px);
  border-color: var(--color-primary-light);
  box-shadow: var(--shadow-sm);
}

.icon-wrapper {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  border: 1px solid var(--color-border);
}

.contact-card h3 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: var(--color-text);
}

.contact-card p {
  color: var(--color-text-soft);
  margin: 0;
  font-size: 0.95rem;
}

/* RIGHT COLUMN - FORM */
.contact-form-wrapper {
  background-color: white;
  padding: 3rem;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

input, textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  font-family: inherit;
  font-size: 0.95rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background-color: var(--color-background-soft);
  color: var(--color-text);
  transition: all var(--transition-speed) ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  background-color: white;
  box-shadow: 0 0 0 3px var(--color-primary-bg);
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  font-size: 1.125rem;
  margin-top: 1rem;
}

.submit-btn.is-loading {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-alert {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.form-alert.success {
  background-color: var(--color-primary-bg);
  color: var(--color-primary-dark);
  border: 1px solid var(--color-primary-light);
}

.form-alert.error {
  background-color: #fef2f2;
  color: #b91c1c;
  border: 1px solid #fca5a5;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .contact-form-wrapper {
    padding: 2rem 1.5rem;
  }
}
</style>
