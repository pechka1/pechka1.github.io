<?php
/*
Template Name: consulting
*/
?>

<?php get_header(); ?>
	<!--%%%%%%%%%%%Our Mission%%%%%%%%%%%%%%%%  -->
	<?php foreach (getFaq() as $post): ?>
<section>
<div class="container-fluid">
	<div class="our_areas">
		<h2><?php echo $post->post_title; ?></h2>
		<p><?php echo $post->post_content; ?></p>
<!-- 		<p><?php echo $post->post_content; ?></p>
<p><?php echo $post->post_content; ?></p> -->
	</div>
</div>
</section>
<?php endforeach; ?>
<!-- %%%%%%%%%%% Strategy %%%%%%%%%%% -->
<section>
	<div class="strategy_block">
		<div class="container-fluid">
		<div class="strategy_block_inside">
			<img alt="Strategy" src="<?php bloginfo('template_url')?>/images/Strategy_block.jpg">
			<div class="text_side_block top">
				<h2>Strategy</h2>
				<p class="out">The way we think, interact, and work all stem from the values that are exhibited throughout our organization. Avenai’s culture is inclusive; valuing diversity and each employee’s unique qualities and opinions. We focus on thinking outside the box. Innovative ideas, discussions on strategy, and breaking away from the norms of our industry are all encouraged and supported. Flexibility is a key attribute that Avenai promotes.</p>
				<p>Whether it’s flexible work arrangements, or changing roles to better suit your interests, we provide our employees with a strong work-life balance and chance to grow their careers. Avenai’s lattice organization approach offers employees an opportunity to learn first-hand from some of the most well-respected and experienced and well respected experts in the industry. No matter the position, all of our employees play a role in further developing Avenai as an industry leading organization.</p>
				
			</div>
		</div>
	</div>
</div>
</section>

<!-- %%%%%%%%%%% solutions_delivery %%%%%%%%%%% -->

<section>
	<div class="solutions_delivery">
		<div class="container-fluid">
		<div class="solutions_delivery_inside">
				<img alt="Solutions delivery" src="<?php bloginfo('template_url')?>/images/solutions_delivery.jpg">
			<div class="text_side_block_middle">
				<h2>solutions delivery</h2>
				<p class="out">Our people are our strength—our employees work to create a high performing culture and collaborative team environment. We have the experience, energy and passion to help you achieve your goals. We’re focused on supporting our clients to make a positive impact to their performance and effectiveness. We work with our clients as partners, as well as colleagues, and support and challenge them in developing solutions that will make a meaningful difference.</p>
				<p>We’ll work hard to ensure that you get the highest value from the projects that we undertake, and that we deliver results that will stand the test of time. </p>
				
			</div>
		</div>
	</div>
</div>
</section>

<!-- %%%%%%%%%%% solutions operations %%%%%%%%%%% -->
<section>
	<div class="operations_block">
		<div class="container-fluid">
		<div class="operations_block_inside">
			<img alt="Strategy" src="<?php bloginfo('template_url')?>/images/Strategy_block.jpg">
			<div class="text_side_block_bottom">
				<h2>solutions operations</h2>
				<p class="out">At Avenai, we’re always striving to find new methods to approach business and IT scenarios. This sometimes involves strategizing and restructuring existing platforms and settings, which may result in the requirement to implement new services.</p>
				<p>We are experienced Oracle Policy Automation implementers and have the skills to introduce this system to enhance your businesses functionality.</p>
				
			</div>
		</div>
		</div>
	</div>
</section>
<?php get_footer(); ?>