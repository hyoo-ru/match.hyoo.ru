namespace $ {
	
	export class $hyoo_match_single extends $hyoo_meta_model {
		
		@ $mol_mem
		photos( next?: readonly string[] ) {
			return this.sub( 'photos', $hyoo_crowd_list ).list( next )
		}
		
	}
	
}
