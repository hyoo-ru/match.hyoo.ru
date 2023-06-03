namespace $.$$ {
	export class $hyoo_match_single_settings extends $.$hyoo_match_single_settings {
		
		@ $mol_mem
		photo() {
			return URL.createObjectURL( this.single().photo()! )
		}
		
		@ $mol_mem
		live( next?: boolean ) {
			
			if( next === undefined ) {
				const photo = this.single().photo()
				return !( photo && photo.size )
			}
			
			if( next ) return true
			
			const pic = $mol_picture.fit( this.video() )
			const blob = pic.format( 'image/jpeg' )!
			this.single().photo( blob )
			
			return false
		}
		
		@ $mol_mem
		shot_content() {
			return this.live()
				? [ this.Camera(), this.Hint() ]
				: [ this.Photo(), this.Hint() ]
		}
		
	}
}
