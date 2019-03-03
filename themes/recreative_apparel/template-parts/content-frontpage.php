<?php
/**
 * Template part for displaying posts.
 *
 * @package RED_Starter_Theme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="frontpage-top-content">
		<?php if ( has_post_thumbnail() ) : ?>
            <?php $featuredImage = get_the_post_thumbnail_url(); ?>
            <div class="image-class" style="background-image: url('<?php echo $featuredImage;?>')"></div>
		<?php endif; ?>
</div>



		<?php if ( 'post' === get_post_type() ) : ?>
		<div class="entry-meta">
			<?php red_starter_posted_on(); ?> / <?php comments_number( '0 Comments', '1 Comment', '% Comments' ); ?> / <?php red_starter_posted_by(); ?>
		</div><!-- .entry-meta -->
		<?php endif; ?>
		<div class="frontpage-content">
			<a class="ra-front-page-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>"></a>
     	   <?php the_content(); ?>	
  		</div><!-- .entry-content -->
	</div><!-- .entry-header -->


</article><!-- #post-## -->
