
<?php
/**
 * The template for displaying all single posts.
 *
 * @package RED_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

    <?php 
      if (is_home() && get_option('page_for_posts') ) {
        $img = wp_get_attachment_image_src(get_post_thumbnail_id(get_option('page_for_posts')),'full'); 
        $featured_image = $img[0];
        ?>
        <div class="top-banner" style="background-image:url(<?php echo ($featured_image) ?>);">
        </div>
    <?php } ?>

    <?php wp_reset_postdata(); ?>
    <?php get_template_part( 'template-parts/content-navbar' ); ?>
    <?php get_search_form(); ?>

    <div class="content-section">

      <div class="blog-wrapper">
        <div id="blogCarousel" class="blog-carousel">
          <?php while ( have_posts() ) : the_post(); ?>
            <?php get_template_part( 'template-parts/content', 'home-blog' ); ?>
          <?php endwhile; // End of the loop. ?>
          <?php wp_reset_postdata(); ?>
        </div>
      </div>

      <div class="outer-wrapper-progress">
        <div class="arrow-ui">
          <i id="left-arrow" class="fas fa-chevron-left deactivateLink"></i>
          <i id="right-arrow" class="fas fa-chevron-right"></i>
        </div>
        <div class="wrapper-progress-blog">
          <div id="inProgress" class="inside-progress"></div>
        </div>
      </div>
      
    </div>

		</main><!-- #main -->
	</div><!-- #primary  -->
  
<?php
get_footer();
?>