<?php
/**
 * Template part for displaying page content in page.php.
 *
 * @package RED_Starter_Theme
 */

?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="content-banner">
			<?php if ( has_post_thumbnail() ) : ?>
				<?php // the_post_thumbnail( 'large' ); ?>
				<?php //if ( has_post_thumbnail() ) : ?>
				<?php $about = get_the_post_thumbnail_url(); ?>
				<div class="about-banner" style="background-image: url('<?php echo $about;?>')"></div>
			<?php endif; ?>
	</div>
	<div class="entry-content">
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html( 'Pages:' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

</article><!-- #post-## -->
