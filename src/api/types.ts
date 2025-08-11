export interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  Director: string;
  Actors: string;
  Plot: string;
  imdbRating: string;
  Response?: string;
}

export interface MovieApiResponse {
  data: Movie;
}
