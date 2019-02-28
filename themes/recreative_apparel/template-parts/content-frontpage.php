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
			<?php // the_post_thumbnail( 'large' ); ?>
			<?php //if ( has_post_thumbnail() ) : ?>
            <?php $thumb = get_the_post_thumbnail_url(); ?>
            <div class="image-class" style="background-image: url('<?php echo $thumb;?>')"></div>
		<?php endif; ?>

		<!-- <?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?> -->


		<?php if ( 'post' === get_post_type() ) : ?>
		<div class="entry-meta">
			<?php red_starter_posted_on(); ?> / <?php comments_number( '0 Comments', '1 Comment', '% Comments' ); ?> / <?php red_starter_posted_by(); ?>
		</div><!-- .entry-meta -->
		<?php endif; ?>
		<div class="frontpage-content">
			<div class="ra-front-page-logo"></div>
     	   <?php the_content(); ?>	
  		</div><!-- .entry-content -->
	</div><!-- .entry-header -->


</article><!-- #post-## -->
