import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import List from './list';
import AddForm from './addForm';
import listData from '../data/todo_items';
import Home from './home';
import {
    Route,
    Link
} from 'react-router-dom';
import About from './about';

class App extends Component {
    render() {
        return (
            <div className="container">
                <ul>
                    <li>
                        <Link to="/">StartPage</Link>

                    </li>
                    <li>

                        <Link to="/about">home</Link>
                    </li>
                </ul>

                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
            </div>
        )
    }
};
export default App;
