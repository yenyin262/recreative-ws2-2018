<?php
/*
Template Name: impact
*/ 
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

    <?php
      $impacts = CFS()->get( 'impact_content' );
      foreach ( $impacts as $impact ) {
          echo $field['impact_heading'];
          echo $field['impact_image'];
          echo $field['impact_number'];
          echo $field['impact_blurb'];
      }
    ?>

		</main><!-- #main -->
	</div><!-- #primary  -->

<?php get_footer(); ?>