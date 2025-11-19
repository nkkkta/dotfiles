@vite(['resources/scss/app.scss', 'resources/js/app.js'])

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=h1, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap');
    </style>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"> -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"> -->
</head>

<!-- NOTE: Ибо partial views загружаютсю только после app.js -->
<body>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
	    const toggleButton = document.querySelector('.pre-header__menu-btn');
	    const mainLinks = document.querySelector('.pre-header__nav');

	    if (toggleButton && mainLinks) {
		    toggleButton.addEventListener('click', () => {
			    mainLinks.classList.toggle('is-open');
		    });
	    }
    });

    </script>
    <div class="main-container">
        <header>
            @include('partials.home.preheader')
            @include('partials.home.header')
        </header>
        @include('partials.home.navigation')
        @include('partials.home.offer')
        @include('partials.home.features')
        @include('partials.home.category_slider')
        @include('partials.home.product_slider')
        @include('partials.home.subscription')
        @include('partials.home.footer')
        @include('partials.home.bottom-menu')
    </div>
</body>
</html>