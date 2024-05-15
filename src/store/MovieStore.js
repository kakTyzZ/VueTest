import { defineStore } from "pinia";
import { ref } from "vue"
import { KinopoiskDev, MovieQueryBuilder } from '@openmoviedb/kinopoiskdev_client';
import axios from 'axios'

import { collection, onSnapshot, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase.js";

const kp = new KinopoiskDev("J3J2BGT-X5547DB-G9Q9AKF-4V254HZ");

/* const favouriteMovies = ref([]) */
/* const collectionRef = collection(db, "favourites") */

/* const queryOnSnapshot = async () => {
    onSnapshot(collectionRef, async (querySnapshot) => {
        const favouritesList = [];
        querySnapshot.forEach((doc) => {
            const favmov = {
                id: doc.id,
                name: doc.data().name,
                rating: doc.data().rating,
            }
            favouritesList.push(favmov)
        });
        favouriteMovies.value = favouritesList
        console.log('favouriteMovies', favouriteMovies.value)
    });
}
queryOnSnapshot() */


/*  const addToFireBase = async () => {
     await addDoc(collectionRef, {
         name: "111",
         rating: 10
     });
 
 } */


/*  const deleteFromFireBase = async (id) => {
     await deleteDoc(doc(collectionRef, id));
 }
 
 
 setTimeout(() => {
     const xxx = favouriteMovies.value[0].id
     deleteFromFireBase(xxx)
 }, 2000) */



/* const updateDoc = (id) => {

    updateDoc(doc(collectionRef, id), {
        capital: true
    });
} */

export const useMovieStore = defineStore("movieStore", () => {
    const apiKey = 'J3J2BGT-X5547DB-G9Q9AKF-4V254HZ'

    const chosenMovie = ref("")
    const navBarInputState = ref("")
    const loading = ref(true)
    const favMovies = ref([])
    const allTheMovies = ref([""])
    const stepOfTheMovies = ref(10)
    const movies = ref(allTheMovies.value.slice(0, stepOfTheMovies.value))

    const addMoreMoviesButton = () => {
        stepOfTheMovies.value += 10
        movies.value = allTheMovies.value.slice(0, stepOfTheMovies.value)
    }
    const getRelatedWithoutQueryBuilderMovies = async () => {
        const query = {
            selectFields: ['id', 'name', 'rating', 'poster', 'year'],
            year: '2010-2023',
            'rating.kp': '4-10',
            'poster.url': '!null',

            sortField: 'rating.kp',
            sortType: '-1',
            page: 1,
            limit: 100,
        };
        try {
            const { data, error, message } = await kp.movie.getByFilters(query);
            allTheMovies.value = data.docs
            movies.value = allTheMovies.value.slice(0, stepOfTheMovies.value)
        } catch (error) {
            console.log(error);
        } finally {
            loading.value = false
        }
    };

    const searchMovies = async () => {
        if (navBarInputState.value === null | "" | undefined) return
        try {
            const queryBuilder = new MovieQueryBuilder();
            const query = queryBuilder
                .query(navBarInputState.value)
                .paginate(1, 1)
                .build();
            const { data, error, message } = await kp.movie.getBySearchQuery(query);
            if (data) {
                movies.value = data.docs
                chosenMovie.value = data.docs[0]
                console.log(chosenMovie.value);
            }
        } catch (error) {
            console.log(error, message)
        } finally {
            loading.value = false
            navBarInputState.value = ""
        }
    };

    const myFetch = async (inputData) => {

        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'X-API-KEY': apiKey },
            params: {
                "genres.name": inputData.genres,
                "rating.kp": inputData.rating,
                year: inputData.year,
                typeNumber: inputData.typeNumber,
                page: 1,
                limit: 100,
            }
        };

        const response = await axios.get('https://api.kinopoisk.dev/v1.4/movie',
            options
        );
        if (response) {
            allTheMovies.value = response.data.docs
            movies.value = allTheMovies.value.slice(0, stepOfTheMovies.value)
            console.log(allTheMovies.value);
        }
    }

    const getTop250 = async () => {

        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'X-API-KEY': apiKey },
            params: { lists: 'top250' }
        };

        const response = await axios.get('https://api.kinopoisk.dev/v1.4/movie',
            options
        );
        if (response) {
            console.log(response.data);
            allTheMovies.value = response.data.docs
            movies.value = allTheMovies.value.slice(0, stepOfTheMovies.value)
        }
    }

    const getTopTVSeries = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'X-API-KEY': apiKey },
            params: { typeNumber: 2, page: 5, limit: 10, "rating.kp": "8-10", year: "1995-2024" },
        };
        const response = await axios.get('https://api.kinopoisk.dev/v1.4/movie',
            options
        );
        if (response) {
            console.log(response.data);
            allTheMovies.value = response.data.docs
            movies.value = allTheMovies.value.slice(0, stepOfTheMovies.value)
        }
    }


    return { movies, getRelatedWithoutQueryBuilderMovies, searchMovies, navBarInputState, loading, chosenMovie, myFetch, favMovies, getTopTVSeries, getTop250, addMoreMoviesButton, stepOfTheMovies }
})