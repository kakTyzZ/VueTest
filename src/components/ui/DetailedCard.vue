<script setup>
import { onMounted } from "vue";
import PlaySvg from "./svg/PlaySvg.vue"
import RatingSvg from "./svg/RatingSvg.vue"
import Arrow from "./svg/Arrow.vue"
import { useMovieStore } from "@/store/MovieStore";
import BookMarkSvg from "./svg/BookMarkSvg.vue";

const movieStore = useMovieStore()

const addToFavMovies = ()=>{
    if(!movieStore.favMovies.includes(movieStore.chosenMovie)){
        movieStore.favMovies.push(movieStore.chosenMovie) 
        
    }else{
        movieStore.favMovies = movieStore.favMovies.filter(item => item !== movieStore.chosenMovie)
        }
    
    addToLocalStorage()
}

const addToLocalStorage = ()=>{
    localStorage.setItem('favMovies', JSON.stringify(movieStore.favMovies))
}



</script>

<template>
    <div>
        <div v-if="movieStore.loading === true" class="text-3xl">Loading</div>
        <div v-else>
                <main class="m-5">
            <div >
                <router-link to="/" class="flex items-center gap-4">
                    <a><Arrow color="black"  /></a>
                <div>Назад</div>
                </router-link>
            </div>

            <div class="flex relative my-5">
                <div class="relative ">
                    <div class=" flex items-center p-1 gap-1 bg-blue-600 max-w-[55px] w-full absolute h-[30px] rounded-xl left-3 top-3 z-10 ">
                         <RatingSvg color="white"  width="max-w-[17px]" />
                         <div  class="text-sm text-white ml-5">{{ movieStore.chosenMovie.rating }}</div>
                    </div>
                    <div  class="w-[300px] border-2 h-[95%]">
                        <img v-if="(typeof movieStore.chosenMovie.poster === 'string')" :src="movieStore.chosenMovie.poster" alt="">
                        <img v-else src="" alt="" class="w-full bg-slate-100 h-full">
                    </div>
                    
                </div>

                <div class="ml-7">
                    <div class="text-2xl mb-3"> <strong>{{ movieStore.chosenMovie.name }}</strong> </div>
                    <div class="opacity-50 mb-3">{{ movieStore.chosenMovie.name }}</div>
                    <div class="gap-3 flex ">
                        <button class="relative rounded-2xl py-1 px-7 bg-blue-800 text-white">
                            Смотреть
                            <PlaySvg color="white" top="top-[10px]" left="left-3"/>
                        </button>
                        <div>
                            <button v-if="!movieStore.favMovies.includes(movieStore.chosenMovie)" @click="addToFavMovies" class="relative rounded-2xl py-1 px-7 bg-gray-300 ">
                            Буду смотреть
                            <BookMarkSvg color="black" top="top-[8px]" left="left-3"/>
                        </button>
                            <button v-else @click="addToFavMovies" class="relative rounded-2xl py-1 px-7 bg-blue-300 ">
                            Убрать из избранного
                            <BookMarkSvg color="black" top="top-[8px]" left="left-3"/>
                        </button>
                        </div>
                        
                    </div>
                    <div>
                        <div class="mt-6"><strong>О фильме</strong></div>
                        <div class="mt-3 flex flex-col gap-[10px] lg:gap-[30px] text-sm">
                          <div class="text-xl flex  ">
                            <div class="w-[150px]"> <strong>Страна</strong></div>
                            <div class="" v-for="country in movieStore.chosenMovie.countries" :key="country">{{ country }}</div>
                          </div>
                          <div class="text-xl flex ">
                            <div class="w-[150px]"> <strong>Жанры</strong></div>
                            <div class="flex" v-for="genre in movieStore.chosenMovie.genres" :key="genre">
                                
                                    {{ genre }}
                                   
                            </div>
                          </div>
                          <div class="text-xl flex ">
                            <div class="w-[150px]"> <strong>Год</strong></div>
                            <div >{{ movieStore.chosenMovie.year }}</div>
                          </div>
                          <div class="text-xl flex flex-col gap-2 justify-between w-full">
                            <div >  <strong>Описание</strong> </div>
                            <div class="text-md" >{{ movieStore.chosenMovie.description }}</div>
                          </div>
                         
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    </div>
    
</template>

<style scoped>

</style>