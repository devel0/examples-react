import { ReRenderTracker } from "../ReRenderTracker"
import { ValueDisplayer } from "../ValueDisplayer"
import { useWorkerService } from "./WorkerService"

export const Pitfall2_Wrong = () => {
    useWorkerService() // cause rerender

    return <div className="card">
        <b>WRONG A</b>

        <ReRenderTracker />

        <ValueDisplayer />        
    </div>
}
