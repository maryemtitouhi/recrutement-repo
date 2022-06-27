import {Cv} from './cv';

export class Document {
  id: number;
  libelle: string;
  typeDocument: string;
  fichier: any;
  contentType: string;
  cv: Cv;

}
