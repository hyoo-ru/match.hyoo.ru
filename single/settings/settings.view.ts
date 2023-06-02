namespace $.$$ {
	export class $hyoo_match_single_settings extends $.$hyoo_match_single_settings {
		
		@ $mol_action
		capture() {
			const pic = $mol_picture.fit( this.video(),  )
			const blob = pic.format( 'image/jpeg' )!
			this.single().photo( blob )
		}
		
	}
}
