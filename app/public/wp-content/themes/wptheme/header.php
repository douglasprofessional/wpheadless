<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package wptheme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div class="site">	
	<header class="site-header">
		<div class="container">
			<h1 class="site-title">
				<?php bloginfo( 'name' ); ?>
			</h1>

			<p class="site-description">
				<?php echo get_bloginfo( 'description', 'display' ); ?>
			</p>
		</div>
	</header><!-- #masthead -->
