namespace $.$$ {
	export class $hyoo_match_single_page extends $.$hyoo_match_single_page {
		
		@ $mol_mem
		photo() {
			return URL.createObjectURL( this.single().photo()! )
		}
		
		@ $mol_mem
		self() {
			return this.single().world()!.home().chief.as( $hyoo_match_single )
		}
		
		like() {
			this.self().skipped().add( this.single().id() )
			this.single().liked( true )
		}
		
		skip() {
			this.self().skipped().add( this.single().id() )
			this.single().liked( false )
		}
		
	}
}
