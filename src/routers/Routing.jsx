import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom'
import { SearchView } from '../view/SearchView'
import { SettingsView } from '../view/SettingsView'
import RoutingPath from './RoutingPath'


export const Routing = (children) => {

    return (
        <Router>
            {children}
            <Routes>
                <Route path={RoutingPath.settingsView} element={ <SettingsView/> } />
                <Route path={RoutingPath.searchView} element={ <SearchView/> } />
            </Routes>
        </Router>
    )
}