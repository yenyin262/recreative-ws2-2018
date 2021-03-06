<?php
/*
  Template to style a single blog
*/ 

?>
<article class="blog-entry-wrapper" id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<header class="blog-entry-header">
		<?php if ( has_post_thumbnail() ) : ?>
		<?php the_title( '<h1 class="blog-entry-title">', '</h1>' ); ?>
		<?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), $size = 'large', $icon = false ); ?>
			<div class="single-post-hero" style="background-image: url('<?php echo $image[0]; ?>')">
			</div>
		<?php endif ?>
	</header>

	<div class="blog-content-flex">
		<div class="entry-meta single-blog-meta">
			<?php get_template_part( 'template-parts/content', 'author-info' ); ?>
		</div>

		<div class="blog-entry-content">
			<?php the_content(); ?> 
			<hr/>
			<div class="entry-meta single-blog-meta hide-social">
				<?php get_template_part( 'template-parts/content', 'author-info' ); ?>
			</div>
			<p><?php the_author_meta('description');?></p>
		</div>
	</div>

</article>