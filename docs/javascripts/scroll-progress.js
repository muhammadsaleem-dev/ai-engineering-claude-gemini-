/**
 * Scroll Progress & Real-Time Section Tracking Engine
 * Provides instant visual spatial awareness:
 * 1. Top reading progress bar fixed below header
 * 2. Table of Contents live percentage & mini progress track
 * 3. High-precision active & passed section scrollspy
 * 4. Back-to-top circular progress & visibility controller
 */

(function () {
  'use strict';

  function initScrollProgress() {
    // 1. Setup Top Reading Progress Bar
    let track = document.getElementById('reading-progress-track');
    let bar = document.getElementById('reading-progress-bar');

    if (!track) {
      track = document.createElement('div');
      track.id = 'reading-progress-track';
      track.className = 'reading-progress-track';
      
      bar = document.createElement('div');
      bar.id = 'reading-progress-bar';
      bar.className = 'reading-progress-bar';
      
      track.appendChild(bar);
      document.body.appendChild(track);
    }

    // 2. Setup TOC Progress Header
    setupTocProgressHeader();

    // 3. Setup Scroll Listener
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          updateScrollMetrics();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial update
    updateScrollMetrics();
  }

  function setupTocProgressHeader() {
    const tocNav = document.querySelector('.md-sidebar--secondary .md-nav--secondary');
    if (!tocNav) return;

    // Check if progress header already exists
    if (document.getElementById('toc-progress-box')) return;

    const tocTitle = tocNav.querySelector('.md-nav__title');
    if (!tocTitle) return;

    const progressBox = document.createElement('div');
    progressBox.id = 'toc-progress-box';
    progressBox.className = 'toc-progress-box';
    progressBox.innerHTML = `
      <div class="toc-progress-meta">
        <span class="toc-progress-label">Reading Progress</span>
        <span id="toc-progress-pct" class="toc-progress-pct">0%</span>
      </div>
      <div class="toc-progress-rail">
        <div id="toc-progress-fill" class="toc-progress-fill" style="width: 0%;"></div>
      </div>
    `;

    // Insert directly after the TOC title
    tocTitle.parentNode.insertBefore(progressBox, tocTitle.nextSibling);
  }

  function updateScrollMetrics() {
    const docEl = document.documentElement;
    const body = document.body;
    const scrollTop = window.scrollY || docEl.scrollTop || body.scrollTop || 0;
    const scrollHeight = Math.max(
      docEl.scrollHeight,
      body.scrollHeight,
      docEl.offsetHeight,
      body.offsetHeight
    );
    const clientHeight = docEl.clientHeight || window.innerHeight;
    const maxScroll = scrollHeight - clientHeight;

    const progress = maxScroll > 0 ? Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100)) : 0;
    const progressRounded = Math.round(progress);

    // Update Top Progress Bar
    const topBar = document.getElementById('reading-progress-bar');
    if (topBar) {
      topBar.style.width = progress + '%';
    }

    // Update TOC Progress Box
    const tocPct = document.getElementById('toc-progress-pct');
    const tocFill = document.getElementById('toc-progress-fill');
    if (tocPct) {
      tocPct.textContent = progressRounded + '%';
    }
    if (tocFill) {
      tocFill.style.width = progress + '%';
    }

    // Update Back-To-Top Button state & progress
    updateBackToTop(scrollTop, progressRounded);

    // Update Table of Contents Scrollspy (Active & Passed items)
    updateTocScrollspy(scrollTop);
  }

  function updateBackToTop(scrollTop, progressRounded) {
    const topBtn = document.querySelector('[data-md-component="top"]');
    if (!topBtn) return;

    if (scrollTop > 250) {
      topBtn.removeAttribute('hidden');
      topBtn.classList.add('md-top--visible');
      topBtn.setAttribute('title', `Back to top (${progressRounded}% read)`);
    } else {
      topBtn.classList.remove('md-top--visible');
      // Delay hidden attribute to allow smooth CSS fade out
      setTimeout(() => {
        if ((window.scrollY || document.documentElement.scrollTop) <= 250) {
          topBtn.setAttribute('hidden', '');
        }
      }, 250);
    }
  }

  function updateTocScrollspy(scrollTop) {
    const tocLinks = document.querySelectorAll('.md-sidebar--secondary .md-nav--secondary a.md-nav__link');
    if (!tocLinks.length) return;

    // Find all target headings in the content
    const content = document.querySelector('.md-content');
    if (!content) return;

    const headings = Array.from(content.querySelectorAll('h2[id], h3[id]'));
    if (!headings.length) return;

    const offsetThreshold = scrollTop + 130; // Active threshold relative to fixed header
    let activeHeading = null;
    const passedHeadingIds = new Set();

    for (let i = 0; i < headings.length; i++) {
      const heading = headings[i];
      const top = heading.getBoundingClientRect().top + scrollTop;

      if (top <= offsetThreshold) {
        activeHeading = heading;
        passedHeadingIds.add(heading.id);
      }
    }

    // If activeHeading is selected, remove it from passedHeadingIds so it's active, not passed
    if (activeHeading) {
      passedHeadingIds.delete(activeHeading.id);
    }

    const activeId = activeHeading ? activeHeading.id : (headings[0] && scrollTop < 100 ? null : headings[0].id);

    // Apply styles to TOC links
    tocLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const targetId = decodeURIComponent(href.slice(1));

      if (activeId && targetId === activeId) {
        link.classList.add('toc-link-active');
        link.classList.remove('toc-link-passed');
        link.setAttribute('data-scroll-state', 'active');
      } else if (passedHeadingIds.has(targetId)) {
        link.classList.remove('toc-link-active');
        link.classList.add('toc-link-passed');
        link.setAttribute('data-scroll-state', 'passed');
      } else {
        link.classList.remove('toc-link-active');
        link.classList.remove('toc-link-passed');
        link.removeAttribute('data-scroll-state');
      }
    });
  }

  // Hook into MkDocs Material instant navigation lifecycle
  if (typeof document$ !== 'undefined') {
    document$.subscribe(initScrollProgress);
  } else {
    document.addEventListener('DOMContentLoaded', initScrollProgress);
  }
})();
