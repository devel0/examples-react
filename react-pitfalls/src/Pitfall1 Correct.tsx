import { ReRenderTracker } from "./ReRenderTracker"
import { useGlobalService } from "./GlobalService"

const Pitfall1_Correct_Component1 = () => {
    const some = useGlobalService(x => x.some)
    const increment = useGlobalService(x => x.increment)

    return <div className="basic">
        value:{some}
        <button onClick={increment}>inc</button>
    </div>
}

export const Pitfall1_Correct = () => {
    return <div className="card">
        <b>CORRECT</b>
        <Pitfall1_Correct_Component1 />
        <ReRenderTracker />
    </div>
}
