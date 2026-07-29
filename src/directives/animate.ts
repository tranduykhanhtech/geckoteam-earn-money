import type { DirectiveBinding } from 'vue'

export const animateDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    // Tùy chỉnh threshold (ngưỡng xuất hiện) thông qua value của directive (nếu có)
    // Ví dụ: v-animate="0.2" có nghĩa là 20% phần tử xuất hiện thì mới kích hoạt
    const threshold = typeof binding.value === 'number' ? binding.value : 0.1

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          // Sau khi animation chạy xong 1 lần, ngắt theo dõi để tối ưu hiệu suất
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: threshold,
      rootMargin: '0px 0px -50px 0px' // Kích hoạt animation khi phần tử lọt vào mép dưới 50px
    })

    observer.observe(el)
  }
}
