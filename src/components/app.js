import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios';
import List from './list';
import AddForm from './addForm';
import listData from '../data/todo_items';
import Home from './home';
import {
    Route,
    Link
} from 'react-router-dom';
import About from './about';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=testuser1234';


class App extends Component {
    // constructor(props){
    //     super(props);

    //     this.state={
    //         list:[]
    //     }
    // }
    // componentDidMount(){
    //     this.getList();
    // }
    // getList(){
    //     axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp => {
    //         this.setState({
    //             list: resp.data.todos
    //         });
    //         console.log('response is: ', resp);
    //         console.log('state is: ', this.state.list);
    //     });
    // }
    // addItem(item){
    //     axios.post(`${BASE_URL}/todos${API_KEY}`).then(resp => {
    //         console.log('response of add is: ', resp);
    //         this.getList();
    //     });
    // }
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
