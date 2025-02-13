namespace $.$$ {
	export class $hyoo_match_app extends $.$hyoo_match_app {
		
		@ $mol_mem
		self() {
			return this.yard().home().chief.as( $hyoo_match_single )
		}
		
		@ $mol_mem
		pair() {
			
			this.self().skipped()!.list()
			
			const found = this.lobby().find_pair( this.self() )!
			
			if( !found ) this.lobby().land.clocks
			else found.liked()
			
			return found
		}
		
		@ $mol_mem
		lobby() {
			const land_id = 'a0bbhe_21ksc6' as $mol_int62_string
			const rights = new Uint8Array( $mol_fetch.buffer( require( `/hyoo/match/app/${land_id}!${land_id}.bin` ) ) )
			$mol_wire_sync( this.yard().world() ).apply( rights )	
			return this.yard().land( land_id ).chief.as( $hyoo_match_lobby )
		}
		
		@ $mol_mem
		intro() {
			return this.yard().land( 'sqw0i3_b8924n' ).chief.as( $hyoo_page_side )
		}
		
		@ $mol_mem
		lobby_update() {
			
			const self = this.self()
			const lobby = this.lobby()
			
			const ready = self.ready()
			const places = new Set( self.places() )
			const age = self.age_self()
			const sex = self.sex_self()
			
			const places_options = Object.values( this.Settings().Places().options() )
			const age_self_options = Object.keys( this.Settings().Age_self().options() )
			const sex_self_options = Object.keys( this.Settings().Sex_self().options() )
			const age_pref_options = Object.keys( this.Settings().Age_pref().options() )
			const sex_pref_options = Object.keys( this.Settings().Sex_pref().options() )
			
			for( let place of places_options ) {
				for( let age_self of age_self_options ) {
					for( let sex_self of sex_self_options ) {
						for( let age_pref of age_pref_options ) {
							for( let sex_pref of sex_pref_options ) {
								
								lobby.lookup_has(
									[ place, age_self, sex_self, age_pref, sex_pref ],
									ready
										&& places.has( place )
										&& age_self === age
										&& sex_self === sex
										&& self.age_pref( age_pref )
										&& self.sex_pref( sex_pref ),
								)
								
							}
						}
					}
				}
			}
			
		}
		
		@ $mol_mem
		stats() {
			
			const lobby = this.lobby()
			const place = Object.values( this.Settings().Places().options() )
			const age_pref = Object.keys( this.Settings().Age_pref().options() )
			const sex_pref = Object.keys( this.Settings().Sex_pref().options() )
			
			const girls = $mol_si_short( lobby.collect_all([ place, [ 'young' ], [ 'female' ], age_pref, sex_pref ]).size )
			const boys = $mol_si_short( lobby.collect_all([ place, [ 'young' ], [ 'male' ], age_pref, sex_pref ]).size )
			
			const womans = $mol_si_short( lobby.collect_all([ place, [ 'adult' ], [ 'female' ], age_pref, sex_pref ]).size )
			const mans = $mol_si_short( lobby.collect_all([ place, [ 'adult' ], [ 'male' ], age_pref, sex_pref ]).size )
			
			const grannies = $mol_si_short( lobby.collect_all([ place, [ 'mature' ], [ 'female' ], age_pref, sex_pref ]).size )
			const gaffers = $mol_si_short( lobby.collect_all([ place, [ 'mature' ], [ 'male' ], age_pref, sex_pref ]).size )
			
			return `👧${girls}\t👦${boys}\n👩${womans}\t👨${mans}\n👵${grannies}\t👴${gaffers}`
		}
		
		@ $mol_mem
		look_pages() {
			if( !this.pair() ) return [ this.Final() ]
			return [ this.Pair() ]
		}
		
		redirects() {
			if( this.spread() === 'look' ) {
				if( !this.self().ready() ) this.spread( 'settings' )
			}
		}
		
		@ $mol_mem
		menu_links() {
			if( this.lobby().editable() ) return super.menu_links()
			return super.menu_links().filter( item => item !== this.Menu_link( 'lobby' ) )
		}
		
		// total() {
		// 	return super.total().replace( '{count}', `${ this.lobby().land.residents().length }` )
		// }
		
	}
}
