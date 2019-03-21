<?php
/**
 * The template for displaying the footer.
 *
 * @package RED_Starter_Theme
 */

?>

		</div><!-- #content -->

			<footer id="colophon" class="site-footer">
				<div class="subscribe-section">
					<form id="subscribe-submit" class="subscribe-form"  type="submit">
					<input type="email" class="subscribe-email" placeholder="Subscribe" />
					<button class="subscribe-btn" type="submit" value="Submit">></button>
					<div class="notification-check">
						<label><input type="checkbox" class="subscribe-checkbox"  value="notification" id="notification">
						<span class="confirm-text">Please send me emails with environmental tips, news and discounts.</span></label>
					</div>
					</form>
					
					<div class="social-icon-section">
						<a href="#"><i class="fab fa-3x fa-instagram"></i></a>
						<a href="#"><i class="fab fa-3x fa-facebook-square"></i></a>
					</div>
				</div>
			</footer><!-- #colophon -->
		</div><!-- #page -->

		<?php wp_footer();?>
	</body>
</html>
