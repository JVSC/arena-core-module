import { OverworldInterface } from './overworlds.interface';
import { OutputSpawnPointsInterface } from '../../character-spawn-points';
export interface OuputOverworldInterface extends OverworldInterface {
  spawns?: [OutputSpawnPointsInterface];
}
