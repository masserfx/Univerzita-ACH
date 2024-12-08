import { Course } from './types';
import { uvodDoACHeating } from './courses/uvod';
import { instalaceTepelnychCerpadel } from './courses/instalace';
import { pravidlaNabidek } from './courses/nabidky';
import { eviSystem } from './courses/evi';
import { obchodniProcesBD } from './courses/obchodni-proces-bd';
import { vytapenipanelakuCourse } from './courses/vytapenipanelaku';

export type { Course } from './types';

export const courses: Course[] = [
  uvodDoACHeating,
  instalaceTepelnychCerpadel,
  pravidlaNabidek,
  eviSystem,
  obchodniProcesBD,
  vytapenipanelakuCourse
];