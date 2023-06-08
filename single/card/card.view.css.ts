namespace $.$$ {
	
	$mol_style_define( $hyoo_match_single_card, {
		
		background: {
			color: $mol_theme.card,
		},
		
		flex: {
			wrap: 'wrap',
		},
		
		Photo: {
			padding: $mol_gap.block,
			width: '7.5rem',
    		aspectRatio: 1,
			flex: {
				shrink: 0,
			},
		},
		
		Filters: {
			flex: {
				wrap: 'wrap',
			},
		},
		
		Name: {
			padding: $mol_gap.text,
		},
		
		Tags: {
			padding: $mol_gap.text,
			gap: $mol_gap.space,
			color: $mol_theme.shade,
			flex: {
				wrap: 'wrap',
			},
		},
		
		Places: {
			flex: {
				grow: 0,
			},
		},
		
		Info: {
			flex: {
				basis: '20rem',
				grow: 1,
			},
		},
		
	} )
	
}
