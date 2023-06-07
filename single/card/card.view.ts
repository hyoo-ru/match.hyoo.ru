namespace $.$$ {
	export class $hyoo_match_single_card extends $.$hyoo_match_single_card {
		
		@ $mol_mem
		photo() {
			return URL.createObjectURL( this.single().photo()! )
		}
		
		@ $mol_mem
		tags() {
			return `${ this.age_self() } ${ this.sex_self() } ▶ ${ this.age_pref().join( ' ' ) } | ${ this.sex_pref().join( ' ' ) }`
		}
		
	}
}
