import { useGlobalService } from "../GlobalService"
import { ReRenderTracker } from "../ReRenderTracker"
import { ValueDisplayer } from "../ValueDisplayer"

export const Pitfall1_Correct = () => {    
    const increment = useGlobalService(x => x.increment)

    return <div className="card">
        <b>CORRECT</b>

        <ReRenderTracker />

        <ValueDisplayer />

        <button onClick={increment}>INC</button>
    </div>
}
