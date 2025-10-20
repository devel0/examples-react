import { ReRenderTracker } from "../ReRenderTracker"
import { useGlobalService } from "../GlobalService"
import { ValueDisplayer } from "../ValueDisplayer"

export const Pitfall1_Wrong = () => {
    const value = useGlobalService(x => x.value) // rerender on change even not directly used
    const increment = useGlobalService(x => x.increment)

    return <div className="card">
        <b>WRONG A</b>

        <ReRenderTracker />

        <ValueDisplayer />

        <button onClick={increment}>INC</button>
    </div>
}
