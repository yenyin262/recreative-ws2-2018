
<?php
/**
 * The template for displaying all pages.
 *
 * @package RED_Starter_Theme
 */

get_header(); ?>
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
		
		<?php if ( has_post_thumbnail() ) : ?>
				<?php $about = get_the_post_thumbnail_url(); ?>
				<div class="top-banner" style="background-image: url('<?php echo $about;?>')"></div>
			<?php endif; ?>

			<?php get_template_part( 'template-parts/content-navbar' ); ?>

			<?php while ( have_posts() ) : the_post(); ?>
			<?php the_content(); ?>				
			<?php endwhile; ?>
			<div class="wrapper-progress-about">
        <div id="progressAbout" class="progress-about"></div>
      </div>
				<div class="content-section">
					<div class="blog-wrapper about-wrapper">
						<div id="blogCarousel" class="blog-carousel about-carousel">
							<?php get_template_part( 'template-parts/content-pageabout' ); ?>
					</div>
				</div>

			</div>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>