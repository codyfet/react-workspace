import React from 'react';
import ReactDOM from 'react-dom';

import {Switch, Route} from 'react-router-dom';

import {Search} from './Search.js';
import {Profile} from './Profile.js';
import {Home} from './Home.js';

export const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/search' component={Search} />
                <Route path='/profile' component={Profile} />
            </Switch>
        </div>
    )
}