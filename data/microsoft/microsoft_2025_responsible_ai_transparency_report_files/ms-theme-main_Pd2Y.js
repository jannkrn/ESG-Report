'use strict';
var $ = jQuery.noConflict();

document.addEventListener('DOMContentLoaded', function() {
  // Your code here
  
  /*related-articles-slider script start*/
  function initRelatedArticlesSlider() {
    const sliderContainer = document.querySelector('.related-articles-slider-wrapper');
    const relatedArticles = new Swiper(".related-articles-slider", {
      slidesPerView: 3,
      spaceBetween: 40,
      loop: false,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },

      grabCursor: true,
      watchOverflow: true,

      a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        paginationBulletMessage: 'Go to slide {{index}}',
      },

      on: {
        init: function () {
          checkNavigationVisibility(this);
        },
        resize: function () {
          checkNavigationVisibility(this);
        }
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') relatedArticles.slidePrev();
      else if (event.key === 'ArrowRight') relatedArticles.slideNext();
    });

    // Function to check and add class
    function checkNavigationVisibility(swiper) {
      if (sliderContainer) {
        const totalSlides = swiper.slides.length;
        const currentSlidesPerView = swiper.params.slidesPerView;

        // If slidesPerView is a function or "auto", evaluate it
        const perView = typeof currentSlidesPerView === 'number'
          ? currentSlidesPerView
          : swiper.params.breakpoints?.[swiper.currentBreakpoint]?.slidesPerView || 1;

        if (totalSlides <= perView) {
          sliderContainer.classList.add('no-navigation');
        } else {
          sliderContainer.classList.remove('no-navigation');
        }
      }
    }
  }
  initRelatedArticlesSlider()
  /*related-articles-slider script end*/
});

$(document).ready(function () {
  $(".custom-select-wrapper select").select2({
    minimumResultsForSearch: 20,
    width: '100%',
    placeholder: function () {
      return $(this).data('placeholder');
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img[alt]");

  images.forEach(img => {
    const alt = img.getAttribute("alt");
    if (alt && typeof alt === 'string') {
      const sentenceCase = alt.charAt(0).toUpperCase() + alt.slice(1).toLowerCase();
      img.setAttribute("alt", sentenceCase);
    }
  });
});