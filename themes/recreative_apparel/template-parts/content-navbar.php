<?php
/**
 * Template part for displaying posts.
 *
 * @package RED_Starter_Theme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('sticky-nav'); ?>>



<!-- SITE NAVIGATION -->
<?php wp_nav_menu(
                        array(
                            	'primary' => 'Primary Menu', 
                            	'container' => 'nav',
                                'menu_class' => 'main-nav main-navigation home-navigation',
                                'role' => 'navigation',
                                'id' => 'site-navigation'
                        )); ?>
				<!-- SITE NAVIGATION -->

</article><!-- #post-## -->
