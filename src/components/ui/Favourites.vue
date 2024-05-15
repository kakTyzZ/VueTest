<script setup>
import { useMovieStore } from "@/store/MovieStore";
import FavCard from './FavCard.vue';

const movieStore = useMovieStore()

const addToFavMovies = (itemToDelete)=>{
    movieStore.favMovies = movieStore.favMovies.filter(item => item !== itemToDelete)
    addToLocalStorage()
}

const addToLocalStorage = ()=>{
    localStorage.setItem('favMovies', JSON.stringify(movieStore.favMovies))
}

</script>
<!-- :addToFavMovies="addToFavMovies(movie)" -->

<template>
    <div>
        <div class="mt-[50px] mx-[40px]">
            <div class="text-3xl mb-3"> <strong>Ваши избранные фильмы</strong> </div>
        </div>
        <div>
            <FavCard
        v-for="movie in movieStore.favMovies"
        :key="movie.id"
        :movie="movie"
        @addToFavMovies="() => addToFavMovies(movie)"
        
        />
        </div>
        
    </div>
</template>