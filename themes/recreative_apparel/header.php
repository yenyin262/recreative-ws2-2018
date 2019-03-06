<?php
/**
 * The header for our theme.
 *
 * @package RED_Starter_Theme
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="profile" href="http://gmpg.org/xfn/11">
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php wp_head(); ?>
	</head>

    <body <?php body_class(); ?>>

		<div id="page" class="hfeed site">
			<a class="skip-link screen-reader-text" href="#content"><?php echo esc_html( 'Skip to content' ); ?></a>

			<header id="masthead" class="site-header" role="banner">
				<div class="site-branding">
					<h1 class="site-title screen-reader-text"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php if ( is_front_page()): ?>
					<a class="ra-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>"></a>					
				<?php elseif( is_page('about') || is_page('impact')):  ?>
					<a class="white-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>"></a>
				<?php elseif( is_page('recycle')): ?>
					<a class="ra-blue-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>"></a>
				<?php else : ?>
					<a class="ra-blue-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>"></a>	
				<?php endif; ?>
	
				</div><!-- .site-branding -->

                
				
			</header><!-- #masthead -->
			<div id="content" class="site-content">
