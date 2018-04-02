import React, {Component} from 'react';
import axios from 'axios';

import 'materialize-css/dist/css/materialize.min.css';
import List from './list';
import AddForm from './addForm';
import listData from '../data/todo_items';
import {
    Route,
    Link
} from 'react-router-dom';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=testuser1234';


class Home extends Component {
        constructor(props){
        super(props);

        this.state={
            list:[]
        }
    }
    componentDidMount(){
        this.getList();
    }
    getList(){
        axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp => {
            this.setState({
                list: resp.data.todos
            });
            console.log('response is: ', resp);
            console.log('state is: ', this.state.list);
        });
    }
    addItem(item){
        axios.post(`${BASE_URL}/todos${API_KEY}`).then(resp => {
            console.log('response of add is: ', resp);
            this.getList();
        });
    }
    deleteItem(item){
        let newList = this.state.list.slice();
        newList.splice(item,1);
        this.setState({
            list:newList
        })

        //axios.delete
        //ulr: http://api.reactprototypes.com/todos/[item id]?key=[your api-key]
    }
    toggleComplete(){
        //axios.put
    
    }
    getOneItem(){
        //axios.get
        //url + id
    }
    
    render() {
        return (
            <div className="container">
                <h1 className='center'>To Do List</h1>
                <AddForm add={this.addItem.bind(this)} />
                <List list={this.state.list} delete={this.deleteItem.bind(this)} />
            </div>
        )
    }
};
export default Home;
