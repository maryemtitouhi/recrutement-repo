import {Cv} from './cv';
import {TypePoste} from './type-poste';

export class Experience {
  id: number;
  titre: string;
  societe: string;
  debut: any;
  fin: any;
  cv: Cv;
  typePoste: TypePoste;
  description: string;
}
