import { Item } from './types';

export async function getItem (id: number): Promise<Item> {
  return await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((res) => res.json());
}

export async function getTopStoryIds (): Promise<number[]> {
  return await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then((res) => res.json());
}

export async function getNewStoryIds (): Promise<number[]> {
  return await fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
    .then((res) => res.json());
}

export async function getBestStoryIds (): Promise<number[]> {
  return await fetch('https://hacker-news.firebaseio.com/v0/beststories.json')
    .then((res) => res.json());
}

export async function getAskStoryIds (): Promise<number[]> {
  return await fetch('https://hacker-news.firebaseio.com/v0/askstories.json')
    .then((res) => res.json());
}

export async function getJobStoryIds (): Promise<number[]> {
  return await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
    .then((res) => res.json());
}

export async function getShowStoryIds (): Promise<number[]> {
  return await fetch('https://hacker-news.firebaseio.com/v0/showstories.json')
    .then((res) => res.json());
}
