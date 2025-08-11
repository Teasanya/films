<template>
  <div class="movie-app">
    <h1>🎬 Случайный фильм</h1>

    <button @click="fetchRandomMovie" :disabled="isLoading">
      {{ isLoading ? 'Загрузка...' : 'Получить фильм' }}
    </button>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="movie" class="movie-card">
      <img
        v-if="movie.Poster !== 'N/A'"
        :src="movie.Poster"
        :alt="movie.Title"
      />
      <div class="movie-info">
        <h2>{{ movie.Title }} ({{ movie.Year }})</h2>
        <p><strong>Режиссер:</strong> {{ movie.Director }}</p>
        <p><strong>Актеры:</strong> {{ movie.Actors }}</p>
        <p><strong>Рейтинг:</strong> {{ movie.imdbRating }} (IMDb)</p>
        <p>{{ movie.Plot }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMovies } from '../composables/useMovies';

const { movie, isLoading, error, fetchRandomMovie } = useMovies();
</script>

<style scoped>
.movie-app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
}

button:disabled {
  background: #ccc;
}

.movie-card {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  text-align: left;
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
}

.movie-card img {
  max-width: 300px;
  border-radius: 4px;
}

.movie-info {
  flex: 1;
}

.error {
  color: red;
  margin: 10px 0;
}
</style>
