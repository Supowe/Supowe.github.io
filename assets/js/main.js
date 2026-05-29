(function() {
  'use strict';

  var cursor = document.querySelector('.cursor');
  var cursorDot = document.querySelector('.cursor-dot');
  var backToTop = document.querySelector('.back-to-top');
  var readingProgress = document.querySelector('.reading-progress');
  var entryOverlay = document.querySelector('.entry-overlay');

  function initCursor() {
    if (!cursor || !cursorDot) return;

    document.addEventListener('mousemove', function(e) {
      requestAnimationFrame(function() {
        if (cursor) {
          cursor.style.left = e.clientX + 'px';
          cursor.style.top = e.clientY + 'px';
        }
        if (cursorDot) {
          cursorDot.style.left = e.clientX + 'px';
          cursorDot.style.top = e.clientY + 'px';
        }
      });
    });

    document.addEventListener('mouseleave', function() {
      if (cursor) cursor.style.opacity = '0';
      if (cursorDot) cursorDot.style.opacity = '0';
    });

    document.addEventListener('mouseenter', function() {
      if (cursor) cursor.style.opacity = '1';
      if (cursorDot) cursorDot.style.opacity = '1';
    });

    var hoverElements = document.querySelectorAll('a, button, .post-item, .sidebar-card, .project-card, .stat-item, .nav-links a');
    hoverElements.forEach(function(el) {
      el.addEventListener('mouseenter', function() {
        if (cursor) cursor.classList.add('hover');
      });
      el.addEventListener('mouseleave', function() {
        if (cursor) cursor.classList.remove('hover');
      });
    });
  }

  function initBackToTop() {
    if (!backToTop) return;

    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  function initReadingProgress() {
    if (!readingProgress) return;

    window.addEventListener('scroll', function() {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = (scrollTop / docHeight) * 100;
      readingProgress.style.width = progress + '%';
    });
  }

  function initScrollReveal() {
    var revealElements = document.querySelectorAll('.scroll-reveal');
    if (revealElements.length === 0) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(function(el) {
      observer.observe(el);
    });
  }

  function initParallax() {
    var floatingShapes = document.querySelectorAll('.floating-shapes span');
    if (floatingShapes.length === 0) return;

    window.addEventListener('scroll', function() {
      var scrollY = window.scrollY;
      floatingShapes.forEach(function(el, index) {
        var speed = 0.02 + (index * 0.008);
        el.style.transform = 'translateY(' + (scrollY * speed) + 'px)';
      });
    });

    window.addEventListener('mousemove', function(e) {
      var centerX = window.innerWidth / 2;
      var centerY = window.innerHeight / 2;
      var mouseX = e.clientX - centerX;
      var mouseY = e.clientY - centerY;

      floatingShapes.forEach(function(el, index) {
        var speed = 0.02 + (index * 0.005);
        var x = mouseX * speed;
        var y = mouseY * speed;
        el.style.transform = 'translate(' + x + 'px, ' + (y + window.scrollY * 0.03) + 'px)';
      });
    });
  }

  function initTypeWriter() {
    var typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    var text = typingElement.textContent;
    typingElement.textContent = '';
    typingElement.style.borderRight = '3px solid var(--primary-color)';

    setTimeout(function() {
      var i = 0;
      function type() {
        if (i < text.length) {
          typingElement.textContent += text.charAt(i);
          i++;
          setTimeout(type, 40);
        } else {
          setTimeout(function() {
            typingElement.style.borderRight = 'none';
          }, 500);
        }
      }
      type();
    }, 800);
  }

  function initHoverEffects() {
    var postItems = document.querySelectorAll('.post-item');
    postItems.forEach(function(item) {
      item.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      });
    });

    var tagCloudLinks = document.querySelectorAll('.tag-cloud a');
    tagCloudLinks.forEach(function(link, index) {
      link.style.animationDelay = (index * 0.1) + 's';
    });

    var categoryTags = document.querySelectorAll('.category-tag');
    categoryTags.forEach(function(tag, index) {
      tag.style.animationDelay = (index * 0.3) + 's';
    });
  }

  function initFloatingParticles() {
    var particles = document.querySelectorAll('.particle');
    particles.forEach(function(particle, index) {
      particle.style.animationDelay = (index * 0.5) + 's';
      particle.style.animationDuration = (15 + Math.random() * 10) + 's';
    });
  }

  function initStatsAnimation() {
    var statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(function(stat) {
      var finalValue = stat.textContent;
      var numericValue = parseInt(finalValue.replace(/[^0-9]/g, ''), 10);

      if (isNaN(numericValue)) return;

      stat.textContent = '0';
      var duration = 800;
      var increment = numericValue / (duration / 16);
      var current = 0;

      function updateNumber() {
        current += increment;
        if (current < numericValue) {
          stat.textContent = Math.floor(current);
          requestAnimationFrame(updateNumber);
        } else {
          stat.textContent = finalValue;
        }
      }

      setTimeout(function() {
        updateNumber();
      }, 500);
    });
  }

  function initHeroParallax() {
    var heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    var avatar = document.querySelector('.hero-avatar');
    var title = document.querySelector('.hero-title');
    var bio = document.querySelector('.hero-bio');
    var stats = document.querySelector('.hero-stats');
    var social = document.querySelector('.hero-social');

    window.addEventListener('scroll', function() {
      var scrollY = window.scrollY;
      var windowHeight = window.innerHeight;

      if (scrollY < windowHeight) {
        if (avatar) avatar.style.transform = 'translateY(' + (scrollY * 0.1) + 'px)';
        if (title) title.style.transform = 'translateY(' + (scrollY * 0.05) + 'px)';
        if (bio) bio.style.transform = 'translateY(' + (scrollY * 0.03) + 'px)';
        if (stats) stats.style.transform = 'translateY(' + (scrollY * 0.02) + 'px)';
        if (social) social.style.transform = 'translateY(' + (scrollY * 0.01) + 'px)';
      }
    });
  }

  function initCard3DEffect() {
    var cards = document.querySelectorAll('.post-item, .sidebar-card, .project-card');

    cards.forEach(function(card) {
      card.addEventListener('mousemove', function(e) {
        var rect = this.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;
        var rotateX = (y - centerY) / 20;
        var rotateY = (centerX - x) / 20;

        this.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-12px) scale(1.02)';
      });

      card.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      });
    });
  }

  function initRippleEffect() {
    var buttons = document.querySelectorAll('.btn, .back-to-top');

    buttons.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        var rect = this.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        var ripple = document.createElement('span');
        ripple.style.cssText = 'position:absolute;width:0;height:0;border-radius:50%;background:rgba(255,255,255,0.4);transform:scale(0);left:' + x + 'px;top:' + y + 'px;pointer-events:none;';
        this.appendChild(ripple);

        ripple.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
        requestAnimationFrame(function() {
          ripple.style.transform = 'scale(4)';
          ripple.style.opacity = '0';
        });

        setTimeout(function() {
          ripple.remove();
        }, 600);
      });
    });
  }

  function initMagneticEffect() {
    var magneticElements = document.querySelectorAll('.hero-social a, .nav-links a');

    magneticElements.forEach(function(el) {
      el.addEventListener('mousemove', function(e) {
        var rect = this.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;

        this.style.transform = 'translate(' + (x * 0.2) + 'px, ' + (y * 0.2) + 'px) scale(1.15)';
      });

      el.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      });
    });
  }

  function initSmoothScroll() {
    var smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;

        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  function initPageLoader() {
    var images = document.querySelectorAll('img');
    var loadedCount = 0;
    var totalImages = images.length;

    if (totalImages === 0) {
      triggerAnimations();
      return;
    }

    images.forEach(function(img) {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener('load', function() {
          loadedCount++;
          if (loadedCount === totalImages) {
            triggerAnimations();
          }
        });
        img.addEventListener('error', function() {
          loadedCount++;
          if (loadedCount === totalImages) {
            triggerAnimations();
          }
        });
      }
    });

    setTimeout(function() {
      if (loadedCount > 0) {
        triggerAnimations();
      }
    }, 800);
  }

  function triggerAnimations() {
    var header = document.querySelector('.site-header');
    var avatarWrapper = document.querySelector('.hero-avatar-wrapper');
    var heroTitle = document.querySelector('.hero-title');
    var heroSubtitle = document.querySelector('.hero-subtitle');
    var heroBio = document.querySelector('.hero-bio');
    var heroStats = document.querySelector('.hero-stats');
    var heroSocial = document.querySelector('.hero-social');
    var contentArea = document.querySelector('.content-area');
    var sidebarCards = document.querySelectorAll('.sidebar-card');
    var postItems = document.querySelectorAll('.post-item');

    setTimeout(function() {
      if (header) header.classList.add('animate-in');
    }, 50);

    setTimeout(function() {
      if (avatarWrapper) avatarWrapper.classList.add('animate-in');
    }, 150);

    setTimeout(function() {
      if (heroTitle) heroTitle.classList.add('animate-in');
    }, 250);

    setTimeout(function() {
      if (heroSubtitle) heroSubtitle.classList.add('animate-in');
    }, 350);

    setTimeout(function() {
      if (heroBio) heroBio.classList.add('animate-in');
    }, 450);

    setTimeout(function() {
      if (heroStats) heroStats.classList.add('animate-in');
    }, 550);

    setTimeout(function() {
      if (heroSocial) heroSocial.classList.add('animate-in');
    }, 650);

    setTimeout(function() {
      if (contentArea) contentArea.classList.add('animate-in');
    }, 750);

    sidebarCards.forEach(function(card, index) {
      setTimeout(function() {
        if (card) card.classList.add('animate-in');
      }, 850 + (index * 100));
    });

    postItems.forEach(function(item, index) {
      setTimeout(function() {
        if (item) item.classList.add('animate-in');
      }, 1000 + (index * 80));
    });

    initStatsAnimation();
  }

  function initImageLazyLoad() {
    var lazyImages = document.querySelectorAll('img[data-src]');

    var imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });
  }

  function initTextShadowEffect() {
    var titles = document.querySelectorAll('.hero-title, .site-title');

    titles.forEach(function(title) {
      title.addEventListener('mousemove', function(e) {
        var rect = this.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;
        var rotateX = (y - centerY) / 10;
        var rotateY = (centerX - x) / 10;

        this.style.textShadow = rotateX + 'px ' + rotateY + 'px 0 rgba(255, 143, 171, 0.3)';
      });

      title.addEventListener('mouseleave', function() {
        this.style.textShadow = '';
      });
    });
  }

  function hideEntryOverlay() {
    if (!entryOverlay) return;
    
    setTimeout(function() {
      entryOverlay.style.opacity = '0';
      entryOverlay.style.pointerEvents = 'none';
      entryOverlay.style.transition = 'opacity 0.3s ease';
      
      setTimeout(function() {
        entryOverlay.style.display = 'none';
      }, 300);
    }, 600);
  }

  function init() {
    window.scrollTo(0, 0);
    
    hideEntryOverlay();
    initCursor();
    initBackToTop();
    initReadingProgress();
    initFloatingParticles();
    initTypeWriter();
    initHoverEffects();
    initParallax();
    initHeroParallax();
    initCard3DEffect();
    initRippleEffect();
    initMagneticEffect();
    initSmoothScroll();
    initPageLoader();
    initImageLazyLoad();
    initTextShadowEffect();

    setTimeout(function() {
      initScrollReveal();
      triggerAnimations();
    }, 1500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();