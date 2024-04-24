<script setup>
import {ref,computed, watch} from "vue"
import {useAuthStore} from "../../store/Auth.js"
import {useRouter} from "vue-router"

const email = ref()
const password = ref()

const authStore = useAuthStore()
const router = useRouter()

const err = computed(()=>authStore.error)

const signup = async()=>{
    await authStore.auth({email:email.value, password:password.value}, "signin")
    router.push("/")
}



watch(() => authStore.error, () => {
    console.log("err",err);
    
  });
</script>

<template>
    <div>
        <div class="flex flex-col justify-center items-center h-screen max-w-[500px]  mx-auto">
           
            <form @submit.prevent action="" class="max-w-[350px] w-full gap-3 flex flex-col">
             <div v-if="err" class="text-red-500 w-full p-3 border rounded text-2xl shadow-2xl " >{{ err }}</div>
            <div >
                <strong>Вход</strong>
            </div>
                <div>
                    <div>  <strong> Email</strong></div>
                    <input v-model="email" class="border-2 rounded max-w-[350px] w-full p-2" placeholder="Введите email" type="email">
                </div>
                <div>
                    <div> <strong>Пароль</strong> </div>
                    <input v-model="password" class="border-2 rounded max-w-[350px] w-full p-2" placeholder="Введите пароль" type="password">
                </div>

                <div v-if="authStore.loader" class="w-full p-3 bg-slate-200 shadow-xl">Загрузка...</div>
                
                    <button @click="signup"  class="bg-blue-800 w-full text-white rounded py-2">Войти</button>
                    
                
                

                

                <div >
                    <div>  нет аккаунта? </div>
                    <button class="underline bg-blue-50" href="">
                       <router-link to="/login">Зарегистрироваться</router-link> 
                    </button>
                    
                </div>
            </form>
            

            
        </div>

    </div>
</template>