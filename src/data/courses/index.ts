import { Course } from '../types';
import { eviSystem } from './evi';
import { instalaceTepelnychCerpadel } from './instalace';
import { pravidlaNabidek } from './nabidky';
import { obchodniProcesBD } from './obchodni-proces-bd';
import { uvodDoACHeating } from './uvod';
import { vytapenipanelakuCourse } from './vytapenipanelaku';
import { zakazkyCourse } from './zakazky';

export const allCourses: Course[] = [
  eviSystem,
  instalaceTepelnychCerpadel,
  pravidlaNabidek,
  obchodniProcesBD,
  uvodDoACHeating,
  vytapenipanelakuCourse,
  zakazkyCourse
]; 