<?php
/*
Template Name: recycle
 */
?>
<?php get_header(); ?>
	
<?php if (has_post_thumbnail( $post->ID ) ): ?>
  <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID), 'full'); ?>
  <div id="custom-bg" class="header-banner" style="background-image: url('<?php echo $image[0]; ?>'); height: 100vh; background-attachment: fixed;background-size: cover;  background-position: center">
  </div>
<?php endif; ?>
<?php get_template_part( 'template-parts/content-navbar' ); ?>

<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
    <div class="arrow-up">
    <i class="fas fa-angle-up"></i>
      </div>

  <div class="whiter">
  <div class="wheelPa">
    <img class="wheel" src="<?php echo get_template_directory_uri(); ?>/images/circle_cycle.png">
    <div class="imageHolder">
      <img class="imageBackground" src="<?php echo CFS()->get( 'recycle_circle_image' ) ?>">
    </div>
  </div>
</div>
  

  
        <div class="arrow-down">
    <i class="fas fa-angle-down"></i>
  </div>
  
  <div class="text-recycle">
  
    <div class="lateralMovement">
      <?php
      $fields = CFS()->get( 'sub_pages' );
      $targetX = 1;
      foreach ( $fields as $field ) {?>
      <div class="story-recycle story-recycle<?php echo $targetX;$targetX++?>">
        <img src='<?php echo $field['recycle_image'];?>'><br>
        <h2><?php echo $field['recycle_subtitle'];?></h2>
        <p><?php echo $field['recycle_content'];?></p>
        </div>
     <?php }
    ?>
      
        <h1 class="wheelPercentage"></h1>
      </div>
      </div>
          
		</main><!-- #main -->
	</div><!-- #primary  -->

<?php get_footer();?>