'use strict';

let swiperInstance;

function initSwiper() {
  if (swiperInstance) swiperInstance.destroy(true, true);

  swiperInstance = new Swiper(".partnerships-slider", {
    spaceBetween: 40,
    loop: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: ".partnerships-slider-wrapper .swiper-button-next",
      prevEl: ".partnerships-slider-wrapper .swiper-button-prev",
    },
    pagination: {
      el: ".partnerships-slider-wrapper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      400: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 40,
      }
    },
    a11y: {
      enabled: true,
      slideLabelMessage: '',
    },
    lazy: {
      loadPrevNext: true,
      loadOnTransitionStart: true
    },
    on: {
      init: function () {
        enhanceAccessibility();
      },
      lazyImageReady: function () {
        // Check if ALL lazy images are loaded
        const lazyImages = document.querySelectorAll('.partnerships-slider img.swiper-lazy');
        const allLoaded = Array.from(lazyImages).every(img => img.complete && img.naturalHeight > 0);

        if (allLoaded) {
          document.querySelectorAll('.loader-wrapper, .card-skeleton').forEach(el => {
            el.classList.add('fade-out'); // optional animation
            setTimeout(() => el.style.display = 'none', 300);
          });
        }
      }
    }
  });
}

function enhanceAccessibility() {
  const slides = document.querySelectorAll('.news-slide');
  const total = slides.length;

  slides.forEach((slide, index) => {
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-label', `${index + 1} of ${total} News`);
  });

  slides.forEach(slide => {
    const h = slide.querySelector('h2, h3, h4');
    if (h) h.setAttribute('tabindex', '0');
  });
}

function fetchSlides(catId) {
  const wrapper = document.querySelector('.swiper-wrapper');

  // Show skeleton while loading
  wrapper.innerHTML = `
    <div class="swiper-slide loader-wrapper" role="group" aria-label="Loading slide">
      <div class="card-skeleton">
        <div class="skeleton image"></div>
        <div class="skeleton text long"></div>
        <div class="skeleton text short"></div>
        <div class="skeleton text long"></div>
      </div>
      <div class="card-skeleton">
        <div class="skeleton image"></div>
        <div class="skeleton text long"></div>
        <div class="skeleton text short"></div>
        <div class="skeleton text long"></div>
      </div>
      <div class="card-skeleton">
        <div class="skeleton image"></div>
        <div class="skeleton text long"></div>
        <div class="skeleton text short"></div>
        <div class="skeleton text long"></div>
      </div>
    </div>
  `;

  fetch(`${my_ajax.ajax_url}?action=filter_partnerships&cat=${catId}`)
    .then(res => res.text())
    .then(html => {
      wrapper.innerHTML = html;

      // Wait until swiper re-inits with lazy events
      initSwiper();
    })
    .catch(err => {
      wrapper.innerHTML = `
        <div class="swiper-slide" role="group" aria-label="Error loading slide">
          Error loading posts.
        </div>
      `;
      console.error(err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  initSwiper();

  document.querySelectorAll('.partnerships-tabs .tab').forEach(tab => {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      const catId = this.dataset.cat;
      fetchSlides(catId);
    });
  });

  const select = document.getElementById('partnership-category-select');
  if (select) {
    select.addEventListener('change', () => {
      fetchSlides(select.value);
    });

    if (typeof jQuery !== 'undefined' && typeof jQuery(select).on === 'function') {
      jQuery(select).on('select2:select', function (e) {
        const catId = e.params.data.id;
        fetchSlides(catId);
      });
    }
  }
});
