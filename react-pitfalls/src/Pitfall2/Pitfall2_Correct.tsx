import { ReRenderTracker } from "../ReRenderTracker"
import { ValueDisplayer } from "../ValueDisplayer"
import { useWorkerService } from "./WorkerService"

const LogicController = () => {
    useWorkerService()

    return <></>
}

export const Pitfall2_Correct = () => {
    return <div className="card">
        <b>CORRECT</b>

        {/* do not cause rerender because in a child */}
        <LogicController />

        <ReRenderTracker />

        <ValueDisplayer />
    </div>
}
