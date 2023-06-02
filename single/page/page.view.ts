namespace $.$$ {
	export class $hyoo_match_single_page extends $.$hyoo_match_single_page {
		
		@ $mol_mem
		photo() {
			return URL.createObjectURL( this.single().photo()! )
		}
		
	}
}
