<?php
/**
 * The main functions file
 *
 * @package victor-crespo-personal-theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

// Get theme directory path.
if ( ! defined( 'VCPT_DIR' ) ) {
	define( 'VCPT_DIR', get_template_directory() );
}

// Get theme directory uri.
if ( ! defined( 'VCPT_URI' ) ) {
	define( 'VCPT_URI', get_template_directory_uri() );
}

// Define version.
if ( ! defined( 'VCPT_VER' ) ) {
	define( 'VCPT_VER', '0.0.1' );
}

add_action( 'init', 'vcpt_register_blocks' );

/**
 * Theme block registration
 */
function vcpt_register_blocks() {
	$assets_file = include_once VCPT_DIR . '/blocks/resume/header/build/index.asset.php';

	wp_register_script(
		'vcpt-resume-header-block',
		VCPT_URI . '/blocks/resume/header/build/index.js',
		$assets_file['dependencies'],
		$assets_file['version'],
		false
	);

	wp_register_style(
		'vcpt-resume-header-style',
		VCPT_URI . '/blocks/resume/header/build/index.css',
		array(),
		VCPT_VER
	);

	register_block_type(
		'vcpt/resume-header',
		array(
			'editor_script' => 'vcpt-resume-header-block',
			'style'         => 'vcpt-resume-header-style',
		)
	);
}

add_action( 'wp_enqueue_scripts', 'vcpt_load_assets' );

/**
 * Load the theme's css and scripts
 */
function vcpt_load_assets() {
	wp_enqueue_style(
		'vcpt-bootstrap-reboot',
		VCPT_URI . '/assets/css/bootstrap-reboot.min.css',
		array(),
		VCPT_VER
	);

	wp_enqueue_style(
		'vcpt-bootstrap-grid',
		VCPT_URI . '/assets/css/bootstrap-grid.min.css',
		array( 'vcpt-bootstrap-reboot' ),
		VCPT_VER
	);

	wp_enqueue_style(
		'vcpt-bootstrap-utilities',
		VCPT_URI . '/assets/css/bootstrap-utilities.css',
		array( 'vcpt-bootstrap-grid' ),
		VCPT_VER
	);
}
