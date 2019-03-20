<?php
/**
 * Template part for displaying page content in page.php.
 *
 * @package RED_Starter_Theme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="shop-header">
        <a class="rc-shop-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>"></a>
	</header>

    <?php get_template_part( 'template-parts/content-navbar' ); ?>
	<div class="shop-content-wrapper">
        <div class="shop-content">
            <h1>Coming Soon! </h1> 
            <p> Subscribe to our newsletter and be the first to receive news on our products.... </p>
        </div>
	</div><!-- .entry-content -->
</article><!-- #post-## -->
