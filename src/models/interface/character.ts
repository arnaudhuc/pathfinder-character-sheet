import { EAbility } from '../enum/ability';

export interface ICharacterState {
	ancestry: string;
	class: string;
	strengthScore: number;
	dexterityScore: number;
	constitutionScore: number;
	intelligenceScore: number;
	wisdomScore: number;
	charismaScore: number;
	ancestryAbilityBoost: Array<EAbility>;
	ancestryAbilityFlaw: Array<EAbility>;
	classAbilityBoost: Array<EAbility>;
	classAbilityFlaw: Array<EAbility>;
}
