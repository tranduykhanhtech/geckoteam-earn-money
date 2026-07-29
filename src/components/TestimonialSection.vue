<script setup lang="ts">
</script>

<template>
  <section class="section testimonial">
    <div class="container">
      <div class="testimonial-content">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="quote-icon fade-up" v-animate><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
        
        <div class="manifesto-text fade-up delay-100" v-animate>
          GeckoTeam không chỉ viết code.<br> 
          <span class="text-highlight">Chúng tôi thấu hiểu bài toán kinh doanh của các Startup.</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial {
  background-color: #09090b; /* Nền tối (Zinc 950) để tạo điểm nhấn mạnh mẽ */
  color: white;
  padding: 6rem 0;
  border-top: 1px solid #27272a;
  border-bottom: 1px solid #27272a;
}

.testimonial-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.quote-icon {
  color: var(--color-primary);
  opacity: 0.5;
  margin-bottom: 2rem;
}

.manifesto-text {
  font-size: 2.25rem;
  line-height: 1.4;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin: 0;
  color: #f4f4f5; /* Zinc 100 */
}

.text-highlight {
  color: var(--color-text-soft);
  font-size: 1.75rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .manifesto-text {
    font-size: 1.75rem; /* Thu nhỏ chữ trên mobile */
  }
  .text-highlight {
    font-size: 1.25rem;
  }
}
</style>
