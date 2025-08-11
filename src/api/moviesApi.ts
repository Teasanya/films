import axios, { type AxiosInstance } from 'axios';
import { type MovieApiResponse } from './types';

const API_KEY = 'YOUR_API_KEY'; // Лучше хранить в .env

const movieApi: AxiosInstance = axios.create({
  baseURL: 'https://www.omdbapi.com/',
  params: {
    apikey: import.meta.env.VITE_OMDB_API_KEY,
  },
});

export const fetchMovieById = async (id: string): Promise<MovieApiResponse> => {
  return await movieApi.get('', { params: { i: id } });
};

export const generateRandomMovieId = (): string => {
  return 'tt' + Math.floor(1000000 + Math.random() * 9000000);
};
