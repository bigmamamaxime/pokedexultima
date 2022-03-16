import "./NavigationBar.css";
import logotype from "../../shared/images/logotype.png";
import { useNavigate } from "react-router-dom";
import RoutingPath from "../../routers/RoutingPath";

export const NavigationBar = () => {

    const navigate = useNavigate()  
    return (
        <div className='NavigationBarWrapper'>
            <img onClick={() => navigate(RoutingPath.searchView)}
                className="logotype" 
                src={logotype} 
                alt="Error..." />
        </div>
    )
}