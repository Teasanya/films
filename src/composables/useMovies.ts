import { ref } from 'vue';
import { type Movie } from '../api/types';
import { fetchMovieById, generateRandomMovieId } from '../api/moviesApi';

export const useMovies = () => {
  const movie = ref<Movie | null>(null);
  const isLoading = ref(false);
  const error = ref('');

  const fetchRandomMovie = async () => {
    isLoading.value = true;
    error.value = '';

    try {
      const randomId = generateRandomMovieId();
      const response = await fetchMovieById(randomId);

      if (response.data.Response === 'False') {
        throw new Error('Фильм не найден. Попробуйте еще раз!');
      }

      movie.value = response.data;
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : 'Ошибка при загрузке фильма';
      console.error(err);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    movie,
    isLoading,
    error,
    fetchRandomMovie,
  };
};
