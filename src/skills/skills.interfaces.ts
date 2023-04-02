import { PersistenceEnum, TypingEnum } from '../common/constants';
import { SkillClassTypeEnum, SkillTargetTypeEnum } from './skills.constants';

export interface SkillInterface {
  characterId: number;
  description: string;
  name: string;
  class: SkillClassTypeEnum;
  persistence: PersistenceEnum;
  cooldown: number;
  baseCooldown: number;
  picture: string;
  pictureBanner: string;
  typing: TypingEnum;
  targetType: SkillTargetTypeEnum;
}

export interface InGameSkillInterface extends SkillInterface {
  activeCooldown: number;
  characterGameId: number;
  playerId: number;
  isUsable: boolean;
}
