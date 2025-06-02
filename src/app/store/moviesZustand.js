import { create } from "zustand"
import { persist } from "zustand/middleware"

const movieStore = (set) => ({
    history: [],
    addHistory: (movie) => {
        set((state) => ({
            history: [movie,...state.history]
        }))
    },
    watchlist: [],
    addToWatchlist: (movie) => {
        set((state) => ({
            watchlist: [...state.watchlist,movie]
        }))
    },
})
const useMovieStore = create(
    persist(movieStore,{
        name: "history"
    })
)
export default useMovieStore;