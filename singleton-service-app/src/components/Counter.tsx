import { useMyGlobalSingleton } from "../services/MyGlobalSingleton"

export const Counter = () => {
    const myGlobal = useMyGlobalSingleton()

    return <div>
        <div>
            count = {myGlobal.cnt}
        </div>

        <button onClick={() => {
            myGlobal.increment()
        }}>
            inc
        </button>

        <button onClick={async () => {
            await myGlobal.incrementAsync()
        }}>
            async inc
        </button>
    </div>
}