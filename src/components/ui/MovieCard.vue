<script setup>
import RatingSvg from './svg/RatingSvg.vue';


const props = defineProps({
    name: String,
    poster: [Object, String],
    rating: [Object, Number],
})

</script>

<template>
    <div v-if="props.poster !== null" class="max-h-[450px]">
        <router-link to="/detailed">
        <div v-if="rating !== undefined && rating !== null && rating !== ''" class="max-w-[300px] h-full  bg-gray-200 relative border">
        <div v-if="typeof rating === 'number'" class="absolute left-2 top-7 z-1 pl-[18px] bg-blue-800 text-[12px] :sm-text-sm :lg-text-xl text-white rounded-md p-1 w-[25%]">
            <RatingSvg width="w-[12px]" left="left-1" top="top-[10px]" />
            {{ rating.toFixed(1) }}</div>
        <div v-if="rating.kp !== undefined | null" class="absolute left-2 top-7 z-10 pl-[18px] bg-blue-800 text-[12px] :sm-text-sm :lg-text-xl text-white rounded-md p-1 w-[25%]">
            <RatingSvg  width="w-[12px]" left="left-1" top="top-[7px]" />
            {{ rating.kp.toFixed(1) }}</div>
        <div class="h-full">
            <img v-if="typeof poster === 'object'" :src="poster.url" alt="" class="w-full h-full object-fill">
            <img v-if="typeof poster === 'string'" :src="poster" alt="" class="w-full h-full object-fill">
        </div>    
        
        </div>
        </router-link>
        
    </div>
    
</template>