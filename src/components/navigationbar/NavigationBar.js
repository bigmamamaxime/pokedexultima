/* eslint-disable jsx-a11y/anchor-is-valid */
import "./NavigationBar.css";
import logotype from "../../shared/images/logotype.png";
import { useNavigate } from "react-router-dom";
import RoutingPath from "../../routers/RoutingPath";


export const NavigationBar = () => {
    
    const navigate = useNavigate()  
    return (
        <div className='NavigationBarWrapper'>
            <h1 className='TitleText1'> ULTIDEX</h1>
            <img onClick={() => navigate(RoutingPath.searchView)}className="logotype" src={logotype} 
                alt="Error..." />
            <h1 className='TitleText2'> using PokéAPI :D </h1>
            <div className='DDMenu'>
                <span onClick={() => navigate(RoutingPath.abiDex)}>AbilityDex</span>
                <span onClick={() => navigate(RoutingPath.eggDex)}>EggDex</span>
                <span onClick={() => navigate(RoutingPath.moveDex)}>MoveDex</span>
            </div>
        </div>
    )
}