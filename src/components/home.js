import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import List from './list';
import AddForm from './addForm';
import listData from '../data/todo_items';
import {
    Route,
    Link
} from 'react-router-dom';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: listData
        }
    }
    addItem(item) {
        this.setState({
            list: [item, ...this.state.list]
        })
    }
    render() {
        return (
            <div className="container">
                <h1 className='center'>To Do List</h1>
                <AddForm add={this.addItem.bind(this)} />
                <List list={this.state.list} />
            </div>
        )
    }
};
export default Home;
