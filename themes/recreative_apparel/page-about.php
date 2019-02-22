
<?php
/**
 * The template for displaying all pages.
 *
 * @package RED_Starter_Theme
 */
?>

<div id="primary" class="content-area about-area">
		<main id="main" class="site-main" role="main">

			<?php while ( have_posts() ) : the_post(); ?>

				<div class="title"><?php get_template_part( 'template-parts/content-pageabout' ); ?></div>

			<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
    </div><!-- #primary -->
    <?php get_footer(); ?>	
</div>