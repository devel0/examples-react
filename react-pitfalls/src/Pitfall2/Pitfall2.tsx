import { Pitfall2_Correct } from "./Pitfall2_Correct"
import { Pitfall2_Wrong } from "./Pitfall2_Wrong"

export const Pitfall2 = () => {
    return <div>
        <h3>Pitfall2</h3>

        <span className="note">
            <p>
                
            </p>
        </span>

        <div style={{ display: 'flex', gap: '1rem' }}>
            <Pitfall2_Wrong />            
            <Pitfall2_Correct />
        </div>
    </div>
}