import { EAbility } from '../enum/ability';

export interface ICharacterState {
	ancestry: string;
	strengthScore: number;
	dexterityScore: number;
	constitutionScore: number;
	intelligenceScore: number;
	wisdomScore: number;
	charismaScore: number;
	abilityBoost: Array<EAbility>;
	abilityFlaw: Array<EAbility>;
}
