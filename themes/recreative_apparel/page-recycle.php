<?php
/*
Template Name: recycle
*/ 
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

    <?php
      $fields = CFS()->get( 'sub_pages' );
      foreach ( $fields as $field ) {
          echo $field['recycle_subtitle'];
          echo $field['recycle_content'];
          echo $field['recycle_image'];
      }
    ?>

		</main><!-- #main -->
	</div><!-- #primary  -->

<?php get_footer(); ?>