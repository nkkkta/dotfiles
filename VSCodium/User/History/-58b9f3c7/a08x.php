<?php
    add_action( 'wp_enqueue_scripts', 
      'my_theme_enqueue_styles', 1001 );
     
    function my_theme_enqueue_styles() {
         wp_enqueue_style( 'parent-style', 
      get_template_directory_uri() . '/style.css' );
    
        // 2. Отключаем оригинальный файл со шрифтами из 
      родительской темы
        wp_dequeue_style( 'font-newspaper' );
        wp_deregister_style( 'font-newspaper' );
   14 
   15     // 3. Подключаем наш собственный (измененный) файл 
      шрифтов из дочерней темы
   16     wp_enqueue_style(
   17         'font-newspaper-child', // Новое имя для нашего 
      файла
   18         get_stylesheet_directory_uri() . 
      '/font-newspaper.css',
   19         ['parent-style'], // Указываем, что наши стили 
      должны грузиться после родительских
   20         null // Версия, null чтобы избежать кэширования 
      при разработке
   21     );
   22 }
   23 ?>