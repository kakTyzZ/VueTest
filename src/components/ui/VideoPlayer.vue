<script setup>
import Arrow from "./svg/Arrow.vue";
</script>


<template>
    <div>
        <header >
        <div class="flex bg-black max-w-screen text-white text-center items-center justify-between p-5 max-h-[65px]">
        <div class="flex gap-2 items-center justify-center text-center">
        <div class="flex gap-2 items-center mr-5">
            <div><Arrow color="white" rotate="rotate-180"/></div>
            <div>Бэтмэн</div>
        </div>   
            
        <div ><span class="text-3xl text-blue-500">Movie</span><span class="text-3xl text-yellow-500">Search</span></div>
        </div>
        </div>
       
    </header>

    <main class="flex w-screen mx-[50px] max-h-[500px]">
        <video class="max-w-[900px]" src="/a1.mp4" controls poster="/spider.webp" > </video>
    </main>
    </div>
</template>