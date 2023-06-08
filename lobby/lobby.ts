namespace $ {
	
	export class $hyoo_match_lobby extends $hyoo_meta_model {
		
		@ $mol_mem_key
		lookup( path: [ place: string, age_self: string, sex_self: string, age_pref: string, sex_pref: string ] ) {
			const key = $mol_int62_hash_string( path.join( '/' ) )
			return this.sub( key, $hyoo_crowd_list )
		}
		
		lookup_has(
			path: [ place: string, age_self: string, sex_self: string, age_pref: string, sex_pref: string ],
			next?: boolean,
		) {
			return this.lookup( path ).has( this.land.peer_id(), next )
		}
		
		lookup_list(
			path: [ place: string, age_self: string, sex_self: string, age_pref: string, sex_pref: string ]
		) {
			return this.lookup( path ).list()
				.map( val => $mol_int62_string_ensure( val ) )
				.filter( $mol_guard_defined )
		}
		
		collect_all(
			[ place, age_self, sex_self, age_pref, sex_pref ]:
				[ place: string[], age_self: string[], sex_self: string[], age_pref: string[], sex_pref: string[] ]
		) {
			let ids = new Set< $mol_int62_string >()
			
			for( const p of place ) {
				for( const as of age_self ) {
					for( const ss of sex_self ) {
						for( const ap of age_pref ) {
							for( const sp of sex_pref ) {
								
								for( const id of this.lookup_list([ p, as, ss, ap, sp ]) ) {
									ids.add( id )
								}
								
							}
						}
					}
				}
			}
			
			return ids
		}
		
		@ $mol_action
		find_pair( self: $hyoo_match_single ) {
			
			if( !self.ready() ) return null
			
			const age_self = self.age_self()
			const sex_self = self.sex_self()
			const age_pref = self.age_pref_all()
			const sex_pref = self.sex_pref_all()
			
			const skipped = self.skipped()!
			const Single = this.world()!.Fund( $hyoo_match_single )
			
			for( const id of self.likes().list() ) {
				
				
				const single = Single.Item( id )
				if( !single.liked() && skipped.has( id ) ) continue
				if( !single.ready() ) continue
				
				return single
			}
			
			for( const place of self.places() ) {
				
				let ids = [] as $mol_int62_string[]
				
				for( const age of age_pref ) {
					for( const sex of sex_pref ) {
						
						const list = this.lookup_list([ place, age, sex, age_self, sex_self ]) 
						for( const id of list ) ids.push( id )
						
					}
				}
				
				for( const id of $mol_array_shuffle( ids ) ) {
					
					if( skipped.has( id ) ) continue
					
					const single = Single.Item( id )
					if( !single.ready() ) continue
					
					return single
				}
				
			}
			
			return null
		}
		
	}
	
}
