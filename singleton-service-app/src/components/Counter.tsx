import { useMyGlobalSingleton } from "../services/MyGlobalSingleton"

export const Counter = () => {
    const cnt = useMyGlobalSingleton(x => x.cnt)
    const increment = useMyGlobalSingleton(x => x.increment)
    const incrementAsync = useMyGlobalSingleton(x => x.incrementAsync)

    return <div>
        <div>
            count = {cnt}
        </div>

        <button onClick={() => {
            increment()
        }}>
            inc
        </button>

        <button onClick={async () => {
            await incrementAsync()
        }}>
            async inc
        </button>
    </div>
}