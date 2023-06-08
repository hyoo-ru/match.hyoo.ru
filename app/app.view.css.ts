namespace $.$$ {
	
	$mol_style_define( $hyoo_match_app, {
		
		background: {
			image: [
				[ 'linear-gradient( hsla( 0deg, 0%, calc( 50% + var(--mol_theme_luma) * 50% ), .666 ), hsla( 0deg, 0%, calc( 50% + var(--mol_theme_luma) * 50% ), .666 ) )' ],
				[ 'linear-gradient( to right bottom, purple, violet )' ],
			],
			size: [ 'cover' ],
			position: 'center',
		},
		
		Intro: {
			margin: [ 0, 'auto' ],
			flex: {
				basis: '40rem',
			},
		},
		
		Final: {
			margin: [ 0, 'auto' ],
			flex: {
				basis: '40rem',
			},
		},
		
		Settings: {
			margin: [ 0, 'auto' ],
			flex: {
				basis: `40rem`,
			},
		},
		
		Pair: {
			margin: [ 0, 'auto' ],
			flex: {
				basis: `40rem`,
			},
		},
		
		Menu: {
			Body: {
				justifyContent: 'space-between',
			},
		},
		
		Stats: {
			padding: $mol_gap.text,
			whiteSpace: 'pre-line',
		},
		
	} )
	
}
