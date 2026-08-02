<script setup lang="ts">
const teamMembers = [
  {
    id: 1,
    name: 'Khánh Trần',
    role: 'Founder & CEO',
    image: '/team/founder.jpg'
  },
  {
    id: 2,
    name: 'Khoa Trần',
    role: 'Tech Lead (Full-stack)',
    image: '/team/tech_lead.jpg'
  },
  {
    id: 3,
    name: 'Uyên Nguyễn',
    role: 'Lead UI/UX Designer',
    image: '/team/designer.jpg'
  }
]
</script>

<template>
  <section id="team" class="section team">
    <div class="container">
      <div class="team-layout">
        <div class="team-letter">
          <h2 class="section-title fade-up" v-animate>Từ những người kiến tạo</h2>
          <div class="letter-content fade-up delay-100" v-animate>
            <p>"Chúng tôi từng là một Startup với ngân sách eo hẹp và những tham vọng khổng lồ. Chúng tôi hiểu cảm giác đau đầu khi tìm kiếm một đội ngũ phát triển vừa có tâm, vừa đủ tầm mà không 'đốt sạch' số vốn gọi được."</p>
            <p>Gecko Team ra đời để trở thành cánh tay phải đắc lực về công nghệ, giúp các Founder bớt đi một nỗi lo để tập trung vào việc quan trọng nhất: Tăng trưởng và Sống sót.</p>
            <div class="signature">
              <span class="sign-name">Khánh Trần</span>
              <span class="sign-title">Founder, Gecko Team</span>
            </div>
          </div>
        </div>

        <div class="team-grid">
          <div 
            v-for="(member, index) in teamMembers" 
            :key="member.id" 
            class="team-card fade-up" 
            v-animate 
            :style="`transition-delay: ${index * 150 + 200}ms`"
          >
            <div class="avatar-wrapper">
              <img :src="member.image" :alt="member.name" class="avatar-img" />
            </div>
            <h3 class="member-name">{{ member.name }}</h3>
            <p class="member-role">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team {
  background-color: var(--color-background-soft);
  overflow: hidden;
}

.team-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: center;
}

.section-title {
  font-size: 2.75rem;
  color: var(--color-text);
  margin-bottom: 2rem;
  line-height: 1.2;
}

.letter-content {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--color-text-soft);
}

.letter-content p {
  margin-bottom: 1.5rem;
}

.letter-content p:first-child {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--color-text);
  font-style: italic;
  border-left: 4px solid var(--color-primary);
  padding-left: 1.5rem;
}

.signature {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}

.sign-name {
  font-family: 'Caveat', cursive, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1;
}

.sign-title {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.5rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.team-card {
  text-align: center;
}

.avatar-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 1.25rem;
  background-color: #f4f4f5;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-speed) ease;
}

.team-card:hover .avatar-wrapper {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary-light);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.team-card:hover .avatar-img {
  transform: scale(1.05);
}

.member-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.member-role {
  font-size: 0.875rem;
  color: var(--color-primary);
  font-weight: 500;
}

@media (max-width: 992px) {
  .team-layout {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
}
</style>
