namespace $.$$ {
	export class $hyoo_match_lobby_page extends $.$hyoo_match_lobby_page {
		
		@ $mol_mem
		single_list() {
			if( !this.lobby().editable() ) return []
			return this.lobby().land.residents().map( id => this.Single( id ) )
		}
		
		@ $mol_mem_key
		single( id: $mol_int62_string ) {
			return this.lobby().world()!.Fund( $hyoo_match_single ).Item( id )
		}
		
	}
}
