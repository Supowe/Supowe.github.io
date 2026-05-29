---
layout: default
title: 关于我
permalink: /about/
---

<section class="hero-section">
  <div class="floating-shapes">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="container">
    <div class="hero-content">
      <div class="hero-avatar-wrapper">
        <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=ZhongShurong" alt="Avatar" class="hero-avatar">
      </div>
      <h1 class="hero-title">👋 你好，我是 ZhongShurong</h1>
      <p class="hero-subtitle">热爱技术，专注前端开发与用户体验</p>
      <div class="hero-stats">
        <div class="stat-item">
          <div class="stat-number">{{ site.posts | size }}</div>
          <div class="stat-label">篇文章</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ site.categories | size }}</div>
          <div class="stat-label">个分类</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ site.tags | size }}</div>
          <div class="stat-label">个标签</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="about-section">
  <div class="container">
    <div class="content-wrapper">
      <div class="content-area">
        <div class="sidebar-card about-card">
          <div class="card-header">
            <i class="fas fa-book-open"></i>
            <h3 class="card-title">关于博客</h3>
          </div>
          <div class="about-content">
            <p>这是一个记录技术成长和思考的地方，主要包含以下内容：</p>
            
            <h4><i class="fas fa-laptop-code"></i> 技术分享</h4>
            <ul>
              <li>前端开发技术（Vue、React、CSS等）</li>
              <li>后端开发经验</li>
              <li>工具链和工程化实践</li>
            </ul>
            
            <h4><i class="fas fa-graduation-cap"></i> 学习笔记</h4>
            <ul>
              <li>读书心得</li>
              <li>课程总结</li>
              <li>知识体系整理</li>
            </ul>
            
            <h4><i class="fas fa-pen-fancy"></i> 生活随笔</h4>
            <ul>
              <li>技术人生思考</li>
              <li>职业发展感悟</li>
            </ul>
          </div>
        </div>

        <div class="sidebar-card skills-card">
          <div class="card-header">
            <i class="fas fa-tools"></i>
            <h3 class="card-title">技术栈</h3>
          </div>
          <div class="about-content">
            <div class="skills-grid">
              <div class="skill-item">
                <div class="skill-icon">
                  <i class="fab fa-html5"></i>
                </div>
                <div class="skill-info">
                  <h4>前端</h4>
                  <p>HTML5, CSS3, JavaScript, TypeScript</p>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-icon">
                  <i class="fab fa-vuejs"></i>
                </div>
                <div class="skill-info">
                  <h4>框架</h4>
                  <p>Vue.js, React, Angular</p>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-icon">
                  <i class="fab fa-node-js"></i>
                </div>
                <div class="skill-info">
                  <h4>后端</h4>
                  <p>Python, Node.js, Ruby on Rails</p>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-icon">
                  <i class="fas fa-database"></i>
                </div>
                <div class="skill-info">
                  <h4>数据库</h4>
                  <p>MySQL, PostgreSQL, MongoDB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sidebar-card contact-card">
          <div class="card-header">
            <i class="fas fa-envelope"></i>
            <h3 class="card-title">联系方式</h3>
          </div>
          <div class="about-content">
            <div class="contact-links">
              <a href="https://github.com/Supowe" target="_blank" class="contact-link">
                <i class="fab fa-github"></i>
                <span>GitHub: @Supowe</span>
              </a>
            </div>
            <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--text-secondary);">
              如果你有任何问题或建议，欢迎随时与我交流！
            </p>
          </div>
        </div>

        <div class="sidebar-card goals-card">
          <div class="card-header">
            <i class="fas fa-bullseye"></i>
            <h3 class="card-title">近期目标</h3>
          </div>
          <div class="about-content">
            <ul class="goals-list">
              <li>
                <i class="fas fa-check-circle"></i>
                <span>深入学习 Vue 3 源码</span>
              </li>
              <li>
                <i class="fas fa-check-circle"></i>
                <span>掌握 TypeScript 高级特性</span>
              </li>
              <li>
                <i class="fas fa-check-circle"></i>
                <span>探索微前端架构</span>
              </li>
              <li>
                <i class="fas fa-check-circle"></i>
                <span>提升系统设计能力</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <aside class="sidebar">
        {% include sidebar/about.html %}
        {% include sidebar/categories.html %}
        {% include sidebar/tags.html %}
      </aside>
    </div>
  </div>
</section>

<style>
.about-section {
  padding: 2rem 0 4rem;
}

.skills-grid {
  display: grid;
  gap: 1rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(255, 143, 171, 0.2);
}

.skill-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 12px;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.skill-info h4 {
  margin: 0 0 0.3rem 0;
  font-size: 1rem;
  color: var(--text-primary);
}

.skill-info p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.contact-link:hover {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  transform: translateX(8px);
  box-shadow: 0 8px 25px rgba(255, 143, 171, 0.3);
}

.contact-link i {
  font-size: 1.2rem;
}

.goals-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.goals-list li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 0;
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.goals-list li:hover {
  color: var(--primary-color);
  transform: translateX(8px);
}

.goals-list i {
  color: var(--mint-color);
  font-size: 1.1rem;
}
</style>