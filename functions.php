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

	register_block_type(
		'vcpt/resume-header',
		array(
			'editor_script' => 'vcpt-resume-header-block',
		)
	);
}
