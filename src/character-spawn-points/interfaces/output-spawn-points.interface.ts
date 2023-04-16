import { CharacterInterface } from '../../characters/interfaces/characters.interface';
import { CharacterSpawnPointsInterface } from './character-spawn-points.interface';
export interface OutputSpawnPointsInterface extends CharacterSpawnPointsInterface {
  character?: CharacterInterface;
}
