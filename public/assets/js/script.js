jQuery(document).ready(function ($) {

    // Menu Toggle
    var menu = $('.nav-wrapper');
    var cross = $('.cross');
    var hamburger = $('.bars');
    $(cross).hide();
    $(hamburger).click(function () {
        $(menu).slideToggle("fast", function () {
            $(hamburger).hide();
            $(cross).show();
        });
    });
    $(cross).click(function () {
        $(menu).slideToggle("fast", function () {
            $(cross).hide();
            $(hamburger).show();
        });
    });

    // Submenu Toggle
    $(".sub-nav-toggler").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        if (!$this.hasClass("accordion-active")) {
            $(".sub-nav-list").slideUp(400);
            $(".sub-nav-toggler").removeClass("accordion-active");
        }
        $this.toggleClass("accordion-active");
        $this.next().slideToggle(400);
    });

    $(".feedback-slider.owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        mouseDrag: true,
        touchDrag: true,
        nav: true,
        navText: [
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
               <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/>
             </svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
               <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/>
             </svg>`
        ],
        dots: true,
        autoplay: false,
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
        }
    });

    $(".upcoming-course-slider.owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 0,
        mouseDrag: true,
        touchDrag: true,
        nav: true,
        navText: [
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
               <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/>
             </svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
               <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/>
             </svg>`
        ],
        dots: false,
        autoplay: false,
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1200: { items: 3 }
        }
    });

    $(".posts-slider.owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 0,
        mouseDrag: true,
        touchDrag: true,
        nav: true,
        navText: [
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
               <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/>
             </svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
               <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/>
             </svg>`
        ],
        dots: false,
        autoplay: false,
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1200: { items: 3 }
        }
    });

    // accordion
    $(".faq-title").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        if (!$this.hasClass("accordion-active")) {
            $(".faq-description").slideUp("fast");
            $(".faq-title").removeClass("accordion-active");
            $(".faq-title").removeClass("active");
            $(".faq-title").parent().removeClass("active__row");
        }
        $this.toggleClass("accordion-active");
        $this.parent().toggleClass("active__row");
        $this.next().slideToggle("fast");
    });

    //Image Uploader
    document.querySelectorAll('.image-upload-container').forEach(container => {
        const fileInput = container.querySelector('.file-input');
        const previewImage = container.querySelector('.preview-image');
        const cancelBtn = container.querySelector('.cancel-btn');

        fileInput.addEventListener('change', function () {
            const file = this.files[0];
            if (file && ['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    previewImage.src = e.target.result;
                    previewImage.style.display = 'block';
                    cancelBtn.style.display = 'flex';
                };
                reader.readAsDataURL(file);
            } else {
                alert("Only JPG, JPEG, PNG, or WEBP files are allowed.");
                fileInput.value = '';
            }
        });

        cancelBtn.addEventListener('click', function () {
            fileInput.value = '';
            previewImage.src = '';
            previewImage.style.display = 'none';
            cancelBtn.style.display = 'none';
        });
    });


    //Dashboard-page

    $(".navbar-toggler").on("click", function (e) {
        e.stopPropagation(); // prevent the click from bubbling to the document
        $(".dashbaord-nav-list").toggleClass("active");
    });
    $(document).on("click", function (e) {
        // Check if the click target is outside both the nav list and the toggler
        if (!$(e.target).closest(".dashbaord-nav-list").length && !$(e.target).closest(".navbar-toggler").length) {
            $(".dashbaord-nav-list").removeClass("active");
        }
    });

    $(".sub-faqs-title").on("click", function () {
        $(this).next().slideToggle("fast");
    });

    // _____________________________________________________________________

})
