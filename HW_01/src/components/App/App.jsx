//import React from 'react';
import { Messages } from '../Messages';

const App = () => {
    //return React.createElement('div',{id : 'test-id'}, 'Hello from React');


    //Нужно установить babel для JSX
    //npm i -D @babel/cli @babel/core @babel/preset-env @babel/preset-react babel-loader
    return <div id='test-id'>
              <h2>Hello from Reac</h2>
              <Messages messages = {['First', 'Second','Third']} />
            { /* <Message text='New 2 messahe' /> */}
            </div>
};

//export default App;

export { App };