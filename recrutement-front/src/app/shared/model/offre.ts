import {Societe} from './societe';
import {Specialite} from './specialite';
import {Langue} from './langue';
import {TypePoste} from './type-poste';

export class Offre {
  id: number;
  titre: string;
  description: string;
  disponibiite: string;
  niveauEtude: string;
  niveauExperience: string;
  dateCreation: Date;
  dateExpiration: Date;
  salaire: string;
  etat: boolean;
  societe: Societe;
  image: any;
  specialites: Specialite[];
  langues: Langue[];
  typePostes: TypePoste[];
}
