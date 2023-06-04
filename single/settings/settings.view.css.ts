namespace $.$$ {
	
	$mol_style_define( $hyoo_match_single_settings, {
		
		Tools: {
			flex: {
				grow: 0,
			},
		},
		
		Shot: {
			padding: $mol_gap.block,
			aspectRatio: 1,
		},
		
		Camera: {
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
		
		Contacts_hint: {
			padding: $mol_gap.text,
			color: $mol_theme.shade,
			margin: { bottom: `-2.5rem` },
			alignSelf: `flex-end`,
			zIndex: $mol_layer.speck,
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
