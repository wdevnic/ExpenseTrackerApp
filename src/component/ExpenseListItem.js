import React from 'react'
import {Link} from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={"/edit/" + id} activeClassName="is-active">
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
       
    </div>
)


export default ExpenseListItem

