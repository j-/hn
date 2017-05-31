export type ItemType = 'job' | 'story' | 'comment' | 'poll' | 'pollopt';

export interface Item {
  id: string;
  type: ItemType;
}

export interface Story extends Item {
  by: string;
  descendants: number;
  kids?: number[];
  score: number;
  time: number;
  title: string;
  type: 'story';
  url: string;
}

export function itemIsStory (item: Item): item is Story {
  return item.type === 'story';
}

export interface Comment extends Item {
  by: string;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: 'comment';
}

export function itemIsComment (item: Item): item is Comment {
  return item.type === 'comment';
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

export function itemIsJob (item: Item): item is Job {
  return item.type === 'job';
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

export function itemIsPoll (item: Item): item is Poll {
  return item.type === 'poll';
}

export interface Pollopt extends Item {
  by: string;
  poll: number;
  score: number;
  text: string;
  time: number;
  type: 'pollopt';
}

export function itemIsPollopt (item: Item): item is Pollopt {
  return item.type === 'pollopt';
}

export interface User {
  id: string;
  delay?: number;
  created: number;
  karma: number;
  about?: string;
  submitted: number[];
}
