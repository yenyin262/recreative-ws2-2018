<?php
/**
 * Template part for displaying single posts.
 *
 * @package RED_Starter_Theme
 */

?>
<div class="post1">

  <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

    <?php the_title( '<h3>', '</h3>' ); ?>

    <div>
      <?php if ( has_post_thumbnail() ) : ?>
          <?php the_post_thumbnail( 'large' ); ?>
        <?php endif; ?>

      <div class="entry-content">
        <?php echo wp_trim_words( get_the_content(), 50 );?>
        <?php
          wp_link_pages( array(
            'before' => '<div class="page-links">' . esc_html( 'Pages:' ),
            'after'  => '</div>',
          ) );
        ?>
      </div>
    </div>
    
    <div class="blog-entry-meta">
      <p class="blog-entry-meta-author">By <?php echo get_the_author_meta('display_name') ?></p>
      <a href="<?php echo the_permalink(); ?>">
        <p>read more</p>
      </a>
    </div>

  </article>

</div>

