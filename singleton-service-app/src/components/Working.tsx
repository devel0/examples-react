import { useMyGlobalSingleton } from "../services/MyGlobalSingleton"

export const Working = () => {
    const working = useMyGlobalSingleton(x => x.working)

    return <div>        
        {working !== 0 ? <p>Working...</p> : <p>Idle</p>}
    </div>
}
