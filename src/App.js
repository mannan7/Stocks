import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import NavBarInput from './components/NavBarInput';
import News from './pages/News';
import Stock from './components/Stock';
import './App.css';


const defaultContextData = {
    dark: false,
    toggle: () => { }
};

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Stock></Stock>
    },
    {
        path: "/News",
        main: () => <News></News>
    }
];

function App() {
    var d = new Date();
    var currentYear = d.getFullYear();
    return (
        <div className="App">
            <Router>
                <div>
                    <NavBarInput
                        inputContentName='myContent'
                    />
                    <Switch>
                        {routes.map((route, index) => (
                            // You can render a <Route> in as many places
                            // as you want in your app. It will render along
                            // with any other <Route>s that also match the URL.
                            // So, a main or breadcrumbs or anything else
                            // that requires you to render multiple things
                            // in multiple places at the same URL is nothing
                            // more than multiple <Route>s.
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                    <footer>
                        <small>
                            Copyright &copy; {currentYear} Cruzer, All rights reserved.
                        </small>
                    </footer>
                </div>
            </Router>
        </div>
    );
}

export default App;