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
			if( !this.photo() ) return false
			return true
		}
		
		@ $mol_mem
		photo( next?: $mol_blob ) {
			return this.yoke( '$hyoo_match_single:photo', $hyoo_crowd_blob )?.blob( next )
		}
		
		@ $mol_mem
		photo_moment() {
			const stamp = this.yoke( '$hyoo_match_single:photo', $hyoo_crowd_blob )?.land.last_stamp()
			return new $mol_time_moment( stamp || '2000-01-01' )
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
		sex_self( next?: string ) {
			return this.sub( '$hyoo_match_single:sex_self', $hyoo_crowd_reg ).str( next )
		}
		
		@ $mol_mem
		age_self( next?: string ) {
			return this.sub( '$hyoo_match_single:age_self', $hyoo_crowd_reg ).str( next )
		}
		
		@ $mol_mem
		sex_pref_all( next?: readonly string[] ) {
			return this.sub( '$hyoo_match_single:sex_pref', $hyoo_crowd_list ).list( next ).map( String )
		}
		
		@ $mol_mem_key
		sex_pref( name: string, next?: boolean ) {
			return this.sub( '$hyoo_match_single:sex_pref', $hyoo_crowd_list ).has( name, next )
		}
		
		@ $mol_mem
		age_pref_all( next?: readonly string[] ) {
			return this.sub( '$hyoo_match_single:age_pref', $hyoo_crowd_list ).list( next ).map( String )
		}
		
		@ $mol_mem_key
		age_pref( name: string, next?: boolean ) {
			return this.sub( '$hyoo_match_single:age_pref', $hyoo_crowd_list ).has( name, next )
		}
		
	}
	
}
