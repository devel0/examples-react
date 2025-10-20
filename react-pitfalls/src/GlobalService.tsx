import { create } from "zustand"

interface GlobalState {
    some: number
    increment: () => void
}

export const useGlobalService = create<GlobalState>(set => {
    return ({
        some: 0,
        increment: () => {
            set(state => ({ some: state.some + 1 }))
        }
    })
})
