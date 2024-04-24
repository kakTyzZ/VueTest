<script setup>

import PlaySvg from "./svg/PlaySvg.vue"
import RatingSvg from "./svg/RatingSvg.vue"
import Arrow from "./svg/Arrow.vue"
import { useMovieStore } from "@/store/MovieStore";

const movieStore = useMovieStore()



</script>

<template>
    <div>
        

        <main class="m-5">
            <div class="flex items-center gap-4">
                <a><Arrow color="black"  /></a>
                <div>Назад</div>
            </div>

            <div class="flex relative my-5">
                <div class="relative ">
                    <div class=" flex items-center p-1 gap-1 bg-blue-600 max-w-[50px] w-full absolute h-[30px] rounded-xl left-3 top-3 z-10 ">
                         <RatingSvg color="white"  width="max-w-[15px]" />
                         <div class="text-sm text-white">7.9</div>
                    </div>
                   
                    <div class="w-[300px]"><img src="/spider.webp" alt=""></div>
                </div>

                <div class="ml-7">
                    <div class="text-2xl mb-3"> <strong>{{ movieStore.name }}</strong> </div>
                    <div class="opacity-50 mb-3">{{ movieStore.name }}</div>
                    <div class="gap-3 flex ">
                        <button class="relative rounded-2xl py-1 px-7 bg-blue-800 text-white">
                            Смотреть
                            <PlaySvg color="white" top="top-[10px]" left="left-3"/>
                        </button>
                        <button class="relative rounded-2xl py-1 px-7 bg-gray-300 ">
                            Буду смотреть
                            <PlaySvg color="black" top="top-[10px]" left="left-3"/>
                        </button>

                    </div>

                    <div>
                        <div class="mt-6"><strong>О фильме</strong></div>
                        <div class="mt-3 flex gap-[50px] lg:gap-[100px] text-sm">
                           <div class="flex flex-col gap-3">
                            <div>Страна</div>
                            <div>Жанр</div>
                            <div>Слоган</div>
                            <div>Возраст</div>
                            <div>Бюджет</div>
                           </div>
                           <div class="flex flex-col gap-3">
                            <div>США</div>
                            <div>драма,криминал,детектив,боевик</div>
                            <div>Unmask The Truth</div>
                            <div>16+</div>
                            <div>$300.000.000</div>
                           </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>