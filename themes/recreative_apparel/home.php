<?php
/**
 * The template for displaying all single posts.
 *
 * @package RED_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">


      <div class="blog-carousel">

        <?php while ( have_posts() ) : the_post(); ?>

          <?php get_template_part( 'template-parts/content', 'home-blog' ); ?>

        <?php endwhile; // End of the loop. ?>

      </div>

    

		</main><!-- #main -->
	</div><!-- #primary  -->