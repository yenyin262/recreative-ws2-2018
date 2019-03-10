<?php
/**
 * The template for displaying search results pages.
 *
 * @package RED_Starter_Theme
 */

get_header(); ?>

<div id="primary" class="content-area">
        <main id="main" class="site-main bottom-margin-50" role="main">
		

		<?php get_template_part('template-parts/content-navbar');?>

		<?php get_search_form();?>

		<?php if ( have_posts() ) : ?>

			<header class="search-page-header">
				<h1 class="search-page-title">
					<?php printf( esc_html( 'Search Results for: %s' ), '<span class="search-word">' . get_search_query() . '</span>' ); ?>
				</h1>
			</header><!-- .page-header -->

			<?php /* Start the Loop */ ?>
			<div class="content-section">
            	<div class="blog-wrapper" style="text-align: center;">
                	<div id="blogCarousel" class="blog-carousel">
                      <?php while (have_posts()): the_post();?>
                        <?php get_template_part('template-parts/content', 'home-blog');?>
                        <?php endwhile; // End of the loop. ?>
                      <?php wp_reset_postdata();?>
                    </div>
                </div>
              <div class="wrapper-progress-blog">
                <div id="inProgress" class="inside-progress"></div>
              </div>
           </div>

			<?php red_starter_numbered_pagination(); ?>

		<?php else : ?>

			<?php get_template_part( 'template-parts/content', 'none' ); ?>

		<?php endif; ?>

		</main><!-- #main -->
	</section><!-- #primary -->

<?php get_footer(); ?>
