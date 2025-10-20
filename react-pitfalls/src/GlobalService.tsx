import { create } from "zustand"

interface GlobalState {
    value: number
    increment: () => void
    unrelated: number
}

export const useGlobalService = create<GlobalState>(set => {
    return ({
        value: 0,
        increment: () => {
            set(state => ({ value: state.value + 1 }))
        },
        unrelated: 0
    })
})
