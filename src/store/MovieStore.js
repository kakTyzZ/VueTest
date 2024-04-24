import { defineStore } from "pinia";
import { ref } from "vue"
import { KinopoiskDev, MovieQueryBuilder } from '@openmoviedb/kinopoiskdev_client';

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



    const movies = ref([""])
    const chosenMovie = ref('111')
    const navBarInputState = ref("")

    const getRelatedWithoutQueryBuilderMovies = async () => {
        const query = {
            selectFields: ['id', 'name', 'rating', 'poster', 'year'],

            year: '2020-2023',
            'rating.kp': '4-7',
            'poster.url': '!null',
            sortField: 'rating.kp',
            sortType: '-1',
            page: 1,
            limit: 10,
        };
        try {
            const { data, error, message } = await kp.movie.getByFilters(query);
            movies.value = data.docs
        } catch (error) {
            console.log(error);
        }

    };

    const searchMovies = async () => {
        const queryBuilder = new MovieQueryBuilder();
        const query = queryBuilder
            .query(navBarInputState.value)
            .paginate(1, 3)
            .build();

        const { data, error, message } = await kp.movie.getBySearchQuery(query);

        if (data) {
            movies.value = data.docs

            console.log(movies.value);
        }

        if (error) { console.log(error, message) };
    };



    return { movies, getRelatedWithoutQueryBuilderMovies, searchMovies, navBarInputState, chosenMovie, }
})