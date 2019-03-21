<div class="post-up-next"> 
  <?php
  $nextPost = get_previous_post();
    if(!empty($nextPost)){
      $nextThumbnailUrl = wp_get_attachment_image_src( get_post_thumbnail_id( $nextPost->ID ), $size = 'large', $icon = false );  
    ?>
    <div class="single-footer-image"style="background-image: url('<?php echo $nextThumbnailUrl[0]; ?>')">
    </div>
    <a class="nav-meta-box" href="<?php echo get_permalink( $nextPost->ID ); ?>">
      <h1>UP NEXT</h1>
      <div class="post-nav-title"><?php echo apply_filters( 'the_title', $nextPost->post_title ); ?></div>
      <div class="nav-author"><?php echo get_the_author(); ?></div>
    </a> 
    <?php 
    wp_reset_postdata();  
    }?>
</div>