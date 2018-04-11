import React from 'react';
import ReactDOM from 'react-dom';

import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <ul>
            <li><Link to='/'>Домой</Link></li>
            <li><Link to='/search'>Поиск фильмов</Link></li>
            <li><Link to='/profile'>Профиль</Link></li>
        </ul>
    )
}