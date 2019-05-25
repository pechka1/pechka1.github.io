<?php 

 function mywpthems() {

 	wp_enqueue_style('bootstrap',get_template_directory_uri() . '/css/bootstrap.min.css' );
	wp_enqueue_style('owl-carousel' ,get_template_directory_uri() . '/css/owl.carousel.min.css');
 	wp_enqueue_style('owl-carousel-default',get_template_directory_uri() . '/css/owl.theme.default.min.css');
 	wp_enqueue_style('font',get_template_directory_uri() . '/css/font.css' );
 	wp_enqueue_style('fontawesome',get_template_directory_uri() . '/fonts/font-awesome-4.7.0/css/font-awesome.css' );
 	wp_enqueue_style('style-css',get_stylesheet_uri() );

 	wp_enqueue_script('jquery',get_template_directory_uri() . '/js/jquery-3.3.1.min.js' );
 	wp_enqueue_script('owl-arouseljs',get_template_directory_uri() . '/js/owl.carousel.min.js' );
 	wp_enqueue_script('bootstrapjs',get_template_directory_uri() . '/js/bootstrap.min.js' );
 	wp_enqueue_script('marin-js',get_template_directory_uri() . '/js/main.js' );
 	
 	}

 	add_action( 'wp_enqueue_scripts', 'mywpthems' );

/*--------------------------*/


add_action( 'init', function() {
	register_post_type('faq', array(
		'labels'              => array(
			'name'          => 'Вопросы',
			'singular_name' => 'Вопрос',
			'menu_name'     => 'Our mission',
			'all_items'     => 'Все вопросы',
			'add_new'       => 'Добавить вопрос',
			'add_new_item'  => 'Добавить новый вопрос',
			'edit'          => 'Редактировать',
			'edit_item'     => 'Редактировать вопрос',
			'new_item'      => 'Новый вопрос',
		),
		'public'              => false,
		'show_ui'             => true,
		'menu_icon'			  => 'dashicons-media-text',
		'supports'            => array( 'title', 'editor' )// станардтні поля підключаємо (мініатюра тайтел)
	) );

});

	function getFaq(){
		$args = array(
	'orderby'     => 'date',
	'order'       => 'ASC',
	'post_type'   => 'faq',
 );
		return get_posts( $args );
	}