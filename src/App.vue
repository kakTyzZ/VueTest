<script setup>
import NavBar from './components/ui/NavBar.vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from './store/Auth';

const authStore = useAuthStore()

const checkUser = ()=>{
  const tokens = JSON.parse(localStorage.getItem("userTokens"))
  if(tokens){
    authStore.userInfo.token = tokens.token
    authStore.userInfo.refreshToken = tokens.refreshToken
    authStore.userInfo.expiresIn = tokens.expiresIn
  }
}

checkUser()
</script>

<template >
  <div class="">
    <NavBar/>
    <RouterView />
  </div>
    

    
</template>