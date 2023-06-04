namespace $.$$ {
	
	$mol_style_define( $hyoo_match_single_page, {
		
		Gallery: {
			padding: $mol_gap.block,
		},
		
		Photo: {
			maxHeight: '80vh',
			justifySelf: 'stretch',
    		aspectRatio: 1,
		},
		
		Skip: {
			alignSelf: 'stretch',
			justifySelf: 'self-end',
			alignItems: 'flex-end',
			justifyContent: 'flex-end',
			width: '50%',
			'--mol_theme_hover': 'transparent',
		},
		Skip_icon: {
			width: '50%',
			height: 'auto',
		},
		
		Mutual: {
			alignSelf: 'flex-end',
			justifySelf: 'self-start',
			padding: $mol_gap.block,
			width: '50%',
			color: $mol_theme.special,
			'--mol_theme_hover': 'transparent',
		},
		Mutual_icon: {
			width: '50%',
			height: 'auto',
		},
		
		Like: {
			alignSelf: 'stretch',
			justifySelf: 'self-start',
			alignItems: 'flex-end',
			justifyContent: 'flex-start',
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
