<script setup>

import Arrow from './svg/Arrow.vue';
import BookMarkSvg from './svg/BookMarkSvg.vue'; 

import {ref} from "vue"

const minRating = ref(0)
const maxRating = ref(0)

const minYear = ref(1950)
const maxYear = ref(2024)




</script>

<template>
    <div>
      

        <div class="mt-[50px] mx-[40px]">
            <div class="text-3xl mb-3"> <strong>Все фильмы</strong> </div>
            <div>Фильмы всего мира</div>
        </div>

        <div class="flex mx-[40px] mt-[40px] py-3">
            <div class="max-w-[250px] w-full ">
                <div class="flex justify-between mb-4">
                    <div><strong>Рейтинг</strong></div>
                    <div><Arrow rotate="rotate-[-90deg]" color="black"/></div>
                </div>

                <div class="flex gap-2 py-3">
                    <input type="number" class="border-2 flex-1 px-3"  min="0" max="10" v-model="minRating">
                    <input type="number" class="border-2 flex-1 px-3" v-model="maxRating" min="0" max="10">
                    
                </div>
                <div>
                    <input class="w-[95%] mx-auto flex mt-2 py-2" type="range"  v-model="maxRating" min="0" max="10">
                </div>
                <div class="flex justify-between mb-4">
                    <div><strong>Год производства</strong></div>
                    <div><Arrow rotate="rotate-[-90deg]" color="black"/></div>
                </div>

                <div class="flex gap-2 py-3">
                    <input type="number" class="border-2 w-[50%]  px-3"  min="1950" v-model="minYear">
                    <input type="number" class="border-2  w-[50%] px-3" max="2024" v-model="maxYear" >
                    
                </div>
                <div>
                    <input class="w-[95%] mx-auto flex mt-2 py-2" type="range" min="1950" max="2024"  v-model="maxYear" >
                </div>
            </div>

            <div class="">
              <div class="p-3 m-1 flex max-w-screen w-full  shadow-xl">
                <div class="flex gap-3">
                    <img src="/spider.webp" class="w-[50px]" alt="">
                    <div class="flex gap-2 flex-col">
                        <div> <strong>Баста.СуперИгра</strong>  </div>
                        <div>2022,102мин</div>
                        <div class="max-w-[60%] text-xs">Как баста подходит к работе Как баста подходит к работе Как баста подходит к работе Как баста подходит к работе Как баста подходит к работе Как баста подходит к работе</div>
                    </div>
                </div>

                <div class="flex items-center gap-3 ">
                    <div> <strong>6.8</strong>  </div>
                    <div class="lg:w-[150px] flex items-center gap-1 border border-black rounded px-3 opacity-75">
                        <div><BookMarkSvg/></div>
                        <div class="  p-2 text-xs ">Буду смотреть</div>
                    </div>
                </div>
              </div>
            
            </div>
            
        </div>
    </div>
</template>