import pkmnegg from "../shared/images/pokemon-egg.png"
import './EggDex.css'

export const EggDex = () => {
    return(
        <div>
            <h1>This is the EggDex!</h1>
            <h2>Stay tuned for more :D</h2>
            <img className="pkmnegg" 
                src={pkmnegg} 
                alt="Error..." />
        </div>
    )
}