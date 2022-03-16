import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavigationBar } from '../components/navigationbar/NavigationBar'
import { SearchView } from '../view/SearchView'
import { SettingsView } from '../view/SettingsView'
import RoutingPath from './RoutingPath'


export const Routing = () => {

    return (
        <Router>
            <NavigationBar/>
                <Routes>
                    <Route path={RoutingPath.settingsView} element={<SettingsView />} />
                    <Route path={RoutingPath.searchView} element={<SearchView />} />
                </Routes>
        </Router>
    )
}