<script setup>
import PlaySvg from './svg/PlaySvg.vue'

const props = defineProps({
    movie: Object,
})

const emit = defineEmits('addToFavMovies')



</script>

<template>
    <div class="">
        
        <div class="flex mx-[40px] mt-[40px] py-3 w-[300px] lg:w-[800px] xl:w-[1200px] ">
            <div class="relative w-full">
              <div class="p-3 m-1 flex max-w-screen w-full  shadow-xl">
                <div class="flex gap-3">
                    <img v-if="props.movie.poster" :src="props.movie.poster" class="w-[200px]" alt="">
                    <div class="flex gap-2 flex-col">
                        <div> <strong>{{ props.movie.name }}</strong>  </div>
                        <div>2022,102мин</div>
                        <div class="max-w-[60%] text-sm">{{ props.movie.description }}</div>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <div> <strong>{{ props.movie.rating.toFixed(1) }}</strong>  </div>
                    <button class="lg:w-[150px] relative flex items-center justify-center text-center gap-4 rounded-2xl py-1 px-7 bg-blue-800 text-white opacity-75">
                            <PlaySvg color="black" top="top-[15px]" left="left-4" size="max-w-[15px]"/>
                        <div class="p-2">Cмотреть</div>
                    </button>
                </div>
              </div>
              <button
              
              @click="emit('addToFavMovies')"
              class="absolute right-4 bottom-4 bg-red-300 rounded-xl py-1 px-4">Удалить из избранного</button>
            </div>
        </div>
    </div>
</template>