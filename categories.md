---
layout: default
title: 文章分类
permalink: /categories/
---

<section class="page-section">
  <div class="container">
    <h1 class="page-title">
      <i class="fas fa-folder-open"></i> 文章分类
    </h1>
    
    <div class="categories-grid">
      {% for category in site.categories %}
        <div class="category-card">
          <a href="#{{ category[0] | slugify }}" class="category-link">
            <div class="category-icon">
              <i class="fas fa-folder"></i>
            </div>
            <div class="category-info">
              <h3>{{ category[0] }}</h3>
              <span class="category-count">{{ category[1].size }} 篇文章</span>
            </div>
          </a>
        </div>
      {% endfor %}
    </div>

    <div class="categories-posts">
      {% for category in site.categories %}
        <div id="{{ category[0] | slugify }}" class="category-section">
          <h2 class="category-title">
            <i class="fas fa-folder"></i> {{ category[0] }}
            <span class="category-post-count">({{ category[1].size }})</span>
          </h2>
          <ul class="post-list">
            {% for post in category[1] %}
              <li class="post-item">
                <a href="{{ post.url | relative_url }}" class="post-link">
                  <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
                  <span class="post-title">{{ post.title }}</span>
                </a>
              </li>
            {% endfor %}
          </ul>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<style>
.page-section {
  padding: 2rem 0 4rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.category-card {
  background: linear-gradient(135deg, rgba(255, 143, 171, 0.1), rgba(125, 211, 192, 0.1));
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(255, 143, 171, 0.2);
}

.category-link {
  text-decoration: none;
  color: inherit;
}

.category-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
}

.category-info h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  color: var(--text-primary);
}

.category-count {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.categories-posts {
  margin-top: 2rem;
}

.category-section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  border: 1px solid var(--border-color);
}

.category-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1.5rem 0;
  font-size: 1.3rem;
  color: var(--text-primary);
}

.category-post-count {
  font-size: 0.9rem;
  font-weight: normal;
  color: var(--text-secondary);
}

.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post-item {
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.post-item:last-child {
  border-bottom: none;
}

.post-item:hover {
  padding-left: 0.5rem;
}

.post-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.post-date {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-right: 1rem;
}

.post-title {
  flex: 1;
  font-size: 0.95rem;
  color: var(--text-primary);
  transition: color 0.3s ease;
}

.post-item:hover .post-title {
  color: var(--primary-color);
}
</style>