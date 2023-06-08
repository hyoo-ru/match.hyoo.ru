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
		dating_range() {
			
			if( !this.mutual() ) return null
			
			return new $mol_time_interval({
				start: new $mol_time_moment( $mol_state_time.now( 1000 ) ),
				end: new $mol_time_moment( this.self().skipped()!.land.last_stamp() ).shift( 'PT60m' ),
			})
			
		}
		
		@ $mol_mem
		match_hint() {
			const min = Math.max( 0, this.dating_range()?.duration.count( 'PT1m' ) ?? 0 ).toFixed(0)
			return super.match_hint().replace( '{timeout}', min )
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
				... ( this.dating_range()?.duration.valueOf() ?? 0 ) > 0 ? [] : [ this.Skip() ],
			]
		}
		
	}
}
