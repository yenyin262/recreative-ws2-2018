<?php
/**
 * Template part for displaying page content in page.php.
 *
 * @package RED_Starter_Theme
 */

?>
<?php $row = CFS()->get('content_for_about');
		foreach ( $row as $content ) {?>
<div class="post1">
	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<div class="upper-content">
			<div>
				<h3><?php echo $content['about_content_title'];?></h3>
				<img src='<?php echo $content['about_content_image'];?>'>
			</div>

			<div class="entry-content">
				<p><?php echo $content['about_content_blurb'];?></p>
			</div>
		</div>
		
		<div class="blog-entry-meta">
			<a href="<?php echo wp_trim_words($content['about_more_link'],20) ?>">
				<p>show me the process</p>
			</a>
		</div>

	</article>
</div>
<?php }?>