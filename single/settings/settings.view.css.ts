namespace $.$$ {
	
	$mol_style_define( $hyoo_match_single_settings, {
		
		flex: {
			basis: `40rem`,
		},
		
		Tools: {
			flex: {
				grow: 0,
			},
		},
		
		Shot: {
			padding: $mol_gap.block,
		},
		
		Camera: {
			aspectRatio: 1,
			border: {
				radius: $mol_gap.round,
			},
		},
		
		Hint: {
			position: 'absolute',
			left: $mol_gap.block,
			top: $mol_gap.block,
			color: $mol_theme.text,
		},
		
		Places: {
			flex: {
				shrink: 0,
				grow: 0,
			},
		},
		
		Syntax: {
			margin: { bottom: `-2.5rem` },
    		alignSelf: `flex-end`,
			zIndex: $mol_layer.speck,
		},
		
	} )
	
}
