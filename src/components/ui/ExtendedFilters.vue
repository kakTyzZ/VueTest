<script setup>
import {ref,watch,onMounted} from "vue"
import myInput from "../elements/myInput.vue"

import { useMovieStore } from "@/store/MovieStore";

const movieStore = useMovieStore()



const filters = ref({
    genres:[],
    
    year:'2024',
    typeNumber:"1",
    rating:'7-10'
})

/* onMounted(()=>{
    filters.value = {
    genres:'',
    countries:'',
    year:'',
    name:'',
    rating:''
    }
}) */

function onButtonClick(){
    movieStore.myFetch(filters.value)
}



watch(
  () => filters.value,
  (state, prevState) => {
    console.log(state);
  },{deep:true}
)
</script>


<template>
    <div class="flex justify-center max-w-screen w-full  gap-2 my-[50px]">
        <form
        class="flex flex-col gap-2 w-full max-w-[500px] items-between justify-between shadow-xl p-2"
        >
            <h1 class="text-3xl"> <strong>Расширенный поиск</strong> </h1>
            <div class="flex justify-between rounded ">
                <div>Выберите тип</div>
                <select name="" id="" v-model="filters.typeNumber" class="px-2 py-1">
                    <option value="1">Фильм</option>
                    <option value="2">Сериал</option>
                </select>
            </div>
            <div class="flex gap-2 py-2 justify-between items-center">
                <div>Выберите жанры</div>
                <div class="flex gap-2 ">
                <label for="комедия">комедия</label>
                <input type="checkbox" value="комедия" id="комедия" v-model="filters.genres"/>
                <label for="ужасы">ужасы</label>
                <input type="checkbox" value="ужасы" v-model="filters.genres">
                <label for="боевик">боевик</label>
                <input type="checkbox" value="боевик" v-model="filters.genres">
                <label for="драма">драма</label>
                <input type="checkbox" value="драма" v-model="filters.genres"> 
                </div>
                
            </div>
            <div>
                <myInput label="Год " v-model="filters.year"
                />
            </div>
            <div>
                <myInput label="Рейтинг " v-model="filters.rating"
                />
            </div>
            <div class="flex w-full  justify-center">
                <router-link to="/">
                    <button
                @click="onButtonClick"
                 class="px-7 py-2 bg-blue-900 text-white rounded-lg">Найти</button>
                </router-link>
                
            </div>
        </form>
            
    </div>
</template>