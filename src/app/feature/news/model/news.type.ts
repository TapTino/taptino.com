import {Section} from './section.type';

export interface News {
  title: string;
  subtitle: string;
  surtitle: string;
  preview: string;
  image: string;
  date: [number, number, number];
  sections: Section[];
}
