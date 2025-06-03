import { create } from "zustand"
import { persist } from "zustand/middleware"

const movieStore = (set) => ({
    history: [],
    addHistory: (movie) => {
        set((state) => {
            const exist = state.history.filter((ele) => ele.id !== movie.id)
            return {
                history : [movie,...exist]
            }
            
        })
    },
    watchlist: [],
    addToWatchlist: (movie) => {
        set((state) => {
            const exist = state.watchlist.find((ele) => ele.id === movie.id)
            if(!exist){
                return  { watchlist: [...state.watchlist,movie] }
            }
            return {}
        })
    },
})
const useMovieStore = create(
    persist(movieStore,{
        name: "movieStore",
    })
)
export default useMovieStore;