import { Pitfall1_Correct } from "./Pitfall1 Correct"
import { Pitfall1_WrongA } from "./Pitfall1_WrongA"
import { Pitfall1_WrongB } from "./Pitfall1_WrongB"

export const Pitfall1 = () => {
    return <div>
        <h3>Pitfall1</h3>

        <div style={{ display: 'flex', gap: '1rem' }}>
            <Pitfall1_WrongA />
            <Pitfall1_WrongB />
            <Pitfall1_Correct />
        </div>
    </div>
}