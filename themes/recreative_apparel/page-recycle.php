<?php
/*
Template Name: recycle
*/ 
?>
<?php get_header(); ?>
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">


<p id="demo"></p>
  <div class="whiteOut">

  </div>


  <div class="wheelPa">
    <img class="wheel" src="<?php echo get_template_directory_uri(); ?>/images/circle_cycle.png">
    <div class="imageHolder">
      <img class="imageBackground" src="<?php echo get_template_directory_uri(); ?>/images/back.png"> ;
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
      

       
      <?php
      $fields = CFS()->get( 'sub_pages' );

      foreach ( $fields as $field ) {?>
      <div class="story-recycle">
        <img src='<?php echo $field['recycle_image'];?>'><br>
        <h2><?php echo $field['recycle_subtitle'];?></h2>
        <p><?php echo $field['recycle_content'];?></p>
        </div>
     <?php }
    ?>

      
        <h1 class="wheelPercentage">Hello</h1>
      </div>
    </div>

 




















		</main><!-- #main -->
	</div><!-- #primary  -->

<?php get_footer(); ?>