import { Item, User } from './types';

export async function getItem (id: number): Promise<Item> {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  return res.json();
}

export async function getTopStoryIds (): Promise<number[]> {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
  return res.json();
}

export async function getNewStoryIds (): Promise<number[]> {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json');
  return res.json();
}

export async function getBestStoryIds (): Promise<number[]> {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/beststories.json');
  return res.json();
}

export async function getAskStoryIds (): Promise<number[]> {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/askstories.json');
  return res.json();
}

export async function getJobStoryIds (): Promise<number[]> {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json');
  return res.json();
}

export async function getShowStoryIds (): Promise<number[]> {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/showstories.json');
  return res.json();
}

export async function getUser (id: string): Promise<User> {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json`);
  return res.json();
}
