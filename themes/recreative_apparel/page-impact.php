<?php
/*
Template Name: impact
*/ 
get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
    <div class="impact-container">
    <?php
      $impacts = CFS()->get( 'impact_content' );
      foreach ( $impacts as $impact ) {?>
          <section class="grid-impact">
          <div class="grid-impact-img"><img src='<?php echo $impact['impact_image'];?>' alt='Impact image'></div>
          <div class="blue-text heading grid-impact-number"><?php echo $impact['impact_number'];?></div>
          <div class="blue-text heading grid-impact-heading"><?php echo $impact['impact_heading'];?></div>
          <div class="grid-impact-text"><?php echo $impact['impact_blurb'];?></div>
          </section>
      <?php }?>

      <?php $page_data = get_page_by_path('impact'); $page = get_post($page_data);
            $content = $page -> post_content;?>
        <?php echo $content; ?>
        <?php echo do_shortcode( '[contact-form-7 id="173" title="Recycle Leggings"]' ); ?>
      </div>

		</main><!-- #main -->
	</div><!-- #primary  -->

<?php get_footer(); ?>