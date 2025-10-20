import { ReRenderTracker } from "./ReRenderTracker"
import { useGlobalService } from "./GlobalService"

export const Pitfall1_WrongA = () => {
    const some = useGlobalService(x => x.some)
    const increment = useGlobalService(x => x.increment)

    return <div className="card">
        <b>WRONG A</b>
        value:{some}
        <button onClick={increment}>inc</button>

        {/* this component will re-render because its a child of Pitfall1_WrongA component itself
        and the use of `some` variable cause re-render. */}
        
        <ReRenderTracker />
    </div>
}
