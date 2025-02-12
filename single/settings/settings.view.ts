namespace $.$$ {
	export class $hyoo_match_single_settings extends $.$hyoo_match_single_settings {
		
		@ $mol_mem
		photo() {
			return URL.createObjectURL( this.single().photo()! )
		}
		
		shot_bid() {
			if( this.photo_fresh() ) return ''
			return super.shot_bid()
		}
		
		@ $mol_mem
		live( next?: boolean ) {
			
			if( next === undefined ) {
				const photo = this.single().photo()
				return !( photo && photo.size )
			}
			
			if( next ) return true
			
			const pic = $mol_picture.fit( this.video() as HTMLVideoElement, 720 )
			const blob = pic.format( 'image/jpeg' )!
			this.single().photo( blob )
			
			return false
		}
		
		@ $mol_mem
		shot_content() {
			return this.live()
				? [ this.Camera(), this.Shot_hint() ]
				: [ this.Photo(), this.Shot_hint() ]
		}
		
		@ $mol_mem
		tools() {
			return [
				... this.ready() ? [ this.Visible() ] : [ this.Invisible() ],
			]
		}
		
		Incoplete() {
			if( this.ready() ) return null as never
			return super.Incoplete()
		}
		
		Next() {
			if( !this.ready() ) return null as never
			return super.Next()
		}
		
		bid_required(
			name: $mol_type_keys_extract< Omit< $hyoo_match_single_settings, `bid_${string}` > , ()=> string >
		) {
			if( this[ name ]() ) return ''
			return super.bid_required( name )
		}
		
		bid_one(
			name: $mol_type_keys_extract< Omit< $hyoo_match_single_settings, `bid_${string}` > , ()=> any[] >
		) {
			if( this[ name ]().length ) return ''
			return super.bid_one( name )
		}
		
		places_enabled() {
			return this.places().length < 4
		}
		
	}
}
