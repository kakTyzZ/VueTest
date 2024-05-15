import { ref } from "vue";
import { defineStore } from "pinia"
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY_FIREBASE


export const useAuthStore = defineStore("auth", () => {

    const userInfo = ref({
        token: "",
        userId: "",
        email: "",
        refreshToken: "",
        expiresIn: ""
    })
    const error = ref(false)
    const loader = ref(false)


    const logout = () => {
        userInfo.value = {
            token: "",
            userId: "",
            email: "",
            refreshToken: "",
            expiresIn: ""
        }
        localStorage.removeItem("userTokens")
    }

    const auth = async (payload, type) => {

        const stringUrl = type === "signup" ? "signUp" : "signInWithPassword"

        loader.value = true
        error.value = ""
        try {

            let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${stringUrl}?key=${apiKey}`, {
                ...payload,
                returnSecureToken: true
            })

            userInfo.value = {
                token: response.data.idToken,
                userId: response.data.localId,
                email: response.data.email,
                refreshToken: response.data.refreshToken,
                expiresIn: response.data.expiresIn
            }
            localStorage.setItem("userTokens", JSON.stringify({
                token: userInfo.value.token, refreshToken: userInfo.value.refreshToken,
                expiresIn: userInfo.value.expiresIn

            }))
        } catch (err) {
            console.log('error', err.response.data.error.message);
            switch (err.response.data.error.message) {

                case "EMAIL_EXISTS":
                    error.value = "Пользователь с таким email уже существует"
                    break;
                case "OperationNotAllowed":
                    error.value = "Недопустимая операция"
                    break;
                case 'EMAIL_NOT_FOUND':
                    error.value = 'Email not found'
                    break;
                case 'INVALID_PASSWORD':
                    error.value = 'Invalid password'
                    break;
                default:
                    error.value = "Неизвестная ошибка"
                    break;
            }
            throw error.value
        } finally {
            loader.value = false
        }
    }

    return { auth, userInfo, error, loader, logout }
})