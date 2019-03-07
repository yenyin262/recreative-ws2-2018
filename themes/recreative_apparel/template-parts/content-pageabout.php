<?php
/**
 * Template part for displaying page content in page.php.
 *
 * @package RED_Starter_Theme
 */

?>
<?php $row = CFS()->get('content_for_about');
		foreach ( $row as $content ) {?>
<div class="post1 about-post">
	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<!-- <div class="entry-content"> -->

<?php //the_content(); ?>

<?php
	//wp_link_pages( array(
	//	'before' => '<div class="page-links">' . esc_html( 'Pages:' ),
	//	'after'  => '</div>',
	//) );
?>
<!-- </div> -->
		<div class="upper-content">
			<div>
				<h3><?php echo $content['about_content_title'];?></h3>
				<img src='<?php echo $content['about_content_image'];?>'>
			</div>

			<div class="about-content">
				<p><?php echo $content['about_content_blurb'];?></p>
			</div>
		</div>
		
		<div class="blog-entry-meta about-entry-meta">
			<a href="<?php echo wp_trim_words($content['about_more_link'],20) ?>">
			<p class="aboutLink"><?php echo $content['about_more_link'];?></p>
			</a>
		</div>

	</article>
</div>
<?php }?>