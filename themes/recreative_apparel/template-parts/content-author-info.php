<?php
/*
  Template for author
*/ 

?>

	<?php if( get_avatar(get_the_author_meta('ID')) != '' ) : ?>
		<?php echo get_avatar(get_the_author_meta('ID')) ?>
	<?php else: ?>
		<img src="/images/no-image-default.jpg"/>
	<?php endif; ?>
	<div class="author-info">
		<h3><?php the_author(); ?></h3>
		<?php red_starter_posted_on(); ?>
	</div>

	<div class="social-meta">
  <i class="fab fa-facebook-f 2x"></i>
  <i class="fab fa-twitter 2x"></i>
  <i class="fas fa-link 2x"></i>
	</div>

