<script setup lang="ts">
</script>

<template>
  <section class="hero section">
    <div class="container hero-container">
      <div class="hero-content">
        <div class="badge">Thiết kế & Lập trình chuyên nghiệp</div>
        <h1 class="hero-title">
          Giải pháp công nghệ <br/>
          <span class="text-gradient">tối ưu cho Startup</span>
        </h1>
        <p class="hero-subtitle">
          Chúng tôi giúp các doanh nghiệp mới biến ý tưởng thành sản phẩm thực tế với kiến trúc vững chắc, thiết kế sắc nét và chi phí hợp lý nhất.
        </p>
        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary">Bắt đầu dự án</a>
          <a href="#services" class="btn btn-outline">Tìm hiểu dịch vụ</a>
        </div>
      </div>
      
      <div class="hero-visual">
        <div class="code-window">
          <div class="window-header">
            <div class="dots">
              <span></span><span></span><span></span>
            </div>
            <div class="window-title">main.ts — GeckoTeam</div>
          </div>
          <div class="window-body">
            <pre><code><span class="line-number">1</span><span class="keyword">import</span> { <span class="class">Project</span> } <span class="keyword">from</span> <span class="string">'@geckoteam/core'</span>;
<span class="line-number">2</span>
<span class="line-number">3</span><span class="keyword">const</span> <span class="variable">startup</span> = <span class="keyword">new</span> <span class="class">Project</span>({
<span class="line-number">4</span>  <span class="property">name</span>: <span class="string">'Your Big Idea'</span>,
<span class="line-number">5</span>  <span class="property">design</span>: <span class="string">'Premium & Scalable'</span>,
<span class="line-number">6</span>  <span class="property">timeline</span>: <span class="string">'Fast-tracked'</span>
<span class="line-number">7</span>});
<span class="line-number">8</span>
<span class="line-number">9</span>startup.<span class="method">deploy</span>().<span class="method">then</span>(success => {
<span class="line-number">10</span>  <span class="variable">console</span>.<span class="method">log</span>(<span class="string">'Ready for market!'</span>);
<span class="line-number">11</span>});</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 4rem 0;
  background-color: var(--color-background);
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.badge {
  display: inline-block;
  padding: 0.35rem 0.85rem;
  background: var(--color-background-mute);
  color: var(--color-text-soft);
  border: 1px solid var(--color-border);
  border-radius: 9999px;
  font-weight: 500;
  font-size: 0.85rem;
  margin-bottom: 2rem;
  letter-spacing: 0.02em;
}

.hero-title {
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.04em;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-soft);
  margin-bottom: 2.5rem;
  max-width: 90%;
  line-height: 1.7;
}

.hero-image {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
}

/* Ánh sáng mờ phát ra từ phía sau cửa sổ code */
.hero-image::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140%;
  height: 140%;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(255, 255, 255, 0) 65%);
  z-index: -1;
  pointer-events: none;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

/* Code Window Graphic */
.code-window {
  background-color: #282a36; /* Dracula Theme Background */
  border-radius: 12px;
  border: 1px solid #44475a;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
  font-size: 0.95rem;
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
}

.window-header {
  background-color: #21222c;
  padding: 0.85rem 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #44475a;
}

.dots {
  display: flex;
  gap: 6px;
}

.dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3f3f46;
}

.window-title {
  margin-left: 1rem;
  font-family: monospace;
  font-size: 0.8rem;
  color: #a1a1aa;
}

.window-body {
  padding: 1.5rem 0; /* Bỏ padding hai bên để có chỗ cho số dòng */
  color: #f8f8f2;
  line-height: 1.6;
  overflow-x: auto;
}

pre {
  margin: 0;
}

/* Line Numbers */
.line-number {
  color: #6272a4;
  display: inline-block;
  width: 2.5rem;
  text-align: right;
  margin-right: 1.5rem;
  user-select: none;
  font-size: 0.85rem;
}

/* Syntax Highlighting - Dracula Theme */
.keyword { color: #ff79c6; }
.class { color: #8be9fd; font-style: italic; }
.string { color: #f1fa8c; }
.variable { color: #f8f8f2; }
.property { color: #50fa7b; }
.method { color: #bd93f9; }

@media (max-width: 992px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-subtitle {
    margin: 0 auto 2.5rem;
  }

  .hero-actions {
    justify-content: center;
  }
  
  .badge {
    margin: 0 auto 2rem;
  }
}
</style>
