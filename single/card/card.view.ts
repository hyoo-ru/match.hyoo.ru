namespace $.$$ {
	export class $hyoo_match_single_card extends $.$hyoo_match_single_card {
		
		@ $mol_mem
		photo() {
			return URL.createObjectURL( this.single().photo()! )
		}
		
	}
}
