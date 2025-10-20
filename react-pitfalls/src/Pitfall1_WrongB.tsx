import { ReRenderTracker } from "./ReRenderTracker"
import { useGlobalService } from "./GlobalService"

export const Pitfall1_WrongB = () => {
    useGlobalService(x => x.some)
    const increment = useGlobalService(x => x.increment)

    return <div className="card">
        <b>WRONG B</b>
        no value ref in div
        <button onClick={increment}>inc</button>

        {/* this component will re-render because its a child of Pitfall1_WrongB component itself
        and the use `some` variable cause re-render, even not referenced in returned div. */}
        
        <ReRenderTracker />
    </div>
}
