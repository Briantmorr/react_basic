import React from 'react';
import listData from '../data/todo_items';

console.log('ListData: ', listData);

export default props => {
    const listElements = listData.map((item, index) => {
        return <li className="collection-item" key={index}>{item.title}</li>
    })
    console.log(listElements);
    return (
        <ul className="collection">
         {listElements}
         {
             [
                <li className="collection-item" key='6'>test</li>,
                <li className="collection-item" key='9'>zzz</li>
             ]
         }
        </ul>
    )
}