import { Item, User } from './types';

export async function getItem (id: number): Promise<Item> {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  return res.json();
}

/** Get 500 top story IDs */
export async function getTopStoryIds (): Promise<number[]> {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
  return res.json();
}

/** Get 500 new story IDs */
export async function getNewStoryIds (): Promise<number[]> {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json');
  return res.json();
}

/** Get 500 best story IDs */
export async function getBestStoryIds (): Promise<number[]> {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/beststories.json');
  return res.json();
}

/** Get 200 ask IDs */
export async function getAskStoryIds (): Promise<number[]> {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/askstories.json');
  return res.json();
}

/** Get 200 job IDs */
export async function getJobStoryIds (): Promise<number[]> {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json');
  return res.json();
}

/** Get 200 show IDs */
export async function getShowStoryIds (): Promise<number[]> {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/showstories.json');
  return res.json();
}

export async function getUser (id: string): Promise<User> {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json`);
  return res.json();
}
