import { InGameSkillInterface, SkillInterface } from '../skills';

export interface CharacterInterface {
  name: string;
  id: number;
  description: string;
  profilePicture: string;
  bannerPicture: string;
  baseHealth: number;
  baseSpeed: number;
  skills: SkillInterface[];
}

export interface InGameCharacterInterface extends CharacterInterface {
  currentHealth: number;
  currentSpeed: number;
  gameId: number;
  playerId: number;
  skills: InGameSkillInterface[];
}
