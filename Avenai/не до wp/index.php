<?php get_header(); ?>

<!-- 	%%%%%%%%%%%Our Mission%%%%%%%%%%%%%%%% -->

	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
	<!-- post -->
<section>
<div class="our_mission">
	<div class=" container-fluid our_mission_inside">
	<h2><?php the_title(); ?></h2>
	<p><?php the_content();?></p>
	</div>
	</div>
</section>
	<?php endwhile; ?>
	<!-- post navigation -->
	<?php else: ?>
	<!-- no posts found -->
	<?php endif; ?>







<!-- 	%%%%%%%%%%%Our Mission%%%%%%%%%%%%%%%%
<section>
<div class="our_mission">
	<div class=" container-fluid our_mission_inside">
	<h2>Our mission</h2>
	<p>To inspire and optimize organizational performance through transformation, leadership, and innovation. In plain words: We manage complex change and translate this into enterprise success.</p>
	</div>
	</div>
</section>
%%%%%%%%%%% Who are we? %%%%%%%%%%%%%%%%
<section>
<div class="who_are_we">
	<div class="who_are_we_inside container-fluid">
		<h2>Who are we?</h2>
		<p>Avenai is a business and IT services consulting company that specializes in transforming businesses into high performing organizations. With a value driven focus, we work closely with our clients to create business strategies and solutions that drive positive impact.
		</p>
		<p>We deliver innovative and comprehensive solutions that result in increased productivity and value, leveraging our extensive experience in successful management of transformative enterprise change throughout the process.
		</p>
	</div>
	
</div>
</section>
%%%%%%%%%%% What Makes Avenai Unique? %%%%%%%%%%%%%%%%
<section>
<div class="what_makes_avenai">
	<div class="what_makes_avenai_inside container-fluid">
	<h2 class="what_makes_caption">What Makes Avenai Unique?</h2>
	<div class="block_info_row" >
	<div class="block_info">
		<img alt="Experience" src="<?php bloginfo('template_url')?>/images/1w.jpg">
		<div class="width_text left_block">
		<h2>Experience</h2>
		<p>The founding partners of Avenai, together with our senior leadership team, bring breadth and depth across the entire business spectrum. Our experience delivering large and complex client engagements, especially in the public sector, allows us to understand how to effectively architect and manage change. From business strategy and diagnostics to solution definition and implementation, the Avenai team brings a wealth of knowledge and experience to help senior leaders of organizations, to help develop their companies into higher performing businesses.</p>
		</div>
	</div>
	<div class="block_info middle">
		<img alt="People" src="<?php bloginfo('template_url')?>/images/2w.jpg">
		<div class="width_text">
		<h2>People</h2>
		<p>The quality and engagement level of our people is what makes Avenai unique. The knowledge, experience and dedication that resonates within Avenai differentiate us from our competitors. We pride ourselves on attracting and retaining highly talented individuals that are committed to helping our company grow and become a recognized leader in the industry. Careful recruitment ensures that the Avenai values are accepted and respected, allowing for superior results and customer service.</p>
		</div>
	</div>
	<div class="block_info">
		<img alt="Discipline" src="<?php bloginfo('template_url')?>/images/3w.jpg">
		<div class="width_text">
		<h2>Discipline</h2>
		<p>At Avenai, we understand that transformational change cannot be achieved without a proven management approach that will help rally a team towards a common goal or set objectives. Avenai’s senior executives have over 100 years of combined experience in business and IT consulting, and have been successful in the execution of numerous complex projects, gaining the knowledge and capabilities to help organizations deliver solutions successfully. That rigor and discipline in program, project and change management is cascaded down to the junior employees of Avenai, such that we bring consistency and predictability in our project delivery.</p>
		</div>
	</div>
	</div>
	</div>
	
</div>
</section>
%%%%%%%%%%% FOOTER %%%%%%%%%%% -->
<?php get_footer(); ?>