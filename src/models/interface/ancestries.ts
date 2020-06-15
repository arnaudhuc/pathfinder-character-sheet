import { EAbility } from '../enum/ability';

export interface ITileInfo {
	id: number;
	name: string;
	imageUrl: string;
	ancestryAbilityBoost: Array<EAbility>;
	ancestryAbilityFlaw: Array<EAbility>;
	isClicked: boolean;
}
