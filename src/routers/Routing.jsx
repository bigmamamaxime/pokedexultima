import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavigationBar } from '../components/navigationbar/NavigationBar'
import { SearchView } from '../view/SearchView'
import { SettingsView } from '../view/SettingsView'
import { AbiDex } from '../view/AbiDex'
import { MoveDex } from '../view/MoveDex'
import { EggDex } from '../view/EggDex'
import RoutingPath from './RoutingPath'


export const Routing = () => {

    return (
        <Router>
            <NavigationBar/>
                <Routes>
                    <Route path={RoutingPath.searchView} element={<SearchView />} />
                    <Route path={RoutingPath.abiDex} element={<AbiDex />} />
                    <Route path={RoutingPath.moveDex} element={<MoveDex />} />
                    <Route path={RoutingPath.eggDex} element={<EggDex />} />
                    <Route path={RoutingPath.settingsView} element={<SettingsView />} />
                </Routes>
        </Router>
    )
}