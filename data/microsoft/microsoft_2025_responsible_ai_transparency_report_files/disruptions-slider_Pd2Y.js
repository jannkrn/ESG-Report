var $ = jQuery.noConflict();
$(document).ready(function () {
    // ---------- Select2 Initialization ----------
    $("#SelectYear").select2({
        minimumResultsForSearch: Infinity
    });

    // Accessibility for timeline slides
    function enhanceAccessibilitydt() {
        const slides = document.querySelectorAll('.timeline-slide');
        const total = slides.length;
        slides.forEach((slide, index) => {
            slide.setAttribute('role', 'group');
            slide.setAttribute('aria-label', `${index + 1} of ${total} Disruptions`);
        });
        slides.forEach(slide => {
            const h = slide.querySelector('h2, h3, h4');
            if (h) h.setAttribute('tabindex', '0');
        });
    }

    // ---------- Swiper Initialization ----------
    const swiperContainers = document.querySelectorAll('.timeline-slider');
    swiperContainers.forEach(container => {
        new Swiper(container, {
            loop: true,
            keyboard: { enabled: true, onlyInViewport: true },
            navigation: {
                nextEl: container.querySelector('.swiper-button-next'),
                prevEl: container.querySelector('.swiper-button-prev'),
            },
            pagination: {
                el: container.querySelector('.swiper-pagination'),
                clickable: true,
            },
            slidesPerView: 1,
            spaceBetween: 20,
            effect: 'slide',
            speed: 600,
            a11y: { enabled: true, slideLabelMessage: '' },
            on: { init: enhanceAccessibilitydt }
        });
    });

    // ---------- Mobile Timeline Slider ----------
    const yearSelect = document.getElementById('SelectYear');
    const yearSliders = document.querySelectorAll('.year-slider-container');
    let mobileSwipers = {};

    function initializeMobileSliders() {
        yearSliders.forEach(slider => {
            const swiperElement = slider.querySelector('.mobile-timeline-swiper');
            if (swiperElement && !swiperElement.swiper) {
                mobileSwipers[slider.id] = new Swiper(swiperElement, {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    loop: true,
                    keyboard: { enabled: true, onlyInViewport: true },
                    navigation: {
                        nextEl: slider.querySelector('.swiper-button-next'),
                        prevEl: slider.querySelector('.swiper-button-prev'),
                    },
                    pagination: {
                        el: slider.querySelector('.swiper-pagination'),
                        clickable: true,
                    },
                    effect: 'slide',
                    speed: 600,
                    a11y: { enabled: true, slideLabelMessage: '' },
                    on: { init: enhanceAccessibilitydt }
                });
            }
        });
    }

    function showYearSlider(selectedYear) {
        yearSliders.forEach(slider => slider.style.display = 'none');
        const targetSlider = document.getElementById(`Year${selectedYear}`);
        if (targetSlider) {
            targetSlider.style.display = 'block';
            if (mobileSwipers[targetSlider.id]) {
                mobileSwipers[targetSlider.id].update();
            }
        }
    }

    if (yearSelect) {
        yearSelect.value = '2025';
        showYearSlider('2025');
        initializeMobileSliders();
        $("#SelectYear").val('2025').trigger('change');

        $("#SelectYear").on('select2:select change', function (e) {
            const selectedYear = $(this).val();
            if (selectedYear) showYearSlider(selectedYear);
        });

        yearSelect.addEventListener('change', function () {
            if (this.value) showYearSlider(this.value);
        });
    }

    // ---------- Card Hover ----------
    document.querySelectorAll('.card-container').forEach(container => {
        const cards = container.querySelectorAll('.card');
        if (cards.length > 0) cards[0].classList.add('active');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function () {
                cards.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
            });
        });
    });

    // ---------- Year Buttons ----------
    const yearButtons = document.querySelectorAll('.year-btn');
    const sidebarYear = document.getElementById('sidebar-year');
    const allSliders = document.querySelectorAll('[id^="Slider"]');

    yearButtons.forEach(btn => {
        btn.classList.toggle('active', btn.textContent === '2025');
    });
    allSliders.forEach((slider, index) => {
        slider.style.display = index === 1 ? 'block' : 'none';
        slider.classList.toggle('active-slider', index === 1);
    });

    yearButtons.forEach(button => {
        button.addEventListener('click', function () {
            const year = this.textContent;
            yearButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            if (sidebarYear) sidebarYear.textContent = year;

            const sliderIndex = Array.from(yearButtons).indexOf(this);
            const targetSlider = document.getElementById(`Slider${sliderIndex + 1}`);
            allSliders.forEach(s => {
                s.style.display = 'none';
                s.classList.remove('active-slider');
            });
            if (targetSlider) {
                targetSlider.style.display = 'block';
                targetSlider.classList.add('active-slider');
                setTimeout(() => {
                    const activeContainer = targetSlider.querySelector('.timeline-slider');
                    if (activeContainer && !activeContainer.swiper) {
                        new Swiper(activeContainer, {
                            loop: true,
                            keyboard: { enabled: true, onlyInViewport: true },
                            navigation: {
                                nextEl: activeContainer.querySelector('.swiper-button-next'),
                                prevEl: activeContainer.querySelector('.swiper-button-prev'),
                            },
                            pagination: {
                                el: activeContainer.querySelector('.swiper-pagination'),
                                clickable: true,
                            },
                            slidesPerView: 1,
                            spaceBetween: 20,
                            effect: 'slide',
                            speed: 600,
                            a11y: { enabled: true, slideLabelMessage: '' },
                            on: { init: enhanceAccessibilitydt }
                        });
                    }
                }, 100);
            }
        });
    });

    // ---------- Custom Scrollbar ----------
    const yearList = document.getElementById('yearList');
    const customScrollbar = document.querySelector('.custom-scrollbar');
    if (yearList && customScrollbar) {
        const scrollHandle = document.createElement('div');
        scrollHandle.classList.add('scroll-handle');
        customScrollbar.appendChild(scrollHandle);

        function calculateScrollHandleSize() {
            const contentHeight = yearList.scrollHeight;
            const containerHeight = yearList.clientHeight;
            const ratio = containerHeight / contentHeight;
            const handleHeight = Math.max(30, containerHeight * ratio);
            scrollHandle.style.height = `${handleHeight}px`;
        }

        function updateScrollHandlePosition() {
            const scrollTop = yearList.scrollTop;
            const contentHeight = yearList.scrollHeight;
            const containerHeight = yearList.clientHeight;
            const handleTop = (scrollTop / contentHeight) * containerHeight;
            scrollHandle.style.top = `${handleTop}px`;
        }

        yearList.addEventListener('scroll', updateScrollHandlePosition);
        window.addEventListener('resize', calculateScrollHandleSize);
        calculateScrollHandleSize();

        // Dragging
        let isDragging = false;
        let startY = 0;

        scrollHandle.addEventListener('mousedown', (e) => {
            isDragging = true;
            startY = e.clientY - parseInt(getComputedStyle(scrollHandle).top, 10);
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });

        function onMouseMove(e) {
            if (!isDragging) return;
            const containerHeight = yearList.clientHeight;
            const newTop = e.clientY - startY;
            const maxTop = containerHeight - parseInt(scrollHandle.style.height, 10);
            let top = Math.min(Math.max(newTop, 0), maxTop);
            scrollHandle.style.top = `${top}px`;

            const scrollRatio = top / (containerHeight - scrollHandle.offsetHeight);
            yearList.scrollTop = (yearList.scrollHeight - yearList.clientHeight) * scrollRatio;
        }

        function onMouseUp() {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    }

    // ---------- Card Count Classes ----------
    function addCardCountClasses() {
        document.querySelectorAll('.card-container').forEach(container => {
            const cardCount = container.querySelectorAll('.card').length;
            const parentSlide = container.closest('.timeline-slide');
            if (parentSlide) {
                parentSlide.classList.remove('one-card', 'two-card', 'three-card', 'four-card');
                if (cardCount === 1) parentSlide.classList.add('one-card');
                else if (cardCount === 2) parentSlide.classList.add('two-card');
                else if (cardCount === 3) parentSlide.classList.add('three-card');
                else if (cardCount >= 4) parentSlide.classList.add('four-card');
            }
        });
    }
    addCardCountClasses();
    if (typeof Swiper !== 'undefined') setTimeout(addCardCountClasses, 100);
});
