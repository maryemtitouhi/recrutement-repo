import {Pays} from './pays';
import {Cv} from './cv';

export class Diplome {
   id: number;
  titre: string;
 etablissement: string;
  debut: Date;
 fin: Date;
 cv: Cv;
}
