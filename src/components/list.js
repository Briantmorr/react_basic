import React from 'react';
// console.log('ListData:', listData);
export default props => {
    const listElements = props.list.map((item, index) => {
        return(
            <li className="collection-item" key={index}>
            <div className="col s8">
                {item.title}
            </div>
            <div className="col s4 right-align">
                <button className="btn red darken-3" onClick ={((props.delete.bind(this, index)))}>Delete</button>
            </div>
            </li>
        );
    })
    return(
        <ul className='collection'>
            {listElements}
        </ul>
    );
}