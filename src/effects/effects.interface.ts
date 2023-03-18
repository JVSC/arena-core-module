import { EffectTypeEnum } from './effects.constants';
import { DamageEffectInterface } from './damage/damage.interface';
import { HealingEffectInterface } from './healing/healing.interface';
import { PersistenceEnum } from '../common';

export interface EffectInterface {
  characterId: number;
  skillId: number;
  duration: number;
  persistence: PersistenceEnum;
  effectType: EffectTypeEnum;
  effectData: DamageEffectInterface | HealingEffectInterface;
}

export interface IngameEffectInterface extends EffectInterface {
  activeTurns: 0;
  casterGameId: number;
  targetGameId: number;
  playerId: number;
}
