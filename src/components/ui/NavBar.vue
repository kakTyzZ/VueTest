<script setup>
import {RouterLink} from "vue-router"
import {useMovieStore} from "../../store/MovieStore.js"
import {useAuthStore} from "../../store/Auth.js"

import BurgerClose from "./svg/BurgerClose.vue";
import BurgerOpen from "./svg/BurgerOpen.vue";
import SearchSvg from "./svg/SearchSvg.vue";
import { ref, watch } from "vue";

const burgerState = ref('true')
const burgerClass = ref('opacity-0')

const movieStore = useMovieStore();
const authStore = useAuthStore()

const burgerStateControl= ()=> {
     burgerState.value = !burgerState.value 
    burgerClass.value = burgerClass.value === "opacity-100" ? "opacity-0" : 'opacity-100'
    if(burgerClass.value === "opacity-100"){
        setTimeout(()=> {
            burgerClass.value = 'opacity-0'
        },2000)
    }
}



watch(() => movieStore.navBarInputState, () => {
    console.log(movieStore.navBarInputState);
    
  });

</script>

<template>
    <header >
        <div class="flex bg-black max-w-screen text-white text-center items-center justify-between p-5 max-h-[65px]">
        <div  class="flex gap-2 items-center justify-center text-center">
            
            <div class="">
                <div v-if="burgerState"  @click="burgerStateControl"><BurgerClose/>    </div>
                <div v-else @click="burgerStateControl"><BurgerOpen/></div>
                <div class="absolute transition-all ease-in duration-500   left-0 text-2xl bg-black/70 max-w-[200px] w-full rounded max-h-[500px] z-20 h-full" :class="burgerClass" >
                    <ul   class="flex flex-col gap-5 mt-5 justify-start items-start ml-5">
                        <RouterLink to="/">Home</RouterLink>
                        <RouterLink to="/filter">Filters</RouterLink>
                        <RouterLink to="/login">Login</RouterLink>
                        <RouterLink to="/detailed">Detailed Card</RouterLink>
                        <RouterLink to="/video">Video</RouterLink>
                    </ul>
                    </div>
                
            </div>
            
        </div>
        

        <div class="flex gap-2 items-center max-w-[550px] w-full">
            <div ><span class="text-3xl text-blue-500">Movie</span><span class="text-3xl text-yellow-500">Search</span></div>
            <input v-model="movieStore.navBarInputState" class="bg-gray-700 rounded pl-4 w-full" placeholder="Поиск..." type="text">
            <div>
                <button
                
                ><SearchSvg/></button>
                </div>
        </div>

        <div v-if="authStore.userInfo.token !== ''" class="text-xl">
            <div>{{authStore.userInfo.email}}</div>
        </div>
        <div v-else class="text-xl">
            <router-link to="/signin">Войти</router-link>
        </div>
        </div>
       
    </header>
</template>