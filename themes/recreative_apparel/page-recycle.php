<?php
/*
Template Name: recycle
 */
?>
<?php get_header();?>
  	<div id="primary" class="content-area">
	  	<main id="main" class="site-main" role="main">

      <div class="backgroundBigImage">
      <h1>image loading</h1>

      </div>
      <?php if (has_post_thumbnail($post->ID)): ?>
        <?php $image = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'single-post-thumbnail');?>
        <div id="custom-bg" class="header-banner" style="background-image: url('<?php echo $image[0]; ?>'); height: 500px; background-attachment: fixed;">
        </div>
      <?php endif;?>

        <p id="demo"></p>
        <?php if (has_post_thumbnail()): ?>
          <?php $recycle = get_the_post_thumbnail_url();?>
          <div class="recycle-banner" style="background-image: url('<?php echo $recycle; ?>')"></div>
        <?php endif;?>
        <?php get_template_part('template-parts/content-navbar');?>
        <div class="whiteOut"></div>
        <div class="wheelPa">
          <img class="wheel" src="<?php echo get_template_directory_uri(); ?>/images/circle_cycle.png">
          <div class="imageHolder">
            <img class="imageBackground" src="<?php echo CFS()->get('recycle_circle_image') ?>">
          </div>
        </div>

        <div class="arrow-up">
          <i class="fas fa-angle-up"></i>
        </div>

        <div class="arrow-down">
          <i class="fas fa-angle-down"></i>
        </div>

          <div class="text-recycle">
            <div class="lateralMovement">
              <?php $fields = CFS()->get('sub_pages');
                  foreach ($fields as $field) {?>
                        <div class="story-recycle">
                          <img src='<?php echo $field['recycle_image']; ?>'><br>
                          <h2><?php echo $field['recycle_subtitle']; ?></h2>
                          <p><?php echo $field['recycle_content']; ?></p>
                          </div>
                      <?php }
                  ?>
                <h1 class="wheelPercentage">Hello</h1>
              </div>
            </div>
          </div>
        </div>
		</main><!-- #main -->
	</div><!-- #primary  -->

<?php get_footer();?>