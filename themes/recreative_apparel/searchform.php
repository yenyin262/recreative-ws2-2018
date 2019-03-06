<form role="search" method="get" class="search-form blog-button-styling bottom-margin-50" action="<?php echo home_url( '/' ); ?>">
	<fieldset>
		<label>
			<input type="search" class="search-field" placeholder="" value="<?php echo esc_attr( get_search_query() ); ?>" name="s" title="Search for:" />
		</label>
		<button class="search-submit">
			<span class="icon-search" aria-hidden="true">
				<i class="fa fa-search"></i>
			</span>
			<span class="screen-reader-text"><?php echo esc_html( 'Search' ); ?></span>
		</button>
	</fieldset>
</form>
