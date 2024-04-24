<script setup>
import RatingSvg from './svg/RatingSvg.vue';


const props = defineProps({
    name: String,
    poster: [Object, String],
    rating: [Object, Number],
})

console.log(props);
</script>

<template>
    <div v-if="props.poster !== null">
        <div v-if="rating !== undefined && rating !== null && rating !== ''" class="max-w-[300px]   bg-gray-200 relative border">
        <div v-if="typeof rating === 'number'" class="absolute left-2 top-4 z-10 pl-[18px] bg-blue-800 text-[12px] :sm-text-sm :lg-text-xl text-white rounded-md p-1 w-[25%]">
            <RatingSvg width="w-[12px]" left="left-1" top="top-[10px]" />
            {{ rating.toFixed(1) }}</div>
        <div v-if="rating !== undefined" class="absolute left-2 top-4 z-10 pl-[18px] bg-blue-800 text-[12px] :sm-text-sm :lg-text-xl text-white rounded-md p-1 w-[25%]">
            <RatingSvg  width="w-[12px]" left="left-1" top="top-[10px]" />
            {{ rating.kp }}</div>

        <img v-if="typeof poster === 'object'" :src="poster.url" alt="" class="w-full object-fill">
        <img v-if="typeof poster === 'string'" :src="poster" alt="" class="w-full object-fill">
        </div>
    </div>
    
</template>