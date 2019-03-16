<?php
/**
 * Template part for displaying results in search pages.
 *
 * @package RED_Starter_Theme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>

		<?php if ( 'post' === get_post_type() ) : ?>
		<div class="content-section">
      <div class="blog-wrapper">
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
    <?php endif; ?>
    
	</header><!-- .entry-header -->

	<div class="entry-summary">
		<?php the_excerpt(); ?>
	</div><!-- .entry-summary -->
</article><!-- #post-## -->
