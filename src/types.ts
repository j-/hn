export type ItemType = 'job' | 'story' | 'comment' | 'poll' | 'pollopt';

export interface Item {
  id: string;
  type: ItemType;
}

export interface Story extends Item {
  by: string;
  descendants: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: 'story';
  url: string;
}

export interface Comment extends Item {
  by: string;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: 'comment';
}

export interface Job extends Item {
  by: string;
  score: number;
  text: string;
  time: number;
  title: string;
  type: 'job';
  url: string;
}

export interface Poll extends Item {
  by: string;
  descendants: number;
  kids: number[];
  parts: number[];
  score: number;
  text: string;
  time: number;
  title: string;
  type: 'poll';
}

export interface Pollopt extends Item {
  by: string;
  poll: number;
  score: number;
  text: string;
  time: number;
  type: 'pollopt';
}

export interface User {
  id: string;
  delay?: number;
  created: number;
  karma: number;
  about?: string;
  submitted: number[];
}
