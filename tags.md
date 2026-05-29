---
layout: default
title: 标签云
permalink: /tags/
---

<section class="page-section">
  <div class="container">
    <h1 class="page-title">
      <i class="fas fa-tags"></i> 标签云
    </h1>
    
    <div class="tags-cloud">
      {% for tag in site.tags %}
        <a href="#{{ tag[0] | slugify }}" class="tag-item">
          {{ tag[0] }}
          <span class="tag-count">{{ tag[1].size }}</span>
        </a>
      {% endfor %}
    </div>

    <div class="tags-posts">
      {% for tag in site.tags %}
        <div id="{{ tag[0] | slugify }}" class="tag-section">
          <h2 class="tag-title">
            <i class="fas fa-tag"></i> {{ tag[0] }}
            <span class="tag-post-count">({{ tag[1].size }})</span>
          </h2>
          <ul class="post-list">
            {% for post in tag[1] %}
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

.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  border: 1px solid var(--border-color);
}

.tag-item {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(255, 143, 171, 0.2), rgba(125, 211, 192, 0.2));
  border-radius: 20px;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.tag-item:hover {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 143, 171, 0.3);
}

.tag-count {
  font-size: 0.75rem;
  background: rgba(255, 255, 255, 0.5);
  padding: 0.1rem 0.4rem;
  border-radius: 10px;
}

.tag-item:hover .tag-count {
  background: rgba(255, 255, 255, 0.2);
}

.tags-posts {
  margin-top: 2rem;
}

.tag-section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  border: 1px solid var(--border-color);
}

.tag-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1.5rem 0;
  font-size: 1.3rem;
  color: var(--text-primary);
}

.tag-post-count {
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