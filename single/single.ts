namespace $ {
	
	export class $hyoo_match_single extends $hyoo_meta_model {
		
		@ $mol_mem
		ready() {
			if( !this.title() ) return false
			if( !this.greet() ) return false
			if( !this.contacts() ) return false
			if( !this.age_self() ) return false
			if( !this.sex_self() ) return false
			if( !this.age_pref_all().length ) return false
			if( !this.sex_pref_all().length ) return false
			if( !this.places().length ) return false
			if( !this.photo_fresh() ) return false
			return true
		}
		
		@ $mol_mem
		photo_node() {
			return this.yoke( '$hyoo_match_single:photo', $hyoo_crowd_blob )
		}

		@ $mol_mem
		photo( next?: $mol_blob ) {
			return this.photo_node()?.blob( next )
		}
		
		@ $mol_mem
		photo_stamp() {
			return this.photo_node()?.land.last_stamp() || new $mol_time_moment( '2000-01-01' ).valueOf()
		}
		
		@ $mol_mem
		photo_fresh() {
			
			const stamp = this.photo_node()?.land.last_stamp()
			if( !stamp ) return false
			
			return stamp > $mol_state_time.now( 60 * 1000 ) - 1000 * 60 * 60 * 32
		}
		
		@ $mol_mem
		photo_moment() {
			return new $mol_time_moment( this.photo_stamp() )
		}
		
		@ $mol_mem
		greet( next?: string ) {
			return this.sub( '$hyoo_match_single:greet', $hyoo_crowd_text ).text( next )
		}
		
		@ $mol_mem
		contacts( next?: string ) {
			return this.sub( '$hyoo_match_single:contacts', $hyoo_crowd_text ).text( next )
		}
		
		@ $mol_mem
		places( next?: readonly string[] ) {
			return this.sub( '$hyoo_match_single:places', $hyoo_crowd_list ).list( next ).map( String )
		}
		
		@ $mol_mem
		univer( next?: string ) {
			return this.sub( '$hyoo_match_single:univer', $hyoo_crowd_reg ).str( next )
		}
		
		@ $mol_mem
		sex_self( next?: string ) {
			return this.sub( '$hyoo_match_single:sex_self', $hyoo_crowd_reg ).str( next )
		}
		
		@ $mol_mem
		age_self( next?: string ) {
			return this.sub( '$hyoo_match_single:age_self', $hyoo_crowd_reg ).str( next )
		}
		
		@ $mol_mem
		sex_pref_node() {
			return this.sub( '$hyoo_match_single:sex_pref', $hyoo_crowd_list )
		}
		
		@ $mol_mem
		sex_pref_all( next?: readonly string[] ) {
			return this.sex_pref_node().list( next ).map( String )
		}
		
		@ $mol_mem_key
		sex_pref( name: string, next?: boolean ) {
			return this.sex_pref_node().has( name, next )
		}
		
		@ $mol_mem
		age_pref_node() {
			return this.sub( '$hyoo_match_single:age_pref', $hyoo_crowd_list )
		}
		
		@ $mol_mem
		age_pref_all( next?: readonly string[] ) {
			return this.age_pref_node().list( next ).map( String )
		}
		
		@ $mol_mem_key
		age_pref( name: string, next?: boolean ) {
			return this.age_pref_node().has( name, next )
		}
		
		@ $mol_mem
		likes() {
			return this.sub( '$hyoo_match_single:likes:2', $hyoo_crowd_counter )
		}
		
		@ $mol_mem
		liked( next?: boolean ) {
			return this.likes().counted( next )
		}
		
		@ $mol_mem
		mutual() {
			const Single = this.world()!.Fund( $hyoo_match_single )
			return this.likes().list()
				.map( id => Single.Item( id ) )
				.filter( pair => pair.likes().list().includes( this.id() ) )
		}
		
		@ $mol_mem
		skipped() {
			return this.yoke( '$hyoo_match_single:skipped:2', $hyoo_crowd_list )
		}
		
	}
	
}
