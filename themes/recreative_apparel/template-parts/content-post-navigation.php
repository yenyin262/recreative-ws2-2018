<?php // Create and run custom loop
    $custom_posts = new WP_Query();
    $custom_posts->query('post_type=blocks&location=Front Page&section=Mainbar');
    while ($custom_posts->have_posts()) : $custom_posts->the_post();
?>  <div class="block-2 border-top">
        <h2><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'twentyten' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h2>
<?php endwhile; ?>

    
  
      <div class="post-up-next"> 
        <?php if(get_previous_post() && get_next_post()){ ?>  
          <?php
                $nextPost = get_next_post();
                $nextthumbnail = get_the_post_thumbnail($nextPost->ID);
                next_post_link('%link', $nextthumbnail);
        ?>  
        <a href="<?php echo get_permalink( $nextPost->ID ); ?>">
          <div class="post-nav-title"><?php echo apply_filters( 'the_title', $nextPost->post_title ); ?></div>
        </a> 
        <?php } elseif(!get_next_post()){?>  
          <?php
          $prevPost = get_previous_post();
          $prevthumbnail = get_the_post_thumbnail($prevPost->ID);
          previous_post_link('%link', $prevthumbnail);
          ?>

          <a href="<?php echo get_permalink( $prevPost->ID ); ?>">
            <div class="post-nav-title"><?php echo apply_filters( 'the_title', $prevPost->post_title ); ?></div>
          </a> 
      </div>
      <?php } ?> 
      </div>