<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title><?php bloginfo('title'); ?> <?php wp_title();?> </title>
	<?php wp_head(); ?>
</head>
<body>
	<header>
	<div class="rightside_menu fixed">
		<ul>
			<li class="facebook color"><a title="Facebook" href=""><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
			<li class="twitter color"><a  title="twitter" href=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
			<li class="google color"><a title="google" href=""><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
			<li class="pinterest color"><a  title="pinterest" href=""><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
			<li class="email color"><a title="email" href=""><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
			<li class="plus color"><a title="google plus" href=""><i class="fa fa-plus" aria-hidden="true"></i></a></li>
		</ul>
	</div>
	<div class="home_section ">
	<div class="container-fluid">
	 <div class="slide_block">
		<div class="inside_block">
					<div class="logo_small">
				<a title="Logo" href="http://mywordpress.ua/"><img src="<?php bloginfo('template_url')?>/images/logo.png" alt="Avenai"></a>
			</div>
			<div class="top_line">
			<div class="drop_line">
				<p class="number_contact">613.755.4098</p>
				<span class="middle_contact">|</span>
				<p class="email_contact">info@avenai.com</p>
			</div>		
			<div class="right_home_con">
				<a title="Page Home" class="home_header" href="#">Home</a>
				<span class="middle_contact">|</span>
				<a title="Page contact us" class="contact_us" href="#">Contact Us</a>
			</div>
		</div>
		<div class="logo">
			<a title="logo" href="http://mywordpress.ua/"><img alt="logo" src="<?php bloginfo('template_url')?>/images/logo.png"></a>
		</div>


<nav class="navbar">

    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#header_navbar" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>


    <div class="collapse navbar-collapse" id="header_navbar">
    	<?php wp_nav_menu( array(
    		'menu'            => 'top_menu',
    		'container'       => 'ul',
    		'container_class' => 'nav navbar-nav',
    		'menu_class'      => 'nav navbar-nav',
    		'menu_id'         => '',
    		'echo'            => true,
    		'fallback_cb'     => 'wp_page_menu',
    		'before'          => '',
    		'after'           => '',
    		'link_before'     => '',
    		'link_after'      => '',
    		'items_wrap'      => '<ul id = "%1$s" class = "%2$s">%3$s</ul>',
    		'depth'           => 0,
    		'walker'          => '',
    	) ); ?>
<!--       <ul class="nav navbar-nav">
        <li><a title="Page abouts us" href="about.html">About Us</a></li>
        <li><a title="Page Consulting Services" href="consulting.php">Consulting Services</a></li>
        <li><a title="Page Careers" href="#">Careers</a></li>
        <li><a title="Page Insights" href="#">Insights</a></li>
      </ul> -->
    </div>
</nav>
		</div>
<!-- SLIDER -->
		<div class="owl-carousel owl-theme slider_header">
		    <div class="item button_slide"><img alt="slide1" src="<?php bloginfo('template_url')?>/images/slide1.jpg"><button>INSPIRED BY PASSION</button></div>
		    <div class="item"><img  alt="slide2" src="<?php bloginfo('template_url')?>/images/slide1.jpg"></div>
		    <div class="item"><img alt="slide3" src="<?php bloginfo('template_url')?>/images/slide1.jpg"></div>
		</div>
	</div>
	</div>
	</div>
	</header>
