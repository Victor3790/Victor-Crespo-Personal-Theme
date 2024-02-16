<?php
/**
 * The main template file
 *
 * @package WordPress
 * @subpackage Victor Crespo's personal theme
 */

get_header();
?>
	<?php
	if ( have_posts() ) {
		while ( have_posts() ) {
			the_post();
			the_title();
		}
	} else {
		echo '<p>No posts found</p>';
	}
	?>
<?php
get_footer();
