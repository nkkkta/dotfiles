<?php
    add_action( 'wp_enqueue_scripts', 
      'my_theme_enqueue_styles', 1001 );
     
    function my_theme_enqueue_styles() {
         wp_enqueue_style( 'parent-style', 
        get_template_directory_uri() . '/style.css' );
    
        wp_dequeue_style( 'font-newspaper' );
        wp_deregister_style( 'font-newspaper' );
        wp_enqueue_style(
            'font-newspaper-child', /
            get_stylesheet_directory_uri() . 
      '/font-newspaper.css',
            ['parent-style'], 
            null 
        );
    }
    ?>