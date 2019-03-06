<?php
/*
  Template to style a single blog
*/ 
?>


<article class="blog-entry-wrapper" id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

  <header class="blog-entry-header">

		<?php the_title( '<h1 class="blog-entry-title">', '</h1>' ); ?>

		<?php if ( has_post_thumbnail() ) : ?>
			<?php the_post_thumbnail( 'large' ); ?>
		<?php endif; ?>

	</header>

	<div class="blog-content-flex">
		<div class="entry-meta single-blog-meta">

		<?php if( get_avatar(get_the_author_meta('ID')) != '' ) : ?>
		  <?php echo get_avatar(get_the_author_meta('ID')) ?>
		<?php else: ?>
			<img src="/images/no-image-default.jpg"/>
		<?php endif; ?>
			<?php the_author(); ?>
			<?php red_starter_posted_on(); ?>

		</div>

		<div class="blog-entry-content">

			<?php the_content(); ?> 

		</div>
	</div>
  

</article>