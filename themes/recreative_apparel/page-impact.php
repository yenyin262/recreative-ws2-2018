<?php
/*
Template Name: impact
*/ 
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
    <div class="container">
    <?php
      $impacts = CFS()->get( 'impact_content' );
      foreach ( $impacts as $impact ) {?>
          <div class="grid">
          <div class="blue grid-impact-number"><?php echo $impact['impact_number'];?></div>
          <div class="blue grid-impact-heading"><?php echo $impact['impact_heading'];?></div>
          <div class="grid-impact-img"><img src='<?php echo $impact['impact_image'];?>' alt='Impact image'></div>
          <div class="grid-impact-text"><?php echo $impact['impact_blurb'];?></div>
          </div>
      <?php }?>
      </div>
		</main><!-- #main -->
	</div><!-- #primary  -->

<?php get_footer(); ?>