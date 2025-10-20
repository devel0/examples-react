import { Pitfall1_Correct } from "./Pitfall1_Correct"
import { Pitfall1_Wrong } from "./Pitfall1_Wrong"

export const Pitfall1 = () => {
    return <div>
        <h3>Pitfall1</h3>

        <span className="note">
            <p>                
            </p>
        </span>

        <div style={{ display: 'flex', gap: '1rem' }}>
            <Pitfall1_Wrong />            
            <Pitfall1_Correct />
        </div>
    </div>
}