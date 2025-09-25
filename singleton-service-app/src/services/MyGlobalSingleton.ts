import { create } from "zustand"
import { delay } from "../utils"

export interface MyGlobal {
    working: number,
    cnt: number,

    increment: () => void,
    incrementAsync: () => Promise<void>
}

export const useMyGlobalSingleton = create<MyGlobal>(set => {
    const increment = () => set(state => ({ cnt: state.cnt + 1 }))

    return ({
        working: 0,
        cnt: 0,

        increment,        
        incrementAsync: async () => {
            set(state => ({ working: state.working + 1 }))
            await delay(2000)
            increment()
            set(state => ({ working: state.working - 1 }))
        }
    })
})
