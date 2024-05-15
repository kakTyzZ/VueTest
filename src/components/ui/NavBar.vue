<script setup>
import {RouterLink} from "vue-router"
import {useMovieStore} from "../../store/MovieStore.js"
import {useAuthStore} from "../../store/Auth.js"
import { useRouter } from "vue-router";
import BurgerClose from "./svg/BurgerClose.vue";
import BurgerOpen from "./svg/BurgerOpen.vue";
import SearchSvg from "./svg/SearchSvg.vue";
import { ref } from "vue";

const burgerState = ref("")
const router = useRouter()
const movieStore = useMovieStore();
const authStore = useAuthStore()

/* const burgerStateControl= ()=> {
     burgerState.value = !burgerState.value 
    burgerClass.value = burgerClass.value === "block" ? "hidden" : 'block'
    if(burgerClass.value === "block"){
        setTimeout(()=> {
            burgerClass.value = 'hidden'
            burgerState.value = !burgerState.value
        },2000)
    }
} */

const logout = ()=>{
    authStore.logout()
    router.push("/")
}



const burgerDelay = ()=>{
    setTimeout(()=> {
        burgerState.value = false
    },500)
    
}
const onSearchButtonClick = () => {
    movieStore.searchMovies()
}

const onTop250ButtonClick = () => {
    movieStore.getTop250()
}
const onTopTVSeriesButtonClick = () => {
    movieStore.getTopTVSeries()
}

</script>

<template>
    <header >
        <div class="flex bg-black max-w-screen text-white text-center items-center justify-between p-5 max-h-[65px]">
        <div  class="flex gap-2 items-center justify-center text-center">
            
            <div class="">
                <div v-if="!burgerState" @mouseover="burgerState = true" @mouseleave="burgerDelay"><BurgerClose/>    </div>
                <div v-show="burgerState" ><BurgerOpen/></div>
                <div class="absolute transition-all ease-in duration-500   left-0 text-2xl bg-black/70 max-w-[200px] w-full rounded max-h-[500px] z-20 h-full" v-show="burgerState === true" @mouseover="burgerState = true" @mouseleave="burgerDelay">
                    <ul   class="flex flex-col gap-5 mt-5 justify-start items-start ml-5">
                        <RouterLink to="/">Home</RouterLink>
                        <RouterLink to="/favourites">Favourites</RouterLink>
                        <RouterLink to="/login">Login</RouterLink>
                        <RouterLink to="/filters">Extended Search</RouterLink>
                        <button @click="onTop250ButtonClick" >Top 250 Movies</button>
                        <button @click="onTopTVSeriesButtonClick" >Top TV-Series</button>
                    </ul>
                </div>
                
            </div>
            
        </div>
        

        <div class="flex gap-2 items-center max-w-[550px] w-full">
            <router-link to="/">
                <div ><span class="text-3xl text-blue-500">Movie</span><span class="text-3xl text-yellow-500">Search</span></div>
            </router-link>
            
            <input v-model="movieStore.navBarInputState" class="bg-gray-700 rounded pl-4 w-full" placeholder="Поиск..." type="text">
            <div>
                <button
                @click="onSearchButtonClick"
                ><SearchSvg/></button>
                </div>
        </div>

        <div v-if="authStore.userInfo.token !== ''" class="text-xl">
            <button @click.prevent="logout" >Выйти</button>
        </div>
        <div v-else class="text-xl">
            <router-link to="/signin">Войти</router-link>
        </div>
        </div>
       
    </header>
</template>