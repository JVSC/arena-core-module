import { TypingEnum } from '../../common';
import { DamageTypeEnum } from './damage.constants';

export interface DamageEffectInterface {
  damageType: DamageTypeEnum;
  typing: TypingEnum;
}
