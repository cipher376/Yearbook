

export const DEGREE_TYPES = [
  'PhD', 'MSc', 'BSc', 'Deploma', 'Certificate',
];

export enum DegreeType {
  PHD = 'PhD',
  MSC = 'MSc',
  BSC = 'BSc',
  DEPLOMA = 'Deploma',
  CERTIFICATE = 'Certificate',
}

export interface DegreeInterface {
  id: number;
  name: string;
  type: DegreeType;
  programme: string;
  cgpa?: number;
}

export class Degree {
  id: number;
  name: string;
  type: DegreeType;
  programme: string;
  cgpa?: number;
  constructor(private data?: DegreeInterface) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.type = data.type;
      this.programme = data.programme;
      this.cgpa = data.cgpa;
    }
  }
}
