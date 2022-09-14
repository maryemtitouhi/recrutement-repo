import {Offre} from './offre';
import {Cv} from './cv';

export class Candidature {
  id: any;
  cv: Cv;
  dateCandidature: Date;
  dateEntretien: Date;
  etat: string;
  offre: Offre;

}
