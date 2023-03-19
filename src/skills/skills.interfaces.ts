import { PersistenceEnum, TypingEnum } from '../common/constants';
import { SkillClass } from './skills.constants';

export interface SkillInterface {
  characterId: number;
  description: string;
  name: string;
  class: SkillClass;
  persistence: PersistenceEnum;
  cooldown: number;
  baseCooldown: number;
  picture: string;
  pictureBanner: string;
  typing: TypingEnum;
}

export interface InGameSkillInterface extends SkillInterface {
  activeCooldown: number;
  characterGameId: number;
  playerId: number;
  isUsable: boolean;
}
