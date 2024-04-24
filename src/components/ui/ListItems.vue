<script setup>
import {ref,onMounted, watch,computed} from "vue"
import {useMovieStore} from "../../store/MovieStore.js"
import debounce from "lodash.debounce"
import MovieCard from './MovieCard.vue' 


const movieStore = useMovieStore();


function onMovieCardClick(target){
    
    movieStore.chosenMovie = target
    router.push('/detailed')
}



onMounted(async ()=>{
    await movieStore.getRelatedWithoutQueryBuilderMovies()
})

watch(() => movieStore.navBarInputState, debounce(() => {

    
movieStore.searchMovies()


},3000));
/* setTimeout(() => {
    movieStore.searchMovies()
  }, 3000); */
</script>

<template>
    <div class="mx-5 my-[70px]">
        <div class="flex justify-between">
            <div class="text-3xl"> <strong>Новые фильмы</strong> </div>
            <div>
                <button class="px-7 py-2 bg-blue-900 text-white rounded-lg">Смотреть все</button>
            </div>
        </div>

        <div v-if="movieStore.movies" class="grid grid-cols-2 gap-5 my-5 sm:grid-cols-3 lg:grid-cols-5">
            <MovieCard  @click="onMovieCardClick(item)"  v-for="item in movieStore.movies" :name="item.name" :poster="item.poster" :rating="item.rating" :key="item"/>
        </div>
        
        

        
        <div>
            <button class="flex justify-center items-center mx-auto  px-14 py-2 bg-blue-900 text-white rounded-lg">Показать еще</button>
        </div>
    </div>
    
</template>