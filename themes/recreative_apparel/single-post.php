<?php
/**
 * The template for displaying all single posts.
 *
 * @package RED_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area wrapper-20">
		<main id="main" class="site-main single-post-wrapper" role="main">
		<?php get_template_part( 'template-parts/content-navbar' ); ?>
		<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'template-parts/content', 'single-blog' ); ?>

			<?php //the_post_navigation(); ?>
			
			<?php get_template_part( 'template-parts/content', 'post-navigation' ); ?>

		<?php endwhile; // End of the loop. ?>
		</main><!-- #main -->
	</div><!-- #primary  -->

<?php get_footer(); ?>