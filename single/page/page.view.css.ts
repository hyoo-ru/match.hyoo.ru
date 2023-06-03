namespace $.$$ {
	
	$mol_style_define( $hyoo_match_single_page, {
		
		flex: {
			basis: `40rem`,
		},
		
		Gallery: {
			padding: $mol_gap.block,
		},
		
		Photo: {
			maxHeight: '80vh',
		},
		
		Skip: {
			alignSelf: 'stretch',
			justifySelf: 'self-start',
			alignItems: 'flex-end',
			justifyContent: 'flex-start',
			width: '50%',
			'--mol_theme_hover': 'transparent',
		},
		Skip_icon: {
			width: '50%',
			height: 'auto',
		},
		
		Like: {
			alignSelf: 'stretch',
			justifySelf: 'self-end',
			alignItems: 'flex-end',
			justifyContent: 'flex-end',
			width: '50%',
			color: $mol_theme.special,
			'--mol_theme_hover': 'transparent',
		},
		Like_icon: {
			width: '50%',
			height: 'auto',
		},
		
		Places: {
			flex: {
				shrink: 0,
				grow: 0,
			},
		},
		
	} )
	
}
