<?php
   function custom_theme_support() {
    add_theme_support( 'html5', array(
    'search-form',
    'comment-form',
    'comment-list',
    'gallery',
    'caption',
    ) );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'title-tag' );
    add_theme_support( 'menus' );
    register_nav_menus( array(
    'footer_nav' => esc_html__( 'footer navigation', 'rtbread' ),
    'category_nav' => esc_html__( 'category navigation', 'rtbread' ),
    ) );
    add_theme_support( 'editor-styles' );
    add_editor_style();
   }
   add_action( 'after_setup_theme', 'custom_theme_support' );


    function enqueue_name(){
     
       wp_enqueue_script('splide_name', get_template_directory_uri() . '/js/splide.js', array(), '1.0.0', true); 
      wp_enqueue_style('style_name', get_template_directory_uri() . '/css/style.css', array(), '1.0.0'); 
      wp_enqueue_script( 'jquery', 'https://code.jquery.com/jquery-3.6.0.min.js' , '', '3.6.0', true );
      wp_enqueue_script('script_name', get_template_directory_uri() . '/js/script.js', array('jquery'), '1.0.0', true);
     
   }
    add_action('wp_enqueue_scripts','enqueue_name');
?>