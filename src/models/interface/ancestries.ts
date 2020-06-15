import { EAbility } from '../enum/ability';

export interface ITileInfo {
	id: number;
	name: string;
	imageUrl: string;
	abilityBoost: Array<EAbility>;
	abilityFlaw: Array<EAbility>;
	isClicked: boolean;
}
