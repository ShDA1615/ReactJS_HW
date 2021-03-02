import { Component } from 'react';
import { Messages } from '../Messages';
import { NestedList } from '../ChatList'
import './App.css'





class App extends Component {
    render() {
        return (<div>

            <header></header>
            <div className="Layout">
                <NestedList />
                <Messages />

            </div>
        </div>
        );
    };
};

export { App };
