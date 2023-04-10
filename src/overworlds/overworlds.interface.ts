import { CharacterInterface } from '../characters';
import { CharacterSpawnPointsInterface } from '../character-spawn-points';

interface SpawnPoint extends CharacterSpawnPointsInterface {
  character?: CharacterInterface;
}
export interface OverworldInterface {
  id: number;
  name: string;
  description: string;
  mapPicture: string;
}
export interface CompleteOverworldInterface extends OverworldInterface {
  spawns?: [SpawnPoint];
}
