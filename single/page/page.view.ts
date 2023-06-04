namespace $.$$ {
	export class $hyoo_match_single_page extends $.$hyoo_match_single_page {
		
		@ $mol_mem
		photo() {
			return URL.createObjectURL( this.pair().photo()! )
		}
		
		@ $mol_mem
		self() {
			return this.pair().world()!.home().chief.as( $hyoo_match_single )
		}
		
		like() {
			const pair = this.pair()
			pair.liked( true )
			this.self().skipped()!.add( pair.id() )
		}
		
		skip() {
			const pair = this.pair()
			pair.liked( false )
			this.self().skipped()!.add( pair.id() )
		}
		
		@ $mol_mem
		mutual() {
			if( !this.pair().liked() ) return false
			if( !this.self().likes().list().includes( this.pair().id() ) ) return false
			return true
		}
		
		@ $mol_mem
		dating() {
			if( !this.mutual() ) return false
			return this.self().skipped()!.land.last_stamp() > $mol_state_time.now( 1000 * 60 ) - 1000 * 60 * 60
		}
		
		Match() {
			return this.mutual() ? super.Match() : null as never
		}
		
		@ $mol_mem
		gallery() {
			return [
				this.Photo(),
				this.mutual()
					? this.Mutual()
					: this.Like(),
				... this.dating() ? [] : [ this.Skip() ],
			]
		}
		
	}
}
