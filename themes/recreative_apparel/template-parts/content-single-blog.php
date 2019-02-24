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

  <div class="entry-meta">

			<?php red_starter_posted_on(); ?> / <?php red_starter_comment_count(); ?> / <?php red_starter_posted_by(); ?>

	</div>

  <div class="blog-entry-content">

    <?php the_content(); ?>

  </div>

</article>